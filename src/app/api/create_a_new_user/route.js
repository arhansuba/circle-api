const fetch = require('node-fetch');

module.exports = async function(req, res) {
    const { userId } = req.body;

    try {
        const response = await fetch('https://api.circle.com/v1/users', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId })
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
