"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __importStar(require("body-parser"));
const path = __importStar(require("path"));
const api_doc_1 = require("./api/api-doc");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_openapi_1 = require("express-openapi");
const app = express_1.default();
app.use(cors_1.default());
app.use(bodyParser.json());
express_openapi_1.initialize({
    app,
    apiDoc: api_doc_1.apiDoc,
    paths: path.join(__dirname, 'api', 'paths'),
});
app.get('/', (_req, res) => {
    res.send('Alive!');
});
console.log('OpenAPI initialized');
console.log('Server is up and running');
module.exports = app;
app.listen(3000);
//# sourceMappingURL=app.js.map