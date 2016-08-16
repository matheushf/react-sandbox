'use strict';

var RandomMessage = React.createClass({
    displayName: 'RandomMessage',

    getInitialState: function getInitialState() {
        return { message: 'Hello, Universe' };
    },
    onClick: function onClick() {
        var messages = ['Hello, World', 'Hello, Planet', 'Hello, Universe'];
        var randomMessage = messages[Math.floor(Math.random() * 3)];

        this.setState({ message: randomMessage });
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(MessageView, { message: this.state.message }),
            React.createElement(
                'p',
                null,
                React.createElement('input', { type: 'button', onClick: this.onClick, value: 'Change Message' })
            )
        );
    }
});

var MessageView = React.createClass({
    displayName: 'MessageView',

    render: function render() {
        return React.createElement(
            'p',
            null,
            this.props.message
        );
    }
});

var Hello = React.createClass({
    displayName: 'Hello',

    render: function render() {
        var myStyleClass = "exampleCss";
        var targetOfGreeting = "world";
        return React.createElement(
            'div',
            { className: myStyleClass },
            ' Hello, ',
            targetOfGreeting,
            '!'
        );
    }
});

var Iteration = React.createClass({
    displayName: 'Iteration',

    render: function render() {
        var names = ['Jake', 'Jon', 'Thruster'];
        var namesList = names.map(function (name) {});
        return React.createElement(
            'ul',
            null,
            names.map(function (name, index) {
                return React.createElement(
                    'li',
                    { key: index },
                    ' ',
                    name,
                    ' '
                );
            })
        );
    }
});

var Liquid = React.createClass({
    displayName: 'Liquid',

    getInitialState: function getInitialState() {
        return {
            currentTemp: 220
        };
    },
    setTemperature: function setTemperature(e) {
        // e.target.value is the text from our input
        this.setState({ currentTemp: e.target.value });
    },
    render: function render() {
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

        return React.createElement(
            'div',
            null,
            React.createElement('input', { type: 'text', onChange: this.setTemperature, value: this.state.currentTemp }),
            React.createElement(
                'p',
                null,
                'At ',
                this.state.currentTemp,
                'ºF, ',
                this.props.config.name,
                ' is considered to be a "',
                stateOfMatter,
                '" state of matter.'
            )
        );
    }
});

ReactDOM.render(React.createElement(RandomMessage, null), document.getElementById('greeting-div'));
ReactDOM.render(React.createElement(Hello, null), document.getElementById('container'));
ReactDOM.render(React.createElement(Iteration, null), document.getElementById('Iteration'));

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
ReactDOM.render(React.createElement(Liquid, { config: water }), waterEl);

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
ReactDOM.render(React.createElement(Liquid, { config: ethanol }), ethanolEl);

var LiquidList = React.createClass({
    displayName: 'LiquidList',

    render: function render() {
        var liquids = this.props.liquids.map(function (liquidObject, index) {
            return React.createElement(Liquid, { config: liquidObject, key: index });
        });

        return React.createElement(
            'div',
            null,
            liquids
        );
    }
});

// Render objects through LiquidsList
ReactDOM.render(React.createElement(LiquidList, { liquids: [ethanol, water] }), document.getElementById('containerLiquid'));