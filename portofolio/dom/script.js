        function showMessage(){
            var message = document.getElementById("message").value;
            output.innerHTML= message.replace(/[aiueo]/gi,'i')+' - Hilih Bicit';
        }