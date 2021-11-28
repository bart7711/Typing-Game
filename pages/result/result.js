export default (contentDiv, resultInfo) => {  
    fetch("./pages/result/result.html")
      .then((response) => response.text())
      .then((aboutHtml) => {
        contentDiv.innerHTML = aboutHtml;
      });
  };