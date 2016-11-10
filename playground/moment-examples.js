var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1478800763;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ H:mm A'));

console.log('current moment', currentMoment.format('MMMM Do, YYYY @ H:mm A'));
