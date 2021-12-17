import { createRemoteComponent } from "@paciolan/remote-component/dist/createRemoteComponent";
import { createRequires } from "@paciolan/remote-component/dist/createRequires";
import { resolve } from "./remote-component.config";
const requires = createRequires(resolve);
export const Component = createRemoteComponent({
  requires
});