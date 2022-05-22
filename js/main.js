const navs = document.querySelectorAll("nav a");
const title = document.querySelector(".title");
const root = document.querySelector(".root");
import mainPage from "../pages/main.js";
import SimulateInterview from "../pages/SimulateInterview.js";
import InterviewSkill from '../pages/TecInterview.js'

const routeList = [
  { name: "首页", path: "" },
  { name: "HR面试", path: "#/HrInterview" },
  { name: "笔试", path: "#/PaperTest" },
  { name: "技术面试", path: "#/TecInterview" },
  { name: "模拟面试", path: "#/SimulateInterview" },
  { name: "面试技巧", path: "#/InterviewSkill" },
  { name: "薪资查询", path: "#/PayCheck" },
];

window.addEventListener("load", function () {
  if (!location.hash) {
    location.hash = "";
  }
  title.innerHTML = "首页";
  root.innerHTML = mainPage;
  console.log(1);
});

window.addEventListener("hashchange", function () {
  routeList.forEach((element) => {
    if (element.path === location.hash) {
      title.innerHTML = `${element.name}`;
      if (element.name === "首页") {
        root.innerHTML = mainPage;
      } else if (element.name === "模拟面试") {
        root.innerHTML = SimulateInterview;
      } else if (element.name === "面试技巧") {
        root.innerHTML = InterviewSkill
      }
      else root.innerHTML = element.name;
    }
    // switch(element.name){
    //     case ('首页') :
    //     root.innerHTML = mainPage; break;
    //     case ('模拟面试'):
    //     root.innerHTML = SimulateInterview; break;
    // }
  });
});
