<template>
  <div class="timer">
    <div class="timer__item">
      <span id="days">{{ days }}</span>
      day
    </div>
    <div class="timer__item">
      <span id="hours">{{ hours }}</span>
      hour
    </div>
    <div class="timer__item">
      <span id="minutes" class="minutes">{{ minutes }}</span>
      min
    </div>
    <div class="timer__item timer__item--last">
      <span id="seconds">{{ seconds }}</span>
      sec
    </div>
  </div>
</template>
<script>
const MILLISECONDS_SECOND = 1000;
const MILLISECONDS_MINUTE = 60 * MILLISECONDS_SECOND;
const MILLISECONDS_HOUR = 60 * MILLISECONDS_MINUTE;
const MILLISECONDS_DAY = 24 * MILLISECONDS_HOUR;

export default {
  name: 'CountDown',
  props:{
    time_left: {
      type: Number,
      default: 1647987720000,
    },

    auto_start: {
      type: Boolean,
      default: true,
    },

    leading_zero: {
      type: Boolean,
      default: true,
    },

    now: {
      type: Function,
      default: () => Date.now(),
    },
  },
  data() {
    return {
      count: 0,
      counting: false,
      endTime: 0,
    };
  },
  computed: {
    days() {
      return this.addZero(Math.floor(this.count / MILLISECONDS_DAY));
    },

    hours() {
      return this.addZero(Math.floor((this.count % MILLISECONDS_DAY) / MILLISECONDS_HOUR));
    },

    minutes() {
      return this.addZero(Math.floor((this.count % MILLISECONDS_HOUR) / MILLISECONDS_MINUTE));
    },

    seconds() {
      const seconds = (this.count % MILLISECONDS_MINUTE) / MILLISECONDS_SECOND;

      return this.addZero(Math.floor(seconds));
    },
  },
  watch: {
    time_left() {
      this.init();
    },
  },

  created() {
    this.init();
  },
  beforeDestroy() {
    this.stop();
  },
  methods: {
    init() {
      const { time_left } = this;

      if (time_left > 0) {
        this.count = time_left - Date.now();
        this.endTime = time_left;

        if (this.auto_start) {
          this.$nextTick(() => {
            this.start();
          });
        }
      }
    },

    start() {
      if (this.counting) {
        return;
      }

      this.counting = true;
      this.step();
    },

    pause() {
      if (!this.counting) {
        return;
      }
      this.counting = false;
    },

    step() {
      if (!this.counting) {
        return;
      }

      if (this.count > 0) {

        this.timeout = setTimeout(() => {
          this.count -= 1000;
          this.step();
        }, 1000);
      } else {
        this.count = 0;
        this.stop();
      }
    },

    stop() {
      this.counting = false;
      this.timeout = undefined;
    },

    update() {
      if (this.counting) {
        this.count = Math.max(0, this.endTime - Date.now());
      }
    },

    addZero(val) {
      return val < 10 ? `0${val}` : val;
    },
  },
}
</script>

<style scoped lang="scss">
  .timer {
    display: flex;
    margin: 15px auto;
    margin-bottom: 0;

    &__item {
      margin: 0 7.5px;
      width: 40px;
      height: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
      letter-spacing: -0.01em;
      color: rgba(255, 255, 255, .32);

      span {
        position: relative;
        font-size: 24px;
        color: #fff;

        &:after {
          content: ':';
          position: absolute;
          right: -15px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255, 255, 255, .32);
        }
      }

      .minutes::after {
        color: #FF7A82;
      }

      &--last {
        span {
          &::after {
            content: none;
          }
        }
      }
    }

    &-endcount {
      font-size: 24px;
      color: #fff;
    }
  }
</style>
