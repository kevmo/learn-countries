var COUNTRIES;

var CountryInFocusHeader = React.createClass({
    render: function(){
        return (<h2>{this.props.name}</h2>)
    }
});

var CountriesList = React.createClass({
    render: function(){
        return (
            <ul>
            {this.props.countries.map(function(country, i){
                return <CountryRow
                    key={i}
                    country={country}
                    onUserInput={this.props.onUserInput}
                />
            }, this)}
            </ul>
        )
    }
});

var CountryRow = React.createClass({
    handleClick: function(){
        this.props.onUserInput(this.props.country);
    },

    render: function(){
        return (
            <li onClick={this.handleClick}>{this.props.country.name}</li>
        )
    }
});

var CountryInFocusBox = React.createClass({
    render: function(){}
});


var SelectCountryTable = React.createClass({
    getInitialState: function(){
        return {
            countryInFocus: null,
        }
    },

    onCountrySelect: function(selectedCountry){
        this.setState({
            countryInFocus: selectedCountry
        });
        console.log("w00t:", this.state.countryInFocus);
    },

    render: function(){
        return (
            <div>
                <CountriesList
                    countries={this.props.countries}
                    countryInFocus={this.state.countryInFocus}
                    onUserInput={this.onCountrySelect}
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
