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

let currentScreen = 7;
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
  imageMode(CORNER);

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

  if (currentScreen === 7) drawScreen7();
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

  drawNextButton();
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

function drawScreen7() {
  // 화면 7: 사진 찍기 전 안내 문구 표시
  drawText(pictureComments);
}

function drawScreen8() {
  // 화면 8: 웹캠을 통해 사진을 찍는 화면
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
  drawText(decoComments);
}

function drawScreen11() {
  // 화면 11: 가장 즐거웠던 하루 선택
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
  drawText(flowerComments);
}

function drawScreen13() {
  // 화면 13: 화환과 메시지 선택
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
  drawText(foodComments);
}

function drawScreen15() {
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
  drawText(dressComments);
}

function drawScreen17() {
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
  // 마우스 클릭 이벤트 처리
  let btnX = width * 0.9, btnY = height * 0.9, btnWidth = 100, btnHeight = 40;
  if (mouseX > btnX - btnWidth / 2 && mouseX < btnX + btnWidth / 2 &&
      mouseY > btnY - btnHeight / 2 && mouseY < btnY + btnHeight / 2) {
    if (currentScreen === 7) {
      if (textFlowIndex < pictureComments.length - 1) textFlowIndex++;
      else { textFlowIndex = 0; currentScreen = 8; }
    } else if (currentScreen === 9) {
      currentScreen = 10;
    } else if (currentScreen === 10) {
      if (textFlowIndex < decoComments.length - 1) textFlowIndex++;
      else { textFlowIndex = 0; currentScreen = 11; }
    } else if (currentScreen === 11) {
      currentScreen = 12;
    } else if (currentScreen === 12) {
      if (textFlowIndex < flowerComments.length - 1) textFlowIndex++;
      else { textFlowIndex = 0; currentScreen = 13; }
    } else if (currentScreen === 13) {
      currentScreen = 14;
    } else if (currentScreen === 14) {
      if (textFlowIndex < foodComments.length - 1) textFlowIndex++;
      else { textFlowIndex = 0; currentScreen = 15; }
    } else if (currentScreen === 15) {
      currentScreen = 16;
    } else if (currentScreen === 16) {
      if (textFlowIndex < dressComments.length - 1) textFlowIndex++;
      else { textFlowIndex = 0; currentScreen = 17; }
    } else if (currentScreen === 17) {
      currentScreen = 7; // 시작 화면으로 리셋
    }
    return;
  }

  if (currentScreen === 8) {
    if (mouseX > shootButton.x - shootButton.w / 2 && mouseX < shootButton.x + shootButton.w / 2 &&
        mouseY > shootButton.y - shootButton.h / 2 && mouseY < shootButton.y + shootButton.h / 2) {
      if (cam && cam.elt.readyState === 4) {
        // 좌우 반전된 이미지 캡처
        let flippedImage = createImage(cam.width, cam.height);
        flippedImage.copy(cam, 0, 0, cam.width, cam.height, cam.width, 0, -cam.width, cam.height);
        capturedImage = flippedImage;
        selections.push(capturedImage); // 반전된 이미지 저장
        console.log("Captured flipped photo stored in selections");
        currentScreen = 9;
      } else {
        console.warn("카메라가 준비되지 않았습니다.");
      }
      return;
    }
  }

  if (currentScreen === 11) {
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
            selections.push(selectedDay); // 날짜 텍스트 저장
            console.log(`Selected day: ${selectedDay}`);
            return;
          }
        }
      }
    }
  }

  if (currentScreen === 13 && currentMode === '꽃') {
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
            selections.push(flowerImages[buttonIndex]); // 꽃 이미지 저장
            console.log(`Selected flower: ${buttons[buttonIndex]}`);
            return;
          }
        }
      }
    }
  }

  if (currentScreen === 15) {
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
            selections.push(foodImages[buttonIndex]); // 음식 이미지 저장
            console.log(`Selected food: ${buttons[buttonIndex]}`);
            return;
          }
        }
      }
    }
  }

  if (currentScreen === 17) {
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
      let imgY = hangY + hangH / 2 - 100; // y축 100 더 올림
      let imgCenterX = imgX + imgWidth / 2;
      let imgCenterY = imgY + imgHeight / 2;
      if (mouseX > imgCenterX - displayWidth / 2 && mouseX < imgCenterX + displayWidth / 2 &&
          mouseY > imgCenterY - displayHeight / 2 && mouseY < imgCenterY + displayHeight / 2) {
        selectedDressIndex = i;
        selections.push(dressImages[i]); // 드레스 이미지 저장
        console.log(`Selected dress: ${i}`);
        return;
      }
    }
  }
}

function keyPressed() {
  // 키 입력 이벤트 처리
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