FullStackProgram.backgroundButton = new function () {

    this.Initialize = function () {
        $('#backgroundButton').click(function () {
            changBackground();
        });
    }

    function changBackground() {
        document.body.style.background = Math.floor(Math.random() * 16777215).toString(16);
    }
}