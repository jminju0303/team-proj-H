const API_KEY = 'AIzaSyB4wt_ipKnkLEAC5g2MTQSp5yzt7oI3kU8';

let currentScreen = 1;
let showPopup = false;
let inputField;

// Screen 1 variables
let envelopeImg;
let screen1ScaleFactor = 1.0;
let screen1TargetScale = 1.0;
let screen1Text = "저승사자 님으로부터 메일이 도착하였습니다.";
let screen1CurrentIndex = 0;
let screen1TypingSpeed = 5;

// Screen 4 variables
let searchInput, searchButton, playButton;
let searchResults = [];
let playlist = [];
let player;
let currentPlayingIndex = 0;
let playerReady = false;

// Fonts
let fontHead1, fontHead2, fontHead3, fontHead4;

// Screen 5-15 variables (from second code, renumbered)
let textFlowIndex = 0;
let pictureComments = [
  '다음은 사진을 찍을게요. 이왕 죽음을 미리 준비하는 거, 남겨진 사람들이 보고 추억할 만한 사진 하나 있으면 좋잖아요.',
  '준비되셨다면, 촬영 버튼을 눌러서 직접 찍으시면 돼요.',
  '기회는 단 한 번 뿐이니까 신중히 찍으세요.',
  '그럼, 앞에 카메라 한 번 보시고요!'
];
let decoComments = [
  '사진 되게 잘 찍으셨어요. 이제 그 사진이 놓일 자리를 꾸며봅시다.',
  '“이런 것까지 내가 고르나요?” 하실 수도 있겠지만… 고르셔야 해요.',
  '제 214년 저승사자 경력을 통해 느낀 건데, 이게 생각보다 장례식장 분위기를 많이 좌우하거든요.',
  '마지막 순간을 꾸민다는 건, 결국 살아온 날들을 정리하는 일이기도 하니까요.',
  '편하게, 그렇지만 신중하게 골라보세요. 어차피… 두 번 꾸밀 일은 없잖아요?'
];
let flowerComments = [
  '이제는 화환을 정해볼게요.',
  '주변 사람들이 당신한테 보내주는 화환 말고요, 장례식장을 찾아오는 사람들에게 당신이 보내는 메세지를 담으시는 겁니다.',
  '내가 내 장례식에 보내는 화환이라… 조금 어색할 수도 있지만 제가 준비한 서비스라고 생각해주시고, 마지막 꽃길을 직접 깔아보시죠.',
  '아, 멘트가 너무 길면 리본에 안 들어가니까 유의해주시고요.'
];
let foodComments = [
  '이제 마지막 만찬을 준비할 차례입니다. 손님이 오는데 대접은 해야죠.',
  '이왕이면 당신의 취향을 담아서, 맛있고 정갈하게 대접하는 게 좋을 거예요. 그래야 떠나는 발걸음도 덜 미안할 테니까요.'
];
let dressComments = [
  '자, 이제 거의 다 왔어요.',
  '장례식도 어떻게 보면 하나의 파티니까… 드레스코드를 정해야겠죠?',
  '손님들이 꼭 검정색 옷만 입고 올 필요 있을까요?',
  '여기 옷장에 걸린 옷들 중에서 자유롭게 골라보세요.'
];

let dayButton = ['크리스마스', '할로윈', '생일파티', '파자마 파티', '댄스 파티', '사교 파티'];
let flowerButton = ['슬픔', '기쁨', '분노'];
let foodButton = ['라면', '비빔밥', '육개장', '칠면조', '컵케이크', '팬케이크'];

let cam;
let capturedImage = null;
let shootButton = { x: 0, y: 0, w: 120, h: 50, label: '촬영하기' };
let flowerImages = [];
let foodImages = [];
let dresshalfImages = [];
let dressImages = [];
let currentMode = '꽃';
let flowerModeButton, textModeButton;
let leftRibbonInput, rightRibbonInput;
let leftRibbonText = '';
let rightRibbonText = '';
let selectedDressIndex = -1;
let deathImage, table, belowtable, frame, hanger;
let dayImages = ['크리스마스', '할로윈', '생일파티', '파자마 파티', '댄스 파티', '사교 파티'];
let selections = [];
let selectedDay = null;
let selectedFlowerIndex = -1;
let selectedFoodIndex = -1;
let leftRibbonTexts = [];
let rightRibbonTexts = [];
let selectedDayIndex = -1;
let selectedFlowerButtonIndex = -1;
let selectedFoodIndexButton = -1;

