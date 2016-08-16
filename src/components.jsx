var RandomMessage = React.createClass({
    getInitialState: function () {
        return {message: 'Hello, Universe'};
    },
    onClick: function () {
        var messages = ['Hello, World', 'Hello, Planet', 'Hello, Universe'];
        var randomMessage = messages[Math.floor((Math.random() * 3))];

        this.setState({message: randomMessage});
    },
    render: function () {
        return (
            <div>
                <MessageView message={ this.state.message }/>
                <p>
                    <input type="button" onClick={ this.onClick } value="Change Message"/>
                </p>
            </div>
        );
    }
});

var MessageView = React.createClass({
    render: function () {
        return (
            <p>{ this.props.message }</p>
        );
    }
});

var Hello = React.createClass({
    render: function () {
        var myStyleClass = "exampleCss";
        var targetOfGreeting = "world";
        return <div className={myStyleClass}> Hello, {targetOfGreeting }!</div>;
    }
});

var Iteration = React.createClass({
    render: function () {
        var names = ['Jake', 'Jon', 'Thruster'];
        var namesList = names.map(function (name) {

        });
        return (
            <ul>
                {names.map(function (name, index) {
                    return <li key={ index }> {name} </li>
                })}
            </ul>
        )
    }
});

var Liquid = React.createClass({
    getInitialState: function () {
        return {
            currentTemp: 220
        };
    },
    setTemperature: function (e) {
        // e.target.value is the text from our input
        this.setState({currentTemp: e.target.value});
    },
    render: function () {
        // empty variable that will hold either "Liquid", "Solid", or "Gas"
        var stateOfMatter;

        // If temp is on/below freezing, it's a solid
        if (this.state.currentTemp <= this.props.config.freezing) {
            stateOfMatter = 'Solid';

            // if temp is on/above boiling, it's a gas
        } else if (this.state.currentTemp >= this.props.config.boiling) {
            stateOfMatter = 'Gas';

            // otherwise it's just a liquid
        } else {
            stateOfMatter = 'Liquid';
        }

        return (
            <div>
                <input type="text" onChange={ this.setTemperature } value={ this.state.currentTemp }/>
                <p>At {this.state.currentTemp}ºF, { this.props.config.name } is considered to be a "{stateOfMatter}"
                    state of matter.</p>
            </div>
        );
    }
});

ReactDOM.render(<RandomMessage />, document.getElementById('greeting-div'));
ReactDOM.render(<Hello />, document.getElementById('container'));
ReactDOM.render(<Iteration />, document.getElementById('Iteration'));


// Create object to hold water's name, freezing & boiling points
var water = {
    name: "Water",
    freezing: 32,
    boiling: 212
};
// Create a div for water powered Liquid component and put it in the container div
var waterEl = document.createElement("div");
document.getElementById('container').appendChild(waterEl);
// Render our Liquid component with water's properties!
ReactDOM.render(<Liquid config={ water }/>, waterEl);

// Create object to hold ethanol's name, freezing & boiling points
var ethanol = {
    name: "Ethanol",
    freezing: -173.2,
    boiling: 173.1
};
// Create a div
var ethanolEl = document.createElement("div");
document.getElementById('container').appendChild(ethanolEl);
// Render our Liquid component with ethanol's properties!
ReactDOM.render(<Liquid config={ ethanol }/>, ethanolEl);

var LiquidList = React.createClass({
    render: function() {
        var liquids = this.props.liquids.map(function(liquidObject, index) {
            return <Liquid config={ liquidObject } key={ index } />;
        });

        return (
            <div>
                { liquids }
            </div>
        );
    }
});

// Render objects through LiquidsList
ReactDOM.render(<LiquidList liquids={ [ethanol, water] } />, document.getElementById('containerLiquid'));