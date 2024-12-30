let quotes=['"Behind every exquisite thing that existed, there was something tragic".<br> —Oscar Wilde','"Every great dream begins with a dreamer". —Harriet Tubman','“There is no cosmetic for beauty like happiness.” —Maria Mitchell','“I don"t decide to represent anything except myself. But that self is full of collective memory.” —Mahmoud Darwish','“I have silences buried so deeply, I weep when they blossom.” —Pavana Reddy','“When we strive to become better than we are, everything around us becomes better too.” —Paulo Coelho','“Education is the most powerful weapon which you can use to change the world.” —Nelson Mandela'];

function generate(){
   let randomquote=Math.floor(Math.random()*quotes.length)
   document.getElementById("quote").innerHTML=quotes[randomquote]
   document.getElementById("paragraph").style.display="none";
}