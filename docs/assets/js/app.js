(function() {
    var btnGenerate = document.getElementById("a_generate");
    var lblOutput = document.getElementById("a_result");

    function generateNewName() {
        lblOutput.innerText = anonymus.create();
    };

    btnGenerate.addEventListener("click", generateNewName);
    window.addEventListener('load', generateNewName, false )
})();