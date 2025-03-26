//source code 
//https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=
$("#gen_btn").click(function(){
    var qrText=$("#qr_input").val();
    $("#qr_image").html("<img src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText+"'/>");
}); 

