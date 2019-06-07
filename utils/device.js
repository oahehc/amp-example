// reference: https://github.com/arasatasaygin/is.js/blob/master/is.js

isAndroid = function(userAgent) {
  return /android/i.test(userAgent);
};

isIos = function(userAgent) {
  return /iphone/i.test(userAgent);
};

isChrome = function(userAgent) {
  return /chrome|crios/i.test(userAgent);
};

isFirefox = function(userAgent) {
  return /firefox|fxios/i.test(userAgent);
};

isIe = function(userAgent) {
  return /msie |trident/i.test(userAgent);
};

isSafari = function(userAgent) {
  return /safari/i.test(userAgent);
};

device = function(userAgent) {
  if (!userAgent) return '';
  if (isAndroid(userAgent)) return 'Android';
  if (isIos(userAgent)) return 'Ios';
  if (isChrome(userAgent)) return 'Chrome';
  if (isFirefox(userAgent)) return 'Firefox';
  if (isSafari(userAgent)) return 'Safari';
  if (isIe(userAgent)) return 'Ie';

  return '';
};

module.exports = device;
