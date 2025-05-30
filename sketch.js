const API_KEY = 'AIzaSyB4wt_ipKnkLEAC5g2MTQSp5yzt7oI3kU8';

let currentScreen = 1;
let showPopup = false;
let inputField;

let searchInput, searchButton, playButton;
let searchResults = [];
let playlist = [];
let player;
let currentPlayingIndex = 0;
let playerReady = false;

//폰트
let fontHead1;
let fontHead2;
let fontHead3;
let fontHead4;

//이미지에셋
let envelopeImg;

//screen1 편지 버튼
let screen1ScaleFactor = 1.0;  // 현재 스케일
let screen1TargetScale = 1.0;  // 목표 스케일

//screen1 텍스트
let screen1Text = "저승사자 님으로부터 메일이 도착하였습니다.";
let screen1CurrentIndex = 0;
let screen1TypingSpeed = 5; // 프레임 단위로 글자 등장 속도 조절 (낮을수록 빠름)

function preload() {
  envelopeImg = loadImage("envelope.png");
  fontHead1 = loadFont("fonts/IropkeBatangM.woff");
  fontHead2 = loadFont("fonts/NotoSansKR-ExtraBold.ttf");
  fontHead3 = loadFont("fonts/NotoSansKR-Bold.ttf");
  fontHead4 = loadFont("fonts/NotoSansKR-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  noStroke();

  // 검색창 및 버튼 (screen4 용)
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
  playButton.mousePressed
  (playPlaylist);
  playButton.hide();

  let playerDiv = createDiv();
  playerDiv.id('player');
  playerDiv.position(-9999, -9999);
}

function draw() {
  background(127, 127, 127);
  if (currentScreen === 1) {
    drawScreen1();
  } else if (currentScreen === 2) {
    drawScreen2();
  } else if (currentScreen === 3) {
    drawScreen3();
  } else if (currentScreen === 4) {
    drawScreen4();
  } else if (currentScreen === 10) {
    drawScreen10();
  }

  if (currentScreen === 4) {
    searchInput.show();
    searchButton.show();
    playButton.show();
  } else {
    searchInput.hide();
    searchButton.hide();
    playButton.hide();
  }
}

//시작화면
function drawScreen1() {
  let bx = width / 2;
  let by = height / 2;
  let imgWidth = 100;
  let imgHeight = 100;

  imageMode(CENTER);
  image(envelopeImg, bx, by, imgWidth, imgHeight);

  // 마우스 오버 효과
  // 마우스 오버 체크
  let isHovering = mouseX > bx - imgWidth / 2 && mouseX < bx + imgWidth / 2 &&
                   mouseY > by - imgHeight / 2 && mouseY < by + imgHeight / 2;

  // 목표 스케일 설정
  screen1TargetScale = isHovering ? 1.7 : 1.3;

  // 현재 스케일을 부드럽게 보간 (lerp = linear interpolation)
  screen1ScaleFactor = lerp(screen1ScaleFactor, screen1TargetScale, 0.1);

  // 이미지 그리기 (scale 적용)
  imageMode(CENTER);
  push(); // 변환 상태 저장
  translate(bx, by);
  scale(screen1ScaleFactor);
  image(envelopeImg, 0, 0, imgWidth, imgHeight);
  pop(); // 변환 상태 복구

    // 🔴 알림 배지 위치 계산 (우측 상단)
  let badgeOffsetX = imgWidth / 2 * screen1ScaleFactor;
  let badgeOffsetY = imgHeight / 2 * screen1ScaleFactor;
  let badgeX = bx + badgeOffsetX - 10;
  let badgeY = by - badgeOffsetY + 35;
  let badgeSize = 30;

  // 🔴 그림자 설정
  drawingContext.shadowBlur = 8;
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.3)';
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;

  // 🔴 빨간색 원 그리기
  fill(255, 70, 70);
  noStroke();
  ellipse(badgeX, badgeY, badgeSize, badgeSize);

  // 그림자 초기화
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;

  // 숫자 텍스트 (예: "1")
  fill(255);
  textSize(12);
  textAlign(CENTER, CENTER);
  textFont(fontHead4);
  text("1", badgeX, badgeY - 4);

  let textStr = screen1Text.substring(0, screen1CurrentIndex);
  // 텍스트 너비 구하기 + padding 설정
  let paddingX = 40;
  let paddingY = 30;
  textFont(fontHead4);  // ⚠️ textWidth() 바로 전에 명시!
  textSize(18);
  let tw = textWidth(textStr);
  let th = 18; // textSize랑 동일하게 세팅 (글자 크기)

  // 말풍선 위치 (텍스트 바로 아래)
  let bubbleX = width / 2;
  let bubbleY = height / 2 + 100 + th / 2 + paddingY / 2;

  // 말풍선 너비, 높이
  let bubbleW = tw + paddingX * 2;
  let bubbleH = th + paddingY;

  // 말풍선 그리기
  drawSpeechBubble(bubbleX, bubbleY, bubbleW, bubbleH, 12);
  
  // 흐림-선명 효과를 위한 alpha 값 계산 (0~1을 왕복)
  let alphaValue = map(sin(frameCount * 0.05), -1, 1, 0.4, 1); // 0.4 ~ 1 사이 변동

  // 말풍선 그리기 전에 globalAlpha 세팅
  drawingContext.save(); // 상태 저장
  drawingContext.globalAlpha = alphaValue;
  drawSpeechBubble(bubbleX, bubbleY, bubbleW, bubbleH, 12);
  drawingContext.restore(); // 원상복구

  // 텍스트도 같은 alpha로 그리기
  drawingContext.save();
  drawingContext.globalAlpha = alphaValue;
  //텍스트
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
  // 그림자 설정
  drawingContext.shadowBlur = 16;
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.2)';
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;

  // r: 모서리 반경(radius)
  fill(238);  // 말풍선 색
  stroke(167, 141, 111);
  strokeWeight(2);

  beginShape();

  // ⬆ 둥근 사각형 경로 (상단부터 시계 방향)
  vertex(x - w / 2 + r, y - h / 2);
  bezierVertex(x - w / 2, y - h / 2, x - w / 2, y - h / 2, x - w / 2, y - h / 2 + r);
  vertex(x - w / 2, y + h / 2 - r);

  bezierVertex(x - w / 2, y + h / 2, x - w / 2, y + h / 2, x - w / 2 + r, y + h / 2);
  
  // ⬇ 꼬리 붙이는 지점 (아래 중앙)
  vertex(x - 10, y + h / 2);
  vertex(x,     y + h / 2 + 15);  // 꼬리 끝
  vertex(x + 10, y + h / 2);

  // ⬇ 둥근 사각형 계속 이어서
  vertex(x + w / 2 - r, y + h / 2);
  bezierVertex(x + w / 2, y + h / 2, x + w / 2, y + h / 2, x + w / 2, y + h / 2 - r);
  vertex(x + w / 2, y - h / 2 + r);
  bezierVertex(x + w / 2, y - h / 2, x + w / 2, y - h / 2, x + w / 2 - r, y - h / 2);
  vertex(x - w / 2 + r, y - h / 2);

  endShape(CLOSE);

  // 그림자 초기화 (다음 도형에 영향 X)
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
}

