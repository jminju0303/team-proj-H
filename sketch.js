//추가된 전역변수들
let timer = 0; // 타이머 시작 시간을 저장할 변수
let countdown = 0; // 카운트다운 숫자 (3, 2, 1)
let isCountingDown = false; // 카운트다운 진행 상태
let capturedFlower;
let finalLeftRibbonText = '';
let finalRightRibbonText = '';
let hoveredFoodIndex = -1;  // 마우스만 올린 음식
let foodConfirmed = false;
let flowerComments = [
  '이제는 화환에 문구를 작성해볼게요.',
  '주변 사람들이 당신한테 보내주는 화환 말고요, 장례식장을 찾아오는 사람들에게 당신이 보내는 메세지를 담으시는 겁니다.',
  '내가 내 장례식에 보내는 화환이라… 조금 어색할 수도 있지만 제가 준비한 서비스라고 생각해주시고, 마지막 꽃길을 직접 깔아보시죠.',
  '아, 멘트가 너무 길면 리본에 안 들어가니까 유의해주시고요.',
  '리본 하나당 10글자 정도가 보통 적당하더라고요.'
];
let capturedTable;
let guestTable;
let capturedFood;
let guestFace = [];
let capturedDress;

let currentScreen = 1;

let deathDate = "";

//폰트
let fontHead1;
let fontHead2;
let fontHead3;
let fontHead4;

//색상
let mainColor1;
let mainColor2;
let mainColor3;
let mainColor4;

//이미지에셋
let envelopeImg;

let checkingVideo = null; 
let checkCallback = null; 

let textFlowIndex = 0;
let playlistComments = [
  '사람마다 마지막이 다르듯, 마지막을 기억하는 방식도 다릅니다. \n어떤 분은 조용히, 어떤 분은 웃으며, 또 어떤 분은 꼭 참던 눈물을 흘리며 당신을 떠올릴 겁니다.\n그래서 음악이 필요하죠. 장례식의 공기는 곡 하나로 바뀌거든요.',
  '이건 당신이 남기는 첫 번째 선택이에요. \n슬퍼도 괜찮고, 신나도 아무도 뭐라 안 합니다. \n남겨질 사람들이 당신을 떠올리며 이 노래를 들을 테니, 어떻게 추억되고 싶은지 노래로 표현해보세요.',
  '자, 이제 마음 속에 떠오르는 노래가 있다면 검색창에 넣어보세요. \n원하는 노래를 자유롭게 플레이리스트에 담으면 됩니다. \n장례식 컨설팅이 처음이라 막막하시다면 저희가 제공하는 추천 리스트도 있어요.',
  '재생 버튼을 누르시면 미리 들어보실 수도 있어요. 분위기 확인용으로. \n그럼 장례식장 플레이리스트, 골라보실까요?',
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
  '이렇게 모든 설계가 마무리됐습니다.\n음악도 정했고, 영정사진도 찍었고, 공간도 꾸몄고, 음식까지도 빠짐없이 준비하셨어요.',
  '장례식에서 정할 게 꽤 많았죠? 그래도 나의 마지막 순간인데, 내가 직접 정할 기회가 없으면 너무 억울하잖아요.\n당신다운, 당신만의 마지막을 잘 꾸미신 것 같네요.',
  '이제는… 정말 떠나야 할 시간입니다.\n하지만 걱정 마세요. 당신이 고른 이 모든 것들은, 누군가의 기억 속에서 천천히 재생될 거예요.\n마지막 순간이 어떻게 기억될지 직접 하나하나 골랐으니 후회도 없을 겁니다.',
  '이번 삶에서의 모든 순간 동안 너무 수고 많으셨습니다.\n마지막으로 내 삶의 엔딩 크레딧을 한 번 작성해볼게요.\n내 인생이 영화라면, 엔딩 크레딧을 어떻게 올리고 싶으세요?'
];
let endingComments = [
  '멋진 엔딩크레딧이 되겠군요. 수고 많았어요.\n이제 당신이 하나하나 꾸민 장례식장의 모습을 확인할 차례예요.',
  '오직 당신만을 위한 끝내주는 파티가 되겠네요.\n죽음에 대한 근심, 걱정은 잠시 내려두고 이 파티를 조금만 즐겨보세요.'
];

let searchInput, searchButton, playButton;
let searchResults = [];
let playlist = [];
let playlists = [];
let player;
let currentPlayingIndex = 0;
let playerReady = false;
let hoveringPlaylistIndex = -1;
let selectedPlaylistIndex = -1;
let hoveringSearchIndex = -1;
let recommendedBoxBounds = [];

let dayButton = ['기본 옵션', '크리스마스', '댄스파티', '할로윈'];
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
  "당신의 이름은 무엇인가요?",
  "당신 인생의 롤모델은 누구인가요?",
  "이번 생에서 가장 고마운 사람은 누구인가요?",
  "이번 생에서 가장 미안한 사람은 누구인가요?",
  "이번 생에서 당신을 가장 많이 웃게 한 사람은 누구인가요?",
  "한 번이라도 꼭 다시 만나고 싶은 사람은 누구인가요?",
  "당신이 가장 좋아했던 장소는 어디인가요?",
  "당신에게 가장 소중했던 물건은 무엇인가요?",
  "이번 생에서 가장 많이 느꼈던 감정은 무엇인가요?",
  "이번 생에서 자주 숨겼던 감정은 무엇인가요?",
  "내 장례식에 꼭 초대하고 싶은 사람들은 누구인가요? (3명)"
];
let endingAnswers = [
  "주인공 역 役",
  "인생의 롤모델 역 役",
  "내 인생의 조력자 役",
  "마음의 숙제 役",
  "내 인생의 개그맨 役",
  "특별출연",
  "장소 협찬",
  "소품 협찬",
  "감정 주연 役",
  "감정 조연 役",
  "장례식 VIP",
]
let currentQuestionIndex = 0;
let endingCredits = [];
let answerInput;

let scrollCount = 0;
let isScrolling = true;
let popupVisible = false;
let creditScrollY = 0;
let scrollSpeed = 0.7;

let api_key;

function preload() {

  fontHead1 = loadFont("assets/IropkeBatangM.woff");
  fontHead2 = loadFont("assets/NotoSansKR-ExtraBold.ttf");
  fontHead3 = loadFont("assets/NotoSansKR-Bold.ttf");
  fontHead4 = loadFont("assets/NotoSansKR-Regular.ttf");

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
    dressFaceBackImages = [
    loadImageWithError('assets/school_back.png'),
    loadImageWithError('assets/magic_back.png'),
    loadImageWithError('assets/santa_back.png'),
    loadImageWithError('assets/nightwear_back.png'),
    loadImageWithError('assets/suit_back.png'),
    loadImageWithError('assets/hanbok_back.png')
    ]

    dressFaceFrontImages = [
    loadImageWithError('assets/school_front.png'),
    loadImageWithError('assets/magic_front.png'),
    loadImageWithError('assets/santa_front.png'),
    loadImageWithError('assets/nightwear_front.png'),
    loadImageWithError('assets/suit_front.png'),
    loadImageWithError('assets/hanbok_front.png')
    ]

  envelopeImg = loadImageWithError("assets/envelope.png");

  funeralImgs = [
    loadImageWithError('assets/singlegookhwa.png'),
    loadImageWithError('assets/simpleHyang.png'),
    loadImageWithError('assets/funeralCandle.png'),
  ];
  XmasImgs = [
    loadImageWithError('assets/singlepoinsettia.png'),
    loadImageWithError('assets/socks.png'),
    loadImageWithError('assets/XmasCandle.png'),
    //loadImageWithError('assets/christmas.png'),
  ];
  partyImgs = [
    loadImageWithError('assets/singleDaisy.png'),
    loadImageWithError('assets/DJ.png'),
    loadImageWithError('assets/partyLight.png'),

  ];
  HalloweenImgs = [
    loadImageWithError('assets/bat.png'),
    loadImageWithError('assets/pumpkin.png'),
    loadImageWithError('assets/JackO.png'),
  ];

  guestTable = loadImageWithError('assets/guestTable.png')
  guestFace = [
    loadImageWithError('assets/frontFace.png'),
    loadImageWithError('assets/backFace.png')

  ];



}

function setup() {

  // 1. 저장된 키 있는지 먼저 확인
  api_key = localStorage.getItem("youtube_api_key");

  // 2. 없으면 prompt 실행
  if (!api_key) {
    api_key = prompt("Enter your API key:");
    if (api_key) {
      localStorage.setItem("youtube_api_key", api_key);  // 저장
    } else {
      alert("API key is required.");
      return; // 키 없으면 setup 중단
    }
  }
  
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  imageMode(CORNER);
  noStroke();

  let ytDiv = createDiv();
  ytDiv.id('invisible-player');
  ytDiv.style('width', '1px');
  ytDiv.style('height', '1px');
  ytDiv.style('opacity', '0');
  
  mainColor1 = color(167,141,111);
  mainColor2 = color(216,208,202);
  mainColor3 = color(238,238,238);
  mainColor4 = color(127,127,127);

  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  let y = tomorrow.getFullYear();
  let m = nf(tomorrow.getMonth() + 1, 2);
  let d = nf(tomorrow.getDate(), 2);
  deathDate = `${y}년 ${m}월 ${d}일`;

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

  playButton = createButton('▶ 재생');
playButton.mousePressed(() => {
  if (!playerReady || playlist.length === 0) return;

  currentPlayingIndex = 0;
  player.cueVideoById(playlist[0].videoId);

  setTimeout(() => {
    player.playVideo();
  }, 1000);

  searchInput.hide();
  searchButton.hide();
  playButton.hide();
});

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
  let btnX = width * 0.85;
  let btnY = height / 1.25;
  let btnWidth = 100;
  let btnHeight = 40;

  // 마우스가 버튼 위에 있는지 확인
  let isHover = (mouseX > btnX - btnWidth / 2 && mouseX < btnX + btnWidth / 2 &&
                 mouseY > btnY - btnHeight / 2 && mouseY < btnY + btnHeight / 2);

  // 색상 설정
  rectMode(CENTER);
  noStroke();
  if (isHover) {
    fill(lerpColor(color(mainColor1), color('#000000'), 0.2)); // 더 진한 톤
  } else {
    fill(mainColor1);
  }

  // 버튼 그리기
  rect(btnX, btnY, btnWidth, btnHeight, 5);

  // 텍스트 설정
  textAlign(CENTER, CENTER);
  textFont(fontHead1);
  textSize(15);
  if (isHover) {
    fill(mainColor2); // 호버 시 텍스트 색상 바꾸기
    cursor(HAND);
  } else {
    fill(mainColor3);
    cursor(ARROW);
  }
  text('다음으로', btnX, btnY);
}


