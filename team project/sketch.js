let currentScreen = 1; // 1: 화환선택, 2: 제단꾸미기, 3: 음식선택, 4: 주류선택

// 화면1 변수 (화환 선택)
let tabs1 = ['화환 단수', '꽃', '문구'];
let selectedTab1 = 0;
let wreathOptions = ['1단', '3단', '5단'];
let flowerOptions1 = ['국화','안개꽃','카네이션', '벚꽃','튤립','장미'];
let selectedWreath = null;
let selectedFlower1 = null;
let inputText = '';
let tree1 = '🌲', tree3 = '🌳', tree5 = '🎄';
let inputBox, nextButton1;

// 화면2 변수 (제단 꾸미기)
let tabs2 = ['영정사진', '조명', '향', '꽃', '벽지', '바닥'];
let selectedTab2 = 0;
let webcam, capturedImage = null, captureButton;
let candleOptions = ['은촛대', '금촛대', '촛대 없음'];
let scentOptions = ['아로마', '아카시아', '시트러스'];
let flowerOptions2 = ['국화', '튤립', '안개꽃'];
let colorOptions = ['흰색', '초록색', '검정색'];
let selectedCandle = '촛대 없음';
let selectedScent = null;
let selectedFlower2 = null;
let selectedWallColor, selectedFloorColor; // setup에서 초기화
let frameX, frameY, frameWidth = 120, frameHeight = 160;
let nextButton2;

// 화면3 변수 (음식 선택)
let foodOptions = ['육개장','라면','치킨','피자','마라탕','덮밥'];
let selectedFood = -1; // 선택되지 않음을 -1로 표시
let nextButton3;

// 화면4 변수 (주류 선택)
let alchOptions = ['소주','맥주','막걸리','양주','와인','칵테일'];
let selectedAlch = -1; // 선택되지 않음을 -1로 표시
let finishButton; // 마지막 화면의 버튼

function setup() {
  createCanvas(windowWidth, windowHeight); // 캔버스 크기 통일
  textAlign(CENTER, CENTER);
  
  // 화면1 초기화
  setupScreen1();
  
  // 화면2 초기화
  setupScreen2();
  
  // 화면3 초기화
  setupScreen3();

  // 화면4 초기화
  setupScreen4();
}

function draw() {
  // 각 화면의 draw 함수 호출 전에 DOM 요소들의 가시성을 관리
  hideAllDOMElements(); // 일단 모든 DOM 요소를 숨김

  if (currentScreen === 1) {
    drawScreen1();
    if (selectedWreath || selectedFlower1 || inputText.length > 0) {
      nextButton1.show();
    }
  } else if (currentScreen === 2) {
    drawScreen2();
    if (capturedImage) { // 사진 촬영 완료 시 다음 버튼 표시
      nextButton2.show();
    }
  } else if (currentScreen === 3) {
    drawScreen3();
    if (selectedFood !== -1) { // 음식이 선택되면 다음 버튼 표시
        nextButton3.show();
    }
  } else if (currentScreen === 4) {
    drawScreen4();
    if (selectedAlch !== -1) { // 주류가 선택되면 완료 버튼 표시
        finishButton.show();
    }
  }
}

function hideAllDOMElements() {
  if (inputBox) inputBox.hide();
  if (nextButton1) nextButton1.hide();
  if (captureButton) captureButton.hide();
  if (nextButton2) nextButton2.hide();
  if (nextButton3) nextButton3.hide();
  if (finishButton) finishButton.hide();
}

// 화면1: 화환 선택 ============================================
function setupScreen1() {
  inputBox = createInput('').size(200);
  nextButton1 = createButton('다음으로')
    .size(100, 40).position(width - 130, height - 70)
    .mousePressed(() => { currentScreen = 2; });
}