function preload() {
  // First code assets
  envelopeImg = loadImage("envelope.png");
  fontHead1 = loadFont("fonts/IropkeBatangM.woff");
  fontHead2 = loadFont("fonts/NotoSansKR-ExtraBold.ttf");
  fontHead3 = loadFont("fonts/NotoSansKR-Bold.ttf");
  fontHead4 = loadFont("fonts/NotoSansKR-Regular.ttf");

  // Second code assets (renumbered screens 5-15)
  function loadImageWithError(path) {
    let img = loadImage(path, 
      () => console.log(`Loaded: ${path}`), 
      () => console.error(`Failed to load: ${path}`)
    );
    return img;
  }

  deathImage = loadImageWithError('assets/death.png');
  table = loadImageWithError('assets/table.png');
  belowtable = loadImageWithError('assets/belowtable.png');
  frame = loadImageWithError('assets/frame.png');
  hanger = loadImageWithError('assets/hanger.png');

  flowerImages = [
    loadImageWithError('assets/gookhwa.png'),
    loadImageWithError('assets/pointsettia.png'),
    loadImageWithError('assets/rose.png')
  ];
  foodImages = [
    loadImageWithError('assets/ramen.png'),
    loadImageWithError('assets/bibimbab.png'),
    loadImageWithError('assets/yookgaejang.png'),
    loadImageWithError('assets/turkey.png'),
    loadImageWithError('assets/cupcake.png'),
    loadImageWithError('assets/pancake.png')
  ];
  dresshalfImages = [
    loadImageWithError('assets/school_h.png'),
    loadImageWithError('assets/magic_h.png'),
    loadImageWithError('assets/santa_h.png'),
    loadImageWithError('assets/pajama_h.png'),
    loadImageWithError('assets/suit_h.png'),
    loadImageWithError('assets/hanbok_h.png')
  ];
  dressImages = [
    loadImageWithError('assets/school_f.png'),
    loadImageWithError('assets/magic_f.png'),
    loadImageWithError('assets/santa_f.png'),
    loadImageWithError('assets/pajama_f.png'),
    loadImageWithError('assets/suit_f.png'),
    loadImageWithError('assets/hanbok_f.png')
  ];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  noStroke();
  imageMode(CORNER);

  // Screen 4 setup (YouTube search)
  searchInput = createInput();
  searchInput.position(400, 60);
  searchInput.size(500);
  searchInput.hide();

  searchButton = createButton('검색');
  searchButton.position(910, 60);
  searchButton.mousePressed(() => {
    let query = searchInput.value();
    if (query) searchYouTube(query);
  });
  searchButton.hide();

  playButton = createButton('▶️ 재생');
  playButton.position(50, height - 80);
  playButton.mousePressed(playPlaylist);
  playButton.hide();

  let playerDiv = createDiv();
  playerDiv.id('player');
  playerDiv.position(-9999, -9999);

  // Screen 5-15 setup (camera and ribbon inputs)
  try {
    cam = createCapture(VIDEO);
    if (cam) {
      cam.hide();
    }
  } catch (e) {
    console.error("카메라 초기화 오류:", e);
    cam = null;
  }

  flowerModeButton = createButton('꽃');
  flowerModeButton.position(width * 2 / 3 + 10, height / 20);
  flowerModeButton.mousePressed(() => currentMode = '꽃');
  flowerModeButton.hide();

  textModeButton = createButton('글');
  textModeButton.position(width * 2 / 3 + 60, height / 20);
  textModeButton.mousePressed(() => currentMode = '글');
  textModeButton.hide();

  leftRibbonInput = createInput('');
  leftRibbonInput.position(width * 2 / 3 + 10, height / 10);
  leftRibbonInput.size(width * 0.2, 30);
  leftRibbonInput.input(() => leftRibbonText = leftRibbonInput.value());
  leftRibbonInput.hide();

  rightRibbonInput = createInput('');
  rightRibbonInput.position(width * 2 / 3 + 10, height / 10 + 50);
  rightRibbonInput.size(width * 0.2, 30);
  rightRibbonInput.input(() => rightRibbonText = rightRibbonInput.value());
  rightRibbonInput.hide();
}

function draw() {
  background(127, 127, 127);

  // Hide screen 4 and 5-15 inputs by default
  searchInput.hide();
  searchButton.hide();
  playButton.hide();
  flowerModeButton.hide();
  textModeButton.hide();
  leftRibbonInput.hide();
  rightRibbonInput.hide();

  if (currentScreen === 1) {
    drawScreen1();
  } else if (currentScreen === 2) {
    drawScreen2();
  } else if (currentScreen === 3) {
    drawScreen3();
  } else if (currentScreen === 4) {
    drawScreen4();
    searchInput.show();
    searchButton.show();
    playButton.show();
  } else if (currentScreen === 5) {
    drawScreen5();
    drawNextButton();
  } else if (currentScreen === 6) {
    drawScreen6();
    drawNextButton();
  } else if (currentScreen === 7) {
    drawScreen7();
    drawNextButton();
  } else if (currentScreen === 8) {
    drawScreen8();
    drawNextButton();
  } else if (currentScreen === 9) {
    drawScreen9();
    drawNextButton();
  } else if (currentScreen === 10) {
    drawScreen10();
    drawNextButton();
  } else if (currentScreen === 11) {
    drawScreen11();
    drawNextButton();
  } else if (currentScreen === 12) {
    drawScreen12();
    drawNextButton();
  } else if (currentScreen === 13) {
    drawScreen13();
    drawNextButton();
    if (currentMode === '글') {
      leftRibbonInput.show();
      rightRibbonInput.show();
    }
    flowerModeButton.show();
    textModeButton.show();
  } else if (currentScreen === 14) {
    drawScreen14();
    drawNextButton();
  } else if (currentScreen === 15) {
    drawScreen15();
    drawNextButton();
  } else if (currentScreen === 16) {
    drawScreen16(); // Renamed from drawScreen10
  }
}

// Screen 1
function drawScreen1() {
  let bx = width / 2;
  let by = height / 2;
  let imgWidth = 100;
  let imgHeight = 100;

  imageMode(CENTER);
  let isHovering = mouseX > bx - imgWidth / 2 && mouseX < bx + imgWidth / 2 &&
                   mouseY > by - imgHeight / 2 && mouseY < by + imgHeight / 2;
  screen1TargetScale = isHovering ? 1.7 : 1.3;
  screen1ScaleFactor = lerp(screen1ScaleFactor, screen1TargetScale, 0.1);

  push();
  translate(bx, by);
  scale(screen1ScaleFactor);
  image(envelopeImg, 0, 0, imgWidth, imgHeight);
  pop();

  let badgeOffsetX = imgWidth / 2 * screen1ScaleFactor;
  let badgeOffsetY = imgHeight / 2 * screen1ScaleFactor;
  let badgeX = bx + badgeOffsetX - 10;
  let badgeY = by - badgeOffsetY + 35;
  let badgeSize = 30;

  drawingContext.shadowBlur = 8;
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.3)';
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;

  fill(255, 70, 70);
  noStroke();
  ellipse(badgeX, badgeY, badgeSize, badgeSize);

  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;

  fill(255);
  textSize(12);
  textAlign(CENTER, CENTER);
  textFont(fontHead4);
  text("1", badgeX, badgeY - 4);

  let textStr = screen1Text.substring(0, screen1CurrentIndex);
  textFont(fontHead4);
  textSize(18);
  let tw = textWidth(textStr);
  let th = 18;
  let paddingX = 40;
  let paddingY = 30;
  let bubbleX = width / 2;
  let bubbleY = height / 2 + 100 + th / 2 + paddingY / 2;
  let bubbleW = tw + paddingX * 2;
  let bubbleH = th + paddingY;

  let alphaValue = map(sin(frameCount * 0.05), -1, 1, 0.4, 1);
  drawingContext.save();
  drawingContext.globalAlpha = alphaValue;
  drawSpeechBubble(bubbleX, bubbleY, bubbleW, bubbleH, 12);
  fill(80);
  noStroke();
  textSize(18);
  textAlign(CENTER);
  textFont(fontHead4);
  if (frameCount % screen1TypingSpeed === 0 && screen1CurrentIndex < screen1Text.length) {
    screen1CurrentIndex++;
  }
  let displayedText = screen1Text.substring(0, screen1CurrentIndex);
  text(displayedText, bubbleX, bubbleY - 5);
  drawingContext.restore();
}

