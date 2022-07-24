
const featuresContainer = document.querySelector(".features-container")
const companyContainer = document.querySelector(".company-container")
const features = document.querySelector(".features");
const company = document.querySelector(".company");

const arrow1 = document.querySelector(".arrow1");

const arrow2 = document.querySelector(".arrow2");

//feature
featuresContainer.addEventListener("mouseover",() =>{

    arrow1.src="images/icon-arrow-up.svg"

})
featuresContainer.addEventListener("mouseout",() =>{

    arrow1.src="images/icon-arrow-down.svg"
    
})

//company
companyContainer.addEventListener("mouseover",() =>{

    arrow2.src="images/icon-arrow-up.svg"
        
})
companyContainer.addEventListener("mouseout",() =>{
        
    arrow2.src="images/icon-arrow-down.svg"
            
})

//side bar

const togglebtn = document.querySelector(".toggle");
const sidebar = document.querySelector(".sidebar");
const close = document.querySelector(".close")


togglebtn.addEventListener("click", () => {
    sidebar.classList.add("showsidebar")
})
close.addEventListener("click", () => {
    sidebar.classList.remove("showsidebar")
})
//mobile view port

const mobile_featuresContainer = document.querySelector(".mobile-features-container")
const mobile_companyContainer = document.querySelector(".mobile-company-container")
const mobile_features = document.querySelector(".mobile-features");
const mobile_company = document.querySelector(".mobile-company");


const mobile_arrow1 = document.querySelector(".mobile-arrow1");

const mobile_arrow2 = document.querySelector(".mobile-arrow2");


mobile_featuresContainer.addEventListener("click",() =>{

    
if (mobile_features.classList.contains("show")){
    mobile_arrow1.src="images/icon-arrow-up.svg"
    mobile_features.classList.remove("show")
}else{
    mobile_features.classList.add("show")
}
})

mobile_companyContainer.addEventListener("click",() =>{

    
    if (mobile_company.classList.contains("show")){
        mobile_arrow1.src="images/icon-arrow-up.svg"
        mobile_company.classList.remove("show")
    }else{
        mobile_company.classList.add("show")
    }
    })