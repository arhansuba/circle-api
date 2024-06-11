const fetch = require('node-fetch');

module.exports = async function(req, res) {
    try {
        const response = await fetch('https://api.circle.com/v1/app_id', {
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
            }
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
