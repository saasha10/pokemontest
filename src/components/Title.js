import React, { Component } from 'react';
//----------------------------------------------------------------------
import Title_Photo from '../img/pokemon_title.png';
//----------------------------------------------------------------------
class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    //----------------------------------------------------------------------
    render() {
        return (
            <React.Fragment>
                <img className="pokemon_title" id="pokemon_title" src={Title_Photo} alt="title" />
            </React.Fragment>
        );
    }
}

export default Title;