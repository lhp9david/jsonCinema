
fetch('movies.json')
    .then(res => {
        if (res.ok) {
            return res.json();
        }
    })
    .then(data => {
        function calcStars(rating) {

            let rate = rating / 2
            if (rate <= 1) {
                return (`<img src="img/star.png" alt="">`)
            } else if (rate <= 2) {
                return (`<img src="img/star.png" alt=""><img src="img/star.png" alt="">`)
            } else if (rate <= 3) {
                return (`<img src="img/star.png" alt=""><img src="img/star.png" alt=""><img src="img/star.png" alt="">`)
            } else if (rate <= 4) {
                return (`<img src="img/star.png" alt=""><img src="img/star.png" alt=""><img src="img/star.png" alt=""><img src="img/star.png" alt="">`)
            } else if (rate <= 5) {
                return (`<img src="img/star.png" alt=""><img src="img/star.png" alt=""><img src="img/star.png" alt=""><img src="img/star.png" alt=""><img src="img/star.png" alt="">`)
            }
        }
        data.results.forEach(element => {

            const newDiv = document.createElement('div');
            newDiv.innerHTML = (`<div class="one">
       <div class="image"><img src="${element.poster_path}" alt=""></div>
       <div class="contenu">
           <div class="title">${element.original_title}</div>
           <div class="description">${element.overview}</div>
           <div class="star">${calcStars(element.vote_average)}</div>
       </div>`);

            document.querySelector('.grid').appendChild(newDiv);

        });
    });


