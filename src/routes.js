/*
This is the "sitemap" of our app! 
*/

var React = require('react'),
    ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Wrapper = require('./components/wrapper'),
    Home = require('./components/home'),
    Member = require('./components/member'),
    Gallery = require('./components/gallery');

module.exports = (
    <Route path="/" component={Wrapper}>
        <IndexRoute component={Home} />
        <Route path="/member/:name" component={Member} />
        <Route path="/gallery" component={Gallery} />
    </Route>
);
