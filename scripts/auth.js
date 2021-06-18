//listens for auth state change
auth.onAuthStateChanged(user => {
    var loading = true
    if(user=== true && loading === true){
        window.location ='./feed.html'
        var loading = false
    }
});

//signup teacher
const t_signupForm = document.querySelector('#t-signup');
if(t_signupForm){
t_signupForm.addEventListener('submit' , (e) =>{
    e.preventDefault();
    const email = t_signupForm['signup-email'].value;
    const password = t_signupForm['signup-password'].value;
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred)
        t_signupForm.reset();
        window.location = '/feed.html'
    });
    
})
}

else{
//sign up student

const s_signupForm = document.querySelector('#s-signup');
if(s_signupForm){
s_signupForm.addEventListener('submit' , (e) =>{
    e.preventDefault();
    const email = s_signupForm['signup-email'].value;
    const password = s_signupForm['signup-password'].value;
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        //console.log(cred);
        s_signupForm.reset();
    });
    
})
}
}

//login in user

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    
    auth.signInWithEmailAndPassword(email, password).then(cred =>{ 
    loginForm.reset();
});
});


//logout user
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(cred =>{
        window.location = '/signin.html'
    });
});