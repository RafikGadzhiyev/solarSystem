const PLANETS = {
    sun: {
        x: CENTER_X,
        y: CENTER_Y,
        sx: CENTER_X,
        sy: CENTER_Y,
        radius: 350,
        speed: 0,
        angle: 0,
        orbitRadius: 0,
        color: '#F7852E'
    },
    mercury: {
        x: CENTER_X,
        y: CENTER_Y,
        sx: CENTER_X,
        sy: CENTER_Y,
        radius: 10,
        angle: 0,
        speed: 0.075,
        orbitRadius: 450,
        color: '#e5e5e5'
    },
    venus: {
        x: CENTER_X,
        y: CENTER_Y,
        sx: CENTER_X,
        sy: CENTER_Y,
        radius: 28,
        angle: 0,
        speed: 0.07,
        orbitRadius: 550,
        color: '#a57c1b'
    },
    earth: {
        x: CENTER_X,
        y: CENTER_Y,
        sx: CENTER_X,
        sy: CENTER_Y,
        radius: 30,
        angle: 0,
        speed: 0.065,
        orbitRadius: 650,
        color: '#688ECF'
    },
    mars: {
        x: CENTER_X,
        y: CENTER_Y,
        sx: CENTER_X,
        sy: CENTER_Y,
        radius: 11,
        angle: 0,
        speed: 0.055,
        orbitRadius: 750,
        color: '#c1440e'
    },
    jupiter: {
        x: CENTER_X,
        y: CENTER_Y,
        sx: CENTER_X,
        sy: CENTER_Y,
        radius: 80,
        angle: 0,
        speed: 0.045,
        orbitRadius: 850,
        color: "#bcafb2"
    },
    saturn: {
        x: CENTER_X,
        y: CENTER_Y,
        sx: CENTER_X,
        sy: CENTER_Y,
        radius: 60,
        angle: 0,
        speed: 0.03,
        orbitRadius: 1000,
        color: '#ab604a'
    },
    uranus: {
        x: CENTER_X,
        y: CENTER_Y,
        sx: CENTER_X,
        sy: CENTER_Y,
        radius: 35,
        angle: 0,
        speed: 0.017,
        orbitRadius: 1150,
        color: '#c6d3e3'
    },
    neptune: {
        x: CENTER_X,
        y: CENTER_Y,
        sx: CENTER_X,
        sy: CENTER_Y,
        radius: 35,
        angle: 0,
        speed: 0.01,
        orbitRadius: 1300,
        color: '#4b70dd'
    }
}


function drawPlanets() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (let planet in PLANETS) {
        let p = PLANETS[planet];

        ctx.beginPath();
        ctx.arc(p.sx, p.sy, p.orbitRadius, 0, 2 * Math.PI);
        ctx.strokeStyle = '#222';
        ctx.lineWidth = '4';
        ctx.stroke();
        ctx.strokeStyle = DEFAULT_CANVAS_COLOR;
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.closePath();
        p.angle += p.speed;
        p.x = p.sx + Math.cos(p.angle) * p.orbitRadius;
        p.y = p.sy + Math.sin(p.angle) * p.orbitRadius;

    }
    requestAnimationFrame(drawPlanets);
}

function getPlanetAngle(startX, startY, planetRadius, planetAngle) {
    planetAngle *= Math.PI / 180;
    return {
        x: startX + planetRadius * Math.cos(planetAngle),
        y: startY + planetAngle * Math.sin(planetAngle)
    }
}

drawPlanets();
