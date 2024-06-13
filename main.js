// // // HTML Canvas

// // // Canvas Setup
// // var cnv = document.getElementById("myCanvas");
// // var ctx = cnv.getContext("2d");
// // cnv.width = 1000;
// // cnv.height = 10000;

// let MC = document.getElementById("mc-img");
// // ctx.drawImage(MC, 25, 9955, 20, 20);

// // //floor one
// // var platforms = ctx.fillRect(0, 9975, 1000, 25);
// // ctx.fillRect(100, 9950, 100, 75);
// // ctx.fillRect(150, 9925, 50, 75);
// // ctx.fillRect(300, 9900, 200, 25);
// // ctx.fillRect(600, 9850, 50, 200);

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Set canvas dimensions
canvas.width = 800;
canvas.height = 7000;

var player = {
  x: 50,
  y: canvas.height - 50,
  width: 30,
  height: 30,
  speed: 3.5,
  jumpStrength: 15,
  velX: 0,
  velY: 0,
  grounded: false,
};

var ground = {
  x: 0,
  y: canvas.height - 20,
  width: canvas.width,
  height: 20,
};

var platforms = [
  { x: 200, y: canvas.height - 100, width: 200, height: 20 },
  { x: 400, y: canvas.height - 200, width: 200, height: 20 },
  { x: 100, y: canvas.height - 300, width: 200, height: 20 },
  { x: 600, y: canvas.height - 450, width: 20, height: 20 },
  { x: 450, y: canvas.height - 400, width: 20, height: 20 },
  { x: 700, y: canvas.height - 500, width: 20, height: 20 },
  { x: 750, y: canvas.height - 600, width: 50, height: 20 },
  { x: 0, y: canvas.height - 680, width: 750, height: 20 },
  { x: 0, y: canvas.height - 850, width: 100, height: 20 },
  { x: 0, y: canvas.height - 950, width: 100, height: 20, dX: 1.5 },
  { x: 0, y: canvas.height - 1050, width: 700, height: 20 },
  { x: 0, y: canvas.height - 1200, width: 100, height: 20, dX: 1.5 },
  { x: 700, y: canvas.height - 1270, width: 100, height: 20 },
  { x: 200, y: canvas.height - 1180, width: 500, height: 10 },
  { x: 700, y: canvas.height - 1270, width: 20, height: 100 },
  { x: 750, y: canvas.height - 1400, width: 100, height: 20 },
  { x: 0, y: canvas.height - 1500, width: 750, height: 10 },
  { x: 100, y: canvas.height - 1650, width: 100, height: 20, dX: 1 },
  { x: 200, y: canvas.height - 1800, width: 100, height: 20, dX: 1.5 },
  { x: 300, y: canvas.height - 1950, width: 100, height: 20, dX: 2 },
  { x: 400, y: canvas.height - 2100, width: 100, height: 20, dX: 1 },
  { x: 500, y: canvas.height - 2250, width: 100, height: 20, dX: 0.5 },
  { x: 500, y: canvas.height - 2400, width: 100, height: 20, dX: 2 },
  { x: 150, y: canvas.height - 2550, width: 100, height: 20, dX: 1 },
  { x: 250, y: canvas.height - 2700, width: 100, height: 20, dX: 1.5 },
  { x: 350, y: canvas.height - 2850, width: 100, height: 20, dX: 2 },
  { x: 450, y: canvas.height - 3000, width: 100, height: 20, dX: 1 },
  { x: 0, y: canvas.height - 3150, width: 100, height: 20, dX: 0.5 },
  { x: 50, y: canvas.height - 3300, width: 100, height: 20, dX: 2 },
  { x: 700, y: canvas.height - 3450, width: 100, height: 20 },
  { x: 0, y: canvas.height - 3600, width: 600, height: 20 },
  { x: 0, y: canvas.height - 3600, width: 600, height: 20, dY: 1 },
  { x: 0, y: canvas.height - 4600, width: 600, height: 20 },
  { x: Math.random() * 300, y: canvas.height - 4800, width: 60, height: 20 },
  { x: Math.random() * 300, y: canvas.height - 5000, width: 60, height: 20 },
  { x: Math.random() * 300, y: canvas.height - 5200, width: 60, height: 20 },
  { x: Math.random() * 300, y: canvas.height - 5400, width: 60, height: 20 },
  { x: Math.random() * 300, y: canvas.height - 5600, width: 60, height: 20 },
  { x: Math.random() * 300, y: canvas.height - 5800, width: 60, height: 20 },
  { x: Math.random() * 300, y: canvas.height - 6000, width: 60, height: 20 },
  { x: Math.random() * 300, y: canvas.height - 6200, width: 60, height: 20 },
  { x: Math.random() * 300, y: canvas.height - 6400, width: 60, height: 20 },
  { x: 400, y: canvas.height - 6500, width: 1000, height: 20 },
  { x: 0, y: canvas.height - 6800, width: 300, height: 20 },
];

