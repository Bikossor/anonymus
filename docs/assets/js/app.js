(function() {
    var btnGenerate = document.getElementById("a_generate");
    var lblOutput = document.getElementById("a_result");

    btnGenerate.addEventListener("click", function() {
        lblOutput.innerText = anonymus.create();
    });
})();