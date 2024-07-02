let marks = prompt("Enter marks");
if (marks <= 49)
    {
        console.log(marks,"Grade F");
    }
else if( marks >=50 && marks <= 59)
    {
        console.log(marks,"Grade D");
    }
else if( marks >=60 && marks <= 69)
    {
        console.log(marks,"Grade C");
    }
else if( marks >=70 && marks <= 79)
    {
        console.log(marks,"Grade B");
    }
else if (marks >=80 && marks <=100)
{
    console.log(marks,"Grade A")
}
else{
    console.log(marks,"is invalid marks");
}
