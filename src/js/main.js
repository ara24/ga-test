import $ from 'jquery';
window.$ = $;

const SELECTOR = {
  A_PAGE_BTN: '.menu > .a-btn',
  B_PAGE_BTN: '.menu > .b-btn',
  C_PAGE_BTN: '.menu > .c-btn',
  D_PAGE_BTN: '.menu > .d-btn',
  PAGE_LIST: '.pages-wrap > div',
  INNER_B_PAGE_BTN: '.inner.b-btn',
  D_PAGE_OPTION_BTNS: '.d-page Button.option'
}

const PAGE_INDEX = {
  A_PAGE: 0,
  B_PAGE: 1,
  C_PAGE: 2,
  D_PAGE: 3,
}

export default class Main {
  constructor() {
    console.log('main');
    this.init();
    this.active();
  }

  init() {
    this.$aBtn = $(SELECTOR.A_PAGE_BTN);
    this.$bBtn = $(SELECTOR.B_PAGE_BTN);
    this.$cBtn = $(SELECTOR.C_PAGE_BTN);
    this.$dBtn = $(SELECTOR.D_PAGE_BTN);

    this.$pages = $(SELECTOR.PAGE_LIST);

    this.$innerBBtn = $(SELECTOR.INNER_B_PAGE_BTN);

    this.$options = $(SELECTOR.D_PAGE_OPTION_BTNS);
    console.log(this.$options);
  }

  active() {
    this.$aBtn.on('click', this._onClickABtn.bind(this));
    this.$bBtn.on('click', this._onClickBBtn.bind(this));
    this.$cBtn.on('click', this._onClickCBtn.bind(this));
    this.$dBtn.on('click', this._onClickDBtn.bind(this));
    this.$innerBBtn.on('click', this._onClickInnerBBtn.bind(this));
    this.$options.on('click', this._onClickOptions.bind(this));
  }

  deactive() {
    this.$aBtn.off('click');
    this.$bBtn.off('click');
    this.$cBtn.off('click');
    this.$dBtn.off('click');
    this.$innerBBtn.off('click');
    this.$options.off('click');
  }

  _onClickABtn() {
    // console.log('_onClickABtn');
    this.showTargetPage(PAGE_INDEX.A_PAGE);
    gtag('event', 'move-a-page', {
      'event_category': 'menu',
      'event_label': 'method'
    });
  }

  _onClickBBtn() {
    // console.log('_onClickBBtn');
    this.showTargetPage(PAGE_INDEX.B_PAGE);
    gtag('event', 'move-b-page', {
      'event_category': 'menu',
      'event_label': 'method'
    });
  }

  _onClickCBtn() {
    // console.log('_onClickCBtn');
    this.showTargetPage(PAGE_INDEX.C_PAGE);
    gtag('event', 'move-c-page', {
      'event_category': 'menu',
      'event_label': 'method'
    });
  }

  _onClickDBtn() {
    // console.log('_onClickDBtn');
    this.showTargetPage(PAGE_INDEX.D_PAGE);
    gtag('event', 'move-d-page', {
      'event_category': 'menu',
      'event_label': 'method'
    });
  }

  _onClickInnerBBtn() {
    // console.log('_onClickInnerBBtn');
    this.showTargetPage(PAGE_INDEX.B_PAGE);
    gtag('event', 'move-b-page', {
      'event_category': 'inner btn',
      'event_label': ''
    });
  }

  _onClickOptions(e) {
    const value = $(e.target).data().value;

    gtag('event', 'click-option', {
      'event_category': 'in d page',
      'event_label': 'options',
      'value': value
    });
  }

  showTargetPage(pageIndex) {
    this.$pages.removeClass("on");
    const aPage = this.$pages[pageIndex];
    $(aPage).addClass("on");
  }

}
