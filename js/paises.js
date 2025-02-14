const TABELA_PAISES = document.getElementById('table-paises');

let itens = [
    {
        id: 1,
        nome: 'Brasil',
    },
    {
        id: 2,
        nome: 'Espanha',
    },
    {
        id: 3,
        nome: 'Dinamarca',
    },
    {
        id: 4,
        nome: 'Reino Unido',
    }
];

itens.forEach(addLinha);

function addLinha(cada_item){
    TABELA_PAISES.innerHTML += `
    <tr>
        <td>${cada_item.id}</td>
        <td>${cada_item.nome}</td>
        <td>
            <a href="#" class="btn btn-outline-warning btn-sm">
                Editar
            </a>
            <a href="#" class="btn btn-outline-danger btn-sm">
                Excluir
            </a>
        </td>
    </tr>
    `;
}
