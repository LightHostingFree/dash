import { c as create_ssr_component, v as validate_component, f as escape, t as null_to_empty, d as add_attribute, u as add_styles, l as compute_slots } from './index3-8659ab76.js';
import './ProgressBar.svelte_svelte_type_style_lang-9dfb11a6.js';
import './index2-0a6b26f5.js';

const cBase = "progress-radial relative overflow-hidden";
const cBaseTrack = "fill-transparent";
const cBaseMeter = "fill-transparent transition-[stroke-dashoffset] duration-200 -rotate-90 origin-[50%_50%]";
const baseSize = 512;
const ProgressRadial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let $$slots = compute_slots(slots);
  let { value = void 0 } = $$props;
  let { stroke = 40 } = $$props;
  let { font = 56 } = $$props;
  let { width = "w-36" } = $$props;
  let { meter = "stroke-surface-900 dark:stroke-surface-50" } = $$props;
  let { track = "stroke-surface-500/30" } = $$props;
  let { fill = "fill-token" } = $$props;
  let { labelledby = "" } = $$props;
  const radius = baseSize / 2;
  let circumference = radius;
  let dashoffset;
  function setProgress(percent) {
    circumference = radius * 2 * Math.PI;
    dashoffset = circumference - percent / 100 * circumference;
  }
  setProgress(0);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.stroke === void 0 && $$bindings.stroke && stroke !== void 0)
    $$bindings.stroke(stroke);
  if ($$props.font === void 0 && $$bindings.font && font !== void 0)
    $$bindings.font(font);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.meter === void 0 && $$bindings.meter && meter !== void 0)
    $$bindings.meter(meter);
  if ($$props.track === void 0 && $$bindings.track && track !== void 0)
    $$bindings.track(track);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase} ${width} ${$$props.class ?? ""}`;
  return `


<figure class="${"progress-radial " + escape(classesBase, true)}" data-testid="progress-radial" role="meter"${add_attribute("aria-labelledby", labelledby, 0)}${add_attribute("aria-valuenow", value || 0, 0)}${add_attribute("aria-valuetext", value ? `${value}%` : "Indeterminate Spinner", 0)}${add_attribute("aria-valuemin", 0, 0)}${add_attribute("aria-valuemax", 100, 0)}>
	<svg viewBox="${"0 0 " + escape(baseSize, true) + " " + escape(baseSize, true)}" class="${["rounded-full", value === void 0 ? "animate-spin" : ""].join(" ").trim()}"><circle class="${"progress-radial-track " + escape(cBaseTrack, true) + " " + escape(track, true)}"${add_attribute("stroke-width", stroke, 0)}${add_attribute("r", baseSize / 2, 0)} cx="50%" cy="50%"></circle><circle class="${"progress-radial-meter " + escape(cBaseMeter, true) + " " + escape(meter, true)}"${add_attribute("stroke-width", stroke, 0)}${add_attribute("r", baseSize / 2, 0)} cx="50%" cy="50%"${add_styles({
    "stroke-dasharray": `${circumference}
			${circumference}`,
    "stroke-dashoffset": dashoffset
  })}></circle>${value != void 0 && value >= 0 && $$slots.default ? `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-weight="bold"${add_attribute("font-size", font, 0)} class="${"progress-radial-text " + escape(fill, true)}">${slots.default ? slots.default({}) : ``}</text>` : ``}</svg></figure>`;
});
const css = {
  code: ".terminal-font.svelte-6pctjd{font-family:'VT323', monospace}.red.svelte-6pctjd{color:red}.yellow.svelte-6pctjd{color:yellow}.green.svelte-6pctjd{color:green}input.svelte-6pctjd:focus{outline:none}.fixAnimation.svelte-6pctjd{grid-row:1;grid-column:1}.pagesGrid.svelte-6pctjd{display:grid;grid-template-rows:1fr;grid-template-columns:1fr}.textnext.svelte-6pctjd{grid-row:1;grid-column:1}.textnexttext.svelte-6pctjd{grid-row:1;grid-column:1}.shake.svelte-6pctjd{animation:svelte-6pctjd-shake 0.5s}@keyframes svelte-6pctjd-shake{0%{transform:translateX(0)}25%{transform:translateX(-10px)}50%{transform:translateX(10px)}75%{transform:translateX(-10px)}100%{transform:translateX(0)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `
<div class="flex flex-col items-center justify-center"><div class="flex flex-row items-center justify-center"><div class="pagesGrid svelte-6pctjd">${`<div class="flex flex-col items-center justify-center">${validate_component(ProgressRadial, "ProgressRadial").$$render($$result, {}, {}, {})}
					<br>
					<h1 class="${escape(null_to_empty(`h1`), true) + " svelte-6pctjd"}">Forking is-cool-me/register...</h1></div>`}
			${``}
			${``}
			${``}
			${``}
			${``}
			${``}
			${``}
			${``}</div></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5cc2d746.js.map
