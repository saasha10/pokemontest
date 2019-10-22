import React, { Component } from 'react';
//----------------------------------------------------------------------
import Title from './components/Title';
import Card from './components/Card';
//----------------------------------------------------------------------
import Connect from './connect/Connect';
//----------------------------------------------------------------------
const url = "https://pokeapi.co/api/v2/pokemon";
let connect = new Connect();
//----------------------------------------------------------------------
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            data_selected: {},
            show_details: false
        };
    }
    //----------------------------------------------------------------------
    componentDidMount() {
        connect.getData(url, (data) => {
            this.setState({
                data: data.results
            });
        });
    }
    //----------------------------------------------------------------------
    openDetails = (key) => {
        let pokemons = this.state.data;
        let url_details = "https://pokeapi.co/api/v2/pokemon/" + pokemons[key].name;

        connect.getData(url_details, (data_selected) => {
            this.setState(prevState => ({
                show_details: !prevState.show_details,
                data_selected: data_selected
            }))
        });
    }
    //----------------------------------------------------------------------
    render() {
        return (
            <div className="center-align flex-wrap">
                <Title />
                <Card
                    data={this.state.data}
                    openDetails={this.openDetails}
                    data_selected={this.state.data_selected}
                    show_details={this.state.show_details}
                />
            </div>
        );
    }
}

export default Main