function drawScreen1() {
  background(240);
  textSize(16); // 기본 텍스트 크기

  // 탭 그리기
  let tabWidth1 = 80, tabHeight1 = 30, tabY1 = 50, tabStartX1 = 400;
  for (let i = 0; i < tabs1.length; i++) {
    fill(i === selectedTab1 ? '#aaa' : '#ddd');
    stroke(0);
    rect(tabStartX1 + i * tabWidth1, tabY1, tabWidth1, tabHeight1, 10);
    fill(0); noStroke();
    text(tabs1[i], tabStartX1 + i * tabWidth1 + tabWidth1 / 2, tabY1 + tabHeight1 / 2);
  }

  // 왼쪽 미리보기 화면
  fill(255); stroke(0);
  rect(100, height / 2 - 100, 200, 200, 20);

  // 오른쪽 선택 화면
  fill(255); stroke(0);
  rect(tabStartX1, height / 2 - 100, 300, 200, 20);

  // 미리보기 내용
  fill(0);
  if (selectedWreath) {
    textSize(100);
    let emoji = '';
    if (selectedWreath === '1단') emoji = tree1;
    else if (selectedWreath === '3단') emoji = tree3;
    else if (selectedWreath === '5단') emoji = tree5;
    text(emoji, 200, height / 2 - 30);
  }
  if (selectedFlower1) {
    textSize(20);
    text(selectedFlower1, 200, height / 2 + 20);
  }
  if (inputText) {
    push();
    translate(200, height / 2 + 70); // 위치 조정
    rotate(PI / 3);
    textSize(24);
    text(inputText, 0, 0);
    pop();
  }
  
  // 선택 옵션 그리기
  textSize(16); // 선택 옵션 텍스트 크기
  let optionBoxX = tabStartX1 + 20, optionBoxY = height / 2 - 80;
  if (selectedTab1 === 0) { // 화환 단수
    inputBox.hide();
    for (let i = 0; i < wreathOptions.length; i++) {
      let x = optionBoxX + (i % 3) * 90;
      let y = optionBoxY + floor(i / 3) * 50;
      fill(selectedWreath === wreathOptions[i] ? '#bbb' : '#eee'); stroke(0);
      rect(x, y, 80, 40, 10);
      fill(0); noStroke();
      text(wreathOptions[i], x + 40, y + 20);
    }
  } else if (selectedTab1 === 1) { // 꽃
    inputBox.hide();
    for (let i = 0; i < flowerOptions1.length; i++) {
      let x = optionBoxX + (i % 3) * 90; // 2열로 변경
      let y = optionBoxY + floor(i / 2) * 50; // 2열로 변경
      if (i >= 6) continue; // 최대 6개만 표시
      fill(selectedFlower1 === flowerOptions1[i] ? '#bbb' : '#eee'); stroke(0);
      rect(x, y, 80, 40, 10);
      fill(0); noStroke();
      text(flowerOptions1[i], x + 40, y + 20);
    }
  } else if (selectedTab1 === 2) { // 문구
    inputBox.position(optionBoxX, optionBoxY).show();
  }
}

// 화면2: 제단 꾸미기 ==========================================
function setupScreen2() {
  webcam = createCapture(VIDEO, { flipped: true }); // 웹캠 좌우 반전
  webcam.size(frameWidth, frameHeight); // 웹캠 크기를 액자 크기에 맞춤
  webcam.hide();
  
  captureButton = createButton('촬영하기').size(100, 35);
  captureButton.mousePressed(captureImage);

  nextButton2 = createButton('다음으로')
    .size(100, 40).position(width - 130, height - 70)
    .mousePressed(() => { currentScreen = 3; });

  // 제단 위치 및 크기 설정
  frameX = (width / 2 - frameWidth) / 2 - 50; // 왼쪽으로 좀 더 이동
  frameY = height * 0.18;
  selectedWallColor = color(255); // 기본 벽지 흰색
  selectedFloorColor = color(230); // 기본 바닥 밝은 회색
}

