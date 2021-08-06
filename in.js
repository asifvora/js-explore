class A {
    print(fName, lName){
        console.log("From A", fName, lName)
    }
}

class B extends A {
    constructor(){
        super()
    }

    print(){
        // super.print("asif", "vora")
        console.log("From B")
    }
}

const abc = new B();
abc.print()
abc.print("asif","vora")