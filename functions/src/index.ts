/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";


// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const pug = require('pug');

exports.test = onRequest((Request, response) => {
    let template = pug.compileFile('views/test.pug');
    let markup = template({
        name: Request.query.name,
        major: Request.query.major,
        quote: Request.query.quote,
    });
    response.writeHead(200, {'content-type' : 'text/html'});
    response.end(markup);
})
