// Решение взято из интернета и доработано.

function chessboard1() {
    var newChessboard = document.createElement( 'table' ),
        colCaption = [ '','A','B','C','D','E','F','G','H','' ],
        blackFigs1 = [ '8','&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;','8' ],
        whiteFigs1 = [ '1','&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;','&#9816;','&#9814;','1' ],
        blackFigs2 = [ '7','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','7' ],
        whiteFigs2 = [ '2','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','2' ];
    for ( var i = 0, a = 9; i < 10, a >= 0; i++, a-- ) {
        var newRow = newChessboard.insertRow(i);
        for ( var j = 0; j < 10; j++ ) {
            var newCell = newRow.insertCell( j );
            switch (i) {
                case 0:
                    newCell.innerText = colCaption[ j ];
                    break;
                case 1:
                    newCell.innerHTML = blackFigs1[ j ];
                    break;
                case 2:
                    newCell.innerHTML = blackFigs2[ j ];
                    break;
                case 7:
                    newCell.innerHTML = whiteFigs2[ j ];
                    break;
                case 8:
                    newCell.innerHTML = whiteFigs1[ j ];
                    break;
                case 9:
                    newCell.innerText = colCaption[ j ];
                    break;
                default:
                    if ( j === 0 || j === 9 ) {
                        newCell.innerHTML = a;
                    }
                    break;
            }
        }
    }
    document.body.appendChild( newChessboard );
}
chessboard1();