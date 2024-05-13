Este arquivo é o ponto de entrada do servidor backend, construído com o framework Express.js usando TypeScript. Ele define rotas para gerenciar operações CRUD em hotéis e reservas.

Rotas:
GET /reservas: Esta rota retorna todas as reservas de quartos disponíveis nos hotéis. Ela acessa os dados do servidor remoto para obter as informações de reserva.

GET /reservas/:id/:numquarto: Esta rota retorna informações detalhadas sobre um quarto específico em um hotel identificado pelo ID do hotel e pelo número do quarto. Ela acessa os dados do servidor remoto para obter as informações específicas do quarto.

POST /reservas: Esta rota cria uma nova reserva para um quarto em um hotel. Ela recebe os detalhes da reserva no corpo da solicitação e os envia para o servidor remoto para processamento e armazenamento.

PUT /reservas/:id: Esta rota atualiza uma reserva existente em um quarto de hotel. Ela recebe os detalhes atualizados da reserva no corpo da solicitação e os envia para o servidor remoto para atualização.

Uso:
Antes de iniciar o servidor, é necessário instalar as dependências. Execute npm install para instalar todas as dependências listadas no arquivo package.json.
Após a instalação das dependências, execute npm start para iniciar o servidor backend. O servidor será iniciado na porta 3332.
Frontend - Angular
hoteis.component.ts
Este arquivo define o componente Angular responsável por exibir a lista de hotéis. Ele interage com o serviço ServiceBase para buscar os hotéis do servidor e exibi-los na interface do usuário.

Métodos:
ngOnInit(): Este método é executado quando o componente é inicializado. Ele busca todos os hotéis usando o serviço ServiceBase e os armazena no array hoteis.

openDialog(hotel: Hotel): Este método é chamado quando um hotel é selecionado. Ele abre um diálogo de reserva, permitindo que o usuário reserve quartos no hotel selecionado.

Propriedades:
hoteis: Um array de objetos Hotel, que armazena os hotéis recuperados do servidor e exibidos na interface do usuário.

displayedColumns: Uma matriz de strings que define as colunas a serem exibidas na tabela de hotéis.

clickedRows: Um conjunto de objetos Hotel, que armazena os hotéis clicados pelo usuário.

Uso:
Certifique-se de ter o Angular CLI e as dependências do projeto instaladas. Se necessário, execute npm install -g @angular/cli para instalar o Angular CLI globalmente.
Após a instalação, execute ng serve para iniciar o servidor de desenvolvimento do Angular. O aplicativo será executado na porta 4200.
