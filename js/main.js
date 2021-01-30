// // selector action 

// $('.first').html('You are Wellcome')

// $('#second').html('We are doing awesome').addClass('violet')

// $('.third').addClass('violet')
// // $("#second").addClass('violet')

// $('.four').css('color','red')

// $('.btn').click(()=> {
    // console.log('clicked !')
 //})

// $('.btn2').on('click',()=> {
   //  $('.four').addClass('violet')
    // event.target.style.color = "red"
// })

// // Http Client
 let url = 'https://jsonplaceholder.typicode.com/user';


 $.get(url,(res)=> {
     console.log(res)
 })

 $.post(url, {},(res) => {

 })

// https://www.w3schools.com/jquery/default.asp

 let btn = document.querySelector('.btn')
 btn.addEventListener('click', show)

 function show(){
     setTimeout(function (){
         document.querySelector('.first').style.display ='block'
     }, 2000)
 }


// Getter html, text, val

 let second =  $('#second').html();
//  let second =  $('#second').text();
 console.log(second)

// Setter 
 $('#second').html(`<h1>I am from Jquery</h1>`);
 $('#second').text('we are developers');


$('.btn').click(()=> {
    // $('#second').toggleClass('violet');
    // $('#second').css({'color':'red', //'font-size':"30px"})

    // HTTP Request
    let url = 'http://localhost:5000/user'
    $.get(url, (res)=> {
       console.log(res)
       var output = ''
       for(user of res){
           output += `<li>I am ${user.name} and i am ${user.prof}</li>`
           
       }
       // display output
       $('.userlist').html(output)
    })
})
