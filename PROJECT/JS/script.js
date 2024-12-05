let userInfo =document.querySelector("#user_info");
let userDom=document.querySelector("#user");
let links=document.querySelector("#links");
let logoutBtn=document.querySelector("#logout");
let projects=JSON.parse(localStorage.getItem('products'));
let username=localStorage.getItem("username");

if(username)
{
    links.remove();
    userInfo.style.display ="flex";
    userDom.innerHTML=username;
    console.log(userInfo);
}

logoutBtn.addEventListener('click',function(){

    localStorage.clear();
    setTimeout(() => {
      window.location="register.html";  
    }, 1500);
})

//define projects
let project=[{
  id: 1,
  title: 'avrupa project',
  size: 'large',
  imageUrl: 'C:\photo\1.jpg'
},
{id: 2,
title: 'Asia project',
size: 'large',
imageUrl: 'C:photo\1.jpg'
},
{id: 3,
title: 'international project',
size: 'large',
imageUrl: 'C:photo\1.jpg'
},
];

let projectDom=document.querySelector(".project");
function drowProjectUI(){
let projectUI=project.map((project)=>{
    return `
            <div class="project_info">
               <img 
               src="${project.imageUrl}" 
               class="project_info_img" 
               alt="image"
               />
               <div class="project_info_desc">
                   <a onclick='saveprojectData(${project.id})'>${project.title}</a2>
                   <p>${projects.desc}</p>
                   <span>Size: ${project.size}</span>
               </div>
               <div class="project_info_action">
                   <button class="see_more">See more</button>
                   <i class="far fa-heart"></i>
               </div>
               
            </div>
            `
        ;
    });
    projectDom.innerHTML=projectUI;
}
drowProjectUI();
function saveprojectData(id){
    localStorage.setItem("projectId",id);
}
function saveprojectData(id)
{
    localStorage.setItem("productId",id);
    window.location="projectDetails.html";
}