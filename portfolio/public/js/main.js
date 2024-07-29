$(document).ready(function () {
  $(".modal").modal();
  $(".scrollspy").scrollSpy();

  $("#contact-form").on("submit", function (event) {
    event.preventDefault();
    const formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      message: $("#message").val(),
    };

    $.ajax({
      type: "POST",
      url: "/api/contact",
      data: JSON.stringify(formData),
      contentType: "application/json",
      success: function (response) {
        M.toast({ html: "Message sent!" });
        $("#contact-form")[0].reset();
        var instance = M.Modal.getInstance($("#contact-modal"));
        instance.close();
      },
      error: function (error) {
        M.toast({ html: "Error sending message." });
      },
    });
  });
});
