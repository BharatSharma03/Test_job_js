document.addEventListener('DOMContentLoaded', () => {
    const view_button1 = document.getElementById('vieww1');
    const view_button2 = document.getElementById('vieww2');
    const view_button3 = document.getElementById('vieww3');
    const view_button4 = document.getElementById('vieww4');
    const view_button5 = document.getElementById('vieww5');
    const close_button = document.getElementById('closee');
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');

  

    function view1() {
        popup.classList.add('active');
        overlay.classList.add('active');
        loadEmployeeData();
    }

    function view2() {
        popup.classList.add('active');
        overlay.classList.add('active');
        loadEmployeeData();
    }
    
    function view3() {
        popup.classList.add('active');
        overlay.classList.add('active');
        loadEmployeeData();
    }
    function view4() {
        popup.classList.add('active');
        overlay.classList.add('active');
        loadEmployeeData();
    }

    function view5() {
        popup.classList.add('active');
        overlay.classList.add('active');
        loadEmployeeData();
    }
    
    

    function close() {
        popup.classList.remove('active');
        overlay.classList.remove('active');
    }

    function handleOverlayClick() {
        close();
    }

    function loadEmployeeData() {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true);

        xhttp.onload = function() {
            if (this.status == 200) {
                let objj = JSON.parse(this.responseText);
                console.log(objj);

                if (objj.data) {
                    let items = objj.data;
                    let str = "";
                    for (let i = 0; i < items.length; i++) {
                        if (items[i].id === 1 ){//|| items[i].id === 2 || items[i].id === 3 || items[i].id === 4 || items[i].id === 5) {
                            str += `Employee_id :- ${items[i].id}` + "<br>";
                            str += `Employee_name :- ${items[i].employee_name}` + "<br>";
                            str += `Employee_salary :- ${items[i].employee_salary}` + "<br>";
                            str += `Employee_age :- ${items[i].employee_age}` + "<br>";
                            str += "<br>";
                            
                        }
                    }
                    document.getElementById('contain').innerHTML = str;
                }
            } else {
                console.error("Error: " + this.status);
            }
        };

        xhttp.send();
    }

    if (view_button1) {
        view_button1.addEventListener('click', view1);
    }
    if (view_button2) {
        view_button2.addEventListener('click', view2);
    }
    if (view_button3) {
        view_button3.addEventListener('click', view3);
    }
    if (view_button4) {
        view_button4.addEventListener('click', view4);
    }
    if (view_button5) {
        view_button5.addEventListener('click', view5);
    }
    if (close_button) {
        close_button.addEventListener('click', close);
    }
    if (overlay) {
        overlay.addEventListener('click', handleOverlayClick);
    }
});



// let btton=document.getElementById("req");
// btton.addEventListener('click',bttonclick);
// function bttonclick(){
//     console.log("hlo");

//     const xhr= new XMLHttpRequest();
    
//     xhr.onprogress=function(){
//         console.log("on progress");
        
//     }

//     xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);

//     // xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true);
//     // xhr.getResponseHeader('Content-Type','application/json')
//     // xhr.onreadystatechange=function(){
//     //     console.log(xhr.readyState);
        
//     // }


//     xhr.onload=function(){
//         if(this.status==200){
//             console.log(this.response);

//         }
//         else{
//             console.log("jai mata di")
//         }
        
        
//     }
//     // parm=`{"name":"hlooo","salary":"123","age":"23"}`
//     // xhr.send(parm)
//     xhr.send()
    
// }
// let btton2 = document.getElementById("resp");
// btton2.addEventListener('click', responsebtton);

// function responsebtton() {
//     console.log("response button is clicked");
//     const xhttp = new XMLHttpRequest();

//     xhttp.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true);

//     xhttp.onprogress = function() {
//         console.log("work on progress"); // optional
//     }

//     xhttp.onload = function() {
//         if (this.status == 200) {
//             let objj = JSON.parse(this.responseText);
//             console.log(objj);
            
//             // Assuming objj has a property 'data' which is an array of employees
//             let items = objj.data;
//             let str = "";
//             for (let i = 0; i < items.length; i++) {
//                 str += items[i].employee_name + "<br>";
//             }

//             let namesElement = document.getElementById('names');
//             namesElement.innerHTML = str;
            
//         } else {
//             console.log("Error: " + this.status);
//         }
//     }

//     xhttp.send();
// }
