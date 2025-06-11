let currentScreen = 1;

let textFlowIndex = 0;
let playlistComments = [
  '사람마다 마지막이 다르듯, 마지막을 기억하는 방식도 다릅니다. 어떤 분은 조용히, 어떤 분은 웃으며, 또 어떤 분은 꼭 참던 눈물을 흘리며 당신을 떠올릴 겁니다.\n그래서 음악이 필요하죠. 장례식의 공기는 곡 하나로 바뀌거든요.',
  '이건 당신이 남기는 첫 번째 선택이에요. \n슬퍼도 괜찮고, 신나도 아무도 뭐라 안 합니다. \n남겨질 사람들이 당신을 떠올리며 이 노래를 들을 테니, 어떻게 추억되고 싶은지 노래로 표현해보세요.',
  '자, 이제 마음 속에 떠오르는 노래가 있다면 검색창에 넣어보세요. \n원하는 노래를 자유롭게 플레이리스트에 담으면 됩니다. \n한 곡만으로 부족하다면 더 넣으셔도 되고요. 인생이라는 게, 한 곡으로는 설명이 안 되잖아요?',
  '재생 버튼을 누르시면 미리 들어보실 수도 있어요. 분위기 확인용으로. \n그럼 장례식장 플레이리스트, 골라보실까요? \n너무 오래 걸리셔도… 조금 곤란하긴 해요. 시간이 그렇게 많진 않거든요.',
]
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
let endingcreditsComments = [
  '이렇게 모든 설계가 마무리됐습니다.\n음악도 정했고, 영정사진도 찍었고, 공간도 꾸몄고, 먹고 마실 것도 빠짐없이 준비하셨어요.',
  '장례식에서 정할 게 꽤 많았죠? 그래도 나의 마지막 순간인데, 내가 직접 정할 기회가 없으면 너무 억울하잖아요.\n당신다운, 당신만의 마지막을 잘 꾸미신 것 같네요.',
  '이제는… 정말 떠나야 할 시간입니다.\n하지만 걱정 마세요. 당신이 고른 이 모든 것들은, 누군가의 기억 속에서 천천히 재생될 거예요.\n마지막 순간이 어떻게 기억될지 직접 하나하나 골랐으니 후회도 없을 겁니다.',
  '이번 삶에서의 모든 순간 동안 너무 수고 많으셨습니다.\n마지막으로 나 삶의 엔딩 크레딧을 한 번 작성해볼게요.\n내 인생이 영화라면, 엔딩 크레딧을 어떻게 올리고 싶으세요?'
];
let endingComments = [
  '멋진 엔딩크레딧이 되겠군요. 수고 많았어요.\n이제 당신이 하나하나 꾸민 장례식장의 모습을 확인할 차례예요.',
  '오직 당신만을 위한 끝내주는 파티가 되겠네요.\n죽음에 대한 근심, 걱정은 잠시 내려두고 이 파티를 조금만 즐겨보세요.'
];

let searchInput, searchButton, playButton;
let searchResults = [];
let playlist = [];
let player;
let currentPlayingIndex = 0;
let playerReady = false;

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

// New variables for selections
let selections = []; // 모든 선택 사항 저장: [capturedImage, selectedDay, selectedFlower, selectedFood, selectedDress]
let selectedDay = null; // 화면 11에서 고정된 날짜 텍스트
let selectedFlowerIndex = -1; // 화면 13에서 고정된 꽃 인덱스
let selectedFoodIndex = -1; // 화면 15에서 고정된 음식 인덱스
let leftRibbonTexts = []; // 저장된 왼쪽 리본 텍스트
let rightRibbonTexts = []; // 저장된 오른쪽 리본 텍스트
let selectedDayIndex = -1; // 선택된 날짜 버튼 인덱스
let selectedFlowerButtonIndex = -1; // 선택된 꽃 버튼 인덱스
let selectedFoodIndexButton = -1; // 선택된 음식 버튼 인덱스

