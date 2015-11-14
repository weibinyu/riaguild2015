var React = require('react')
    NavItem = require('react-bootstrap').NavItem;

var MenuItem = React.createClass({
    
    render: function(){

    return (
            <NavItem href={'#' + this.props.path} active={this.props.isActive}>{this.props.linkText}</NavItem>
        );
	}
});

module.exports = MenuItem;