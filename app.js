  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { set,ref,push,getDatabase,onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCA7ngmX9RAOlaritYbeTv2ZvGoCSKr9uc",
    authDomain: "foam-abeer.firebaseapp.com",
    databaseURL: "https://foam-abeer-default-rtdb.firebaseio.com",
    projectId: "foam-abeer",
    storageBucket: "foam-abeer.appspot.com",
    messagingSenderId: "438993855679",
    appId: "1:438993855679:web:022d57f731630707b7520a",
    measurementId: "G-6YD173B7ZP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
const database = getDatabase();



let stdCity = document.getElementById("stdCity")
let stdCourse = document.getElementById("stdCourse")
let stdName = document.getElementById("stdName")
let stdFathername = document.getElementById("stdFathername")
let stdEmail = document.getElementById("stdEmail")
let stdPhone = document.getElementById("stdPhone")
let stdCnic = document.getElementById("stdCnic")
let stdFatherCnic = document.getElementById("stdFatherCnic")
let stdDob = document.getElementById("stdDob")
let stdGender = document.getElementById("stdGender")
let stdAddress = document.getElementById("stdAddress")
let stdQuli = document.getElementById("stdQuli")
let isLaptop = document.getElementById("isLaptop")
let stdPic = document.getElementById("stdPic")

window.submitForm = function(){
    let stdObj = {
        city:stdCity.value,
        course:stdCourse.value,
        name:stdName.value,
        fatherName:stdFathername.value,
        email:stdEmail.value,
        phone:stdPhone.value,
        cnic: stdCnic.value,
        fatherCnic:stdFatherCnic.value,
        Dob:stdDob.value,
        gender:stdGender.value,
        Address:stdAddress.value,
        lastQuali: stdQuli.value,
        laptop:isLaptop.value,
        pic:stdPic.value,
    }

    stdObj.id = push(ref(database,"StudentDetail/")).key;
    let refrence = ref(database,`StudentDetail/ ${stdObj.id}`);
    set(refrence,stdObj);

    resetVal();
}

function getData(){
    let refrence = ref(database,"StudentDetail/");
    onValue(refrence,function(data){
        console.log(data.val());
    })
}
getData();

function resetVal(){
stdCity.value = "";
stdCourse.value = "";
stdName.value = "";
stdFathername.value = "";
stdEmail.value = "";
stdPhone.value = "";
stdCnic.value = "";
stdFatherCnic.value = "";
stdDob.value = "";
stdGender.value = "";
stdAddress.value = "";
stdQuli.value = "";
isLaptop.value = "";
stdPic.value = "";

}