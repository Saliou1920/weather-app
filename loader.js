function loading() {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add("lds-dual-ring");
    }, 100);

    loader.classList.add("hide-loader");
}

export function loader() {
    return (
        loading()
    );
}