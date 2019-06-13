document.getElementById('container').onchange =function() {
    var bill = document.getElementById('billTotal').value;
    var tipPercent = document.getElementById('tipInput').value;
    var split = document.getElementById('splitInput').value;
    //console.log(split);

    document.getElementById('tipOutput').innerHTML = tipPercent + '%';
    document.getElementById('splitOutput').innerHTML = split;
}