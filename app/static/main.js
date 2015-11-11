var COUNTRIES;

var CountryInFocusHeader = React.createClass({
    render: function(){
        if (this.props.country){
            return (<h2>{this.props.country.name}</h2>)
        }

        return (<h2></h2>)
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
    render: function(){
        if (this.props.country){
            return (<div>
                <span>{this.props.country.other}</span>
            </div>)
        }
        return (<div></div>)
    }
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
    },

    render: function(){
        return (
            <div>
                <CountryInFocusHeader
                    country={this.state.countryInFocus}
                />
                <CountriesList
                    countries={this.props.countries}
                    countryInFocus={this.state.countryInFocus}
                    onUserInput={this.onCountrySelect}
                />
                <CountryInFocusBox
                    country={this.state.countryInFocus}
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