let endingQuestions = [
  "내 인생의 목표는 무엇이었나?",
  "가장 자랑스러웠던 일은 무엇이었나?",
  "가장 미안한 사람은 누구인가?",
  "가장 행복했던 순간은 언제였나?",
  "자주 숨기고 살았던 감정은 무엇인가?",
  "나를 자주 울게 만든 일은 무엇이었나?",
  "끝까지 포기하지 않았던 것은 무엇이었나?",
  "다시 도전해보고 싶은 일은 무엇인가?",
  "가장 자주 찾은 장소는 어디였나?",
  "‘나’를 기억할 단 한 장면이 있다면, 어떤 모습이었으면 좋을까?",
  "이 삶에서 배운 가장 큰 교훈은 무엇이었나?",
  "나에게 ‘죽음’은 어떤 의미인가?",
  "지금 떠나며 아쉬운 것이 있다면?",
  "내 장례식에 꼭 와줬으면 하는 사람들은 누구인가?",
  "마지막으로 남기고 싶은 말은 무엇인가?"
];
let currentQuestionIndex = 0;
let endingCredits = [];
let answerInput;

let creditScrollY = 0;
let scrollSpeed = 0.7;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  noStroke();

  // 검색창 및 버튼
  searchInput = createInput();
  searchInput.position(100, 50);
  searchInput.size(300);
  searchInput.hide();
  searchButton = createButton('검색');
  searchButton.position(410, 50);
  searchButton.mousePressed(() => {
    let query = searchInput.value();
    if (query) searchYouTube(query);
  });
  searchButton.hide();

  playButton = createButton('▶️ 재생');
  playButton.position(500, 50);
  playButton.mousePressed(playPlaylist);
  playButton.hide();
}

function preload() {
  // 이미지 로드 함수 정의
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
  imageMode(CORNER);
  noStroke();

  // 플레이리스트 검색창 및 버튼
  searchInput = createInput();
  searchInput.position(100, 50);
  searchInput.size(300);
  searchInput.hide();
  searchButton = createButton('검색');
  searchButton.position(410, 50);
  searchButton.mousePressed(() => {
    let query = searchInput.value();
    if (query) searchYouTube(query);
  });
  searchButton.hide();

  playButton = createButton('▶️ 재생');
  playButton.position(500, 50);
  playButton.mousePressed(playPlaylist);
  playButton.hide();

  //캠 설정
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
  background(220);
  imageMode(CORNER);

  flowerModeButton.hide();
  textModeButton.hide();
  leftRibbonInput.hide();
  rightRibbonInput.hide();

  if (currentScreen === 1) drawScreen1();
  else if (currentScreen === 2) drawScreen2();
  else if (currentScreen === 3) drawScreen3();
  else if (currentScreen === 4) drawScreen4();
  else if (currentScreen === 5) drawScreen5();
  else if (currentScreen === 7) drawScreen7();
  else if (currentScreen === 8) drawScreen8();
  else if (currentScreen === 9) drawScreen9();
  else if (currentScreen === 10) drawScreen10();
  else if (currentScreen === 11) drawScreen11();
  else if (currentScreen === 12) drawScreen12();
  else if (currentScreen === 13) drawScreen13();
  else if (currentScreen === 14) drawScreen14();
  else if (currentScreen === 15) drawScreen15();
  else if (currentScreen === 16) drawScreen16();
  else if (currentScreen === 17) drawScreen17();
  else if (currentScreen === 18) drawScreen18();
  else if (currentScreen === 19) drawScreen19();
  else if (currentScreen === 20) drawScreen20();
  else if (currentScreen === 21) drawScreen21();
}

function drawNextButton() {
  // 다음 버튼을 화면 오른쪽 아래에 표시
  let btnX = width * 0.9, btnY = height * 0.9, btnWidth = 100, btnHeight = 40;
  fill(180);
  stroke(0);
  rectMode(CENTER);
  rect(btnX, btnY, btnWidth, btnHeight, 5);
  fill(0);
  textSize(15);
  textAlign(CENTER, CENTER);
  text('다음으로', btnX, btnY);
}

function drawText(commentsArray) {
  // 텍스트와 함께 죽음 이미지를 중앙에 표시
  imageMode(CENTER);
  image(deathImage, width / 2, height * 2 / 5, 480, 640);
  fill(50);
  textSize(28);
  textAlign(CENTER, CENTER);
  if (textFlowIndex >= 0 && textFlowIndex < commentsArray.length) {
    text(commentsArray[textFlowIndex], width / 2, height * 4 / 5);
  }
}

