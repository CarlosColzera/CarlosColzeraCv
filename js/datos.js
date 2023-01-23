const personas = '{"results": [{"gender": "female","name": {"title": "Miss","first": "Jennie","last": "Nichols"},"location": {"street": {"number": 8929,"name": "Valwood Pkwy"},"city": "Billings","state": "Michigan","country": "United States","postcode": "63104","coordinates": {"latitude": "-69.8246","longitude": "134.8719"},"timezone": {"offset": "+9:30","description": "Adelaide, Darwin"}},"email": "jennie.nichols@example.com","login": {"uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00","username": "yellowpeacock117","password": "addison","salt": "sld1yGtd","md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3","sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b","sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"},"dob": {"date": "1992-03-08T15:13:16.688Z","age": 30},"registered": {"date": "2007-07-09T05:51:59.390Z","age": 14},"phone": "(272) 790-0888","cell": "(489) 330-2385","id": {"name": "SSN","value": "405-88-3636"},"picture": {"large": "https://randomuser.me/api/portraits/men/75.jpg","medium": "https://randomuser.me/api/portraits/med/men/75.jpg","thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"},"nat": "US"}],"info": {"seed": "56d27f4a53bd5441","results": 1,"page": 1,"version": "1.4"}}';
const obj = JSON.parse(personas); 
console.log(obj)

var contenedorimagen = document.querySelector("#imagen")
contenedorimagen.innerHTML = `<img  class='user_photo'  src="${obj.results['0'].picture.large}">`;

var apenom =  obj.results[0].name.last + "  " + obj.results[0].name.first;
var email = obj.results[0].email;

var cumple = obj.results[0].dob.date;
var anio=String(cumple).substring(0,4);
var mes= String(cumple).substring(5,7); 
var dia= String(cumple).substring(8,10); 
var fecha = dia +'-'+ mes  +'-'+ anio

var telefono = obj.results[0].phone;
var celular = obj.results[0].cell;
let ubicacion = obj.results[0].location.country + ",  " + obj.results[0].location.state + ",  " + obj.results[0].location.city + ",  " + obj.results[0].location.street.name + "  " + obj.results[0].location.street.number
var nat = obj.results[0].nat;
var edad = obj.results[0].dob.age;

function myEnterFunction(valor) {

  switch (valor) {
    case 'apenom':
      document.getElementById("labeldatos1").innerHTML = "Hola! mi nombre es el "+apenom;
      document.getElementById("labeldatos2").innerHTML = "Soy nacido en " + nat;
    break;

    case 'email':
      document.getElementById("labeldatos1").innerHTML = "Mi correo es";
      document.getElementById("labeldatos2").innerHTML = email;
    break;

    case 'birthday':
      document.getElementById("labeldatos1").innerHTML = "Mi cumpleaños es el "+fecha;
      document.getElementById("labeldatos2").innerHTML = "Actualmente tengo " +edad+ " años.";
    break;

    case 'phone':
      document.getElementById("labeldatos1").innerHTML = "Mis números de contacto son";
      document.getElementById("labeldatos2").innerHTML = telefono +" // "+ celular;
    break;

    case 'ubicacion':
      document.getElementById("labeldatos1").innerHTML = "Actualmente vivo en";
      document.getElementById("labeldatos2").innerHTML = ubicacion;
    break;

  }
  ocultar()
}

function ocultar() {
  var x = document.getElementById("labeldatos1")
  var y = document.getElementById("labeldatos2")
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
    } 
}

function ocultarbtn() {
  var x = document.getElementById("labeldatos1")
  var y = document.getElementById("labeldatos2")
  if (x.style.display !== "none"){
  x.style.display = "none";
  y.style.display = "none";
}
}

