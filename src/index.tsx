import { render } from "solid-js/web";
import openKeyboard from "./openKeyboard";

render(() => <button onClick={openKeyboard}>Click</button>, document.body);