function drawScreen2() {
  background(selectedWallColor); // 벽지 색 적용

  // 바닥 그리기
  fill(selectedFloorColor); noStroke();
  rect(0, height * 0.7, width / 2, height * 0.3); // 왼쪽 화면 하단에 바닥 영역

  // 탁자 그리기
  fill(139, 69, 19); // 갈색 탁자
  rect(frameX - 60, frameY + frameHeight + 10, frameWidth + 120, 50); // 액자 아래 넓은 탁자

  // 액자 테두리 (바깥쪽)
  stroke(80, 40, 0); // 어두운 나무색 테두리
  strokeWeight(15);
  noFill();
  rect(frameX - 7.5, frameY - 7.5, frameWidth + 15, frameHeight + 15, 5);

  // 액자 안쪽 배경 (웹캠/사진 표시 전)
  fill(220); noStroke();
  rect(frameX, frameY, frameWidth, frameHeight);

  // 웹캠 또는 촬영된 이미지 표시
  if (capturedImage) {
    image(capturedImage, frameX, frameY, frameWidth, frameHeight);
  } else if (selectedTab2 === 0) { // '영정사진' 탭일 때만 웹캠 표시
    image(webcam, frameX, frameY, frameWidth, frameHeight);
  }
  
  // 액자 테두리 (안쪽 - 사진 위에 덧씌우는 효과)
  stroke(50); strokeWeight(8); noFill();
  rect(frameX - 4, frameY - 4, frameWidth + 8, frameHeight + 8, 3); // 안쪽 테두리
  
  noStroke(); // 기본값으로 복원

  drawScreen2Decorations(); // 장식 그리기

  // 오른쪽 UI (탭 및 선택 옵션)
  drawScreen2Tabs();
  drawScreen2Selections();
}

function drawScreen2Decorations() {
  fill(0); // 장식 기본 색상
  let tableCenterY = frameY + frameHeight + 10 + 25; // 탁자 중심 Y
  let tableLeftEdge = frameX - 60;
  let tableRightEdge = frameX - 60 + frameWidth + 120;

  // 조명 (촛대)
  textSize(35);
  if (selectedCandle === '은촛대') {
    text('🕯️', tableLeftEdge + 30, tableCenterY);
    text('🕯️', tableRightEdge - 30, tableCenterY);
  } else if (selectedCandle === '금촛대') {
    text('🪔', tableLeftEdge + 30, tableCenterY);
    text('🪔', tableRightEdge - 30, tableCenterY);
  }

  // 향
  textSize(25);
  let scentXPos = frameX + frameWidth / 2; // 액자 중앙 하단
  let scentYPos = frameY + frameHeight + 10 + 25; // 탁자 위
  if (selectedScent === '아로마') text('🌸', scentXPos, scentYPos);
  else if (selectedScent === '아카시아') text('🌼', scentXPos, scentYPos);
  else if (selectedScent === '시트러스') text('🍋', scentXPos, scentYPos);

  // 꽃 (액자 양 옆)
  if (selectedFlower2) {
    textSize(30);
    let flowerYPos = frameY + frameHeight / 2; // 액자 중앙 높이
    if (selectedFlower2 === '국화') {
      text('🌻', frameX - 35, flowerYPos);
      text('🌻', frameX + frameWidth + 35, flowerYPos);
    } else if (selectedFlower2 === '튤립') {
      text('🌷', frameX - 35, flowerYPos);
      text('🌷', frameX + frameWidth + 35, flowerYPos);
    } else if (selectedFlower2 === '안개꽃') {
      text('☘️', frameX - 35, flowerYPos);
      text('☘️', frameX + frameWidth + 35, flowerYPos);
    }
  }
}

