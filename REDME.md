이 프로젝트의 상세 README는 노션으로 제작되었습니다.
자세한 내용은 아래 링크를 참조하세요.

### [노션에서 README 보기](https://www.notion.so/Recipe-Universe-2096a24b2b6380769527f1d8f8da5251)<br><br><br>

## 1. 프로젝트 명

### Recipe Universe<br><br><br>

## 목차

[1. 프로젝트 명](#1-프로젝트-명)<br>
[2. 프로젝트 개요](#2-프로젝트-개요)<br>
[3. 웹 사이트 구성 및 주요 기능](#3-웹-사이트-구성-및-주요-기능)<br>
[4. 폴더 구조](#4-폴더-구조)<br>
[5. 기술 스택](#5-기술-스택)<br>
[6. 배운 점](#6-배운-점)<br>
[7. 개선 사항](#7-개선-사항)<br>
[8. 프로젝트를 마치며 (느낀점)](#8-프로젝트를-마치며-느낀점)<br><br><br>

## 2. 프로젝트 개요

각종 음식 레시피를 모아 보여주는 웹 사이트입니다. 해외 레시피 웹사이트들을 레퍼런스로 “Recipe Universe”라는 새로운 웹 사이트 플랫폼을 창작하였습니다.
<br><br><br>

## 3. 웹 사이트 구성 및 주요 기능

### ✅ 각 섹션 별 주요 기능

### 🔷 공통 기능

#### 1. Header와 Footer

- 공통 기능
  - 모바일 버전에서 상세 메뉴를 숨기고, 클릭시 아코디언 메뉴가 펼쳐지도록 함.
  - 아코디언 메뉴는 jQuery의 .slideUp(), .slideDown() 메서드 활용해 구현
- Header의 상세 메뉴의 내부 메뉴 hover시 글자에 형광펜을 칠한 것처럼 동작하는 인터렉션 구현
  <br><br>

#### 2. Go-to-Top Button

- jQuery의 scroll 이벤트 리스너를 사용하여 화면 스크롤시 맨 위로 가기 버튼이 나타나도록 함
- 버튼을 클릭하면 화면 상단으로 부드럽게 스크롤되며, .animate() 메서드를 활용해 구현
  <br><br><br><br>

### 🔷 Front Page

#### 1. 여러 Section 에서 공통되는 기능

- Main Slider, Today’s Pick, Quick & Easy 섹션에서 Swiper를 이용한 슬라이드 인터렉션 구현

#### 2. Main Slider

- 반응형 모드에서 화면이 resize 될 때 내부 컨텐츠의 배치가 달라짐에 따라 요소의 height 값을 달리 해야 하는 경우, JavaScript를 통해 height 값을 동적으로 계산하여 적용함

#### 3. Today’s Pick

- 기본 상태에서는 컨텐츠의 제목만 나타나도록 하였으며 컨텐츠에 hover 시 상세 텍스트가 위로 떠오르는 효과를 구현
- jQuery로 컨텐츠 제목의 height를 계산한 후, bottom 값을 조작하여 컨텐츠를 숨기고 나타나도록 하는 방식을 사용

#### 4. Meals

- jQuery를 사용하여 tab 메뉴 제작
- 북마크 버튼 클릭 효과를 jQuery의 .toggleClass() 메서드를 사용해 구현

#### 5. Ad Banner

- jQuery의 CountDown 플러그인을 사용하여 이벤트의 남은 시간을 직관적으로 보여줌
  <br><br><br>

### 🔷 Detail Page (레시피 상세 페이지)

#### 1. Jump to Recipe Button

- 버튼을 클릭하면 레시피 시작 파트로 바로 이동하도록 함
- 부드럽게 스크롤되도록 jQuery의 .animate() 메서드 사용

#### 2. Image Slide

- Swiper를 사용하여 썸네일이 있는 슬라이드 인터렉션 구현

#### 3. Recipe Summary

- tab 메뉴를 활용 버튼을 클릭시 세부 내용 변경
- 페이지 상단의 Jump to Recipe 버튼을 클릭하면 이 섹션으로 스크롤됨

#### 4. Reviews

- My Rating 섹션의 별 아이콘에 hover 혹은 click 하면 빈 아이콘에 색이 채워지도록 하고, 각 별 아이콘의 갯수에 따라 오른쪽 대표 텍스트가 달라지도록 함

#### 5. SideBar Buttons

- position: sticky를 이용하여, PC 버전에서 화면 오른쪽 하단에 위치하고 있는 4개의 버튼을 페이지를 스크롤했을 때 Header 바로 아래쪽으로 달라붙도록 함
  <br><br><br>

### ✅ 재사용 코드를 독립적 HTML 파일로 분리 (모듈화)

- Header와 Footer를 각각의 독립된 html 파일로 나누어 세부 페이지 제작 시 페이지에 공통으로 포함되는 Section을 추가 코드 작성 없이 재사용할 수 있도록 설계하였습니다.
- 각 HTML 파일을 include 하기 위해 jQuery의 .load() 메서드를 사용하였습니다.<br><br>

### ✅ 반응형 대응

- display: grid를 활용하여 레이아웃을 설계하였으며 Bootstrap의 12 column Grid System을 참고했습니다.
- 뷰포트 사이즈를 총 4 구간의 break-point로 나누었으며, 각 구간별로 xl, lg, md, sm의 이름을 붙였습니다.
- 뷰포트 사이즈별로 특정 갯수의 column을 차지하는 형태로 설계하여 반응형 전환이 매끄럽도록 하였으며, 그에 따라 UI의 넓이가 유연하게 달라지도록 설계하였습니다.
- 화면에서 차지하는 column 영역을 쉽게 적용할 수 있도록 “col-xx-num” 형태의 클래스를 사용하였습니다.<br><br>

#### Break Point

```
@media screen and (max-width: 576px) {
  /* sm */
  /* 모바일 */
}

@media screen and (min-width: 577px) and (max-width: 768px) {
  /* md  */
  /* 태블릿, 대형 모바일 */
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  /* lg  */
  /* 소형 데스크탑, 랩탑, 대형 태블릿 */
}

@media screen and (min-width: 1025px) {
  /* xl */
  /* 대형 데스크탑 */
}
```

<br><br><br>

## 4. 폴더 구조

모든 파일들은 기본적으로 역할에 따른 네이밍을 가지고 있으며, 역할에 따라 각각 다른 파일로 분리되도록 설계했습니다.

#### CSS

- CSS 파일은 웹 사이트의 페이지별로 나뉘며, 페이지 추가시 그 페이지 명대로 CSS 파일을 추가합니다.

#### JavaScript

- 모든 Javascript 코드는 js 폴더에 포함되도록 설계하였습니다.

#### SCSS

- 모든 SCSS 코드는 컴파일 된 후 페이지별로 하나의 CSS 파일에 포함되도록 설계하였습니다.

```
RECIPE-UNIVERSE/
├── css/
│   ├── detail.css
│   └── main.css
│
├── image/
│
├── include/
│   ├── footer.html
│   └── header.html
│
├── js/
│   ├── common.js       // 모든 페이지에서 사용되는 공통된 js 코드
│   ├── detail.js       // detail.html 페이지에서 사용되는 js 코드
│   ├── front-page.js   // index.html 페이지에서 사용되는 js 코드
│   └── slider.js       // swiper에 관련된 코드
│
├── scss/
│   ├── abstracts/      // 여러 scss 코드에서 공통으로 사용되는 코드 모음
│   │   ├── _mixins.scss
│   │   └── _variables.scss
│   ├── base/           // 페이지의 기본이 되는 코드 모음
│   │   ├── _common.scss  // 페이지 내의 공통 scss (section-title 등)
│   │   ├── _reset.scss
│   │   └── _typograhpy.scss  // 타이포그래피 설정 관련 코드
│   ├── components/     // 페이지에서 공통으로 사용되는 UI 컴포넌트 코드
│   │   ├── _buttons.scss
│   │   └── _card.scss
│   ├── layout/          // 페이지 Layout과 관련된 코드 모음
│   │   ├── _footer.scss
│   │   ├── _grid.scss   // Grid System에 관련된 코드
│   │   ├── _header.scss
│   │   └── _responsive.scss
│   ├── pages/           // 페이지별 scss 코드 모음 (index 제외)
│   │   └── detail.scss
│   ├── _index.scss    // 여러 파일에 나눠져있는 변수, mixin 등을 한번에 import 하기 위한 파일
│   └── main.scss
│
├── .gitignore
├── detail.html  // 상세 레시피 페이지
├── index.html   // 프론트 페이지
└── README.md
```

<br><br><br>

## 5. 기술 스택

### ✅ HTML5

### ✅ SCSS (CSS)

### ✅ JavaScript (jQuery)

### ✅ jQuery Plugin

1. Swiper
2. Countdown Plugin

### ✅ Bootstrap Icons

### ✅ Figma

<br><br><br>

## 6. 배운 점

### ✅ SCSS 사용

- 웹 사이트 내에서 여러곳에 공통적으로 쓰이는 UI를 컴포넌트화 하여 보다 쉽게 UI 재사용이 가능하도록 설계하는 방법을 배웠습니다.
- SCSS의 클래스 중첩 구조를 활용하여 CSS 클래스명이 필요 이상으로 길어지는 것을 방지하는 방법을 배웠습니다.
- mixin, 변수 등을 활용하여 중복되는 코드를 최대한 줄이고 유지보수가 용이하도록하는 방법을 배웠습니다.
  <br><br>

### ✅ CSS, JavaScript 구현 및 유지보수에 용이한 HTML 구조 설계

- 디자인 시안 분석 단계에서 부터 CSS 스타일 적용, JavaScript 또는 jQuery를 이용한 인터렉션 구현에 용이하도록 구조적으로 HTML을 설계하는 방법을 배웠습니다.
- 추후 유지보수 단계에서 HTML 구조가 추가되거나 CSS 설정이 바뀔 수 있음을 인지하며, 그런 상황에 대응할 수 있도록 UI를 컴포넌트화 시키고, 중복 코드를 최소화 하는 방식으로 설계하는 방법을 배웠습니다.
  <br><br>

### ✅ JavaScript, jQuery를 사용한 사용자 인터렉션 구현

- 사용자의 반응에 따라 변하는 UI 요소들을 jQuery를 이용하여 설계하는 방법을 배웠습니다.
- Swiper 등 jQuery 플러그인을 효과적으로 다루는 방법을 배웠습니다.
  <br><br>

### ✅ 반응형에 효과적으로 대응하기 위한 JavaScript 코드 설계

- 컨텐츠에 따라 특정 요소의 값을 정적으로 지정할 수 없는 경우, 혹은 뷰포트 사이즈에 따라 컨텐츠의 크기가 달라지는 경우에 대응하기 위해 JavaScript를 통해 동적으로 컨텐츠의 크기를 계산하여 적용하는 방식을 배웠습니다.
  <br><br>

### ✅ JavaScript 함수 설계

- JavaScript 코드를 기능별 함수 단위로 모듈화 하여 중복되는 코드를 줄이고, 재사용하는 방법을 배웠습니다.
  <br><br><br>

## 7. 개선 사항

### ✅ &lt;a&gt; 태그 내부에 &lt;button&gt; 태그가 있는 구조 개선

- 이 프로젝트의 Card UI는 &lt;a&gt; 태그로 만들어졌으며, 내부에 BookMark &lt;button&gt;이 존재합니다.
- HTML 오류를 검사하는 과정에서 &lt;button&gt;태그가 &lt;a&gt;태그 내부에 존재할 수 없으며, 이 경우 문법 오류가 발생한다는 것을 알게되었습니다.
- 이 경우, 버튼을 클릭했을 때 이벤트 버블링이 일어나 &lt;a&gt; 태그의 기본 동작인 href 속성이 동작하게 되므로 JavaScript 코드를 통해 이벤트 버블링을 막아야 한다는 것을 알게되었습니다.
- 이 프로젝트에서는 `event.preventDefault()` , `event.stopPropagation()` 코드를 통해 이벤트 버블링을 막았지만, 기본적으로는 &lt;a&gt; 태그 내부에 &lt;button&gt;태그가 존재하는 구조 자체를 수정하는 것이 더 바람직하다는 것을 알게되었습니다. 따라서 차후 프로젝트를 개선하게 된다면 이 구조를 수정할 계획입니다.

<br><br><br>

## 8. 프로젝트를 마치며 (느낀점)

프로젝트의 기획부터 디자인, 퍼블리싱, 기능 구현까지 스스로 모든 것을 해낸다는 것은 쉬운 일이 아닙니다. 프로젝트 초기, 야심찬 마음으로 시작했지만 시간이 지날 수록 이 프로젝트를 제대로 완성할 수 있을지 고민이깊었습니다.
프로젝트 완성을 위해 넘어야 할 산들이 많았지만, “You will never know until you try. (직접 시도해 보기 전엔 모른다)”라는 말을 되새기며 하나씩 문제를 해결해 나갔습니다. 이 과정에서 HTML의 구조적 설계, 부드러운 사용자 인터렉션 구현을 위한 JavaScrip와 jQuery 코드 설계 등에 대해 깊게 고민해 볼 수 있었습니다. 하나를 고치면 다른 하나가 고장나는 웃기고도 슬픈 상황도 여러번 있었지만, 혼자 처음부터 끝까지 프로젝트를 완성해낸 데 대해 스스로 자신감을 가지게 되었습니다. 또한 앞으로 실무에서 퍼블리셔로 근무하게 됐을 때 더 어려운 프로젝트를 접하게 되더라도 지금 이 경험을 잊지 않으며 나아간다면 분명 해낼 수 있을 것이라는 생각을 가지게 되었습니다.
