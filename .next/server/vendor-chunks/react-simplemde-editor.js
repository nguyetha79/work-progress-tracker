"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-simplemde-editor";
exports.ids = ["vendor-chunks/react-simplemde-editor"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-simplemde-editor/dist/SimpleMdeReact.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/react-simplemde-editor/dist/SimpleMdeReact.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SimpleMdeReact: () => (/* binding */ SimpleMdeReact),\n/* harmony export */   \"default\": () => (/* binding */ SimpleMdeReact_default)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var easymde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! easymde */ \"(ssr)/./node_modules/easymde/src/js/easymde.js\");\n// src/SimpleMdeReact.tsx\n\n\nvar _id = 0;\nvar generateId = () => `simplemde-editor-${++_id}`;\nvar useHandleEditorInstanceLifecycle = ({\n  options,\n  id,\n  currentValueRef,\n  textRef\n}) => {\n  const [editor, setEditor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const imageUploadCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(\n    (file, onSuccess, onError) => {\n      const imageUpload = options == null ? void 0 : options.imageUploadFunction;\n      if (imageUpload) {\n        const _onSuccess = (url) => {\n          onSuccess(url);\n        };\n        imageUpload(file, _onSuccess, onError);\n      }\n    },\n    [options == null ? void 0 : options.imageUploadFunction]\n  );\n  const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(editor);\n  editorRef.current = editor;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    let editor2;\n    if (textRef) {\n      const initialOptions = {\n        element: textRef,\n        initialValue: currentValueRef.current\n      };\n      const imageUploadFunction = (options == null ? void 0 : options.imageUploadFunction) ? imageUploadCallback : void 0;\n      editor2 = new easymde__WEBPACK_IMPORTED_MODULE_1__(\n        Object.assign({}, initialOptions, options, {\n          imageUploadFunction\n        })\n      );\n      setEditor(editor2);\n    }\n    return () => {\n      editor2 == null ? void 0 : editor2.toTextArea();\n      editor2 == null ? void 0 : editor2.cleanup();\n    };\n  }, [textRef, currentValueRef, id, imageUploadCallback, options]);\n  const codemirror = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {\n    return editor == null ? void 0 : editor.codemirror;\n  }, [editor == null ? void 0 : editor.codemirror]);\n  return { editor, codemirror };\n};\nvar SimpleMdeReact = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {\n  const {\n    events,\n    value,\n    options,\n    children,\n    extraKeys,\n    getLineAndCursor,\n    getMdeInstance,\n    getCodemirrorInstance,\n    onChange,\n    id: anId,\n    placeholder,\n    textareaProps,\n    ...rest\n  } = props;\n  const id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => anId ?? generateId(), [anId]);\n  const elementWrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const nonEventChangeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);\n  const currentValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);\n  currentValueRef.current = value;\n  const [textRef, setTextRef] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const { editor, codemirror } = useHandleEditorInstanceLifecycle({\n    options,\n    id,\n    currentValueRef,\n    textRef\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (nonEventChangeRef.current) {\n      editor == null ? void 0 : editor.value(value ?? \"\");\n    }\n    nonEventChangeRef.current = true;\n  }, [editor, value]);\n  const onCodemirrorChangeHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(\n    (_, changeObject) => {\n      if ((editor == null ? void 0 : editor.value()) !== currentValueRef.current) {\n        nonEventChangeRef.current = false;\n        onChange == null ? void 0 : onChange((editor == null ? void 0 : editor.value()) ?? \"\", changeObject);\n      }\n    },\n    [editor, onChange]\n  );\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (options == null ? void 0 : options.autofocus) {\n      codemirror == null ? void 0 : codemirror.focus();\n      codemirror == null ? void 0 : codemirror.setCursor(codemirror == null ? void 0 : codemirror.lineCount(), 0);\n    }\n  }, [codemirror, options == null ? void 0 : options.autofocus]);\n  const getCursorCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {\n    codemirror && (getLineAndCursor == null ? void 0 : getLineAndCursor(codemirror.getDoc().getCursor()));\n  }, [codemirror, getLineAndCursor]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    getCursorCallback();\n  }, [getCursorCallback]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    editor && (getMdeInstance == null ? void 0 : getMdeInstance(editor));\n  }, [editor, getMdeInstance]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    codemirror && (getCodemirrorInstance == null ? void 0 : getCodemirrorInstance(codemirror));\n  }, [codemirror, getCodemirrorInstance, getMdeInstance]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (extraKeys && codemirror) {\n      codemirror.setOption(\n        \"extraKeys\",\n        Object.assign({}, codemirror.getOption(\"extraKeys\"), extraKeys)\n      );\n    }\n  }, [codemirror, extraKeys]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    var _a;\n    const toolbarNode = (_a = elementWrapperRef.current) == null ? void 0 : _a.getElementsByClassName(\n      \"editor-toolbarNode\"\n    )[0];\n    const handler = codemirror && onCodemirrorChangeHandler;\n    if (handler) {\n      toolbarNode == null ? void 0 : toolbarNode.addEventListener(\"click\", handler);\n      return () => {\n        toolbarNode == null ? void 0 : toolbarNode.removeEventListener(\"click\", handler);\n      };\n    }\n    return () => {\n    };\n  }, [codemirror, onCodemirrorChangeHandler]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    codemirror == null ? void 0 : codemirror.on(\"change\", onCodemirrorChangeHandler);\n    codemirror == null ? void 0 : codemirror.on(\"cursorActivity\", getCursorCallback);\n    return () => {\n      codemirror == null ? void 0 : codemirror.off(\"change\", onCodemirrorChangeHandler);\n      codemirror == null ? void 0 : codemirror.off(\"cursorActivity\", getCursorCallback);\n    };\n  }, [codemirror, getCursorCallback, onCodemirrorChangeHandler]);\n  const prevEvents = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(events);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const isNotFirstEffectRun = events !== prevEvents.current;\n    isNotFirstEffectRun && prevEvents.current && Object.entries(prevEvents.current).forEach(([event, handler]) => {\n      handler && (codemirror == null ? void 0 : codemirror.off(event, handler));\n    });\n    events && Object.entries(events).forEach(([event, handler]) => {\n      handler && (codemirror == null ? void 0 : codemirror.on(event, handler));\n    });\n    prevEvents.current = events;\n    return () => {\n      events && Object.entries(events).forEach(([event, handler]) => {\n        handler && (codemirror == null ? void 0 : codemirror.off(event, handler));\n      });\n    };\n  }, [codemirror, events]);\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: `${id}-wrapper`,\n    ...rest,\n    ref: (aRef) => {\n      if (typeof ref === \"function\") {\n        ref(aRef);\n      } else if (ref) {\n        ref.current = aRef;\n      }\n      elementWrapperRef.current = aRef;\n    }\n  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"textarea\", {\n    ...textareaProps,\n    id,\n    placeholder,\n    ref: setTextRef,\n    style: { display: \"none\" }\n  }));\n});\nSimpleMdeReact.displayName = \"SimpleMdeReact\";\nvar SimpleMdeReact_default = SimpleMdeReact;\n\n//# sourceMappingURL=SimpleMdeReact.mjs.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2ltcGxlbWRlLWVkaXRvci9kaXN0L1NpbXBsZU1kZVJlYWN0Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFPZTtBQUNpQjtBQUNoQztBQUNBLDJDQUEyQyxNQUFNO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOEJBQThCLCtDQUFRO0FBQ3RDLDhCQUE4QixrREFBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvQkFBb0IsNkNBQU07QUFDMUI7QUFDQSxFQUFFLGdEQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0NBQVM7QUFDN0Isd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHFCQUFxQiw4Q0FBTztBQUM1QjtBQUNBLEdBQUc7QUFDSCxXQUFXO0FBQ1g7QUFDQSxxQkFBcUIsNkNBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osYUFBYSw4Q0FBTztBQUNwQiw0QkFBNEIsNkNBQU07QUFDbEMsNEJBQTRCLDZDQUFNO0FBQ2xDLDBCQUEwQiw2Q0FBTTtBQUNoQztBQUNBLGdDQUFnQywrQ0FBUTtBQUN4QyxVQUFVLHFCQUFxQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLGdEQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsb0NBQW9DLGtEQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUUsZ0RBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw0QkFBNEIsa0RBQVc7QUFDdkM7QUFDQSxHQUFHO0FBQ0gsRUFBRSxnREFBUztBQUNYO0FBQ0EsR0FBRztBQUNILEVBQUUsZ0RBQVM7QUFDWDtBQUNBLEdBQUc7QUFDSCxFQUFFLGdEQUFTO0FBQ1g7QUFDQSxHQUFHO0FBQ0gsRUFBRSxnREFBUztBQUNYO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsZ0RBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLGdEQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHFCQUFxQiw2Q0FBTTtBQUMzQixFQUFFLGdEQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0gseUJBQXlCLGdEQUFtQjtBQUM1QyxXQUFXLEdBQUc7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsa0JBQWtCLGdEQUFtQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFJRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNpbXBsZW1kZS1lZGl0b3IvZGlzdC9TaW1wbGVNZGVSZWFjdC5tanM/YWZmOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvU2ltcGxlTWRlUmVhY3QudHN4XG5pbXBvcnQgUmVhY3QsIHtcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUVmZmVjdCxcbiAgdXNlTWVtbyxcbiAgdXNlUmVmLFxuICB1c2VTdGF0ZVxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTaW1wbGVNREUgZnJvbSBcImVhc3ltZGVcIjtcbnZhciBfaWQgPSAwO1xudmFyIGdlbmVyYXRlSWQgPSAoKSA9PiBgc2ltcGxlbWRlLWVkaXRvci0keysrX2lkfWA7XG52YXIgdXNlSGFuZGxlRWRpdG9ySW5zdGFuY2VMaWZlY3ljbGUgPSAoe1xuICBvcHRpb25zLFxuICBpZCxcbiAgY3VycmVudFZhbHVlUmVmLFxuICB0ZXh0UmVmXG59KSA9PiB7XG4gIGNvbnN0IFtlZGl0b3IsIHNldEVkaXRvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgaW1hZ2VVcGxvYWRDYWxsYmFjayA9IHVzZUNhbGxiYWNrKFxuICAgIChmaWxlLCBvblN1Y2Nlc3MsIG9uRXJyb3IpID0+IHtcbiAgICAgIGNvbnN0IGltYWdlVXBsb2FkID0gb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5pbWFnZVVwbG9hZEZ1bmN0aW9uO1xuICAgICAgaWYgKGltYWdlVXBsb2FkKSB7XG4gICAgICAgIGNvbnN0IF9vblN1Y2Nlc3MgPSAodXJsKSA9PiB7XG4gICAgICAgICAgb25TdWNjZXNzKHVybCk7XG4gICAgICAgIH07XG4gICAgICAgIGltYWdlVXBsb2FkKGZpbGUsIF9vblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW29wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuaW1hZ2VVcGxvYWRGdW5jdGlvbl1cbiAgKTtcbiAgY29uc3QgZWRpdG9yUmVmID0gdXNlUmVmKGVkaXRvcik7XG4gIGVkaXRvclJlZi5jdXJyZW50ID0gZWRpdG9yO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBlZGl0b3IyO1xuICAgIGlmICh0ZXh0UmVmKSB7XG4gICAgICBjb25zdCBpbml0aWFsT3B0aW9ucyA9IHtcbiAgICAgICAgZWxlbWVudDogdGV4dFJlZixcbiAgICAgICAgaW5pdGlhbFZhbHVlOiBjdXJyZW50VmFsdWVSZWYuY3VycmVudFxuICAgICAgfTtcbiAgICAgIGNvbnN0IGltYWdlVXBsb2FkRnVuY3Rpb24gPSAob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5pbWFnZVVwbG9hZEZ1bmN0aW9uKSA/IGltYWdlVXBsb2FkQ2FsbGJhY2sgOiB2b2lkIDA7XG4gICAgICBlZGl0b3IyID0gbmV3IFNpbXBsZU1ERShcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbE9wdGlvbnMsIG9wdGlvbnMsIHtcbiAgICAgICAgICBpbWFnZVVwbG9hZEZ1bmN0aW9uXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgc2V0RWRpdG9yKGVkaXRvcjIpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZWRpdG9yMiA9PSBudWxsID8gdm9pZCAwIDogZWRpdG9yMi50b1RleHRBcmVhKCk7XG4gICAgICBlZGl0b3IyID09IG51bGwgPyB2b2lkIDAgOiBlZGl0b3IyLmNsZWFudXAoKTtcbiAgICB9O1xuICB9LCBbdGV4dFJlZiwgY3VycmVudFZhbHVlUmVmLCBpZCwgaW1hZ2VVcGxvYWRDYWxsYmFjaywgb3B0aW9uc10pO1xuICBjb25zdCBjb2RlbWlycm9yID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIGVkaXRvciA9PSBudWxsID8gdm9pZCAwIDogZWRpdG9yLmNvZGVtaXJyb3I7XG4gIH0sIFtlZGl0b3IgPT0gbnVsbCA/IHZvaWQgMCA6IGVkaXRvci5jb2RlbWlycm9yXSk7XG4gIHJldHVybiB7IGVkaXRvciwgY29kZW1pcnJvciB9O1xufTtcbnZhciBTaW1wbGVNZGVSZWFjdCA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge1xuICAgIGV2ZW50cyxcbiAgICB2YWx1ZSxcbiAgICBvcHRpb25zLFxuICAgIGNoaWxkcmVuLFxuICAgIGV4dHJhS2V5cyxcbiAgICBnZXRMaW5lQW5kQ3Vyc29yLFxuICAgIGdldE1kZUluc3RhbmNlLFxuICAgIGdldENvZGVtaXJyb3JJbnN0YW5jZSxcbiAgICBvbkNoYW5nZSxcbiAgICBpZDogYW5JZCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICB0ZXh0YXJlYVByb3BzLFxuICAgIC4uLnJlc3RcbiAgfSA9IHByb3BzO1xuICBjb25zdCBpZCA9IHVzZU1lbW8oKCkgPT4gYW5JZCA/PyBnZW5lcmF0ZUlkKCksIFthbklkXSk7XG4gIGNvbnN0IGVsZW1lbnRXcmFwcGVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBub25FdmVudENoYW5nZVJlZiA9IHVzZVJlZih0cnVlKTtcbiAgY29uc3QgY3VycmVudFZhbHVlUmVmID0gdXNlUmVmKHZhbHVlKTtcbiAgY3VycmVudFZhbHVlUmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgY29uc3QgW3RleHRSZWYsIHNldFRleHRSZWZdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHsgZWRpdG9yLCBjb2RlbWlycm9yIH0gPSB1c2VIYW5kbGVFZGl0b3JJbnN0YW5jZUxpZmVjeWNsZSh7XG4gICAgb3B0aW9ucyxcbiAgICBpZCxcbiAgICBjdXJyZW50VmFsdWVSZWYsXG4gICAgdGV4dFJlZlxuICB9KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobm9uRXZlbnRDaGFuZ2VSZWYuY3VycmVudCkge1xuICAgICAgZWRpdG9yID09IG51bGwgPyB2b2lkIDAgOiBlZGl0b3IudmFsdWUodmFsdWUgPz8gXCJcIik7XG4gICAgfVxuICAgIG5vbkV2ZW50Q2hhbmdlUmVmLmN1cnJlbnQgPSB0cnVlO1xuICB9LCBbZWRpdG9yLCB2YWx1ZV0pO1xuICBjb25zdCBvbkNvZGVtaXJyb3JDaGFuZ2VIYW5kbGVyID0gdXNlQ2FsbGJhY2soXG4gICAgKF8sIGNoYW5nZU9iamVjdCkgPT4ge1xuICAgICAgaWYgKChlZGl0b3IgPT0gbnVsbCA/IHZvaWQgMCA6IGVkaXRvci52YWx1ZSgpKSAhPT0gY3VycmVudFZhbHVlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgbm9uRXZlbnRDaGFuZ2VSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICBvbkNoYW5nZSA9PSBudWxsID8gdm9pZCAwIDogb25DaGFuZ2UoKGVkaXRvciA9PSBudWxsID8gdm9pZCAwIDogZWRpdG9yLnZhbHVlKCkpID8/IFwiXCIsIGNoYW5nZU9iamVjdCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbZWRpdG9yLCBvbkNoYW5nZV1cbiAgKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5hdXRvZm9jdXMpIHtcbiAgICAgIGNvZGVtaXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IGNvZGVtaXJyb3IuZm9jdXMoKTtcbiAgICAgIGNvZGVtaXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IGNvZGVtaXJyb3Iuc2V0Q3Vyc29yKGNvZGVtaXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IGNvZGVtaXJyb3IubGluZUNvdW50KCksIDApO1xuICAgIH1cbiAgfSwgW2NvZGVtaXJyb3IsIG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuYXV0b2ZvY3VzXSk7XG4gIGNvbnN0IGdldEN1cnNvckNhbGxiYWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvZGVtaXJyb3IgJiYgKGdldExpbmVBbmRDdXJzb3IgPT0gbnVsbCA/IHZvaWQgMCA6IGdldExpbmVBbmRDdXJzb3IoY29kZW1pcnJvci5nZXREb2MoKS5nZXRDdXJzb3IoKSkpO1xuICB9LCBbY29kZW1pcnJvciwgZ2V0TGluZUFuZEN1cnNvcl0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEN1cnNvckNhbGxiYWNrKCk7XG4gIH0sIFtnZXRDdXJzb3JDYWxsYmFja10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGVkaXRvciAmJiAoZ2V0TWRlSW5zdGFuY2UgPT0gbnVsbCA/IHZvaWQgMCA6IGdldE1kZUluc3RhbmNlKGVkaXRvcikpO1xuICB9LCBbZWRpdG9yLCBnZXRNZGVJbnN0YW5jZV0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvZGVtaXJyb3IgJiYgKGdldENvZGVtaXJyb3JJbnN0YW5jZSA9PSBudWxsID8gdm9pZCAwIDogZ2V0Q29kZW1pcnJvckluc3RhbmNlKGNvZGVtaXJyb3IpKTtcbiAgfSwgW2NvZGVtaXJyb3IsIGdldENvZGVtaXJyb3JJbnN0YW5jZSwgZ2V0TWRlSW5zdGFuY2VdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZXh0cmFLZXlzICYmIGNvZGVtaXJyb3IpIHtcbiAgICAgIGNvZGVtaXJyb3Iuc2V0T3B0aW9uKFxuICAgICAgICBcImV4dHJhS2V5c1wiLFxuICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBjb2RlbWlycm9yLmdldE9wdGlvbihcImV4dHJhS2V5c1wiKSwgZXh0cmFLZXlzKVxuICAgICAgKTtcbiAgICB9XG4gIH0sIFtjb2RlbWlycm9yLCBleHRyYUtleXNdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgdG9vbGJhck5vZGUgPSAoX2EgPSBlbGVtZW50V3JhcHBlclJlZi5jdXJyZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2EuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgIFwiZWRpdG9yLXRvb2xiYXJOb2RlXCJcbiAgICApWzBdO1xuICAgIGNvbnN0IGhhbmRsZXIgPSBjb2RlbWlycm9yICYmIG9uQ29kZW1pcnJvckNoYW5nZUhhbmRsZXI7XG4gICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgIHRvb2xiYXJOb2RlID09IG51bGwgPyB2b2lkIDAgOiB0b29sYmFyTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlcik7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB0b29sYmFyTm9kZSA9PSBudWxsID8gdm9pZCAwIDogdG9vbGJhck5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZXIpO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICB9O1xuICB9LCBbY29kZW1pcnJvciwgb25Db2RlbWlycm9yQ2hhbmdlSGFuZGxlcl0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvZGVtaXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IGNvZGVtaXJyb3Iub24oXCJjaGFuZ2VcIiwgb25Db2RlbWlycm9yQ2hhbmdlSGFuZGxlcik7XG4gICAgY29kZW1pcnJvciA9PSBudWxsID8gdm9pZCAwIDogY29kZW1pcnJvci5vbihcImN1cnNvckFjdGl2aXR5XCIsIGdldEN1cnNvckNhbGxiYWNrKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29kZW1pcnJvciA9PSBudWxsID8gdm9pZCAwIDogY29kZW1pcnJvci5vZmYoXCJjaGFuZ2VcIiwgb25Db2RlbWlycm9yQ2hhbmdlSGFuZGxlcik7XG4gICAgICBjb2RlbWlycm9yID09IG51bGwgPyB2b2lkIDAgOiBjb2RlbWlycm9yLm9mZihcImN1cnNvckFjdGl2aXR5XCIsIGdldEN1cnNvckNhbGxiYWNrKTtcbiAgICB9O1xuICB9LCBbY29kZW1pcnJvciwgZ2V0Q3Vyc29yQ2FsbGJhY2ssIG9uQ29kZW1pcnJvckNoYW5nZUhhbmRsZXJdKTtcbiAgY29uc3QgcHJldkV2ZW50cyA9IHVzZVJlZihldmVudHMpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlzTm90Rmlyc3RFZmZlY3RSdW4gPSBldmVudHMgIT09IHByZXZFdmVudHMuY3VycmVudDtcbiAgICBpc05vdEZpcnN0RWZmZWN0UnVuICYmIHByZXZFdmVudHMuY3VycmVudCAmJiBPYmplY3QuZW50cmllcyhwcmV2RXZlbnRzLmN1cnJlbnQpLmZvckVhY2goKFtldmVudCwgaGFuZGxlcl0pID0+IHtcbiAgICAgIGhhbmRsZXIgJiYgKGNvZGVtaXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IGNvZGVtaXJyb3Iub2ZmKGV2ZW50LCBoYW5kbGVyKSk7XG4gICAgfSk7XG4gICAgZXZlbnRzICYmIE9iamVjdC5lbnRyaWVzKGV2ZW50cykuZm9yRWFjaCgoW2V2ZW50LCBoYW5kbGVyXSkgPT4ge1xuICAgICAgaGFuZGxlciAmJiAoY29kZW1pcnJvciA9PSBudWxsID8gdm9pZCAwIDogY29kZW1pcnJvci5vbihldmVudCwgaGFuZGxlcikpO1xuICAgIH0pO1xuICAgIHByZXZFdmVudHMuY3VycmVudCA9IGV2ZW50cztcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZXZlbnRzICYmIE9iamVjdC5lbnRyaWVzKGV2ZW50cykuZm9yRWFjaCgoW2V2ZW50LCBoYW5kbGVyXSkgPT4ge1xuICAgICAgICBoYW5kbGVyICYmIChjb2RlbWlycm9yID09IG51bGwgPyB2b2lkIDAgOiBjb2RlbWlycm9yLm9mZihldmVudCwgaGFuZGxlcikpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSwgW2NvZGVtaXJyb3IsIGV2ZW50c10pO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGlkOiBgJHtpZH0td3JhcHBlcmAsXG4gICAgLi4ucmVzdCxcbiAgICByZWY6IChhUmVmKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJlZihhUmVmKTtcbiAgICAgIH0gZWxzZSBpZiAocmVmKSB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gYVJlZjtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnRXcmFwcGVyUmVmLmN1cnJlbnQgPSBhUmVmO1xuICAgIH1cbiAgfSwgLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgLi4udGV4dGFyZWFQcm9wcyxcbiAgICBpZCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICByZWY6IHNldFRleHRSZWYsXG4gICAgc3R5bGU6IHsgZGlzcGxheTogXCJub25lXCIgfVxuICB9KSk7XG59KTtcblNpbXBsZU1kZVJlYWN0LmRpc3BsYXlOYW1lID0gXCJTaW1wbGVNZGVSZWFjdFwiO1xudmFyIFNpbXBsZU1kZVJlYWN0X2RlZmF1bHQgPSBTaW1wbGVNZGVSZWFjdDtcbmV4cG9ydCB7XG4gIFNpbXBsZU1kZVJlYWN0LFxuICBTaW1wbGVNZGVSZWFjdF9kZWZhdWx0IGFzIGRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TaW1wbGVNZGVSZWFjdC5tanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-simplemde-editor/dist/SimpleMdeReact.mjs\n");

/***/ })

};
;