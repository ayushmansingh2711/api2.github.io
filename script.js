const mybtn = document.getElementById("mybtn");


mybtn.addEventListener("click",function(){
   async  function apidata(){
     const username  = document.getElementById("name").value;
     const data = await fetch(`https://api.github.com/users/${username}`)
     const data1 =await data.json();
     console.log(data1)

      const myname = document.getElementById("name");
      const myBio = document.getElementById("bio");
      const myfollowers = document.getElementById("followers");
      const myimg = document.getElementById("myimg");

      myname.innerHTML=data1.name;
      myBio.innerHTML=data1.bio;
      myfollowers.innerHTML=data1.followers;
      myimg.src = data1.avatar_url;
   }
   apidata()
})