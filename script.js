// script to flip coin 
    let heads = 0;
    let tails =0;
    let coin = document.querySelector(".coin");
    let flipBtn = document.querySelector("#flip-button");
    let resetBtn = document.querySelector("#reset-button");
    let flipImg = document.getElementsByClassName('callFlip');
    var stopLoop = false;
    
    
    Array.from(flipImg).forEach(element => {
        element.addEventListener("click", ()=>{
            if(flipBtn.disabled == true) {
              return
            }
            stopLoop = false;

            async function doSomething() {
                const randomArray = new Uint8Array(1);
      
                // Generate a random byte
                crypto.getRandomValues(randomArray);
                
                // Get the random number (0 or 1) by taking the modulus of 2
                const result = randomArray[0] % 2;
                coin.style.animation = "none";
                
                if(result){
              
                    setTimeout(function(){
                        coin.style.animation = "spin-heads 3s forwards";
                    }, 100);
                   
                       
                   
                    heads++;
                }else{
                    setTimeout(function(){
                        coin.style.animation = "spin-tails 3s forwards";
                    }, 100);
                  
                    
                
                    tails++;
                }
                setTimeout(updateStats, 3000);
                disableButton();
                // Simulate an asynchronous task with a delay
                await new Promise((resolve) => setTimeout(resolve, 3000));
                
                
          }
          doSomething();
         
      });
    });
    
    function updateStats() {
        document.querySelector("#heads-count").textContent = "Heads: " +  heads;
        document.querySelector("#tails-count").textContent = "Tails: " + tails; 
    }
    
    function disableButton(){
      flipBtn.disabled = true; 
        setTimeout(function(){
          flipBtn.disabled = false;
        }, 3000);
    }
    
    resetBtn.addEventListener("click", ()=> {
        coin.style.animation="none";
        heads=0;
        tails=0; 
        document.getElementById('result').innerHTML =  "&nbsp;" ;
        stopLoop = true ;
        times = 0;
        
        updateStats();
    })