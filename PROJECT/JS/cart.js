let projectsDom=document.querySelector(".products");
let noProjectsDom=document.querySelector(".noProjects");

function drawCartPrjectsUI(allProjects=[]){
    if(JSON.parse(localStorage.getItem("prjectsIncart")).length===0)
    noProjectsDom.innerHTML="There is no projects !!";
    let projects=JSON.parse(localStorage.getItem("projectsInCart"))|| allProjects;
    let productsUI=projects.map((projects)=> {
        return `
        <div class="project_info">
               <img 
               src="${projects.imgurl}" 
               class="project_info_img" 
               alt="image"
               />
               <div class="project_info_desc">
                   <h2>${projects.title}</h2>
                   <p>${projects.desc}</p>
                   <span>Size: ${projects.size}</span>
               </div>
               <div class="project_info_action">
                   <button class="buy_from_this_Project" onclick="remove>See more</button>
                   <i class="far fa-heart"></i>
               </div>
               
            </div>
            `
        ;
    })
}