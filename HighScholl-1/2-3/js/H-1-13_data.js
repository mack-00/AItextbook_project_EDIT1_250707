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
    title: "[게임으로 정리하기] Ⅰ. 컴퓨팅 시스템",
    categoryId: "",
    type: "P",
    id: "dda3f4238f0f41c9b28a338ae80562dc",
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
                mediaID: "RId8d068b3b81240bf81cb677d6c9218cb_png",
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
                L: "#5B15B7",
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
          '// 타이틀\nconst elTitle = $W("t$title").tag; // 또는 $W("t$title").tag\n\nelTitle.style.webkitTextStroke = \'12px #A782CF\'; // Chrome, Safari\nelTitle.style.textStroke = \'12px #A782CF\';        // 표준 속성 (일부 Firefox, Edge)\n//elTitle.style.letterSpacing = \'150px\';\n\n// const circleType = new CircleType(elTitle);\n// circleType.radius(3500);\n\n// 서브 타이틀\nconst elSubTitle = $W("t$sub_title").tag;\n\nelSubTitle.style.webkitTextStroke = \'2px #FFFFFF\';\nelSubTitle.style.textStroke = \'2px #FFFFFF\';\n//elSubTitle.style.textShadow = \'6px 6px #ffffff\';\n\nconst elStart = $W("t$start").tag;\n\nelStart.style.webkitTextStroke = \'4px #C14000\';\nelStart.style.textStroke = \'4px #C14000\';\nelStart.id = "btn_start";\n\nconst elHowto = $W("t$howto").tag;\n\nelHowto.style.webkitTextStroke = \'4px #C14000\';\nelHowto.style.textStroke = \'4px #C14000\';\nelHowto.id = "btn_howto";\n\nwindow.document.addEventListener(\'contextmenu\', function (e) {\n  e.stopPropagation(); // 내부에서 막아도 우선권을 가짐\n}, true);\n\nwindow.document.oncontextmenu = null;\n\nelTitle.setAttribute("tabindex",1);\nelSubTitle.setAttribute("tabindex",2);\nelStart.setAttribute("tabindex",3);\nelHowto.setAttribute("tabindex",4);\n\ndocument.addEventListener(\'keydown\', function (e) {\n    if (e.key === \'Enter\') {\n      const activeEl = document.activeElement;\n      if( activeEl.id === "btn_start") {\n          File.browse("pages").forEach((page)=>{\n            if( page.label == "Page 3" ) {\n                linkTo(page.id, {reset:true});\n            }\n          });\n      } else if( activeEl.id === "btn_howto") {\n          File.browse("pages").forEach((page)=>{\n            if( page.label == "Page 2" ) {\n                linkTo(page.id, {reset:true});\n            }\n          });\n      }\n    }\n  });',
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
                mediaID: "RIe3126fa3f005426ebc2bf897190e4995_png",
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
                        mediaID: "RIccfdc86d55e64e6bb7197c2cbcf230f4_png",
                      },
                      down: {
                        mediaID: "RIccfdc86d55e64e6bb7197c2cbcf230f4_png",
                      },
                      hover: {
                        mediaID: "RIccfdc86d55e64e6bb7197c2cbcf230f4_png",
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
                mediaID: "RIccfdc86d55e64e6bb7197c2cbcf230f4_png",
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
            shape: { type: 1, w: 1185.3548387096766, h: 80 },
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
          layout: { children: ["2870A3_", "2872A3_", "2873A3_"] },
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
                mediaID: "RIb9c19df0d9f34e8fb323c38d09464c6f_png",
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
            position: { x: 445, y: 488 },
            shape: { type: 1, w: 252, h: 373 },
            cx: 0,
            cy: 0,
          },
        },
        "2873A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332324,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_2" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1030, y: 384 },
            shape: { type: 1, w: 252, h: 373 },
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
          layout: { children: ["2941A3_", "3055A3_", "3066A3_", "3067A3_"] },
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
                mediaID: "RI10b0ebda27de4d0abaeb76eedf9424dd_png",
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
          layout: { children: ["2979A3_", "3072A3_", "3119A3_", "4512A3_"] },
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
                mediaID: "RIa8ec63f73b6d43b28663e7559a5261c8_png",
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
                          mediaID: "RI474b991610084bbeb78eb29ea2016f0a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI237e6472586f4ec581e2e5b4826f6567_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb235dad71cd344c8b50e4326487f6365_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6535c9e9f7f5484aa9a2cc6fc02aea64_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3b28f4bcacd34c05be008fc310aa0923_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb55ad2f2e7fe41368cbf644717aa900c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIe37883a57c3a4ba7a5ee3b5f207cf50d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4ad5eb2802614ad69eb4887252c72a6a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIccdac317701549b48bc198d95153571f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI585f56f20fec41dcb5333d2ab65c896f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI49458975471646b48f3fdc83af47fa5e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI250b4878a89c4a85a3a899d80341b603_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIff00004c982940f6b990c054c27a1add_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7ef33b62d5034c74a06dc58eae31e216_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI2f2209550c2e4ec08283c4535b49fb2b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4bd47fdfa0254c368b9922bb4a16edfa_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3a80012e87f542bfac91d0f977085458_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIca21b664805c4846b0317ae672c4684d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI52c4c1f75b9e4b85989f9ab4d3d256ea_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI81a671949128401d8a376b479066e4f8_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI390bb7b00a324b7fb3bc916a57ab775a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI8bf10f7bd9f34735ac75c6f07f8bc56e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf4caf609fe1449cb85438c4a5945e2c7_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0e6d025e1f524912b7c852cab7d94d0d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIbb9f088ced93436da999b73d4b8caebc_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc47498c731bb485abbd45fe917752879_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI99d8d00abc784dcc9525142dcf6315b7_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI34241fbc12aa4d2ba845e69561612db4_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI00320555dc3e433d9d87484093c95644_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4102097f72444e9d83491321188cffd0_png",
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
                mediaID: "RI474b991610084bbeb78eb29ea2016f0a_png",
                a: false,
                k: "sia$char",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 97, y: 488 },
            shape: { type: 1, w: 252, h: 373 },
            cx: 0,
            cy: 0,
          },
          SPT: {},
        },
        "3055A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332330,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_3" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 464, y: 504 },
            shape: { type: 1, w: 252, h: 373 },
            cx: 0,
            cy: 0,
          },
        },
        "3066A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332331,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_4" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 850, y: 386 },
            shape: { type: 1, w: 252, h: 373 },
            cx: 0,
            cy: 0,
          },
        },
        "3067A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332332,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_5" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1219, y: 462 },
            shape: { type: 1, w: 252, h: 373 },
            cx: 0,
            cy: 0,
          },
        },
        "3072A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332333,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_6" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 338, y: 503 },
            shape: { type: 1, w: 252, h: 373 },
            cx: 0,
            cy: 0,
          },
        },
        "3119A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332334,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_7" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1068, y: 426 },
            shape: { type: 1, w: 252, h: 373 },
            cx: 0,
            cy: 0,
          },
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
                size: 2062,
                data: '[\n  {\n    "id": 1,\n    "question": "도메인 주소는 통신할 때 송신자와 수신자를 구분하기 위해 컴퓨터에 부여되는 주소이며, IP 주소는 도메인 주소를 알기 쉽게 문자로 바꿔 표현한 것이다.",\n    "fontSize": "34px",\n    "type": "ox",\n    "answer": "x"\n  },\n  {\n    "id": 2,\n    "question": "무선 네트워크는 UTP 케이블, 광섬유 케이블 등의 매체를 이용하여 데이터를 주고받는 네트워크이다.",\n    "fontSize": "34px",\n    "type": "ox",\n    "answer": "x"\n  },\n  {\n    "id": 3,\n    "question": "개인용 컴퓨터 운영체제의 네트워크를 설정할 때 (\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0)를 사용하면 게이트웨이 주소를 자동으로 설정할 수 있다.",\n    "fontSize": "34px",\n    "type": "two_choice",\n    "answer": "1",\n    "choices": {\n      "1": {\n        "text": "DHCP",\n        "fontSize": "50px"\n      },\n      "2": {\n        "text": "서브넷 마스크",\n        "fontSize": "50px"\n      }\n    }\n  },\n  {\n    "id": 4,\n    "question": "(\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0)은 사물에 다양한 센서와 통신 기능을 장착하여 사물 간 정보 교류가 가능하게 만든 것으로, 각각의 사물이 제공하던 것 이상의 새로운 가치를 제공하는 기술이다.",\n    "fontSize": "34px",\n    "type": "two_choice",\n    "answer": "2",\n    "choices": {\n      "1": {\n        "text": "피지컬 컴퓨팅",\n        "fontSize": "50px"\n      },\n      "2": {\n        "text": "사물 인터넷",\n        "fontSize": "50px"\n      }\n    }\n  },\n  {\n    "id": 5,\n    "question": "사람의 움직임을 감지하는 인체 감지 센서는 (\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0) 장치이다.",\n    "fontSize": "34px",\n    "type": "two_choice",\n    "answer": "1",\n    "choices": {\n      "1": {\n        "text": "입력",\n        "fontSize": "50px"\n      },\n      "2": {\n        "text": "출력",\n        "fontSize": "50px"\n      }\n    }\n  },\n  {\n    "id": 6,\n    "question": "전등을 켜고 끄는 LED는 (\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0) 장치이다.",\n    "fontSize": "34px",\n    "type": "two_choice",\n    "answer": "2",\n    "choices": {\n      "1": {\n        "text": "입력",\n        "fontSize": "50px"\n      },\n      "2": {\n        "text": "출력",\n        "fontSize": "50px"\n      }\n    }\n  }\n]\n',
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
                mediaID: "RIb5d460c89a2a486f91d13e6028ec33ad_png",
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
                mediaID: "RIaacf4d3bcabd4032b7db416675794603_png",
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
                mediaID: "RIba53f30a88944e27ba0c020aa98a266b_png",
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
                mediaID: "RIb5d460c89a2a486f91d13e6028ec33ad_png",
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
                mediaID: "RIaacf4d3bcabd4032b7db416675794603_png",
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
                mediaID: "RIba53f30a88944e27ba0c020aa98a266b_png",
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
                mediaID: "RIb5d460c89a2a486f91d13e6028ec33ad_png",
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
                mediaID: "RIaacf4d3bcabd4032b7db416675794603_png",
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
                mediaID: "RIba53f30a88944e27ba0c020aa98a266b_png",
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
                mediaID: "RIb5d460c89a2a486f91d13e6028ec33ad_png",
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
                mediaID: "RIaacf4d3bcabd4032b7db416675794603_png",
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
                mediaID: "RIba53f30a88944e27ba0c020aa98a266b_png",
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
                mediaID: "RIb5d460c89a2a486f91d13e6028ec33ad_png",
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
                mediaID: "RIaacf4d3bcabd4032b7db416675794603_png",
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
                mediaID: "RIba53f30a88944e27ba0c020aa98a266b_png",
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
                mediaID: "RIb5d460c89a2a486f91d13e6028ec33ad_png",
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
                mediaID: "RIaacf4d3bcabd4032b7db416675794603_png",
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
                mediaID: "RIba53f30a88944e27ba0c020aa98a266b_png",
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
                mediaID: "RI902547a631804487af77fcc84f8c4b83_png",
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
                          mediaID: "RI95ba6a53630646679ffa52da4252a4e9_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI165349d3bd734cd683963e41e5a5f1ae_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI8e9d2eb5f61b4256a0eee83381ba16b0_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIc991230e7f0b46e79d7a85823eb58f1d_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI2c93f638f9114b8591cc9cfacd2f6494_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI951b3e8662aa4972a02b0e118405fa85_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI0e8f963a2eeb4e73bdf305c9050920de_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIc202a9e443374fc2a71cd40186540071_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIabb27bb86a8a4240a24e1562581cf07e_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI10e7d111620f4f509ed845bf849c754f_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI732484f48c31446da88c2fcb5479476b_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIe807e34787614a5db94126db8749204e_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI22bbadb7671b43d4a38e7e6919c65c95_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI32f33194351748f9821a9ccf1ca1a305_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIf96baf503a824e8da1d198804ba40d54_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIa747c6d1830b4f45867e7fb32eacc6f6_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI6b7ebd6b37814b66b554a744d5536ac1_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIbb6030813a4e4d0595329a15b6964520_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI60d6e3feee514e9b8b549c2a3681f31c_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI9a00ab842c734ec99689d4f293869893_png",
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
                mediaID: "RI95ba6a53630646679ffa52da4252a4e9_png",
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
                mediaID: "RI2ee499653ec24af1a6ef89f0db226d57_png",
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
                mediaID: "RIbb810d2a24d44d9495b1271dff6420dd_png",
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
                mediaID: "RI1fac41aa181646629c0ebdf043fa40e2_png",
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
                mediaID: "RIa01db78377404208ba9a5d23f7437aa0_png",
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
                mediaID: "RIed06e5cfc07949cdaa2e750e46c97e76_png",
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
                mediaID: "RIccdaac316ce0442c8bca02d6934ad3d3_png",
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
                mediaID: "RI9a00ab842c734ec99689d4f293869893_png",
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
                mediaID: "RI60d6e3feee514e9b8b549c2a3681f31c_png",
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
                mediaID: "RIbb6030813a4e4d0595329a15b6964520_png",
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
                mediaID: "RI6b7ebd6b37814b66b554a744d5536ac1_png",
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
                mediaID: "RIa747c6d1830b4f45867e7fb32eacc6f6_png",
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
                mediaID: "RIf96baf503a824e8da1d198804ba40d54_png",
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
                mediaID: "RI32f33194351748f9821a9ccf1ca1a305_png",
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
                mediaID: "RI22bbadb7671b43d4a38e7e6919c65c95_png",
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
                mediaID: "RIe807e34787614a5db94126db8749204e_png",
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
                mediaID: "RI732484f48c31446da88c2fcb5479476b_png",
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
                mediaID: "RI10e7d111620f4f509ed845bf849c754f_png",
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
                mediaID: "RIabb27bb86a8a4240a24e1562581cf07e_png",
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
                mediaID: "RIc202a9e443374fc2a71cd40186540071_png",
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
                mediaID: "RI0e8f963a2eeb4e73bdf305c9050920de_png",
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
                mediaID: "RI951b3e8662aa4972a02b0e118405fa85_png",
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
                mediaID: "RI2c93f638f9114b8591cc9cfacd2f6494_png",
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
                mediaID: "RIc991230e7f0b46e79d7a85823eb58f1d_png",
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
                mediaID: "RI8e9d2eb5f61b4256a0eee83381ba16b0_png",
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
                mediaID: "RI165349d3bd734cd683963e41e5a5f1ae_png",
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
                mediaID: "RI95ba6a53630646679ffa52da4252a4e9_png",
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
                mediaID: "RAc9c98b59e9ef46ba8dba090a5a2a73b8_mp3",
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
                mediaID: "RAcf5f2904f50044eea0a576c2b6382aca_mp3",
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
                mediaID: "RI261a8d627f8547fb9f37a4dcd5393466_png",
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
                mediaID: "RIc5d1152be6f04e59b91ea4eb46910b34_png",
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
                mediaID: "RIef2bbd0bc5614b2484e78b4908709824_png",
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
                mediaID: "RI731d5baf7fdd4607bfe3af390324ae49_png",
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
                          mediaID: "RI3d82a4f7bbe4432692e7855cf98e7a4d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIccfa2d0b7235425880ff4f7eabbe7a3e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc109dadedad64f0d91122523a2c3394d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIfc57f5326b1e4ee28d47ddd1a181b546_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIbc5356f290b54cbd9d444a4f5b658022_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc42109704a2e45659639292f3a941baa_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI192eb012efd74ec48b71a69e7a76e908_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc7c4b238b5dc4cd78cb2f04dda8b60a2_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId0d05531210245a596302839066aaa0f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb8f4f94498694eb68e0e1c71507d5775_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI8cd796d034574f91bfd9a1bed440e527_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf650f1584a6449fa92cfd333e18a06a4_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7503f748e8a141ffbb702d948a968829_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI56da564477404a0aae328204d931ec9a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId9dda4de529e431c9ab8473a83686001_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1c9ee7168f174c238a69dd395bb63b5c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf156c21c61ac49288b54533cec130ac0_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI817a38cc537f410bab8024efb9fedac1_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc658b68fc999414684097e3f8247cb52_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIac0416bb110f4a0b945e7043e252d043_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIdb776e7fe5cf4e17bee2d3a960ba4ded_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3de77133b23c413b87117085409f2d19_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf068d31fba20439e8c9edbefd0f53df6_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId7a2d59e77fb4dd7990b27108ceb355d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6f40d062ee9a4dfab3283504e1134ffd_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc1340b8bc3944f30b61b1d2a813d9576_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6727ababea94432e8438c71f250b6ee4_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3d299d133c8a42d9b0f91df54ad00e98_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI2efc0b84bac046348ac0867e7ebf27f0_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIe3db227deec140df922846f76c2750c5_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI34de33ea2c864bf6a82d184db54ef872_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6982820a887f442fb5fec3235be52750_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI338209e08900417ba6ae01f025d9ebf0_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI21c6b3580b924cc3b89388cc89f331b0_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIaa775f067b394e88911f087ded7f8add_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIad110ca627104bd0be364867847e7f4d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI2a6fcf8fd96e433d97012334d57424b6_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId2250567ca2b44198370923df0932d2a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIbc41346448f246a0bc76557153ba49f6_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIdc1fcc6e746e41e193b306fe6ca9667c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7e6bf397e07f478b96f635f2fbaf6013_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf616e613fcf14fd59bb4aa7c5fa325d0_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIe86a3aea8368404d9d2550fc14117a5e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIaed4b84046e44c9dbe7cdc8d2f81dcb3_png",
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
                mediaID: "RI3d82a4f7bbe4432692e7855cf98e7a4d_png",
                a: false,
                k: "sia$char_3",
                c: false,
                Y: "0.00",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 593, y: 101 },
            shape: { type: 1, w: 380, h: 780 },
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
                          mediaID: "RI119afdf46b5b4cc381033151954a3814_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIfadc29088dc3473290818ba0a2d76828_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0776097038a94cb4a3b6148ac78241f3_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI478499cd664d49c5aa5778e6c742427e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI8ef7e5ba2f6f45c1bfedf56b1c1d53f8_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI5db8e4b34bc14cce98c80c3d9da7b536_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI46da85829dcf4ac682993f468c48ef7f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc6224f03f4344ff9a33aeb4263aa13fb_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9ec6dc448adc4b44a8ec249d6591b101_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI8594f8bf6cce467fb21187d2c6637a3c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0be946b4e96847c0b6e4931ac302df6c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb2b669a419904454bfc42d5096f995c9_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI21a2dc6b21414c289ff171a83e34c2b9_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI43348a788e1f423b867c4d5ec3d1af3a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI62cacfcdcbc74d248a6f2de5b5d19f6a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0f420051d4fa4e5e98c1d1a49025c53d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI8e88a959d2ec4c189798f9d50ec28652_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9398223b020e4b58b44af1c667ec496f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf4d945599a4a4a6fa2e0e606c788e348_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIac3a93e670004633b306951242023b20_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIab9685104f84493ebdea1defa1f42768_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI48a8561c77704c93b9c88ac0b1a0c95a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb129d3468a054e489e3013f9944d254d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3b0f69934bc54dd8afacbd4840d608ac_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIbfc66d5962094cf685cba4ff3cde2168_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId3422dfb3d7544cba83db53ab88a18a9_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI948484c128af44c9b66c4493163a8663_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI797ef5c90d214113adff2466c56f7bbe_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf039a23e424b4b169c57d5c9ce425f26_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId376b57425ea4d33b526b8c7edd13cb4_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI661ef2682cef4b78a2e1fa71aaf6ef1e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIcf68d845811a4d8aaf3176e5c42f8730_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIbf71caa6b6c147c8b880b5402fd3bd3f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7246d6f73bb94b799234490d1c7b6d91_png",
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
                mediaID: "RI119afdf46b5b4cc381033151954a3814_png",
                a: false,
                k: "sia$char_4",
                c: false,
                Y: "0.00",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 535, y: 47 },
            shape: { type: 1, w: 540, h: 830 },
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
                          mediaID: "RI76bbf88cb18747829ad19fecfc26219b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9401bd221d6a405d8bb28e454bf6341e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3a8cbf01318746eab3eeff5775f72b5e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIbcd6a4b2f1b44320a9007e3480780e83_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIcabc20ccb99847d2b563949a4fa033f6_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId28d2db1f89d49e095ac21133834d24d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI5a0c8894123b46a38a26b773a2217ef0_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb9d909101c0b4db0ad6d26fcd6793b93_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa89ad112a1eb48409c0201d7b40eb296_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI96d7b8ecd51741699473003f8bc3d479_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI23e173994979436b9a493927c702c154_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa5822d4791c64af8b69a9dc88c3d4d1f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI622b6abc73a442d89ef617f967efa66f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI44c11aa9a29c4af59f8e7b5e35902793_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI284d2ecca3f64f53b29851b35f2ce949_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI80f62447b428469e9e7d47d94f4af8cb_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI59def076095346d9863212f24fa54465_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI379c43071070448d83e3f078ec931a5d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI36f078de2dd44bbabfd5e131d95c1448_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIab00e95d51064ac7bfa78de97f3b61c0_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb55489ae4be649e2b1a27a61532ee89e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI8798359f0b424540a52b467c8a3d9fa3_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf36ba6a5bcf94a6ab4a48cd4e642c211_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI5310a935aa864b88a167da13f827a6bc_png",
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
                mediaID: "RI76bbf88cb18747829ad19fecfc26219b_png",
                a: false,
                k: "sia$char_2",
                c: false,
                Y: "0.00",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 651, y: 276 },
            shape: { type: 1, w: 220, h: 600 },
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
          'if( !Event.target ) {\n    if( Event.type == "Custom Event") {\n        if( Event.param == "showHeader" ) {\n            $W("mlc$header").set("visibility","visible");\n        } else if( Event.param == "hideHeader" ) {\n            $W("mlc$header").set("visibility","hidden");\n        } else if ( Event.param.indexOf("showQuiz") > -1  ) {\n            onSettingQuiz();\n        } else if ( Event.param == "clearResult" ) {\n            $W("mlc$result_",undefined,{multiple:true,like:true}).forEach(function(result){\n                result.set("visibility","hidden");\n            });\n        } else if ( Event.param == "showChar_2") {\n            $W("sia$char_2").set("visibility","visible");\n            $W("sia$char_2").changeState("Loop");\n            $W("sia$char_2").opacityTo(1, {timing:\'linear 1000ms\', onEnd:function(){}});\n        } else if ( Event.param == "showChar_3") {\n            $W("sia$char_2").set("visibility","hidden");\n            $W("sia$char_3").changeState("Loop");\n            $W("sia$char_3").set("visibility","visible");\n            $W("sia$char_3").opacityTo(1, {timing:\'linear 1000ms\', onEnd:function(){}});\n        } else if ( Event.param == "showChar_4") {\n            $W("sia$char_2").set("visibility","hidden");\n            $W("sia$char_3").set("visibility","hidden");\n            $W("sia$char_4").changeState("Loop");\n            $W("sia$char_4").set("visibility","visible");\n            $W("sia$char_4").opacityTo(1, {timing:\'linear 1000ms\', onEnd:function(){}});\n        } else if ( Event.param == "showTitle" ) {\n            $W("mlc$text").set("visibility","visible");\n        }\n    } else if( Event.type == "Page Create") {\n            // 타이틀 2\n            const elSubTitle = $W("mt$title_2").tag;\n            elSubTitle.style.webkitTextStroke = \'4px #107DD9\';\n            elSubTitle.style.textStroke = \'4px #107DD9\';\n        }\n} else {\n    if( Event.type == "Tap Start" ) {\n        var label = Event.target.get("label");\n        if( label.indexOf("i$example_") > -1 ) {\n            onTapExample(label.split("_")[2]);\n        } else if( label == "i$stop" ) {\n            onTapStop();\n        }\n    }   \n}\n\n// 퀴즈 문항 셋팅\nfunction onSettingQuiz() {\n    const flagIndex = Event.param.split("_")[1];\n    const quizData = JSON.parse(get("$template:data"));\n    const quiz = quizData.find((q) => q.id === Number(flagIndex));\n    const btn_O = $W("i$example_1_1");\n    const btn_X = $W("i$example_1_2");\n    const btn_1 = $W("i$example_2_1");\n    const btn_2 = $W("i$example_2_2");\n    const btn_stop = $W("t$stop");\n    \n    btn_O.tag.childNodes[0].childNodes[0].id = "btn_1_1";\n    btn_X.tag.childNodes[0].childNodes[0].id = "btn_1_2";\n    btn_1.tag.childNodes[0].childNodes[0].id = "btn_2_1";\n    btn_2.tag.childNodes[0].childNodes[0].id = "btn_2_2";\n    btn_stop.tag.id = "stopButton";\n    \n    const question = $W("div$html");\n    \n    $W("t$number").set("text",`문제 ${quiz.id}`);\n    \n    $W("t$number").tag.setAttribute("tabindex",16);\n        \n    question.setData("HTML",`<p style=\'white-space: pre-line; line-height: 1.5; word-break: keep-all;\' tabindex=17>${quiz.question}</p>`);\n    question.set("fontSize",quiz.fontSize);\n    \n    btn_O.tag.childNodes[0].childNodes[0].removeAttribute("tabindex");\n    btn_X.tag.childNodes[0].childNodes[0].removeAttribute("tabindex");\n    btn_1.tag.childNodes[0].childNodes[0].removeAttribute("tabindex");\n    btn_2.tag.childNodes[0].childNodes[0].removeAttribute("tabindex");\n    \n    $W("example_",undefined,{multiple:true,like:true}).forEach(function(example){\n        example.set("visibility","hidden");\n    });\n    \n    // ox 유형 셋팅\n    if( quiz.type == "ox") {\n        set("$answer",quiz.answer == "o" ? 1 : 2);\n        btn_O.set("visibility","visible");\n        btn_X.set("visibility","visible");\n        btn_O.tag.childNodes[0].childNodes[0].setAttribute("tabindex",18);\n        btn_X.tag.childNodes[0].childNodes[0].setAttribute("tabindex",18);\n    }\n    // 이지선다 유형 셋팅\n    else {\n        btn_1.set("text",quiz.choices["1"].text);\n        btn_2.set("text",quiz.choices["2"].text);\n        btn_1.set("fontSize",quiz.choices["1"].fontSize);\n        btn_2.set("fontSize",quiz.choices["2"].fontSize);\n        btn_1.set("visibility","visible");\n        btn_2.set("visibility","visible");\n        btn_1.tag.childNodes[0].childNodes[0].setAttribute("tabindex",18);\n        btn_2.tag.childNodes[0].childNodes[0].setAttribute("tabindex",18);\n        set("$answer",quiz.answer);\n    }\n    \n    btn_stop.tag.setAttribute("tabindex",19);\n    btn_stop.set("text","멈춤");\n    \n    $W("i$stop").local.stop = false;\n    \n    \n    get("$timer") && clearInterval(get("$timer"));\n    \n    const timer = setInterval(onProgress, 1000);\n    set("$timer",timer);\n\n    set("$time",20);\n    set("$incorrect:count",0);\n    set("$flag:index",flagIndex);\n    set("$allowedKey",true);\n    set("$quiz:type",quiz.type);\n\n    onProgress();\n\n    $W("r$dim").moveTo(294,1000);\n    $W("r$dim").zIndexTo("Top");\n    $W("mlc$quiz").set("visibility","visible");\n}\n\n// 타임 바 실행\nfunction onProgress() {\n    if( get("$time") === 0 ) {\n        onTimeOver();\n        return;\n    }\n    $W("mlc$timer").changeState("Layer" + get("$time"));\n    set("$time",get("$time")-1);\n}\n\n// 타임 오버\nfunction onTimeOver() {\n    get("$timer") && clearInterval(get("$timer"));\n    onSetResult("x");\n    onNextQuiz();\n}\n\n// 헤더 결과 셋팅\nfunction onSetResult(state) {\n    const result = $W("mlc$result_" + get("$flag:index"));\n    result.changeState(state);\n    result.set("visibility","visible");\n}\n\n// 보기 클릭\nfunction onTapExample(clickNum) {\n\n    // 오답\n    if( clickNum != get("$answer") ){\n        onIncorrect(clickNum);\n    }\n    // 정답\n    else {\n        onCorrect(clickNum);\n    }\n}\n\n// 멈춤 버튼 클릭\nfunction onTapStop() {\n    const target = $W("i$stop");\n    const stopText = $W("t$stop");\n    if( !target.local.stop ) {\n        target.local.stop = true;\n        get("$timer") && clearInterval(get("$timer"));\n        stopText.set("text","시작");\n    } else {\n        target.local.stop = false;\n        const timer = setInterval(onProgress, 1000);\n        set("$timer",timer);\n        stopText.set("text","멈춤");\n    }\n}\n\n// 오답 일 경우\nfunction onIncorrect(clickNum) {\n    const incorrectImage = $W("i$incorrect");\n    const dim = $W("r$dim");\n    incorrectImage.zIndexTo("Top");\n    dim.moveTo(294,596);\n    moveToCenterOfParent(incorrectImage,$W(`i$example_${get("$quiz:type") == "ox" ? "1" : "2"}_${clickNum}`),{});\n    set("$allowedKey",false);\n    setTimeout(function(){\n        dim.moveTo(294,1000);    \n        incorrectImage.moveTo(2000,2000);\n        set("$allowedKey",true);\n    }, 1200);\n    \n    set("$incorrect:count",get("$incorrect:count")+1);\n    $W("a$incorrect").changeState("Play");\n}\n\n// 정답 일 경우\nfunction onCorrect(clickNum) {\n    const correctImage = $W("i$correct");\n    correctImage.zIndexTo("Top");\n    moveToCenterOfParent(correctImage,$W(`i$example_${get("$quiz:type") == "ox" ? "1" : "2"}_${clickNum}`),{});\n    $W("mlc$quiz").set("visibility","visibleEventPass");\n    $W("a$correct").changeState("Play");\n    get("$timer") && clearInterval(get("$timer"));\n    set("$allowedKey",false);\n    if( get("$incorrect:count") > 0 ) {\n        onSetResult("s");\n    } else {\n        onSetResult("o");\n        let correctCount = File.get("$correct:count") || 0;\n        File.set("$correct:count",(parseInt(correctCount)+1));\n    }\n    \n    // 다음 퀴즈 신호 보냄\n    setTimeout(function(){\n        correctImage.moveTo(2000,2000);\n        onNextQuiz();\n    }, 2000);\n}\n\n// 다음 퀴즈 이동\nfunction onNextQuiz() {\n    $W("mlc$quiz").set("visibility","hidden");\n    let nextIndex = get("$flag:index");\n    fireEvent("Custom",`nextQuiz_${(parseInt(nextIndex)+1)}`);\n}\n\n/**\n * 위젯의 가운데 좌표를 반환\n *\n * @param {Widget} widget 해당 위젯\n *\n * @returns {object} obj\n *          {int} obj.x x좌표\n *          {int} obj.y y좌표\n *\n */\nfunction getCenterPos(widget) {\n  return {\n    x: widget.get(\'x\') + widget.get(\'w\') / 2,\n    y: widget.get(\'y\') + widget.get(\'h\') / 2,\n  };\n}\n\n/**\n * 상대 위젯의 중간 좌표로 moveTo\n *\n * @param {Widget} wgt 해당 위젯\n * @param {Widget} parentWgt 이동할 대상 위젯\n * @param {object} param 일반 moveTo 함수의 param 값\n *\n */\nfunction moveToCenterOfParent(widget, parentWgt, param) {\n  var centerPos = getCenterPos(parentWgt);\n  widget.moveTo(\n    centerPos.x - widget.get(\'w\') / 2,\n    centerPos.y - widget.get(\'h\') / 2,\n    param\n  );\n}\n\ndocument.addEventListener(\'keydown\', function (e) {\n    if( !get("$allowedKey") ){\n        return;\n    }\n    if (e.key === \'Enter\') {\n      const activeEl = document.activeElement;\n      if( activeEl.id.indexOf("btn_") > -1) {\n        onTapExample(activeEl.id.split("_")[2]);\n      }\n    }\n  });',
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
                mediaID: "RIe511be04547c493084d8b704a0eb8bd9_png",
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
        "3324A5_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332346,
            data: {
              properties: { attrs: { ofl: "", v: 2 } },
              wgtID: "apn.wgt.singleText",
              wgtTitle: "Text",
              styles: { B: null, A: null, T: 0, L: "#FFFFFF", Q: "1단계 성장" },
            },
          },
          init: {
            position: { x: 933, y: 12.5 },
            shape: { type: 1, w: 344, h: 40 },
            cx: 0,
            cy: 0,
          },
        },
        "3326A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332344,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIb0eb3cce2fc548aaaa1d39b45247c7c8_png",
                C: 0,
                A: "transparent",
                a: false,
              },
            },
          },
          init: {
            position: { x: 902, y: 56 },
            shape: { type: 1, w: 615, h: 74 },
            cx: 0,
            cy: 0,
          },
        },
        "3329A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101332349,
            data: {
              properties: { attrs: { ofl: "", Mode: "" } },
              wgtID: "apn.wgt.layerContainer",
              wgtTitle: "Multi-layer Container",
              styles: { state: "1", C: 0, k: "mlc$step_1" },
            },
          },
          init: {
            position: { x: 912, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: {
            layers: {
              1: { title: "Layer1", id: "3330A5_" },
              2: { title: "Layer2", id: "3350A5_" },
            },
            layerIndex: 2,
            children: ["3330A5_", "3350A5_"],
          },
        },
        "3330A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332350 },
          init: {
            position: { x: 912, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["3335A5_"] },
        },
        "3335A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332351,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI1100f9c9ae5f471da711ea3b83f7a7e5_png",
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
        "3350A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332352 },
          init: {
            position: { x: 912, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["3377A5_"] },
        },
        "3377A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332353,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIb8f65d4161d34659be5846ee58201d54_png",
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
        "3401A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101332354,
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
            children: ["3402A5_", "3404A5_"],
            layers: {
              1: { title: "Layer1", id: "3402A5_" },
              2: { title: "Layer2", id: "3404A5_" },
            },
            layerIndex: 2,
          },
        },
        "3402A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332355 },
          init: {
            position: { x: 1012, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["3403A5_"] },
        },
        "3403A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332356,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI1100f9c9ae5f471da711ea3b83f7a7e5_png",
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
        "3404A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332357 },
          init: {
            position: { x: 1012, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["3405A5_"] },
        },
        "3405A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332358,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIb8f65d4161d34659be5846ee58201d54_png",
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
        "3406A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101332359,
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
            children: ["3407A5_", "3409A5_"],
            layers: {
              1: { title: "Layer1", id: "3407A5_" },
              2: { title: "Layer2", id: "3409A5_" },
            },
            layerIndex: 2,
          },
        },
        "3407A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332360 },
          init: {
            position: { x: 1112, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["3408A5_"] },
        },
        "3408A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332361,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI1100f9c9ae5f471da711ea3b83f7a7e5_png",
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
        "3409A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332362 },
          init: {
            position: { x: 1112, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["3410A5_"] },
        },
        "3410A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332363,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIb8f65d4161d34659be5846ee58201d54_png",
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
        "3411A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101332364,
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
            children: ["3412A5_", "3414A5_"],
            layers: {
              1: { title: "Layer1", id: "3412A5_" },
              2: { title: "Layer2", id: "3414A5_" },
            },
            layerIndex: 2,
          },
        },
        "3412A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332365 },
          init: {
            position: { x: 1211, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["3413A5_"] },
        },
        "3413A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332366,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI1100f9c9ae5f471da711ea3b83f7a7e5_png",
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
        "3414A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332367 },
          init: {
            position: { x: 1211, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["3415A5_"] },
        },
        "3415A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332368,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIb8f65d4161d34659be5846ee58201d54_png",
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
        "3416A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101332369,
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
            children: ["3417A5_", "3419A5_"],
            layers: {
              1: { title: "Layer1", id: "3417A5_" },
              2: { title: "Layer2", id: "3419A5_" },
            },
            layerIndex: 2,
          },
        },
        "3417A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332370 },
          init: {
            position: { x: 1311, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["3418A5_"] },
        },
        "3418A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332371,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI1100f9c9ae5f471da711ea3b83f7a7e5_png",
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
        "3419A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332372 },
          init: {
            position: { x: 1311, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["3420A5_"] },
        },
        "3420A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332373,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIb8f65d4161d34659be5846ee58201d54_png",
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
        "3421A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101332374,
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
            children: ["3422A5_", "3424A5_"],
            layers: {
              1: { title: "Layer1", id: "3422A5_" },
              2: { title: "Layer2", id: "3424A5_" },
            },
            layerIndex: 2,
          },
        },
        "3422A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332375 },
          init: {
            position: { x: 1411, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["3423A5_"] },
        },
        "3423A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332376,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI1100f9c9ae5f471da711ea3b83f7a7e5_png",
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
        "3424A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101332377 },
          init: {
            position: { x: 1411, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["3425A5_"] },
        },
        "3425A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332378,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIb8f65d4161d34659be5846ee58201d54_png",
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
        "3505A5_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332379,
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
        "3506A5_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332380,
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
        "3507A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332381,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIaf896017ef4a49e8b6b4b03e5c2c4fe8_png",
                C: 0,
                A: "transparent",
                a: false,
              },
            },
          },
          init: {
            position: { x: 1101, y: 48 },
            shape: { type: 1, w: 21, h: 20 },
            cx: 0,
            cy: 0,
          },
        },
        "3508A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332382,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIaf896017ef4a49e8b6b4b03e5c2c4fe8_png",
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
        "3509A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332383,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIaf896017ef4a49e8b6b4b03e5c2c4fe8_png",
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
                mediaID: "RAb1ee277375c143cfb5b99e6ba8198877_mp3",
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
                mediaID: "RAf56effe981b24a40ad7a398604a7438d_mp3",
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
                mediaID: "RAceb82534e82d4473920a648924687c83_mp3",
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
                mediaID: "RI6acd6f3c4be84cb1ae69d7c3644c2d92_png",
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
                mediaID: "RIb820aa07441940c3a42043e4dabf91f0_png",
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
          layout: { children: ["3928A5_"] },
        },
        "3928A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332443,
            data: {
              properties: {
                attrs: {
                  apxAnimate: true,
                  cfg: {
                    frames: [
                      {
                        sprite: {
                          mediaID: "RI474b991610084bbeb78eb29ea2016f0a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI237e6472586f4ec581e2e5b4826f6567_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb235dad71cd344c8b50e4326487f6365_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6535c9e9f7f5484aa9a2cc6fc02aea64_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3b28f4bcacd34c05be008fc310aa0923_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb55ad2f2e7fe41368cbf644717aa900c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIe37883a57c3a4ba7a5ee3b5f207cf50d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4ad5eb2802614ad69eb4887252c72a6a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIccdac317701549b48bc198d95153571f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI585f56f20fec41dcb5333d2ab65c896f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI49458975471646b48f3fdc83af47fa5e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI250b4878a89c4a85a3a899d80341b603_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIff00004c982940f6b990c054c27a1add_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7ef33b62d5034c74a06dc58eae31e216_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI2f2209550c2e4ec08283c4535b49fb2b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4bd47fdfa0254c368b9922bb4a16edfa_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3a80012e87f542bfac91d0f977085458_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIca21b664805c4846b0317ae672c4684d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI52c4c1f75b9e4b85989f9ab4d3d256ea_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI81a671949128401d8a376b479066e4f8_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI390bb7b00a324b7fb3bc916a57ab775a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI8bf10f7bd9f34735ac75c6f07f8bc56e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf4caf609fe1449cb85438c4a5945e2c7_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0e6d025e1f524912b7c852cab7d94d0d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIbb9f088ced93436da999b73d4b8caebc_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc47498c731bb485abbd45fe917752879_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI99d8d00abc784dcc9525142dcf6315b7_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI34241fbc12aa4d2ba845e69561612db4_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI00320555dc3e433d9d87484093c95644_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4102097f72444e9d83491321188cffd0_png",
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
                mediaID: "RI474b991610084bbeb78eb29ea2016f0a_png",
                a: false,
                k: "sia$char_1",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 674, y: 477 },
            shape: { type: 1, w: 252, h: 373 },
            cx: 0,
            cy: 0,
          },
          SPT: {},
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
              mediaID: "RI8ce4e3a2f0bd4aefbc688632f50df0e3_png",
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