function drawScreen1() {
  fill(0);
  textSize(32);
  text("내 인생의 엔딩 크레딧", width / 2, height / 2 - 100);
  textSize(18);
  text("당신의 마지막을 직접 설계해보시겠습니까?", width / 2, height / 2 - 40);

  let btnX = width / 2;
  let btnY = height / 2 + 30;
  let btnW = 100;
  let btnH = 40;

  if (
    mouseX > btnX - btnW / 2 &&
    mouseX < btnX + btnW / 2 &&
    mouseY > btnY - btnH / 2 &&
    mouseY < btnY + btnH / 2
  ) {
    fill(230);
  } else {
    fill(245);
  }
  stroke(150);
  rect(btnX, btnY, btnW, btnH, 10);
  noStroke();
  fill(0);
  textSize(16);
  text("시작하기", btnX, btnY);
}

function drawScreen2() {
  fill(230);
  noStroke();
  let bx = width / 2;
  let by = height / 2;
  fill(245);
  rect(bx, by, 100, 70);
  fill(180);
  triangle(bx - 50, by - 35, bx + 50, by - 35, bx, by + 10);

  if (mouseX > bx - 50 && mouseX < bx + 50 && mouseY > by - 35 && mouseY < by + 35) {
    fill(0, 0, 0, 20);
    rect(bx, by, 100, 70);
  }

  fill(80);
  textSize(18);
  text("저승사자 님으로부터 메일이 도착하였습니다.", width / 2, height / 2 + 100);
}

function drawScreen3() {
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

  let bx = width / 2;
  let by = height / 2 + 80;
  let bw = 250;
  let bh = 40;

  if (
    mouseX > bx - bw / 2 &&
    mouseX < bx + bw / 2 &&
    mouseY > by - bh / 2 &&
    mouseY < by + bh / 2
  ) {
    fill(200);
  } else {
    fill(230);
  }
  rect(bx, by, bw, bh, 10);
  fill(0);
  text("장례식 컨설팅 바로가기", bx, by);
}

// 유튜브 IFrame API 준비 후 호출됨
function onYouTubeIframeAPIReady() {
  player = new YT.Player('invisible-player', {
    height: '1',
    width: '1',
    videoId: '',  // 처음엔 비워 두되, 나중에 loadVideoById로 재생
    playerVars: {
      autoplay: 0, // 처음엔 자동 재생 안 함 (mute+클릭 후에 재생 유도)
      controls: 0, // 컨트롤 바 숨김
      modestbranding: 1, // 유튜브 로고 최소화
      rel: 0, // 관련 동영상 표시 안 함
      playsinline: 1, // 모바일에서 전체화면 막기
      origin: window.location.origin // 쿠키/CORS 관련 보안 대응
    },
    events: {
      onReady: () => {
        playerReady = true;
        // autoplay는 유저 인터랙션 이후에만 → mute 후 재생 권장
      },
      onStateChange: onPlayerStateChange,
    }
  });
}

function playVideoById(videoId) {
  if (playerReady) {
    player.mute();  // 사용자 상호작용 없이 autoplay하려면 mute 필수
    player.loadVideoById(videoId);
    player.playVideo();
  }
}

function drawScreen4() {
  drawNextButton();
  drawText(playlistComments);
}

function drawScreen5() {
  background(255);
  drawNextButton();

  // UI 보이기
  searchInput.show();
  searchButton.show();
  playButton.show();

  fill(0);
  textSize(24);
  text("마지막으로 단 4곡만 들을 수 있다면, 듣고 싶은 노래는?", width / 2, 100);

  // 검색 결과 보여주기
  textSize(16);
  for (let i = 0; i < searchResults.length; i++) {
    let y = 150 + i * 40;
    fill(230);
    rect(width / 2, y, 500, 30, 10);
    fill(0);
    text(searchResults[i].title, width / 2, y);
  }

  // 현재 재생목록 보여주기
  textSize(18);
  text("▶ 플레이리스트", 150, height - 200);
  textSize(14);
  for (let i = 0; i < playlist.length; i++) {
    text(`- ${playlist[i].title}`, 150, height - 170 + i * 20);
  }
}

function drawScreen7() {
  // 화면 7: 사진 찍기 전 안내 문구 표시
  drawNextButton();
  drawText(pictureComments);
}