let typedCharCount = 0;
let lastTypedTime = 0;

let previousTextFlowIndex = -1;

let floatStartTime = 0;

function wrapTextLines(textStr, maxWidth) {
  let words = textStr.split(' ');
  let lines = [];
  let currentLine = words[0] || '';

  for (let i = 1; i < words.length; i++) {
    let testLine = currentLine + ' ' + words[i];
    if (textWidth(testLine) < maxWidth) {
      currentLine = testLine;
    } else {
      lines.push(currentLine);
      currentLine = words[i];
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

function drawText(commentsArray) {

if (textFlowIndex !== previousTextFlowIndex) {
    typedCharCount = 0;
    lastTypedTime = millis();
    bubbleAlpha = 0;
    bubbleYOffset = 30;
    textAppearedAt = millis();
    previousTextFlowIndex = textFlowIndex;
  }

  // 💀 저승사자 이미지 둥둥 애니메이션
imageMode(CENTER);
let deathW = 240;
let deathH = deathW * (640 / 480);

// ⬆️ 떠다니는 y 애니메이션 (사인파 기반)
let floatY = sin((millis() - floatStartTime) * 0.002) * 10; // 진폭 10, 속도 조절
let deathY = height * 1.8 / 5 + floatY;

// 🪞 그림자
noStroke();
fill(0, 50); // 반투명 검정색
ellipse(width / 2, deathY + deathH / 2 - 10, deathW * 0.6, 15); // 타원형 그림자

// 👻 이미지
image(deathImage, width / 2, deathY, deathW, deathH);

  
  

  if (textFlowIndex >= 0 && textFlowIndex < commentsArray.length) {
    let fullText = commentsArray[textFlowIndex];
    let charsToShow = min(typedCharCount, fullText.length);
    let visibleText = fullText.substring(0, charsToShow);

    let maxBubbleWidth = width * 0.8;
    let visibleTextLines = visibleText.split('\n');
    let wrappedLines = [];
    for (let rawLine of visibleTextLines) {
    let wrapped = wrapTextLines(rawLine, maxBubbleWidth - 40); // 40은 padding
    wrappedLines.push(...wrapped);
  }
  let lineCount = wrappedLines.length;

  // 줄 간격 및 텍스트 박스 높이 계산
  let lineSpacing = 6;
  let lineH = textAscent() + textDescent() + lineSpacing;
  let textH = lineCount * lineH;
  let paddingX = 100, paddingY = 10;

  // 말풍선 크기 계산
  let maxTextW = 0;
  for (let line of wrappedLines) {
  maxTextW = max(maxTextW, min(textWidth(line), maxBubbleWidth - 40));
  }
  let bubbleW = min(maxTextW + paddingX * 2, maxBubbleWidth);
  let bubbleH = textH + paddingY * 2;
  let bubbleX = width / 2;
  let baseBubbleY = height * 3.8 / 5;
  let bubbleY = baseBubbleY - textH / 2;
  let bubbleR = 20;

    // 🟦 말풍선 그리기
    drawingContext.shadowBlur = 16;
    drawingContext.shadowColor = 'rgba(0, 0, 0, 0.2)';
    fill(238);
    stroke(167, 141, 111);
    strokeWeight(2);
    beginShape();
    vertex(bubbleX - bubbleW / 2 + bubbleR, bubbleY - bubbleH / 2);
    vertex(bubbleX - 10, bubbleY - bubbleH / 2);
    vertex(bubbleX, bubbleY - bubbleH / 2 - 15);
    vertex(bubbleX + 10, bubbleY - bubbleH / 2);
    vertex(bubbleX + bubbleW / 2 - bubbleR, bubbleY - bubbleH / 2);
    bezierVertex(bubbleX + bubbleW / 2, bubbleY - bubbleH / 2, bubbleX + bubbleW / 2, bubbleY - bubbleH / 2, bubbleX + bubbleW / 2, bubbleY - bubbleH / 2 + bubbleR);
    vertex(bubbleX + bubbleW / 2, bubbleY + bubbleH / 2 - bubbleR);
    bezierVertex(bubbleX + bubbleW / 2, bubbleY + bubbleH / 2, bubbleX + bubbleW / 2, bubbleY + bubbleH / 2, bubbleX + bubbleW / 2 - bubbleR, bubbleY + bubbleH / 2);
    vertex(bubbleX - bubbleW / 2 + bubbleR, bubbleY + bubbleH / 2);
    bezierVertex(bubbleX - bubbleW / 2, bubbleY + bubbleH / 2, bubbleX - bubbleW / 2, bubbleY + bubbleH / 2, bubbleX - bubbleW / 2, bubbleY + bubbleH / 2 - bubbleR);
    vertex(bubbleX - bubbleW / 2, bubbleY - bubbleH / 2 + bubbleR);
    bezierVertex(bubbleX - bubbleW / 2, bubbleY - bubbleH / 2, bubbleX - bubbleW / 2, bubbleY - bubbleH / 2, bubbleX - bubbleW / 2 + bubbleR, bubbleY - bubbleH / 2);
    endShape(CLOSE);
    drawingContext.shadowBlur = 0;

    // 📝 텍스트 출력
    fill(mainColor1);
    noStroke();
    textFont(fontHead3)
    textSize(18);
    textAlign(CENTER, TOP);
    for (let i = 0; i < wrappedLines.length; i++) {
      let lineY = bubbleY - bubbleH / 2 + paddingY + lineH * i;
      text(wrappedLines[i], bubbleX, lineY);
    }

    // ⌨ 타이핑 애니메이션
    if (millis() - lastTypedTime > 30 && typedCharCount < fullText.length) {
      typedCharCount++;
      lastTypedTime = millis();
    }
  }
}


function drawScreen1() {

  mainColor1 = color(167,141,111);
  mainColor2 = color(216,208,202);
  mainColor3 = color(238,238,238);
  mainColor4 = color(127,127,127);

  drawingContext.shadowBlur = 16;
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.2)';
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;

  background(mainColor1);

  textFont(fontHead1);
  textAlign(CENTER);
  fill(mainColor3);
  textSize(32);
  text("내 인생의 엔딩 크레딧", width / 2, height / 2 - 100);

  fill(0);
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
//-----------screen2 variable------------
//screen2 편지 버튼
let screen1ScaleFactor = 1.0;  // 현재 스케일
let screen1TargetScale = 1.0;  // 목표 스케일

//screen1 텍스트
let screen1Text = "저승사자 님으로부터 메일이 도착하였습니다.";
let screen1CurrentIndex = 0;
let screen1TypingSpeed = 5; // 프레임 단위로 글자 등장 속도 조절 (낮을수록 빠름)
//-----------screen2 variable------------

function drawScreen2() {
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

let lines = [
  "안녕하세요. 저승컴퍼니입니다.",
  "",  // deathDate 줄은 따로 관리
  "본사에서는 무료로 장례식 컨설팅을 진행하고 있습니다.",
  "아래 링크로 방문해주시면 감사하겠습니다."
];

let typedText = ["", "", "", ""]; // 출력 중인 텍스트 저장
let typingIndex = 0;
let charIndex = 0;
let typingSpeed = 2; // 프레임마다 타이핑 속도
let typingDone = false;

// 날짜 랜덤 애니메이션
//let finalDeathDate = "";
//let deathAnimStart;
//let deathFixed = false;

// 페이드 인
let buttonAlpha = 0;


function drawScreen3() {

  mainColor1 = color(167,141,111);
  mainColor2 = color(216,208,202);
  mainColor3 = color(238,238,238);
  mainColor4 = color(127,127,127);

  let boxX = width / 2;
  let boxY = height / 2;
  let boxW = 600;
  let boxH = 350;
  let padding = 20;

  let startX = boxX - boxW / 2 + padding;  // 박스 왼쪽 + 여백
  let startY = boxY - boxH / 2 + padding; // 박스 위쪽 + 여백
  let lineHeight = 30;

  drawingContext.shadowBlur = 16;
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.2)';
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;

  fill(mainColor3);
  stroke(mainColor1);
  rect(boxX, boxY, boxW, boxH, 5);

  noStroke();
  fill(mainColor4);
  rect(width/2, startY + lineHeight + 40, 560, 1);

  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;

  textFont(fontHead2);
  textSize(20);
  text("귀하의 사망예정일을 알려드립니다", startX, startY + padding);
  textFont(fontHead4);
  textSize(14);
  text("보낸사람 저승사자 <support@jeoseung.com>", startX, startY + lineHeight + padding);

  // 날짜 애니메이션
  /*
  if (!deathAnimStart) deathAnimStart = millis();
  if (millis() - deathAnimStart < 2000) {
    // 2초 동안 날짜 랜덤
    let y = floor(random(2025, 2076));
    let m = nf(floor(random(1, 13)), 2);
    let d = nf(floor(random(1, 29)), 2);
    deathDate = `${y}년 ${m}월 ${d}일`;
  } else if (!deathFixed) {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1); // 오늘 + 1일

  let y = tomorrow.getFullYear();
  let m = nf(tomorrow.getMonth() + 1, 2); // JS는 0~11월
  let d = nf(tomorrow.getDate(), 2);

  finalDeathDate = `${y}년 ${m}월 ${d}일`;
  deathDate = finalDeathDate;
  deathFixed = true;
}
  */

  // 타이핑 애니메이션
  if (!typingDone && frameCount % typingSpeed === 0) {
    if (typingIndex < lines.length) {
      let fullLine = typingIndex === 1
        ? `귀하의 사망예정일은 ${deathDate}입니다.`
        : lines[typingIndex];
      typedText[typingIndex] += fullLine.charAt(charIndex);
      charIndex++;
      if (charIndex >= fullLine.length) {
        typingIndex++;
        charIndex = 0;
      }
    } else {
      typingDone = true;
    }
  }

   // 텍스트 출력
  fill(100);
  textAlign(LEFT);
  textFont(fontHead4);
  textSize(16);
  for (let i = 0; i < typedText.length; i++) {
    text(typedText[i], startX, startY + lineHeight * (2.5 + i) + padding);
  }

  // 버튼 페이드 인
  if (typingDone && buttonAlpha < 255) {
    buttonAlpha += 5;
  }

  // 버튼 그리기
  if (typingDone) {
    let bx = width / 2;
    let by = height / 2 + 80;
    let bw = 250;
    let bh = 40;

    push();
    drawingContext.shadowBlur = 16;
    drawingContext.shadowColor = 'rgba(0, 0, 0, 0.2)';
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;

    fill(230, buttonAlpha);
    if (
      mouseX > bx - bw / 2 &&
      mouseX < bx + bw / 2 &&
      mouseY > by - bh / 2 &&
      mouseY < by + bh / 2
    ) {
      fill(200, buttonAlpha);
    }

    noStroke();
    rect(bx, by, bw, bh, 10);
    fill(0, buttonAlpha);
    textAlign(CENTER, CENTER);
    text("장례식 컨설팅 바로가기", bx, by);
    pop();
  }
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
  background(mainColor1);

  const colW = width / 3;
  const margin = 40;
  const startY = 170;

   // 🔴 그림자 설정
  drawingContext.shadowBlur = 8;
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.3)';
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  // ============ 컬럼 배경 박스 ============
  
  noStroke();
  fill(mainColor3);
  rectMode(CORNER);

  // 왼쪽 컬럼 배경
  rect(0, startY, colW, height - startY - 50, 12);

  // 가운데 컬럼 배경
  rect(colW, startY, colW, height - startY - 50, 12);

  // 오른쪽 컬럼 배경
  rect(colW * 2, startY, colW, height - startY - 50, 12);

  fill(mainColor3);
  stroke(mainColor1);
  strokeWeight(1);
  textAlign(LEFT, TOP);
  textSize(36);
  textFont(fontHead1);
  text("마지막으로 단 4곡만 들을 수 있다면,\n듣고 싶은 노래는?", margin, margin);

  drawNextButton();

  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;

  // ============ 왼쪽 컬럼 ============

  fill(0)
  noStroke();
  textSize(20);
  textFont(fontHead2);
  textAlign(LEFT, TOP);
  text("나의 장례식 플레이리스트", margin, startY + 70);

  fill(255);
  stroke(mainColor1);
  strokeWeight(2);
  rectMode(CORNER);
  rect(margin, startY + 120, colW - 2 * margin, 170, 20);

  noStroke();
  fill(0);
  textSize(14);
  let maxTextWidth = colW - 2 * margin - 20;

  for (let i = 0; i < playlist.length; i++) {
    let y = startY + 140 + i * 30;
    let rawTitle = "- " + playlist[i].title;
    let displayTitle = rawTitle;

    while (textWidth(displayTitle + "...") > maxTextWidth && displayTitle.length > 0) {
      displayTitle = displayTitle.slice(0, -1);
    }
    if (displayTitle.length < rawTitle.length) {
      displayTitle += "...";
    }
    text(displayTitle, margin + 10, y);
  }

  const playlistBoxY = startY + 120;
const playlistBoxH = 200;

// 재생 버튼 위치 (왼쪽 컬럼 아래로)
let playBtnX = margin;
let playBtnY = playlistBoxY + playlistBoxH;
let playBtnW = 100; // 가로 3배
let playBtnH = 60;  // 세로 3배

// 버튼 스타일 조정
playButton.position(playBtnX, playBtnY);
playButton.size(playBtnW, playBtnH);
playButton.style('background-color',mainColor1); // 배경색
playButton.style('color', mainColor3);              // 텍스트 색상
playButton.style('border', 'none');
playButton.style('border-radius', '6px');       // 둥근 모서리
playButton.style('font-family', fontHead4);
playButton.style('font-size', '13px');
playButton.show();

fill(mainColor4);
textFont(fontHead4);
text("유튜브 정책상 광고가 재생될 수 있습니다.", margin + 120, playlistBoxY + playlistBoxH);

  // 🆕 RESET 버튼 영역 계산
  let resetBtnX = margin + 240 + 60;  // 텍스트 오른쪽
  let resetBtnY = startY + 70;
  let resetBtnW = 80;
  let resetBtnH = 26;

  // 마우스 hover 감지
  let isResetHovered = mouseX > resetBtnX && mouseX < resetBtnX + resetBtnW &&
                       mouseY > resetBtnY && mouseY < resetBtnY + resetBtnH;

  // 버튼 배경
  fill(isResetHovered ? mainColor4 : mainColor1);
  stroke(mainColor3);
  strokeWeight(1);
  rect(resetBtnX, resetBtnY, resetBtnW, resetBtnH, 6);

  // 버튼 텍스트
  fill(mainColor3);
  noStroke();
  textFont(fontHead4)
  textSize(13);
  textAlign(CENTER, CENTER);
  text("모두 지우기", resetBtnX + resetBtnW / 2, resetBtnY + resetBtnH / 2);



  // ============ 가운데 컬럼 ============
  const centerX = colW + margin;
  const boxW = colW - 2 * margin;
  const boxH = 130;
  const spacingY = 16;
  const boxMargin = 10;

  fill(30);
  textSize(20);
  textFont(fontHead2);
  textAlign(LEFT, TOP);
  text("추천 플레이리스트", centerX, startY + 70);

  playlists = [
    {
      title: "죽은 사람들도 떼창 가능하다는 K-POP Playlist",
      songs: [
        { title: "다시 만난 세계 (소녀시대)", videoId: "I1OzfxybATE" },
        { title: "Fantastic Baby (빅뱅)", videoId: "dwNrkaWPc5g" },
        { title: "아름다운 밤이야 (비스트)", videoId: "dc1iIaFhSbk" },
        { title: "한 페이지가 될 수 있게 (데이식스)", videoId: "oYvgISKD5Y8" }
      ]
    },
    {
      title: "사랑하는 사람들을 남기고 떠나는 아쉬움을 담아 | 발라드 Playlist",
      songs: [
        { title: "너의 모든 순간 (성시경)", videoId: "N4UftpnodsU" },
        { title: "모든 날, 모든 순간 (폴킴)", videoId: "1q_t6RNuH8c" },
        { title: "첫눈처럼 너에게 가겠다 (에일리)", videoId: "gWZos5_TgVI" },
        { title: "인연 (이선희)", videoId: "bkoEIpHApzA" }
      ]
    },
    {
      title: "앵콜 없이 즐기는 인생 마지막 락페스티벌 | 밴드 Playlist",
      songs: [
        { title: "좋지 아니한가 (유다빈 밴드)", videoId: "Z5sx7Zj5gKE" },
        { title: "Ready, Get Set, Go! (페퍼톤스)", videoId: "W-mInpdHSbg" },
        { title: "투게더! (잔나비)", videoId: "s-e-O9Jgc9I" },
        { title: "너를 보내고 (YB)", videoId: "ya24OGSfxfw" }
      ]
    }
  ];

  textSize(14);
  recommendedBoxBounds = [];
  hoveringPlaylistIndex = -1;

  for (let i = 0; i < playlists.length; i++) {
    let boxY = startY + 70 + 40 + i * (boxH + spacingY);

    // 마우스 hover 감지
    let isHover = mouseX > centerX && mouseX < centerX + boxW && mouseY > boxY && mouseY < boxY + boxH;
    if (isHover) hoveringPlaylistIndex = i;

    // 색상 지정
    if (selectedPlaylistIndex === i) fill(180, 220, 255);
    else if (isHover) fill(230);
    else fill(250);

    stroke(180);
    strokeWeight(1);
    rect(centerX, boxY, boxW, boxH, 16);

    noStroke();
    fill(0);
    textSize(14);
    textFont(fontHead3);
    text(playlists[i].title, centerX + boxMargin, boxY + boxMargin);

    fill(mainColor4);
    textSize(13);
    textFont(fontHead4);
    for (let j = 0; j < playlists[i].songs.length; j++) {
      text("- " + playlists[i].songs[j].title, centerX + boxMargin, boxY + 43 + j * 18);
    }

    recommendedBoxBounds[i] = {
      x: centerX,
      y: boxY,
      w: boxW,
      h: boxH,
      songs: playlists[i].songs
    };
  }

  

  // ============ 오른쪽 컬럼 ============
  const rightX = colW * 2 + margin;

  fill(30);
  textFont(fontHead2);
  textSize(20);
  text("원하는 노래를 직접 입력해보세요", rightX, startY + 70);

  const inputW = colW - 2 * margin;
  const inputH = 30;
  searchInput.position(rightX, startY + 70 + 60);
  searchInput.size(inputW - 80, inputH);
  searchInput.style('background-color','#FFFFFF'); // 배경색
  searchInput.style('border', '2px solid ' + mainColor1);
  searchInput.style('border-radius', '6px');       // 둥근 모서리
  searchInput.show();

  searchButton.style('background-color',mainColor1); // 배경색
  searchButton.style('color', mainColor3);              // 텍스트 색상
  searchButton.style('border', 'none');
  searchButton.style('border-radius', '6px');       // 둥근 모서리
  searchButton.style('font-family', fontHead4);
  searchButton.style('font-size', '13px');
  searchButton.position(rightX + inputW - 60, startY + 70 + 60);
  searchButton.size(50, inputH + 6);
  searchButton.show();

  const resultStartY = startY + 70 + 120;
  const resultBoxH = 30;

  for (let i = 0; i < searchResults.length; i++) {
    const y = resultStartY + i * (resultBoxH + 10);
  
    // ✅ 마우스가 이 박스 위에 있으면 hover 효과 적용
    let isHovered =
      mouseX > rightX && mouseX < rightX + inputW &&
      mouseY > y && mouseY < y + resultBoxH;
  
    fill(240); // 배경색은 고정
    stroke(isHovered ? 'black' : 180); // ✅ 테두리 색만 바꿈
    strokeWeight(1);
    rect(rightX, y, inputW, resultBoxH, 8);
  
    fill(0);
    noStroke();
    textAlign(LEFT, CENTER);
  
    let rawTitle = searchResults[i].title;
    let displayTitle = rawTitle;
    let maxTextW = inputW - 20;
  
    while (textWidth(displayTitle + "...") > maxTextW && displayTitle.length > 0) {
      displayTitle = displayTitle.slice(0, -1);
    }
    if (displayTitle.length < rawTitle.length) {
      displayTitle += "...";
    }
  
    textSize(14);
    text(displayTitle, rightX + 10, y + resultBoxH / 2);
  }
}
function drawScreen6() {
  drawNextButton();
  text('6번 화면',width/2,height/2);
}

function drawScreen7() {
  // 화면 7: 사진 찍기 전 안내 문구 표시
  drawNextButton();
  drawText(pictureComments);
}



function drawScreen8() {
  // 화면 8: 웹캠을 통해 사진을 찍는 화면

  // 세로로 긴 비율 설정 (예: 3:4 비율 기준)
  let camDrawHeight = height * 0.6;
  let frameAspectRatio = 3 / 4; // 목표 프레임 비율
  let camDrawWidth = camDrawHeight * frameAspectRatio;

  // 중앙 정렬 좌표 계산
  let camX = (width - camDrawWidth) / 2;
  let camY = (height - camDrawHeight) / 2 - 30;

  // 🔴 그림자 설정
    drawingContext.shadowBlur = 16;
    drawingContext.shadowColor = 'rgba(0, 0, 0, 0.3)';
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;

  // 영정사진 액자 배경
  push();
  rectMode(CENTER);
  fill(mainColor1);
  noStroke();
  rect(width / 2, height / 2 - 30, camDrawWidth + 40, camDrawHeight + 40, 20);
  pop();

  // 웹캠 출력 (좌우 반전)
  push();
  translate(camX + camDrawWidth, camY);
  scale(-1, 1);

  if (cam && cam.elt.readyState === 4 && cam.width > 0) {
    // ===================== [핵심 수정] 왜곡 없이 크롭하여 그리기 =====================

    let camAspectRatio = cam.width / cam.height;
    let sx, sy, sWidth, sHeight;

    // 1. 웹캠과 프레임의 비율을 비교
    if (camAspectRatio > frameAspectRatio) {
      // 웹캠이 프레임보다 가로로 넓은 경우 (예: 16:9 웹캠 -> 3:4 프레임)
      // -> 높이를 기준으로 너비를 계산하여 좌우를 잘라냅니다.
      sHeight = cam.height;
      sWidth = sHeight * frameAspectRatio;
      sx = (cam.width - sWidth) / 2;
      sy = 0;
    } else {
      // 웹캠이 프레임보다 세로로 길거나 같은 경우 (예: 4:3 웹캠 -> 3:4 프레임)
      // -> 너비를 기준으로 높이를 계산하여 위아래를 잘라냅니다.
      sWidth = cam.width;
      sHeight = sWidth / frameAspectRatio;
      sx = 0;
      sy = (cam.height - sHeight) / 2;
    }

    // 2. 계산된 소스(sx, sy, sWidth, sHeight)를 사용하여 이미지의 일부를 잘라 그립니다.
    image(cam, 0, 0, camDrawWidth, camDrawHeight, sx, sy, sWidth, sHeight);

    // ==============================================================================

  } else {
    // 카메라 사용 불가 텍스트 (좌우 반전된 상태이므로 중앙 정렬을 위해 다시 계산)
    push();
    scale(-1, 1); // 텍스트는 제대로 보이도록 다시 반전
    translate(-camDrawWidth, 0);
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("카메라를 사용할 수 없습니다.\n브라우저 설정을 확인하세요.", camDrawWidth / 2, camDrawHeight / 2);
    pop();
  }
  pop(); // 웹캠 그리기가 끝나고 좌표계 원래대로 복원

  // 얼굴 가이드 레이어 (타원) 그리기
  if (!isCountingDown) {
    push();
    noFill();
    stroke(255, 255, 255, 150);
    strokeWeight(3);
    ellipse(width / 2, camY + camDrawHeight * 0.4, camDrawWidth * 0.7, camDrawHeight * 0.6);
    pop();
  }

  // 카운트다운 숫자 표시
  if (isCountingDown) {
    countdown = 3 - floor((millis() - timer) / 1000);

    if (countdown > 0) {
      fill(255, 255, 255, 220);
      noStroke();
      textSize(150);
      textAlign(CENTER, CENTER);
      text(countdown, width / 2, camY + camDrawHeight / 2);
    } else {
      captureAndProceed(camX, camY, camDrawWidth, camDrawHeight);
    }
  }

  // 촬영 버튼
  push();
  rectMode(CENTER);
  if (isCountingDown) {
    fill(120);
    stroke(180);
  } else {
    fill(mainColor1);
    stroke(mainColor3);
  }
  rect(shootButton.x, shootButton.y, shootButton.w, shootButton.h, 10);

  if (isCountingDown) {
    fill(180);
  } else {
    fill(mainColor3);
  }
  noStroke();
  textSize(20);
  textAlign(CENTER, CENTER);
  text(shootButton.label, shootButton.x, shootButton.y);
  pop();

  shootButton.x = width / 2;
  shootButton.y = camY + camDrawHeight + 35;

  drawingContext.shadowBlur = 0;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
}


/**
 * captureAndProceed - 지정된 영역을 캡처하고 다음 화면으로 전환합니다.
 * @param {number} x - 캡처할 영역의 x 좌표
 * @param {number} y - 캡처할 영역의 y 좌표
 * @param {number} w - 캡처할 영역의 너비
 * @param {number} h - 캡처할 영역의 높이
 */
function captureAndProceed(x, y, w, h) {
  if (!isCountingDown) return; // 중복 호출 방지
  isCountingDown = false;

  console.log("Capturing image and proceeding to screen 9...");

  // 파라미터로 받은 x, y, w, h를 사용해 정확한 영역을 캡처합니다.
  capturedImage = get(x, y, w, h);

  // 상태 초기화 및 화면 전환
  countdown = 0;
  currentScreen = 9;
}


/**
 * drawScreen9 - 캡처된 최종 이미지를 액자, 테이블 등과 함께 그립니다.
 * 모든 이미지가 비율에 맞게, 그리고 더 큰 크기로 표시되도록 수정되었습니다.
 */
function drawScreen9() {
  drawNextButton();
  drawCapturedImageFrame(width/2,height / 2 + 70, height*0.7);

}

function drawScreen10() {
  // 화면 10: 데코레이션 선택 전 안내 문구 표시
  drawNextButton();
  drawText(decoComments);
}

function drawCapturedImageFrame(imgX, imgY, finalImageHeight) {
  if (capturedImage && capturedImage.width > 0 && capturedImage.height > 0) {
    imageMode(CENTER);

    // 1. 기준이 되는 캡처 이미지의 표시 높이를 설정합니다 (기존보다 크게).
    // 2. 캡처 이미지의 3:4 비율을 유지하며 너비를 계산해 왜곡을 방지합니다.
    const finalImageWidth = finalImageHeight * (3 / 4);



    // 3. 모든 장식 요소(테이블, 액자 등)의 크기를 최종 이미지 크기에 비례하여 설정합니다.
    // 이렇게 하면 모든 요소가 왜곡 없이 함께 커집니다.
    // 🔴 그림자 설정
    drawingContext.shadowBlur = 16;
    drawingContext.shadowColor = 'rgba(0, 0, 0, 0.3)';
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    // 테이블 (가장 뒤)
    const tableWidth = finalImageWidth * 2;
    const tableHeight = finalImageHeight * 1.8;
    image(table, imgX, imgY + 60, tableWidth, tableHeight);

    // 액자
    const frameWidth = finalImageWidth / 1.1;
    const frameHeight = finalImageHeight / 1.3;
    image(frame, imgX, imgY-finalImageHeight/3, frameWidth, frameHeight);

    // 캡처된 사진
    image(capturedImage, imgX, imgY-finalImageHeight/3, finalImageWidth / 2, finalImageHeight / 2);
    
    // 테이블 아래 장식
    // 이 요소의 원본 비율을 유지하며 크기를 조절합니다.
    const belowtableWidth = finalImageWidth * 0.9;
    // 원본 에셋의 비율에 맞춰 높이를 계산합니다.
    const belowtableHeight = belowtableWidth * (belowtable.height / belowtable.width);
    image(belowtable, imgX, imgY + 170, belowtableWidth, belowtableHeight);

    drawingContext.shadowBlur = 0;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;

  } else {
    // 캡처된 이미지가 없을 경우 안내 문구
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("캡처된 이미지가 없습니다.\n이전 화면으로 돌아가 촬영하세요.", width / 2, height / 2);
  }
}

let rotationAngles = []; // 이미지 회전 각도 저장용
let flowerInitialized = false;

function drawScreen11() {
  background(mainColor1);

  const colW = width / 3;
  const margin = 40;
  const startY = 170;

  let tabH = height * 8 / 10;

  noStroke();
  fill(mainColor3);
  rectMode(CENTER);

  let centerX = width / 3;
  let centerY = height / 2;

  // 🔴 그림자 설정
    drawingContext.shadowBlur = 16;
    drawingContext.shadowColor = 'rgba(0, 0, 0, 0.3)';
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;

  // 가운데 컬럼 배경
  rect(colW, height / 2, colW * 2, tabH, 20);

  textSize(30);
  fill(mainColor3);
  textAlign(LEFT, CENTER);
  text('내 장례식장 테마를 고른다면?', width / 20, height / 20);
  
  // 버튼 hover / 선택 처리
  let hoveredDayIndex = -1;
  drawButtonGrid(dayButton, 2, 2, (i, j) => {
    let buttonIndex = i * 2 + j;
    if (buttonIndex < dayButton.length) {
      hoveredDayIndex = buttonIndex;
    }
  });

  // 선택된 이미지 세트
  let dayImgs = [funeralImgs, XmasImgs, partyImgs, HalloweenImgs];
  let selectedDayImgIndex = selectedDayIndex !== -1 ? selectedDayIndex : hoveredDayIndex;

  if (selectedDayImgIndex >= 0 && selectedDayImgIndex < dayImgs.length) {
    let imgArray = dayImgs[selectedDayImgIndex];

    imageMode(CENTER);

    
  if (imgArray[0]) {
  let rows = 4; // 총 4줄
  let baseY = centerY - 250 + 135;
  let imgSize = 80;
  let spacing = 50;

  // ✅ 회전 각도 배열이 아직 초기화되지 않았다면
  if (!flowerInitialized) {
    for (let row = 0; row < rows; row++) {
      let count = 11 + row * 2;
      rotationAngles[row] = [];
      for (let i = 0; i < count; i++) {
        let angleDeg = random(-45, 45);
        rotationAngles[row][i] = radians(angleDeg);
      }
    }
    flowerInitialized = true;
  }

  for (let row = 0; row < rows; row++) {
    let count = 11 + row * 2;
    let startX = centerX - (count - 1) * spacing / 2;
    let y = baseY + row * (imgSize * 0.45);

    for (let i = 0; i < count; i++) {
      let x = startX + i * spacing;
      let angleRad = rotationAngles[row][i];

      push();
      translate(x, y);
      rotate(angleRad);
      image(imgArray[0], 0, 0, imgSize, imgSize);
      pop();
    }
  }
}

  }
  drawCapturedImageFrame(width/3,height/2 + 100,height*0.6); // 중앙 이미지 (배경 사진)

  if (selectedDayImgIndex >= 0 && selectedDayImgIndex < dayImgs.length) {
    let imgArray = dayImgs[selectedDayImgIndex]; 
  
  // ✅ 1번 이미지 (프레임 중앙 위에 1개)
    if (imgArray[1]) {
      image(imgArray[1], centerX + 10, centerY + 200, 200, 200);
    }

    // ✅ 2번 이미지 (양 옆에 두 개)
    if (imgArray[2]) {
      let sideOffsetX = 230;
      let sideY = centerY;
      image(imgArray[2], centerX - sideOffsetX + 10, sideY + 20, 150, 150); // 왼쪽
      image(imgArray[2], centerX + sideOffsetX + 10, sideY + 20, 150, 150); // 오른쪽
    }
  }


  drawNextButton();

  drawingContext.shadowBlur = 0;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
}

function drawScreen12() {
  

  // 화면 12: 화환 선택 전 안내 문구 표시
  drawNextButton();
  drawText(flowerComments);

}

function drawScreen13() {
  background(mainColor1);

  // 🔴 그림자 설정
  drawingContext.shadowBlur = 16;
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.3)';
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;

  drawNextButton();
  textAlign(LEFT, TOP);
  textSize(30);
  fill(mainColor3);
  text('남은 사람들에게\n전하고 싶은 말은?', width / 20, height / 20);

  leftRibbonInput.show();
  rightRibbonInput.show();
  textSize(15);
  textFont(mainColor4);
  text('작성하신 뒤 Enter키를 눌러 문구를 확정해주세요.', width * 2 / 3 + 10, height / 10 + 100);

  // 🔵 이미지 및 컨테이너 중앙 배치 (작게 + 화면 안에 들어오게)
  let imgW = 400;
  let imgH = 520;
  let padding = 30;

  let imgX = width / 2;             // 더 중앙
  let imgY = height / 2;            // 정확히 중앙

  // ✅ 컨테이너 먼저
  fill(mainColor3);
  noStroke();
  rectMode(CENTER);
  rect(imgX, imgY, imgW + padding * 2, imgH + padding * 2, 20);

  // 이미지
  imageMode(CENTER);
  image(flowerImages[2], imgX, imgY, imgW, imgH);

  // 리본 텍스트 위치 맞춰주기
  writeRibbonText(imgX, imgY);

  // 그림자 제거
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
}

// 💬 writeRibbonText()에 중심 좌표를 인자로 받도록 수정
function writeRibbonText(centerX, centerY) {
  textSize(22);
  textFont(fontHead4);
  textAlign(CENTER, CENTER);

  // 왼쪽 리본
  if (finalLeftRibbonText) {
    push();
    translate(centerX - 10, centerY - 180);
    rotate(PI / 11.8);
    fill(0);
    stroke(255);
    strokeWeight(2);

    for (let i = 0; i < finalLeftRibbonText.length; i++) {
      text(finalLeftRibbonText[i], 0, i * 30);
    }

    noStroke();
    pop();
  }

  // 오른쪽 리본
  if (finalRightRibbonText) {
    push();
    translate(centerX + 12, centerY - 180);
    rotate(-PI / 11.5);
    fill(0);
    stroke(255);
    strokeWeight(2);

    for (let i = 0; i < finalRightRibbonText.length; i++) {
      text(finalRightRibbonText[i], 0, i * 30);
    }

    noStroke();
    pop();
  }
}

function drawScreen14() {
  // 화면 14: 음식 선택 전 안내 문구 표시
  drawNextButton();
  drawText(foodComments);
}



function drawScreen15() {
  background(mainColor1);

  // 🔴 그림자 설정
    drawingContext.shadowBlur = 16;
    drawingContext.shadowColor = 'rgba(0, 0, 0, 0.3)';
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
  // --- 왼쪽 패널 ---
  textAlign(LEFT, TOP);
  textSize(30);
  fill(mainColor3);
  noStroke();
  text('내가 가장\n좋아했던 음식은?', width / 20, height / 20);

  let previewX = width / 3.5;
  let previewY = height / 2;
  let previewW = width / 2.5;
  let previewH = height / 1.5;

  noStroke();
  fill(mainColor3);
  rectMode(CENTER);
  rect(previewX, previewY, previewW, previewH, 20);
  rect(previewX, previewY, previewW * 0.9, previewH * 0.9, 15);

  // --- 이미지 표시 로직 (수정된 핵심 부분) ---
  let indexToDraw = -1;

  // 1. 클릭으로 선택/확정된 이미지가 최우선 순위
  if (selectedFoodIndex !== -1) {
    indexToDraw = selectedFoodIndex;
    
  }
  // 2. 선택된 이미지가 없을 때만, 마우스를 올린 이미지를 보여줌
  else if (hoveredFoodIndex !== -1) {
    indexToDraw = hoveredFoodIndex;
  }

  // 그릴 이미지가 정해졌다면 그리기
  if (indexToDraw !== -1) {
    imageMode(CENTER);
    image(foodImages[indexToDraw], previewX, previewY - 30, previewW * 0.6, previewH * 0.7);
    textSize(20);
    fill(0);
    text(foodButton[indexToDraw],previewX-40, previewY+100);
  }

  // --- 오른쪽 패널 ---
  drawFoodSelectionTab(); // 오른쪽 탭 그리는 함수는 이전과 동일하게 사용

  drawNextButton(); // 다음 화면 버튼

  drawingContext.shadowBlur = 0;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
}

function drawFoodSelectionTab() {
  let tabX = width * 0.75;
  let tabY = height / 2;
  let tabW = width * 0.4;
  let tabH = height * 0.9;

  // 1. 탭 전체 컨테이너
  rectMode(CENTER);
  noStroke();
  fill(mainColor3);
  rect(tabX, tabY, tabW, tabH, 20);

  // 2. 상단 검색창 모양의 텍스트 박스
  let searchBarY = tabY - tabH / 2 + 50;
  stroke(150);
  noFill();
  rect(tabX, searchBarY, tabW * 0.9, 50, 25);
  
  fill(0);
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(18);
  text('사람들에게 대접하고 싶은 마지막 음식은?', tabX - tabW * 0.4, searchBarY);

  // 3. 하단 문구
  textAlign(CENTER, CENTER);
  textSize(16);
  text('“이왕 가는 길, 먹을 건 내가 직접 고른다!”', tabX, tabY + tabH / 2 - 30);

  // 4. 6개의 음식 이미지 버튼 그리기
  let numCols = 2;
  let numRows = 3;
  let gridW = tabW * 0.8;
  let gridH = tabH * 0.6;
  let colWidth = gridW / numCols;
  let rowHeight = gridH / numRows;
  let btnDiameter = min(colWidth, rowHeight) * 0.8;

  // 현재 호버된 버튼이 없는 상태로 초기화
  hoveredFoodIndex = -1;

  for (let i = 0; i < numCols; i++) {
    for (let j = 0; j < numRows; j++) {
      let buttonIndex = j * numCols + i;
      if (buttonIndex < foodImages.length) {
        let btnX = (tabX - gridW / 2) + colWidth * (i + 0.5);
        let btnY = (tabY - gridH / 2) + rowHeight * (j + 0.5);

        // 마우스가 버튼 위에 있는지 확인
        let isHovering = !foodConfirmed && dist(mouseX, mouseY, btnX, btnY) < btnDiameter / 2;

        if (isHovering) {
          hoveredFoodIndex = buttonIndex;
        }
        
        // 선택되었거나 호버링 상태일 때 테두리 효과
        if (selectedFoodIndex === buttonIndex || isHovering) {
          stroke(100, 150, 255);
          strokeWeight(4);
          fill(100,100,100,50);
          textAlign(CENTER);
          textSize(20);
          fill(255);
        } else {
          stroke(180);
          strokeWeight(2);
        }
        noFill();
        ellipse(btnX, btnY, btnDiameter, btnDiameter);
        
        // 버튼에 이미지 그리기
        imageMode(CENTER);
        image(foodImages[buttonIndex], btnX, btnY, btnDiameter * 0.9, btnDiameter * 0.9);
      }
    }
  }
}

function drawScreen16() {
  // 화면 16: 드레스 선택 전 안내 문구 표시
  drawNextButton();
  drawText(dressComments);
}

function drawScreen17() {
  background(mainColor1);

  // 🔴 그림자 설정
    drawingContext.shadowBlur = 16;
    drawingContext.shadowColor = 'rgba(0, 0, 0, 0.3)';
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;

  drawNextButton();
  textAlign(LEFT, TOP);
  textSize(30);
  fill(mainColor3);
  text('내 인생을 돌아본다면,\n나는 어떤 사람?', width / 20, height / 20);
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

  // 호버링 인덱스 계산
  for (let i = 0; i < numImages; i++) {
    let imgX = hangX - hangW / 2 + spacing * (i + 1) + imgWidth * i;
    let imgY = hangY + hangH / 2 -300; 
    let imgCenterX = imgX + imgWidth / 2;
    let imgCenterY = imgY + imgHeight / 2;

    let isHovering = mouseX > imgCenterX - displayWidth / 3 && mouseX < imgCenterX + displayWidth / 3 &&
                     mouseY > imgCenterY - displayHeight / 2 && mouseY < imgCenterY + displayHeight / 2;

    if (isHovering) {
      hoverIndex = i;
      push();
      translate(imgCenterX, imgCenterY);
      scale(1.4); // 호버링 시 커지도록
      imageMode(CENTER);
      image(dresshalfImages[i], 0, 0, displayWidth, displayHeight); // 옷 상단 정렬
      pop();
    } else {
      imageMode(CENTER);
      image(dresshalfImages[i], imgCenterX, imgY, displayWidth, displayHeight);
    }
  }

  // 선택된 드레스 또는 호버된 드레스 표시
  let displayIndex = selectedDressIndex !== -1 ? selectedDressIndex : hoverIndex;
  if (displayIndex >= 0 && displayIndex < dressImages.length) {
    imageMode(CENTER);
    image(dressImages[displayIndex], width * 2 / 3 + width * 0.125, height / 2, 240, 320); // 오른쪽에 표시
  }
  drawingContext.shadowBlur = 0;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
}


function drawScreen18() {
  drawNextButton();
  drawText(endingcreditsComments);
}

let questionTypingIndex = 0;
let questionTypingSpeed = 3;
let currentQuestionTyped = "";

function drawScreen19() {
  background(mainColor1);

  // ---------- 질문 박스 ----------
  fill(255, 250, 230);
  stroke(180);
  strokeWeight(1);
  rectMode(CENTER);
  rect(width / 2, 150, 400, 60, 15);

  fill(0);
  noStroke();
  textSize(20);
  textAlign(CENTER, CENTER);
  text("당신만의 엔딩 크레딧을 채워주세요.", width / 2, 150);

  // ---------- 말풍선 질문 표시 ----------
  const questionStr = endingQuestions[currentQuestionIndex];
  const paddingX = 40;
  const paddingY = 30;
  textFont(fontHead4);
  textSize(18);

  // 타자 애니메이션 업데이트
  if (frameCount % questionTypingSpeed === 0 && questionTypingIndex < questionStr.length) {
    questionTypingIndex++;
    currentQuestionTyped = questionStr.substring(0, questionTypingIndex);
  }

  const tw = textWidth(currentQuestionTyped);
  const th = 24;

  const bubbleX = width / 2;
  const bubbleY = 300;
  const bubbleW = tw + paddingX * 2;
  const bubbleH = th + paddingY;

  // 알파값 흐림 효과
  let alphaValue = map(sin(frameCount * 0.05), -1, 1, 0.4, 1);

  drawingContext.save();
  drawingContext.globalAlpha = alphaValue;
  drawSpeechBubble(bubbleX, bubbleY, bubbleW, bubbleH, 12);
  drawingContext.restore();

  drawingContext.save();
  drawingContext.globalAlpha = alphaValue;
  fill(80);
  noStroke();
  textAlign(CENTER, CENTER);
  text(currentQuestionTyped, bubbleX, bubbleY);
  drawingContext.restore();

  // ---------- 입력창 ----------
  const inputX = width / 2 - 200;
  const inputY = 450;
  const inputW = 400;
  const inputH = 30;

  if (!answerInput) {
    answerInput = createInput('');
    answerInput.position(inputX, inputY);
    answerInput.size(inputW, inputH);
  }

  // ---------- 버튼 ----------
  let nextBtn = {
    x: inputX + inputW + 10,
    y: inputY - 2,
    w: 80,
    h: inputH + 3
  };

  let isHovering =
    mouseX > nextBtn.x && mouseX < nextBtn.x + nextBtn.w &&
    mouseY > nextBtn.y && mouseY < nextBtn.y + nextBtn.h;

  fill(isHovering ? color(180, 220, 180) : color(220));
  stroke(0);
  rectMode(CORNER);
  rect(nextBtn.x, nextBtn.y, nextBtn.w, nextBtn.h, 10);

  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  text("확인", nextBtn.x + nextBtn.w / 2, nextBtn.y + nextBtn.h / 2);

  // ---------- 클릭 처리 ----------
  if (
    (mouseIsPressed && isHovering)
  ) {
    const ans = answerInput.value().trim();
    if (ans !== "") {
      endingCredits.push({
        question: questionStr,
        answer: ans
      });

      answerInput.remove();
      answerInput = null;
      currentQuestionIndex++;

      // 다음 질문을 위해 리셋
      questionTypingIndex = 0;
      currentQuestionTyped = "";

      if (currentQuestionIndex >= endingQuestions.length) {
        currentScreen = 20;
      }
    }
  }
  drawProgressBar();
}

//질문 진행상황 알려주는 하단 바
function drawProgressBar() {
  const total = endingQuestions.length;
  const progress = currentQuestionIndex / total;

  const barX = width / 2 - 275;
  const barY = height - 120;
  const barW = 550;
  const barH = 24;
  const radius = barH / 2;

  // 1. 전체 테두리 (둥근 모서리 바)
  noFill();
  stroke(120);
  strokeWeight(1);
  rect(barX, barY, barW, barH, radius);

  // 2. 채워진 부분 (왼쪽부터 progress 비율만큼)
  const fillW = barW * progress;
  noStroke();
  fill(120, 200, 150);

  // 둥글게 채워지는 조건 분기
  if (progress > 0 && progress < 1) {
    // 중간 진행: 왼쪽만 라운드
    beginShape();
    vertex(barX + radius, barY);
    vertex(barX + fillW, barY);
    vertex(barX + fillW, barY + barH);
    vertex(barX + radius, barY + barH);
    // 왼쪽 둥글게
    bezierVertex(barX + radius / 2, barY + barH, barX, barY + barH - radius / 2, barX, barY + barH / 2);
    bezierVertex(barX, barY + radius / 2, barX + radius / 2, barY, barX + radius, barY);
    endShape(CLOSE);
  } else if (progress === 1) {
    // 다 찼을 경우 전체 둥글게 채움
    rect(barX, barY, fillW, barH, radius);
  } else if (progress > 0) {
    // 아주 처음 (조금이라도 채우기)
    rect(barX, barY, fillW, barH, [radius, 0, 0, radius]);
  }
}




function drawScreen20() {
  drawNextButton();
  drawText(endingComments);
}

function drawScreen21() {

   // ----------------------왼쪽 절반: 선택된 항목 표시--------------------------------------
  let leftHalfWidth = width * 0.5;
  let imgX = leftHalfWidth / 2;
  let imgY = height / 2;

background(238,238,238);
imageMode(CENTER);
image(capturedTable, imgX, imgY-200,400,300);
let flowerX1 = imgX -290;
let flowerX2 = imgX +290;
let flowerY = imgY-210;
let flowerW = 225/1.2;
let flowerH = 350/1.2;


image(capturedFlower, flowerX1,flowerY ,flowerW,flowerH);
image(capturedFlower, flowerX2, flowerY,flowerW,flowerH);

for (i=0;i<4;i++){
  for (j=0;j<2;j++) {

    image(FrontImage, 50 + i*200 , imgY +30 +j*150, 90,105);
    image(guestTable, 50 + i*200, imgY + 100 +j*150, 180,150);
    image(capturedFood, 50 + i*200, imgY +j*150+70, 50,50);
    image(BackImage, 50 + i*200+20, imgY +100 +j*150,100,120);
    
  }
}

    image(FrontImage, 50 + 600, imgY +2*150, 90,105);
    image(BackImage, 50 + 600 +20, imgY +2*150+80, 100,120);
    image(BackImage, 50 + 600 +80, imgY +200+80, 100,120);
    image(BackImage, 50 + 400 -20, imgY +2*150+80, 100,120);
    image(BackImage, 50 + 200-40, imgY +100 -20,100,120);
    image(BackImage, 50 + 2*200-40, imgY +100 +1*150,100,120);
    image(BackImage, 50 + 1*200-40, imgY +100 +1*150,110,130);

    image(BackImage, imgX-10, imgY,80,96);
    image(BackImage, imgX+10, imgY,80,96);

  // 오른쪽 절반 배경 검정
  fill(0);
  noStroke();
  rectMode(CORNER);
  rect(width * 0.5, 0, width * 0.5, height);

  // 공통 좌표 및 스타일
  textAlign(CENTER, TOP);
  textWrap(WORD);
  fill(255);
  let x = width * 0.55; 
  let yStart = 80;
  let y = yStart - creditScrollY;
  let contentWidth = width * 0.4;

  // 타이틀
  textFont(fontHead1);
  textSize(45);
  textStyle(BOLD);
  text("내 인생의 엔딩 크레딧", x, y, contentWidth);
  y += 180;

  // 질문/답변
  for (let i = 0; i < Math.min(endingCredits.length, endingAnswers.length); i++) {
    let entry = endingCredits[i];
    let creditsHead = endingAnswers[i];

    textSize(25);
    textFont(fontHead3);
    text(creditsHead, x, y, contentWidth);
    y += 40;

    textSize(22);
    textFont(fontHead4);
    text(entry.answer, x, y, contentWidth);
    y += 60;
  }

  y += 60;

  // 저승사자 役
  textSize(25);
  textFont(fontHead3);
  text("저승사자 役", x, y, contentWidth);
  y += 40;

  textSize(22);
  textFont(fontHead4);
  text("박수민", x, y, contentWidth);
  y += 40;
  text("박정민", x, y, contentWidth);
  y += 40;
  text("유은진", x, y, contentWidth);
  y += 40;
  text("정민주", x, y, contentWidth);



    if (!popupVisible) {
      creditScrollY += scrollSpeed;
    
      const creditEndY = y;  // 현재 텍스트 y의 마지막 위치
      if (creditEndY < 0) {
        scrollCount++;
        creditScrollY = 0;
      }
    
      if (scrollCount >= 2) {
        popupVisible = true;
      }
    }

    if (popupVisible) {
      drawEndingPopup();
    }
}

function drawEndingPopup() {
  const boxW = 420;
  const boxH = 200;
  const boxX = width / 2 - boxW / 2;
  const boxY = height / 2 - boxH / 2;

  // 배경 박스
  fill(245);
  stroke(180);
  strokeWeight(1);
  rect(boxX, boxY, boxW, boxH, 24);

  // 텍스트
  fill(0);
  noStroke();
  textSize(20);
  textAlign(CENTER, CENTER);
  text("장례식 컨설팅을 마무리하시겠습니까?", width / 2, boxY + 50);

  // 확인 버튼
  const confirmX = boxX + 60;
  const confirmY = boxY + 110;
  const confirmW = 100;
  const confirmH = 60;

  fill('blue');
  noStroke();
  rect(confirmX, confirmY, confirmW, confirmH, 16);
  fill(0);
  textSize(18);
  text("확인", confirmX + confirmW / 2, confirmY + confirmH / 2);

  // 취소 버튼
  const cancelX = boxX + 260;
  const cancelY = confirmY;

  fill(245);
  stroke(100);
  rect(cancelX, cancelY, confirmW, confirmH, 16);
  fill(0);
  noStroke();
  text("취소", cancelX + confirmW / 2, cancelY + confirmH / 2);

  // 버튼 영역 저장 (필요하면 클릭 처리에서)
  popupButtons = {
    confirm: { x: confirmX, y: confirmY, w: confirmW, h: confirmH },
    cancel: { x: cancelX, y: cancelY, w: confirmW, h: confirmH }
  };
}

function drawButtonGrid(buttons, numCols, numRows, onHover = () => {}) {
  let tabX = width * 2 / 3, tabY = height / 10;
  let tabW = width * 1 / 4, tabH = height * 8 / 10;
  fill(mainColor3);
  noStroke();
  rectMode(CORNER);
  rect(tabX, tabY, tabW, tabH, 20);

  let buttonGridW = tabW * 0.9, buttonGridH = tabH * 0.5;
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
        let isSelected = selectedDayIndex === buttonIndex;

        push(); // 개별 버튼 스타일 적용
        strokeWeight(isHovering ? 4 : 2);
        stroke(isHovering || isSelected ? mainColor2 : mainColor1);
        fill(isSelected ? mainColor2 : mainColor1 && isHovering ? mainColor3 : mainColor1);
        rect(btnX, btnY, btnWidth, btnHeight, 10);

        fill(isHovering ? mainColor1 : mainColor3);
        textSize(20);
        noStroke();
        textFont(fontHead2);
        text(buttons[buttonIndex], btnX, btnY);

        if (isHovering) {
          onHover(i, j);
        }
        pop(); // 스타일 복원
      }
    }
  }
}

