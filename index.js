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
        let card = '';
        for(let i=0; i < vid.length;i++) {
            let itames = vid[i];
            const vidTitle = itames['title'];
            const vidImg = itames['small_poster'];
            const vidData = itames['sdate'];
            const vidVisit= itames['visit_cnt'];
            const vidFrame = itames['frame'];
            card += '<div class="card">'; 
                card += '<figure>';
                    card += '<a href="'+ vidFrame +'">';
                        card += '<img src="'+ vidImg +'" alt="">';
                        card += '<figcaption>'+ vidTitle +'</figcaption>';
                    card += '</a>';
                card += '</figure>';
                card += '<div class="bottom">';
                    card += '<span>'+vidVisit+'</span>';
                    card += '<span>'+vidData+'</span>';
                card += '</div>';
            card += '</div>'; 
        }
        document.getElementById('con').innerHTML = card;
    }
}
ajax.open('GET', url , true);
ajax.send();
// end ajax
