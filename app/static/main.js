//
var countries;

var CountryInFocus = React.createClass({
    render: function(){
        return (<h2>{this.props.name}</h2>)
    }
});

var CountriesList = React.createClass({
    render: function(){
        var rows = [];
        this.props.countries.forEach(function(country){
            
        })
    }
});

var CountryRow = React.createClass({
    render: function(){
        return (
            <li>this.props.country.name</li>
        )
    }
});

var CountryBox = React.createClass({});


var SelectCountryTable = React.createClass({
    getInitialState: function(){
        return {
            country_in_focus: '',
        }
    },

    render: function(){
        return (
            <div>
                <CountryInFocus
                />
            </div>
        )
    }
});


// Get country data
$.get('https://restcountries.eu/rest/v1/all', function(resp){
    countries = resp;
    console.log(countries);
});

// first take a nap... then fire ze missile!
ReactDOM.render(
    <SelectCountryTable countries={countries} />
    document.getElementById('container')
);
