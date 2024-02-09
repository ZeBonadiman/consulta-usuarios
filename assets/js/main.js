$(document).ready(function () {
    $('.esconde-titulo').hide();
    $('#listaBrasileiros thead').hide();
    
    $('#botaoConsulta').click(function () {
        $('#tabela thead').removeClass('esconde-thead');
        $('.esconde-titulo').show();
        $('#listaBrasileiros thead').show();
        
        const apiUrl = 'https://randomuser.me/api/?results=100';
        
        $.get(apiUrl, function (response) {
            let brasileirosCount = 0;
            const tableBody = $('#tabela tbody');

            tableBody.empty();

            $('#listaBrasileiros tbody').empty();

            for (let user of response.results) {

                tableBody.append(`
                    <tr>
                        <td>${user.name.first} ${user.name.last}</td>
                        <td>${user.location.city}, ${user.location.country}</td>
                        <td>${user.email}</td>
                        <td><img src="${user.picture.thumbnail}" alt="Thumbnail"></td>
                    </tr>
                `);

                if (user.location.country === 'Brazil') {
                    brasileirosCount++;

                    $('#listaBrasileiros tbody').append(`
                        <tr>
                            <td>${user.name.first} ${user.name.last}</td>
                            <td>${user.location.city}, ${user.location.country}</td>
                            <td>${user.email}</td>
                            <td><img src="${user.picture.thumbnail}" alt="Thumbnail"></td>
                        </tr>
                    `);
                }
            }

            $('#brazilCount h3').text(`Quantidade de Brasileiros na lista: ${brasileirosCount}`);
        });
    });
});