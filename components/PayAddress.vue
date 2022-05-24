<template>
  <div class="item-row"
       v-clipboard:copy="wallet"
       v-clipboard:success="onCopy"
       v-clipboard:error="onError">
    <div class="item">
      <div class="select-row">
        <div class="icon" v-html="currencyIcon"></div>
        <div class="currency-label">{{ currency }}</div>
        <div class="qr-icon" @click.stop="showQr" v-if="$device.isDesktop">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0V4.66641H4.66643V0H0ZM3.33343 3.33341H1.33343V1.33342H3.33343V3.33341Z" fill="white"/>
            <path d="M0 11.334V16.0008H4.66643V11.334H0ZM3.33343 14.6677H1.33343V12.6677H3.33343V14.6677Z"
                  fill="white"/>
            <path d="M11.3335 0V4.66641H15.9999V0H11.3335ZM14.6666 3.33341H12.6666V1.33342H14.6666V3.33341Z"
                  fill="white"/>
            <path d="M6 0V1.33342H8.66657V4.66655H10V0.000142914L6 0Z" fill="white"/>
            <path d="M7.33343 14.6677V11.334H6V16.0008H8.66657V14.6676L7.33343 14.6677Z" fill="white"/>
            <path d="M14.6665 6H15.9999V8.66685H14.6665V6Z" fill="white"/>
            <path d="M13.3338 6H8.66699V8.66685H10.0004V7.33342H13.3338L13.3338 6Z" fill="white"/>
            <path d="M2.6665 8.66602H7.33329V9.99915H2.6665V8.66602Z" fill="white"/>
            <path d="M6 2.66602V5.99943H0V9.99941H1.33343V7.33285H7.33343V2.66609L6 2.66602Z" fill="white"/>
            <path
              d="M12.6666 9.33398C10.8257 9.33398 9.3335 10.8262 9.3335 12.6675C9.3335 14.5086 10.8257 16.0008 12.6666 16.0008C14.5079 16.0008 16.0001 14.5086 16.0001 12.6677C16.0001 10.8262 14.5079 9.33398 12.6666 9.33398ZM12.431 14.1407L10.6634 12.3728L11.3705 11.6657L12.431 12.7263L13.9628 11.1943L14.6699 11.9013L12.431 14.1407Z"
              fill="white"/>
          </svg>

        </div>
        <div class="wallet">{{ wallet }}</div>
        <svg class="copy" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="12" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M16 6H12.125C11.5727 6 11.125 6.44772 11.125 7V7.625H10.125V7C10.125 5.89543 11.0204 5 12.125 5H16C17.1046 5 18 5.89543 18 7V10.875C18 11.9796 17.1046 12.875 16 12.875H15.5V11.875H16C16.5523 11.875 17 11.4273 17 10.875V7C17 6.44772 16.5523 6 16 6ZM8 9H13C13.5523 9 14 9.44772 14 10V17C14 17.5523 13.5523 18 13 18H8C7.44772 18 7 17.5523 7 17V10C7 9.44772 7.44772 9 8 9ZM6 10C6 8.89543 6.89543 8 8 8H13C14.1046 8 15 8.89543 15 10V17C15 18.1046 14.1046 19 13 19H8C6.89543 19 6 18.1046 6 17V10Z"
                fill="white"/>
        </svg>
      </div>

    </div>
    <div class="tooltip-wrap">
      <div class="tooltip" v-if="isShowTooltip">
        Address copied
        <svg class="done" width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.9088 0.860256L5.51061 8.86728L0.645055 3.78413" stroke="white" stroke-width="1.6"/>
        </svg>

      </div>
    </div>
    <div class="qr-wrap" v-if="isShowQr && $device.isDesktop && qrwallet === wallet">
      <qrcode-vue :value="wallet" :size="160" level="H" class="QR-img"/>
    </div>

  </div>
</template>
<script>
import QrcodeVue from 'qrcode.vue'
export default {
  name: 'PayAddress',
  props: {
    currency: String,
    currencyIcon: String,
    wallet: String,
    qrwallet: String
  },
  data() {
    return {
      isShowTooltip: false,
      isShowQr: false,
    }
  },
  components: {QrcodeVue},
  methods: {
    async onCopy(e) {
      this.isShowTooltip = true
      this.isShowQr = false
      await this.$utils.delay(5000)
      this.isShowTooltip = false
    },
    onError (e) {
    },

    showQr() {
      this.$emit("qrcode", this.wallet)
      this.isShowQr = !this.isShowQr
      this.isShowTooltip = false
    }
  }
}
</script>

<style lang="scss" scoped>
.item-row{
  position: relative;
}

.qr-wrap{
  position: absolute;
  z-index: 20;
  top:0px;
  right: -175px;

}
.icon {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: #fff;
  margin-right: 12px;
  display: flex;
  flex: 0 0 16px;
  justify-content: center;
  align-items: center;

  svg {
    width: 10px;
    height: 10px;
    color: black;
  }
}

.qr-icon {
  margin-left: 10px;
}