function mousePressed() {
  // 공통 '다음' 버튼의 위치와 크기 정의
  let btnX = width * 0.85, btnY = height / 1.25, btnWidth = 100, btnHeight = 40;
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
      const colW = width / 3;
      const margin = 40;
      const startY = 170;
  
      // ========== [1] 추천 플레이리스트 박스 클릭 감지 ==========
      for (let i = 0; i < recommendedBoxBounds.length; i++) {
        const box = recommendedBoxBounds[i];
        if (
          mouseX > box.x && mouseX < box.x + box.w &&
          mouseY > box.y && mouseY < box.y + box.h
        ) {
          let addedCount = 0;
          let duplicateShown = false;
  
          for (let song of box.songs) {
            if (playlist.some(p => p.title === song.title)) {
              if (!duplicateShown) {
                alert("이미 플레이리스트에 추가된 곡입니다.");
                duplicateShown = true;
              }
              continue;
            }
  
            if (playlist.length >= 4) {
              alert("최대 4곡까지만 담을 수 있습니다.");
              break;
            }
  
            playlist.push({
              title: song.title,
              videoId: song.videoId
            });
            addedCount++;
          }
  
          if (addedCount > 0) {
            selectedPlaylistIndex = i;
            console.log(`${addedCount}곡이 추천에서 추가되었습니다.`);
          }
          return;
        }
      }
  
      // ========== [2] 검색 결과 박스 클릭 감지 ==========
      const rightX = colW * 2 + margin;
      const inputW = colW - 2 * margin;
      const resultBoxH = 30;
      const resultStartY = startY + 70 + 120;
  
      for (let i = 0; i < searchResults.length; i++) {
        const y = resultStartY + i * (resultBoxH + 10);
  
        if (
          mouseX > rightX && mouseX < rightX + inputW &&
          mouseY > y && mouseY < y + resultBoxH
        ) {
          const selected = searchResults[i];
  
          if (playlist.some(p => p.title === selected.title)) {
            alert("이미 플레이리스트에 추가된 곡입니다.");
            return;
          }
  
          if (playlist.length >= 4) {
            alert("최대 4곡까지만 담을 수 있습니다.");
            return;
          }
  
          checkPlayable(selected.videoId, (isPlayable) => {
            if (isPlayable) {
              playlist.push(selected);
              console.log(`추가됨: ${selected.title}`);
            } else {
              alert("이 곡은 저작권 문제로 재생이 불가능합니다.");
            }
          });
          return;
        }
      }
  
      // ========== [3] RESET 버튼 클릭 감지 ==========
      const resetBtnX = margin + 240 + 60;
      const resetBtnY = startY + 70;
      const resetBtnW = 80;
      const resetBtnH = 26;
  
      if (
        mouseX > resetBtnX && mouseX < resetBtnX + resetBtnW &&
        mouseY > resetBtnY && mouseY < resetBtnY + resetBtnH
      ) {
        playlist = [];
        currentPlayingIndex = 0;
        selectedPlaylistIndex = -1;
        console.log("플레이리스트가 초기화되었습니다.");
        return;
      }

  }  else if (currentScreen === 8) {
    // 카운트다운이 진행 중일 때는 버튼 클릭을 무시합니다.
    if (isCountingDown) {
      return;
    }

    if (mouseX > shootButton.x - shootButton.w / 2 && mouseX < shootButton.x + shootButton.w / 2 &&
        mouseY > shootButton.y - shootButton.h / 2 && mouseY < shootButton.y + shootButton.h / 2) {
      
      if (cam && cam.elt.readyState === 4) {
        // 카운트다운 시작
        isCountingDown = true;
        timer = millis(); // 현재 시간을 타이머 시작 시간으로 기록
      } else {
        console.warn("카메라가 준비되지 않았습니다.");
      }
      return;
    }
  } else if (currentScreen === 11) {
    let buttons = dayButton;
    let numCols = 2, numRows = 2; // 2x2 그리드로 수정
    let tabX = width * 2 / 3, tabY = height / 10;
    let tabW = width * 1 / 4, tabH = height * 8 / 10;
    let buttonGridW = tabW * 0.9, buttonGridH = tabH * 0.5;
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
            selectedDayIndex = buttonIndex; // 클릭 시 인덱스 고정
            // selections에 추가 (중복 방지)
            if (!selections.find(s => s.screen === 11)) {
              selections.push({ screen: 11, type: 'day', value: selectedDay });
            }
            console.log(`Selected day: ${selectedDay}`);
            capturedTable = get(20,height/10,width/1.6,height/1.2);
            return;
          }
        }
      }
    }
  }  else   if (currentScreen === 15) {
    // 선택이 확정되었다면 아무것도 하지 않음 (다음 버튼 로직 제외)
    if (foodConfirmed) {
      // if (nextButton.isClicked()) { currentScreen = 16; }
      return;
    }

    // 1. 음식 이미지 버튼 클릭 확인
    // (이전 답변의 `drawFoodSelectionTab` 함수에 사용된 것과 동일한 위치/크기 계산)
    let tabX = width * 0.75, tabY = height / 2, tabW = width * 0.4, tabH = height * 0.9;
    let numCols = 2, numRows = 3;
    let gridW = tabW * 0.8, gridH = tabH * 0.6;
    let colWidth = gridW / numCols, rowHeight = gridH / numRows;
    let btnDiameter = min(colWidth, rowHeight) * 0.8;

    for (let i = 0; i < numCols; i++) {
      for (let j = 0; j < numRows; j++) {
        let buttonIndex = j * numCols + i;
        if (buttonIndex < foodImages.length) {
          let btnX = (tabX - gridW / 2) + colWidth * (i + 0.5);
          let btnY = (tabY - gridH / 2) + rowHeight * (j + 0.5);
          if (dist(mouseX, mouseY, btnX, btnY) < btnDiameter / 2) {
            selectedFoodIndex = buttonIndex; // << 클릭 시 이 변수에 상태 저장
            capturedFood = foodImages[selectedFoodIndex];
            return;
          }
        }
      }
    }

    // 2. 'Yes!' 버튼 클릭 확인
    //if (selectedFoodIndex !== -1) {
    //  let previewX = width / 3.5, previewH = height / 1.5;
     // let yesBtnX = previewX, yesBtnY = height / 2 + previewH / 2 - 40;
     // let yesBtnW = 120, yesBtnH = 50;
   //   if (mouseX > yesBtnX - yesBtnW / 2 && mouseX < yesBtnX + yesBtnW / 2 && mouseY > yesBtnY - yesBtnH / 2 && mouseY < yesBtnY + yesBtnH / 2) {
    //    foodConfirmed = true; // << 'Yes!' 클릭 시 선택 확정
   //   }
   // }
   
  } else if (currentScreen === 17) {
    let hangX = width / 3;
    let hangY = height / 2;
    let hangW = width / 2.5;
    let hangH = height * 0.8;
    let imgWidth = 80, imgHeight = 100;
    let displayWidth = imgWidth * 2, displayHeight = imgHeight * 3*1.2;
    let numImages = dresshalfImages.length;
    let totalWidth = numImages * imgWidth;
    let spacing = (hangW - totalWidth) / (numImages + 1);

    for (let i = 0; i < numImages; i++) {
      let imgX = hangX - hangW / 2 + spacing * (i + 1) + imgWidth * i;
      let imgY = hangY + hangH / 2 - 100;
      let imgCenterX = imgX + imgWidth / 2;
      let imgCenterY = imgY + imgHeight / 2;
      if (mouseX > imgCenterX - displayWidth / 3&& mouseX < imgCenterX + displayWidth / 3 &&
          mouseY > imgCenterY - displayHeight /1.2&& mouseY < imgCenterY + displayHeight / 2) {
        selectedDressIndex = i;
        BackImage = dressFaceBackImages[selectedDressIndex];
        FrontImage = dressFaceFrontImages[selectedDressIndex];
        console.log(`Selected dress: ${i}`);
        return; // 선택 후 즉시 종료
      }
    }
  }if (popupVisible && popupButtons) {
    let c = popupButtons.confirm;
    let x = popupButtons.cancel;
  
    if (
      mouseX > c.x && mouseX < c.x + c.w &&
      mouseY > c.y && mouseY < c.y + c.h
    ) {
      // ✅ 확인 클릭 시 새로고침
      location.reload();
    } else if (
      mouseX > x.x && mouseX < x.x + x.w &&
      mouseY > x.y && mouseY < x.y + x.h
    ) {
      // 취소 → 팝업 닫고 다시 스크롤
      popupVisible = false;
      creditScrollY = 0;
      scrollCount = 0;
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
      if (finalLeftRibbonText.trim() !== '' || finalRightRibbonText.trim() !== '') {
        currentScreen = 14;
        leftRibbonInput.hide();
        rightRibbonInput.hide();
        let img = get(width / 2 - 400 / 2, height / 2 - 520 / 2, 400, 520);
      
      capturedFlower = img;
      }
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
  if (currentScreen === 5) {
    if (keyCode === ENTER && document.activeElement === searchInput.elt) {
      let query = searchInput.value();
      if (query) {
        searchYouTube(query);
      }
    }
  }
  // Screen 13에서 리본 텍스트 입력 후 Enter 키로 저장
if (currentScreen === 13 && keyCode === ENTER) {
    if (document.activeElement === leftRibbonInput.elt) {
      finalLeftRibbonText = leftRibbonInput.value().trim();
    } else if (document.activeElement === rightRibbonInput.elt) {
      finalRightRibbonText = rightRibbonInput.value().trim();
    }
  }

  if (keyCode === ENTER | keyCode === 32) {
  if (currentScreen === 4) {
    if (textFlowIndex < playlistComments.length - 1) {
      textFlowIndex++;
    } else {
      textFlowIndex = 0;
      currentScreen = 5;
    }
  } else if (currentScreen === 7) {
    if (textFlowIndex < pictureComments.length - 1) {
      textFlowIndex++;
    } else {
      textFlowIndex = 0;
      currentScreen = 8;
    }
  } else if (currentScreen === 10) {
    if (textFlowIndex < decoComments.length - 1) {
      textFlowIndex++;
    } else {
      textFlowIndex = 0;
      currentScreen = 11;
    }
  } else if (currentScreen === 12) {
    if (textFlowIndex < flowerComments.length - 1) {
      textFlowIndex++;
    } else {
      textFlowIndex = 0;
      currentScreen = 13;
    }
  } else if (currentScreen === 14) {
    if (textFlowIndex < foodComments.length - 1) {
      textFlowIndex++;
    } else {
      textFlowIndex = 0;
      currentScreen = 15;
    }
  } else if (currentScreen === 16) {
    if (textFlowIndex < dressComments.length - 1) { 
      textFlowIndex++;
    } else {
      textFlowIndex = 0;
      currentScreen = 17;
    }
  } else if (currentScreen === 18) {
    if (textFlowIndex < endingcreditsComments.length - 1) {
      textFlowIndex++;
    } else {
      textFlowIndex = 0; 
      currentScreen = 19; 
    }
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

function drawTutorialScreen(textContent) {
  // 회색 박스
  fill(240);
  stroke(180);
  rectMode(CENTER);
  rect(width / 2, height - 140, 1100, 200, 30);

  // 텍스트
  noStroke();
  fill(80);
  textFont(fontHead3);
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
  fill(mainColor3);
  textAlign(CENTER, CENTER);
  textFont(fontHead1)
  text("다음", tutorialBtn.x + 40, tutorialBtn.y + 20);
}

// 유튜브 검색
function searchYouTube(query) {
  if (!api_key) {
    alert("API key is missing.");
    return;
  }

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoEmbeddable=true&maxResults=5&q=${encodeURIComponent(query)}&key=${api_key}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      searchResults = data.items.map(item => ({
        title: item.snippet.title,
        videoId: item.id.videoId,
      }));
      console.log(searchResults);  // 결과 확인용
    })
    .catch(error => {
      console.error("YouTube API error:", error);
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
function checkPlayable(videoId, callback) {
  if (!playerReady) {
    callback(false);
    return;
  }

  checkingVideo = videoId;
  checkCallback = callback;

  player.cueVideoById(videoId);

  setTimeout(() => {
    const state = player.getPlayerState();
    if (state === YT.PlayerState.UNSTARTED || state === -1) {
      callback(false);
    } else {
      callback(true);
    }
  }, 1500);
}