function drawScreen8() {
  // 화면 8: 웹캠을 통해 사진을 찍는 화면
  drawNextButton();
  let camDrawWidth = width * 0.5, camDrawHeight = height * 0.8;
  let camX = (width - camDrawWidth) / 2, camY = (height - camDrawHeight) / 2 - 60;

  push();
  translate(camX + camDrawWidth, camY); // 오른쪽 끝으로 이동 후 좌우 반전
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
  text(shootButton.label, shootButton.x, shootButton.y);
}

function drawScreen9() {
  // 화면 9: 찍은 사진을 프레임에 표시
  drawNextButton();
  if (capturedImage && capturedImage.width > 0 && capturedImage.height > 0) {
    imageMode(CENTER);
    let displayWidth = capturedImage.width / 3, displayHeight = capturedImage.height / 3;
    let imgX = width / 3, imgY = height / 2;

    // 테이블 그리기
    imageMode(CENTER);
    image(table, imgX, imgY + displayHeight / 2 + 50, displayWidth + 60, displayHeight + 60);

    // 프레임 그리기
    image(frame, imgX, imgY, displayWidth + 50, displayHeight + 50);

    // 캡처된 이미지 그리기 (이미 좌우 반전된 상태)
    image(capturedImage, imgX, imgY, displayWidth - 60, displayHeight + 5);

    // 아래 테이블 부분 그리기
    image(belowtable, imgX, imgY + displayHeight / 2 + 80, displayWidth / 2, displayHeight / 2);
  } else {
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("캡처된 이미지가 없습니다.\n이전 화면으로 돌아가 촬영하세요.", width / 2, height / 2);
  }
}

function drawScreen10() {
  // 화면 10: 데코레이션 선택 전 안내 문구 표시
  drawNextButton();
  drawText(decoComments);
}

function drawScreen11() {
  // 화면 11: 가장 즐거웠던 하루 선택
  drawNextButton();
  textSize(30);
  fill(0);
  textAlign(LEFT, CENTER);
  text('내 인생에서', width / 7, height / 7);
  text('가장 즐거웠던 하루는?', width / 7, height / 7 + 50);

  if (capturedImage && capturedImage.width > 0 && capturedImage.height > 0) {
    imageMode(CENTER);
    let displayWidth = capturedImage.width / 3, displayHeight = capturedImage.height / 3;
    let imgX = width / 3, imgY = height / 2;

    // 테이블 그리기
    imageMode(CENTER);
    image(table, imgX, imgY + displayHeight / 2 + 50, displayWidth + 60, displayHeight + 60);

    // 프레임 그리기
    image(frame, imgX, imgY, displayWidth + 50, displayHeight + 50);

    // 캡처된 이미지 그리기
    image(capturedImage, imgX, imgY, displayWidth - 60, displayHeight + 5);

    // 아래 테이블 부분 그리기
    image(belowtable, imgX, imgY + displayHeight / 2 + 80, displayWidth / 2, displayHeight / 2);
  }

  let hoveredDayIndex = -1;
  drawButtonGrid(dayButton, 2, 3, (i, j) => {
    let buttonIndex = i * 3 + j;
    if (buttonIndex < dayButton.length) {
      hoveredDayIndex = buttonIndex;
    }
  });

  // 선택된 또는 호버된 날짜 텍스트 표시
  if (selectedDay) {
    textSize(40);
    fill(0);
    textAlign(CENTER, CENTER);
    text(selectedDay, width / 3, height / 2);
  } else if (hoveredDayIndex >= 0) {
    textSize(40);
    fill(0);
    textAlign(CENTER, CENTER);
    text(dayButton[hoveredDayIndex], width / 3, height / 2);
  }
}

function drawScreen12() {
  // 화면 12: 화환 선택 전 안내 문구 표시
  drawNextButton();
  drawText(flowerComments);
}

