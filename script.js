let button1 = document.getElementById("arrow_1");
let button2 = document.getElementById("arrow_2");
let button3 = document.getElementById("arrow_3");
let button4 = document.getElementById("arrow_4");

let inf1 = document.getElementById("inf1")
/*
button1.onclick = () =>{
    inf1.v
}

*/

/*VIDEO*/

let play = document.getElementsByClassName("intro_video_btn_img")[0];
let cover = document.getElementsByClassName('intro_video_cover')[0]
let video = document.getElementById('video');

play.onclick = () =>{
    cover.style.display = 'none';
    video.play();
};
video.onmouseout = () =>{
    if( cover.style.display === 'none')
    cover.style.display = 'flex';
    video.pause();

}
video.onclick = () =>{
    if( cover.style.display === 'none')
        cover.style.display = 'flex';
}


/*SERVICES*/

let servicesContainer = document.getElementsByClassName("services_content")[0],
	serviceTitle = document.getElementsByClassName("service_info_title"),
	serviceInfo = document.getElementsByClassName("service_info_content");



servicesContainer.onclick = function(e){
	let tg = e.target;
	if(tg.classList.contains('service_info_title')){
		if(tg.classList.contains('active_service')){
			clearClasses(serviceTitle, 'active_service');
			clearClasses(serviceInfo, 'active_service_info');
		}
		else{
			clearClasses(serviceTitle, 'active_service');
			clearClasses(serviceInfo, 'active_service_info');
			tg.classList.add('active_service');
		tg.nextElementSibling.classList.add('active_service_info');
		}
		
		

	}
}
      

function clearClasses(services, activeClass){
	for(let service of services){
		if(service.classList.contains(activeClass)){
			service.classList.remove(activeClass);
		}
	}
}


/* Сладер в комментах */
let btnUp = document.querySelector('#rewiews_content_btn_up'),
	btnDown = document.querySelector('#rewiews_content_btn_down'),	
	commentText = document.querySelectorAll('.rewiews_content_comment');

btnUp.addEventListener('click', function(e){
	goBack(commentText);
});
btnDown.addEventListener('click', function(e){
	goNext(commentText);
});
function goBack(commentText){

	let tmp = commentText[0].innerHTML;
    for(let i = 1; i<commentText.length; i++){
        commentText[i-1].innerHTML = commentText[i].innerHTML;
    }
    commentText[commentText.length-1].innerHTML = tmp;
}

function goNext(commentText){

 let tmp = commentText[commentText.length-1].innerHTML;
    for(let i = commentText.length-1; i>0; i--){
        commentText[i].innerHTML = commentText[i-1].innerHTML;
    }
    commentText[0].innerHTML = tmp;
}

/*TEAM SLIDER*/
//по нажатию на боковые фото
let rightImg = document.querySelector('#team_right'),
	leftImg = document.querySelector('#team_left'),
	members = document.querySelectorAll('.team_member_info'),
	allImg = document.querySelectorAll('.team_img');

rightImg.addEventListener('click', function(){
	go_back_img(allImg);
	goBack(members);
});
leftImg.addEventListener('click', function(){

	go_next_img(allImg);
	goNext(members);
});


function go_back_img(review_img) {
    let href = review_img[0].src;
    for(let i = 1; i<review_img.length; i++){
        review_img[i-1].src = review_img[i].src;
    }
    review_img[review_img.length-1].src = href;

}
function go_next_img(review_img) {
    let href = review_img[review_img.length-1].src;
    for(let i = review_img.length-1; i>0; i--){
        review_img[i].src = review_img[i-1].src;
    }
    review_img[0].src = href;
}
