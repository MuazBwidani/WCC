let projects=JSON.parse(localStorage.getItem('projects'));
let projectId=localStorage.getItem('projectId');
let projectDom=document.querySelector('.item-details');
let projectDetails=projects.find((project)=>project.Id == projectId);
console.log(projectDetails);


projectDom.innerHTML=
`
<img src="${projectDetails.imgUrl}" alt=""/>
<h2>${projectDetails.title}</h2>
<p>${projectDetails.desc}</p>
<span>Place :${projectDetails.size}</span>

`;
