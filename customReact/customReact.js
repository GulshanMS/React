function customRender(reactElement,containeer){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    containeer.appendChild(domElement)
}


const reactElement={
    type:'a',
    props :{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'

}

const customImg={
    type:'img',
    props:{
        src:'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png',
        alt:"Unable to load iamge"
    }
}

const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)

function customImageRender(customImg,container)
{
    // const domElement=document.createElement(customImg.type)
    // domElement.setAttribute('src',customImg.props.src)
    // domElement.setAttribute('alt',customImg.props.alt)
    // container.appendChild(domElement)
    const domElement=document.createElement(customImg.type)
    for(const prop in customImg.props){
        if(prop==='children') continue;
        domElement.setAttribute(prop,customImg.props[prop])

    }
    container.appendChild(domElement)
    

}
customImageRender(customImg,mainContainer)