function drawScreen13() {
  // 화면 13: 화환과 메시지 선택
  drawNextButton();
  flowerModeButton.show();
  textModeButton.show();
  textAlign(LEFT, TOP);
  textSize(30);
  fill(0);
  text('내 인생을\n하나의 감정으로 요약한다면?', width / 20, height / 20);

  let hoveredIndex = -1;
  if (currentMode === '꽃') {
    leftRibbonInput.hide();
    rightRibbonInput.hide();
    drawButtonGrid(flowerButton, 1, 3, (i, j) => {
      let buttonIndex = i * 3 + j;
      if (buttonIndex < flowerImages.length) {
        hoveredIndex = buttonIndex;
      }
    });
  } else if (currentMode === '글') {
    leftRibbonInput.show();
    rightRibbonInput.show();
  }

  imageMode(CENTER);
  // 선택된 꽃이 있으면 표시, 없으면 호버된 또는 기본 꽃 표시
  if (selectedFlowerIndex >= 0) {
    image(flowerImages[selectedFlowerIndex], width / 3, height / 2, 550, 700);
    // 왼쪽 리본에 텍스트 표시
    if (leftRibbonTexts.length > 0) {
      push();
      translate(width / 3 - 55, height / 2 - 100); // 간격 1/2배로 줄임
      rotate(-PI / 3); // -60도
      textSize(20);
      fill(0);
      textAlign(CENTER, CENTER);
      text(leftRibbonTexts[leftRibbonTexts.length - 1], 0, 0, 150, 50); // 마지막 입력값만 표시
      pop();
    }
    // 오른쪽 리본에 텍스트 표시
    if (rightRibbonTexts.length > 0) {
      push();
      translate(width / 3 + 55, height / 2 - 100); // 간격 1/2배로 줄임
      rotate(PI / 3); // +60도
      textSize(20);
      fill(0);
      textAlign(CENTER, CENTER);
      text(rightRibbonTexts[rightRibbonTexts.length - 1], 0, 0, 150, 50); // 마지막 입력값만 표시
      pop();
    }
  } else {
    let displayImage = hoveredIndex >= 0 ? flowerImages[hoveredIndex] : flowerImages[0];
    image(displayImage, width / 3, height / 2, 550, 700);
  }

  if (currentMode === '글') {
    // enter 키를 누를 때까지 텍스트 미리 표시하지 않음
  }
}

function drawScreen14() {
  // 화면 14: 음식 선택 전 안내 문구 표시
  drawNextButton();
  drawText(foodComments);
}

function drawScreen15() {
  drawNextButton();
  textAlign(LEFT, TOP);
  textSize(30);
  fill(0);
  text('내 생애 가장\n좋아했던 음식은?', width / 20, height / 20);
  // 화면 15: 음식 선택
  let hoveredIndex = -1;
  drawButtonGrid(foodButton, 2, 3, (i, j) => {
    let buttonIndex = i * 3 + j;
    if (buttonIndex < foodImages.length) {
      hoveredIndex = buttonIndex;
    }
  });

  imageMode(CENTER);
  // 선택된 음식이 있으면 표시, 없으면 호버된 음식 표시
  if (selectedFoodIndex >= 0) {
    image(foodImages[selectedFoodIndex], width / 3, height / 2, 550, 700);
  } else if (hoveredIndex >= 0) {
    image(foodImages[hoveredIndex], width / 3, height / 2, 550, 700);
  }
}

function drawScreen16() {
  // 화면 16: 드레스 선택 전 안내 문구 표시
  drawNextButton();
  drawText(dressComments);
}

function drawScreen17() {
  drawNextButton();
  textAlign(LEFT, TOP);
  textSize(30);
  fill(0);
  text('내 인생에서 나는\n어떤 옷을 입었나?', width / 20, height / 20);
  // 화면 17: 드레스 선택
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
    let imgY = hangY + hangH / 2 - 100; // y축 100 더 올림
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
      scale(1.2); // 호버링 시 커지도록
    }
    imageMode(CENTER);
    image(dresshalfImages[i], 0, -300, displayWidth, displayHeight); // 옷 상단 정렬
    pop();
  }

  let displayIndex = selectedDressIndex !== -1 ? selectedDressIndex : hoverIndex;
  if (displayIndex >= 0 && displayIndex < dressImages.length) {
    imageMode(CENTER);
    image(dressImages[displayIndex], width * 2 / 3 + width * 0.125, height / 2, 240, 320); // 오른쪽에 표시
  }
}

function drawScreen18() {
  drawNextButton();
  drawText(endingcreditsComments);
}

