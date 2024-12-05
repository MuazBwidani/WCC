let projectName=document.getElementById("Project_name");
let projectDesc=document.getElementById("Project_desc");
let projectPlaceSelect=document.getElementById("Project_place");
let createform=document.getElementById("create-form");
let projectPlaceValue;


projectPlaceSelect.addEventListener("change",getProjectPlaceValue);
createform.addEventListener("submit",createprojectfun);

function getProjectPlaceValue(e){
    projectPlaceValue=e.target.value;
}
function createprojectfun(e){
    e.preventDefault();
    let allprojects=JSON.parse(localStorage.getItem('projects'));
    let nameValue=projectName.value;
    let descValue=projectDesc.value;
    
}

let obj={
    id:allprojects ? allprojects.length+1 : 1,

    size:projectPlaceValue,
    title:nameValue,
    desc:descValue,

};
let newprojects=allprojects ?[...allprojects,obj] :obj;
localStorage.setItem("projects",JSON.stringify(newprojects));
