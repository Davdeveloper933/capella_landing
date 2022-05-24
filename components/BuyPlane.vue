<template>
  <div class="inner-bg">
    <h3 class="browser-text text-big">Capella Finance</h3>
    <p class="">Buy your $CAPE tokens</p>
    <div class="prices-container">
    <div class="prices inner-wrap">
      <div class="item-row">
        <div class="item">
          <div class="col-1">
            <p class="label">
              buy with
            </p>
            <input class="value" type="number" :min="min" :max="max" :step="step" v-model.number="buy">
          </div>
          <div class="col-2" @click="toggleDrop">
            <p class="label">
              Balance 144.3
            </p>
            <div class="select-row">
                            <div class="max">Max</div>
              <div class="icon" v-html="currencyIcon"></div>
              <div class="currency-label">{{ currency }}</div>
              <div class="arrow" :class="isShowDrop ? 'open' :'close'"></div>
              <div class="dropdown" v-if="isShowDrop">
                <div class="drop-item" @click="selectCurrency('BTC')">BTC</div>
                <div class="drop-item" @click="selectCurrency('ETH')">ETH</div>
                <div class="drop-item" @click="selectCurrency('BUSD')">BUSD</div>
                <div class="drop-item" @click="selectCurrency('USDT')">USDT</div>
                <div class="drop-item" @click="selectCurrency('USDC')">USDC</div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <svg class="arrow-down" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="32" width="32" height="32" rx="16" transform="rotate(90 32 0)" fill="#23254B"/>
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M16.1701 20.4969L15.8197 20.8535L15.4692 20.4969L11.57 16.5291L12.2709 15.8158L15.3197 18.9182L15.3197 10.5017L16.3197 10.5017L16.3197 18.9182L19.3684 15.8158L20.0693 16.5291L16.1701 20.4969Z"
              fill="white"/>
        <rect x="31.5" y="0.5" width="31" height="31" rx="15.5" transform="rotate(90 31.5 0.5)" stroke="white"
              stroke-opacity="0.15"/>
      </svg>
      <div class="item-row">
        <div class="item">
          <div class="col-1">
            <p class="label">
              to receive
            </p>
            <p class="value" style="padding-top: 6px">{{ fReceive }}</p>
          </div>
          <div class="select-row" style="width: 50%">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
              <rect width="16" height="16" rx="8" fill="url(#paint0_linear_913_2075)"/>
              <path
                d="M7.06337 9.92565C6.30143 9.92565 5.60983 9.6925 5.0628 9.25386C4.37901 8.70457 4 7.89051 4 6.96185C4 5.24284 5.28943 3.99805 7.07118 3.99805C8.01677 3.99805 8.82949 4.3458 9.3648 4.97413L9.39606 5.01364C9.44686 5.07292 9.44295 5.16381 9.38434 5.21913L8.58333 5.96601C8.55598 5.99368 8.51691 6.00553 8.47393 6.00553C8.43485 6.00158 8.39578 5.98577 8.37233 5.95416C8.0363 5.56294 7.61821 5.36535 7.12979 5.36535C6.20766 5.36535 5.55904 6.02134 5.55904 6.9579C5.55904 7.51905 5.78176 7.98535 6.19203 8.26988C6.45382 8.45561 6.77813 8.55045 7.13761 8.55045C7.62994 8.55045 8.04802 8.34891 8.38015 7.95769C8.4075 7.92608 8.44267 7.90632 8.48174 7.90632C8.52081 7.90236 8.55989 7.91817 8.59115 7.94583L9.39215 8.69271C9.42341 8.72038 9.43904 8.75989 9.43904 8.79941C9.43904 8.83498 9.42732 8.87054 9.40388 8.8982C9.40388 8.90215 9.39997 8.90215 9.39997 8.90215C8.86075 9.5621 8.03239 9.92565 7.06337 9.92565ZM7.07118 4.29048C5.46135 4.29048 4.29696 5.41277 4.29696 6.9579C4.29696 7.79567 4.63299 8.52674 5.25035 9.01676C5.74268 9.41193 6.37177 9.62137 7.06728 9.62137C7.90736 9.62137 8.60287 9.3408 9.08347 8.81126L8.49737 8.26592C8.12226 8.6532 7.6651 8.85078 7.1337 8.85078C6.71561 8.85078 6.33269 8.73618 6.0201 8.51488C5.5395 8.17503 5.26208 7.60994 5.26208 6.9579C5.26208 5.84351 6.03183 5.06502 7.1337 5.06502C7.66119 5.06502 8.11836 5.25865 8.49346 5.64197L9.07957 5.09268C8.59896 4.57105 7.90736 4.29048 7.07118 4.29048Z"
                fill="white"/>
              <path
                d="M9.25536 5.07119C8.77084 4.68787 8.14176 4.48238 7.4228 4.48238C5.74655 4.48238 4.5001 5.65605 4.5001 7.29997C4.5001 8.02314 4.74236 8.65937 5.16044 9.14148C4.53527 8.63961 4.15234 7.87297 4.15234 6.96407C4.15234 5.3241 5.39879 4.14648 7.07505 4.14648C7.98156 4.14648 8.7474 4.47448 9.25536 5.07119Z"
                fill="white"/>
              <path
                d="M8.83717 8.39473L9.28261 8.80966C8.77465 9.43404 8.00099 9.77389 7.06713 9.77389C6.32083 9.77389 5.66049 9.54074 5.16034 9.13371C4.74616 8.6516 4.5 8.01932 4.5 7.2922C4.5 5.65223 5.74645 4.47461 7.4227 4.47461C8.14557 4.47461 8.77465 4.6801 9.25526 5.06342C9.26698 5.07527 9.2787 5.09108 9.28651 5.10294L8.48941 5.85772C8.12603 5.43883 7.67277 5.22149 7.13747 5.22149C6.12937 5.22149 5.41432 5.93675 5.41432 6.9642C5.41432 7.58858 5.67612 8.0944 6.10983 8.39868C6.41461 8.80176 6.89912 9.04282 7.48522 9.04282C8.02053 9.03887 8.47378 8.82152 8.83717 8.39473Z"
                fill="white"/>
              <path
                d="M9.28655 8.80543C9.28264 8.80938 9.28264 8.80938 9.28264 8.81333L8.8372 8.3984C8.47381 8.82519 8.02056 9.04253 7.48525 9.04253C6.89915 9.04253 6.41464 8.80148 6.10986 8.3984C6.39119 8.59598 6.74285 8.70663 7.1375 8.70663C7.67671 8.70663 8.12997 8.48929 8.48944 8.0625L9.28655 8.80543Z"
                fill="white"/>
              <path
                d="M8.93915 6.06836C9.70108 6.06836 10.3927 6.30151 10.9397 6.74016C11.6235 7.28945 12.0025 8.10351 12.0025 9.03216C12.0025 10.7512 10.7131 11.996 8.93133 11.996C7.98575 11.996 7.17302 11.6482 6.63772 11.0199L6.60646 10.9804C6.55566 10.9211 6.55957 10.8302 6.61818 10.7749L7.41919 10.028C7.44654 10.0003 7.48561 9.98848 7.52859 9.98848C7.56767 9.99244 7.60674 10.0082 7.63018 10.0399C7.96622 10.4311 8.3843 10.6287 8.87272 10.6287C9.79877 10.6287 10.4474 9.97268 10.4474 9.03612C10.4474 8.47497 10.2247 8.00866 9.8144 7.72414C9.5526 7.53841 9.22829 7.44356 8.86882 7.44356C8.37649 7.44356 7.9584 7.6451 7.62628 8.03633C7.59893 8.06794 7.56376 8.0877 7.52469 8.0877C7.48561 8.09165 7.44654 8.07584 7.41528 8.04818L6.61427 7.3013C6.58301 7.27364 6.56738 7.23412 6.56738 7.1946C6.56738 7.15904 6.57911 7.12347 6.60255 7.09581C6.60255 7.09186 6.60646 7.09186 6.60646 7.09186C7.14567 6.43192 7.97403 6.06836 8.93915 6.06836ZM8.93524 11.6996C10.5451 11.6996 11.7095 10.5773 11.7095 9.03216C11.7095 8.1944 11.3734 7.46332 10.7561 6.97331C10.2637 6.57813 9.63466 6.36869 8.93915 6.36869C8.09907 6.36869 7.40356 6.64926 6.92295 7.1788L7.50906 7.72414C7.88416 7.33687 8.34132 7.13928 8.87272 7.13928C9.29081 7.13928 9.67373 7.25388 9.98632 7.47518C10.4669 7.81503 10.7443 8.38013 10.7443 9.03216C10.7443 10.1466 9.9746 10.925 8.87272 10.925C8.34523 10.925 7.88807 10.7314 7.51296 10.3481L6.92686 10.8974C7.40747 11.423 8.09907 11.6996 8.93524 11.6996Z"
                fill="white"/>
              <path
                d="M6.75098 10.9336C7.23549 11.3169 7.86457 11.5224 8.58353 11.5224C10.2598 11.5224 11.5062 10.3487 11.5062 8.70479C11.5062 7.98162 11.264 7.34539 10.8459 6.86328C11.4711 7.36515 11.854 8.13179 11.854 9.04069C11.854 10.6807 10.6075 11.8583 8.93128 11.8583C8.02087 11.8583 7.25893 11.5303 6.75098 10.9336Z"
                fill="white"/>
              <path
                d="M7.16907 7.60181L6.72363 7.18688C7.23159 6.56251 8.00525 6.22266 8.93911 6.22266C9.68541 6.22266 10.3458 6.45581 10.8459 6.86284C11.2601 7.34495 11.5062 7.97723 11.5062 8.70435C11.5062 10.3443 10.2598 11.5219 8.58354 11.5219C7.86067 11.5219 7.23159 11.3164 6.75098 10.9331C6.73926 10.9213 6.72754 10.9055 6.71973 10.8936L7.52074 10.1467C7.88412 10.5656 8.33737 10.783 8.87268 10.783C9.88078 10.783 10.5958 10.0677 10.5958 9.04025C10.5958 8.41587 10.334 7.91005 9.90032 7.60576C9.59554 7.19478 9.10712 6.95373 8.52493 6.95373C7.98571 6.95373 7.53246 7.17107 7.16907 7.60181Z"
                fill="white"/>
              <path
                d="M6.72021 7.19609C6.72412 7.19214 6.72412 7.19214 6.72412 7.18819L7.16956 7.60312C7.53295 7.17633 7.9862 6.95898 8.52151 6.95898C9.10761 6.95898 9.59212 7.20004 9.8969 7.60312C9.61557 7.40553 9.26391 7.29488 8.86926 7.29488C8.33005 7.29488 7.87679 7.51223 7.51732 7.93902L6.72021 7.19609Z"
                fill="white"/>
              <defs>
                <linearGradient id="paint0_linear_913_2075" x1="33.5" y1="16" x2="-2.00002" y2="5.50008"
                                gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF4567"/>
                  <stop offset="1" stop-color="#306FE0"/>
                </linearGradient>
              </defs>
            </svg>
            <div class="currency-label">CAPE</div>

          </div>
        </div>
      </div>
    </div>
    <div class="legend-row justify-between">
      <div class="">
        <p class="label text-small text-gray text-uppercase">
          Rate
        </p>
      </div>
      <div class="">
        <p class="value font-14">
          1 CAPE = 0,01 $
        </p>
      </div>
    </div>

    <ui-button class="section-funds__button buy" @click="showWallet" v-if="!isShowWallet && !showLoader">
      Buy CAPE
    </ui-button>
    <div v-if="isShowWallet" class="wallet-block">
      <h3 class="browser-text">{{ currency }} wallet for transfer</h3>
      <PayAddress :currency="wallet.label" :currency-icon="currencyIcon" :wallet="wallet.address" v-for="wallet in wallets" :key="wallet.address" :qrwallet="qrwallet" @qrcode="qrcode"/>
    </div>
    <div class="loader" v-if="showLoader">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
    <rect x="0" y="13" width="4" height="5" fill="#FF517A">
      <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
      <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
    </rect>
        <rect x="10" y="13" width="4" height="5" fill="#FF517A">
      <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
          <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
    </rect>
        <rect x="20" y="13" width="4" height="5" fill="#FF517A">
      <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
          <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
    </rect>
  </svg>
    </div>

    <p class="subtitle font-14">
      Отправьте выбранную криптовалюту на данный кошелек и в ответ<br> мы отправим вам токены CAPE
    </p>
    </div>
  </div>
