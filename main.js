console.log('it Works');

$(document).ready ( function() {
    $('.submit').click(function(event) {
       
        console.log('clicked button');
        var email = $('.email').val();
        var subject = $('.subject').val();
        var message = $('.message').val();
        var statusElms = $('.status');
        statusElms.empty();

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            statusElms.append('<div>Email is valid .</div>');
        }else{
            event.preventDefault();
            statusElms.append('<div>Email is not valid .</div>');
        }
        if(subject.length > 2){
            statusElms.append('<div>Subject is valid .</div>');
        }else{
            event.preventDefault();
            statusElms.append('<div>Subject is not valid .</div>');
        }
        if(message.length >10){
            statusElms.append('<div>Message is valid .</div>');
        }else{
            event.preventDefault();
            statusElms.append('<div>Message is not valid .</div>');
        }

    });
});