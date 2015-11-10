//
var COUNTRIES;

var CountryInFocus = React.createClass({
    render: function(){
        return (<h2>{this.props.name}</h2>)
    }
});

var CountriesList = React.createClass({
    render: function(){
        var rows = [];
        this.props.countries.forEach(function(country){
            rows.push(<CountryRow key={country.id} country={country} />)
        })

        return (
            <ul>{rows}</ul>
        )
    }
});

var CountryRow = React.createClass({
    handleClick: function(e){
        console.log("HI");
        // this.setState({country_in_focus: c});
        // console.log(this.state.country_in_focus);
    },

    render: function(){
        return (
            <li onclick={this.handleClick}>{this.props.country.name}</li>
        )
    }
});

var CountryBox = React.createClass({
    render: function(){}
});


var SelectCountryTable = React.createClass({
    getInitialState: function(){
        return {
            country_in_focus: null,
        }
    },

    render: function(){
        console.log("state", this.state.country_in_focus);
        return (
            <div>
                <CountriesList
                    countries={this.props.countries}
                />
            </div>
        )
    }
});


// Get country data, then render that DOM!
$.get('https://restcountries.eu/rest/v1/all', function(resp){
    COUNTRIES = resp;
    ReactDOM.render(
        <SelectCountryTable countries={COUNTRIES} />,
        document.getElementById('container')
    );
});
