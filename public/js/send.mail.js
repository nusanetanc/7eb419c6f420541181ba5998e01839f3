$('#contact-form').submit(function(e){
  var name = document.getElementById('inputName'),
      email = document.getElementById('inputEmail'),
      message = document.getElementById('inputMessage');
  if(!name.value || !email.value || !message.value ){
    alertify.console.error('Please check your entries')
  } else {
    $.ajax({
    url: "https://formspree.io/nurhandiy@gmial.com",
    method: "POST",
    data: $(this).serialize(),
    dataType: "json"
    });
    e.preventDefault()
    $(this).get(0).reset()
    alertify.success('Message Send')
  }
})