.select-row {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  cursor: pointer;

  .dropdown {
    border-radius: 8px;
    background-color: #3A2C66;
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: absolute;
    right: 0;
    top: 46px;
    z-index: 5;

    .drop-item {
      font-size: 13px;
      width: 80px;
      padding: 8px 10px 4px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      cursor: pointer;
      transition: 0.5s;

      &:hover {
        background-color: #50649B;
      }

      &:last-child {
        border-bottom: transparent;
      }
    }
  }

  .max {
    color: #FFFFFF;
    border-radius: 4px;
    background-color: #27AE60;
    padding: 3px 6px 1px 6px;
    font-size: 10px;
    margin-right: 12px;
  }

  .currency-label {
    padding-top: 3px;
    font-size: 13px;
    flex: 0 0 60px;
    text-align: left;
  }


  .arrow {
    width: 8px;
    height: 8px;
    border: 1.6px solid #FFFFFF;
    border-bottom: transparent;
    border-right: transparent;
    box-sizing: border-box;

    margin-left: 12px;
    transition: 0.5s;
    position: relative;
    //transform-origin: 50% 75%;

    &.close {
      transform: rotate(225deg);
      top: -2px
    }

    &.open {
      transform: rotate(45deg);
      top: 2px
    }
  }
}

.wallet-block {
  margin-top: 20px;
  width: 100%;
  max-width: 420px;


  .select-row {
    flex: 1 1 100%;
    max-width: 386px;
  }


  .wallet {
    margin-top: 0;
    margin-left: 16px;
    text-align: left;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 8px;
    @media (max-width: 576px) {
      max-width: 130px;
    }

  }

  .tooltip-wrap {
    position: relative;
  }

  @media (max-width: 576px) {
    .item-row {
      flex-direction: column;
    }

    .tooltip {
      left: 0 !important;
      right: 0;
      top: 8px;
      justify-content: center;
    }
  }

  .tooltip {
    position: absolute;
    display: flex;
    left: 16px;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    padding: 10px 24px;
    height: 48px;
    z-index: 10;
    background: linear-gradient(226.76deg, #7C6088 -4.53%, #4F578B 46.5%), #4E639A;

    .done {

      margin-left: 8px;
    }
  }

  .item {

    &:hover {
      .copy {
        rect {
          fill: #F45280;
        }
      }
    }
  }

  .copy {
    rect {
      transition: 0.5s;
      fill: #363855;
    }
  }

  h3.browser-text {
    font-size: 18px;
    margin-bottom: 16px;
  }

  .item-row {
    display: flex;
    min-height: 48px;
    margin-bottom: 8px;

    .item {
      display: flex;
      flex: 1 1 100%;
      flex-direction: row;
      background-color: #1E2041;
      border-radius: 10px;
      justify-content: space-around;
      padding: 12px 16px;
      position: relative;
      max-width: 100%;
    }
  }
}

.buy {
  margin-top: 24px;
  max-width: 420px;
  background: linear-gradient(90deg, #FF517A -4.5%, #0F5DFF 219.5%);
  box-shadow: 0px 14px 16px rgba(162, 49, 202, 0.32);

  &:hover {
    transition: all 0.5s linear;
    background-size: 200%;
    background-position: right;
  }
}

h3.browser-text {
  font-weight: 700;
  padding: 0;
  margin: 0;
}

p {
  text-align: center;
  width: 100%;
  margin: 8px 0 0;
  line-height: 14px;
}

.prices {
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  max-width: 420px;
  width: 100%;
  position: relative;
  margin-bottom: 16px;

  .arrow-down {
    position: absolute;
    left: calc(50% - 16px);
    top: 48px;
    z-index: 2;
  }

  .item-row {
    display: flex;
    min-height: 48px;
    margin-bottom: 8px;

    .item {
      display: flex;
      flex: 1 1 auto;
      flex-direction: row;
      background-color: #1E2041;
      border-radius: 10px;
      justify-content: space-around;
      padding: 12px 16px;
      position: relative;

      .col-1, .col-2 {
        flex-direction: column;
        display: flex;
        width: 50%;
      }

      .col-1 {

        .label, .value {
          text-align: left;
        }

        input.value {
          padding-top: 4px;
          border: none;
          background-color: transparent;
        }
      }

      .col-2 {
        .label {
          text-align: right;
        }
      }

      p {
        margin: 0;
        display: inline-block;
        line-height: 14px;
      }

      .label {
        font-weight: 500;
        font-size: 11px;
        text-transform: uppercase;
        vertical-align: middle;
        color: rgba(255, 255, 255, 0.56);
      }

      .value {
        font-weight: 500;
        font-size: 14px;
        vertical-align: middle;
        color: #ffffff;
      }
    }
  }


}

.legend-row {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 420px;
  align-items: center;

  @media (max-width: 576px) {
    .col-1, .col-2 {
      flex: 1 1 50% !important;
    }
  }

  .col-1, .col-2 {
    flex-direction: column;
    display: flex;
  }

  .col-1 {
    flex: 0 1 60%;
  }

  .col-2 {
    flex: 1 1 auto;
  }

  .col-1 {
    .label {
      text-align: left;
      font-weight: 500;
      font-size: 12px;
      text-transform: uppercase;
      vertical-align: middle;
      color: rgba(255, 255, 255, 0.56);
    }


  }

  .col-2 {
    .value {
      text-align: left;
      font-weight: 500;
      font-size: 14px;
      vertical-align: middle;
    }
  }
}
</style>