//메일함 화면
function drawScreen2() {
  fill(240);
  stroke(180);
  rect(width / 2, height / 2, 600, 350, 5);
  noStroke();
  fill(220);
  rect(width / 2, height / 2 - 140, 600, 30);
  fill(100);
  textSize(20);
  text("귀하의 사망예정일을 알려드립니다", width / 2, height / 2 - 80);
  textSize(14);
  text("보낸사람 저승사자 <support@jeoseung.com>", width / 2, height / 2 - 55);
  text("안녕하세요. 저승컴퍼니입니다.", width / 2, height / 2 - 20);
  text("귀하의 사망예정일은 0000년 00월 00일입니다.", width / 2, height / 2);
  text("본사에서는 무료로 장례식 컨설팅을 진행하고 있습니다.", width / 2, height / 2 + 20);
  text("아래 링크로 방문해주시면 감사하겠습니다.", width / 2, height / 2 + 40);
  
  //바로가기 버튼
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

//메뉴 화면
function drawScreen3() {
  background(238);
  
  //상단바
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
  text("메일", width * 0.25, 60);

  fill(255);
  stroke(180);
  rect(width * 0.45, 60, 140, 30, 5, 5, 0, 0);
  fill(100);
  noStroke();
  text("웹사이트 이름", width * 0.45, 60);

  //타이틀
  fill(70);
  textSize(28);
  text("내 인생의 엔딩 크레딧", width / 2, 140);
  textSize(18);
  text("캐치프레이즈", width / 2, 175);

  //버튼 5개
  let btns = {
    "플레이리스트 선곡": { x: width * 0.2, y: height * 0.45 },
    "장례식장 꾸미기": { x: width * 0.25, y: height * 0.6 },
    "화환 꾸미기": { x: width * 0.5, y: height * 0.52 },
    "장례식 식사 큐레이팅": { x: width * 0.75, y: height * 0.45 },
    "장례식 초대장 작성": { x: width * 0.7, y: height * 0.6 }
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

function drawScreen4() {
  background(245);

  // 상단 탭 UI
  fill(255);
  stroke(180);
  rect(width / 2, 60, width * 0.95, 30, 5);

  // 좌측 상단 동그라미
  fill(255, 90, 90); circle(35, 60, 12);
  fill(255, 220, 80); circle(55, 60, 12);
  fill(70, 200, 100); circle(75, 60, 12);

  // 탭 위치 정의
  let tabY = 60;
  let tabH = 30;
  let mailX = width * 0.22;
  let siteX = width * 0.42;
  let inviteX = width * 0.55;

  // 메일 탭 (비활성)
  fill(255);
  stroke(180);
  rect(mailX, tabY, 120, tabH, 5, 5, 0, 0);
  fill(100);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(14);
  text("메일", mailX, tabY);

  // 웹사이트 이름 탭 (활성)
  fill(230);
  stroke(180);
  rect(siteX, tabY, 160, tabH, 5, 5, 0, 0);
  fill(100);
  noStroke();
  text("플레이리스트 선곡", siteX, tabY);

  // 초대장 작성 탭 (hover 및 클릭 대응)
  let isHoverInvite = mouseX > inviteX - 90 && mouseX < inviteX + 90 && mouseY > tabY - tabH / 2 && mouseY < tabY + tabH / 2;

  fill(isHoverInvite ? 230 : 255);
  stroke(180);
  rect(inviteX, tabY, 180, tabH, 5, 5, 0, 0);
  fill(100);
  noStroke();
  text("초대장 작성", inviteX, tabY);

  // 좌측: 나의 장례식 플레이리스트
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

  // 우측: 검색 결과
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


//초대장 작성 화면 (drawScreen10으로 임시 설정)
function drawScreen10() {
  background(238);

  // 상단 탭 UI
  fill(255);
  stroke(180);
  rect(width / 2, 60, width * 0.95, 30, 5);
  fill(255, 90, 90); circle(35, 60, 12);
  fill(255, 220, 80); circle(55, 60, 12);
  fill(70, 200, 100); circle(75, 60, 12);

  // 탭 위치 정의
  let tabY = 60;
  let tabH = 30;
  let mailX = width * 0.22;
  let siteX = width * 0.42;
  let inviteX = width * 0.55;

  // 메일 탭 (비활성)
  fill(255);
  stroke(180);
  rect(mailX, tabY, 120, tabH, 5, 5, 0, 0);
  fill(100);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(14);
  text("메일", mailX, tabY);

  // 플레이리스트 탭 (비활성)
  let isHoverSite = mouseX > siteX - 80 && mouseX < siteX + 80 && mouseY > tabY - tabH / 2 && mouseY < tabY + tabH / 2;
  fill(isHoverSite ? 230 : 255);
  stroke(180);
  rect(siteX, tabY, 160, tabH, 5, 5, 0, 0);
  fill(100);
  noStroke();
  text("플레이리스트 선곡", siteX, tabY);

  // 초대장 탭 (활성)
  fill(230);
  stroke(180);
  rect(inviteX, tabY, 180, tabH, 5, 5, 0, 0);
  fill(100);
  noStroke();
  text("초대장 작성", inviteX, tabY);

  //초대장 만들기 버튼
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
  text("Design", bx, by);
  stroke(150);
  line(bx - 20, by - 20, bx, by);
  line(bx + 20, by - 20, bx, by);

  //초대장 이미지
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
  text("초대장", cardX, cardY - 140);
  textSize(16);
  textAlign(LEFT, CENTER);
  text("To.", cardX - cardW / 2 + 30, cardY - 80);
  text("장례식 장소:", cardX - cardW / 2 + 30, cardY - 40);
  textAlign(CENTER, CENTER);
  text("마무리 인사말:", cardX, cardY + 70);

  //초대장 팝업창
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
    text("To.", x - popupW / 2 + 20, y - popupH / 2 + 30);

    stroke(180);
    for (let i = 0; i < 10; i++) {
      let lineY = y - popupH / 2 + 60 + i * 24;
      line(x - popupW / 2 + 20, lineY, x + popupW / 2 - 20, lineY);
    }
  }
}

function mousePressed() {
  //상단 탭: 초대장 작성 클릭 처리 (모든 화면 공통)
  let tabY = 60;
  let tabH = 30;
  let inviteX = width * 0.55;
  let siteX = width * 0.42;

  if (
    mouseX > siteX - 80 &&
    mouseX < siteX + 80 &&
    mouseY > tabY - tabH / 2 &&
    mouseY < tabY + tabH / 2
  ) {
    currentScreen = 4;
    return;
  }

  if (
    mouseX > inviteX - 90 &&
    mouseX < inviteX + 90 &&
    mouseY > tabY - tabH / 2 &&
    mouseY < tabY + tabH / 2
  ) {
    currentScreen = 10;
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

    let inviteX = width * 0.7;
    let inviteY = height * 0.6;
    if (mouseX > inviteX - w / 2 && mouseX < inviteX + w / 2 && mouseY > inviteY - h / 2 && mouseY < inviteY + h / 2) {
      currentScreen = 10;
    }
  } else if (currentScreen === 4) {
    for (let i = 0; i < searchResults.length; i++) {
      let x = 400;
      let y = 130 + i * 80;
      if (mouseX > x && mouseX < x + 600 && mouseY > y && mouseY < y + 70) {
        playlist.push(searchResults[i]);
      }
    }
  } else if (currentScreen === 10) {
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
}
