const HTML2Text = (h) => {
    let node = document.createElement('div')
    node.innerHTML = h
    return node.innerText
}