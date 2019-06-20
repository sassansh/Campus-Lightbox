import React from 'react';
import { Container, Grid, Button } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

import SearchBar from 'components/searchBar/SearchBar';
import Filter from 'components/filter/Filter';
import CardContainer from 'containers/cardContainer/CardContainer';
import Resources from 'static/Resources';
import MediaQueryHelper from 'static/MediaQueryHelper';

import './MainContainer.css';

const styles = {
    filterButton: {
        marginRight: 16,
    }
}


class MainContainer extends React.Component {
    render = () => (
        <Container style={{marginTop: 36}}>
            <div ref={this.props.refProp}></div> 
            <Grid stackable compact="true">
                <Grid.Column width={4}>
                    <MediaQuery minDeviceWidth={MediaQueryHelper.MIN_WIDTH_TABLET}>
                        {/* Laptop */}
                        <SearchBar
                            searchText={this.props.searchText}
                            onSearchTextChange={this.props.onSearchTextChange}
                            onClearSearchText={this.props.onClearSearchText}
                        />
                        <Filter
                            filter={this.props.filter}
                            onFilterChange={this.props.onFilterChange}
                            onClearFilter={this.props.onClearFilter}
                        />
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={MediaQueryHelper.MIN_WIDTH_TABLET}>
                        {/* Mobile and tablet */}
                        <div className="filter-search-container">
                            <Button style={styles.filterButton} color='green' icon='options' />
                            <div className="mobile-search-bar">
                                <SearchBar
                                    inline={true}
                                    searchText={this.props.searchText}
                                    onSearchTextChange={this.props.onSearchTextChange}
                                    onClearSearchText={this.props.onClearSearchText}
                                />
                            </div>
                        </div>
                    </MediaQuery>
                </Grid.Column>
                <Grid.Column width={12}>
                    <CardContainer
                        resources={Resources}
                        filter={this.props.filter}
                        searchText={this.props.searchText}
                    />
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default MainContainer;