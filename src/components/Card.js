import React, { Component } from 'react';
//----------------------------------------------------------------------
const url_photo = "http://pokestadium.com/sprites/xy/";
const extension_photo = ".gif";
//----------------------------------------------------------------------
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    //----------------------------------------------------------------------
    createCard = (data) => {
        let result = [];

        for (let i = 0; i < data.length; i++) {
            result.push(
                <div className="card" key={i} count={i} onClick={this.openDetails}>
                    <div className="container_img">
                        <img src={url_photo + data[i].name + extension_photo} alt="Avatar" className="padding_img" />
                    </div>
                    <div className="container_title">
                        <h4 className="title_card">{data[i].name}</h4>
                    </div>
                </div>
            );
        }

        return result;
    }
    //----------------------------------------------------------------------
    createCardDetails = (data_selected) => {
        let result = [];

        result.push(
            <div className="card_detail" key={1}>
                <div>
                    <div>
                        <p className="close_detail right-align" count={1} onClick={this.openDetails}>X</p>
                    </div>
                    <div className="container_img">
                        <img src={url_photo + data_selected.name + extension_photo} alt="Avatar" className="padding_img" />
                    </div>
                </div>
                <div className="container_title">
                    <h4 className="title_card">{data_selected.name}</h4>
                </div>
                <div className="container_details left-align">
                    <div>
                        <b>ID: </b> {data_selected.id}
                    </div>
                    <div>
                        <b>Type: </b> {data_selected.types[0].type.name}
                    </div>
                    <div>
                        <b>Height: </b> {data_selected.height}
                    </div>
                    <div>
                        <b>Habilities: </b>
                        <ul className="nomargin">
                            {this.createHabilities(data_selected.abilities)}
                        </ul>
                    </div>
                </div>
            </div>
        );

        return result;
    }
    //----------------------------------------------------------------------
    createHabilities = (abilities) => {
        let result = [];
        for (let i = 0; i < abilities.length; i++) {
            result.push(
                <li key={i}>
                    {abilities[i].ability.name}
                </li>
            );
        }

        return result;
    }
    //----------------------------------------------------------------------
    openDetails = (event) => {
        this.props.openDetails(event.currentTarget.getAttribute("count"));
    }
    //----------------------------------------------------------------------
    render() {
        return (
            <React.Fragment>
                {this.props.show_details ?
                    this.createCardDetails(this.props.data_selected)
                    :
                    this.createCard(this.props.data)}
            </React.Fragment>
        );
    }

}

export default Card;