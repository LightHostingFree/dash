import { c as create_ssr_component, f as escape, v as validate_component, d as add_attribute } from './index3-8659ab76.js';
import { F as Fa$1 } from './fa-be8be5c2.js';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "" } = $$props;
  let { className = "" } = $$props;
  let { href = "" } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a class="${"btn btn-" + escape(style, true) + " btn-lg btn-block gap-2 bg-[#1e1e1e] shadow-sm transition-all ease-linear duration-300 " + escape(className, true)}"${add_attribute("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="grid place-content-center place-items-center gap-4"><h1 class="h2 font-bold">Please sign in to continue.</h1>
	<p>${escape(data.stats.individualOwners)} people have already registered ${escape(data.stats.subdomains)} subdomains!
	</p>
	${validate_component(Button, "Button").$$render(
    $$result,
    {
      style: "primary",
      className: "",
      href: "/login/in"
    },
    {},
    {
      default: () => {
        return `${validate_component(Fa$1, "Fa").$$render($$result, { icon: faGithub, size: "lg" }, {}, {})}
		Sign in with GitHub
	`;
      }
    }
  )}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1666a74a.js.map
