const choices = document.querySelectorAll('.choice')
const computerChoices = ['rock','paper','scissors']
var userChoice;
var computerChoice;


const computerDisplay = document.querySelector('#computer-choice')
choices.forEach(choice => {
    choice.addEventListener('click',(e)=> {
        computerDisplay.textContent = '...'
        setTimeout(()=>{
            userChoice = e.target.textContent;
            computerChoice = computerChoices[Math.floor(Math.random()*3+0)]
            computerDisplay.textContent = computerChoice
            setTimeout(()=>{
                if(checkUser(userChoice,computerChoice)==1) alert('You Win!')
                else if(checkUser(userChoice,computerChoice)==2) alert('Tie!')
                else alert('You lose!')
            },100)
            
        },400)
        
        
    })
})

const checkUser = (userChoice,computerChoice) => {
    if(userChoice==="rock" && computerChoice==="paper") {
        return 0
    }
    if(userChoice==="scissors" && computerChoice==="rock") {
        return 0;
    }
    if(userChoice==="paper" && computerChoice==="scissors") {
        return 0;
    }
    if(userChoice===computerChoice) return 2;
    return 1;
}
