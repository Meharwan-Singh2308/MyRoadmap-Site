let className = document.querySelectorAll(".classHeading");
let classChapter = document.querySelectorAll(".classChapters");

let classChapterHeading = document.querySelectorAll(".classChapterHeading");
let classChapterTopics = document.querySelectorAll(".classChapterTopics");

let chapterheadingIcons = document.querySelectorAll(".chapterheadingIcons");

let completionPercentage = document.querySelector(".completionPercentage");

function toggleShowText(parentDivs, childDivs) {

  parentDivs.forEach((parentDiv,index) => {
    parentDiv.addEventListener("click", function () {
      childDivs[index].classList.toggle("show");
    });
  })


  
}
document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(".toggle");
  const texts = document.querySelectorAll("h4");
  const completionPercentage = document.querySelector(".completionPercentage"); // Selector for the percentage display
  const totalTopics = checkboxes.length;
  let completedTopics = 0;

  // Initialize the state based on localStorage
  checkboxes.forEach((checkbox, index) => {
    const storedValue = localStorage.getItem(`topic-${index}`);
    if (storedValue === "true") {
      checkbox.checked = true;
      texts[index].classList.add("strike-through");
      texts[index].style.color = "gray";
      completedTopics++;
    } else {
      checkbox.checked = false;
      texts[index].classList.remove("strike-through");
      texts[index].style.color = "rgb(160, 94, 23)";
    }
  });

  // Update the initial completion percentage
  completionPercentage.textContent = `${((completedTopics / totalTopics) * 100).toFixed(1)}%`;

  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        texts[index].classList.add("strike-through");
        texts[index].style.color = "gray";
        completedTopics++;
        localStorage.setItem(`topic-${index}`, "true");
      } else {
        texts[index].classList.remove("strike-through");
        texts[index].style.color = "rgb(160, 94, 23)";
        completedTopics--;
        localStorage.setItem(`topic-${index}`, "false");
      }

      // Update the completion percentage
      const percentage = ((completedTopics / totalTopics) * 100).toFixed(1);
      localStorage.setItem("CompletionPercentage", percentage);
      completionPercentage.textContent = `${percentage}%`;
    });
  });
});


classChapterHeading.forEach((chapter, index) => {
  chapter.addEventListener("click", function () {
    classChapterTopics[index].classList.toggle("show");
    chapter.querySelector("i").classList.toggle("rotate180");
  });
});

toggleShowText(className, classChapter);
