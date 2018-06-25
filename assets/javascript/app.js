


var myDataBase = firebase.database();


var form = document.getElementById('my-form');

form.addEventListener('submit', theForm)


// JQUERY
// $('#my-form').on("submit", theForm );
function theForm(e) {
    e.preventDefault();

    var myTrainSched = {};

    const input = document.querySelectorAll('.input_user');

    input.forEach(function (elem) {

        myTrainSched.name = elem.value;
        myTrainSched.destination = elem.value;
        myTrainSched.time = elem.value;
        myTrainSched.frequencyt = elem.value;

    })


    console.log(myTrainSched);
    

    myDataBase.ref().push({
        myTrainSched
    });
}