var deathPlatform = [
  { x: 350, y: canvas.height - 700, width: 100, height: 20 },
  { x: 200, y: canvas.height - 750, width: 20, height: 70 },
  { x: 200, y: canvas.height - 1220, width: 20, height: 20 },
  { x: 400, y: canvas.height - 1270, width: 20, height: 70 },
  { x: 680, y: canvas.height - 1270, width: 20, height: 70 },
  { x: 200, y: canvas.height - 1190, width: 500, height: 10 },
  { x: 0, y: canvas.height - 1510, width: 675, height: 10 },
  { x: 150, y: canvas.height - 2625, width: 100, height: 20, dX: 2 },
  { x: 250, y: canvas.height - 2775, width: 100, height: 20, dX: 1 },
  { x: 350, y: canvas.height - 2925, width: 100, height: 20, dX: 0.5 },
  { x: 450, y: canvas.height - 3075, width: 100, height: 20, dX: 2 },
  { x: 0, y: canvas.height - 3225, width: 100, height: 20, dX: 1 },
  { x: 50, y: canvas.height - 3375, width: 100, height: 20, dX: 1.5 },
  { x: 0, y: canvas.height - 3800, width: 40, height: 10 },
  { x: 600, y: canvas.height - 3800, width: 40, height: 10 },
  { x: 100, y: canvas.height - 3800, width: 40, height: 10 },
  { x: 250, y: canvas.height - 3800, width: 40, height: 10 },
  { x: 700, y: canvas.height - 3800, width: 40, height: 10 },
  { x: 50, y: canvas.height - 3900, width: 40, height: 10 },
  { x: 500, y: canvas.height - 3900, width: 40, height: 10 },
  { x: 150, y: canvas.height - 3900, width: 40, height: 10 },
  { x: 300, y: canvas.height - 3900, width: 40, height: 10 },
  { x: 600, y: canvas.height - 3900, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4000, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4000, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4000, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4000, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4000, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4000, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4000, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4000, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4100, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4100, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4100, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4100, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4100, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4100, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4100, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4100, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4200, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4200, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4200, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4200, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4200, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4200, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4200, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4200, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4300, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4300, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4300, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4300, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4300, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4300, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4300, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4300, width: 40, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4400, width: 60, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4400, width: 50, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4400, width: 60, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4400, width: 50, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4400, width: 60, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4400, width: 50, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4400, width: 60, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4400, width: 50, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4500, width: 60, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4500, width: 50, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4500, width: 60, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4500, width: 50, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4500, width: 60, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4500, width: 50, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4500, width: 60, height: 10 },
  { x: Math.random() * 700, y: canvas.height - 4500, width: 50, height: 10 },
  { x: Math.random() * 300, y: canvas.height - 4900, width: 60, height: 20 },
  { x: Math.random() * 300, y: canvas.height - 5100, width: 60, height: 20 },
  { x: Math.random() * 300, y: canvas.height - 5300, width: 60, height: 20 },
  { x: Math.random() * 300, y: canvas.height - 5500, width: 60, height: 20 },
  { x: Math.random() * 300, y: canvas.height - 5700, width: 60, height: 20 },
  { x: Math.random() * 300, y: canvas.height - 5900, width: 60, height: 20 },
  { x: Math.random() * 300, y: canvas.height - 6100, width: 60, height: 20 },
  { x: Math.random() * 300, y: canvas.height - 6300, width: 60, height: 20 },
  { x: Math.random() * 300, y: canvas.height - 6500, width: 60, height: 20 },
];

var keys = {};

document.addEventListener("keydown", function (event) {
  keys[event.keyCode] = true;
});

document.addEventListener("keyup", function (event) {
  keys[event.keyCode] = false;
});

function movePlayer() {
  if (keys[65]) {
    // A key
    player.velX = -player.speed;
  } else if (keys[68]) {
    // D key
    player.velX = player.speed;
  } else {
    player.velX = 0;
  }

  if (keys[87] && player.grounded) {
    // W key for jumping
    player.velY = -player.jumpStrength;
    player.grounded = false;
  }

  // Apply gravity
  player.velY += 0.5;

  // Update player position
  player.x += player.velX;
  player.y += player.velY;

  // Collision with ground
  if (player.y + player.height >= ground.y) {
    player.y = ground.y - player.height;
    player.velY = 0;
    player.grounded = true;
  }

  // Collision with platforms
  platforms.forEach(function (platform) {
    if (
      player.x < platform.x + platform.width &&
      player.x + player.width > platform.x &&
      player.y < platform.y + platform.height &&
      player.y + player.height > platform.y
    ) {
      // Collision detected, adjust player position
      if (player.velY > 0 && player.y < platform.y) {
        player.y = platform.y - player.height;
        player.velY = 0;
        player.grounded = true;
      } else if (player.velY < 0 && player.y > platform.y) {
        player.y = platform.y + platform.height;
        player.velY = 0;
      }
    }
  });

  // Collision with death platform
  deathPlatform.forEach(function (platform) {
    if (
      player.x < platform.x + platform.width &&
      player.x + player.width > platform.x &&
      player.y < platform.y + platform.height &&
      player.y + player.height > platform.y
    ) {
      // Player touched death platform, reset player position
      player.x = 50;
      player.y = canvas.height - 50;
      player.velX = 0;
      player.velY = 0;
    }
  });

  // Prevent player from going out of bounds
  if (player.x < 0) {
    player.x = 0;
  }
  if (player.x + player.width > canvas.width) {
    player.x = canvas.width - player.width;
  }
}

