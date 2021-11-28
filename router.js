import renderMain from "./pages/main/main.js";
import renderResults from "./pages/result/result.js";

const router = new Navigo("/", { hash: true });
const contentDiv = document.querySelector(".content");
router
  .on({
    "/": () => {
      renderMain(contentDiv);
    },
    result: () => {
      renderResults(contentDiv);
    },
  })
  .resolve();