// hum apni khud ki library bna rhe h ... or jo bhi hmari library use krega use krega use isi format m likhna pdega 

function customRender(reactElement , conatiner){

    // it is aslo write but it will be difficult if we want to add more atrributes .. ek ek krke key deni pdegi 
  /*const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  domElement.setAttribute('href' , reactElement.props.href)
  domElement.setAttribute('target' , reactElement.props.target)

  conatiner.appendChild(domElement)*/

  // modulo method 
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children

  for(const prop in reactElement.props){
    if(prop === 'children') continue         // === for strictly checking
    domElement.setAttribute(prop , reactElement.props[prop])
  }
conatiner.appendChild(domElement)

}

const reactElement = {
    type : 'a',
    props: {
     href: 'https://google.com',
     target: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

// i want a method which render this reactElement inside root 
customRender(reactElement, mainContainer) // ab ye func chlega kse ... toh iske lie hm ek customRender nam ka function bnayge ...