function drawScreen2Tabs() {
  textSize(14); // 탭 글자 크기
  let tabWidth2 = 70, tabHeight2 = 30, tabY2 = 30, tabStartX2 = 400; // 탭 위치 및 크기 조정
  for (let i = 0; i < tabs2.length; i++) {
    fill(i === selectedTab2 ? '#aaa' : '#ddd'); stroke(0);
    rect(tabStartX2 + i * (tabWidth2 + 2), tabY2, tabWidth2, tabHeight2, 8); // 탭 간 간격 추가
    fill(0); noStroke();
    text(tabs2[i], tabStartX2 + i * (tabWidth2 + 2) + tabWidth2 / 2, tabY2 + tabHeight2 / 2);
  }
}

function drawScreen2Selections() {
  textSize(18); // 선택지 글자 크기
  let selectionStartX = 420, selectionStartY = 90; // 선택지 시작 위치
  let optionW = 110, optionH = 35, optionGapY = 45;

  if (selectedTab2 === 0) { // 영정사진 탭
    captureButton.position(selectionStartX + 50, selectionStartY + 20).show();
  } else {
    captureButton.hide(); // 다른 탭에서는 촬영 버튼 숨김
    let optionsToDisplay;
    let currentSelectionValue;

    if (selectedTab2 === 1) { optionsToDisplay = candleOptions; currentSelectionValue = selectedCandle; }
    else if (selectedTab2 === 2) { optionsToDisplay = scentOptions; currentSelectionValue = selectedScent; }
    else if (selectedTab2 === 3) { optionsToDisplay = flowerOptions2; currentSelectionValue = selectedFlower2; }
    else if (selectedTab2 === 4 || selectedTab2 === 5) { optionsToDisplay = colorOptions; }

    if (optionsToDisplay) {
      for (let i = 0; i < optionsToDisplay.length; i++) {
        let x = selectionStartX + (i % 2) * (optionW + 20); // 2열 배치
        let y = selectionStartY + floor(i / 2) * optionGapY;
        
        let isThisSelected = (optionsToDisplay[i] === currentSelectionValue);
        // 색상 선택의 경우, 현재 적용된 색과 비교하여 선택 여부 판단
        if (selectedTab2 === 4 && checkColorMatch(selectedWallColor, optionsToDisplay[i])) isThisSelected = true;
        if (selectedTab2 === 5 && checkColorMatch(selectedFloorColor, optionsToDisplay[i])) isThisSelected = true;

        fill(isThisSelected ? '#bbb' : '#eee'); stroke(0);
        rect(x, y, optionW, optionH, 10);
        fill(0); noStroke();
        text(optionsToDisplay[i], x + optionW / 2, y + optionH / 2);
      }
    }
  }
}

// 화면3: 음식 선택 ============================================
function setupScreen3() {
  nextButton3 = createButton('다음으로')
    .size(100, 40).position(width - 130, height - 70)
    .mousePressed(() => { currentScreen = 4; });
}

function drawScreen3() {
  background(240);
  textSize(32); fill(0);
  text("음식 메뉴 선택", width / 2, 50);
  drawGridButtons(foodOptions, selectedFood, 3); // type 3 for food
}

// 화면4: 주류 선택 ============================================
function setupScreen4() {
  finishButton = createButton('완료')
    .size(100, 40).position(width - 130, height - 70)
    .mousePressed(() => { 
        alert('모든 선택이 완료되었습니다!'); 
        // 모든 선택 초기화 및 첫 화면으로 돌아가는 로직 (선택 사항)
        // currentScreen = 1;
        // resetAllSelections(); 
    });
}

function drawScreen4() {
  background(240);
  textSize(32); fill(0);
  text("주류 메뉴 선택", width / 2, 50);
  drawGridButtons(alchOptions, selectedAlch, 4); // type 4 for alcohol
}

