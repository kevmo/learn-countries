//
var countries;

var CountryInFocus = React.createClass({});

var CountriesList = React.createClass({});

var CountryRow = React.createClass({});

var CountryBox = React.createClass({});


var SelectCountryTable = React.createClass({
    getInitialState: function(){
        return {
            FocusBar:
        }
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
