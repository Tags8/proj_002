let calc1 = document.querySelector('#calc1');


calc1.addEventListener('click', function () { 
    let resf = document.getElementById('res-frame');
    let span = document.createElement('span');
    span.innerHTML = '1';

    resf.appendChild(span);
 }, false);

