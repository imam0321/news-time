// Load news
const loadNews = () => {
  const url = "https://openapi.programming-hero.com/api/news/category/01";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayNews(data.data));
};
// Display news
const displayNews = (newses) => {
  const defaultNews = document.getElementById("default-news");
  defaultNews.innerHTML = "";
  newses.forEach((news) => {
    // console.log(news);
    const newsDiv = document.createElement("div");
    newsDiv.classList.add("col");
    newsDiv.innerHTML = `
    <div class="card mb-3 border-0 rounded-3 shadow-lg">
      <div class="row g-0">
        <div class="col-md-3">
          <img 
          src="${news.image_url}" 
          class="img-fluid rounded-3"
          style="height: 250px; width: 300px;" 
          alt="...">
        </div>
        <div class="col-md-9 my-auto">
          <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            <p class="card-text mt-3 mb-5">${news.details.slice(0, 300)}...</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <img
                  src="${news.author.img}"
                  class="rounded-circle me-2"
                  style="height: 50px; width: 50px;"
                  alt=""
                />
                <div>
                  <span class="d-block">${news.author.name}</span>
                  <span>${news.author.published_date}</span>
                </div>
              </div>
              <div>
                <i class="fa-regular fa-eye"></i>
                <span>${news.total_view}M</span>
              </div>
              <div>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
    `;
    defaultNews.appendChild(newsDiv);
  });
};
// Load news category 
const loadNewsCatagory = () => {
  const url = "https://openapi.programming-hero.com/api/news/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => desplayNewsCategory(data.data.news_category));
};
// Display News Category 
const desplayNewsCategory = (categories) => {
  const newsCategoryContainer = document.getElementById('news-category-container');
  categories.forEach(category =>{
    console.log(category);
    const categoryLi = document.createElement('li');
    categoryLi.classList.add('nav-item');
    categoryLi.innerHTML = `
       <a class="nav-link" aria-current="page" href="#">${category.category_name}</a>
    `;
    newsCategoryContainer.appendChild(categoryLi);
  })
};
loadNewsCatagory();
// loadNews();
