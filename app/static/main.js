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
            rows.push(<CountryRow country={country} />)
        })

        return (
            <ul>{rows}</ul>
        )
    }
});

var CountryRow = React.createClass({
    render: function(){
        return (
            <li>{this.props.country.name}</li>
        )
    }
});

var CountryBox = React.createClass({
    render: function(){}
});


var SelectCountryTable = React.createClass({
    getInitialState: function(){
        return {
            country_in_focus: '',
        }
    },

    render: function(){
        console.log(this.props.countries);
        return (
            <div>
                <CountriesList
                    countries={this.props.countries}
                />
            </div>
        )
    }
});


// Get country data
$.get('https://restcountries.eu/rest/v1/all', function(resp){
    COUNTRIES = resp;
    console.log("COUNTRIES:");
    console.dir(COUNTRIES);
    ReactDOM.render(
        <SelectCountryTable countries={COUNTRIES} />,
        document.getElementById('container')
    );
});


// first take a nap... then fire ze missile!
