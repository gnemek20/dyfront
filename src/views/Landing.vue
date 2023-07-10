<template>
  <div id="landing">
    <div ref="fixed" class="fixed">
      <div ref="fixedArea" class="area">
        <div ref="fixedList" class="none">
          <div class="support">
            <img src="@/assets/icons/support.svg">
          </div>
          <div class="request">
            <img src="@/assets/icons/request.svg">
          </div>
        </div>
        <div class="fixedImage" @click="clickFixedArea">
          <img src="@/assets/icons/ai.svg">
        </div>
      </div>
    </div>

    <div class="header">
      <div class="section">
        <div class="list">
          <div class="title">
            <h1 style="color: darkgoldenrod">D</h1><h1>ae</h1><h1 style="color: darkgray">Y</h1><h1>ang</h1>
          </div>
          <div class="menu">
            <div>
              <div class="hoveredMenu product" @mouseenter="overMenu" @mouseleave="outMenu">
                <h3>PRODUCT</h3>
                <div class="list">
                  <p>상품</p>
                  <p>hello</p>
                  <p>world</p>
                  <p>oh my god</p>
                  <p>I did it!</p>
                </div>
              </div>
            </div>
            <div>
              <div class="hoveredMenu support" @mouseenter="overMenu" @mouseleave="outMenu">
                <h3>SUPPORT</h3>
                <div class="list">
                  <p>고객지원</p>
                  <p>hello</p>
                  <p>world</p>
                  <p>oh my god</p>
                  <p>I did it!</p>
                </div>
              </div>
            </div>
            <div>
              <div class="hoveredMenu company" @mouseenter="overMenu" @mouseleave="outMenu">
                <h3>COMPANY</h3>
                <div class="list">
                  <p>회사</p>
                  <p>hello</p>
                  <p>world</p>
                  <p>oh my god</p>
                  <p>I did it!</p>
                </div>
              </div>
            </div>
          </div>
          <div class="sign">
            <button><h2>login</h2></button>
          </div>
        </div>
        <div class="zipper">
          <div ref="sliderImage" class="image">
            <img src="@/assets/icons/slider.svg">
          </div>
          <div ref="slider" class="slider" />
          <div class="up-chain" />
          <div class="down-chain" />
        </div>
      </div>
    </div>

    <div class="body">
      <div class="flicking">
        <div class="image">
          <!-- <img class="image" src="@/assets/images/게임.svg"> -->
          <p>엄청난 이미지!</p>
        </div>
        <div class="text">
          <h3>적당한 설명</h3>
          <button>적당한 버튼</button>
        </div>
      </div>
      <div class="introduce">
        <div class="list">
          <div class="item" v-for="index in 3" v-bind:key="index">
            <div class="image">
              <p>이미지</p>
            </div>
            <div class="cover">
              <p>설명</p>
            </div>
          </div>
        </div>
      </div>
      <div class="review">
        <div class="area">
          <div class="flex align-center cursor">
            <p>{{ '<' }}</p>
          </div>
          <div class="list">
            <p>리</p>
            <p>뷰</p>
            <p>😊</p>
          </div>
          <div class="flex align-center cursor">
            <p>{{ '>' }}</p>
          </div>
        </div>
      </div>
      <div class="company">
        <div class="title">
          <h2>찾아오시는 길</h2>
        </div>
        <div class="map">
          <naver-maps :width="710" :height="350" :mapOptions="mapOptions">
            <naver-marker :lat="marker.lat" :lng="marker.lng" @click="onMarkerClicked" />
          </naver-maps>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="inform flex align-center">
        <p>회사 정보 적기</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapOptions: {
        zoom: 16,
        lat: 37.572337,
        lng: 127.003134
      },
      marker: {
        lat: 37.573620,
        lng: 127.004421
      }
    }
  },
  methods: {
    chick() {
      console.log('chick');
    },
    onMarkerClicked(){
      window.open('https://map.naver.com/v5/search/%EB%8C%80%EC%96%91inc/place/1329507581?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=15,0,0,0,dh');
    },
    clickFixedArea() {
      const fixedArea = this.$refs.fixedArea;
      const fixedList = this.$refs.fixedList;

      if (fixedArea.className.includes('hovered')) {
        fixedArea.className = 'area';
        fixedArea.style.height = '40px';
        fixedArea.style.borderRadius = '50%';
        fixedArea.style.borderBottomRightRadius = '5px';

        fixedList.className = 'none';
      }
      else {
        fixedArea.className = 'area hovered';
        fixedArea.style.height = '120px';
        fixedArea.style.borderRadius = '5px';

        fixedList.className = 'fixedList fade';
      }
    },
    overMenu(event) {
      const sliderImage = this.$refs.sliderImage;
      const slider = this.$refs.slider;
      const target = event.target
      const offsetLeft = target.getBoundingClientRect().left;

      sliderImage.style.left = `${offsetLeft - 14}px`;
      slider.style.width = `${offsetLeft + 24}px`;
      target.style.height = '151px';
    },
    outMenu(event) {
      const sliderImage = this.$refs.sliderImage;
      const slider = this.$refs.slider;
      const target = event.target;

      sliderImage.style.left = '-3px'
      slider.style.width = `34px`;
      target.style.height = '100%';
    }
  }
}
</script>

