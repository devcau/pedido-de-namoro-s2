     function sim(){
    alert ("Agora sim oficialmente casados kk:)")
    }

    function desvia(t){
        var btn = t;
        btn.style.position = 'absolute';
        btn.style.bottom = geraPosicao(10, 90);
        btn.style.left = geraPosicao(0, 100);
        console.log("opa desviei...");

    }

        function geraPosicao(min, max) {
        return Math.random() * (max - min) + "%";
}


