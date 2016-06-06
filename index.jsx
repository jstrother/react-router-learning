var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');

var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;

var routes = (
	<Router history={hashHistory}>
		<Route path="/contacts" component={ContactListContainer} />
	</Router>
);

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
				{props.name}
			</strong>
			&nbsp;
			{props.phoneNumber}
		</div>
	);
};

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
};

var ContactListContainer = function() {
	console.log('ContactListContainer')
	return <ContactList contacts={CONTACTS} />;
};

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(routes, document.getElementById('app'));
});