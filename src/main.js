import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { onSearchBtnSubmit } from './js/render-functions';

onSearchBtnSubmit;
const formSearch = document.querySelector('.form');

formSearch.addEventListener('submit', onSearchBtnSubmit);
