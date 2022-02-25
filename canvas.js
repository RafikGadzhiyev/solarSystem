const canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

const DEFAULT_CANVAS_COLOR = '#fff';
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const CENTER_X = WIDTH / 2;
const CENTER_Y = HEIGHT / 2;
const coords = canvas.getBoundingClientRect();

ctx.fillStyle = DEFAULT_CANVAS_COLOR;
ctx.strokeStyle = DEFAULT_CANVAS_COLOR;