function drawSpeechBubble(x, y, w, h, r) {
  drawingContext.shadowBlur = 16;
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.2)';
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;

  fill(238);
  stroke(167, 141, 111);
  strokeWeight(2);

  beginShape();
  vertex(x - w / 2 + r, y - h / 2);
  bezierVertex(x - w / 2, y - h / 2, x - w / 2, y - h / 2, x - w / 2, y - h / 2 + r);
  vertex(x - w / 2, y + h / 2 - r);
  bezierVertex(x - w / 2, y + h / 2, x - w / 2, y + h / 2, x - w / 2 + r, y + h / 2);
  vertex(x - 10, y + h / 2);
  vertex(x, y + h / 2 + 15);
  vertex(x + 10, y + h / 2);
  vertex(x + w / 2 - r, y + h / 2);
  bezierVertex(x + w / 2, y + h / 2, x + w / 2, y + h / 2, x + w / 2, y + h / 2 - r);
  vertex(x + w / 2, y - h / 2 + r);
  bezierVertex(x + w / 2, y - h / 2, x + w / 2, y - h / 2, x + w / 2 - r, y - h / 2);
  vertex(x - w / 2 + r, y - h / 2);
  endShape(CLOSE);

  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
}

// Screen 2
function drawScreen2() {
  fill(240);
  stroke(180);
  rect(width / 2, height / 2, 600, 350, 5);
  noStroke();
  fill(220);
  rect(width / 2, height / 2 - 140, 600, 30);
  fill(100);
  textSize(20);
  textFont(fontHead4);
  text("귀하의 사망예정일을 알려드립니다", width / 2, height / 2 - 80);
  textSize(14);
  text("보낸사람 저승사자 <support@jeoseung.com>", width / 2, height / 2 - 55);
  text("안녕하세요. 저승컴퍼니입니다.", width / 2, height / 2 - 20);
  text("귀하의 사망예정일은 0000년 00월 00일입니다.", width / 2, height / 2);
  text("본사에서는 무료로 장례식 컨설팅을 진행하고 있습니다.", width / 2, height / 2 + 20);
  text("아래 링크로 방문해주시면 감사하겠습니다.", width / 2, height / 2 + 40);

  let bx = width / 2;
  let by = height / 2 + 80;
  let bw = 250;
  let bh = 40;
  if (mouseX > bx - bw / 2 && mouseX < bx + bw / 2 && mouseY > by - bh / 2 && mouseY < by + bh / 2) {
    fill(200);
  } else {
    fill(230);
  }
  rect(bx, by, bw, bh, 10);
  fill(0);
  text("장례식 컨설팅 바로가기", bx, by);
}

// Screen 3
function drawScreen3() {
  background(238);

  fill(255);
  stroke(180);
  rect(width / 2, 60, width * 0.95, 30, 3);
  fill(255, 90, 90); circle(35, 60, 12);
  fill(255, 220, 80); circle(55, 60, 12);
  fill(70, 200, 100); circle(75, 60, 12);

  fill(240);
  stroke(180);
  rect(width * 0.25, 60, 120, 30, 5, 5, 0, 0);
  fill(80);
  noStroke();
  textSize(14);
  textFont(fontHead4);
  text("메일", width * 0.25, 60);

  fill(255);
  stroke(180);
  rect(width * 0.45, 60, 140, 30, 5, 5, 0, 0);
  fill(100);
  text("웹사이트 이름", width * 0.45, 60);

  fill(70);
  textSize(28);
  text("내 인생의 엔딩 크레딧", width / 2, 140);
  textSize(18);
  text("캐치프레이즈", width / 2, 175);

  let btns = {
    "플레이리스트 선곡": { x: width * 0.2, y: height * 0.45 },
    "장례식장 꾸미기": { x: width * 0.25, y: height * 0.6 },
    "화환 꾸미기": { x: width * 0.5, y: height * 0.52 },
    "장례식 식사 큐레이팅": { x: width * 0.75, y: height * 0.45 },
    "장례식 초대장 작성": { x: screen1CurrentIndex * 0.7, y: height * 0.6 }
  };

  stroke(120);
  strokeWeight(1);
  line(btns["플레이리스트 선곡"].x, btns["플레이리스트 선곡"].y, btns["장례식장 꾸미기"].x, btns["장례식장 꾸미기"].y);
  line(btns["플레이리스트 선곡"].x, btns["플레이리스트 선곡"].y, btns["화환 꾸미기"].x, btns["화환 꾸미기"].y);
  line(btns["화환 꾸미기"].x, btns["화환 꾸미기"].y, btns["장례식 식사 큐레이팅"].x, btns["장례식 식사 큐레이팅"].y);
  line(btns["장례식 식사 큐레이팅"].x, btns["장례식 식사 큐레이팅"].y, btns["장례식 초대장 작성"].x, btns["장례식 초대장 작성"].y);
  noStroke();

  let w = 180;
  let h = 45;
  textSize(14);
  for (let label in btns) {
    let x = btns[label].x;
    let y = btns[label].y;
    if (mouseX > x - w / 2 && mouseX < x + w / 2 && mouseY > y - h / 2 && mouseY < y + h / 2) {
      fill(210);
    } else {
      fill(240);
    }
    stroke(150);
    strokeWeight(1);
    rect(x, y, w, h, 30);
    noStroke();
    fill(50);
    text(label, x, y);
  }
}

