import React from "react";
import { Component } from "./remote-component";
export const RemoteComponent = props => React.createElement(Component, Object.assign({}, props), props.children);
export default RemoteComponent;