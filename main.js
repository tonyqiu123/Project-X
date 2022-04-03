var box = document.querySelectorAll(".box");

for (i=0; i<box.length;i++){
    box[i].addEventListener("click", function(){
        this.classList.toggle("active");
    })
}