// Screen 4
function drawScreen4() {
  background(245);

  fill(255);
  stroke(180);
  rect(width / 2, 60, width * 0.95, 30, 5);
  fill(255, 90, 90); circle(35, 60, 12);
  fill(255, 220, 80); circle(55, 60, 12);
  fill(70, 200, 100); circle(75, 60, 12);

  let tabY = 60;
  let tabH = 30;
  let mailX = width * 0.22;
  let siteX = width * 0.42;
  let inviteX = width * 0.55;

  fill(255);
  stroke(180);
  rect(mailX, tabY, 120, tabH, 5, 5, 0, 0);
  fill(100);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(14);
  textFont(fontHead4);
  text("메일", mailX, tabY);

  fill(230);
  stroke(180);
  rect(siteX, tabY, 160, tabH, 5, 5, 0, 0);
  fill(100);
  text("플레이리스트 선곡", siteX, tabY);

  let isHoverInvite = mouseX > inviteX - 90 && mouseX < inviteX + 90 && mouseY > tabY - tabH / 2 && mouseY < tabY + tabH / 2;
  fill(isHoverInvite ? 230 : 255);
  stroke(180);
  rect(inviteX, tabY, 180, tabH, 5, 5, 0, 0);
  fill(100);
  text("초대장 작성", inviteX, tabY);

  fill(30);
  textSize(18);
  textAlign(LEFT, CENTER);
  text("나의 장례식 플레이리스트", 50, 120);
  for (let i = 0; i < playlist.length; i++) {
    fill(255);
    rect(50, 150 + i * 80, 300, 70, 10);
    if (playlist[i].thumbnailImg) {
      image(playlist[i].thumbnailImg, 60, 155 + i * 80, 60, 60);
    }
    fill(0);
    text(playlist[i].title, 130, 170 + i * 80);
    text(playlist[i].artist, 130, 190 + i * 80);
  }

  fill(20);
  textSize(18);
  text("검색 결과", 400, 140);
  for (let i = 0; i < searchResults.length; i++) {
    let x = 400;
    let y = 170 + i * 80;
    fill(255);
    rect(x, y, 600, 70, 10);
    if (searchResults[i].thumbnailImg) {
      image(searchResults[i].thumbnailImg, x + 10, y + 5, 60, 60);
    }
    fill(0);
    text(searchResults[i].title, x + 80, y + 25);
    text(searchResults[i].artist, x + 80, y + 45);
  }
}

// Screen 5 
function drawScreen5() {
  drawText(pictureComments);
}

// Screen 6 
function drawScreen6() {
  let camDrawWidth = width * 0.5, camDrawHeight = height * 0.8;
  let camX = (width - camDrawWidth) / 2, camY = (height - camDrawHeight) / 2 - 60;

  push();
  translate(camX + camDrawWidth, camY);
  scale(-1, 1);
  if (cam && cam.elt.readyState === 4) {
    image(cam, 0, 0, camDrawWidth, camDrawHeight);
  } else {
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("카메라를 사용할 수 없습니다.\n브라우저 설정을 확인하세요.", camDrawWidth / 2, camDrawHeight / 2);
  }
  pop();

  shootButton.x = width / 2;
  shootButton.y = camY + camDrawHeight + 25;
  fill(60, 180, 255);
  stroke(255);
  rectMode(CENTER);
  rect(shootButton.x, shootButton.y, shootButton.w, shootButton.h, 10);
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  textFont(fontHead4);
  text(shootButton.label, shootButton.x, shootButton.y);
}

// Screen 7 
function drawScreen7() {
  if (capturedImage && capturedImage.width > 0 && capturedImage.height > 0) {
    imageMode(CENTER);
    let displayWidth = capturedImage.width / 3, displayHeight = capturedImage.height / 3;
    let imgX = width / 3, imgY = height / 2;

    image(table, imgX, imgY + displayHeight / 2 + 50, displayWidth + 60, displayHeight + 60);
    image(frame, imgX, imgY, displayWidth + 50, displayHeight + 50);
    image(capturedImage, imgX, imgY, displayWidth - 60, displayHeight + 5);
    image(belowtable, imgX, imgY + displayHeight / 2 + 80, displayWidth / 2, displayHeight / 2);
  } else {
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    textFont(fontHead4);
    text("캡처된 이미지가 없습니다.\n이전 화면으로 돌아가 촬영하세요.", width / 2, height / 2);
  }
}

// Screen 8 (was 10)
function drawScreen8() {
  drawText(decoComments);
}

// Screen 9 (was 11)
function drawScreen9() {
  textSize(30);
  fill(0);
  textAlign(LEFT, CENTER);
  textFont(fontHead4);
  text('내 인생에서', width / 7, height / 7);
  text('가장 즐거웠던 하루는?', width / 7, height / 7 + 50);

  if (capturedImage && capturedImage.width > 0 && capturedImage.height > 0) {
    imageMode(CENTER);
    let displayWidth = capturedImage.width / 3, displayHeight = capturedImage.height / 3;
    let imgX = width / 3, imgY = height / 2;

    image(table, imgX, imgY + displayHeight / 2 + 50, displayWidth + 60, displayHeight + 60);
    image(frame, imgX, imgY, displayWidth + 50, displayHeight + 50);
    image(capturedImage, imgX, imgY, displayWidth - 60, displayHeight + 5);
    image(belowtable, imgX, imgY + displayHeight / 2 + 80, displayWidth / 2, displayHeight / 2);
  }

  let hoveredDayIndex = -1;
  drawButtonGrid(dayButton, 2, 3, (i, j) => {
    let buttonIndex = i * 3 + j;
    if (buttonIndex < dayButton.length) {
      hoveredDayIndex = buttonIndex;
    }
  });

  if (selectedDay) {
    textSize(40);
    fill(0);
    textAlign(CENTER, CENTER);
    textFont(fontHead4);
    text(selectedDay, width / 3, height / 2);
  } else if (hoveredDayIndex >= 0) {
    textSize(40);
    fill(0);
    textAlign(CENTER, CENTER);
    textFont(fontHead4);
    text(dayButton[hoveredDayIndex], width / 3, height / 2);
  }
}

// Screen 10 (was 12)
function drawScreen10() {
  drawText(flowerComments);
}

// Screen 11 (was 13)
function drawScreen11() {
  textAlign(LEFT, TOP);
  textSize(30);
  fill(0);
  textFont(fontHead4);
  text('내 인생을\n하나의 감정으로 요약한다면?', width / 20, height / 20);

  let hoveredIndex = -1;
  if (currentMode === '꽃') {
    drawButtonGrid(flowerButton, 1, 3, (i, j) => {
      let buttonIndex = i * 3 + j;
      if (buttonIndex < flowerImages.length) {
        hoveredIndex = buttonIndex;
      }
    });
  }

  imageMode(CENTER);
  if (selectedFlowerIndex >= 0) {
    image(flowerImages[selectedFlowerIndex], width / 3, height / 2, 550, 700);
    if (leftRibbonTexts.length > 0) {
      push();
      translate(width / 3 - 55, height / 2 - 100);
      rotate(-PI / 3);
      textSize(20);
      fill(0);
      textAlign(CENTER, CENTER);
      textFont(fontHead4);
      text(leftRibbonTexts[leftRibbonTexts.length - 1], 0, 0, 150, 50);
      pop();
    }
    if (rightRibbonTexts.length > 0) {
      push();
      translate(width / 3 + 55, height / 2 - 100);
      rotate(PI / 3);
      textSize(20);
      fill(0);
      textAlign(CENTER, CENTER);
      textFont(fontHead4);
      text(rightRibbonTexts[rightRibbonTexts.length - 1], 0, 0, 150, 50);
      pop();
    }
  } else {
    let displayImage = hoveredIndex >= 0 ? flowerImages[hoveredIndex] : flowerImages[0];
    image(displayImage, width / 3, height / 2, 550, 700);
  }
}

