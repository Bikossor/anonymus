(function () {
    var btnGenerate = document.getElementById("a_generate");
    var btnCopy = document.getElementById("a_copy");
    var lblOutput = document.getElementById("a_result");
    var labelPackageVersion = document.getElementById("package_version");

    function generateNewName() {
        lblOutput.value = anonymus.create();
    };
    
    function copyGeneratedName() {
        lblOutput.select();
        document.execCommand("copy");
    };

    btnGenerate.addEventListener("click", generateNewName);
    btnCopy.addEventListener("click", copyGeneratedName);

    window.addEventListener('load', function () {
        generateNewName();

        labelPackageVersion.innerHTML = anonymus.version;
    }, false);
})();