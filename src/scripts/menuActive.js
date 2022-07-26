export default function activeLink(event) {
    document.querySelector("#menu a.active").classList.remove("active");
    event.target.classList.add("active");
}