// Screen 12 (was 14)
function drawScreen12() {
  drawText(foodComments);
}

// Screen 13 (was 15)
function drawScreen13() {
  textAlign(LEFT, TOP);
  textSize(30);
  fill(0);
  textFont(fontHead4);
  text('내 생애 가장\n좋아했던 음식은?', width / 20, height / 20);

  let hoveredIndex = -1;
  drawButtonGrid(foodButton, 2, 3, (i, j) => {
    let buttonIndex = i * 3 + j;
    if (buttonIndex < foodImages.length) {
      hoveredIndex = buttonIndex;
    }
  });

  imageMode(CENTER);
  if (selectedFoodIndex >= 0) {
    image(foodImages[selectedFoodIndex], width / 3, height / 2, 550, 700);
  } else if (hoveredIndex >= 0) {
    image(foodImages[hoveredIndex], width / 3, height / 2, 550, 700);
  }
}

// Screen 14 (was 16)
function drawScreen14() {
  drawText(dressComments);
}

// Screen 15 (was 17)
function drawScreen15() {
  textAlign(LEFT, TOP);
  textSize(30);
  fill(0);
  textFont(fontHead4);
  text('내 인생에서 나는\n어떤 옷을 입었나?', width / 20, height / 20);

  let hangX = width / 3;
  let hangY = height / 2;
  let hangW = width / 2.5;
  let hangH = height * 0.8;

  imageMode(CENTER);
  image(hanger, hangX, hangY, hangW, hangH);

  let imgWidth = 80, imgHeight = 100;
  let displayWidth = imgWidth * 2, displayHeight = imgHeight * 3;
  let numImages = dresshalfImages.length;
  let totalWidth = numImages * imgWidth;
  let spacing = (hangW - totalWidth) / (numImages + 1);
  let hoverIndex = -1;

  for (let i = 0; i < numImages; i++) {
    let imgX = hangX - hangW / 2 + spacing * (i + 1) + imgWidth * i;
    let imgY = hangY + hangH / 2 - 100;
    let imgCenterX = imgX + imgWidth / 2;
    let imgCenterY = imgY + imgHeight / 2;

    let isHovering = mouseX > imgCenterX - displayWidth / 2 && mouseX < imgCenterX + displayWidth / 2 &&
                     mouseY > imgCenterY - displayHeight / 2 && mouseY < imgCenterY + displayHeight / 2;

    if (isHovering) {
      hoverIndex = i;
    }

    push();
    translate(imgCenterX, imgCenterY);
    if (isHovering) {
      scale(1.2);
    }
    imageMode(CENTER);
    image(dresshalfImages[i], 0, -300, displayWidth, displayHeight);
    pop();
  }

  let displayIndex = selectedDressIndex !== -1 ? selectedDressIndex : hoverIndex;
  if (displayIndex >= 0 && displayIndex < dressImages.length) {
    imageMode(CENTER);
    image(dressImages[displayIndex], width * 2 / 3 + width * 0.125, height / 2, 240, 320);
  }
}

// Screen 16 (was 10)
function drawScreen16() {
  background(238);

  fill(255);
  stroke(180);
  rect(width / 2, 60, width * 0.95, 30, 5);
  fill(255, 90, 90); circle(35, 60, 12);
  fill(255, 220, 80); circle(55, 60, 12);
  fill(70, 200, 100); circle(75, 60, 12);

  let tabY = 60;
  let tabH = 30;
  let mailX = width * 0.22;
  let siteX = width * 0.42;
  let inviteX = width * 0.55;

  fill(255);
  stroke(180);
  rect(mailX, tabY, 120, tabH, 5, 5, 0, 0);
  fill(100);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(14);
  textFont(fontHead4);
  text("메일", mailX, tabY);

  let isHoverSite = mouseX > siteX - 80 && mouseX < siteX + 80 && mouseY > tabY - tabH / 2 && mouseY < tabY + tabH / 2;
  fill(isHoverSite ? 230 : 255);
  stroke(180);
  rect(siteX, tabY, 160, tabH, 5, 5, 0, 0);
  fill(100);
  text("플레이리스트 선곡", siteX, tabY);

  fill(230);
  stroke(180);
  rect(inviteX, tabY, 180, tabH, 5, 5, 0, 0);
  fill(100);
  text("초대장 작성", inviteX, tabY);

  let bx = 80;
  let by = 130;
  let bw = 40;
  let bh = 40;

  if (mouseX > bx - bw / 2 && mouseX < bx + bw / 2 && mouseY > by - bh / 2 && mouseY < by + bh / 2) {
    fill(220);
  } else {
    fill(250);
  }
  stroke(120);
  rect(bx, by, bw, bh);
  fill(100);
  textAlign(CENTER, CENTER);
  noStroke();
  textSize(10);
  textFont(fontHead4);
  text("Design", bx, by);
  stroke(150);
  line(bx - 20, by - 20, bx, by);
  line(bx + 20, by - 20, bx, by);

  let cardW = 400;
  let cardH = 350;
  let cardX = width / 2;
  let cardY = height / 2 + 30;

  noStroke();
  fill(255);
  rect(cardX, cardY, cardW, cardH, 5);

  fill(30);
  textSize(24);
  textAlign(CENTER, CENTER);
  textFont(fontHead4);
  text("초대장", cardX, cardY - 140);
  textSize(16);
  textAlign(LEFT, CENTER);
  text("To.", cardX - cardW / 2 + 30, cardY - 80);
  text("장례식 장소:", cardX - cardW / 2 + 30, cardY - 40);
  textAlign(CENTER, CENTER);
  text("마무리 인사말:", cardX, cardY + 70);

  if (showPopup) {
    let popupW = 260;
    let popupH = 320;
    let x = width / 2 + 150;
    let y = height / 2;

    stroke(100);
    fill(250);
    rect(x, y, popupW, popupH);

    fill(0);
    textAlign(LEFT, CENTER);
    textSize(18);
    textFont(fontHead4);
    text("To.", x - popupW / 2 + 20, y - popupH / 2 + 30);

    stroke(180);
    for (let i = 0; i < 10; i++) {
      let lineY = y - popupH / 2 + 60 + i * 24;
      line(x - popupW / 2 + 20, lineY, x + popupW / 2 - 20, lineY);
    }
  }
}

