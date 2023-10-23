import "./core/base/base_view.css"
async function loadModule(moduleName) { 
    await import(`${moduleName}.js`);
 }

  function loadStyle(fileName) { 
     require(`${fileName}.css`);
 }

try {
   if(document.getElementById("baseHref").href="/"){
       loadStyle("./views/main_page/style/video_element");
       loadStyle("./views/main_page/style/articles");
       loadStyle("./views/main_page/style/property_consulment");
       await loadModule("./views/main_page/main_page");
    }
} catch (error) {
   
}
 if(window.location.href.includes("/iletisim.html")){
   loadStyle("./views/contact/style/contact");
   await loadModule("./views/contact/contact");
}

if(window.location.href.includes("/konumumuz.html")){
   loadStyle("./views/our_location/style/map");
   loadStyle("./views/our_location/style/bottom_elements");
   await loadModule("./views/our_location/our_location");
}