/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict';

const xml = require('libxmljs');

module.exports = {
  parseXML: parseXML,
  extractXPath: extractXPath
};

/**
 * Wrap XML parser in a callback
 */
function parseXML(body, callback) {
  try {
    let doc = xml.parseXml(body);
    return callback(null, doc);
  } catch(err) {
    return callback(err, null);
  }
}

// doc is an libxmljs document object
function extractXPath(doc, expr) {
  let result = doc.get(expr).text();
  return result;
}
