function func1() {
    console.log("func1 called");
}

function func2() {
    console.log("func2 called");
}

var dict = {
    "func1": func1,
    "func2": func2,
}

dict["func1"]();
dict["func2"]();