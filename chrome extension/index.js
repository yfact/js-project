let myLeads = []
let inputEl = document.getElementById('input-el')
let inputBtn = document.getElementById('input-btn')
let ulEl = document.getElementById('ul-el')
let listItems = ""
let deleteBtn = document.getElementById('delete-btn')
let tabBtn = document.getElementById('tab-btn')

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// const tabs = [
//   //{url:"https://www.google.com"}
// ]

tabBtn.addEventListener(
  "click",
  () => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    return readArray(myLeads)
    })
    
  }
    )

deleteBtn.addEventListener("dblclick", () => {
  myLeads = []
  listItems = ''
  ulEl.innerHTML = listItems
  localStorage.clear() 
  
})


inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    

    return readArray(myLeads)
   
})
 
let readArray = (leads) => {

  for (let i = 0; i < leads.length; i++) {
  
    listItems += `
    <li>
    <a href = " ${leads[i]}" target="_blank"> ${leads[i]} </a>
    </li>
    `
    
    // myLeads.length -= 1
    //li.textContent = myLeads[i]
    // ulEl.append(li)
  }
ulEl.innerHTML = listItems
console.log(listItems)
}
if (leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  readArray(myLeads)
}

