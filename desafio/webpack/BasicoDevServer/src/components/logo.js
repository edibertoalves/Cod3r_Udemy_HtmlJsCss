import imagemLogo from '../assets/imgs/logoBootstrap.jpg'

export default (() => {
    const elementoImg= document.createElement('img')

    elementoImg.src = imagemLogo;
    
    return elementoImg;

})