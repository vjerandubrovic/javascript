async function getFork(q){
    
    try {
        const api=`https://forkify-api.herokuapp.com/api/search?&q=${q}`;
        const p = await fetch(`${api}`);
        const a = await p.json();
        console.log(a);
    } catch (e) {
        console.log(e);
    }  
};

function loadFork(q) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let json=JSON.parse(this.responseText);
        console.log(json);
      }
    };
    // type of send,where,asyncronic
    xhttp.open("GET", `https://forkify-api.herokuapp.com/api/search?&q=${q}`, true);
    // type of data send
    xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    // send
    xhttp.send();
}


