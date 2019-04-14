$(function() {

  $("#voucherForm input").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#fullName").val();
      var email = $("input#email3").val();
      var phone = $("input#phone3").val();
      var groupName = $("input#groupName").val();
      var city = $("select#cityVoucher").val();
      var destination = $("select#destination").val();
      var tripDateFrom = $("input#tripDateFrom").val();
      var tripDateTo = $("input#tripDateTo").val();
      var firstName = name; // For success3/Failure Message
      // Check for white space in name for success3/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $this = $("#getVoucher");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: "././mail/voucher.php",
        type: "POST",
        data: {
          name: name,
          phone: phone,
          groupName: groupName,
          city: city,
          destination: destination,
          email: email,
          tripDateFrom: tripDateFrom,
          tripDateTo: tripDateTo,
        },
        cache: false,
        success: function() {
          // success3 message
          $('#success3').html("<div class='alert alert-success'>");
          $('#success3 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success3 > .alert-success').text("It will be valid when you receive the confirmation via email.");
          $('#success3 > .alert-success').append('</div>');
          //clear all fields
        },
        error: function() {
          // Fail message
          $('#success3').html("<div class='alert alert-danger'>");
          $('#success3 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success3 > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
          $('#success3 > .alert-danger').append('</div>');
          $('#success3').alert();
          //clear all fields
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

/*When clicking on Full hide fail/success3 boxes */
$('#fullName').focus(function() {
  $('#success3').html('');
});
