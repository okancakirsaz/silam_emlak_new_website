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

if(window.location.href.includes("/hakkimizda.html")){
   loadStyle("./views/about_us/style/about_us");
   await loadModule("./views/about_us/about_us");
}

if(window.location.href.includes("/gizlilik-politikasi.html")){
   loadStyle("./views/privacy_policy/style/privacy_policy");
   await loadModule("./views/privacy_policy/privacy_policy");
}

if(window.location.href.includes("/gayrimenkul-danismanlik.html")){
   loadStyle("./views/property_consulment/style/property_consulment");
   await loadModule("./views/property_consulment/property_consulment");
}

if(window.location.href.includes("/ilanlar.html")){
   loadStyle("./views/articles/style/articles");
   await loadModule("./views/articles/articles");
}

if(window.location.href.includes("/ilan.html")){
   loadStyle("./views/opened_article/style/opened_article");
   await loadModule("./views/opened_article/opened_article");
}

if(window.location.href.includes("/hesaplama.html")){
   loadStyle("./views/calculator/style/calculator");
   await loadModule("./views/calculator/calculator");
}