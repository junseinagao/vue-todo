var app = new Vue ( {
    el: "#app",
    data: {
        add :"Add",
        messege : "",
        items : []
    },
    methods: {
        addCard : function () {
            this.items.push(this.messege);
        },
        deleteCard: function (index) {
            this.items.splice(index,1);
        }
    }
});