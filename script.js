const button= document.getElementById("btn")


button.addEventListener("click",()=>{
  let name=document.getElementById("name").value;
  const url=`https://api.jikan.moe/v4/anime?q=${name}&limit=1`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const anime = data.data[0];
     const infoDiv = document.getElementById("Info");
     infoDiv.style.backgroundColor="#212121"
     infoDiv.innerHTML = `
      <h1 class="text-4xl text-pretty  font-bold text-white drop-shadow-[0_0_8px_#5bc0be] mt-[10px]">${anime.title}</h1>
      <h2 class="mt-4 text-pretty text-2xl text-white drop-shadow-[0_0_8px_#5bc0be]">${anime.genres.map(g => g.name).join(", ")}</h2>
      <p class="mt-6 text-pretty text-white text-sm sm:text-base max-w-3xl text-center sm:text-left px-4 text-lg text-white drop-shadow-[0_0_8px_#5bc0be]" style=" margin-left:8px">${anime.synopsis}</p>
       <img src="${anime.images.jpg.image_url}" class="w-40 h-40 sm:w-48 sm:h-48 rounded-xl mt-4 object-contain">`
  })
 
})