import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';

import ChatsCtrl from '../controllers/chats.controller';
import RoutesConfig from '../routes';
import CalendarFilter from '../filters/calendar.filter';

const App = 'Whuzzapp';

Angular.module(App, [
    'angular-meteor',
    'ionic'
]);

new Loader(App).load(ChatsCtrl).load(CalendarFilter).load(RoutesConfig);

if (Meteor.isCordova) {
    Angular.element(docuq).on('deviceready', onReady);
} else {
    Angular.element(document).ready(onReady);
}

function onReady() {
    Angular.bootstrap(document, [App]);
}