
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.buttoni').addEventListener('click', function() {
   
        var emri = document.querySelector('.Emri').value;
        var qmimi = document.querySelector('.Qmimi').value;
        var sasia = document.querySelector('.Sasia').value;


        var newRow = document.createElement('tr');
        newRow.innerHTML = '<td>'  + emri + '</td>' +
                           '<td>'+'$'  + qmimi + '</td>' +
                           '<td>' + sasia + '</td>' +
                           '<td><button class="fshijBtn">Fshij</button></td>';


        document.querySelector('.tabela tbody').appendChild(newRow);


        document.querySelector('.Emri').value = '';
        document.querySelector('.Qmimi').value = '';
        document.querySelector('.Sasia').value = '';


        newRow.querySelector('.fshijBtn').addEventListener('click', function() {
            newRow.remove(); 
        });
    });
});