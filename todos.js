//VARIACAO DE TABS
const BtnNav = document.querySelectorAll('.BtnNav');
BtnNav.forEach(tab => tab.addEventListener('click', () =>tabClicked(tab)));
const tabClicked = (tab) => {
    BtnNav.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('show'));
    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);
    content.classList.add('show');
}
const currentActiveTab = document.querySelector('.BtnNav.active');
tabClicked(currentActiveTab);/* para o primeiro estar automaticamente checado */




//EVENTO SCROLL
window.addEventListener("scroll", function(){
    let containerNav = document.querySelector('.containerNav')
    containerNav.classList.toggle('rolagem',window.scrollY > 0)
})

//MOBILE MENU
document.querySelector('.mobileMenu').addEventListener('click', function() {
    document.querySelector('.containerNav').classList.toggle('openMenu');
});


//CADASTRO EMAIL
let sectionFormCadastro = document.querySelector('#sectionFormCadastro')
let Btncadastrar = document.querySelectorAll('.Btncadastrar')
let btnClose = document.querySelector('#sectionFormCadastro .btnClose')


btnClose.addEventListener('click', function(){
    sectionFormCadastro.style.display = 'none'
    btnClose.style.display = 'none'
})
Btncadastrar.forEach(btncdtr => btncdtr.addEventListener('click', function(){
    sectionFormCadastro.style.display = 'flex'
    sectionFormCadastro.classList.add('CadastroOpen')
    btnClose.style.display = 'block'
}))

function fecharForm(){
    sectionFormCadastro.style.display = 'none'
}

function fecharEvento(){
    document.querySelector('.containerAnuncio').style.display = "none"
}