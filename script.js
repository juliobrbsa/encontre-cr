const menu = document.getElementById('menu');
const conteudo = document.getElementById('conteudo');

menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault(); // Evita o comportamento padrão de navegação do link

        const escolha = e.target.id;
        switch (escolha) {
            case 'ver-cartas':
                verCartas();
                break;
            case 'ver-torneios':
                verTorneios();
                break;
            case 'ver-melhores-clas':
                verMelhoresClas();
                break;
            case 'sair':
                console.log('Saindo do programa.');
                break;
            default:
                console.log('Opção inválida.');
        }
    }
});

function verCartas() {
    fetch('https://api.clashroyale.com/v1/cards', {
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjU4ODEzNmJiLTVlNjUtNDEzYy1hYmUzLWM3YzhhZmZhMTE0ZiIsImlhdCI6MTcxODMxNzk2Niwic3ViIjoiZGV2ZWxvcGVyLzk3YTQ3N2U3LWU4NmEtYWE4Yy0zNzI4LWU5ZjE5MDVjNjZhZiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0NS4xNjEuNzUuMTE5Il0sInR5cGUiOiJjbGllbnQifV19.CcChuTBxJGr1JkCF50YzVmWzx7BxC-YPxMS9IOddYGGOVHVcRf_zy2K08T6HDV87uQ3TjJ_FzVM5IJFGu-4o-w'
        }
    })
   .then(response => response.json())
   .then(data => {
        const cartas = data.items;
        conteudo.innerHTML = '';
        cartas.forEach((carta) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h2>${carta.name}</h2>
                <p>Nível Máximo: ${carta.maxLevel}</p>
            `;
            conteudo.appendChild(card);
        });
    })
   .catch(error => console.error('Erro ao acessar a API de cartas:', error));
}

function verTorneios() {
    fetch('https://api.clashroyale.com/v1/tournaments?name=a', {
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjU4ODEzNmJiLTVlNjUtNDEzYy1hYmUzLWM3YzhhZmZhMTE0ZiIsImlhdCI6MTcxODMxNzk2Niwic3ViIjoiZGV2ZWxvcGVyLzk3YTQ3N2U3LWU4NmEtYWE4Yy0zNzI4LWU5ZjE5MDVjNjZhZiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0NS4xNjEuNzUuMTE5Il0sInR5cGUiOiJjbGllbnQifV19.CcChuTBxJGr1JkCF50YzVmWzx7BxC-YPxMS9IOddYGGOVHVcRf_zy2K08T6HDV87uQ3TjJ_FzVM5IJFGu-4o-w'
        }
    })
   .then(response => response.json())
   .then(data => {
        const torneios = data.items;
        conteudo.innerHTML = '';
        torneios.forEach((torneio) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h2>${torneio.name}</h2>
                <p>Tag: ${torneio.tag}</p>
                <p>Status: ${torneio.status}</p>
                <p>Duração: ${torneio.duration}</p>
            `;
            conteudo.appendChild(card);
        });
    })
   .catch(error => console.error('Erro ao acessar a API de torneios:', error));
}

function verMelhoresClas() {
    fetch('https://api.clashroyale.com/v1/locations/global/rankings/clans', {
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjU4ODEzNmJiLTVlNjUtNDEzYy1hYmUzLWM3YzhhZmZhMTE0ZiIsImlhdCI6MTcxODMxNzk2Niwic3ViIjoiZGV2ZWxvcGVyLzk3YTQ3N2U3LWU4NmEtYWE4Yy0zNzI4LWU5ZjE5MDVjNjZhZiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0NS4xNjEuNzUuMTE5Il0sInR5cGUiOiJjbGllbnQifV19.CcChuTBxJGr1JkCF50YzVmWzx7BxC-YPxMS9IOddYGGOVHVcRf_zy2K08T6HDV87uQ3TjJ_FzVM5IJFGu-4o-w'
        }
    })
   .then(response => response.json())
   .then(data => {
        const clans = data.items;
        conteudo.innerHTML = '';
        clans.forEach((clan, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h2>Posição ${index + 1}</h2>
                <p>Nome do Clã: ${clan.name}</p>
                <p>Tag do Clã: ${clan.tag}</p>
                <p>Número de Troféus: ${clan.clanScore}</p>
            `;
            conteudo.appendChild(card);
        });
    })
   .catch(error => console.error('Erro ao acessar a API de clãs:', error));
}