</template>
<script>
  import PayAddress from "@/components/PayAddress";
  import UiButton from '~/components/ui/ui-button.global'

const PER_USDT = 0.006
export default {
  name: 'BuyPlane',
  components: { UiButton, PayAddress},
  props: {
    raised: {
      type: Number,
      default: 0
    },
    email: {
      type: String,
    },
  },
  data() {
    return {
      buy: 0,
      receive: 1,
      currency: 'BTC',
      isShowDrop: false,
      isShowWallet: false,
      tweenedReceive: 0,
      qrwallet:"",
      showLoader:false,
      wallets:[],
      rates: {
        BTC: '1.000000000000000000000000',
        ETH: '0.069035251618682000000000',
        USDT: '0.000024233011883117000000',
        USDC: '0.000024216827674385000000',
        BUSD: '0.000024198843471081000000'
      }
    }
  },
  watch: {
    buy(newValue) {
      let rec = 0
      switch (this.currency) {
        case "ETH":
          rec = newValue * this.rates.ETH/this.rates.USDT
          break
        case "BTC":
          rec = newValue * this.rates.BTC/this.rates.USDT
          break
        case "USDT":
          rec = newValue
          break
        case "USDC":
          rec = newValue
          break
        case "BUSD":
          rec = newValue
      }
      this.$gsap.to(this.$data, {duration: 0.5, tweenedReceive: rec/PER_USDT});
    },
    currency(newValue) {
      this.isShowWallet = false
      this.wallets=[]
      let rec = 0
      switch (newValue) {
        case "ETH":
          rec = this.buy * this.rates.ETH/this.rates.USDT
          break
        case "BTC":
          rec = this.buy * this.rates.BTC/this.rates.USDT
          break
        case "USDT":
          rec = this.buy
          break
        case "USDC":
          rec = this.buy
          break
        case "BUSD":
          rec = this.buy
      }
      this.$gsap.to(this.$data, {duration: 0.5, tweenedReceive: rec/PER_USDT});
    }
  },
  methods: {
    toggleDrop() {
      this.isShowDrop = !this.isShowDrop
    },
    qrcode(qr){
      this.qrwallet=qr
    },

    selectCurrency(cur) {
      this.currency = cur
    },

    async showWallet() {
      this.showLoader = true
      const {data} = await this.$api.wallet({currency: this.currency, email:this.email})
      this.showLoader = false
      this.wallets = data
      this.isShowWallet = true
    }
  },
  computed: {
    min(){
      switch (this.currency) {
        case "ETH":
          return 1/(this.rates.ETH/this.rates.USDT)
        case "BTC":
          return 1/(this.rates.BTC/this.rates.USDT)
        case "USDT":
          return 1
        case "USDC":
          return 1
        case "BUSD":
          return 1
      }
    },
    max(){
      switch (this.currency) {
        case "ETH":
          return 25000/(this.rates.ETH/this.rates.USDT)
        case "BTC":
          return 25000/(this.rates.BTC/this.rates.USDT)
        case "USDT":
          return 25000
        case "USDC":
          return 25000
        case "BUSD":
          return 25000
      }
    },
    step(){
      switch (this.currency) {
        case "ETH":
          return 0.001
        case "BTC":
          return 0.001
        case "USDT":
          return 1
        case "USDC":
          return 1
        case "BUSD":
          return 1
      }
    },
    now() {
      return this.$moment().utc().format("MMMM DD, YYYY, hh:mm:ss") + " UTC"
    },
    currencyIcon() {
      switch (this.currency) {
        case "ETH":
          return "<svg style=\"width:14px;height:14px\" viewBox=\"0 0 24 24\"><path fill=\"black\" d=\"M12,1.75L5.75,12.25L12,16L18.25,12.25L12,1.75M5.75,13.5L12,22.25L18.25,13.5L12,17.25L5.75,13.5Z\" /></svg>"
        case "BTC":
          return "<svg style=\"width:14px;height:14px\" viewBox=\"0 0 24 24\"><path fill=\"#EDA147\" d=\"M17.06 11.57C17.65 10.88 18 10 18 9C18 7.14 16.73 5.57 15 5.13V3H13V5H11V3H9V5H6V7H8V17H6V19H9V21H11V19H13V21H15V19C17.21 19 19 17.21 19 15C19 13.55 18.22 12.27 17.06 11.57M10 7H14C15.1 7 16 7.9 16 9S15.1 11 14 11H10V7M15 17H10V13H15C16.1 13 17 13.9 17 15S16.1 17 15 17Z\" /></svg>"
        case "USDT":
          return "<svg style=\"width:14px;height:14px\" viewBox=\"0 0 339.43 295.27\"><path d=\"M62.15,1.45l-61.89,130a2.52,2.52,0,0,0,.54,2.94L167.95,294.56a2.55,2.55,0,0,0,3.53,0L338.63,134.4a2.52,2.52,0,0,0,.54-2.94l-61.89-130A2.5,2.5,0,0,0,275,0H64.45a2.5,2.5,0,0,0-2.3,1.45h0Z\" style=\"fill:#50af95\"/><path d=\"M191.19,144.8v0c-1.2.09-7.4,0.46-21.23,0.46-11,0-18.81-.33-21.55-0.46v0c-42.51-1.87-74.24-9.27-74.24-18.13s31.73-16.25,74.24-18.15v28.91c2.78,0.2,10.74.67,21.74,0.67,13.2,0,19.81-.55,21-0.66v-28.9c42.42,1.89,74.08,9.29,74.08,18.13s-31.65,16.24-74.08,18.12h0Zm0-39.25V79.68h59.2V40.23H89.21V79.68H148.4v25.86c-48.11,2.21-84.29,11.74-84.29,23.16s36.18,20.94,84.29,23.16v82.9h42.78V151.83c48-2.21,84.12-11.73,84.12-23.14s-36.09-20.93-84.12-23.15h0Zm0,0h0Z\" style=\"fill:#fff\"/></svg>"
        case "USDC":
          return "<svg style=\"width:14px;height:14px\" viewBox=\"0 0 506.76 506.76\"><path fill=\"#2775ca\" d=\"M253.38,506.76A253.38,253.38,0,1,0,0,253.38,252.77,252.77,0,0,0,253.38,506.76Z\"></path><path fill=\"#fff\" d=\"M323.06,293.5c0-36.95-22.17-49.62-66.51-54.9-31.67-4.22-38-12.67-38-27.45s10.56-24.28,31.67-24.28c19,0,29.57,6.33,34.84,22.17a8,8,0,0,0,7.4,5.28h16.89a7.22,7.22,0,0,0,7.39-7.39v-1.06a52.74,52.74,0,0,0-47.51-43.28V137.25c0-4.22-3.17-7.39-8.45-8.45H244.94c-4.23,0-7.39,3.17-8.45,8.45v24.28c-31.67,4.22-51.73,25.34-51.73,51.73,0,34.84,21.11,48.57,65.45,53.85,29.57,5.27,39.07,11.61,39.07,28.5s-14.78,28.51-34.84,28.51c-27.45,0-37-11.62-40.12-27.45-1.06-4.22-4.22-6.34-7.39-6.34H189a7.22,7.22,0,0,0-7.39,7.39v1.06c4.22,26.39,21.12,45.4,56,50.68v25.33c0,4.23,3.16,7.39,8.44,8.45h15.84c4.22,0,7.39-3.17,8.44-8.45V349.46c31.68-5.28,52.79-27.46,52.79-56Z\"></path><path fill=\"#fff\" d=\"M199.54,404.35c-82.35-29.56-124.58-121.41-94-202.7,15.83-44.34,50.67-78.13,94-94,4.22-2.11,6.33-5.28,6.33-10.56V82.35c0-4.22-2.11-7.39-6.33-8.45-1.06,0-3.17,0-4.23,1.06C95,106.63,40.12,213.26,71.79,313.56A189.91,189.91,0,0,0,195.31,437.08c4.23,2.11,8.45,0,9.51-4.22,1.05-1.06,1.05-2.11,1.05-4.22V413.86C205.87,410.69,202.71,406.47,199.54,404.35ZM311.45,75c-4.23-2.11-8.45,0-9.5,4.22-1.06,1.06-1.06,2.11-1.06,4.23V98.19c0,4.22,3.17,8.44,6.33,10.55,82.35,29.56,124.58,121.41,94,202.71-15.84,44.34-50.68,78.12-94,94-4.22,2.11-6.33,5.28-6.33,10.56v14.78c0,4.22,2.11,7.39,6.33,8.44,1.06,0,3.17,0,4.23-1.05C411.74,406.47,466.64,299.83,435,199.54A191.47,191.47,0,0,0,311.45,75Z\"></path></svg>"
        case "BUSD":
          return "<svg  style=\"width:14px;height:14px\" viewBox=\"0 0 336.41 337.42\"><path fill=\"#f0b90b\"  d=\"M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z\"/><path fill=\"#f0b90b\" d=\"M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z\"/><path fill=\"#f0b90b\" d=\"M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z\"/><path fill=\"#f0b90b\" d=\"M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z\"/></svg>"
      }
    },
    fReceive(){
      return this.tweenedReceive.toFixed(2)
    }
  },
  async mounted() {
    const {data} = await this.$api.rates()
    this.rates = data
    this.buy=0.01.toFixed(2)
  }
}
</script>

<style lang="scss" scoped>
.inner-bg {
  border-radius: 20px;
  padding: 40px 24px 48px;
  background: linear-gradient(270deg, rgba(255, 162, 223, 0.14) -4.07%, rgba(105, 159, 255, 0.14) 47.91%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  min-width: 420px;

  @media (max-width: 576px) {
      max-width: 374px;
    min-width: 340px;
  }

  .loader{
    margin-top: 20px;
  }


  .subtitle {
    margin-top: 20px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.56);
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

  .select-row {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    cursor: pointer;
    padding: 4px 0;

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
    }


    p.wallet {
      margin-top: 0;
      margin-left: 16px;
      text-align: left;
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
        top: 16px;
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
        flex: 1 1 auto;
        flex-direction: row;
        background-color: #1E2041;
        border-radius: 10px;
        justify-content: space-around;
        padding: 12px 16px;
        position: relative;
      }
    }
  }

  .buy {
    margin-top: 24px;
    max-width: 420px;
    width: 100%;
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
      flex: 1 1 50%;
    }

    /*.col-1 {
      flex: 0 1 60%;
    }

    .col-2 {
      flex: 1 1 auto;
    }*/

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
}

  .prices-container {

  }

</style>