// Helper functions for screens 5-15
function drawNextButton() {
  let btnX = width * 0.9, btnY = height * 0.9, btnWidth = 100, btnHeight = 40;
  fill(180);
  stroke(0);
  rectMode(CENTER);
  rect(btnX, btnY, btnWidth, btnHeight, 5);
  fill(0);
  textSize(15);
  textAlign(CENTER, CENTER);
  textFont(fontHead4);
  text('다음으로', btnX, btnY);
}

function drawText(commentsArray) {
  imageMode(CENTER);
  image(deathImage, width / 2, height * 2 / 5, 480, 640);
  fill(50);
  textSize(28);
  textAlign(CENTER, CENTER);
  textFont(fontHead4);
  if (textFlowIndex >= 0 && textFlowIndex < commentsArray.length) {
    text(commentsArray[textFlowIndex], width / 2, height * 4 / 5);
  }
}

function drawButtonGrid(buttons, numCols, numRows, onHover = () => {}) {
  let tabX = width * 2 / 3, tabY = height / 10;
  let tabW = width * 1 / 4, tabH = height * 8 / 10;
  noFill();
  stroke(0);
  rectMode(CORNER);
  rect(tabX, tabY, tabW, tabH, 20);

  let buttonGridW = tabW * 0.9, buttonGridH = tabH * 0.9;
  let colWidth = buttonGridW / numCols;
  let rowHeight = buttonGridH / numRows;
  let btnWidth = colWidth * 0.8, btnHeight = rowHeight * 0.8;

  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  for (let i = 0; i < numCols; i++) {
    for (let j = 0; j < numRows; j++) {
      let buttonIndex = i * numRows + j;
      if (buttonIndex < buttons.length) {
        let btnX = tabX + (tabW - buttonGridW) / 2 + colWidth * (i + 0.5);
        let btnY = tabY + (tabH - buttonGridH) / 2 + rowHeight * (j + 0.5);

        let isHovering = mouseX > btnX - btnWidth / 2 && mouseX < btnX + btnWidth / 2 &&
                         mouseY > btnY - btnHeight / 2 && mouseY < btnY + btnHeight / 2;
        let isSelected = (currentScreen === 9 && buttonIndex === selectedDayIndex) ||
                         (currentScreen === 11 && buttonIndex === selectedFlowerButtonIndex) ||
                         (currentScreen === 13 && buttonIndex === selectedFoodIndexButton);

        fill(isSelected || isHovering ? color(255, 255, 100) : color(200, 200, 240));
        stroke(50);
        rect(btnX, btnY, btnWidth, btnHeight, 10);
        fill(0);
        textSize(20);
        textFont(fontHead4);
        text(buttons[buttonIndex], btnX, btnY);

        if (isHovering) {
          onHover(i, j);
        }
      }
    }
  }
}

