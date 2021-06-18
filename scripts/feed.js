

document.getElementById('postbtn').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display="flex";
});

document.getElementById('close').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display="none";
}); 




document.querySelectorAll('.ansbtn').forEach(function(item){
item.addEventListener('click',function(){
    document.querySelector('.ans-modal').style.display="flex";
});
 });

document.getElementById('close2').addEventListener('click',function(){
    document.querySelector('.ans-modal').style.display="none";
}); 



function modalfunc(){
document.getElementById('question-box').addEventListener('click',function(){
    document.querySelector('.ques-modal').style.display="flex";
});

document.getElementById('close1').addEventListener('click',function(){
    
    document.querySelector('.ques-modal').style.display="none";
}); 
}

let upvotebtn=document.querySelector('#upvote');
let downvotebtn=document.querySelector('#downvote');
let upvotenum=document.querySelector('#upvotenum');
let downvotenum=document.querySelector('#downvotenum');
upvotebtn.addEventListener('click',()=>{
    upvotenum.value=parseInt(upvotenum.value)+1;
    upvotenum.style.color="#04193b";
    postvote1.style.color="#04193b";
    document.querySelector('#upvote').disabled = true;
    document.querySelector('#downvote').disabled = true;

});
downvotebtn.addEventListener('click',()=>{
    downvotenum.value=parseInt(downvotenum.value)+1;
    downvotenum.style.color="#04193b";
    downvotebtn.style.color="#04193b";
    postvote2.style.color="#04193b";
    document.querySelector('#downvote').disabled = true;
    document.querySelector('#upvote').disabled = true;
});


//ISSAC EKHANE PROFILE CHECK KORE BUTTON ENABLE DISBLE KORTE HOBE
document.querySelector("#upvote").disabled = false;
document.querySelector("#downvote").disabled = false;
