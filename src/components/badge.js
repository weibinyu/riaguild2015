var React = require("react"),
	Icon = require("./icon");

var Badge = React.createClass({
	render() {
		return (
			<span className="badge">
				<Icon icon={this.props.icon} />
				<p className="badge-name">{this.props.username.split(" ")[0]}</p>
			</span>
		);
	}
});

module.exports = Badge;
