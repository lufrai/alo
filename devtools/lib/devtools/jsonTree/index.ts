import { el, list, setChildren, text, mount } from "redom";
import isPlainObject from "lodash/isPlainObject";

const isPrimitive = function (value) {
  const isObject = isPlainObject(value);
  const isArray = !isObject && Array.isArray(value);

  return !isObject && !isArray;
};

export class JsonTree {
  el = el("div", {
    style: {
      "font-family": '"Courier New", Courier, monospace',
      padding: "0px",
    },
  });
  type = "primitive";
  value;
  showItemDefault;
  constructor(value: any, showItemDefault = false) {
    this.showItemDefault = showItemDefault;
    this.value = value;
    this.init();
  }

  init() {
    const value = this.value;

    const isObject = isPlainObject(value);
    const isArray = !isObject && Array.isArray(value);

    if (isObject || isArray) {
      this.type = isArray ? "array" : "object";

      const self = this;

      const propsList = list("table", function (_, [key, value]) {
        const primitive = isPrimitive(value);

        const keyLabel = primitive ? `${key}:` : key;
        const keyColor = "#77bbee";

        let rootEl;

        if (primitive) {
          rootEl = el("tr", [
            el(
              "td",
              {
                style: {
                  color: keyColor,
                  padding: "3px 3px 3px 21px",
                  "margin-right": "3px",
                  "vertical-align": "top",
                },
              },
              keyLabel
            ),
            el("td", new JsonTree(value)),
          ]);
        } else {
          let itemParent;
          let showItem = self.showItemDefault;
          let update = function () {
            keyEl.textContent = `${showItem ? "v " : "> "}${keyLabel}`;
            if (showItem) {
              setChildren(itemParent, new JsonTree(value) as any);
            } else {
              setChildren(itemParent, []);
            }
          };
          const keyEl = el(
            "a",
            {
              style: { outline: "none" },
              href: "#!",
              onclick: () => {
                showItem = !showItem;
                update();
              },
            },
            "> " + keyLabel
          );
          keyEl.style.color = keyColor;
          keyEl.style.textDecoration = "none";
          rootEl = el("tr", [
            el(
              "td",
              { style: { "vertical-align": "top", padding: "3px" } },
              keyEl
            ),
            (itemParent = el("td", { style: { padding: "3px" } })),
          ]);
          update();
        }

        return { el: rootEl };
      } as any);

      let entries = Object.entries(value);
      let length = entries.length;

      propsList.update(Object.entries(value));
      propsList.el.style["padding-left"] = "8px";
      propsList.el.style["border-left"] = "1px solid #333";

      const startEndElStyle = { color: "#799" };
      const lengthText = length > 0 ? "len=" + value.length : "";
      const startChar = this.type === "array" ? "[ " + lengthText : "{";
      const endChar = this.type === "array" ? "]" : "}";

      if (length === 0) {
        setChildren(this.el, [
          el("div", { style: startEndElStyle }, startChar + " " + endChar),
        ]);

        return;
      }

      setChildren(this.el, [
        el("div", { style: startEndElStyle }, startChar),
        propsList,
        el("div", { style: startEndElStyle }, endChar),
      ]);

      return;
    }

    this.el.style["border-radius"] = "3px";
    this.el.style["padding"] = "3px";
    this.el.style["background-color"] = "#31383a";
    this.el.style["color"] = "white";
    this.el.style["float"] = "left";

    if (value === null) {
      this.el.textContent = "null";
      return;
    }

    if (value === undefined) {
      this.el.textContent = "undefined";
      return;
    }

    let stringifiedValue =
      typeof value === "string"
        ? `"${value}"`
        : JSON.stringify(value, null, "  ");
    mount(
      this.el,
      el(
        "pre",
        {
          style: {
            margin: "0",
            fontFamily: "inherit",
            color: "inherit",
            fontSize: "inherit",
          },
        },
        stringifiedValue
      )
    );
  }
}
