// document.getElementById('envelope').addEventListener('click', function() {
//     openEnvelope();
// });

// function openEnvelope() {
//     document.getElementById('envelope').classList.add('open');
//     document.getElementById('heart').style.display = 'block';
// }

$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
   
});