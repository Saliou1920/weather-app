const loader = document.querySelector('.loader');
setTimeout(() => {
    loader.classList.add("lds-dual-ring");
}, 100);
loader.classList.remove("lds-dual-ring");