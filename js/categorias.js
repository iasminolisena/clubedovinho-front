const TABLE = document.getElementById('table-categories');

let dados = [
    {
        id: 1,
        nome: 'Espumante',
        descricao: 'Espumante'
    },
    {
        id: 2,
        nome: 'Branco',
        descricao: 'Vinhos de uvas brancas',
    },
    {
        id: 3,
        nome: 'Verde',
        descricao: 'Vinho de uvas verdes, exclusivas de Portugal',
    },
    {
        id: 4,
        nome: 'Ypioca',
        descricao: 'Destilados feitos no Ceará',
    }
];

// for (i=0; i >= -1; i++){
//     TABLE.innerHTML += `
//     <tr>
//         <td>${dados[i].id}</td>
//         <td>${dados[i].nome}</td>
//         <td>${dados[i].descricao}</td>
//         <td>
//             <a href="#" class="btn btn-outline-warning btn-sm">
//                 Editar
//             </a>
//             <a href="#" class="btn btn-outline-danger btn-sm">
//                 Excluir
//             </a>
//         </td>
//     </tr>
// `;
// }

dados.forEach(addLinhaNaTabela);

function addLinhaNaTabela(categoria){
    TABLE.innerHTML += `
    <tr>
        <td>${categoria.id}</td>
        <td>${categoria.nome}</td>
        <td>${categoria.descricao}</td>
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
