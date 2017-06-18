import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import { Meteor } from 'meteor/meteor';

const App = 'Whuzzapp';

Angular.module(App, [
    'angular-meteor',
    'ionic'
]);

if (Meteor.isCordova) {
    Angular.element(docuq).on('deviceready', onReady);
} else {
    Angular.element(document).ready(onReady);
}

function onReady() {
    Angular.bootstrap(document, [App]);
}