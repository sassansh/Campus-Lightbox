import React from 'react';
import { Button, Card, Image, Icon, Popup } from 'semantic-ui-react';
import 'components/infoCard/InfoCard.css';
import Tags from 'static/Tags';

import _ from 'underscore';
import moment from 'moment';

const style={
    infoCard: {
        width: 260,
    },
    link: {
        color: 'blue',
    }
}

class InfoCard extends React.Component {
    constructor(props) {
        super(props);

        this.allTags = Tags.getAllTags();

        this.state = {
            side: "front",
        }
    }

    onContactButtonClick = () => {
        this.setState({side: "back"});
    }

    onCloseButtonClick = () => {
        this.setState({side: "front"});
    }

    renderFront = () => {
        return [
            <Image
                src={this.props.logo || 'https://i0.wp.com/www.littlebitesofbeauty.com/wp-content/uploads/2015/06/default-placeholder.png?zoom=2&resize=1170%2C658&ssl=1'}
                size='medium'
                key="front-image"
                style={{objectFit: "cover", height: 200}}
            />,
            <Card.Content key="front-content">
                <Card.Header>{this.props.name}</Card.Header>
                <Card.Description>{this.props.description}</Card.Description>
            </Card.Content>,
            <Card.Content key="front-extra" extra>
                {this.props.hours && this.renderTodayHours()}
                <Card.Meta style={{marginTop: 8}}>
                    {_.map(this.props.tags, tag => this.renderTagIcon(tag))}
                </Card.Meta>
            </Card.Content>
        ];
    }

    renderTodayHours = () => {
        // Check if resource is 24/7
        if (this.props.tags.indexOf('allday') > -1) {
            return (
                <Card.Meta>
                    <Icon name='circle' color="green"/>
                    Open 24 / 7
                    <Button icon='caret down' size='mini' basic style={{padding: 4, marginLeft: 6}} onClick={this.onContactButtonClick}/>
                </Card.Meta>
            );
        }

        const todayDay = moment().format('dddd').toLowerCase();

        if (this.props.hours[todayDay]) {
            const hoursString = this.props.hours[todayDay];

            const openString = hoursString.split('-')[0];
            const closeString = hoursString.split('-')[1];

            const todayOpen = moment(openString, "h:mma");
            const todayClose = moment(closeString, "h:mma");
            const isOpen = moment().isBetween(todayOpen, todayClose);

            const iconColor = isOpen ? 'green' : 'red';

            return (
                <Card.Meta>
                    <Icon name='circle' color={iconColor}/>
                    {this.props.hours[todayDay]}
                    <Button icon='caret down' size='mini' basic style={{padding: 4, marginLeft: 6}} onClick={this.onContactButtonClick}/>
                </Card.Meta>
            );
        } else {
            if (this.props.hours.others) {
                // Resource has alternative hours
                return (
                    <Card.Meta>
                        View Hours Information
                        <Button icon='caret down' size='mini' basic style={{padding: 4, marginLeft: 6}} onClick={this.onContactButtonClick}/>
                    </Card.Meta>
                );
            } else {
                // Resource is closed
                return (
                    <Card.Meta>
                        <Icon name='circle' color="red"/>
                        Closed
                        <Button icon='caret down' size='mini' basic style={{padding: 4, marginLeft: 6}} onClick={this.onContactButtonClick}/>
                    </Card.Meta>
                );
            }
        }
    }

    renderTagIcon = (tag) => {
        const displayName = this.allTags[tag].displayName;
        const iconName = this.allTags[tag].iconName;

        return <Popup
            trigger={<Icon name={iconName} />}
            content={displayName}
            key={tag}
            size='small'
            basic
        />;
    }

    renderName = () => {
        return (
            <Card.Content key="back-header">
                <Card.Header style={{color: '#0E6EB8', float: 'left'}}>{this.props.name}</Card.Header>
            </Card.Content>
        );
    }

    renderPhoneNumber = () => {
        return (
            <Card.Content key="back-contact">
                <Card.Header>Phone number</Card.Header>
                <Card.Description>{this.props.phone}</Card.Description>
            </Card.Content>
        );
    }

    renderAddress = () => {
        return (
            <Card.Content key="back-address">
                <Card.Header>Address</Card.Header>
                {this.props.address && <Card.Description>{this.props.address}</Card.Description>}
            </Card.Content>
        );
    }

    renderSocialAndEmail = () => {
        // TODO: make hyperlinks
        return (
            <Card.Content key="back-social-email">
                <Card.Header>Social</Card.Header>
                <Card.Description>
                    <Button.Group basic size="tiny">
                        {this.props.email && <Popup trigger={<Button icon='mail outline'/>}
                            content='Copy email to clipboard' basic size='small'/>}
                        {this.props.social && this.props.social.website && <Popup trigger={<Button icon='world'/>}
                            content='Visit website' basic size='small'/>}
                        {this.props.social && this.props.social.facebook && <Popup trigger={<Button icon='facebook'/>}
                            content='Visit Facebook' basic size='small'/>}
                    </Button.Group>
                </Card.Description>
            </Card.Content>
        );
    }

    renderHours = () => {
        if (!this.props.hours) {
            return;
        }

        const content = [];

        if (this.props.hours.others) {
            content.push(<Card.Description key='others'>{this.props.hours.others}</Card.Description>);
        } else {
            const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
            _.each(days, (dayInWeek, index) => {
                const hoursForDay = this.props.hours[dayInWeek];
                const isToday = (index + 1) === moment().isoWeekday();

                content.push(
                    <Card.Description key={dayInWeek}>
                        {this._capitalize(dayInWeek).slice(0, 3)}: {!hoursForDay ? 'Closed' : hoursForDay}
                        {isToday && <Icon name='star' size='small' style={{marginLeft:4}}/>}
                    </Card.Description>
                );
            });
        }

        return (
            <Card.Content key="back-hours">
                <Card.Header>Hours of Operation</Card.Header>
                {content}
            </Card.Content>
        );
    }

    _capitalize = (text) => {
        if (!text || text.length < 1) {
            return;
        } else {
            return text.charAt(0).toUpperCase() + text.slice(1);
        }
    }

    renderBack = () => {
        const views = [this.renderName()];

        if (this.props.phone) {
            views.push(this.renderPhoneNumber());
        }

        if (this.props.address) {
            views.push(this.renderAddress());
        }

        if (this.props.email || this.props.social) {
            views.push(this.renderSocialAndEmail());
        }

        if (this.props.hours) {
            views.push(this.renderHours());
        }

        return views;
    }

    render = () => (
        <Card style={style.infoCard}>
            {this.state.side === "front" ? this.renderFront() : this.renderBack()}
            {
                this.state.side === "front" ? 
                    <Button attached='bottom' onClick={this.onContactButtonClick}>View Details</Button> : 
                    <Button attached='bottom' icon onClick={this.onCloseButtonClick}><Icon name='close'/> Go Back</Button>
            }
        </Card>
    )
}

export default InfoCard;