function drawScreen19() {
  background(255);

  // 질문 영역
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("엔딩 크레딧 작성을 위한 질문", width / 2, 150);

  textSize(16);
  text(endingQuestions[currentQuestionIndex], width / 2, 180);

  // 입력창 위치 설정
  const inputX = width / 2 - 200;
  const inputY = 220;
  const inputW = 400;
  const inputH = 30;

  // 입력창 생성
  if (!answerInput) {
    answerInput = createInput('');
    answerInput.position(inputX, inputY);
    answerInput.size(inputW, inputH);
  }

  // 확인 버튼 위치: 입력창 오른쪽 옆
  let nextBtn = {
    x: inputX + inputW + 10,
    y: inputY,
    w: 80,
    h: inputH
  };

  // 버튼 그리기
  fill(220);
  stroke(0);
  rectMode(CORNER);
  rect(nextBtn.x, nextBtn.y, nextBtn.w, nextBtn.h, 10);

  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  text("확인", nextBtn.x + nextBtn.w / 2, nextBtn.y + nextBtn.h / 2);

  // 버튼 클릭 감지
  if (
    mouseIsPressed &&
    mouseX > nextBtn.x && mouseX < nextBtn.x + nextBtn.w &&
    mouseY > nextBtn.y && mouseY < nextBtn.y + nextBtn.h
  ) {
    const ans = answerInput.value().trim();
    if (ans !== "") {
      endingCredits.push({
        question: endingQuestions[currentQuestionIndex],
        answer: ans
      });
      answerInput.remove();
      answerInput = null;
      currentQuestionIndex++;

      if (currentQuestionIndex >= endingQuestions.length) {
        currentScreen = 20;
      }
    }
  }
}


function drawScreen20() {
  drawNextButton();
  drawText(endingComments);
}

function drawScreen21() {
  // 화면 오른쪽 절반 배경을 검정으로
  fill(0);
  noStroke();
  rectMode(CORNER);
  rect(width * 0.5, 0, width * 0.5, height);

  // 텍스트 설정
  textAlign(LEFT, TOP);
  textWrap(WORD);
  fill(255);
  let x = width * 0.55;
  let yStart = 80;
  let y = yStart - creditScrollY;
  let contentWidth = width * 0.4;

  // 제목
  textSize(28);
  textStyle(BOLD);
  text("내 인생의 엔딩 크레딧", x, y);
  y += 50;

  // 본문
  textSize(14);
  for (let i = 0; i < endingCredits.length; i++) {
    let entry = endingCredits[i];

    textStyle(BOLD);
    text(entry.question, x, y, contentWidth);
    y += 22;

    textStyle(NORMAL);
    text("- " + entry.answer, x, y, contentWidth);
    y += 38;
  }

  // 실제 내용 전체 높이
  let totalHeight = y - (yStart - creditScrollY);

  // 화면을 초과하는 경우에만 스크롤
  if (totalHeight > height - yStart) {
    creditScrollY += scrollSpeed;
  }
}


function drawButtonGrid(buttons, numCols, numRows, onHover = () => {}) {
  // 버튼 그리드 생성 함수
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
        let isSelected = (currentScreen === 11 && buttonIndex === selectedDayIndex) ||
                         (currentScreen === 13 && buttonIndex === selectedFlowerButtonIndex) ||
                         (currentScreen === 15 && buttonIndex === selectedFoodIndexButton);

        fill(isSelected || isHovering ? color(255, 255, 100) : color(200, 200, 240));
        stroke(50);
        rect(btnX, btnY, btnWidth, btnHeight, 10);
        fill(0);
        textSize(20);
        text(buttons[buttonIndex], btnX, btnY);

        if (isHovering) {
          onHover(i, j);
        }
      }
    }
  }
}

