import './styles.css';
import { initNav } from "./navigation";
import { initHomepage } from './homepage';

let content = document.createElement('div');
content.classList.add('content');
document.body.appendChild(content);

initNav();

initHomepage();

