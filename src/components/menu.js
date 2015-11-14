var React = require('react'),
    MenuItem = require('./menuItem'),
    _ = require('lodash')
    NavBar = require('react-bootstrap').Navbar,
    NavBrand = require('react-bootstrap').NavBrand,
    Nav = require('react-bootstrap').Nav,
    History = require('react-router').History;

var Menu = React.createClass({
    
    mixins: [History],
    
    getDefaultProps: function(){
        return {
            menuItems: [
                {
                    key: 'home',
                    path: '#/',
                    linkText: 'Home',
                    isIndexLink: true
                },
                {
                    key: 'members',
                    path: '#/members/',
                    linkText: 'Roster'
                },
                {
                    key: 'actions',
                    path: '#/actions/',
                    linkText: 'Deeds'
                },
                {
                    key: 'advice',
                    path: '#/advice/',
                    linkText: 'Advice'
                },
                {
                    key: 'gallery',
                    path: '#/gallery/',
                    linkText: 'Gallery'
                }
            ]
        }
    },
    
	render: function(){
        
    var menuItems = this.props.menuItems.map(function(menuItem){
        return React.createElement(MenuItem, menuItem);
    });
        
    return (
            <NavBar>
                <NavBrand><a className="navbar-brand" href="#">RIA course member guild 2015</a></NavBrand>
                <Nav>
                    {menuItems}
                </Nav>
            </NavBar>
        );
	}
});

module.exports = Menu;