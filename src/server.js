const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables from .env.local file
dotenv.config({ path: '.env.local' });

const app = express();
app.use(bodyParser.json());

const getAppId = require('./src/app/api/get_app_id/route');
const createNewUser = require('./src/app/api/create_a_new_user/route');
const acquireSessionToken = require('./src/app/api/acquire_session_token/route');
const initializeUser = require('./src/app/api/initialize_user/route');

app.get('/api/get_app_id', getAppId);
app.post('/api/create_a_new_user', createNewUser);
app.post('/api/acquire_session_token', acquireSessionToken);
app.post('/api/initialize_user', initializeUser);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