function mousePressed() {
  // 공통 '다음' 버튼의 위치와 크기 정의
  let btnX = width * 0.9, btnY = height * 0.9, btnWidth = 100, btnHeight = 40;

  // 1. 각 화면의 특정 버튼 클릭 처리 (공통 '다음' 버튼보다 먼저 처리)
  if (currentScreen === 1) {
    let startBtnX = width / 2;
    let startBtnY = height / 2 + 30;
    let startBtnW = 100;
    let startBtnH = 40;

    if (
      mouseX > startBtnX - startBtnW / 2 &&
      mouseX < startBtnX + startBtnW / 2 &&
      mouseY > startBtnY - startBtnH / 2 &&
      mouseY < startBtnY + startBtnH / 2
    ) {
      currentScreen = 2;
      return; // 화면 전환 후 즉시 종료
    }
  } else if (currentScreen === 2) {
    let mailBtnX = width / 2;
    let mailBtnY = height / 2;
    let mailBtnW = 100;
    let mailBtnH = 70;

    if (
      mouseX > mailBtnX - mailBtnW / 2 &&
      mouseX < mailBtnX + mailBtnW / 2 &&
      mouseY > mailBtnY - mailBtnH / 2 &&
      mouseY < mailBtnY + mailBtnH / 2
    ) {
      currentScreen = 3;
      return; // 화면 전환 후 즉시 종료
    }
  } else if (currentScreen === 3) {
    let linkBtnX = width / 2;
    let linkBtnY = height / 2 + 80;
    let linkBtnW = 250;
    let linkBtnH = 40;

    if (
      mouseX > linkBtnX - linkBtnW / 2 &&
      mouseX < linkBtnX + linkBtnW / 2 &&
      mouseY > linkBtnY - linkBtnH / 2 &&
      mouseY < linkBtnY + linkBtnH / 2
    ) {
      currentScreen = 4;
      return; // 화면 전환 후 즉시 종료
    }
  } else if (currentScreen === 5) {
    // 플레이리스트에 검색 결과 추가 로직
    for (let i = 0; i < searchResults.length; i++) {
      let y = 150 + i * 40;
      if (
        mouseX > width / 2 - 250 && mouseX < width / 2 + 250 &&
        mouseY > y - 15 && mouseY < y + 15
      ) {
        playlist.push(searchResults[i]);
        console.log(`추가됨: ${searchResults[i].title}`);
      }
    }
  } else if (currentScreen === 8) {
    if (mouseX > shootButton.x - shootButton.w / 2 && mouseX < shootButton.x + shootButton.w / 2 &&
        mouseY > shootButton.y - shootButton.h / 2 && mouseY < shootButton.y + shootButton.h / 2) {
      if (cam && cam.elt.readyState === 4) {
        let flippedImage = createImage(cam.width, cam.height);
        flippedImage.copy(cam, 0, 0, cam.width, cam.height, cam.width, 0, -cam.width, cam.height);
        capturedImage = flippedImage;
        selections.push(capturedImage);
        console.log("Captured flipped photo stored in selections");
        currentScreen = 9;
      } else {
        console.warn("카메라가 준비되지 않았습니다.");
      }
      return; // 화면 전환 후 즉시 종료
    }
  } else if (currentScreen === 11) {
    let buttons = dayButton;
    let numCols = 2, numRows = 3;
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
            selectedDay = buttons[buttonIndex];
            selectedDayIndex = buttonIndex;
            selections.push(selectedDay);
            console.log(`Selected day: ${selectedDay}`);
            return; // 선택 후 즉시 종료
          }
        }
      }
    }
  } else if (currentScreen === 13 && currentMode === '꽃') {
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
            return; // 선택 후 즉시 종료
          }
        }
      }
    }
  } else if (currentScreen === 15) {
    let buttons = foodButton;
    let numCols = 2, numRows = 3;
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
            selectedFoodIndex = buttonIndex;
            selectedFoodIndexButton = buttonIndex;
            selections.push(foodImages[buttonIndex]);
            console.log(`Selected food: ${buttons[buttonIndex]}`);
            return; // 선택 후 즉시 종료
          }
        }
      }
    }
  } else if (currentScreen === 17) {
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
        return; // 선택 후 즉시 종료
      }
    }
  }

  // 2. 공통 '다음' 버튼 클릭 처리 (모든 개별 버튼 처리 이후에 위치)
  if (mouseX > btnX - btnWidth / 2 && mouseX < btnX + btnWidth / 2 &&
      mouseY > btnY - btnHeight / 2 && mouseY < btnY + btnHeight / 2) {

    if (currentScreen === 4) {
      if (textFlowIndex < playlistComments.length - 1) {
        textFlowIndex++;
      } else {
        textFlowIndex = 0;
        currentScreen = 5;
      }
    } else if (currentScreen === 5) {
      searchInput.hide();
      searchButton.hide();
      playButton.hide();
      currentScreen = 7;
    } else if (currentScreen === 7) {
      if (textFlowIndex < pictureComments.length - 1) {
        textFlowIndex++;
      } else {
        textFlowIndex = 0;
        currentScreen = 8;
      }
    } else if (currentScreen === 9) {
      currentScreen = 10;
    } else if (currentScreen === 10) {
      if (textFlowIndex < decoComments.length - 1) {
        textFlowIndex++;
      } else {
        textFlowIndex = 0;
        currentScreen = 11;
      }
    } else if (currentScreen === 11) {
      currentScreen = 12;
    } else if (currentScreen === 12) {
      if (textFlowIndex < flowerComments.length - 1) {
        textFlowIndex++;
      } else {
        textFlowIndex = 0;
        currentScreen = 13;
      }
    } else if (currentScreen === 13) {
      currentScreen = 14;
    } else if (currentScreen === 14) {
      if (textFlowIndex < foodComments.length - 1) {
        textFlowIndex++;
      } else {
        textFlowIndex = 0;
        currentScreen = 15;
      }
    } else if (currentScreen === 15) {
      currentScreen = 16;
    } else if (currentScreen === 16) {
      if (textFlowIndex < dressComments.length - 1) { 
        textFlowIndex++;
      } else {
        textFlowIndex = 0;
        currentScreen = 17;
      }
    } else if (currentScreen === 17) {
      currentScreen = 18;
    } else if (currentScreen === 18) {
      if (textFlowIndex < endingcreditsComments.length - 1) {
        textFlowIndex++;
      } else {
        textFlowIndex = 0; 
        currentScreen = 19; 
      }
    } else if (currentScreen === 19) {
      currentScreen = 20;
      answerInput.hide();
    } else if (currentScreen === 20) {
      if (textFlowIndex < endingComments.length - 1) {
        textFlowIndex++;
      } else {
        textFlowIndex = 0; 
        currentScreen = 21;
      }
    }
  }
}

