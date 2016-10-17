import 'core-js/client/shim';
import 'reflect-metadata';
import 'intl';
import 'ie-shim';
require('zone.js/dist/zone');
require('intl/locale-data/jsonp/en.js');

import 'ts-helpers';

if (process.env.ENV === 'build') {
  // Production

} else {
  // Development

  Error['stackTraceLimit'] = Infinity;

  require('zone.js/dist/long-stack-trace-zone');
}
