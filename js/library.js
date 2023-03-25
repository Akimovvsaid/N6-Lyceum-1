const select = document.getElementById('select-form');
const hiddenBlock = document.getElementById('e-book');
select.addEventListener('change', () => {
  const selectedValue = select.value;

  // Если выбран первый курс, показать скрытый блок
  if (selectedValue === '1') {
    hiddenBlock.innerHTML = `
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
            <a href="./book/himiya.pdf">
            <img src="./book/book.jpg" class="d-block w-100" alt="...">
            </a>
            
            </div>
            <div class="carousel-item" data-bs-interval="2000">
            <img src="https://shop.kp.ru/catalog/media/kpprosveshhenie/b/1/59928b865c0b1.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="https://shop.kp.ru/catalog/media/kpprosveshhenie/b/1/59928b865c0b1.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" style="color:black;" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
    `;
    return; 

  } else if (selectedValue === '2') {
    hiddenBlock.innerHTML = ``
  }
  else if (selectedValue === '3') {
    hiddenBlock = `
    
    `
  }
});