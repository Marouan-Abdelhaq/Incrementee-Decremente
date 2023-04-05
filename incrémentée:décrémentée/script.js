         //fonction d'incrément
    function increment() {
        var currentValue = parseInt(document.getElementById("myInput").value);
        currentValue++;
        document.getElementById("myInput").value = currentValue;
      }
          //fonction de décrément
      function decrement() {
        var currentValue = parseInt(document.getElementById("myInput").value);
        currentValue--;
        document.getElementById("myInput").value = currentValue;
      }