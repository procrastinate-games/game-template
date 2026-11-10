import './style.css';
import { clamp } from './rules.js';
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
context.fillStyle = '#bdff55';
context.beginPath();
context.arc(clamp(480, 0, canvas.width), 300, 28, 0, Math.PI * 2);
context.fill();
