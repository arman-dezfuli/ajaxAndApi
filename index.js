let h1 = document.getElementById("h1");
const ajaxFunTast = () => {
    let xhttp1 = new XMLHttpRequest();
    xhttp1.onreadystatechange = function ()  {
        h1.innerHTML = this.responseText;
    };
    xhttp1.open("GET","tat.txt", true);
    xhttp1.send();
};