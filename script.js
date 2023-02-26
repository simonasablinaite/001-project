// Pradiniai lango nustatymai
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];

// Uzfiksuojamas formos plotas, kad nebekistu:
window.addEventListener('resize', function () {
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
})

const mouse = {
   x: undefined,
   y: undefined,
}

canvas.addEventListener('click', function (event) {
   mouse.x = event.x;
   mouse.y = event.y;
   drawCircle();
});

canvas.addEventListener('mousemove', function (event) {
   mouse.x = event.x;
   mouse.y = event.y;
   drawCircle();
})

class Particle {
   constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 5 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
   }
   update() {
      this.x += this.speedX;
      this.y += this.speedY;
   }
   draw() {
      ctx.fillStyle = 'yellowgreen';
      ctx.beginPath();
      ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
      ctx.fill(); //uzpildo apskritima spalva
   }
}

function init() {
   for (let i = 0; i < 100; i++) {
      particlesArray.push(new Particle());
   }
}
init();

function handleParticles() {
   for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      particlesArray[i].draw();
   }
}


function animate() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   handleParticles();
   requestAnimationFrame(animate)
}
animate();

