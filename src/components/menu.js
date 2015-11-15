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
                    path: '/',
                    linkText: 'Home',
                    isIndexLink: true
                },
                {
                    key: 'members',
                    path: '/members/',
                    linkText: 'Roster',
                    isIndexLink: false
                },
                {
                    key: 'actions',
                    path: '/actions/',
                    linkText: 'Deeds',
                    isIndexLink: false
                },
                {
                    key: 'advice',
                    path: '/advice/',
                    linkText: 'Advice',
                    isIndexLink: false
                },
                {
                    key: 'gallery',
                    path: '/gallery/all',
                    linkText: 'Gallery',
                    isIndexLink: false
                }
            ]
        }
    },
    
	render: function(){
        
    var isActive,
        self = this,
        menuItems = this.props.menuItems.map(function(menuItem){
            isActive = self.history.isActive(menuItem.path, {}, menuItem.isIndexLink); 
            return React.createElement(MenuItem, _.merge({isActive: isActive}, menuItem))
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