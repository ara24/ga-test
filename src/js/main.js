import $ from 'jquery';

const SELECTOR = {
  A_PAGE_BTN: '.a-btn',
  B_PAGE_BTN: '.b-btn',
  C_PAGE_BTN: '.c-btn',
  D_PAGE_BTN: '.d-btn',
  PAGE_LIST: '.pages-wrap > div',
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
  }

  active() {
    this.$aBtn.on('click', this._onClickABtn.bind(this));
    this.$bBtn.on('click', this._onClickBBtn.bind(this));
    this.$cBtn.on('click', this._onClickCBtn.bind(this));
    this.$dBtn.on('click', this._onClickDBtn.bind(this));
  }

  deactive() {
    this.$aBtn.off('click');
    this.$bBtn.off('click');
    this.$cBtn.off('click');
    this.$dBtn.off('click');
  }

  _onClickABtn() {
    // console.log('_onClickABtn');
    this.showTargetPage(PAGE_INDEX.A_PAGE);
    gtag('event', 'a-page');
  }

  _onClickBBtn() {
    // console.log('_onClickBBtn');
    this.showTargetPage(PAGE_INDEX.B_PAGE);
    gtag('event', 'b-page');
  }

  _onClickCBtn() {
    // console.log('_onClickCBtn');
    this.showTargetPage(PAGE_INDEX.C_PAGE);
    gtag('event', 'c-page');
  }

  _onClickDBtn() {
    // console.log('_onClickDBtn');
    this.showTargetPage(PAGE_INDEX.D_PAGE);
    gtag('event', 'd-page');
  }

  showTargetPage(pageIndex) {
    this.$pages.removeClass("on");
    const aPage = this.$pages[pageIndex];
    $(aPage).addClass("on");
  }

}
