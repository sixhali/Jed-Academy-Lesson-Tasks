let url = "https://dummyjson.com/products";
let product_row = document.getElementById("product");
let loading = document.querySelector(".loading");


const rating_stars=(rate)=>{
    let elem = ''
    const rating_stars_class = ['fa fa-star','fa fa-star','fa fa-star','fa fa-star','fa fa-star']
    rating_stars_class.forEach((item , index)=>{
        elem += `<span class="${item} ${rate >= index +1 ? 'checked' : ''}"></span>`
    })
    return elem
}

axios(url).then(({status,data})=>{
    if(status === 200){
        loading.style.display= 'none'
        data.products.forEach((product, index, arr) => {
        
            const { title , images , price , rating} = product
          product_row.innerHTML += `<div class="col-12 col-md-1 col-lg-3 product p2 border border-1 rounded">
                                     <div class="h2">${title}</div>
                                     <img src="${images[0]}" alt="">
                                     <div class="price">${price}Azn</div>
                                     ${rating_stars(rating)}
                                    </div>`;
                                    console.log(data);
                                    
                                    
                                    
        });
    }
    
})