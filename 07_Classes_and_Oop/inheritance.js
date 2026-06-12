class User{
    constructor(UserName){
        this.UserName=UserName
    }
}

class Teacher extends User {
    constructor(UserName,  Email, Age){
        super(UserName)
        this.Email=Email
        this.Age=Age
    }

    AddCourse(){
        console.log(`A new Course was added by ${this.UserName}`)
    }
}


const teacher = new Teacher("MR.X", "xyz@gmail.com", 30);
teacher.AddCourse()