// 화면3, 4 공통 그리드 버튼 함수
function drawGridButtons(items, selectedIdx, screenType) {
  let startX = width / 2 - 250, startY = 120; // 버튼 시작 위치
  let btnWidth = 160, btnHeight = 100, gap = 20; // 버튼 크기 및 간격
  textSize(20); // 버튼 내 텍스트 크기

  for (let i = 0; i < items.length; i++) {
    let col = i % 3;
    let row = floor(i / 3);
    let x = startX + col * (btnWidth + gap);
    let y = startY + row * (btnHeight + gap);

    fill(i === selectedIdx ? '#aaf' : '#eee'); stroke(0);
    rect(x, y, btnWidth, btnHeight, 15);
    fill(0); noStroke();
    text(items[i], x + btnWidth / 2, y + btnHeight / 2);
  }
}

// 공통 함수 (마우스 클릭, 키 입력 등) ======================================
function mousePressed() {
  if (currentScreen === 1) handleScreen1Clicks();
  else if (currentScreen === 2) handleScreen2Clicks();
  else if (currentScreen === 3) handleScreen3_4Clicks(foodOptions, 3);
  else if (currentScreen === 4) handleScreen3_4Clicks(alchOptions, 4);
}

function handleScreen1Clicks() {
  // 탭 클릭
  let tabWidth1 = 80, tabHeight1 = 30, tabY1 = 50, tabStartX1 = 400;
  for (let i = 0; i < tabs1.length; i++) {
    if (mouseX > tabStartX1 + i * tabWidth1 && mouseX < tabStartX1 + (i + 1) * tabWidth1 &&
        mouseY > tabY1 && mouseY < tabY1 + tabHeight1) {
      selectedTab1 = i;
      if (selectedTab1 !== 2) inputBox.hide(); // 문구 탭 아니면 inputBox 숨김
      return;
    }
  }
  // 선택지 클릭
  let optionBoxX = tabStartX1 + 20, optionBoxY = height / 2 - 80;
  if (selectedTab1 === 0) {
    for (let i = 0; i < wreathOptions.length; i++) {
      let x = optionBoxX + (i % 3) * 90; let y = optionBoxY + floor(i / 3) * 50;
      if (mouseX > x && mouseX < x + 80 && mouseY > y && mouseY < y + 40) {
        selectedWreath = wreathOptions[i]; return;
      }
    }
  } else if (selectedTab1 === 1) {
    for (let i = 0; i < flowerOptions1.length; i++) {
      let x = optionBoxX + (i % 2) * 90; let y = optionBoxY + floor(i / 2) * 50;
      if (i < 6 && mouseX > x && mouseX < x + 80 && mouseY > y && mouseY < y + 40) {
        selectedFlower1 = flowerOptions1[i]; return;
      }
    }
  }
}

