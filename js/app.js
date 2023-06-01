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
                <i onclick="newsModalLoader('${
                  news._id
                }')" class="fa-solid fa-arrow-right fs-4" data-bs-toggle="modal" data-bs-target="#newsModal"></i>
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
// Modal loader
const newsModalLoader = (newsId) => {
  const url = `https://openapi.programming-hero.com/api/news/${newsId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => newModalDisplay(data.data));
};
// Modal display
const newModalDisplay = (newsDetails) => {
  const modalContainer = document.getElementById("modal-container");
  modalContainer.innerHTML = "";
  newsDetails.forEach((newsDetail) => {
    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal-content");
    modalDiv.innerHTML = `
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="newsModalLabel">${newsDetail.title}</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      ${newsDetail.details}
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
  `;
    modalContainer.appendChild(modalDiv);
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
  const newsCategoryContainer = document.getElementById(
    "news-category-container"
  );
  categories.forEach((category) => {
    const categoryLi = document.createElement("li");
    categoryLi.classList.add("nav-item");
    categoryLi.innerHTML = `
       <a onclick="loadDefaultNews('${category.category_id}')" class="nav-link" aria-current="page" href="#">${category.category_name}</a>
    `;
    newsCategoryContainer.appendChild(categoryLi);
  });
};
// Display news ditais category
const loadDefaultNews = (categoryId) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayNews(data.data));
};

loadDefaultNews();
loadNewsCatagory();
loadNews();
