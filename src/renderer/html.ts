const specialOptionKeys = [ "parent", "style", "dataset" ];

export default function html(tag: string, options?: HTMLOptions): HTMLElement;
export default function html(tag: "div", options?: HTMLOptions): HTMLDivElement;
export default function html(tag: "span", options?: HTMLOptions): HTMLDivElement;
export default function html(tag: "img", options?: HTMLImageOptions): HTMLImageElement;
export default function html(tag: "button", options?: HTMLInputOptions): HTMLButtonElement;
export default function html(tag: "input", options?: HTMLInputOptions): HTMLInputElement;
export default function html(tag: "label", options?: HTMLLabelOptions): HTMLLabelElement;
export default function html(tag: "textarea", options?: HTMLInputOptions): HTMLTextAreaElement;
export default function html(tag: "select", options?: HTMLInputOptions): HTMLSelectElement;
export default function html(tag: "option", options?: HTMLOptionOptions): HTMLOptGroupElement;
export default function html(tag: "optgroup", options?: HTMLOptionOptions): HTMLOptGroupElement;
export default function html(tag: "ol", options?: HTMLOptions): HTMLOListElement;
export default function html(tag: "ul", options?: HTMLOptions): HTMLUListElement;
export default function html(tag: "li", options?: HTMLOptions): HTMLLIElement;

export default function html(tag: string, classList?: string|string[], options?: HTMLOptions): HTMLElement;
export default function html(tag: "div", classList?: string|string[], options?: HTMLOptions): HTMLDivElement;
export default function html(tag: "span", classList?: string|string[], options?: HTMLOptions): HTMLDivElement;
export default function html(tag: "img", classList?: string|string[], options?: HTMLImageOptions): HTMLImageElement;
export default function html(tag: "button", classList?: string|string[], options?: HTMLInputOptions): HTMLButtonElement;
export default function html(tag: "input", classList?: string|string[], options?: HTMLInputOptions): HTMLInputElement;
export default function html(tag: "label", classList?: string|string[], options?: HTMLLabelOptions): HTMLLabelElement;
export default function html(tag: "textarea", classList?: string|string[], options?: HTMLInputOptions): HTMLTextAreaElement;
export default function html(tag: "select", classList?: string|string[], options?: HTMLInputOptions): HTMLSelectElement;
export default function html(tag: "option", classList?: string|string[], options?: HTMLOptionOptions): HTMLOptGroupElement;
export default function html(tag: "optgroup", classList?: string|string[], options?: HTMLOptionOptions): HTMLOptGroupElement;
export default function html(tag: "ol", classList?: string|string[], options?: HTMLOptions): HTMLOListElement;
export default function html(tag: "ul", classList?: string|string[], options?: HTMLOptions): HTMLUListElement;
export default function html(tag: "li", classList?: string|string[], options?: HTMLOptions): HTMLLIElement;

export default function html(tag: string, classList?: string|string[]|HTMLInputOptions, options?: HTMLInputOptions) {
  if (options == null) {
    if (typeof classList === "object" && !Array.isArray(classList)) {
      options = classList;
      classList = null;
    } else {
      options = {};
    }
  }
  if (typeof classList === "string") classList = [ classList ] as any;

  const elt = document.createElement(tag);
  if (classList != null) {
    // NOTE: `elt.classList.add.apply(elt, classList);`
    // throws IllegalInvocationException at least in Chrome
    for (const name of classList as string[]) elt.classList.add(name);
  }

  for (const key in options) {
    if (specialOptionKeys.indexOf(key) !== -1) continue;
    const value = (options as any)[key];
    (elt as any)[key] = value;
  }

  if (options.parent != null) options.parent.appendChild(elt);
  if (options.style != null) for (const key in options.style) (elt.style as any)[key] = (options.style as any)[key];
  if (options.dataset != null) for (const key in options.dataset) elt.dataset[key] = options.dataset[key];

  return elt;
}

interface HTMLOptions {
  id?: string;
  parent?: HTMLElement;
  style?: HTMLStyleOptions;
  dataset?: { [key: string]: string; };
  textContent?: string;
  innerHTML?: string;
  title?: string;
  hidden?: boolean;
  disabled?: boolean;
  required?: boolean;
  draggable?: boolean;
}

interface HTMLImageOptions extends HTMLOptions {
  src?: string;
}

interface HTMLLabelOptions extends HTMLOptions {
  htmlFor?: string;
}

interface HTMLInputOptions extends HTMLOptions {
  type?: string;
  value?: string;
  accept?: string;
  placeholder?: string;
  pattern?: string;
  checked?: boolean;
}

interface HTMLOptionOptions extends HTMLOptions {
  label?: string;
  value?: string;
}

