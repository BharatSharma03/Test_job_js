let emplist=[{
    name:"John doe",
    dept:"php",
    empId:5
},
{
    name:"Paul smith",
    dept:"MERN",
    empId:4
},
{
    name:"Tom smith",
    dept:"SEO",
    empId:7
}  
]

emplist.sort((a,b) => a.empId-b.empId);
console.log(emplist);
