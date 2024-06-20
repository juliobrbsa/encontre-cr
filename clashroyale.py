import requests    
import json          

URL_CARTAS = 'https://api.clashroyale.com/v1/cards'         
URL_TORNEIOS = 'https://api.clashroyale.com/v1/tournaments'
URL_TOP_CLANS = 'https://api.clashroyale.com/v1/locations/global/rankings/clans'

headers = {
    'Content-type': 'application/json',   
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImI2OGI4Njc4LTFmYjQtNDExNi1iOWE0LTU3YzU5MzdmMDBkYiIsImlhdCI6MTcxODg1MzQzNywic3ViIjoiZGV2ZWxvcGVyLzk3YTQ3N2U3LWU4NmEtYWE4Yy0zNzI4LWU5ZjE5MDVjNjZhZiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxODUuMTk5LjEwOC4xNTMiLCIxODUuMTk5LjEwOS4xNTMiLCIxODUuMTk5LjExMC4xNTMiLCIxODUuMTk5LjExMS4xNTMiXSwidHlwZSI6ImNsaWVudCJ9XX0.Gr0pDZAHC6YIbZ8DqSPqvK52nI9TfhCWqMpwVPY572aDxBO1ZdIOpKy41BN45gHOG-cWG6hG9v7wWLTtB4np_Q'
}               

def ver_cartas():
    resposta = requests.get(url=URL_CARTAS, headers=headers)   
    if resposta.status_code == 200:
        objeto_itens = json.loads(resposta.text)
        lista_itens = objeto_itens.get('items') 

        for item in lista_itens:
            print(f"Nome: {item['name']}")
            print(f"Nível Máximo: {item['maxLevel']}")
            print('**************************')
    else:
        print("Erro ao acessar a API de cartas.")

def ver_torneios():
    resposta = requests.get(url=URL_TORNEIOS + '?name=a', headers=headers)

    if resposta.status_code == 200:
        objeto_itens = json.loads(resposta.text)
        lista_itens = objeto_itens.get('items')

        for item in lista_itens:
            print(f"Tag: {item['tag']}")
            print(f"Nome: {item['name']}")
            print(f"Status: {item['status']}")
            print(f"Duração: {item['duration']}")
            print('**************************')
    else:
        print("Erro ao acessar a API de torneios.")

def ver_melhores_clas():
    response = requests.get(url=URL_TOP_CLANS, headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        clans = data.get('items', [])

        for rank, clan in enumerate(clans, start=1):
            print(f"Posição: {rank}")
            print(f"Nome do Clã: {clan['name']}")
            print(f"Tag do Clã: {clan['tag']}")
            print(f"Número de Troféus: {clan['clanScore']}")
            print('**************************')
    else:
        print("Erro ao acessar a API de clãs.")

def menu():
    while True:
        print("\nEscolha uma das opções:")
        print("1. Ver cartas")
        print("2. Ver torneios")
        print("3. Listar os melhores clãs")
        print("4. Sair")

        escolha = input("Digite sua escolha: ")

        if escolha == '1':
            ver_cartas()
        elif escolha == '2':
            ver_torneios()
        elif escolha == '3':
            ver_melhores_clas()
        elif escolha == '4':
            print("Saindo do programa.")
            break
        else:
            print("Opção inválida. Por favor, tente novamente.")

if __name__ == "__main__":
    menu()
