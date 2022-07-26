import { Router } from './router.js';
import activeLink from './menuActive.js';

const router = new Router();

router.add("/", "src/pages/home.html");
router.add("/universo", "src/pages/universo.html");
router.add("/exploracao", "src/pages/exploracao.html");
router.add(404, "src/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
/*=================================================================================*/

const linkMenu = document.querySelector("#menu");
linkMenu.addEventListener("click", activeLink)

