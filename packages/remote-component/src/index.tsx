import React from "react";

import { Component } from "./remote-component";

export const RemoteComponent = (props: any) => (
  <Component {...props}>{props.children}</Component>
);

export default RemoteComponent;
