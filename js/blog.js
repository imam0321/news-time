const blogs = [
  {
    question: "What is difference between var let const in javascript?",
    anwser:
      "var and let create variables that can be reassigned another value. const creates constant variables that cannot be reassigned another value.",
  },
  {
    question:
      "What is the difference between arrow function and regular function in javascript?",
    anwser:
      "Arguments object inside the regular functions contains the arguments in an array-like object. The arrow function, on the opposite, doesn't define arguments.",
  },
  {
    question: "What is the difference between map, foreach in javascript?",
    anwser:
      "The forEach() method does not returns a new array based on the given array. The map() method returns an entirely new array. The forEach() method returns “undefined“. The map() method returns the newly created array according to the provided callback function.",
  },
  {
    question: "What is the difference between filter and find in javascript?",
    anwser:
      "filter() returns an array containing the element that satisfies the condition, but find() returns the element itself that satisfies the condition. In filter() , whole array is iterated despite the fact that the element being searched for is present at the beginning.",
  },
  {
    question: "Why use template string in javascript?",
    anwser:
      "Template literals provide an easy way to interpolate variables and expressions into strings. The method is called string interpolation.",
  },
];

const displayBlogData = (blogs) => {
  toggleLoader(true);
  const blogsSection = document.getElementById("blogs");
  blogsSection.innerHTML = "";
  blogs.forEach((blog) => {
    const blogsDiv = document.createElement("div");
    blogsDiv.classList.add("col");
    blogsDiv.innerHTML = `
    <div id="blogs" class="card mb-3 border rounded-3 shadow-lg p-2">
      <div class="card-body">
        <h5 class="card-title">${blog.question}</h5>
        <p class="card-text">${blog.anwser}</p>
      </div>
    </div>
  `;
    blogsSection.appendChild(blogsDiv);
  });
  toggleLoader(false);
};
