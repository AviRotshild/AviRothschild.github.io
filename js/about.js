const subm = document.querySelector('.button-send');
const first = document.querySelector(".first");
const email = document.querySelector(".email");
const message = document.querySelector(".message");

first.addEventListener("keyup", function() {
    if( first.value.length > 0&&email.value.length > 0&&message.value.length > 0)
    {
        subm.disabled = false;
    }
    else{
        subm.disabled = true;
    }
});

message.addEventListener("keyup", function() {
    if( first.value.length > 0&&email.value.length > 0&&message.value.length > 0)
    {
        subm.disabled = false;
    }
    else{
        subm.disabled = true;
    }
});

email.addEventListener("keyup", function() {
    if( first.value.length > 0&&email.value.length > 0&&message.value.length > 0)
    {
        subm.disabled = false;s
    }
    else{
        subm.disabled = true;
    }
});
