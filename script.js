fetch("https://624dc3c053326d0cfe523381.mockapi.io/blog")
    .then((response) => response.json())
    .then((data) => {
        const blog = document.querySelector(".blog")
        let i = 0;
        while(i < data.length) {
            const date = document.createElement("p");
            const text = document.createElement("div");
            const likes = document.createElement("div");
            likes.className="likes"
            const image = document.createElement("img");
            image.setAttribute("src", data[i].image)
            text.textContent = data[i].text;
            const dateFormated = new Date(data[i].date);
            const czechDate = dateFormated.toLocaleDateString("cz-CZ");
            date.textContent = "vytvořeno: " + czechDate;    
            likes.innerHTML = `
            <div class="likes-thumb"> <img src=img.png width="40px">${data[i].likes}</></div>
            <span class="likes-text">people like this</span>`
            blog.append(date, image,text, likes);
            i++;
        }

    });