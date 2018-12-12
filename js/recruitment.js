$(function() {

  $("#recruitmentForm input,#recruitmentForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#name2").val();
      var email = $("input#email2").val();
      var country = $("input#country").val();
      var phone = $("input#phone2").val();
      var city = $("select#city").val();
      var job = $("select#job").val();
      var curriculum = $("input#curriculum").val();
      var message = $("textarea#message2").val();
      var firstName = name; // For success2/Failure Message
      // Check for white space in name for success2/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $this = $("#sendRecruitment");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: "././mail/recruit_me.php",
        type: "POST",
        data: {
          name: name,
          phone: phone,
          country: country,
          city: city,
          job: job,
          email: email,
          curriculum: curriculum,
          message: message
        },
        cache: false,
        success: function() {
          // success2 message
          $('#success2').html("<div class='alert alert-success'>");
          $('#success2 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success2 > .alert-success').text("Your apply has been sent."));
          $('#success2 > .alert-success').append('</div>');
          //clear all fields
          $('#recruitmentForm').trigger("reset");
          $('#curriculumValue').text(" Please, upload your resume");
        },
        error: function() {
          // Fail message
          $('#success2').html("<div class='alert alert-danger'>");
          $('#success2 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success2 > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
          $('#success2 > .alert-danger').append('</div>');
          $('#success2').alert();
          //clear all fields
          $('#recruitmentForm').trigger("reset");
          $('#curriculumValue').text(" Please, upload your resume");
        },
        complete: function() {
          setTimeout(function() {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      });
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success2 boxes */
$('#name2').focus(function() {
  $('#success2').html('');
});
