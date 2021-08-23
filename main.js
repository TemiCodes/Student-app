Students = [];
function submit(){
    var display_student_name = [];
     for (let t = 1; t <= 5; t++) {
         var Student_Name = document.getElementById("name_of_the_student_" + t).value;
         console.log(Student_Name);
         Students.push(Student_Name);
                
     }
     console.log(Students);
     var length_students = Students.length;
     console.log(length_students);
     for (let s = 0; s < length_students; s++) {
     display_student_name.push("<h4>name-" + Students[s] + "</h4>");  
     console.log(display_student_name);  
        
     }
     console.log(display_student_name);
     document.getElementById("display_name_with_commas").innerHTML = display_student_name;
     var Students_no_com = display_student_name.join(" ")
     console.log(Students_no_com)
     document.getElementById("display_name_without_commas").innerHTML = Students_no_com;
     document.getElementById("submit_button").style.display = "none"
     document.getElementById("sort_button").style.display = "inline-block"
} 
function sorting(){
    Students.sort()
    console.log(Students)
    var sorted_names = [];
    var length_students = Students.length;
     console.log(length_students);
     for (let s = 0; s < length_students; s++) {
     sorted_names.push("<h4>name-" + Students[s] + "</h4>");  
     console.log(sorted_names);
     }
     console.log(sorted_names);
     document.getElementById("display_name_without_commas").innerHTML = sorted_names;
    
     var Students_no_com = sorted_names.join(" ")
     console.log(Students_no_com)
     document.getElementById("display_name_without_commas").innerHTML = Students_no_com;

}
