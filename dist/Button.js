"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  var children = props.children,
      classNames = props.classNames,
      clickHandler = props.clickHandler;
  return _react.default.createElement("button", {
    type: "button",
    className: classNames || '',
    onClick: clickHandler
  }, children);
};

var _default = Button;
exports.default = _default;