const x = {
    name: "vishal",
    age: 23,
    show: function run() {
        console.log(this);
        setTimeout(() => {
            console.log(this);

        }, 2000);
        setTimeout(function () {
            console.log(this);

        }, 2000);

    },
    show2: function shownew() {
        console.log(this);

    }

}
x.show();