interface HTMLStyleOptions {
  alignContent?: string;
  alignItems?: string;
  alignSelf?: string;
  alignmentBaseline?: string;
  animation?: string;
  animationDelay?: string;
  animationDirection?: string;
  animationDuration?: string;
  animationFillMode?: string;
  animationIterationCount?: string;
  animationName?: string;
  animationPlayState?: string;
  animationTimingFunction?: string;
  backfaceVisibility?: string;
  background?: string;
  backgroundAttachment?: string;
  backgroundClip?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundOrigin?: string;
  backgroundPosition?: string;
  backgroundPositionX?: string;
  backgroundPositionY?: string;
  backgroundRepeat?: string;
  backgroundSize?: string;
  baselineShift?: string;
  border?: string;
  borderBottom?: string;
  borderBottomColor?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;
  borderBottomStyle?: string;
  borderBottomWidth?: string;
  borderCollapse?: string;
  borderColor?: string;
  borderImage?: string;
  borderImageOutset?: string;
  borderImageRepeat?: string;
  borderImageSlice?: string;
  borderImageSource?: string;
  borderImageWidth?: string;
  borderLeft?: string;
  borderLeftColor?: string;
  borderLeftStyle?: string;
  borderLeftWidth?: string;
  borderRadius?: string;
  borderRight?: string;
  borderRightColor?: string;
  borderRightStyle?: string;
  borderRightWidth?: string;
  borderSpacing?: string;
  borderStyle?: string;
  borderTop?: string;
  borderTopColor?: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  borderTopStyle?: string;
  borderTopWidth?: string;
  borderWidth?: string;
  bottom?: string;
  boxShadow?: string;
  boxSizing?: string;
  breakAfter?: string;
  breakBefore?: string;
  breakInside?: string;
  captionSide?: string;
  clear?: string;
  clip?: string;
  clipPath?: string;
  clipRule?: string;
  color?: string;
  colorInterpolationFilters?: string;
  columnCount?: any;
  columnFill?: string;
  columnGap?: any;
  columnRule?: string;
  columnRuleColor?: any;
  columnRuleStyle?: string;
  columnRuleWidth?: any;
  columnSpan?: string;
  columnWidth?: any;
  columns?: string;
  content?: string;
  counterIncrement?: string;
  counterReset?: string;
  cssFloat?: string;
  cssText?: string;
  cursor?: string;
  direction?: string;
  display?: string;
  dominantBaseline?: string;
  emptyCells?: string;
  enableBackground?: string;
  fill?: string;
  fillOpacity?: string;
  fillRule?: string;
  filter?: string;
  flex?: string;
  flexBasis?: string;
  flexDirection?: string;
  flexFlow?: string;
  flexGrow?: string;
  flexShrink?: string;
  flexWrap?: string;
  floodColor?: string;
  floodOpacity?: string;
  font?: string;
  fontFamily?: string;
  fontFeatureSettings?: string;
  fontSize?: string;
  fontSizeAdjust?: string;
  fontStretch?: string;
  fontStyle?: string;
  fontVariant?: string;
  fontWeight?: string;
  glyphOrientationHorizontal?: string;
  glyphOrientationVertical?: string;
  height?: string;
  imeMode?: string;
  justifyContent?: string;
  kerning?: string;
  left?: string;
  length?: number;
  letterSpacing?: string;
  lightingColor?: string;
  lineHeight?: string;
  listStyle?: string;
  listStyleImage?: string;
  listStylePosition?: string;
  listStyleType?: string;
  margin?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marker?: string;
  markerEnd?: string;
  markerMid?: string;
  markerStart?: string;
  mask?: string;
  maxHeight?: string;
  maxWidth?: string;
  minHeight?: string;
  minWidth?: string;
  opacity?: string;
  order?: string;
  orphans?: string;
  outline?: string;
  outlineColor?: string;
  outlineStyle?: string;
  outlineWidth?: string;
  overflow?: string;
  overflowX?: string;
  overflowY?: string;
  padding?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  pageBreakAfter?: string;
  pageBreakBefore?: string;
  pageBreakInside?: string;
  parentRule?: CSSRule;
  perspective?: string;
  perspectiveOrigin?: string;
  pointerEvents?: string;
  position?: string;
  quotes?: string;
  resize?: string;
  right?: string;
  rubyAlign?: string;
  rubyOverhang?: string;
  rubyPosition?: string;
  stopColor?: string;
  stopOpacity?: string;
  stroke?: string;
  strokeDasharray?: string;
  strokeDashoffset?: string;
  strokeLinecap?: string;
  strokeLinejoin?: string;
  strokeMiterlimit?: string;
  strokeOpacity?: string;
  strokeWidth?: string;
  tableLayout?: string;
  textAlign?: string;
  textAlignLast?: string;
  textAnchor?: string;
  textDecoration?: string;
  textFillColor?: string;
  textIndent?: string;
  textJustify?: string;
  textKashida?: string;
  textKashidaSpace?: string;
  textOverflow?: string;
  textShadow?: string;
  textTransform?: string;
  textUnderlinePosition?: string;
  top?: string;
  touchAction?: string;
  transform?: string;
  transformOrigin?: string;
  transformStyle?: string;
  transition?: string;
  transitionDelay?: string;
  transitionDuration?: string;
  transitionProperty?: string;
  transitionTimingFunction?: string;
  unicodeBidi?: string;
  verticalAlign?: string;
  visibility?: string;
  whiteSpace?: string;
  widows?: string;
  width?: string;
  wordBreak?: string;
  wordSpacing?: string;
  wordWrap?: string;
  writingMode?: string;
  zIndex?: string;
  zoom?: string;
}
