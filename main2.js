new Vue({
    el: "#entire",
    data: {
        visible: false
    },
    methods:{
        scatter: function(event){
            var tag = document.createElement("div");
            var element = document.getElementById("entire");
            element.appendChild(tag);
            tag.setAttribute("class", "fragments");
            tag.style.top= event.clientY;
            tag.style.left= event.clientX;
            }
        }
});