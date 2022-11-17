
    var botones = document.getElementsByTagName("button");
    for (var i=0; i < botones.length; i++) {
        botones[i].onclick = function() {
            var className = this.innerHTML.toLowerCase();
            document.body.className = className;
        };
    }