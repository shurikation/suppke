export class AnimationDurationHandler {
  static getDuration(selector, varName) {
    const value = getComputedStyle(document.querySelector(selector)).getPropertyValue(varName);
    return +value.match(/\d/g).join('');
  }

  static setDuration() {

  }
}