function draw() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw ground
  ctx.fillStyle = "#000000";
  ctx.fillRect(ground.x, ground.y, ground.width, ground.height);

  // Draw platforms
  ctx.fillStyle = "#808080";
  platforms.forEach(function (platform) {
    ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
  });

  // Draw death platform
  ctx.fillStyle = "#FF0000";
  deathPlatform.forEach(function (platform) {
    ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
  });

  // Draw player
  ctx.fillStyle = "#3a90b5";
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function gameLoop() {
  movePlayer();
  draw();

  // death plat move

  deathPlatform[7].x += deathPlatform[7].dX;
  if (deathPlatform[7].x <= 0 || deathPlatform[7].x >= 600) {
    deathPlatform[7].dX *= -1;
  }

  deathPlatform[8].x += deathPlatform[8].dX;
  if (deathPlatform[8].x <= 0 || deathPlatform[8].x >= 600) {
    deathPlatform[8].dX *= -1;
  }

  deathPlatform[9].x += deathPlatform[9].dX;
  if (deathPlatform[9].x <= 0 || deathPlatform[9].x >= 600) {
    deathPlatform[9].dX *= -1;
  }

  deathPlatform[10].x += deathPlatform[10].dX;
  if (deathPlatform[10].x <= 0 || deathPlatform[10].x >= 600) {
    deathPlatform[10].dX *= -1;
  }

  deathPlatform[11].x += deathPlatform[11].dX;
  if (deathPlatform[11].x <= 0 || deathPlatform[11].x >= 600) {
    deathPlatform[11].dX *= -1;
  }

  deathPlatform[12].x += deathPlatform[12].dX;
  if (deathPlatform[12].x <= 0 || deathPlatform[12].x >= 600) {
    deathPlatform[12].dX *= -1;
  }

  //plat move

  platforms[9].x += platforms[9].dX;

  if (platforms[9].x <= 0 || platforms[9].x >= 700) {
    platforms[9].dX *= -1;
  }

  platforms[11].x += platforms[11].dX;

  if (platforms[11].x <= 0 || platforms[11].x >= 600) {
    platforms[11].dX *= -1;
  }

  platforms[17].x += platforms[17].dX;

  if (platforms[17].x <= 0 || platforms[17].x >= 600) {
    platforms[17].dX *= -1;
  }

  platforms[18].x += platforms[18].dX;

  if (platforms[18].x <= 0 || platforms[18].x >= 600) {
    platforms[18].dX *= -1;
  }

  platforms[19].x += platforms[19].dX;

  if (platforms[19].x <= 0 || platforms[19].x >= 600) {
    platforms[19].dX *= -1;
  }

  platforms[20].x += platforms[20].dX;

  if (platforms[20].x <= 0 || platforms[20].x >= 600) {
    platforms[20].dX *= -1;
  }

  platforms[21].x += platforms[21].dX;

  if (platforms[21].x <= 0 || platforms[21].x >= 600) {
    platforms[21].dX *= -1;
  }

  platforms[22].x += platforms[22].dX;

  if (platforms[22].x <= 0 || platforms[22].x >= 600) {
    platforms[22].dX *= -1;
  }

  platforms[23].x += platforms[23].dX;

  if (platforms[23].x <= 0 || platforms[23].x >= 600) {
    platforms[23].dX *= -1;
  }

  platforms[24].x += platforms[24].dX;

  if (platforms[24].x <= 0 || platforms[24].x >= 600) {
    platforms[24].dX *= -1;
  }

  platforms[25].x += platforms[25].dX;

  if (platforms[25].x <= 0 || platforms[25].x >= 600) {
    platforms[25].dX *= -1;
  }

  platforms[26].x += platforms[26].dX;

  if (platforms[26].x <= 0 || platforms[26].x >= 600) {
    platforms[26].dX *= -1;
  }

  platforms[27].x += platforms[27].dX;

  if (platforms[27].x <= 0 || platforms[27].x >= 600) {
    platforms[27].dX *= -1;
  }

  platforms[28].x += platforms[28].dX;

  if (platforms[28].x <= 0 || platforms[28].x >= 600) {
    platforms[28].dX *= -1;
  }

  platforms[31].y += platforms[31].dY;

  if (
    platforms[31].y < canvas.height - 4600 ||
    platforms[31].y > canvas.height - 3600
  ) {
    platforms[31].dY *= -1;
  }

  ctx.drawImage(mc, 100, 115, 85, 85);
  ctx.drawImage(txt, 200, 100, 300, 100);

  requestAnimationFrame(gameLoop);
}

let txt = document.getElementById("txt-img");
let mc = document.getElementById("mc-img");

gameLoop();
