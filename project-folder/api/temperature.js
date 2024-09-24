let temperature = 24;

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({ temperature });
    } else if (req.method === 'POST') {
        const { newTemperature } = req.body;
        if (newTemperature >= 18 && newTemperature <= 30) {
            temperature = newTemperature;
            res.status(200).json({ temperature });
        } else {
            res.status(400).json({ error: '온도가 범위를 벗어났습니다.' });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