function keyPressed() {
  // Screen 13에서 리본 텍스트 입력 후 Enter 키로 저장
  if (currentScreen === 13 && currentMode === '글') {
    if (keyCode === ENTER) {
      // Enter 키를 눌렀을 때만 텍스트를 저장합니다.
      // draw 함수에서 바로 반영되지 않도록 합니다.
      if (leftRibbonInput.value().trim() !== '') {
        leftRibbonText = leftRibbonInput.value();
        leftRibbonTexts.push(leftRibbonText);
        leftRibbonInput.value(''); // 입력창 비우기
      }
      if (rightRibbonInput.value().trim() !== '') {
        rightRibbonText = rightRibbonInput.value();
        rightRibbonTexts.push(rightRibbonText);
        rightRibbonInput.value(''); // 입력창 비우기
      }
    }
  }
}

function drawTutorialScreen(textContent) {
  // 회색 박스
  fill(240);
  stroke(180);
  rectMode(CENTER);
  rect(width / 2, height - 140, 1100, 200, 30);

  // 텍스트
  noStroke();
  fill(80);
  textSize(16);
  textAlign(CENTER);

  // 정확한 박스 내부 좌표: 왼쪽 + padding, 위쪽 + padding
  text(textContent, 700, 600);

  // 다음 버튼
  tutorialBtn = { x: width - 160, y: height - 100, w: 80, h: 40 };

  fill(
    mouseX > tutorialBtn.x && mouseX < tutorialBtn.x + tutorialBtn.w &&
    mouseY > tutorialBtn.y && mouseY < tutorialBtn.y + tutorialBtn.h
      ? color(180, 230, 180)
      : color(200, 240, 200)
  );
  stroke(150);
  rectMode(CORNER);
  rect(tutorialBtn.x, tutorialBtn.y, 80, 40, 10);

  noStroke();
  fill(0);
  textAlign(CENTER, CENTER);
  text("다음", tutorialBtn.x + 40, tutorialBtn.y + 20);
}

// 유튜브 검색
function searchYouTube(query) {
  const API_KEY = 'AIzaSyCwni5IDdiBTGJ6PT4y-k57V_MmdUpsHB8';
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoEmbeddable=true&maxResults=5&q=${encodeURIComponent(query)}&key=${API_KEY}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      searchResults = data.items.map(item => ({
        title: item.snippet.title,
        videoId: item.id.videoId,
      }));
    });
}

// 재생 함수
function playPlaylist() {
  if (!playerReady || playlist.length === 0) return;
  currentPlayingIndex = 0;
  player.cueVideoById(playlist[0].videoId);
  setTimeout(() => {
    player.playVideo();
  }, 1000);
  searchInput.hide();
  searchButton.hide();
  playButton.hide();
}


// 다음 곡으로 넘어가기
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    currentPlayingIndex++;
    if (currentPlayingIndex < playlist.length) {
      player.loadVideoById(playlist[currentPlayingIndex].videoId);
    }
  }
}
