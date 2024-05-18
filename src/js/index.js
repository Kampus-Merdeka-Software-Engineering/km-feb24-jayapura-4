const menuBar = document.querySelector('#side-bar .sidebar-header .bx.bx-menu');
const sidebar = document.getElementById('side-bar');

menuBar.addEventListener('click', function() {
    sidebar.classList.toggle('active');
})

const searchButton = document.querySelector('#content .head-main form .searchbar .searchbtn');
const searchButtonIcon = document.querySelector('#content .head-main form .searchbar .searchbtn .bx');
const searchForm = document.querySelector('#content .head-main form')

searchButton.addEventListener('click', function (e){
    if(window.innerWidth < 576){
        e.preventDefault();
        searchForm.classList.toggle('show');
        if(searchForm.classList.contains('show')){
            searchButtonIcon.classList.replace('bx-search', 'bx-x')
        } else {
            searchButtonIcon.classList.replace('bx-x', 'bx-search')
        }
    }
})

window.addEventListener('resize', function(){
    if (this.innerWidth < 768) {
        sidebar.classList.remove('active');
    }
});

window.addEventListener('resize', function(){
    if(this.innerWidth > 576){
        searchButtonIcon.classList.replace('bx-x', 'bx-search')
        searchForm.classList.remove('show')
    }
});