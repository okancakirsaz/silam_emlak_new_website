import "./core/base/base_view.css"

async function loadModule(moduleName) { 
    await import(`${moduleName}.js`);
 }

  function loadStyle(fileName) { 
     require(`${fileName}.css`);
 }

 if(window.location.href.includes("/")){
    loadStyle("./views/main_page/style/video_element");
    loadStyle("./views/main_page/style/articles");
    loadStyle("./views/main_page/style/property_consulment");
    await loadModule("./views/main_page/main_page");
 }