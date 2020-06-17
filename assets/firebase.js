 //Firebase
  var config = {
    apiKey: "AIzaSyBZ6sHqV9TzuSCF7o8S-sW_KKHpLqeu-T0",
    authDomain: "tree-4-me.firebaseapp.com",
    databaseURL: "https://tree-4-me.firebaseio.com",
    projectId: "tree-4-me",
    storageBucket: "tree-4-me.appspot.com",
    messagingSenderId: "601990611427",
    appId: "1:601990611427:web:d8073f055dbddebb7be0d6",
    measurementId: "G-02E2CKNGZ2"
  };

  firebase.initializeApp(config);
  firebase.analytics();

  var 

  $("#add-tree").on("click", function(event) {
    event.preventDefault();

    var name = $("#name-input").val().trim();
    var treename = $("#tree-name-input").val().trim();
    var age = $("#age-input").val().trim();
    var description = $("#description-input").val().trim();
    var location = $("#location-input").val().trim();

    var newTree = {
        name : name, 
        tree : treename,
        age : age,
        desctiption : description,
        location : location
    };

var database = firebase.database.ref().child('trees').push(data).key;

console.log(database);

console.log(newTree.name);
console.log(newTree.treename);
console.log(newTree.age);
console.log(newTree.description);
console.log(newTree.location);
alert("New Tree Submitted Successfully!")

$("#name-input").val("");
$("#tree-name-input").val("");
$("#age-input").val("");
$("#description-input").val("");
$("#location-input").val("");

});

// database.ref().on("child_added", function(childSnaphot) {
//     var name = childSnaphot.val().name;
//     var treename = childSnaphot.val().treename;
//     var age = childSnaphot.val().age;
//     var description = childSnaphot.val().description;
//     var location = childSnaphot.val().location;

//     console.log(name);
//     console.log(treename);
//     console.log(age);
//     console.log(description);
//     console.log(location);

//     var name = $("#name-input").val().trim();
//     var treename = $("#tree-name-input").val().trim();
//     var age = $("#age-input").val().trim();
//     var description = $("#description-input").val().trim();
//     var location = $("location-input").val().trim();
// });