// Mouse interaction
function mousePressed() {
  let tabY = 60;
  let tabH = 30;
  let inviteX = width * 0.55;
  let siteX = width * 0.42;

  if (mouseX > siteX - 80 && mouseX < siteX + 80 && mouseY > tabY - tabH / 2 && mouseY < tabY + tabH / 2) {
    currentScreen = 4;
    return;
  }

  if (mouseX > inviteX - 90 && mouseX < inviteX + 90 && mouseY > tabY - tabH / 2 && mouseY < tabY + tabH / 2) {
    currentScreen = 16;
    return;
  }

  if (currentScreen === 1) {
    let bx = width / 2;
    let by = height / 2;
    if (mouseX > bx - 50 && mouseX < bx + 50 && mouseY > by - 35 && mouseY < by + 35) {
      currentScreen = 2;
    }
  } else if (currentScreen === 2) {
    let bx = width / 2;
    let by = height / 2 + 80;
    let bw = 250;
    let bh = 40;
    if (mouseX > bx - bw / 2 && mouseX < bx + bw / 2 && mouseY > by - bh / 2 && mouseY < by + bh / 2) {
      currentScreen = 3;
    }
  } else if (currentScreen === 3) {
    let playlistX = width * 0.2;
    let playlistY = height * 0.45;
    let w = 180;
    let h = 45;
    if (mouseX > playlistX - w / 2 && mouseX < playlistX + w / 2 && mouseY > playlistY - h / 2 && mouseY < playlistY + h / 2) {
      currentScreen = 4;
    }

    let decorateX = width * 0.25;
    let decorateY = height * 0.6;
    if (mouseX > decorateX - w / 2 && mouseX < decorateX + w / 2 && mouseY > decorateY - h / 2 && mouseY < decorateY + h / 2) {
      currentScreen = 5;
    }

    let flowerX = width * 0.5;
    let flowerY = height * 0.52;
    if (mouseX > flowerX - w / 2 && mouseX < flowerX + w / 2 && mouseY > flowerY - h / 2 && mouseY < flowerY + h / 2) {
      currentScreen = 10;
    }

    let foodX = width * 0.75;
    let foodY = height * 0.45;
    if (mouseX > foodX - w / 2 && mouseX < foodX + w / 2 && mouseY > foodY - h / 2 && mouseY < foodY + h / 2) {
      currentScreen = 12;
    }

    let inviteX = width * 0.7;
    let inviteY = height * 0.6;
    if (mouseX > inviteX - w / 2 && mouseX < inviteX + w / 2 && mouseY > inviteY - h / 2 && mouseY < inviteY + h / 2) {
      currentScreen = 16;
    }
  } else if (currentScreen === 4) {
    for (let i = 0; i < searchResults.length; i++) {
      let x = 400;
      let y = 130 + i * 80;
      if (mouseX > x && mouseX < x + 600 && mouseY > y && mouseY < y + 70) {
        playlist.push(searchResults[i]);
      }
    }
  } else if (currentScreen === 5) {
    let btnX = width * 0.9, btnY = height * 0.9, btnWidth = 100, btnHeight = 40;
    if (mouseX > btnX - btnWidth / 2 && mouseX < btnX + btnWidth / 2 &&
        mouseY > btnY - btnHeight / 2 && mouseY < btnY + btnHeight / 2) {
      if (textFlowIndex < pictureComments.length - 1) textFlowIndex++;
      else { textFlowIndex = 0; currentScreen = 6; }
    }
  } else if (currentScreen === 6) {
    let btnX = width * 0.9, btnY = height * 0.9, btnWidth = 100, btnHeight = 40;
    if (mouseX > btnX - btnWidth / 2 && mouseX < btnX + btnWidth / 2 &&
        mouseY > btnY - btnHeight / 2 && mouseY < btnY + btnHeight / 2) {
      currentScreen = 7;
      return;
    }
    if (mouseX > shootButton.x - shootButton.w / 2 && mouseX < shootButton.x + shootButton.w / 2 &&
        mouseY > shootButton.y - shootButton.h / 2 && mouseY < shootButton.y + shootButton.h / 2) {
      if (cam && cam.elt.readyState === 4) {
        let flippedImage = createImage(cam.width, cam.height);
        flippedImage.copy(cam, 0, 0, cam.width, cam.height, cam.width, 0, -cam.width, cam.height);
        capturedImage = flippedImage;
        selections.push(capturedImage);
        console.log("Captured flipped photo stored in selections");
        currentScreen = 7;
      } else {
        console.warn("카메라가 준비되지 않았습니다.");
      }
      return;
    }
  } else if (currentScreen === 7) {
    let btnX = width * 0.9, btnY = height * 0.9, btnWidth = 100, btnHeight = 40;
    if (mouseX > btnX - btnWidth / 2 && mouseX < btnX + btnWidth / 2 &&
        mouseY > btnY - btnHeight / 2 && mouseY < btnY + btnHeight / 2) {
      currentScreen = 8;
    }
  } else if (currentScreen === 8) {
    let btnX = width * 0.9, btnY = height * 0.9, btnWidth = 100, btnHeight = 40;
    if (mouseX > btnX - btnWidth / 2 && mouseX < btnX + btnWidth / 2 &&
        mouseY > btnY - btnHeight / 2 && mouseY < btnY + btnHeight / 2) {
      if (textFlowIndex < decoComments.length - 1) textFlowIndex++;
      else { textFlowIndex = 0; currentScreen = 9; }
    }
  } else if (currentScreen === 9) {
    let btnX = width * 0.9, btnY = height * 0.9, btnWidth = 100, btnHeight = 40;
    if (mouseX > btnX - btnWidth / 2 && mouseX < btnX + btnWidth / 2 &&
        mouseY > btnY - btnHeight / 2 && mouseY < btnY + btnHeight / 2) {
      currentScreen = 10;
      return;
    }
    let buttons = dayButton;
    let numCols = 2, numRows = 3;
    let tabX = width * 2 / 3, tabY = height / 10;
    let tabW = width * 1 / 4, tabH = height * 8 / 10;
    let buttonGridW = tabW * 0.9, buttonGridH = tabH * 0.9;
    let colWidth = buttonGridW / numCols;
    let rowHeight = buttonGridH / numRows;

    for (let i = 0; i < numCols; i++) {
      for (let j = 0; j < numRows; j++) {
        let buttonIndex = i * numRows + j;
        if (buttonIndex < buttons.length) {
          let btnX = tabX + (tabW - buttonGridW) / 2 + colWidth * (i + 0.5);
          let btnY = tabY + (tabH - buttonGridH) / 2 + rowHeight * (j + 0.5);
          if (mouseX > btnX - btnWidth / 2 && mouseX < btnX + btnWidth / 2 &&
              mouseY > btnY - btnHeight / 2 && mouseY < btnY + btnHeight / 2) {
            selectedDay = buttons[buttonIndex];
            selectedDayIndex = buttonIndex;
            selections.push(selectedDay);
            console.log(`Selected day: ${selectedDay}`);
            return;
          }
        }
      }
    }
  } else if (currentScreen === 10) {
    let btnX = width * 0.9, btnY = height * 0.9, btnWidth = 100, btnHeight = 40;
    if (mouseX > btnX - btnWidth / 2 && mouseX < btnX + btnWidth / 2 &&
        mouseY > btnY - btnHeight / 2 && mouseY < btnY + btnHeight / 2) {
      if (textFlowIndex < flowerComments.length - 1) textFlowIndex++;
      else { textFlowIndex = 0; currentScreen = 11; }
    }
  } else if (currentScreen === 11) {
    let btnX = width * 0.9, btnY = height * 0.9, btnWidth = 100, btnHeight = 40;
    if (mouseX > btnX - btnWidth / 2 && mouseX < btnX + btnWidth / 2 &&
        mouseY > btnY - btnHeight / 2 && mouseY < btnY + btnHeight / 2) {
      currentScreen = 12;
      return;
    }
    if (currentMode === '꽃') {
      let buttons = flowerButton;
      let numCols = 1, numRows = 3;
      let tabX = width * 2 / 3, tabY = height / 10;
      let tabW = width * 1 / 4, tabH = height * 8 / 10;
      let buttonGridW = tabW * 0.9, buttonGridH = tabH * 0.9;
      let colWidth = buttonGridW / numCols;
      let rowHeight = buttonGridH / numRows;
      let btnWidth = colWidth * 0.8, btnHeight = rowHeight * 0.8;

      for (let i = 0; i < numCols; i++) {
        for (let j = 0; j < numRows; j++) {
          let buttonIndex = i * numRows + j;
          if (buttonIndex < buttons.length) {
            let btnX = tabX + (tabW - buttonGridW) / 2 + colWidth * (i + 0.5);
            let btnY = tabY + (tabH - buttonGridH) / 2 + rowHeight * (j + 0.5);
            if (mouseX > btnX - btnWidth / 2 && mouseX < btnX + btnWidth / 2 &&
                mouseY > btnY - btnHeight / 2 && mouseY < btnY + btnHeight / 2) {
              selectedFlowerIndex = buttonIndex;
              selectedFlowerButtonIndex = buttonIndex;
              selections.push(flowerImages[buttonIndex]);
              console.log(`Selected flower: ${buttons[buttonIndex]}`);
              return;
            }
          }
        }
      }
    }
  } else if (currentScreen === 12) {
    let btnX = width * 0.9, btnY = height * 0.9, btnWidth = 100, btnHeight = 40;
    if (mouseX > btnX - btnWidth / 2 && mouseX < btnX + btnWidth / 2 &&
        mouseY > btnY - btnHeight / 2 && mouseY < btnY + btnHeight / 2) {
      if (textFlowIndex < foodComments.length - 1) textFlowIndex++;
      else { textFlowIndex = 0; currentScreen = 13; }
    }
  } else if (currentScreen === 13) {
    let btnX = width * 0.9, btnY = height * 0.9, btnWidth = 100, btnHeight = 40;
    if (mouseX > btnX - btnWidth / 2 && mouseX < btnX + btnWidth / 2 &&
        mouseY > btnY - btnHeight / 2 && mouseY < btnY + btnHeight / 2) {
      currentScreen = 14;
      return;
    }
    let buttons = foodButton;
    let numCols = 2, numRows = 3;
    let tabX = width * 2 / 3, tabY = height / 10;
    let tabW = width * 1 / 4, tabH = height * 8 / 10;
    let buttonGridW = tabW * 0.9, buttonGridH = tabH * 0.9;
    let colWidth = buttonGridW / numCols;
    let rowHeight = buttonGridH / numRows;

    for (let i = 0; i < numCols; i++) {
      for (let j = 0; j < numRows; j++) {
        let buttonIndex = i * numRows + j;
        if (buttonIndex < buttons.length) {
          let btnX = tabX + (tabW - buttonGridW) / 2 + colWidth * (i + 0.5);
          let btnY = tabY + (tabH - buttonGridH) / 2 + rowHeight * (j + 0.5);
          if (mouseX > btnX - btnWidth / 2 && mouseX < btnX + btnWidth / 2 &&
              mouseY > btnY - btnHeight / 2 && mouseY < btnY + btnHeight / 2) {
            selectedFoodIndex = buttonIndex;
            selectedFoodIndexButton = buttonIndex;
            selections.push(foodImages[buttonIndex]);
            console.log(`Selected food: ${buttons[buttonIndex]}`);
            return;
          }
        }
      }
    }
  } else if (currentScreen === 14) {
    let btnX = width * 0.9, btnY = height * 0.9, btnWidth = 100, btnHeight = 40;
    if (mouseX > btnX - btnWidth / 2 && mouseX < btnX + btnWidth / 2 &&
        mouseY > btnY - btnHeight / 2 && mouseY < btnY + btnHeight / 2) {
      if (textFlowIndex < dressComments.length - 1) textFlowIndex++;
      else { textFlowIndex = 0; currentScreen = 15; }
    }
  } else if (currentScreen === 15) {
    let btnX = width * 0.9, btnY = height * 0.9, btnWidth = 100, btnHeight = 40;
    if (mouseX > btnX - btnWidth / 2 && mouseX < btnX + btnWidth / 2 &&
        mouseY > btnY - btnHeight / 2 && mouseY < btnY + btnHeight / 2) {
      currentScreen = 16;
      return;
    }
    let hangX = width / 3;
    let hangY = height / 2;
    let hangW = width / 2.5;
    let hangH = height * 0.8;
    let imgWidth = 80, imgHeight = 100;
    let displayWidth = imgWidth * 2, displayHeight = imgHeight * 3;
    let numImages = dresshalfImages.length;
    let totalWidth = numImages * imgWidth;
    let spacing = (hangW - totalWidth) / (numImages + 1);

    for (let i = 0; i < numImages; i++) {
      let imgX = hangX - hangW / 2 + spacing * (i + 1) + imgWidth * i;
      let imgY = hangY + hangH / 2 - 100;
      let imgCenterX = imgX + imgWidth / 2;
      let imgCenterY = imgY + imgHeight / 2;
      if (mouseX > imgCenterX - displayWidth / 2 && mouseX < imgCenterX + displayWidth / 2 &&
          mouseY > imgCenterY - displayHeight / 2 && mouseY < imgCenterY + displayHeight / 2) {
        selectedDressIndex = i;
        selections.push(dressImages[i]);
        console.log(`Selected dress: ${i}`);
        return;
      }
    }
  } else if (currentScreen === 16) {
    let bx = 80;
    let by = 130;
    let bw = 40;
    let bh = 40;
    if (mouseX > bx - bw / 2 && mouseX < bx + bw / 2 && mouseY > by - bh / 2 && mouseY < by + bh / 2) {
      if (!showPopup) {
        showPopup = true;
        let popupW = 260;
        let popupH = 320;
        let x = width / 2 + 150;
        let y = height / 2;
        inputField = createInput();
        inputField.position(x - popupW / 2 + 20, y - popupH / 2 + 55);
        inputField.size(popupW - 40, 24);
        inputField.style('font-size', '14px');
      }
    }
  }
}

