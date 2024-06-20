const express = require('express');
const fetch = require('node-fetch'); // pacote para fazer requisições HTTP

const app = express();
const PORT = 3000;

// Rota para obter as cartas
app.get('/cartas', async (req, res) => {
    try {
        const response = await fetch('https://api.clashroyale.com/v1/cards', {
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjU4ODEzNmJiLTVlNjUtNDEzYy1hYmUzLWM3YzhhZmZhMTE0ZiIsImlhdCI6MTcxODMxNzk2Niwic3ViIjoiZGV2ZWxvcGVyLzk3YTQ3N2U3LWU4NmEtYWE4Yy0zNzI4LWU5ZjE5MDVjNjZhZiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0NS4xNjEuNzUuMTE5Il0sInR5cGUiOiJjbGllbnQifV19.CcChuTBxJGr1JkCF50YzVmWzx7BxC-YPxMS9IOddYGGOVHVcRf_zy2K08T6HDV87uQ3TjJ_FzVM5IJFGu-4o-w'
            }
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar as cartas');
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Erro ao acessar a API:', error.message);
        res.status(500).json({ error: 'Erro ao buscar as cartas' });
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
