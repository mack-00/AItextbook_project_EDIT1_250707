window.apnExeFile = {
  CTXT: { layoutID: 1 },
  property: {
    ver: "1.0",
    denyCloneLocal: true,
    allowClearTimeout: true,
    denyWidgetStartEvent: true,
    denyInvisibleIntersect: true,
    fixBookStartProcess: true,
    allowImmediateContentLoad: true,
    fixBookPageLayout: true,
    fixOveralyRun: true,
    fix2SideBookCase1: true,
    fixWgtPut: true,
    fixScreenPadding: true,
    corpID: "",
    accountID: "",
    title: "[게임으로 정리하기] Ⅴ. 디지털 문화",
    categoryId: "",
    type: "P",
    id: "3d9ae1c938a048b8b3cf2554e2e96169",
    createDate: "20250508174159",
  },
  pages: {
    1: {
      UI: {
        title: "Page 1",
        order: 2,
        apnCExe: { evPch: "" },
        CExe: {
          apxTdata: [{ data: {}, desc: "", id: "", type: "" }],
          apxTdataF: [
            { id: "", type: "", desc: "", json: { size: 0, data: "" } },
          ],
          apxTdataDesc: "",
        },
      },
      objects: {
        "9A1_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 100000001,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI08b20703dbbf4bfb8d0570b13230823c_png",
                C: 0,
                A: "transparent",
                a: false,
              },
            },
          },
          init: {
            position: { x: 0, y: 0 },
            shape: { type: 1, w: 1600, h: 900 },
            cx: 0,
            cy: 0,
          },
        },
        "5169A1_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332814,
            data: {
              properties: { attrs: { ofl: "", v: 2 } },
              wgtID: "apn.wgt.singleText",
              wgtTitle: "Text",
              styles: {
                B: null,
                A: null,
                T: 0,
                W: "#A782CF",
                Q: "게임으로 정리하기",
                L: "#FFFFFF",
                K: "150px",
                k: "t$title",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 184, y: 118 },
            shape: { type: 1, w: 1231, h: 203 },
            cx: 0,
            cy: 0,
          },
        },
        "5170A1_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332815,
            data: {
              properties: { attrs: { ofl: "", v: 2 } },
              wgtID: "apn.wgt.singleText",
              wgtTitle: "Text",
              styles: {
                B: null,
                A: null,
                T: 0,
                W: "#FFFFFF",
                Q: "문제를 풀어 캐릭터를 성장시켜라!",
                L: "#4d9dab",
                K: "55px",
                k: "t$sub_title",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 386, y: 345 },
            shape: { type: 1, w: 890, h: 114 },
            cx: 0,
            cy: 0,
          },
        },
        "5171A1_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332816,
            data: {
              properties: { attrs: { ofl: "", v: 2 } },
              wgtID: "apn.wgt.singleText",
              wgtTitle: "Text",
              styles: {
                B: null,
                A: null,
                T: 0,
                Q: "게임 시작",
                J: "WAGURI",
                K: "54px",
                L: "#FFFFFF",
                W: "#C14000",
                j: "pointer",
                k: "t$start",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 417, y: 740 },
            shape: { type: 1, w: 355, h: 125 },
            cx: 0,
            cy: 0,
          },
          ITRs: [
            {
              action: "LTP",
              event: "tapStart",
              from: { pageID: "1", objectID: "5171A1_" },
              to: { type: "1", reset: true, pageID: "3" },
              transit: {},
              order: 0,
            },
          ],
        },
        "5172A1_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332817,
            data: {
              properties: { attrs: { ofl: "", v: 2 } },
              wgtID: "apn.wgt.singleText",
              wgtTitle: "Text",
              styles: {
                B: null,
                A: null,
                T: 0,
                Q: "게임 방법",
                J: "WAGURI",
                K: "54px",
                L: "#FFFFFF",
                W: "#c14000",
                j: "pointer",
                k: "t$howto",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 796, y: 740 },
            shape: { type: 1, w: 355, h: 125 },
            cx: 0,
            cy: 0,
          },
          ITRs: [
            {
              action: "LTP",
              event: "tapStart",
              from: { pageID: "1", objectID: "5172A1_" },
              to: { type: "1", reset: true, pageID: "2" },
              transit: {},
              order: 0,
              ui: {},
            },
          ],
        },
      },
      module: "apn.CFlowPage",
      BG: { fillStyle: "#ffffff" },
      SPT: {
        pageLoad:
          '// 타이틀\nconst elTitle = $W("t$title").tag; // 또는 $W("t$title").tag\n\nelTitle.style.webkitTextStroke = \'12px #4D9DAB\'; // Chrome, Safari\nelTitle.style.textStroke = \'12px #4D9DAB\';        // 표준 속성 (일부 Firefox, Edge)\n//elTitle.style.letterSpacing = \'150px\';\n\n// const circleType = new CircleType(elTitle);\n// circleType.radius(3500);\n\n// 서브 타이틀\nconst elSubTitle = $W("t$sub_title").tag;\n\nelSubTitle.style.webkitTextStroke = \'2px #FFFFFF\';\nelSubTitle.style.textStroke = \'2px #FFFFFF\';\n//elSubTitle.style.textShadow = \'6px 6px #ffffff\';\n\nconst elStart = $W("t$start").tag;\n\nelStart.style.webkitTextStroke = \'4px #C14000\';\nelStart.style.textStroke = \'4px #C14000\';\nelStart.id = "btn_start";\n\nconst elHowto = $W("t$howto").tag;\n\nelHowto.style.webkitTextStroke = \'4px #C14000\';\nelHowto.style.textStroke = \'4px #C14000\';\nelHowto.id = "btn_howto";\n\nwindow.document.addEventListener(\'contextmenu\', function (e) {\n  e.stopPropagation(); // 내부에서 막아도 우선권을 가짐\n}, true);\n\nwindow.document.oncontextmenu = null;\n\nelTitle.setAttribute("tabindex",1);\nelSubTitle.setAttribute("tabindex",2);\nelStart.setAttribute("tabindex",3);\nelHowto.setAttribute("tabindex",4);\n\ndocument.addEventListener(\'keydown\', function (e) {\n    if (e.key === \'Enter\') {\n      const activeEl = document.activeElement;\n      if( activeEl.id === "btn_start") {\n          File.browse("pages").forEach((page)=>{\n            if( page.label == "Page 3" ) {\n                linkTo(page.id, {reset:true});\n            }\n          });\n      } else if( activeEl.id === "btn_howto") {\n          File.browse("pages").forEach((page)=>{\n            if( page.label == "Page 2" ) {\n                linkTo(page.id, {reset:true});\n            }\n          });\n      }\n    }\n  });',
      },
    },
    2: {
      UI: { title: "Page 2", order: 3 },
      objects: {
        "103A2_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332091,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI05b2e03cfb3046629c313d937bda76bb_png",
                C: 0,
                A: "transparent",
                a: false,
              },
            },
          },
          init: {
            position: { x: 0, y: 0 },
            shape: { type: 1, w: 1600, h: 900 },
            cx: 0,
            cy: 0,
          },
        },
        "193A2_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332097,
            data: {
              properties: {
                attrs: {
                  cfg: {
                    images: {
                      normal: {
                        mediaID: "RIa240cd9aaa3c4bf69e2800a45ebd792a_png",
                      },
                      down: {
                        mediaID: "RIa240cd9aaa3c4bf69e2800a45ebd792a_png",
                      },
                      hover: {
                        mediaID: "RIa240cd9aaa3c4bf69e2800a45ebd792a_png",
                      },
                      disabled: {},
                      disabledDown: {},
                      disabledHover: {},
                      checked: {},
                      checkedD: {},
                      checkedH: {},
                    },
                    clr: { disabled: null, down: null, hover: null },
                    ttip: "",
                    hvrSync: "",
                  },
                  selectType: "",
                  btnV: 2,
                  autoKeepSize: false,
                },
                state: "normal",
              },
              wgtID: "ux.wgt.btnImage",
              wgtTitle: "Button",
              styles: {
                mediaID: "RIa240cd9aaa3c4bf69e2800a45ebd792a_png",
                C: 0,
                A: "transparent",
                a: false,
              },
            },
          },
          init: {
            position: { x: 1280.62890625, y: 49.5 },
            shape: { type: 1, w: 204.7421875, h: 73 },
            cx: 0,
            cy: 0,
          },
        },
        "5219A2_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332822,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Multiline Text",
              styles: {
                B: null,
                A: null,
                O: true,
                U: true,
                T: 0,
                K: "34px",
                Q: "① 게임이 시작되면 캐릭터는 달리기 시작하고, 정류장에 도착할 때마다 문제를 푼다.\n② 첫 번째 시도에서 정답을 맞히면 캐릭터 진화 구슬을 획득하게 된다.\n     만약 두 번째 이상 시도한 후 정답을 맞히면 문제에 별 모양으로 표시되고, 진화 구슬을 \n     획득하지 못한다.\n③ 모든 문제를 해결하면 획득한 구슬이 화면에 표시된다.\n④ ‘캐릭터 성장’ 버튼을 누르면 획득한 구슬의 개수에 따라 캐릭터가 다르게 성장한다.\n     문제를 많이 맞힐수록 더 강력한 캐릭터로 성장한다.",
                R: "left",
                i: 5,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 124, y: 998 },
            shape: { type: 1, w: 1277, h: 364 },
            cx: 0,
            cy: 0,
          },
        },
        "5913A2_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332862,
            data: {
              properties: { attrs: { ofl: "", v: 2 } },
              wgtID: "apn.wgt.singleText",
              wgtTitle: "Text",
              styles: {
                B: null,
                A: null,
                T: 0,
                W: "#A782CF",
                Q: "게임 설명",
                L: "#FFFFFF",
                K: "70px",
                k: "t$title",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 559, y: 21 },
            shape: { type: 1, w: 482, h: 118 },
            cx: 0,
            cy: 0,
          },
        },
        "5914A2_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332863,
            data: {
              properties: { attrs: { ofl: "", v: 2 } },
              wgtID: "apn.wgt.singleText",
              wgtTitle: "Text",
              styles: {
                B: null,
                A: null,
                T: 0,
                W: "#A782CF",
                Q: "1. 게임 목표",
                L: "#FFFFFF",
                K: "36px",
                k: "t$sub_title_1",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 185, y: 121 },
            shape: { type: 1, w: 198, h: 74 },
            cx: 0,
            cy: 0,
          },
        },
        "5915A2_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332864,
            data: {
              properties: { attrs: { ofl: "", v: 2 } },
              wgtID: "apn.wgt.singleText",
              wgtTitle: "Text",
              styles: {
                B: null,
                A: null,
                T: 0,
                Q: "각 단계마다 제시된 문제를 해결하여 캐릭터를 성장시킨다.",
                K: "34px",
                R: "left",
                k: "mt$text_1",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 170, y: 225 },
            shape: { type: 1, w: 953, h: 52 },
            cx: 0,
            cy: 0,
          },
        },
        "5916A2_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332865,
            data: {
              properties: { attrs: { ofl: "", v: 2 } },
              wgtID: "apn.wgt.singleText",
              wgtTitle: "Text",
              styles: {
                B: null,
                A: null,
                T: 0,
                W: "#A782CF",
                Q: "2. 게임 진행",
                L: "#FFFFFF",
                K: "36px",
                k: "t$sub_title_2",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 191, y: 355 },
            shape: { type: 1, w: 198, h: 74 },
            cx: 0,
            cy: 0,
          },
        },
        "5917A2_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332866,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Multiline Text",
              styles: {
                B: null,
                A: null,
                O: true,
                U: true,
                T: 0,
                K: "34px",
                Q: "① 게임이 시작되면 캐릭터는 움직이기 시작하고, 정류장에 도착할 때마다 문제를 푼다.",
                R: "left",
                k: "mt$text_2",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 179, y: 457 },
            shape: { type: 1, w: 1260, h: 40 },
            cx: 0,
            cy: 0,
          },
        },
        "5918A2_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332867,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Multiline Text",
              styles: {
                B: null,
                A: null,
                O: true,
                U: true,
                T: 0,
                K: "34px",
                Q: "② 첫 번째 시도에서 정답을 맞히면 캐릭터 성장 구슬을 획득하게 된다.",
                R: "left",
                k: "mt$text_3",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 179, y: 515 },
            shape: { type: 1, w: 1260, h: 40 },
            cx: 0,
            cy: 0,
          },
        },
        "5919A2_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332868,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Multiline Text",
              styles: {
                B: null,
                A: null,
                O: true,
                U: true,
                T: 0,
                K: "34px",
                Q: "만약 두 번 이상 시도하여 정답을 맞히면 문제에 별 모양으로 표시되고, 성장 구슬을 획득하지 못한다.",
                R: "left",
                k: "mt$text_4",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 219.6451612903226, y: 574.0769230769233 },
            shape: { type: 1, w: 1185, h: 80 },
            cx: 0,
            cy: 0,
          },
        },
        "5920A2_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332869,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Multiline Text",
              styles: {
                B: null,
                A: null,
                O: true,
                U: true,
                T: 0,
                K: "34px",
                Q: "③ 모든 문제를 풀면 획득한 구슬이 화면에 표시된다.",
                R: "left",
                k: "mt$text_5",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 179, y: 672 },
            shape: { type: 1, w: 1260, h: 40 },
            cx: 0,
            cy: 0,
          },
        },
        "5921A2_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332870,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Multiline Text",
              styles: {
                B: null,
                A: null,
                O: true,
                U: true,
                T: 0,
                K: "34px",
                Q: "④ ‘캐릭터 성장’ 버튼을 누르면 획득한 구슬의 개수에 따라 캐릭터가 다르게 성장한다.",
                R: "left",
                k: "mt$text_6",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 179, y: 730 },
            shape: { type: 1, w: 1260, h: 40 },
            cx: 0,
            cy: 0,
          },
        },
        "5922A2_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332871,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Multiline Text",
              styles: {
                B: null,
                A: null,
                O: true,
                U: true,
                T: 0,
                K: "34px",
                Q: "문제를 많이 맞힐수록 더 강력한 캐릭터로 성장한다.",
                R: "left",
                k: "mt$text_7",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 221, y: 788 },
            shape: { type: 1, w: 1218, h: 40 },
            cx: 0,
            cy: 0,
          },
        },
        "5923A2_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332872,
            data: {
              properties: { attrs: { ofl: "", v: 2 } },
              wgtID: "apn.wgt.singleText",
              wgtTitle: "Text",
              styles: {
                B: null,
                A: null,
                T: 0,
                J: "WAGURI",
                Q: "닫기",
                L: "#FFFFFF",
                k: "t$close",
                K: "35px",
                j: "pointer",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1281.5, y: 51.5 },
            shape: { type: 1, w: 203, h: 69 },
            cx: 0,
            cy: 0,
          },
          ITRs: [
            {
              action: "LTP",
              event: "tapStart",
              from: { pageID: "2", objectID: "5923A2_" },
              to: { type: "1", reset: true, pageID: "1" },
              transit: {},
              order: 0,
            },
          ],
        },
      },
      module: "apn.CFlowPage",
      BG: { fillStyle: "#ffffff" },
      SPT: {
        pageLoad:
          '// 타이틀\nconst elTitle = $W("t$title").tag;\n\nelTitle.style.webkitTextStroke = \'5px #522817\';\nelTitle.style.textStroke = \'5px #522817\';\n\n// 닫기 버튼\nconst elClose = $W("t$close").tag;\n\nelClose.id = "btn_close";\nelClose.style.webkitTextStroke = \'3px #C14000\';\nelClose.style.textStroke = \'3px #C14000\';\n\nelTitle.setAttribute("tabindex",5);\n$W("t$sub_title_1").tag.setAttribute("tabindex",6);\n$W("mt$text_1").tag.setAttribute("tabindex",7);\n$W("t$sub_title_2").tag.setAttribute("tabindex",8);\n$W("mt$text_2").tag.childNodes[0].childNodes[0].setAttribute("tabindex",9);\n$W("mt$text_3").tag.childNodes[0].childNodes[0].setAttribute("tabindex",10);\n$W("mt$text_4").tag.childNodes[0].childNodes[0].setAttribute("tabindex",11);\n$W("mt$text_5").tag.childNodes[0].childNodes[0].setAttribute("tabindex",12);\n$W("mt$text_6").tag.childNodes[0].childNodes[0].setAttribute("tabindex",13);\n$W("mt$text_7").tag.childNodes[0].childNodes[0].setAttribute("tabindex",14);\nelClose.setAttribute("tabindex",15);\n\ndocument.addEventListener(\'keydown\', function (e) {\n    if (e.key === \'Enter\') {\n      const activeEl = document.activeElement;\n      if( activeEl.id === "btn_close") {\n          File.browse("pages").forEach((page)=>{\n            if( page.label == "Page 1" ) {\n                linkTo(page.id, {reset:true});\n            }\n          });\n      }\n    }\n  });',
      },
    },
    3: {
      UI: { title: "Page 3", order: 4 },
      objects: {
        "2860A3_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101332319,
            data: {
              properties: { attrs: { ofl: "", Mode: "" } },
              wgtID: "apn.wgt.layerContainer",
              wgtTitle: "Multi-layer Container",
              styles: { state: "1", C: 0, k: "mlc$scene" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 0, y: 0 },
            shape: { type: 1, w: 1600, h: 900 },
            cx: 0,
            cy: 0,
          },
          layout: {
            children: ["2861A3_", "2918A3_", "2956A3_"],
            layers: {
              1: { title: "Layer1", id: "2861A3_" },
              2: { title: "Layer2", id: "2918A3_" },
              3: { title: "Layer3", id: "2956A3_" },
            },
            layerIndex: 3,
          },
        },
        "2861A3_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332320 },
          init: {
            position: { x: 0, y: 0 },
            shape: { type: 1, w: 1600, h: 900 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["2870A3_", "2872A3_", "7104A3_"] },
        },
        "2870A3_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332321,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIbb99d6e957bc4b058e86223bb143fa77_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 0, y: 0 },
            shape: { type: 1, w: 1600, h: 900 },
            cx: 0,
            cy: 0,
          },
          ITRs: [
            {
              event: "flickLeft",
              action: "LTP",
              from: { objectID: "2870A3_", pageID: "3" },
              to: { pageID: "5", type: "1" },
              transit: {},
            },
          ],
        },
        "2872A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332323,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_1" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 434, y: 606 },
            shape: { type: 1, w: 266, h: 251 },
            cx: 0,
            cy: 0,
          },
        },
        "2918A3_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332325 },
          init: {
            position: { x: 0, y: 0 },
            shape: { type: 1, w: 1600, h: 900 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["2941A3_", "7119A3_", "7120A3_", "7121A3_"] },
        },
        "2941A3_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332326,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIbaf970ffa8de45b7bcbc960864feab81_png",
                C: 0,
                A: "transparent",
                a: false,
              },
            },
          },
          init: {
            position: { x: 0, y: 0 },
            shape: { type: 1, w: 1600, h: 900 },
            cx: 0,
            cy: 0,
          },
        },
        "2956A3_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332327 },
          init: {
            position: { x: 0, y: 0 },
            shape: { type: 1, w: 1600, h: 900 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["2979A3_", "4512A3_", "7136A3_", "7137A3_"] },
        },
        "2979A3_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332328,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI58b287ecbd084d4bbcc67326400258c0_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 0, y: 0 },
            shape: { type: 1, w: 1600, h: 900 },
            cx: 0,
            cy: 0,
          },
        },
        "3026A3_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332329,
            data: {
              properties: {
                attrs: {
                  apxAnimate: true,
                  cfg: {
                    frames: [
                      {
                        sprite: {
                          mediaID: "RId2696e714c8845f980bdb409c16a65de_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1397595dda6e4ae4b42cd64250ee6fe0_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9ad638a3a4734546a9b88f34f930fa73_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb21b2d0415904060b861ca4ec75ec52b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6c0df75c9bc24dcdbdc29f007fa23205_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIfcd3c36d88a943a7a0cffd7100bbbbd2_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI055abee8df564334b8f99a09311b0329_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId5eb6e47ef174674ba95ce315a375569_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1d0b72d7d6d743b58cc09922b275fb04_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6ba50d27f2e14ba993badc5e373bd2a1_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI949b799c10f047fab2a80230e90ffbe5_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIdef1697a4eb84d46b4c5e0b027b8678d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId3f2f6ed3cf84f018c10314457ce82a4_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI191bd48081e4439bae0b5683fe0ac7e9_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIfe735d8dd1914b38980bcc84833a89df_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI85644285638b48719cca8b8f581059fc_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0ebbce1581dd47f290bf7c70deb358d9_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6a4e952263f247c3a46e47b6791132b4_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIfef9727a5057471c92b69a778c9607b8_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc607b269e76f441eb80cd6f5a5a14d2b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIe26ecd2c4ec049928bc2cc41bb911c09_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId5750f8664d241baa93c30e1c730815c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI230d98e3323747ab86270122f9fd8a1c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIaf78bfb6f5d648a98446131fa6414a23_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIfba438c2783842babe907c96436e2103_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3fd5ed321fd746e8b0896ed44bb1f051_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI68888bf2ebc34e50914cd6505da9a1f3_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIdb7fe165073949eeb1c206c2530d1101_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIbc30b1f9e87844e0ac3b4084ff40599f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI31cb8f1d78e3441fb1c398521856e1c8_png",
                        },
                        duration: "42",
                      },
                    ],
                    idStep: "",
                  },
                },
                state: "play",
              },
              wgtID: "ux.wgt.imgSprite",
              wgtTitle: "Sprite Images Animation",
              styles: {
                mediaID: "RId2696e714c8845f980bdb409c16a65de_png",
                a: false,
                k: "sia$char",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 92, y: 603 },
            shape: { type: 1, w: 266, h: 251 },
            cx: 0,
            cy: 0,
          },
          SPT: {},
        },
        "4512A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332458,
            data: {
              properties: { attrs: { ofl: "", v: 2 } },
              wgtID: "apn.wgt.singleText",
              wgtTitle: "Text",
              styles: {
                B: null,
                A: null,
                T: 0,
                Q: "목적지",
                L: "#FFFFFF",
                K: "33px",
              },
            },
          },
          init: {
            position: { x: 1326, y: 436 },
            shape: { type: 1, w: 221, h: 55 },
            cx: 0,
            cy: 0,
          },
        },
        "4665A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332811,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "rgba(0,0,0,0.8)", k: "i$dim", C: 0 },
            },
          },
          init: {
            position: { x: 1600, y: 0 },
            shape: { type: 1, w: 1600, h: 900 },
            cx: 0,
            cy: 0,
          },
        },
        "7104A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332940,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_2" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1016, y: 508 },
            shape: { type: 1, w: 266, h: 251 },
            cx: 0,
            cy: 0,
          },
        },
        "7119A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332941,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_3" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 460, y: 626 },
            shape: { type: 1, w: 266, h: 251 },
            cx: 0,
            cy: 0,
          },
        },
        "7120A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332942,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_4" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 900, y: 460 },
            shape: { type: 1, w: 266, h: 251 },
            cx: 0,
            cy: 0,
          },
        },
        "7121A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332943,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_5" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1258, y: 588 },
            shape: { type: 1, w: 266, h: 251 },
            cx: 0,
            cy: 0,
          },
        },
        "7136A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332944,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_6" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 273, y: 628 },
            shape: { type: 1, w: 266, h: 251 },
            cx: 0,
            cy: 0,
          },
        },
        "7137A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332945,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_7" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1131, y: 548 },
            shape: { type: 1, w: 266, h: 251 },
            cx: 0,
            cy: 0,
          },
        },
      },
      module: "apn.CFlowPage",
      BG: { fillStyle: "#ffffff" },
      SPT: {
        pageRun: "",
        spt_EvtBubble:
          'if( !Event.target ) {\n    if( Event.type == "Custom Event") {\n        if ( Event.param.indexOf("nextQuiz") > -1 ) {\n            onNextQuiz();\n        }\n    } else if( Event.type == "Page Create" ) {\n        onPageRun();\n    }   \n}\n\n// Page Run\nfunction onPageRun() {\n    File.set("$correct:count",0);\n    fireEvent("Custom","showHeader");\n    const char = $W("sia$char");\n    char.local.originPos = {\n        x : char.get("x"),\n        y : char.get("y"),\n    };\n    onCharMove(1);\n}\n\n// 다음 퀴즈\nfunction onNextQuiz() {\n    const char = $W("sia$char");\n    const flagIndex = Event.param.split("_")[1];\n    \n    if( flagIndex == 3 || flagIndex == 6 ) {\n        char.moveTo(char.local.originPos.x, char.local.originPos.y);\n        $W("mlc$scene").changeState(`Layer${flagIndex == 3 ? "2" : "3"}`);\n    }\n    onCharMove(flagIndex);\n}\n\n// 캐릭터 움직임 이벤트\nfunction onCharMove(index) {\n    const char = $W("sia$char");\n    const flag = $W(`r$flag_${index}`);\n    const dim = $W("i$dim");\n    const timing = "linear 1470ms";\n    \n    dim.moveTo(1600,0);\n    char.changeState("Play");\n    char.moveTo(flag.get("x"), flag.get("y"), {timing:timing, onEnd:function(){\n        setTimeout(function(){\n            if( index > 6 ) {\n                File.browse("pages").forEach((page)=>{\n                    if( page.label == "Page 4" ) {\n                        linkTo(page.id, {reset:true});\n                    }\n                });\n            } else {\n                fireEvent("Custom",`showQuiz_${index}`);\n                dim.moveTo(0,0);\n            }\n        }, 1000);\n    }});\n}',
      },
    },
    4: {
      UI: {
        title: "Overlay",
        order: 1,
        apnCExe: { layer: "", evPch: "" },
        CExe: {
          apxTdata: [
            {
              data: {
                st: [
                  { t: "Name", c: "", o: "", type: "text", w: 0, apxIndex: 1 },
                ],
                data: {
                  idx: 2,
                  st: {
                    1: {
                      t: "Name",
                      c: "",
                      o: "",
                      type: "text",
                      w: 0,
                      apxIndex: 1,
                    },
                  },
                  tbl: [{ 1: "" }],
                  maxCount: 0,
                  o: "",
                  nd: "",
                },
              },
              desc: "",
              id: "",
              type: "",
            },
          ],
          apxTdataF: [
            {
              id: "data",
              type: "",
              desc: "",
              json: {
                size: 1382,
                data: '[\n  {\n    "id": 1,\n    "question": "디지털 기술의 발전으로 산업이 자동화 및 단순화되면서 사회의 다양한 분야에 영향을 주고 있다.",\n    "fontSize": "34px",\n    "type": "ox",\n    "answer": "o"\n  },\n  {\n    "id": 2,\n    "question": "디지털 사회에서 직업이나 진로의 변화는 기술의 발전과 관련이 없다.",\n    "fontSize": "34px",\n    "type": "ox",\n    "answer": "x"\n  },\n  {\n    "id": 3,\n    "question": "개인 정보와 저작권이 있는 저작물은 (\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0)해야 할 정보이다.",\n    "fontSize": "34px",\n    "type": "two_choice",\n    "answer": "2",\n    "choices": {\n      "1": {\n        "text": "공유",\n        "fontSize": "50px"\n      },\n      "2": {\n        "text": "보호",\n        "fontSize": "50px"\n      }\n    }\n  },\n  {\n    "id": 4,\n    "question": "정보를 보호하기 위해서 출처를 알 수 없는 문자 메시지의 링크는 클릭하지 않는다.",\n    "fontSize": "34px",\n    "type": "ox",\n    "answer": "o"\n  },\n  {\n    "id": 5,\n    "question": "정보의 생성, 처리 등의 전 과정에서 허가되지 않은 접근, 사용, 파괴 등으로부터 정보를 안전하게 유지하는 방법과 절차를 무엇이라고 하는가?",\n    "fontSize": "34px",\n    "type": "two_choice",\n    "answer": "1",\n    "choices": {\n      "1": {\n        "text": "정보 보안",\n        "fontSize": "50px"\n      },\n      "2": {\n        "text": "정보 공개",\n        "fontSize": "50px"\n      }\n    }\n  },\n  {\n    "id": 6,\n    "question": "정보를 제공하는 공급자와 정보를 사용하는 사용자 모두 올바른 보안 의식을 가지고 정보를 다루어야 한다.",\n    "fontSize": "34px",\n    "type": "ox",\n    "answer": "o"\n  }\n]\n',
                name: "quiz-data.json",
                type: "application/json",
              },
            },
          ],
          apxTdataDesc: "",
        },
      },
      objects: {
        "936A4_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101332695,
            data: {
              properties: { attrs: { ofl: "", Mode: "" } },
              wgtID: "apn.wgt.layerContainer",
              wgtTitle: "Multi-layer Container",
              styles: { state: "1", C: 0, k: "mlc$header", c: false },
            },
          },
          init: {
            position: { x: 0, y: 0 },
            shape: { type: 1, w: 1600, h: 111 },
            cx: 0,
            cy: 0,
          },
          layout: {
            layers: { 1: { title: "Layer1", id: "937A4_" } },
            layerIndex: 1,
            children: ["937A4_"],
          },
        },
        "937A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332696 },
          init: {
            position: { x: 0, y: 0 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: {
            children: [
              "1047A4_",
              "1048A4_",
              "1049A4_",
              "1050A4_",
              "1051A4_",
              "1052A4_",
              "1053A4_",
              "1060A4_",
              "1067A4_",
              "1074A4_",
              "1081A4_",
              "1088A4_",
            ],
          },
        },
        "1047A4_": {
          module: "apn.CEllipse",
          create: {
            type: 16777728,
            zIndex: 101332697,
            data: {
              properties: { ver: 2 },
              wgtID: "apn.wgt.ellipse",
              wgtTitle: "Ellipse",
              styles: {
                O: true,
                U: true,
                T: 0,
                C: 0,
                Q: "1",
                K: "43px",
                L: "#6c20b2",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 26, y: 23.5 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
        },
        "1048A4_": {
          module: "apn.CEllipse",
          create: {
            type: 16777728,
            zIndex: 101332698,
            data: {
              properties: { ver: 2 },
              wgtID: "apn.wgt.ellipse",
              wgtTitle: "Ellipse",
              styles: {
                O: true,
                U: true,
                T: 0,
                C: 0,
                Q: "2",
                K: "43px",
                L: "#6c20b2",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 125, y: 23.5 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
        },
        "1049A4_": {
          module: "apn.CEllipse",
          create: {
            type: 16777728,
            zIndex: 101332699,
            data: {
              properties: { ver: 2 },
              wgtID: "apn.wgt.ellipse",
              wgtTitle: "Ellipse",
              styles: {
                O: true,
                U: true,
                T: 0,
                C: 0,
                Q: "3",
                K: "43px",
                L: "#6c20b2",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 224, y: 23.5 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
        },
        "1050A4_": {
          module: "apn.CEllipse",
          create: {
            type: 16777728,
            zIndex: 101332700,
            data: {
              properties: { ver: 2 },
              wgtID: "apn.wgt.ellipse",
              wgtTitle: "Ellipse",
              styles: {
                O: true,
                U: true,
                T: 0,
                C: 0,
                Q: "4",
                K: "43px",
                L: "#6c20b2",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 324, y: 23.5 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
        },
        "1051A4_": {
          module: "apn.CEllipse",
          create: {
            type: 16777728,
            zIndex: 101332701,
            data: {
              properties: { ver: 2 },
              wgtID: "apn.wgt.ellipse",
              wgtTitle: "Ellipse",
              styles: {
                O: true,
                U: true,
                T: 0,
                C: 0,
                Q: "5",
                K: "43px",
                L: "#6c20b2",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 423, y: 23.5 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
        },
        "1052A4_": {
          module: "apn.CEllipse",
          create: {
            type: 16777728,
            zIndex: 101332702,
            data: {
              properties: { ver: 2 },
              wgtID: "apn.wgt.ellipse",
              wgtTitle: "Ellipse",
              styles: {
                O: true,
                U: true,
                T: 0,
                C: 0,
                Q: "6",
                K: "43px",
                L: "#6c20b2",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 522, y: 23.5 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
        },
        "1053A4_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101332703,
            data: {
              properties: { attrs: { ofl: "Y", Mode: "" } },
              wgtID: "apn.wgt.layerContainer",
              wgtTitle: "Multi-layer Container",
              styles: { state: "1", C: 0, k: "mlc$result_1", c: false },
              lockType: 0,
            },
          },
          init: {
            position: { x: 26, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: {
            children: ["1054A4_", "1056A4_", "1058A4_"],
            layers: {
              1: { title: "o", id: "1054A4_" },
              2: { title: "s", id: "1056A4_" },
              3: { title: "x", id: "1058A4_" },
            },
            layerIndex: 3,
          },
        },
        "1054A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332704 },
          init: {
            position: { x: 26, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1055A4_"] },
        },
        "1055A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332705,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIbac134dbce6b41cd96e98c01a85f5805_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 28, y: 26 },
            shape: { type: 1, w: 57, h: 58 },
            cx: 0,
            cy: 0,
          },
        },
        "1056A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332706 },
          init: {
            position: { x: 26, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1057A4_"] },
        },
        "1057A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332707,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIafdbfb8f7c7d4aa7ad4d7796a1b91a0a_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 12, y: 12 },
            shape: { type: 1, w: 90, h: 86 },
            cx: 0,
            cy: 0,
          },
        },
        "1058A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332708 },
          init: {
            position: { x: 26, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1059A4_"] },
        },
        "1059A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332709,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI6308755e80704b1d85d4823210997829_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 25, y: 23 },
            shape: { type: 1, w: 64, h: 64 },
            cx: 0,
            cy: 0,
          },
        },
        "1060A4_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101332710,
            data: {
              properties: { attrs: { ofl: "Y", Mode: "" } },
              wgtID: "apn.wgt.layerContainer",
              wgtTitle: "Multi-layer Container",
              styles: { state: "1", C: 0, k: "mlc$result_2", c: false },
              lockType: 0,
            },
          },
          init: {
            position: { x: 125, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: {
            children: ["1061A4_", "1063A4_", "1065A4_"],
            layers: {
              1: { title: "o", id: "1061A4_" },
              2: { title: "s", id: "1063A4_" },
              3: { title: "x", id: "1065A4_" },
            },
            layerIndex: 3,
          },
        },
        "1061A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332711 },
          init: {
            position: { x: 125, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1062A4_"] },
        },
        "1062A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332712,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIbac134dbce6b41cd96e98c01a85f5805_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 127, y: 26 },
            shape: { type: 1, w: 57, h: 58 },
            cx: 0,
            cy: 0,
          },
        },
        "1063A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332713 },
          init: {
            position: { x: 125, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1064A4_"] },
        },
        "1064A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332714,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIafdbfb8f7c7d4aa7ad4d7796a1b91a0a_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 111, y: 12 },
            shape: { type: 1, w: 90, h: 86 },
            cx: 0,
            cy: 0,
          },
        },
        "1065A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332715 },
          init: {
            position: { x: 125, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1066A4_"] },
        },
        "1066A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332716,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI6308755e80704b1d85d4823210997829_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 124, y: 23 },
            shape: { type: 1, w: 64, h: 64 },
            cx: 0,
            cy: 0,
          },
        },
        "1067A4_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101332717,
            data: {
              properties: { attrs: { ofl: "Y", Mode: "" } },
              wgtID: "apn.wgt.layerContainer",
              wgtTitle: "Multi-layer Container",
              styles: { state: "1", C: 0, k: "mlc$result_3", c: false },
              lockType: 0,
            },
          },
          init: {
            position: { x: 224, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: {
            children: ["1068A4_", "1070A4_", "1072A4_"],
            layers: {
              1: { title: "o", id: "1068A4_" },
              2: { title: "s", id: "1070A4_" },
              3: { title: "x", id: "1072A4_" },
            },
            layerIndex: 3,
          },
        },
        "1068A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332718 },
          init: {
            position: { x: 224, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1069A4_"] },
        },
        "1069A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332719,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIbac134dbce6b41cd96e98c01a85f5805_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 226, y: 26 },
            shape: { type: 1, w: 57, h: 58 },
            cx: 0,
            cy: 0,
          },
        },
        "1070A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332720 },
          init: {
            position: { x: 224, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1071A4_"] },
        },
        "1071A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332721,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIafdbfb8f7c7d4aa7ad4d7796a1b91a0a_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 210, y: 12 },
            shape: { type: 1, w: 90, h: 86 },
            cx: 0,
            cy: 0,
          },
        },
        "1072A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332722 },
          init: {
            position: { x: 224, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1073A4_"] },
        },
        "1073A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332723,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI6308755e80704b1d85d4823210997829_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 223, y: 23 },
            shape: { type: 1, w: 64, h: 64 },
            cx: 0,
            cy: 0,
          },
        },
        "1074A4_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101332724,
            data: {
              properties: { attrs: { ofl: "Y", Mode: "" } },
              wgtID: "apn.wgt.layerContainer",
              wgtTitle: "Multi-layer Container",
              styles: { state: "1", C: 0, k: "mlc$result_4", c: false },
              lockType: 0,
            },
          },
          init: {
            position: { x: 324, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: {
            children: ["1075A4_", "1077A4_", "1079A4_"],
            layers: {
              1: { title: "o", id: "1075A4_" },
              2: { title: "s", id: "1077A4_" },
              3: { title: "x", id: "1079A4_" },
            },
            layerIndex: 3,
          },
        },
        "1075A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332725 },
          init: {
            position: { x: 324, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1076A4_"] },
        },
        "1076A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332726,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIbac134dbce6b41cd96e98c01a85f5805_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 326, y: 26 },
            shape: { type: 1, w: 57, h: 58 },
            cx: 0,
            cy: 0,
          },
        },
        "1077A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332727 },
          init: {
            position: { x: 324, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1078A4_"] },
        },
        "1078A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332728,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIafdbfb8f7c7d4aa7ad4d7796a1b91a0a_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 310, y: 12 },
            shape: { type: 1, w: 90, h: 86 },
            cx: 0,
            cy: 0,
          },
        },
        "1079A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332729 },
          init: {
            position: { x: 324, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1080A4_"] },
        },
        "1080A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332730,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI6308755e80704b1d85d4823210997829_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 323, y: 23 },
            shape: { type: 1, w: 64, h: 64 },
            cx: 0,
            cy: 0,
          },
        },
        "1081A4_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101332731,
            data: {
              properties: { attrs: { ofl: "Y", Mode: "" } },
              wgtID: "apn.wgt.layerContainer",
              wgtTitle: "Multi-layer Container",
              styles: { state: "1", C: 0, k: "mlc$result_5", c: false },
              lockType: 0,
            },
          },
          init: {
            position: { x: 423, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: {
            children: ["1082A4_", "1084A4_", "1086A4_"],
            layers: {
              1: { title: "o", id: "1082A4_" },
              2: { title: "s", id: "1084A4_" },
              3: { title: "x", id: "1086A4_" },
            },
            layerIndex: 3,
          },
        },
        "1082A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332732 },
          init: {
            position: { x: 423, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1083A4_"] },
        },
        "1083A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332733,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIbac134dbce6b41cd96e98c01a85f5805_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 425, y: 26 },
            shape: { type: 1, w: 57, h: 58 },
            cx: 0,
            cy: 0,
          },
        },
        "1084A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332734 },
          init: {
            position: { x: 423, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1085A4_"] },
        },
        "1085A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332735,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIafdbfb8f7c7d4aa7ad4d7796a1b91a0a_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 409, y: 12 },
            shape: { type: 1, w: 90, h: 86 },
            cx: 0,
            cy: 0,
          },
        },
        "1086A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332736 },
          init: {
            position: { x: 423, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1087A4_"] },
        },
        "1087A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332737,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI6308755e80704b1d85d4823210997829_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 422, y: 23 },
            shape: { type: 1, w: 64, h: 64 },
            cx: 0,
            cy: 0,
          },
        },
        "1088A4_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101332738,
            data: {
              properties: { attrs: { ofl: "Y", Mode: "" } },
              wgtID: "apn.wgt.layerContainer",
              wgtTitle: "Multi-layer Container",
              styles: { state: "1", C: 0, k: "mlc$result_6", c: false },
              lockType: 0,
            },
          },
          init: {
            position: { x: 522, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: {
            children: ["1089A4_", "1091A4_", "1093A4_"],
            layers: {
              1: { title: "o", id: "1089A4_" },
              2: { title: "s", id: "1091A4_" },
              3: { title: "x", id: "1093A4_" },
            },
            layerIndex: 3,
          },
        },
        "1089A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332739 },
          init: {
            position: { x: 522, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1090A4_"] },
        },
        "1090A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332740,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIbac134dbce6b41cd96e98c01a85f5805_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 524, y: 26 },
            shape: { type: 1, w: 57, h: 58 },
            cx: 0,
            cy: 0,
          },
        },
        "1091A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332741 },
          init: {
            position: { x: 522, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1092A4_"] },
        },
        "1092A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332742,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIafdbfb8f7c7d4aa7ad4d7796a1b91a0a_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 508, y: 12 },
            shape: { type: 1, w: 90, h: 86 },
            cx: 0,
            cy: 0,
          },
        },
        "1093A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332743 },
          init: {
            position: { x: 522, y: 24 },
            shape: { type: 1, w: 62, h: 62 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1094A4_"] },
        },
        "1094A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332744,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI6308755e80704b1d85d4823210997829_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 521, y: 23 },
            shape: { type: 1, w: 64, h: 64 },
            cx: 0,
            cy: 0,
          },
        },
        "1276A4_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101332745,
            data: {
              properties: { attrs: { ofl: "", Mode: "" } },
              wgtID: "apn.wgt.layerContainer",
              wgtTitle: "Multi-layer Container",
              styles: { state: "1", C: 0, k: "mlc$quiz", c: false },
            },
          },
          init: {
            position: { x: 205, y: 184 },
            shape: { type: 1, w: 1190, h: 678 },
            cx: 0,
            cy: 0,
          },
          layout: {
            layers: { 1: { title: "Layer1", id: "1286A4_" } },
            layerIndex: 1,
            children: ["1286A4_"],
          },
        },
        "1286A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332746 },
          init: {
            position: { x: 205, y: 184 },
            shape: { type: 1, w: 1190, h: 678 },
            cx: 0,
            cy: 0,
          },
          layout: {
            children: [
              "1294A4_",
              "1334A4_",
              "1323A4_",
              "1355A4_",
              "1358A4_",
              "1369A4_",
              "1437A4_",
              "1438A4_",
              "1449A4_",
              "5553A4_",
              "5731A4_",
              "6091A4_",
              "6092A4_",
              "6093A4_",
              "6094A4_",
              "6095A4_",
              "6096A4_",
              "6097A4_",
            ],
          },
        },
        "1294A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332747,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIb88722b729044f79a612f18f91d8184e_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 205, y: 184 },
            shape: { type: 1, w: 1190, h: 678 },
            cx: 0,
            cy: 0,
          },
        },
        "1323A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332749,
            data: {
              properties: {
                attrs: {
                  apxAnimate: true,
                  cfg: {
                    frames: [
                      {
                        sprite: {
                          mediaID: "RI8f74065c552242a3b0ed2bce2a419a3c_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIcd72c308c969456eac7548a77d7e1972_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI0fc3fa6ad9b24723b99457c2c06efe3c_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI2aa459cd022c43bf8af3438d25e82b57_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIff56130001c5489b92a6830dd4360a94_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIa2d368bb2e0147aabb8d3deda69fc3a7_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIebb0cc9af471486dac937e1c6a555a64_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIec89124cdd524549ac221d922240ef29_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIb0c8580e0c47459e8623a589aa32624d_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIb70b739d6a8e4a83ad4c703d106a039a_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI1b23bc63e7384174a597b9cb8df34dfa_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI51213e89a6424a8d8910b15817bfb75a_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIf1973628ff04442eabcd016a1a3c16fc_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI70606baae9d84f98ad8ee841235ac396_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIc88bee7b9c434b87b94183d00b43be1a_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI6b1251a6176d4b789f8dc6a9108d5e0e_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI06250af9afb9424aab5366a22d8bea09_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIff4f8492309545b8a0a95521e9f53de4_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIda9646e7c8ff4fd19dc8b3486dc5d379_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI8f035475b6f640c189e03ce3b06b3d87_png",
                        },
                        duration: "1000",
                      },
                    ],
                    idStep: "",
                  },
                },
                state: "stop",
              },
              wgtID: "ux.wgt.imgSprite",
              wgtTitle: "Sprite Images Animation",
              styles: {
                mediaID: "RI8f74065c552242a3b0ed2bce2a419a3c_png",
                a: false,
                k: "sia$timer",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1667, y: 110 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
          SPT: {},
        },
        "1334A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332748,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI15986358e2b74994962f21fa2a3d6285_png",
                C: 0,
                A: "transparent",
                a: false,
              },
            },
          },
          init: {
            position: { x: 430, y: 249 },
            shape: { type: 1, w: 739, h: 60 },
            cx: 0,
            cy: 0,
          },
        },
        "1355A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332750,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIdaa6e7dc118b41bba0a906a14e04c0b0_png",
                C: 0,
                A: "transparent",
                a: false,
                k: "i$stop",
                j: "pointer",
              },
            },
          },
          init: {
            position: { x: 1186, y: 248 },
            shape: { type: 1, w: 156, h: 62 },
            cx: 0,
            cy: 0,
          },
        },
        "1358A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332752,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIaa2d24656c2b4997b44fb3b765c00fe9_png",
                C: 0,
                A: "transparent",
                a: false,
              },
            },
          },
          init: {
            position: { x: 271, y: 229 },
            shape: { type: 1, w: 137, h: 123 },
            cx: 0,
            cy: 0,
          },
        },
        "1369A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332753,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIa437b319abf740ebb4b068e87e33fccf_png",
                C: 0,
                A: "transparent",
                a: false,
              },
            },
          },
          init: {
            position: { x: 275, y: 204 },
            shape: { type: 1, w: 121, h: 56 },
            cx: 0,
            cy: 0,
          },
        },
        "1437A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332755,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI21c037f9e7eb48e38b7e93244747e80d_png",
                C: 0,
                A: "transparent",
                a: false,
                k: "i$correct",
              },
            },
          },
          init: {
            position: { x: 1698, y: 651 },
            shape: { type: 1, w: 263, h: 240 },
            cx: 0,
            cy: 0,
          },
        },
        "1438A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332756,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI9a312eb55c444e4a9f9743e8397732df_png",
                C: 0,
                A: "transparent",
                a: false,
                k: "i$incorrect",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1658, y: 207 },
            shape: { type: 1, w: 261, h: 261 },
            cx: 0,
            cy: 0,
          },
        },
        "1449A4_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101332767,
            data: {
              properties: { attrs: { ofl: "", Mode: "" } },
              wgtID: "apn.wgt.layerContainer",
              wgtTitle: "Multi-layer Container",
              styles: { state: "20", C: 0, k: "mlc$timer" },
            },
          },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
          layout: {
            layers: {
              1: { title: "Layer1", id: "1450A4_" },
              2: { title: "Layer2", id: "1459A4_" },
              3: { title: "Layer3", id: "1468A4_" },
              4: { title: "Layer4", id: "1477A4_" },
              5: { title: "Layer5", id: "1486A4_" },
              6: { title: "Layer6", id: "1495A4_" },
              7: { title: "Layer7", id: "1504A4_" },
              8: { title: "Layer8", id: "1513A4_" },
              9: { title: "Layer9", id: "1522A4_" },
              10: { title: "Layer10", id: "1531A4_" },
              11: { title: "Layer11", id: "1540A4_" },
              12: { title: "Layer12", id: "1549A4_" },
              13: { title: "Layer13", id: "1558A4_" },
              14: { title: "Layer14", id: "1567A4_" },
              15: { title: "Layer15", id: "1576A4_" },
              16: { title: "Layer16", id: "1585A4_" },
              17: { title: "Layer17", id: "1594A4_" },
              18: { title: "Layer18", id: "1603A4_" },
              19: { title: "Layer19", id: "1612A4_" },
              20: { title: "Layer20", id: "1946A4_" },
            },
            layerIndex: 20,
            children: [
              "1450A4_",
              "1459A4_",
              "1468A4_",
              "1477A4_",
              "1486A4_",
              "1495A4_",
              "1504A4_",
              "1513A4_",
              "1522A4_",
              "1531A4_",
              "1540A4_",
              "1549A4_",
              "1558A4_",
              "1567A4_",
              "1576A4_",
              "1585A4_",
              "1594A4_",
              "1603A4_",
              "1612A4_",
              "1946A4_",
            ],
          },
        },
        "1450A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332768 },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1621A4_"] },
        },
        "1459A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332770 },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1636A4_"] },
        },
        "1468A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332772 },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1651A4_"] },
        },
        "1477A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332774 },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1666A4_"] },
        },
        "1486A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332776 },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1681A4_"] },
        },
        "1495A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332778 },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1736A4_"] },
        },
        "1504A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332780 },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1751A4_"] },
        },
        "1513A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332782 },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1766A4_"] },
        },
        "1522A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332784 },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1781A4_"] },
        },
        "1531A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332786 },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1796A4_"] },
        },
        "1540A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332788 },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1811A4_"] },
        },
        "1549A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332790 },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1826A4_"] },
        },
        "1558A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332792 },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1841A4_"] },
        },
        "1567A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332794 },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1856A4_"] },
        },
        "1576A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332796 },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1871A4_"] },
        },
        "1585A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332798 },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1886A4_"] },
        },
        "1594A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332800 },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1901A4_"] },
        },
        "1603A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332802 },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1916A4_"] },
        },
        "1612A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332804 },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1931A4_"] },
        },
        "1621A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332769,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI8f035475b6f640c189e03ce3b06b3d87_png",
                C: 0,
                A: "transparent",
                a: false,
              },
            },
          },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
        },
        "1636A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332771,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIda9646e7c8ff4fd19dc8b3486dc5d379_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
        },
        "1651A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332773,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIff4f8492309545b8a0a95521e9f53de4_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
        },
        "1666A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332775,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI06250af9afb9424aab5366a22d8bea09_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
        },
        "1681A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332777,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI6b1251a6176d4b789f8dc6a9108d5e0e_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
        },
        "1736A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332779,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIc88bee7b9c434b87b94183d00b43be1a_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
        },
        "1751A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332781,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI70606baae9d84f98ad8ee841235ac396_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
        },
        "1766A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332783,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIf1973628ff04442eabcd016a1a3c16fc_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
        },
        "1781A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332785,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI51213e89a6424a8d8910b15817bfb75a_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
        },
        "1796A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332787,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI1b23bc63e7384174a597b9cb8df34dfa_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
        },
        "1811A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332789,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIb70b739d6a8e4a83ad4c703d106a039a_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
        },
        "1826A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332791,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIb0c8580e0c47459e8623a589aa32624d_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
        },
        "1841A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332793,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIec89124cdd524549ac221d922240ef29_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
        },
        "1856A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332795,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIebb0cc9af471486dac937e1c6a555a64_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
        },
        "1871A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332797,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIa2d368bb2e0147aabb8d3deda69fc3a7_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
        },
        "1886A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332799,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIff56130001c5489b92a6830dd4360a94_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
        },
        "1901A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332801,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI2aa459cd022c43bf8af3438d25e82b57_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
        },
        "1916A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332803,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI0fc3fa6ad9b24723b99457c2c06efe3c_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
        },
        "1931A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332805,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIcd72c308c969456eac7548a77d7e1972_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
        },
        "1946A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332806 },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["1951A4_"] },
        },
        "1951A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332807,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI8f74065c552242a3b0ed2bce2a419a3c_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 432, y: 256 },
            shape: { type: 1, w: 723, h: 46 },
            cx: 0,
            cy: 0,
          },
        },
        "2460A4_": {
          module: "apn.CMedia",
          create: {
            type: 16777728,
            zIndex: 101332303,
            data: {
              properties: {
                state: "stop",
                attrs: {
                  apxMediaControl: true,
                  Control: "None",
                  Loop: "No",
                  apxStep: { current: 0, count: 1 },
                  v: 2,
                  stp: 0,
                  ttip: "",
                },
              },
              wgtID: "apn.wgt.audio",
              wgtTitle: "Audio",
              styles: {
                mediaID: "RA2a5371d1029946c88766aa676fb91ce4_mp3",
                c: false,
                k: "a$correct",
              },
            },
          },
          init: {
            position: { x: -60, y: 0 },
            shape: { type: 1, w: 60, h: 60 },
            cx: 0,
            cy: 0,
          },
        },
        "2470A4_": {
          module: "apn.CMedia",
          create: {
            type: 16777728,
            zIndex: 101332304,
            data: {
              properties: {
                state: "stop",
                attrs: {
                  apxMediaControl: true,
                  Control: "None",
                  Loop: "No",
                  apxStep: { current: 0, count: 1 },
                  v: 2,
                  stp: 0,
                  ttip: "",
                },
              },
              wgtID: "apn.wgt.audio",
              wgtTitle: "Audio",
              styles: {
                mediaID: "RA9e411ca25a9248c483628f527587ee54_mp3",
                c: false,
                k: "a$incorrect",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: -60, y: 60 },
            shape: { type: 1, w: 60, h: 60 },
            cx: 0,
            cy: 0,
          },
        },
        "5553A4_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332851,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Multiline Text",
              styles: {
                B: null,
                A: null,
                O: true,
                U: true,
                T: 0,
                R: "left",
                K: "34px",
                k: "mt$question",
                i: 5,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 283, y: -63 },
            shape: { type: 1, w: 1034, h: 218 },
            cx: 0,
            cy: 0,
          },
          SPT: {},
        },
        "5731A4_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332859,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", Y: "0.00", k: "r$dim" },
            },
          },
          init: {
            position: { x: 294, y: 984 },
            shape: { type: 1, w: 1017, h: 247 },
            cx: 0,
            cy: 0,
          },
        },
        "6091A4_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332887,
            data: {
              properties: { attrs: { ofl: "", v: 2 } },
              wgtID: "apn.wgt.singleText",
              wgtTitle: "Text",
              styles: { B: null, A: null, T: 0, k: "t$number", L: "#FFFFFF" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 265, y: 297 },
            shape: { type: 1, w: 149, h: 40 },
            cx: 0,
            cy: 0,
          },
        },
        "6092A4_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332888,
            data: {
              properties: { attrs: { HTML: "" } },
              wgtID: "ux.wgt.DIV",
              wgtTitle: "DIV <HTML>",
              styles: { K: "34px", k: "div$html" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 293, y: 369 },
            shape: { type: 1, w: 1034, h: 218 },
            cx: 0,
            cy: 0,
          },
          SPT: {},
        },
        "6093A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332889,
            data: {
              properties: { ver: 2, attrs: { apnPadding: "" } },
              wgtID: "apn.wgt.imageText",
              wgtTitle: "Image with Text",
              styles: {
                mediaID: "RI1cee098b9c1b4ef999bc3d101f7d9dd8_png",
                O: true,
                T: 0,
                K: "5px",
                Q: "맞음",
                k: "i$example_1_1",
                c: false,
                j: "pointer",
                L: "#008aff",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 556, y: 607 },
            shape: { type: 1, w: 213, h: 206 },
            cx: 0,
            cy: 0,
          },
        },
        "6094A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332890,
            data: {
              properties: { ver: 2, attrs: { apnPadding: "" } },
              wgtID: "apn.wgt.imageText",
              wgtTitle: "Image with Text",
              styles: {
                mediaID: "RI8d5444b26cfc4499bb59a40ba587b317_png",
                O: true,
                T: 0,
                Q: "틀림",
                k: "i$example_1_2",
                c: false,
                j: "pointer",
                K: "5px",
                L: "#FFFFFF",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 831, y: 607 },
            shape: { type: 1, w: 213, h: 206 },
            cx: 0,
            cy: 0,
          },
        },
        "6095A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332891,
            data: {
              properties: { ver: 2, attrs: { apnPadding: "" } },
              wgtID: "apn.wgt.imageText",
              wgtTitle: "Image with Text",
              styles: {
                mediaID: "RI7856368e052940ed8a6ced4ad4b707a2_png",
                O: true,
                T: 0,
                K: "70px",
                L: "#FFFFFF",
                k: "i$example_2_1",
                c: false,
                j: "pointer",
                Q: " ",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 328, y: 609 },
            shape: { type: 1, w: 453, h: 206 },
            cx: 0,
            cy: 0,
          },
        },
        "6096A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332892,
            data: {
              properties: { ver: 2, attrs: { apnPadding: "" } },
              wgtID: "apn.wgt.imageText",
              wgtTitle: "Image with Text",
              styles: {
                mediaID: "RI9afe07a6339e41bbb8fcf7e0ca00490d_png",
                O: true,
                T: 0,
                K: "70px",
                L: "#FFFFFF",
                k: "i$example_2_2",
                c: false,
                j: "pointer",
                Q: " ",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 818, y: 609 },
            shape: { type: 1, w: 453, h: 206 },
            cx: 0,
            cy: 0,
          },
        },
        "6097A4_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332893,
            data: {
              properties: { attrs: { ofl: "", v: 2 } },
              wgtID: "apn.wgt.singleText",
              wgtTitle: "Text",
              styles: {
                B: null,
                A: null,
                T: 0,
                Q: "멈춤",
                K: "30px",
                L: "#FFFFFF",
                c: 1,
                k: "t$stop",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1186, y: 249 },
            shape: { type: 1, w: 155, h: 60 },
            cx: 0,
            cy: 0,
          },
        },
        "6524A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332906,
            data: {
              properties: {
                attrs: {
                  apxAnimate: true,
                  cfg: {
                    frames: [
                      {
                        sprite: {
                          mediaID: "RI669f321acb804987a4db32fe9623209e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIe78ad2bb4c6046a38adfc10eb5979743_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9d0f99ee5c01474a996fae363c14ff9e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3e06064970164b0e940161d9001f6bee_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI603b2016b3f44cfc8e5fd847a185a3a6_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI78801da0c3804f7ab359451773acadcd_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc323bd5dec084f4b9163bf466427540a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI66d67b530d73460c825aa105f79135d5_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIe6092605390e40fb94de419828db4f69_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI33d232b438984561b98f81c41f617eae_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI71264b038b224fcfbf5e43f250640241_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1d2c5c0d878c4489a042a3a8d4bc9634_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI82ad2b8896ad44a3a9e73730ab0a824a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI02b8518d50664698b4b882c3e6b7ff60_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI8121a3ca939f469a95ac8f5032a227b5_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3f714f3d6cd64fb4a1adb52450b0b923_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI41a42e20f5df4bc8999d4d29be62c8b3_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI82fd3ad146da430484b5546c888c69c1_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIdec144f6e6f540dbbbab5d012a897e7d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIca3804963ef54d2c9a3e3333236d1eaa_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI796063fc35074c35a4acb0a3a6fe9655_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId93c62c01acd41c285b665a712a44ee1_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI296fc47b665f4697882f5395a7ee1d4a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI88f5de2a4cf94cf2b7cb71a65e821c80_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIfb2d4e9b06024469aed95c93df9bd690_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6274a59536704730b336f821e4e91f72_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa73721e88620444985e14f21427c7ab5_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIdca20f1f5dcf4836a2c094ceab0474c5_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI69dc2acef06c4ca3bbd41ec70fea2708_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4547da52d42646da95c6e6a0cc21fe67_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI01458b8357174a5e91cd93c22c8de708_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf0f8f3ec8fc7482d9ea844e33905c944_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIe6b02a244bc0420996a80be64f8e88bb_png",
                        },
                        duration: "42",
                      },
                    ],
                    idStep: "",
                  },
                },
                state: "stop",
              },
              wgtID: "ux.wgt.imgSprite",
              wgtTitle: "Sprite Images Animation",
              styles: {
                mediaID: "RI669f321acb804987a4db32fe9623209e_png",
                a: false,
                k: "sia$char_3",
                c: false,
                Y: "0.00",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 472, y: 296 },
            shape: { type: 1, w: 510, h: 570 },
            cx: 0,
            cy: 0,
          },
        },
        "6570A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332907,
            data: {
              properties: {
                attrs: {
                  apxAnimate: true,
                  cfg: {
                    frames: [
                      {
                        sprite: {
                          mediaID: "RI11f68699017e4016bec024306115291f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI370f81dc62a64536af61f5206484c62f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI293a50bb4a2044a6918afe18b5d730aa_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIfd049b303eeb48a189731b1a00440c71_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI44c56dab5ad94032a0ebe75c143562ef_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6515e28c5b714f58b90d1c9500afd410_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc658517d65624e5399a0f632557d02f3_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1ceaa869283d48898c455776f48f65be_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIdf255a87b0ca4e68b2d5f1bf6774b5a5_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4091347eb38b45fabc88771d1f306b94_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6a83b5a95f1c491fa52275b19a30ddc1_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI69d71ad2a5b1479b947aa10962e1628a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0696786199274ff8a9bd291d6ea79917_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI354a39c267bd42d8a8ed9aabc3b4586b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI139eb6f0d9e24647b5f6ad85342a7d78_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf660104fe5f046819ffd0e264bd70086_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7759098640624dd8ae9d95edaa1c7652_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI97745f9f08df4ff5917c5ff54d79b67e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6deeea7f23a44132bba0f2600fa15179_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI73a8970e14874198bdba24f1788e8d25_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI919016f9884346eaa0dd71a5021ebc56_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI223845edcdd4434d85e09d81a2ae8195_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI96965c70f1144fb2b4d2095a92128f42_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIbb6beac5fd9246d49be791295c036b3e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIbebddb2c9ee94e3d88a05278a38ec5a4_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc85b27b1531345e78b3055e5068fb65a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0c857670ed7d4d7cafb8a9616107787c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI26d5149cd71344c58844ac46c422baf5_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb47a82fa21e1413e83ebf47f54fa196c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIbbdc537d16894ee18ab6147483c11fff_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIcb657ebcfdcb4342a836fd8f6c45a101_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf0db26dcef584eafb02a843611a7b9db_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI60a2310dc00e42339c4bfb7c51779aad_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI274b36e470004e3e9fc4d2bfa491aa76_png",
                        },
                        duration: "42",
                      },
                    ],
                    idStep: "",
                  },
                },
                state: "stop",
              },
              wgtID: "ux.wgt.imgSprite",
              wgtTitle: "Sprite Images Animation",
              styles: {
                mediaID: "RI11f68699017e4016bec024306115291f_png",
                a: false,
                k: "sia$char_4",
                c: false,
                Y: "0.00",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 336, y: 239 },
            shape: { type: 1, w: 780, h: 630 },
            cx: 0,
            cy: 0,
          },
        },
        "6630A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332908,
            data: {
              properties: {
                attrs: {
                  apxAnimate: true,
                  cfg: {
                    frames: [
                      {
                        sprite: {
                          mediaID: "RI11380641c46c4722bae53ea566684a95_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIfe70ccbd06e3404c809ad90aebf6e1ea_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI505a53cea9fd4896a944a7a238f579aa_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIef0253b423f247bb9557d0d5d293f8b6_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI99f64f6d6d1a4f1197a11b0b1d7cffc7_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7cbef448c5244fe8801842e941e25cdb_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9697a049eaf34c749024305801a16205_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIe1754ca145854d5aa051c353ab8897ac_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI88cdfcf3ca9f41c6aebb7baf89512834_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI25162e4c269945049efc2060ba052bee_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI64ede90c70b54d91a8cab5705773f7f9_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf6dbfe6fea134561b02b4abb183120d3_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIafa67ae4cab74dd0a211f5a6cba1cc5a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6009fea09f7d439ca32d244b117b5eb6_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI22bb77768c314bf4a35cf433b5a08c8a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa718ef9fb1244149bc17c5a2626c564a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIbad052a150fc4e82be20880f3d7cdcea_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1d1a83c27b5d44d3be8c2e5739164474_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI76467747ef0a4885a7d1363b47a24b84_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3cb1dc5996ed4db5af31aff7a7bf0f7b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc2a6687d64084b1aa8b1e6d712639a5a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb7e4ab468fa240bf998f7e3be0bb8030_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI377b3d279e004c369d3c82416964f172_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIad1dd4213f99461da7b18681ace3f35a_png",
                        },
                        duration: "42",
                      },
                    ],
                    idStep: "",
                  },
                },
                state: "stop",
              },
              wgtID: "ux.wgt.imgSprite",
              wgtTitle: "Sprite Images Animation",
              styles: {
                mediaID: "RI11380641c46c4722bae53ea566684a95_png",
                a: false,
                k: "sia$char_2",
                c: false,
                Y: "0.00",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 590, y: 401 },
            shape: { type: 1, w: 300, h: 440 },
            cx: 0,
            cy: 0,
          },
        },
        "6747A4_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101332909,
            data: {
              properties: { attrs: { ofl: "", Mode: "" } },
              wgtID: "apn.wgt.layerContainer",
              wgtTitle: "Multi-layer Container",
              styles: { state: "2", C: 0, k: "mlc$text", c: false },
              lockType: 0,
            },
          },
          init: {
            position: { x: 380, y: 662 },
            shape: { type: 1, w: 757, h: 238 },
            cx: 0,
            cy: 0,
          },
          layout: {
            children: ["6748A4_", "6750A4_"],
            layers: {
              1: { title: "Layer1", id: "6748A4_" },
              2: { title: "Layer2", id: "6750A4_" },
            },
            layerIndex: 2,
          },
        },
        "6748A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332910 },
          init: {
            position: { x: 380, y: 662 },
            shape: { type: 1, w: 757, h: 238 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["6749A4_"] },
        },
        "6749A4_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332911,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Multiline Text",
              styles: {
                B: null,
                A: null,
                O: true,
                U: true,
                T: 0,
                Q: "구슬이 부족해 캐릭터가\n성장하지 못했습니다.",
                K: "70px",
                L: "#FFFFFF",
                W: "#107DD9",
                k: "mt$title_1",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 380, y: 662 },
            shape: { type: 1, w: 757, h: 238 },
            cx: 0,
            cy: 0,
          },
        },
        "6750A4_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332912 },
          init: {
            position: { x: 380, y: 662 },
            shape: { type: 1, w: 757, h: 238 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["6751A4_"] },
        },
        "6751A4_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332913,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Multiline Text",
              styles: {
                B: null,
                A: null,
                O: true,
                U: true,
                T: 0,
                Q: "캐릭터 성장이\n완료되었습니다!",
                K: "70px",
                L: "#FFFFFF",
                W: "#107dd9",
                k: "mt$title_2",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 380, y: 662 },
            shape: { type: 1, w: 757, h: 238 },
            cx: 0,
            cy: 0,
          },
        },
      },
      module: "apn.COverlayPage",
      BG: { fillStyle: "#FFFFFF" },
      SPT: {
        spt_Custom: "",
        pageLoad: "",
        spt_EvtBubble:
          'if( !Event.target ) {\n    if( Event.type == "Custom Event") {\n        if( Event.param == "showHeader" ) {\n            $W("mlc$header").set("visibility","visible");\n        } else if( Event.param == "hideHeader" ) {\n            $W("mlc$header").set("visibility","hidden");\n        } else if ( Event.param.indexOf("showQuiz") > -1  ) {\n            onSettingQuiz();\n        } else if ( Event.param == "clearResult" ) {\n            $W("mlc$result_",undefined,{multiple:true,like:true}).forEach(function(result){\n                result.set("visibility","hidden");\n            });\n        } else if ( Event.param == "showChar_2") {\n            $W("sia$char_2").set("visibility","visible");\n            $W("sia$char_2").changeState("Loop");\n            $W("sia$char_2").opacityTo(1, {timing:\'linear 1000ms\', onEnd:function(){}});\n        } else if ( Event.param == "showChar_3") {\n            $W("sia$char_2").set("visibility","hidden");\n            $W("sia$char_3").changeState("Loop");\n            $W("sia$char_3").set("visibility","visible");\n            $W("sia$char_3").opacityTo(1, {timing:\'linear 1000ms\', onEnd:function(){}});\n        } else if ( Event.param == "showChar_4") {\n            $W("sia$char_2").set("visibility","hidden");\n            $W("sia$char_3").set("visibility","hidden");\n            $W("sia$char_4").changeState("Loop");\n            $W("sia$char_4").set("visibility","visible");\n            $W("sia$char_4").opacityTo(1, {timing:\'linear 1000ms\', onEnd:function(){}});\n        } else if ( Event.param == "showTitle" ) {\n            $W("mlc$text").set("visibility","visible");\n        }\n    } else if( Event.type == "Page Create") {\n            // 타이틀 2\n            const elSubTitle = $W("mt$title_2").tag;\n            elSubTitle.style.webkitTextStroke = \'4px #107DD9\';\n            elSubTitle.style.textStroke = \'4px #107DD9\';\n        }\n} else {\n    if( Event.type == "Tap Start" ) {\n        var label = Event.target.get("label");\n        if( label.indexOf("i$example_") > -1 ) {\n            onTapExample(label.split("_")[2]);\n        } else if( label == "i$stop" ) {\n            onTapStop();\n        }\n    }   \n}\n\n// 퀴즈 문항 셋팅\nfunction onSettingQuiz() {\n    const flagIndex = Event.param.split("_")[1];\n    const quizData = JSON.parse(get("$template:data"));\n    const quiz = quizData.find((q) => q.id === Number(flagIndex));\n    const btn_O = $W("i$example_1_1");\n    const btn_X = $W("i$example_1_2");\n    const btn_1 = $W("i$example_2_1");\n    const btn_2 = $W("i$example_2_2");\n    const btn_stop = $W("t$stop");\n    \n    btn_O.tag.childNodes[0].childNodes[0].id = "btn_1_1";\n    btn_X.tag.childNodes[0].childNodes[0].id = "btn_1_2";\n    btn_1.tag.childNodes[0].childNodes[0].id = "btn_2_1";\n    btn_2.tag.childNodes[0].childNodes[0].id = "btn_2_2";\n    btn_stop.tag.id = "stopButton";\n    \n    const question = $W("div$html");\n    \n    $W("t$number").set("text",`문제 ${quiz.id}`);\n    \n    $W("t$number").tag.setAttribute("tabindex",16);\n        \n    question.setData("HTML",`<p style=\'white-space: pre-line; line-height: 1.5; word-break: keep-all;\' tabindex=17>${quiz.question}</p>`);\n    question.set("fontSize",quiz.fontSize);\n    \n    btn_O.tag.childNodes[0].childNodes[0].removeAttribute("tabindex");\n    btn_X.tag.childNodes[0].childNodes[0].removeAttribute("tabindex");\n    btn_1.tag.childNodes[0].childNodes[0].removeAttribute("tabindex");\n    btn_2.tag.childNodes[0].childNodes[0].removeAttribute("tabindex");\n    \n    $W("example_",undefined,{multiple:true,like:true}).forEach(function(example){\n        example.set("visibility","hidden");\n    });\n    \n    // ox 유형 셋팅\n    if( quiz.type == "ox") {\n        set("$answer",quiz.answer == "o" ? 1 : 2);\n        btn_O.set("visibility","visible");\n        btn_X.set("visibility","visible");\n        btn_O.tag.childNodes[0].childNodes[0].setAttribute("tabindex",18);\n        btn_X.tag.childNodes[0].childNodes[0].setAttribute("tabindex",18);\n    }\n    // 이지선다 유형 셋팅\n    else {\n        btn_1.set("text",quiz.choices["1"].text);\n        btn_2.set("text",quiz.choices["2"].text);\n        btn_1.set("fontSize",quiz.choices["1"].fontSize);\n        btn_2.set("fontSize",quiz.choices["2"].fontSize);\n        btn_1.set("visibility","visible");\n        btn_2.set("visibility","visible");\n        btn_1.tag.childNodes[0].childNodes[0].setAttribute("tabindex",18);\n        btn_2.tag.childNodes[0].childNodes[0].setAttribute("tabindex",18);\n        set("$answer",quiz.answer);\n    }\n    \n    btn_stop.tag.setAttribute("tabindex",19);\n    btn_stop.set("text","멈춤");\n    \n    $W("i$stop").local.stop = false;\n    \n    \n    get("$timer") && clearInterval(get("$timer"));\n    \n    const timer = setInterval(onProgress, 1000);\n    set("$timer",timer);\n\n    set("$time",20);\n    set("$incorrect:count",0);\n    set("$flag:index",flagIndex);\n    set("$allowedKey",true);\n    set("$quiz:type",quiz.type);\n\n    onProgress();\n\n    $W("r$dim").moveTo(294,1000);\n    $W("r$dim").zIndexTo("Top");\n    $W("mlc$quiz").set("visibility","visible");\n}\n\n// 타임 바 실행\nfunction onProgress() {\n    if( get("$time") === 0 ) {\n        onTimeOver();\n        return;\n    }\n    $W("mlc$timer").changeState("Layer" + get("$time"));\n    set("$time",get("$time")-1);\n}\n\n// 타임 오버\nfunction onTimeOver() {\n    get("$timer") && clearInterval(get("$timer"));\n    onSetResult("x");\n    onNextQuiz();\n}\n\n// 헤더 결과 셋팅\nfunction onSetResult(state) {\n    const result = $W("mlc$result_" + get("$flag:index"));\n    result.changeState(state);\n    result.set("visibility","visible");\n}\n\n// 보기 클릭\nfunction onTapExample(clickNum) {\n\n    // 오답\n    if( clickNum != get("$answer") ){\n        onIncorrect(clickNum);\n    }\n    // 정답\n    else {\n        onCorrect(clickNum);\n    }\n}\n\n// 멈춤 버튼 클릭\nfunction onTapStop() {\n    const target = $W("i$stop");\n    const stopText = $W("t$stop");\n    if( !target.local.stop ) {\n        target.local.stop = true;\n        get("$timer") && clearInterval(get("$timer"));\n        stopText.set("text","시작");\n    } else {\n        target.local.stop = false;\n        const timer = setInterval(onProgress, 1000);\n        set("$timer",timer);\n        stopText.set("text","멈춤");\n    }\n}\n\n// 오답 일 경우\nfunction onIncorrect(clickNum) {\n    const incorrectImage = $W("i$incorrect");\n    const dim = $W("r$dim");\n    incorrectImage.zIndexTo("Top");\n    dim.moveTo(294,596);\n    moveToCenterOfParent(incorrectImage,$W(`i$example_${get("$quiz:type") == "ox" ? "1" : "2"}_${clickNum}`),{});\n    set("$allowedKey",false);\n    setTimeout(function(){\n        dim.moveTo(294,1000);    \n        incorrectImage.moveTo(2000,2000);\n        set("$allowedKey",true);\n    }, 1200);\n    \n    set("$incorrect:count",get("$incorrect:count")+1);\n    $W("a$incorrect").changeState("Play");\n}\n\n// 정답 일 경우\nfunction onCorrect(clickNum) {\n    const correctImage = $W("i$correct");\n    correctImage.zIndexTo("Top");\n    moveToCenterOfParent(correctImage,$W(`i$example_${get("$quiz:type") == "ox" ? "1" : "2"}_${clickNum}`),{});\n    $W("mlc$quiz").set("visibility","visibleEventPass");\n    $W("a$correct").changeState("Play");\n    get("$timer") && clearInterval(get("$timer"));\n    set("$allowedKey",false);\n    if( get("$incorrect:count") > 0 ) {\n        onSetResult("s");\n    } else {\n        onSetResult("o");\n        let correctCount = File.get("$correct:count") || 0;\n        File.set("$correct:count",(parseInt(correctCount)+1));\n    }\n    \n    // 다음 퀴즈 신호 보냄\n    setTimeout(function(){\n        correctImage.moveTo(2000,2000);\n        onNextQuiz();\n    }, 4000);\n}\n\n// 다음 퀴즈 이동\nfunction onNextQuiz() {\n    $W("mlc$quiz").set("visibility","hidden");\n    let nextIndex = get("$flag:index");\n    fireEvent("Custom",`nextQuiz_${(parseInt(nextIndex)+1)}`);\n}\n\n/**\n * 위젯의 가운데 좌표를 반환\n *\n * @param {Widget} widget 해당 위젯\n *\n * @returns {object} obj\n *          {int} obj.x x좌표\n *          {int} obj.y y좌표\n *\n */\nfunction getCenterPos(widget) {\n  return {\n    x: widget.get(\'x\') + widget.get(\'w\') / 2,\n    y: widget.get(\'y\') + widget.get(\'h\') / 2,\n  };\n}\n\n/**\n * 상대 위젯의 중간 좌표로 moveTo\n *\n * @param {Widget} wgt 해당 위젯\n * @param {Widget} parentWgt 이동할 대상 위젯\n * @param {object} param 일반 moveTo 함수의 param 값\n *\n */\nfunction moveToCenterOfParent(widget, parentWgt, param) {\n  var centerPos = getCenterPos(parentWgt);\n  widget.moveTo(\n    centerPos.x - widget.get(\'w\') / 2,\n    centerPos.y - widget.get(\'h\') / 2,\n    param\n  );\n}\n\ndocument.addEventListener(\'keydown\', function (e) {\n    if( !get("$allowedKey") ){\n        return;\n    }\n    if (e.key === \'Enter\') {\n      const activeEl = document.activeElement;\n      if( activeEl.id.indexOf("btn_") > -1) {\n        onTapExample(activeEl.id.split("_")[2]);\n      }\n    }\n  });',
      },
      IJS: {},
    },
    5: {
      UI: {
        title: "Page 4",
        order: 5,
        apnCExe: { evPch: "" },
        CExe: {
          apxTdata: [{ data: {}, desc: "", id: "", type: "" }],
          apxTdataF: [
            { id: "", type: "", desc: "", json: { size: 0, data: "" } },
          ],
          apxTdataDesc: "",
        },
      },
      objects: {
        "3185A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332336,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIa1bc1f35ff0041a08bbbf8ff6dbe1408_png",
                C: 0,
                A: "transparent",
                a: false,
              },
            },
          },
          init: {
            position: { x: 0, y: 0 },
            shape: { type: 1, w: 1600, h: 900 },
            cx: 0,
            cy: 0,
          },
        },
        "3197A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101332434,
            data: {
              properties: { attrs: { ofl: "", Mode: "" } },
              wgtID: "apn.wgt.layerContainer",
              wgtTitle: "Multi-layer Container",
              styles: { state: "1", C: 0, k: "mlc$text", c: false },
            },
          },
          init: {
            position: { x: 380, y: 662 },
            shape: { type: 1, w: 757, h: 238 },
            cx: 0,
            cy: 0,
          },
          layout: {
            layers: {
              1: { title: "Layer1", id: "3198A5_" },
              2: { title: "Layer2", id: "3218A5_" },
            },
            layerIndex: 2,
            children: ["3198A5_", "3218A5_"],
          },
        },
        "3198A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332435 },
          init: {
            position: { x: 380, y: 662 },
            shape: { type: 1, w: 757, h: 238 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["3203A5_"] },
        },
        "3203A5_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332436,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Multiline Text",
              styles: {
                B: null,
                A: null,
                O: true,
                U: true,
                T: 0,
                Q: "구슬이 부족해 캐릭터가\n성장하지 못했습니다.",
                K: "70px",
                L: "#FFFFFF",
                W: "#107DD9",
                k: "mt$title_1",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 380, y: 662 },
            shape: { type: 1, w: 757, h: 238 },
            cx: 0,
            cy: 0,
          },
        },
        "3218A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332437 },
          init: {
            position: { x: 380, y: 662 },
            shape: { type: 1, w: 757, h: 238 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["3241A5_"] },
        },
        "3241A5_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332438,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Multiline Text",
              styles: {
                B: null,
                A: null,
                O: true,
                U: true,
                T: 0,
                Q: "캐릭터 성장이\n완료되었습니다!",
                K: "70px",
                L: "#FFFFFF",
                W: "#107dd9",
                k: "mt$title_2",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 380, y: 662 },
            shape: { type: 1, w: 757, h: 238 },
            cx: 0,
            cy: 0,
          },
        },
        "3603A5_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332441,
            data: {
              properties: { attrs: { ofl: "", v: 2 } },
              wgtID: "apn.wgt.singleText",
              wgtTitle: "Text",
              styles: {
                B: null,
                A: null,
                T: 0,
                J: "WAGURI",
                Q: "       캐릭터 성장",
                L: "#FFFFFF",
                k: "t$evolution",
                c: 1,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 654, y: 800.5 },
            shape: { type: 1, w: 221, h: 67 },
            cx: 0,
            cy: 0,
          },
        },
        "3642A5_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332455,
            data: {
              properties: { attrs: { ofl: "", v: 2 } },
              wgtID: "apn.wgt.singleText",
              wgtTitle: "Text",
              styles: {
                B: null,
                A: null,
                T: 0,
                J: "WAGURI",
                Q: "      처음으로",
                L: "#FFFFFF",
                k: "t$home",
                c: 1,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1316.5, y: 800 },
            shape: { type: 1, w: 221, h: 67 },
            cx: 0,
            cy: 0,
          },
        },
        "3792A5_": {
          module: "apn.CMedia",
          create: {
            type: 16777728,
            zIndex: 101332391,
            data: {
              properties: {
                state: "stop",
                attrs: {
                  apxMediaControl: true,
                  Control: "None",
                  Loop: "No",
                  apxStep: { current: 0, count: 1 },
                  v: 2,
                  stp: 0,
                  ttip: "",
                },
              },
              wgtID: "apn.wgt.audio",
              wgtTitle: "Audio",
              styles: {
                mediaID: "RA884fa53f2e2f454b9c09c7dabb1e9e99_mp3",
                c: false,
                k: "a$evolution_1",
              },
            },
          },
          init: {
            position: { x: -60, y: 0 },
            shape: { type: 1, w: 60, h: 60 },
            cx: 0,
            cy: 0,
          },
        },
        "3793A5_": {
          module: "apn.CMedia",
          create: {
            type: 16777728,
            zIndex: 101332392,
            data: {
              properties: {
                state: "stop",
                attrs: {
                  apxMediaControl: true,
                  Control: "None",
                  Loop: "No",
                  apxStep: { current: 0, count: 1 },
                  v: 2,
                  stp: 0,
                  ttip: "",
                },
              },
              wgtID: "apn.wgt.audio",
              wgtTitle: "Audio",
              styles: {
                mediaID: "RA31ea1b7d5d7c4708bd904be6b1605fe9_mp3",
                c: false,
                k: "a$evolution_2",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: -60, y: 60 },
            shape: { type: 1, w: 60, h: 60 },
            cx: 0,
            cy: 0,
          },
        },
        "3794A5_": {
          module: "apn.CMedia",
          create: {
            type: 16777728,
            zIndex: 101332393,
            data: {
              properties: {
                state: "stop",
                attrs: {
                  apxMediaControl: true,
                  Control: "None",
                  Loop: "No",
                  apxStep: { current: 0, count: 1 },
                  v: 2,
                  stp: 0,
                  ttip: "",
                },
              },
              wgtID: "apn.wgt.audio",
              wgtTitle: "Audio",
              styles: {
                mediaID: "RAcd97405f5ed64f39b833ba4a37cdff8d_mp3",
                c: false,
                k: "a$evolution_3",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: -60, y: 120 },
            shape: { type: 1, w: 60, h: 60 },
            cx: 0,
            cy: 0,
          },
        },
        "3825A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332439,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI7860df1f6188466ca49ce20dca32dbf4_png",
                C: 0,
                A: "transparent",
                a: false,
                j: "pointer",
                k: "i$evolution",
              },
            },
          },
          init: {
            position: { x: 651.5, y: 800 },
            shape: { type: 1, w: 222, h: 68 },
            cx: 0,
            cy: 0,
          },
        },
        "3826A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332440,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIf554a27b994d40debff3e628efd5d33f_png",
                C: 0,
                A: "transparent",
                a: false,
                j: "pointer",
                k: "i$home",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1317, y: 799.5 },
            shape: { type: 1, w: 222, h: 68 },
            cx: 0,
            cy: 0,
          },
        },
        "3850A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101332423,
            data: {
              properties: { attrs: { ofl: "", Mode: "" } },
              wgtID: "apn.wgt.layerContainer",
              wgtTitle: "Multi-layer Container",
              styles: { state: "1", C: 0, k: "mlc$evolution" },
            },
          },
          init: {
            position: { x: 400, y: 0 },
            shape: { type: 1, w: 800, h: 900 },
            cx: 0,
            cy: 0,
          },
          layout: {
            layers: {
              1: { title: "Layer1", id: "3851A5_" },
              2: { title: "Layer2", id: "3943A5_" },
              3: { title: "Layer3", id: "3985A5_" },
              4: { title: "Layer4", id: "3994A5_" },
            },
            layerIndex: 4,
            children: ["3851A5_", "3943A5_", "3985A5_", "3994A5_"],
          },
        },
        "3851A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332424 },
          init: {
            position: { x: 400, y: 0 },
            shape: { type: 1, w: 800, h: 900 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["7171A5_"] },
        },
        "3943A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332444 },
          init: {
            position: { x: 400, y: 0 },
            shape: { type: 1, w: 800, h: 900 },
            cx: 0,
            cy: 0,
          },
          layout: { children: [] },
        },
        "3985A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332446 },
          init: {
            position: { x: 400, y: 0 },
            shape: { type: 1, w: 800, h: 900 },
            cx: 0,
            cy: 0,
          },
          layout: { children: [] },
        },
        "3994A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332447 },
          init: {
            position: { x: 400, y: 0 },
            shape: { type: 1, w: 800, h: 900 },
            cx: 0,
            cy: 0,
          },
          layout: { children: [] },
        },
        "4276A5_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332457,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, C: 0, Y: "1.00", k: "r$white", c: 1 },
            },
          },
          init: {
            position: { x: 1648, y: 0 },
            shape: { type: 1, w: 1600, h: 900 },
            cx: 0,
            cy: 0,
          },
        },
        "7171A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332947,
            data: {
              properties: {
                attrs: {
                  apxAnimate: true,
                  cfg: {
                    frames: [
                      {
                        sprite: {
                          mediaID: "RId2696e714c8845f980bdb409c16a65de_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1397595dda6e4ae4b42cd64250ee6fe0_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9ad638a3a4734546a9b88f34f930fa73_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb21b2d0415904060b861ca4ec75ec52b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6c0df75c9bc24dcdbdc29f007fa23205_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIfcd3c36d88a943a7a0cffd7100bbbbd2_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI055abee8df564334b8f99a09311b0329_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId5eb6e47ef174674ba95ce315a375569_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1d0b72d7d6d743b58cc09922b275fb04_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6ba50d27f2e14ba993badc5e373bd2a1_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI949b799c10f047fab2a80230e90ffbe5_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIdef1697a4eb84d46b4c5e0b027b8678d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId3f2f6ed3cf84f018c10314457ce82a4_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI191bd48081e4439bae0b5683fe0ac7e9_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIfe735d8dd1914b38980bcc84833a89df_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI85644285638b48719cca8b8f581059fc_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0ebbce1581dd47f290bf7c70deb358d9_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6a4e952263f247c3a46e47b6791132b4_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIfef9727a5057471c92b69a778c9607b8_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc607b269e76f441eb80cd6f5a5a14d2b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIe26ecd2c4ec049928bc2cc41bb911c09_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId5750f8664d241baa93c30e1c730815c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI230d98e3323747ab86270122f9fd8a1c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIaf78bfb6f5d648a98446131fa6414a23_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIfba438c2783842babe907c96436e2103_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3fd5ed321fd746e8b0896ed44bb1f051_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI68888bf2ebc34e50914cd6505da9a1f3_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIdb7fe165073949eeb1c206c2530d1101_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIbc30b1f9e87844e0ac3b4084ff40599f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI31cb8f1d78e3441fb1c398521856e1c8_png",
                        },
                        duration: "42",
                      },
                    ],
                    idStep: "",
                  },
                },
                state: "stop",
              },
              wgtID: "ux.wgt.imgSprite",
              wgtTitle: "Sprite Images Animation",
              styles: {
                mediaID: "RId2696e714c8845f980bdb409c16a65de_png",
                a: false,
                k: "sia$char_1",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 630, y: 611 },
            shape: { type: 1, w: 266, h: 251 },
            cx: 0,
            cy: 0,
          },
          SPT: {},
        },
        "8150A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333421,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIf2fb6677304e41908fa8191f08a1e7d4_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 902, y: 56 },
            shape: { type: 1, w: 615, h: 74 },
            cx: 0,
            cy: 0,
          },
        },
        "8151A5_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101333422,
            data: {
              properties: { attrs: { ofl: "", v: 2 } },
              wgtID: "apn.wgt.singleText",
              wgtTitle: "Text",
              styles: { B: null, A: null, T: 0, L: "#FFFFFF", Q: "1단계 성장" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 933, y: 12.5 },
            shape: { type: 1, w: 344, h: 40 },
            cx: 0,
            cy: 0,
          },
        },
        "8152A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333423,
            data: {
              properties: { attrs: { ofl: "", Mode: "" } },
              wgtID: "apn.wgt.layerContainer",
              wgtTitle: "Multi-layer Container",
              styles: { state: "1", C: 0, k: "mlc$step_1" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 912, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: {
            children: ["8153A5_", "8155A5_"],
            layers: {
              1: { title: "Layer1", id: "8153A5_" },
              2: { title: "Layer2", id: "8155A5_" },
            },
            layerIndex: 2,
          },
        },
        "8153A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333424 },
          init: {
            position: { x: 912, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8154A5_"] },
        },
        "8154A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333425,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIc96e1f8cf38643598cdc6cb0dbf60c70_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 912, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
        },
        "8155A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333426 },
          init: {
            position: { x: 912, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8156A5_"] },
        },
        "8156A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333427,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIaef78fed289240188e13e04a13988858_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 912, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
        },
        "8157A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333428,
            data: {
              properties: { attrs: { ofl: "", Mode: "" } },
              wgtID: "apn.wgt.layerContainer",
              wgtTitle: "Multi-layer Container",
              styles: { state: "1", C: 0, k: "mlc$step_2" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1012, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: {
            children: ["8158A5_", "8160A5_"],
            layers: {
              1: { title: "Layer1", id: "8158A5_" },
              2: { title: "Layer2", id: "8160A5_" },
            },
            layerIndex: 2,
          },
        },
        "8158A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333429 },
          init: {
            position: { x: 1012, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8159A5_"] },
        },
        "8159A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333430,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIc96e1f8cf38643598cdc6cb0dbf60c70_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1012, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
        },
        "8160A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333431 },
          init: {
            position: { x: 1012, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8161A5_"] },
        },
        "8161A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333432,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIaef78fed289240188e13e04a13988858_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1012, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
        },
        "8162A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333433,
            data: {
              properties: { attrs: { ofl: "", Mode: "" } },
              wgtID: "apn.wgt.layerContainer",
              wgtTitle: "Multi-layer Container",
              styles: { state: "1", C: 0, k: "mlc$step_3" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1112, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: {
            children: ["8163A5_", "8165A5_"],
            layers: {
              1: { title: "Layer1", id: "8163A5_" },
              2: { title: "Layer2", id: "8165A5_" },
            },
            layerIndex: 2,
          },
        },
        "8163A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333434 },
          init: {
            position: { x: 1112, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8164A5_"] },
        },
        "8164A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333435,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIc96e1f8cf38643598cdc6cb0dbf60c70_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1112, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
        },
        "8165A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333436 },
          init: {
            position: { x: 1112, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8166A5_"] },
        },
        "8166A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333437,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIaef78fed289240188e13e04a13988858_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1112, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
        },
        "8167A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333438,
            data: {
              properties: { attrs: { ofl: "", Mode: "" } },
              wgtID: "apn.wgt.layerContainer",
              wgtTitle: "Multi-layer Container",
              styles: { state: "1", C: 0, k: "mlc$step_4" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1211, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: {
            children: ["8168A5_", "8170A5_"],
            layers: {
              1: { title: "Layer1", id: "8168A5_" },
              2: { title: "Layer2", id: "8170A5_" },
            },
            layerIndex: 2,
          },
        },
        "8168A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333439 },
          init: {
            position: { x: 1211, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8169A5_"] },
        },
        "8169A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333440,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIc96e1f8cf38643598cdc6cb0dbf60c70_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1211, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
        },
        "8170A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333441 },
          init: {
            position: { x: 1211, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8171A5_"] },
        },
        "8171A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333442,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIaef78fed289240188e13e04a13988858_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1211, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
        },
        "8172A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333443,
            data: {
              properties: { attrs: { ofl: "", Mode: "" } },
              wgtID: "apn.wgt.layerContainer",
              wgtTitle: "Multi-layer Container",
              styles: { state: "1", C: 0, k: "mlc$step_5" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1311, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: {
            children: ["8173A5_", "8175A5_"],
            layers: {
              1: { title: "Layer1", id: "8173A5_" },
              2: { title: "Layer2", id: "8175A5_" },
            },
            layerIndex: 2,
          },
        },
        "8173A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333444 },
          init: {
            position: { x: 1311, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8174A5_"] },
        },
        "8174A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333445,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIc96e1f8cf38643598cdc6cb0dbf60c70_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1311, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
        },
        "8175A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333446 },
          init: {
            position: { x: 1311, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8176A5_"] },
        },
        "8176A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333447,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIaef78fed289240188e13e04a13988858_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1311, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
        },
        "8177A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333448,
            data: {
              properties: { attrs: { ofl: "", Mode: "" } },
              wgtID: "apn.wgt.layerContainer",
              wgtTitle: "Multi-layer Container",
              styles: { state: "1", C: 0, k: "mlc$step_6" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1411, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: {
            children: ["8178A5_", "8180A5_"],
            layers: {
              1: { title: "Layer1", id: "8178A5_" },
              2: { title: "Layer2", id: "8180A5_" },
            },
            layerIndex: 2,
          },
        },
        "8178A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333449 },
          init: {
            position: { x: 1411, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8179A5_"] },
        },
        "8179A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333450,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIc96e1f8cf38643598cdc6cb0dbf60c70_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1411, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
        },
        "8180A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333451 },
          init: {
            position: { x: 1411, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8181A5_"] },
        },
        "8181A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333452,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIaef78fed289240188e13e04a13988858_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1411, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
        },
        "8182A5_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101333453,
            data: {
              properties: { attrs: { ofl: "", v: 2 } },
              wgtID: "apn.wgt.singleText",
              wgtTitle: "Text",
              styles: { B: null, A: null, T: 0, L: "#FFFFFF", Q: "2단계 성장" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1130, y: 12.5 },
            shape: { type: 1, w: 344, h: 40 },
            cx: 0,
            cy: 0,
          },
        },
        "8183A5_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101333454,
            data: {
              properties: { attrs: { ofl: "", v: 2 } },
              wgtID: "apn.wgt.singleText",
              wgtTitle: "Text",
              styles: { B: null, A: null, T: 0, L: "#FFFFFF", Q: "3단계 성장" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1331, y: 12.5 },
            shape: { type: 1, w: 344, h: 40 },
            cx: 0,
            cy: 0,
          },
        },
        "8184A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333455,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIf894b5caa0c4465c83b829d96079407b_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1101, y: 48 },
            shape: { type: 1, w: 21, h: 20 },
            cx: 0,
            cy: 0,
          },
        },
        "8185A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333456,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIf894b5caa0c4465c83b829d96079407b_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1300, y: 48 },
            shape: { type: 1, w: 21, h: 20 },
            cx: 0,
            cy: 0,
          },
        },
        "8186A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333457,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIf894b5caa0c4465c83b829d96079407b_png",
                C: 0,
                A: "transparent",
                a: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1499, y: 48 },
            shape: { type: 1, w: 21, h: 20 },
            cx: 0,
            cy: 0,
          },
        },
      },
      module: "apn.CFlowPage",
      BG: { fillStyle: "#ffffff" },
      SPT: {
        spt_EvtBubble:
          'if( !Event.target ) {\n    if( Event.type == "Page Create") {\n        onPageCreate();\n    } else if( Event.type == "Page Run") {\n        onPageRun();\n    }\n} else {\n    if( Event.type == "Tap Start") {\n        const label = Event.target.get("label");\n        if( label == "i$evolution" ) {\n            onTapEvolution();   \n        } else if( label == "i$home" ) {\n            goHome();\n        }\n    }\n}\n\nfunction onPageCreate() {\n    // 타이틀\n    const elTitle = $W("mt$title_1").tag; // 또는 $W("t$title").tag\n    \n    elTitle.style.webkitTextStroke = \'4px #107DD9\'; // Chrome, Safari\n    elTitle.style.textStroke = \'4px #107DD9\';        // 표준 속성 (일부 Firefox, Edge)\n    \n    // 타이틀 2\n    const elSubTitle = $W("mt$title_2").tag;\n    \n    elSubTitle.style.webkitTextStroke = \'4px #107DD9\';\n    elSubTitle.style.textStroke = \'4px #107DD9\';\n    \n    const elEvolution = $W("t$evolution").tag;\n    \n    elEvolution.style.webkitTextStroke = \'2px #C14000\';\n    elEvolution.style.textStroke = \'2px #C14000\';\n    \n    const elHome = $W("t$home").tag;\n    \n    elHome.style.webkitTextStroke = \'2px #C14000\';\n    elHome.style.textStroke = \'2px #C14000\';\n    \n    elEvolution.setAttribute("tabindex",20);\n    elHome.setAttribute("tabindex",21);\n    \n    elEvolution.id = "btn_evolution";\n    elHome.id = "btn_home";\n    // elTitle.setAttribute("tabindex",0);\n    // elSubTitle.setAttribute("tabindex",0);\n    \n    $W("sia$char_1").changeState("Loop");\n\n}\n\nfunction onPageRun() {\n    const stepCount = File.get("$correct:count") || 0;\n    for (let i = 1; i <= stepCount; i++) {\n      $W("mlc$step_" + i).changeState("Layer2");\n    }\n    if( stepCount < 2 ) {\n        $W("mlc$text").set("visibility","visible");\n        $W("i$evolution").set("visibility","hidden");\n        $W("t$evolution").set("visibility","hidden");\n    }\n\n    $W("sia$char_1").tag.children[0].id = "char_canvas_1";\n    \n    set("$step:count",stepCount);\n}\n\n// 진화 버튼 클릭\nfunction onTapEvolution() {\n    \n    const white = $W("r$white");\n    const evolutionLayer = $W("mlc$evolution");\n    const title = $W("mlc$text");\n    \n    let brightness = 1;\n    let blur = 0;\n    let contrast = 100;\n    let hue = 0;\n\n    const evolveEffect = () => {\n        \n      const canvas = document.getElementById("char_canvas_1");\n    \n      brightness = Math.min(brightness + 0.01, 10);\n      blur = Math.min(blur + 0.1, 3);\n      contrast = Math.min(contrast + 1, 130);\n      hue = (hue + 2) % 360;\n    \n      canvas.style.filter = `\n        brightness(${brightness})\n        blur(${blur}px)\n        contrast(${contrast}%)\n        hue-rotate(${hue}deg)\n      `;\n    \n      if (brightness < 10 || blur < 3 || contrast < 130 || hue !== 0) {\n        requestAnimationFrame(evolveEffect);\n      }\n    };\n\n    evolveEffect();\n    \n    setTimeout(function(){\n        evolutionLayer.set("visibility","hidden");\n        fireEvent("Custom","hideHeader");\n        fireEvent("Custom","showChar_2");\n        white.moveTo(0,0);\n        white.opacityTo(1);\n        white.opacityTo(0, {timing:"ease-in 1000ms",onEnd:function(){\n            if( get("$step:count") <= 3 ) {\n                // 1단계 성장일때만\n                fireEvent("Custom","showHeader");\n                fireEvent("Custom","showTitle");\n                //title.set("visibility","visible");\n            }\n        }});\n        // 3단계 성장(6개)\n        if( get("$step:count") >= 6 ) {\n            setTimeout(function(){\n                fireEvent("Custom","hideHeader");\n                fireEvent("Custom","showChar_3");\n                white.opacityTo(1);\n                white.opacityTo(0, {timing:"ease-in 1000ms"});\n                white.moveTo(0,0);\n                setTimeout(function(){\n                    fireEvent("Custom","showChar_4");\n                    white.opacityTo(1);\n                    white.opacityTo(0, {timing:"ease-in 1000ms",onEnd:function(){\n                        fireEvent("Custom","showHeader");\n                        fireEvent("Custom","showTitle");\n                        //title.set("visibility","visible");\n                    }});\n                    white.moveTo(0,0);\n                }, 1500);\n            }, 1500);    \n        }\n        // 2단계 성장(4~5개)\n        else if( get("$step:count") >= 4 ) {\n            setTimeout(function(){\n                fireEvent("Custom","hideHeader");\n                fireEvent("Custom","showChar_3");\n                white.opacityTo(1);\n                white.opacityTo(0, {timing:"ease-in 1000ms",onEnd:function(){\n                    fireEvent("Custom","showHeader");\n                    fireEvent("Custom","showTitle");\n                    //title.set("visibility","visible");\n                }});\n                white.moveTo(0,0);\n            }, 1500);    \n        }\n    }, 6000);\n    \n    if( get("$step:count") >= 6 ) {\n        $W("a$evolution_3").changeState("Play");    \n    } else if( get("$step:count") >= 4 ) {\n        $W("a$evolution_2").changeState("Play");    \n    } else {\n        $W("a$evolution_1").changeState("Play");    \n    }\n    \n    $W("t$evolution").set("visibility","hidden");\n    $W("i$evolution").set("visibility","hidden");\n    \n    title.changeState("Layer2");\n    \n}\n\n// 홈으로\nfunction goHome() {\n    // fireEvent("Custom","hideHeader");\n    // fireEvent("Custom","clearResult");\n    window.location.href = "";\n}\n\ndocument.addEventListener(\'keydown\', function (e) {\n    if (e.key === \'Enter\') {\n      const activeEl = document.activeElement;\n      if( activeEl.id === "btn_evolution") {\n         onTapEvolution();\n      } else if( activeEl.id === "btn_home") {\n        //   File.browse("pages").forEach((page)=>{\n        //     if( page.label == "Page 1" ) {\n        //         linkTo(page.id, {reset:true});\n        //     }\n        //   });\n          goHome();\n      }\n    }\n  });',
        pageRun: "",
        pageLoad: "",
      },
    },
    S: {
      UI: { title: "START", noEditable: true },
      objects: {},
      module: "apn.CFlowStartPage",
      ITRs: [
        {
          event: "flickLeft",
          action: "LTP",
          from: { objectID: "$SP", pageID: "S" },
          to: { pageID: "1", type: "1" },
          transit: {},
        },
      ],
    },
    E: {
      UI: { title: "OUT", noEditable: true },
      objects: {},
      module: "apn.CFlowEndPage",
    },
    I: {
      UI: { title: "IN", noEditable: true },
      objects: {},
      module: "apn.CFlowInPage",
    },
    C: {
      UI: { title: "CLIENT", noEditable: true },
      objects: {},
      module: "apn.CFlow2ndStartPage",
    },
  },
  layouts: {
    1: {
      CTXT: { deviceID: "EDU", wgtLibID: "EDU", exeID: "standard" },
      property: {
        screenSize: { w: 1600, h: 900 },
        styles: {
          normal: {
            fontStyle: "#000000",
            fontStrokeStyle: "#FFA500",
            fontStrokeWidth: 0,
            font: "ONE-Mobile-Title",
            fontSize: "24px",
            textAlign: "center",
            textValign: "middle",
            fillStyle: "#FFFFFF",
            strokeStyle: "#7E7E7E",
            lineWidth: 1,
            lineDash: null,
            lineEnd: "square",
            borderRadiusTopLeft: 0,
            borderRadiusTopRight: 0,
            borderRadiusBottomLeft: 0,
            borderRadiusBottomRight: 0,
            angle: 0,
            title: "",
            visibility: true,
            alpha: 1,
            dragX: false,
            dragY: false,
            dragInParent: false,
            dragContainParent: false,
            csr: "apn.auto",
            fontItalic: false,
            fontBold: false,
            fontUnderlined: false,
            textMultiLine: false,
            textWordWrap: true,
            ltrSp: 0,
            text: "",
            textFit: 0,
            lnSp: 0,
          },
        },
        properties: { exeScript: 2 },
        skinID: "Apple",
        themeID: "EDU",
        skinShow: 1,
        CExe: {
          layout: {
            layout: "C",
            padding: { left: 0, right: 0, top: 0, bottom: 0, ofl: "" },
            style: { bgImgPtn: "tile", bgImg: {}, bgClr: "#000000" },
          },
          enhcTxt: "Y",
          loading: {
            type: "",
            img: {
              type: "",
              mediaID: "RI4db8b0575ebc42a1ae688f2e170b37bb_png",
              w: 1600,
              h: 900,
            },
            spinner: { type: "ring1", strokeClr: null, fillClr: "#FFFFFF" },
          },
          event: { TS1: "", PE: "", SL: "" },
          inputSave: "",
          inputTextScroll: "",
          inputDisableTabOrder: "",
          lng: { ime: "" },
          edtOpts: { keepLabelOnCopy: "", useGroupProp: "" },
          pageOutline: {
            radius: [{ LT: 0, LB: 0, RT: 0, RB: 0 }],
            shadow: [{ x: 0, y: 0, spread: 0, color: null }],
          },
          scBar: {
            clrThumb: "#7f7f7f",
            clrThumbHover: "#7f7f7f",
            clrTrack: "#dddddd",
            cRdr: "50%",
            noCustom: "",
          },
          splash: { img: {}, bgClr: null, w: 40 },
          brTm: { frameClr: null },
          spt2impt: {
            js: [{ name: "", lnP: "", lnE: "" }],
            media: [{ key: "", cmt: "", md: {} }],
            mediaA: [{ key: "", cmt: "", md: {} }],
          },
          spt2preq: [{ json: { size: 0, data: "" } }],
          mdLD: { type: "" },
          vdStrictPlay: "",
          apCH: { acnt: 0, vcnt: 0 },
          mediaOnHidden: "",
          js: { fs: [{ js: { size: 0, data: "" }, v: "", c: "" }] },
          pubDateUpdate: "",
          pubFonts: [{ face: "", path: "" }],
          customPath: { core: "" },
          exFonts: [
            {
              title: "ONE-Mobile-Title",
              face: "ONE-Mobile-Title",
              ln: "ko",
              noBold: "N",
              path: "https://cdn.jsdelivr.net/npm/@noonnu/one-mobile-title@0.1.0/index.min.css",
              pathL: "./css/fonts.css",
              pathL2: "",
            },
            {
              title: "WAGURI",
              face: "WAGURI",
              ln: "ko",
              noBold: "N",
              path: "https://cdn.jsdelivr.net/npm/@noonnu/one-mobile-title@0.1.0/index.min.css",
              pathL: "./css/fonts.css",
              pathL2: "",
            },
          ],
          exFontsPub: "",
          sns: { ogI: "", ogT: "", ogD: "", srD: "" },
          prvMode: { urlPrm: "" },
          apxTdata: [
            {
              data: {
                st: [
                  { t: "Name", c: "", o: "", type: "text", w: 0, apxIndex: 1 },
                ],
                data: {
                  idx: 2,
                  st: {
                    1: {
                      t: "Name",
                      c: "",
                      o: "",
                      type: "text",
                      w: 0,
                      apxIndex: 1,
                    },
                  },
                  tbl: [{ 1: "" }],
                  maxCount: 0,
                  o: "",
                },
              },
              desc: "",
              id: "",
              type: "",
            },
          ],
          apxTdataF: [
            {
              id: " Duplicated1",
              type: "",
              desc: "",
              json: { size: 0, data: "" },
            },
          ],
          apxTdataDesc: "",
        },
      },
      pages: {},
    },
  },
  flow: {
    pages: {
      1: { init: { position: { x: 0, y: 0 } } },
      2: { init: { position: { x: 2132, y: 0 } } },
      3: { init: { position: { x: 1330, y: 2261 } } },
      5: { init: { position: { x: 5320, y: -931 } } },
      S: { init: { position: { x: 1064, y: -1463 } } },
    },
  },
  index: { pageID: 6, layoutID: 2, rscID: 284368309 },
  rsc: {},
};