function handleScreen2Clicks() {
  // 탭 클릭
  let tabWidth2 = 70, tabHeight2 = 30, tabY2 = 30, tabStartX2 = 400;
  for (let i = 0; i < tabs2.length; i++) {
    if (mouseX > tabStartX2 + i * (tabWidth2 + 2) && mouseX < tabStartX2 + i * (tabWidth2 + 2) + tabWidth2 &&
        mouseY > tabY2 && mouseY < tabY2 + tabHeight2) {
      selectedTab2 = i;
      // 영정사진 탭이 아니면 촬영된 이미지 고정 (새 촬영 방지)
      // if (selectedTab2 !== 0 && capturedImage) { /* 아무것도 안 함 */ }
      return;
    }
  }
  // 선택지 클릭 (영정사진 탭 제외)
  if (selectedTab2 !== 0) {
    let selectionStartX = 420, selectionStartY = 90;
    let optionW = 110, optionH = 35, optionGapY = 45;
    let optionsToClick, targetVariable;

    if (selectedTab2 === 1) { optionsToClick = candleOptions; targetVariable = 'selectedCandle'; }
    else if (selectedTab2 === 2) { optionsToClick = scentOptions; targetVariable = 'selectedScent'; }
    else if (selectedTab2 === 3) { optionsToClick = flowerOptions2; targetVariable = 'selectedFlower2'; }
    else if (selectedTab2 === 4) { optionsToClick = colorOptions; targetVariable = 'selectedWallColor'; }
    else if (selectedTab2 === 5) { optionsToClick = colorOptions; targetVariable = 'selectedFloorColor'; }

    if (optionsToClick) {
      for (let i = 0; i < optionsToClick.length; i++) {
        let x = selectionStartX + (i % 2) * (optionW + 20);
        let y = selectionStartY + floor(i / 2) * optionGapY;
        if (mouseX > x && mouseX < x + optionW && mouseY > y && mouseY < y + optionH) {
          if (selectedTab2 === 4) { // 벽지
            if (optionsToClick[i] === '흰색') selectedWallColor = color(255);
            else if (optionsToClick[i] === '초록색') selectedWallColor = color(0, 200, 0);
            else if (optionsToClick[i] === '검정색') selectedWallColor = color(30);
          } else if (selectedTab2 === 5) { // 바닥
            if (optionsToClick[i] === '흰색') selectedFloorColor = color(230);
            else if (optionsToClick[i] === '초록색') selectedFloorColor = color(0, 128, 0);
            else if (optionsToClick[i] === '검정색') selectedFloorColor = color(50);
          } else {
            // window[]를 사용하여 동적으로 변수 할당
                            if (targetVariable === 'selectedCandle') selectedCandle = optionsToClick[i];
                            else if (targetVariable === 'selectedScent') selectedScent = optionsToClick[i];
                            else if (targetVariable === 'selectedFlower2') selectedFlower2 = optionsToClick[i];
          }
          return;
        }
      }
    }
  }
}

function handleScreen3_4Clicks(items, screenType) {
  let startX = width / 2 - 250, startY = 120;
  let btnWidth = 160, btnHeight = 100, gap = 20;

  for (let i = 0; i < items.length; i++) {
    let col = i % 3;
    let row = floor(i / 3);
    let x = startX + col * (btnWidth + gap);
    let y = startY + row * (btnHeight + gap);
    if (mouseX > x && mouseX < x + btnWidth && mouseY > y && mouseY < y + btnHeight) {
      if (screenType === 3) selectedFood = i;
      else if (screenType === 4) selectedAlch = i;
      return;
    }
  }
}

function keyPressed() {
  if (currentScreen === 1 && keyCode === ENTER && selectedTab1 === 2) {
    inputText = inputBox.value();
    inputBox.value(''); // 입력 후 입력창 비우기
  }
}

function captureImage() {
  if (webcam) {
    capturedImage = webcam.get(); // 웹캠 현재 프레임 가져오기
    // capturedImage.resize(frameWidth, frameHeight); // 프레임 크기에 맞게 리사이징 (필요시)
  }
}

// 헬퍼 함수: 색상 비교
function checkColorMatch(p5ColorObj, colorStr) {
    if (!p5ColorObj) return false;
    let r = red(p5ColorObj);
    let g = green(p5ColorObj);
    let b = blue(p5ColorObj);

    if (colorStr === '흰색' && r === 255 && g === 255 && b === 255) return true;
    if (colorStr === '초록색' && r === 0 && (g === 200 || g === 128) && b === 0) return true; // 벽지/바닥 초록색 값 허용 범위
    if (colorStr === '검정색' && (r === 30 || r === 50) && (g === 0 || g === 50) && (b === 0 || b===50)) return true; // 벽지/바닥 검정색 값 허용 범위
    return false;
}

// function resetAllSelections() { // 예시: 모든 선택 초기화 함수
//     selectedWreath = null; selectedFlower1 = null; inputText = ''; selectedTab1 = 0;
//     capturedImage = null; selectedCandle = '촛대 없음'; selectedScent = null; selectedFlower2 = null;
//     selectedWallColor = color(255); selectedFloorColor = color(230); selectedTab2 = 0;
//     selectedFood = -1; selectedAlch = -1;
// }
