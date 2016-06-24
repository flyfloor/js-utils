const DOMData = {
    get(dom, attr){
        if (dom && attr) {
            try{
                return dom.dataset[attr];
            } catch(error){
                return dom.getAttribute(`data-${attr}`);
            }
        }
        return undefined;
    },

    set(dom, attr, value){
        if (dom) {
            try{
                dom.dataset[attr] = value;
            } catch(error){
                return dom.setAttribute(`data-${attr}`, value);
            }
        }
    }
}

export default DOMData;