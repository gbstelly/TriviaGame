

var score = 0;
var totalQuestions = 5;
var start = false;
//  Interval Demonstration
//  Set our number counter to 100.
var number = 20;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;
var anserCheck;

init();
// Initialize
function init(){
    //correct answers
    sessionStorage.setItem('a1','b');
    sessionStorage.setItem('a2','d');
    sessionStorage.setItem('a3','a');
    sessionStorage.setItem('a4','c');
    sessionStorage.setItem('a5','b');
}
$(document).ready(function () {
    //Hide all quesions
    $('.questionForm').hide();

    $('#startBtn').on("click", function () {
            //show first questions
                $('#q1').show();
                $('#startBtn').hide();
//---------------------------------------------------------------
// timer
//
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      }
  
      //  The decrement function.
      function decrement() {
  
        //  Decrease number by one.
        number--;
  
        //  Show the number in the #show-number tag.
        $("#show-number").html(`<h2>Time Remaining: ${number} </h2>`);
  
  
        //  Once number hits zero...
        if (number === 0) {
  
          //  ...run the stop function.
          stop();
  
          //  Alert the user that time is up.
          alert("Times Up!");
          $('#results').html(`<h3> Your final score is : ${score} out of 5 </h3>`)
        }
      }

          //  The stop function
    function stop() {

        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
      }
  
      //  Execute the run function.
      run();
  


//----------------------------------------------------------------

    });

        

    // On clicking submit, display the next question
    $('#q1 #submit').on("click", function () {
        var anserCheck = $('input[name=q1]:checked').val();
        console.log(anserCheck);


        $('.questionForm').hide();
        process('q1');
        $('#q2').show();
        return false;

    });

    $('#q2 #submit').on("click", function () {
        $('.questionForm').hide();
        process('q2');
        $('#q3').show();
        return false;

    });

    $('#q3 #submit').on("click", function () {
        $('.questionForm').hide();
        process('q3');
        $('#q4').show();
        return false;

    });

    $('#q4 #submit').on("click", function () {
        $('.questionForm').hide();
        process('q4');
        $('#q5').show();
        return false;

    });

    $('#q5 #submit').on("click", function () {
        $('.questionForm').hide();
        process('q5');
        //$('#q5').fadeIn(300);
        return false;

    });

});

//Process answers
function process(q){
    if (q === 'q1'){
 
       if(submitted === sessionStorage.a1){
           
           score++;
           
       } 
    }
    if (q === 'q2'){
        var submitted = $('input[name=q2]:checked').val();
        if(submitted === sessionStorage.a2){
            score++;
        }
     }
     if (q === 'q3'){
        var submitted = $('input[name=q3]:checked').val();
        if(submitted === sessionStorage.a3){
            score++;
        }
     }
     if (q === 'q4'){
        var submitted = $('input[name=q4]:checked').val();
        if(submitted === sessionStorage.a4){
            score++;
        }
     }
     if (q === 'q5'){
        var submitted = $('input[name=q5]:checked').val();
        if(submitted === sessionStorage.a5){
            score++;
        }
        $('#results').html(`<h3> Your final score is : ${score} out of 5 </h3> <a href="index.html">Do you want to try again?</a>`)
     }
}


