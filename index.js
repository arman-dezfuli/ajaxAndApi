// let h1 = document.getElementById("h1");
// const ajaxFunTast = () => {
//     let xhttp1 = new XMLHttpRequest();
//     xhttp1.onreadystatechange = function () {
//         h1.innerHTML = this.responseText;
//     };
//     xhttp1.open("GET","tat.txt", true);
//     xhttp1.send();
// };
// start ajax 
const url = "https://www.aparat.com/etc/api/videoByUser/username/arman_ganimebaz/perpage/8";
let ajax = new XMLHttpRequest();
ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let res = this.responseText;
        res = JSON.parse(res);
        let vid = res['videobyuser'];
        for(let i=0;vid < vid.length;i++) {
            let itames = vid[i];
            console.log(itames['title']);
        }
    }
}
ajax.open('GET', url , true);
ajax.send();
// end ajax
