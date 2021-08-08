const fakeInput = document.createElement("div");
fakeInput.setAttribute("type", "text");
fakeInput.setAttribute("tabindex", "-1");
fakeInput.setAttribute("aria-hidden", "true");
fakeInput.style.setProperty("height", "0px");
fakeInput.style.setProperty("width", "0px");
fakeInput.style.setProperty("position", "fixed");
fakeInput.style.setProperty("opacity", "0");
document.body.appendChild(fakeInput);

export default function openKeyboard() {
  fakeInput.focus();
}
