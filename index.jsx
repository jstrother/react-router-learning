var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');

var IndexRoute = router.IndexRoute;
var Link = router.Link;

var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;

var App = function(props) {
	return (
		<div>
			<h1>
				Contacts App
			</h1>
			<diV>
				{props.children}
			</diV>
		</div>
	);
};

var CONTACTS = {
	0: {
		id: 0,
		name: 'Sarah Hughes',
		phoneNumber: '01234 567890'
	},
	1: {
		id: 1,
		name: 'Tim Taylor',
		phoneNumber: '012345 678901'
	},
	2: {
		id: 2,
		name: 'Sam Smith',
		phoneNumber: '03456 789012'
	}
};

var Contact = function(props) {
	console.log('Contact');
	return (
		<div>
			<strong>
				<Link to={'/contacts/' + props.id}>
					{props.name}
				</Link>
			</strong>
			&nbsp;
			{props.phoneNumber}
		</div>
	);
};

var ContactContainer = function(props) {
	var contact = CONTACTS[props.params.contactId];
	return <Contact id={contact.id} name={contact.name} phoneNumber={contact.phoneNumber} />
}

var ContactList = function(props) {
	console.log('ContactList');
	var contacts = Object.keys(props.contacts).map(function(contactId, index) {
		var contact = props.contacts[contactId];
		return (
			<li key={index}>
				<Contact id={contact.id} name={contact.name} phoneNumber={contact.phoneNumber} />
			</li>
		);
	});
	return (
		<ul>
			{contacts}
		</ul>
	);
};

var ContactListContainer = function() {
	console.log('ContactListContainer')
	return <ContactList contacts={CONTACTS} />;
};

var routes = (
	<Router history={hashHistory}>
		<Route path="/contacts" component={App}>
			<IndexRoute component={ContactListContainer} />
			<Route path=":contactId" component={ContactContainer} />
		</Route>
	</Router>
);

document.addEventListener('DOMContentLoaded', function() {
	console.log('DOMContentLoaded');
	ReactDOM.render(routes, document.getElementById('app'));
});