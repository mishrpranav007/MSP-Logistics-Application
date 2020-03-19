import { Dimensions, PixelRatio, Platform } from 'react-native';
// Precalculate Device Dimensions for better performance
const y = Dimensions.get('window').height;
const x = Dimensions.get('window').width;
const platform = Platform.OS;

// Calculating ratio from breakpoints
const ratioX = PixelRatio.get();
const ratioY = PixelRatio.get();

// We set our base font size value
const baseUnit = 16;

// We're simulating EM by changing font size according to Ratio
const unit = normalize();

function normalize(size = baseUnit) {
  return Math.round(PixelRatio.roundToNearestPixel(size));
}
// We add an em() shortcut function
function em(value) {
  return moderateScale(unit * value);
}

function gridItemWidth(itemsPerRow, padding = em(1)) {
  const totalGutters = itemsPerRow + 1;
  const totalSpacing = totalGutters * padding;
  return (x - totalSpacing) / itemsPerRow;
}

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (x / guidelineBaseWidth) * size;
const verticalScale = size => (y / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

// Then we set our styles with the help of the em() function
export default {
  platform,
  em,
  scale,
  verticalScale,
  moderateScale,
  // GENERAL
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),
  PADDING: em(1),
  PADDING_GRID: em(0.5),

  FONT_SIZE: em(1), // 16
  // colors

  PRIMARY_COLOR: 'rgb(36,106,116)',
  WHITE_COLOR: 'rgb(255,255,255)',
  ICON_COLOR: 'rgba(255,255,255,0.7)',

  GRID_ITEM_WIDTH: gridItemWidth
};