// YouTube functions
function searchYouTube(query) {
  let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${query}&key=${API_KEY}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      searchResults = data.items.map(item => {
        let song = {
          title: item.snippet.title,
          artist: item.snippet.channelTitle,
          thumbnail: item.snippet.thumbnails.default.url,
          videoId: item.id.videoId
        };
        loadImage(song.thumbnail, img => {
          song.thumbnailImg = img;
        });
        return song;
      });
    });
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '200',
    width: '400',
    videoId: '',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  playerReady = true;
  console.log("YouTube Player 준비 완료");
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    currentPlayingIndex++;
    if (currentPlayingIndex < playlist.length) {
      player.loadVideoById(playlist[currentPlayingIndex].videoId);
      player.playVideo();
    }
  }
}

function playPlaylist() {
  console.log("▶️ playerReady:", playerReady);
  console.log("▶️ playlist.length:", playlist.length);

  if (playerReady && playlist.length > 0) {
    currentPlayingIndex = 0;
    player.loadVideoById(playlist[0].videoId);
    player.playVideo();
  } else {
    console.warn("Player가 아직 준비되지 않았거나 플레이리스트가 비어 있습니다.");
  }
}


function keyPressed() {
  if (keyCode === ESCAPE && showPopup) {
    showPopup = false;
    if (inputField) {
      inputField.remove();
      inputField = null;
    }
  }
    if (currentScreen === 13 && currentMode === '글' && keyCode === ENTER) {
    if (leftRibbonText.trim() !== '') {
      leftRibbonTexts = [leftRibbonText]; // 마지막 입력값만 유지
      leftRibbonInput.attribute('disabled', true);
      console.log(`Saved left ribbon text: ${leftRibbonText}`);
    }
    if (rightRibbonText.trim() !== '') {
      rightRibbonTexts = [rightRibbonText]; // 마지막 입력값만 유지
      rightRibbonInput.attribute('disabled', true);
      console.log(`Saved right ribbon text: ${rightRibbonText}`);
    }
  }
}
