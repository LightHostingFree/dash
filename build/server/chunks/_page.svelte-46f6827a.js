import { c as create_ssr_component, f as escape, e as each, d as add_attribute, v as validate_component } from './index3-8659ab76.js';
import { F as Fa$1 } from './fa-be8be5c2.js';
import './ProgressBar.svelte_svelte_type_style_lang-9dfb11a6.js';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './index2-0a6b26f5.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let records = data.domain.record || [];
  let availableRecords = [
    { type: "CNAME", allowMultiple: false },
    { type: "A", allowMultiple: true },
    { type: "URL", allowMultiple: false },
    { type: "MX", allowMultiple: true },
    { type: "TXT", allowMultiple: true }
  ];
  records.forEach((r) => {
    r.allowMultiple = availableRecords.find((ar) => ar.type === r.type).allowMultiple;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h2 class="h2">Editing ${escape(data.domain.name)}.is-a.dev</h2>
<br>
${`<div class="flex flex-col gap-5"><select class="select mb-2"><option value="" selected disabled>Add record </option>${each(availableRecords, (record) => {
    return `${!record.allowMultiple && records.find((r) => r.allowMultiple === false) || records.find((r) => r.type === record.type) ? `<option value="" disabled>${escape(record.type)}</option>` : `<option${add_attribute("value", record.type, 0)}>${escape(record.type)}</option>`}`;
  })}</select>
		${records.length > 0 ? `${each(records, (record) => {
    return `<div class="flex items-center gap-2"><label class="label"${add_attribute("for", record.type, 0)}>${escape(record.type)}</label>
					<input class="input" type="text"${add_attribute("placeholder", record.type, 0)}${add_attribute("id", record.type, 0)}${add_attribute("value", record.value || "", 0)}>
					<button class="btn variant-filled-error">${validate_component(Fa$1, "Fa").$$render($$result, { icon: faXmark }, {}, {})}</button>
				</div>`;
  })}

			<button class="btn variant-filled-success mt-5">Save</button>` : `<p>Add a record to your domain to get started.</p>`}</div>`}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-46f6827a.js.map
