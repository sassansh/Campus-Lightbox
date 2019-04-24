import React from 'react';
import { Button } from 'semantic-ui-react'
import GetHelpModal from '../../components/gethelpmodal/GetHelpModal';
import './style.css';
import '../animate.css';

const style = {
    button: {
        margin: 8,
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 30,
        paddingLeft: 30,
    }
}

class Header extends React.Component {
    onScrollDownClicked = () => {
        this.scrollToContent();
    }

    scrollToContent = () => {
        window.scroll({
            top: 915,
            behavior: 'smooth'
        });
    }

    onFilterClicked = (filterName) => {
        this.props.onPresetFilterChange(filterName);
        this.scrollToContent();
    }

    render() {
        return (
                <section className = "b1">
                    <div className="helpbutton">
                        <div className="modal">
                            <GetHelpModal />
                        </div>
                    </div>
                    <div className = "in1" >
                        <div className = "stuff">
                            <img className="titleImage" resizeMode="center" src={require("./CLB_PrimaryLogo.png")}
                                      alt = "Campus Lightbox"/>
                            <h3>~ Your 1 Stop Guide to UBC Mental Health Resources ~</h3>
                            <div className="select">
                                <h4>Select From One of the Following Options</h4>
                            </div>
                            <span className="resourceButton1 animated fadeIn">
                            <Button inverted size="large" style={style.button}
                                onClick={() => this.onFilterClicked("peer")}>Peer</Button>
                            </span>
                            <span className="resourceButton2 animated fadeIn">
                            <Button inverted size="large" style={style.button}
                                onClick={() => this.onFilterClicked("professional")}>Professional</Button>
                            </span>
                            <span className="resourceButton3 animated fadeIn">
                            <Button inverted size="large" style={style.button}
                                onClick={() => this.onFilterClicked("hotline")}>Phone</Button>
                            </span>
                            <div className="ButtonClass animated fadeInDown">
                                <Button onClick={this.onScrollDownClicked} inverted
                                    circular color='white' icon='angle down' />
                            <h4>Or scroll down for more options</h4>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}

export default Header;