<style lang="scss" scoped>
.fixed {
  z-index: 1234;
  position: fixed;
  display: flex;
  right: 100px;
  bottom: 100px;

  .area {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: end;
    height: 40px;
    background-color: beige;
    border: 1px solid dimgray;
    border-radius: 50%;
    border-bottom-right-radius: 5px;
    transition-duration: 0.5s;

    .fixedList {
      position: absolute;
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      width: 40px;

      * {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
      }
      *:hover {
        background-color: #dedec5;
      }
      *:nth-child(1) {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
      img {
        width: calc(100% - 10px);
      }
    }
  }
  .area:hover {
    border-radius: 5px !important;
  }
  .fixedImage {
    cursor: pointer;
    margin-top: auto;
    padding: 5px;
    display: flex;

    img {
      width: 30px;
      height: 30px;
    }
  }
}

.header {
  > .section {
    z-index: 1234;
    position: relative;
    padding: 10px 10px;

    > .list {
      display: grid;
      grid-template-columns: 1fr 3fr 1fr;

      > .title {
        justify-content: start;
      }
      > .menu {
        z-index: 1234;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;

        > * {
          cursor: pointer;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: end;
          position: relative;

          > .hoveredMenu {
            overflow: hidden;
            top: 0;
            position: absolute;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            transition-duration: 0.5s;

            > h3 {
              min-height: 37px;
              display: flex;
              justify-content: center;
              align-items: end;
            }
            > .list {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 20px;
              background-color: white;
              border: 1px solid dimgray;
              border-top: none;
            }
          }
        }
      }
      > .sign {
        justify-content: end;
        align-items: end;
      }
    }
    > .list > * {
      display: flex;
      align-items: center;
    }
    > .zipper {
      z-index: 123;
      position: relative;
      margin-top: 5px;

      > .image {
        display: flex;
        z-index: 123;
        position: absolute;
        top: -20px;
        left: -3px;
        transition-duration: 0.6s;
        transition-timing-function: ease-in-out;

        > img {
          width: 42px;
        }
      }
      > .slider {
        position: absolute;
        width: 34px;
        height: 4px;
        background-color: white;
        transition-duration: 0.6s;
        transition-timing-function: ease-in-out;
      }
      > .up-chain {
        border-bottom: 2px dotted dimgray;
      }
      > .down-chain {
        margin-left: 1px;
        border-bottom: 2px dotted dimgray;
      }
    }
  }
}

.body {
  display: flex;
  flex-direction: column;

  > .flicking {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    border-top: 1px solid dimgray;
    border-bottom: 1px solid dimgray;
    margin-bottom: 100px;

    > .image {
      height: 450px;
    }
    > .text {
      position: absolute;
      top: 40%;
      left: calc(50% - 100px - 250px);
      display: flex;
      flex-direction: column;
      justify-content: start;
    }
  }
  > .introduce {
    display: flex;
    justify-content: center;
    margin: 50px 0px;
    width: 100%;

    > .list {
      display: grid;
      width: 712px;
      grid-template-columns: repeat(3, 1fr);
      gap: 50px;

      > * {
        cursor: pointer;
        position: relative;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        height: 192px;
        border: 1px solid;
        border-radius: 5px;

        > * {
          position: absolute;
          display: flex;
          width: 100%;
          height: 100%;
        }
        > .image {
          position: absolute;
          justify-content: center;
          align-items: start;
        }
        > .cover {
          position: absolute;
          justify-content: center;
          align-items: center;
          background: rgba($color: rgb(218, 218, 218), $alpha: 0.5);
        }
      }
      > *:hover > .cover {
        display: none;
      }
    }
  }
  > .review {
    display: flex;
    justify-content: center;
    margin: 50px 0px;

    > .area {
      display: flex;
      justify-content: space-between;
      width: 712px;

      > .list {
        width: 600px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
  
        > * {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px;
          border: 1px solid dimgray;
          border-radius: 5px;
        }
      }
    }
  }
  > .company {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0 150px;

    > .title {
      margin-bottom: 10px;
    }
    > .map {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 710px;
      height: 350px;
      border: 1px solid dimgray;
    }
  }
}

.footer {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #d9d9d9;

  > .inform {
    width: 712px;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 5px 0px;
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fade {
  animation: fade;
  animation-duration: 1s;
  animation-fill-mode: backwards;
  animation-delay: 0.5s;
}
</style>