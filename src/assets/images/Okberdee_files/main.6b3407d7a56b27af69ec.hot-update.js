webpackHotUpdate("main",{

/***/ "./src/components/sections/TableSearch.js":
/*!************************************************!*\
  !*** ./src/components/sections/TableSearch.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BeautifyNumCopy; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tabletop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tabletop */ "./node_modules/tabletop/src/tabletop.js");
/* harmony import */ var tabletop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tabletop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
/* harmony import */ var _partials_SectionHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/SectionHeader */ "./src/components/sections/partials/SectionHeader.js");
/* harmony import */ var _elements_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/Image */ "./src/components/elements/Image.js");
var _jsxFileName = "/Users/chanutwongtripipat/Documents/Freelancer/bn/src/components/sections/TableSearch.js";






function checkNetworkImage(data) {
  if (data === "ais" || data === "AIS") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_Image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: __webpack_require__(/*! ./../../assets/images/ais.png */ "./src/assets/images/ais.png"),
    alt: "Features tile icon 01",
    width: 48,
    height: 48,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  });else if (data === "true" || data === "TRUE") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_Image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: __webpack_require__(/*! ./../../assets/images/truemove.png */ "./src/assets/images/truemove.png"),
    alt: "Features tile icon 01",
    width: 48,
    height: 48,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  });else if (data === "dtac" || data === "DTAC") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_Image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: __webpack_require__(/*! ./../../assets/images/dtac.png */ "./src/assets/images/dtac.png"),
    alt: "Features tile icon 01",
    width: 48,
    height: 48,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  });
}

class BeautifyNumCopy extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      users: []
    };
  }

  componentDidMount() {
    // fetch(
    tabletop__WEBPACK_IMPORTED_MODULE_1___default.a.init({
      key: "1xMH3fcrfZJiS1hrO5LQhSuwg6oE6vGv6YUoDL6pGA-I",
      simpleSheet: true
    }) // )
    // .then((res) => res.json())
    .then(data => {
      let dataFromApi = data.map(number => {
        return {
          phoneNumber: number.phoneNumber,
          sum: number.sum,
          network: number.network,
          price: number.price
        };
      });
      this.setState({
        users: dataFromApi
      });
    }).catch(err => console.warn(err));
  }

  render() {
    const dataRender = {
      columns: [{
        label: "หมายเลขโทรศัพท์",
        field: "phoneNumber",
        sort: "asc",
        width: 300
      }, {
        field: "sum",
        sort: "asc",
        width: 100
      }, {
        label: "เครือข่าย",
        field: "network",
        sort: "asc",
        width: 270
      }, {
        label: "ราคา",
        field: "price",
        sort: "asc",
        width: 200
      }],
      rows: [...this.state.users.map((data, i) => ({
        phoneNumber: "  " + JSON.stringify(data.phoneNumber).replace(/"|\n|\t|\r/g, ""),
        sum: JSON.stringify(data.sum).replace(/"/g, ""),
        network: checkNetworkImage(JSON.stringify(data.network).replace(/"/gi, "")),
        price: JSON.stringify(data.price).replace(/"/g, "")
      }))]
    };
    const data = dataRender;
    const sectionHeader = {
      title: "ค้นหาเบอร์ถูกใจ"
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section-black",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_SectionHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: sectionHeader,
      className: "center-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdbreact__WEBPACK_IMPORTED_MODULE_2__["MDBDataTableV5"], {
      striped: true,
      bordered: true,
      responsive: true,
      small: true,
      searching: true,
      pagesAmount: 4,
      hover: true,
      entriesOptions: [5, 20, 25],
      entries: 20,
      data: data,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }
    }))));
  }

}

/***/ })

})
//# sourceMappingURL=main.6b3407d7a56b27af69ec.hot-update.js.map