"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(props) {
  var children = props.children,
      childrenClasses = props.childrenClasses,
      childrenStyles = props.childrenStyles,
      containerClasses = props.containerClasses,
      containerStyles = props.containerStyles,
      headerClasses = props.headerClasses,
      headerStyles = props.headerStyles,
      headerText = props.headerText;
  return _react.default.createElement("div", {
    className: "react-component-library__card ".concat(containerClasses || ''),
    style: containerStyles || {}
  }, _react.default.createElement("h1", {
    className: "react-component-library__card__header ".concat(headerClasses || ''),
    style: headerStyles || {}
  }, headerText), _react.default.createElement("div", {
    className: "react-component-library__card__children ".concat(childrenClasses || ''),
    style: childrenStyles || {}
  }, children));
};

var _default = Card;
exports.default = _default;