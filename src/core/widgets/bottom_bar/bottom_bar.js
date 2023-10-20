import "./bottom_bar.css";

export class BottomBar{
    constructor(){
        this.build();
    }
build(){
// Ana div öğesini oluştur
var bottomBar = document.createElement("div");
bottomBar.classList.add("bottom-bar");

// Ul öğesini oluştur
var ul = document.createElement("ul");
ul.setAttribute("id", "bottomLinks");

// Li öğesini oluştur ve içeriklerini ekleyin
var li1 = document.createElement("li");
var a1 = document.createElement("a");
a1.classList.add("bottomElement");
a1.setAttribute("href", "");
a1.textContent = "Gizlilik Politikası";
li1.appendChild(a1);

var li2 = document.createElement("li");
var a2 = document.createElement("a");
a2.classList.add("bottomElement");
a2.setAttribute("href", "");
a2.textContent = "Hakkımızda";
li2.appendChild(a2);

var li3 = document.createElement("li");
var a3 = document.createElement("a");
a3.classList.add("bottomElement");
a3.setAttribute("href", "");
a3.textContent = "Site Hartiası";
li3.appendChild(a3);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

// "Developed by İsmet Okan Çakırsaz" metnini içeren div öğesini oluştur
var createdBy = document.createElement("div");
createdBy.setAttribute("id", "createdBy");

var createdByText = document.createElement("div");
createdByText.setAttribute("id", "createdByText");
createdByText.innerHTML = "Developed by<br>İsmet Okan Çakırsaz";

var contacts = document.createElement("div");
contacts.setAttribute("id", "contacts");

var upworkLink = document.createElement("a");
upworkLink.setAttribute("href", "https://www.upwork.com/freelancers/~012d51507c91678d7c");
upworkLink.setAttribute("target", "_blank");
var upworkImg = document.createElement("img");
upworkImg.setAttribute("src", document.getElementById("upworkImage").src);
upworkImg.classList.add("bottomContacts");
upworkLink.appendChild(upworkImg);

var bionlukLink = document.createElement("a");
bionlukLink.setAttribute("href", "https://bionluk.com/ocakirsaz");
bionlukLink.setAttribute("target", "_blank");
var bionlukImg = document.createElement("img");
bionlukImg.setAttribute("src", document.getElementById("bionlukImage").src);
bionlukImg.classList.add("bottomContacts");
bionlukLink.appendChild(bionlukImg);

var linkedinLink = document.createElement("a");
linkedinLink.setAttribute("href", "https://www.linkedin.com/in/ismet-okan-%C3%A7ak%C4%B1rsaz-3b10b3267/");
linkedinLink.setAttribute("target", "_blank");
var linkedinImg = document.createElement("img");
linkedinImg.setAttribute("src", document.getElementById("linkedinImage").src);
linkedinImg.classList.add("bottomContacts");
linkedinImg.setAttribute("id", "linkedin");
linkedinLink.appendChild(linkedinImg);

contacts.appendChild(upworkLink);
contacts.appendChild(bionlukLink);
contacts.appendChild(linkedinLink);

createdBy.appendChild(createdByText);
createdBy.appendChild(contacts);

// Ana div öğesine alt öğeleri ekleyin
bottomBar.appendChild(ul);
bottomBar.appendChild(createdBy);

// Sayfanın sonuna eklemek için kullanabilirsiniz
document.body.appendChild(bottomBar);

}
}