var urlParams = new URLSearchParams(window.location.search);
var urlParams = new URLSearchParams(window.location.search);
var name = urlParams.get('name');

console.log(urlSearchParams.values())


if (name !== null) {
$('span.name').text(name);



// let name = "Laura"
// let nonsense = "gsjhdjhso"
// let my_list = [
//   'Jamie',
//   'Laura',
//   'Tish',
//   'Lisa'
// ];


// for (let i = 0; i < my_list.length; i++) {
//    console.log(my_list[i]);
//  }



//let my_object = {
	//'name': 'Laura',
	//'role': "Office Manager, Work Wife",
	//'weekly_salary':10000

//}

//console.log(nonsense);
//console.log(my_list[3]);
//console.log(my_object.role);