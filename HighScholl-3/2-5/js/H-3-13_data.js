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
    title: "[게임으로 정리하기] Ⅲ. 알고리즘과 프로그래밍",
    categoryId: "",
    type: "P",
    id: "92c5516943dd4c9ca73efc6805fe03bc",
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
                mediaID: "RIca658cb3354c4c4199d86827de3d7de0_png",
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
                L: "#CEB01B",
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
          '// 타이틀\nconst elTitle = $W("t$title").tag; // 또는 $W("t$title").tag\n\nelTitle.style.webkitTextStroke = \'12px #CEB01B\'; // Chrome, Safari\nelTitle.style.textStroke = \'12px #CEB01B\';        // 표준 속성 (일부 Firefox, Edge)\n//elTitle.style.letterSpacing = \'150px\';\n\n// const circleType = new CircleType(elTitle);\n// circleType.radius(3500);\n\n// 서브 타이틀\nconst elSubTitle = $W("t$sub_title").tag;\n\nelSubTitle.style.webkitTextStroke = \'2px #FFFFFF\';\nelSubTitle.style.textStroke = \'2px #FFFFFF\';\n//elSubTitle.style.textShadow = \'6px 6px #ffffff\';\n\nconst elStart = $W("t$start").tag;\n\nelStart.style.webkitTextStroke = \'4px #C14000\';\nelStart.style.textStroke = \'4px #C14000\';\nelStart.id = "btn_start";\n\nconst elHowto = $W("t$howto").tag;\n\nelHowto.style.webkitTextStroke = \'4px #C14000\';\nelHowto.style.textStroke = \'4px #C14000\';\nelHowto.id = "btn_howto";\n\nwindow.document.addEventListener(\'contextmenu\', function (e) {\n  e.stopPropagation(); // 내부에서 막아도 우선권을 가짐\n}, true);\n\nwindow.document.oncontextmenu = null;\n\nelTitle.setAttribute("tabindex",1);\nelSubTitle.setAttribute("tabindex",2);\nelStart.setAttribute("tabindex",3);\nelHowto.setAttribute("tabindex",4);\n\ndocument.addEventListener(\'keydown\', function (e) {\n    if (e.key === \'Enter\') {\n      const activeEl = document.activeElement;\n      if( activeEl.id === "btn_start") {\n          File.browse("pages").forEach((page)=>{\n            if( page.label == "Page 3" ) {\n                linkTo(page.id, {reset:true});\n            }\n          });\n      } else if( activeEl.id === "btn_howto") {\n          File.browse("pages").forEach((page)=>{\n            if( page.label == "Page 2" ) {\n                linkTo(page.id, {reset:true});\n            }\n          });\n      }\n    }\n  });',
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
                mediaID: "RI4e1621097c4742c49c36b672ee966d64_png",
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
                        mediaID: "RIefcc342e68f448519bc50907e8c96e05_png",
                      },
                      down: {
                        mediaID: "RIefcc342e68f448519bc50907e8c96e05_png",
                      },
                      hover: {
                        mediaID: "RIefcc342e68f448519bc50907e8c96e05_png",
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
                mediaID: "RIefcc342e68f448519bc50907e8c96e05_png",
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
          layout: { children: ["2870A3_", "2872A3_", "6861A3_"] },
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
                mediaID: "RId3c275e210ca46db9a0581f73bc5d779_png",
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
            position: { x: 475, y: 621 },
            shape: { type: 1, w: 361, h: 231 },
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
          layout: { children: ["2941A3_", "6876A3_", "6877A3_", "6878A3_"] },
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
                mediaID: "RI5026510d76254550b122c8d595d52827_png",
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
          layout: { children: ["2979A3_", "4512A3_", "7024A3_", "7025A3_"] },
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
                mediaID: "RI84cf05fe347945e992ec3c5928296c82_png",
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
                          mediaID: "RIca55608daf35401c9445cbc4d6065bbf_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI21c8ad9d7fe9441a8b0a4ca5cf92afe1_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0ad87b2055eb42f7bb7fd3e287046e42_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1af8c7e665204147a68b99a29c533c8f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI8e1a0a7fe22141faa13c3a5a16c8d094_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI069c3e7902a8412cacfcb8137e71531d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb06d25aad74947fbaf5e247d2f18a1c9_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI220d03fb11cc46c0ad3a209140c43790_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI11ca1083d51f456bbfcd681da6f11bcf_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI665dc6a02ad84f3d9d02b38aace1edc9_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4c984a8f6ab84301a28097bef9a97b5a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc68b74a85de348cfbb831c0c16dc6c8a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3ab99cff06f2415ba962c31bd2085bb3_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf54d8e2f490845a0bae5adf56f6630d7_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI99d63208f5e5409287489441ea348d9f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId076aafcbdd24f2998fa9eea52a3677d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf681a20fdc284d729d08b443fa3300ca_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0b0cab98d4f04ffa9df00e0caaf2a59c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9debfc7cd71b4857bbc6ebbb1dbbc451_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI676afed5a06c4c3589f7640c3282b698_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc25a6966801941b2887623f111ec2b80_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId59ea01d59b1499a926429a88eec4365_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7d17b9c3ba384615a5e1c639281ef1a2_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI273cb726930a4f3797373960637d39b0_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI32332c365193425793f8c78580a18e54_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf2d38b503a114de1a4dbb6de014d0db7_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6297d36a8b19477cb5e33dd78fb20039_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI36801a94820347deb9c277a358cd88a0_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1f76a65a813a45ed90f0e0e757068fbe_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa273cff6d9f84e1faced0cd0cd147920_png",
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
                mediaID: "RIca55608daf35401c9445cbc4d6065bbf_png",
                a: false,
                k: "sia$char",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 100, y: 614 },
            shape: { type: 1, w: 361, h: 231 },
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
        "6861A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332926,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_2" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 994, y: 521 },
            shape: { type: 1, w: 361, h: 231 },
            cx: 0,
            cy: 0,
          },
        },
        "6876A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332927,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_3" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 475, y: 621 },
            shape: { type: 1, w: 361, h: 231 },
            cx: 0,
            cy: 0,
          },
        },
        "6877A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332928,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_4" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 855, y: 484 },
            shape: { type: 1, w: 361, h: 231 },
            cx: 0,
            cy: 0,
          },
        },
        "6878A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332929,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_5" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1220, y: 605 },
            shape: { type: 1, w: 361, h: 231 },
            cx: 0,
            cy: 0,
          },
        },
        "7024A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332930,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_6" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 228, y: 651 },
            shape: { type: 1, w: 361, h: 231 },
            cx: 0,
            cy: 0,
          },
        },
        "7025A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332931,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_7" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1180, y: 553 },
            shape: { type: 1, w: 361, h: 231 },
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
                size: 1406,
                data: '[\n  {\n    "id": 1,\n    "question": "모델은 복잡한 상태를 단순화하여 구조적으로 표현한 결과를 말한다.",\n    "fontSize": "34px",\n    "type": "ox",\n    "answer": "o"\n  },\n  {\n    "id": 2,\n    "question": "퀵 정렬에서 큰 문제를 작은 문제로 쪼개는 기준 요소를 (\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0)이라 한다.",\n    "fontSize": "34px",\n    "type": "two_choice",\n    "answer": "2",\n    "choices": {\n      "1": {\n        "text": "분할",\n        "fontSize": "50px"\n      },\n      "2": {\n        "text": "피벗",\n        "fontSize": "50px"\n      }\n    }\n  },\n  {\n    "id": 3,\n    "question": "순차 탐색은 정렬된 데이터에서 데이터를 절반씩 나눠가면서 범위를 좁혀 특정 값을 찾는 방식이다.",\n    "fontSize": "34px",\n    "type": "ox",\n    "answer": "x"\n  },\n  {\n    "id": 4,\n    "question": "이차원 데이터는 행과 열로 구성된 데이터 구조이다.",\n    "fontSize": "34px",\n    "type": "ox",\n    "answer": "o"\n  },\n  {\n    "id": 5,\n    "question": "for나 while로 구현하는 제어 구조의 종류는 선택 구조이다.",\n    "fontSize": "34px",\n    "type": "ox",\n    "answer": "x"\n  },\n  {\n    "id": 6,\n    "question": "(\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0)는 객체지향 프로그래밍의 기본 단위이며 클래스를 통해 생성된다.",\n    "fontSize": "34px",\n    "type": "two_choice",\n    "answer": "1",\n    "choices": {\n      "1": {\n        "text": "객체",\n        "fontSize": "50px"\n      },\n      "2": {\n        "text": "함수",\n        "fontSize": "50px"\n      }\n    }\n  }\n]\n',
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
                mediaID: "RI157bc5cb525d490ca948ac86b48eda09_png",
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
                mediaID: "RI1c8eaf5e50844729906eecbf716481d8_png",
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
                mediaID: "RI0c302b021eb842808b55e97890b1a728_png",
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
                mediaID: "RI157bc5cb525d490ca948ac86b48eda09_png",
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
                mediaID: "RI1c8eaf5e50844729906eecbf716481d8_png",
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
                mediaID: "RI0c302b021eb842808b55e97890b1a728_png",
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
                mediaID: "RI157bc5cb525d490ca948ac86b48eda09_png",
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
                mediaID: "RI1c8eaf5e50844729906eecbf716481d8_png",
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
                mediaID: "RI0c302b021eb842808b55e97890b1a728_png",
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
                mediaID: "RI157bc5cb525d490ca948ac86b48eda09_png",
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
                mediaID: "RI1c8eaf5e50844729906eecbf716481d8_png",
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
                mediaID: "RI0c302b021eb842808b55e97890b1a728_png",
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
                mediaID: "RI157bc5cb525d490ca948ac86b48eda09_png",
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
                mediaID: "RI1c8eaf5e50844729906eecbf716481d8_png",
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
                mediaID: "RI0c302b021eb842808b55e97890b1a728_png",
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
                mediaID: "RI157bc5cb525d490ca948ac86b48eda09_png",
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
                mediaID: "RI1c8eaf5e50844729906eecbf716481d8_png",
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
                mediaID: "RI0c302b021eb842808b55e97890b1a728_png",
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
                mediaID: "RI2926f29e9a564771885b28bb3117267b_png",
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
                          mediaID: "RI2ef0bfcc3a334b3486c318d468435406_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI6ab96606e39a48b7b3db9ed83b459cdf_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI9f6f9bec46244939bf7c8c68b7f56cab_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI35a739a6413f436c8ca8b81289078a6c_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI31391b3a2fbd40fcb34a1674c0a08f91_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIb90e9f47b38e4ffb952e46e914e93f9d_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RId2c0afc7c3e94843aa75cdad432979ec_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI3af877ab3d1c48f8a51a472c8e5489b9_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI28069dcfb6d64e41874c12ddd3ea19b2_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI3c9488472ba44736b1f75be78d147bf2_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI2d436e1d8ab64b44a9e6e731e69712ea_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI7e6c8829358b4e41a7166a6731ed7c2d_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI87b8114f70184bf1922088c10a9cad68_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI2a5c5ccaa1b94a82b2cfe019d4b6179b_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI925471333e4349ea9ce177adcc7a4b9f_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI8b1f71ecacaf4feeb7763fa0a7af04be_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI4d7cd675f07845b5b06267ea508a4479_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RId750eec70deb4641ab293ded97cfe3b3_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIbe24f90da2584296a714df10ee2ceb61_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIafd402e7acac476d94808f3c7de1731f_png",
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
                mediaID: "RI2ef0bfcc3a334b3486c318d468435406_png",
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
                mediaID: "RI2811bbf8ff0144fbb9d05c70957de131_png",
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
                mediaID: "RI6d634f8a0b5f4c84a3b07c2e56b8f7b7_png",
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
                mediaID: "RIc3e408fba6d4426aae692b17a258791e_png",
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
                mediaID: "RI871ffabe6a6748289f4eb0049aa9361f_png",
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
                mediaID: "RI3c3d8143c8ff42f695ede16007c2299d_png",
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
                mediaID: "RI93a7128ac9644156a4278e2534976c67_png",
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
                mediaID: "RIafd402e7acac476d94808f3c7de1731f_png",
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
                mediaID: "RIbe24f90da2584296a714df10ee2ceb61_png",
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
                mediaID: "RId750eec70deb4641ab293ded97cfe3b3_png",
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
                mediaID: "RI4d7cd675f07845b5b06267ea508a4479_png",
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
                mediaID: "RI8b1f71ecacaf4feeb7763fa0a7af04be_png",
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
                mediaID: "RI925471333e4349ea9ce177adcc7a4b9f_png",
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
                mediaID: "RI2a5c5ccaa1b94a82b2cfe019d4b6179b_png",
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
                mediaID: "RI87b8114f70184bf1922088c10a9cad68_png",
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
                mediaID: "RI7e6c8829358b4e41a7166a6731ed7c2d_png",
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
                mediaID: "RI2d436e1d8ab64b44a9e6e731e69712ea_png",
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
                mediaID: "RI3c9488472ba44736b1f75be78d147bf2_png",
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
                mediaID: "RI28069dcfb6d64e41874c12ddd3ea19b2_png",
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
                mediaID: "RI3af877ab3d1c48f8a51a472c8e5489b9_png",
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
                mediaID: "RId2c0afc7c3e94843aa75cdad432979ec_png",
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
                mediaID: "RIb90e9f47b38e4ffb952e46e914e93f9d_png",
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
                mediaID: "RI31391b3a2fbd40fcb34a1674c0a08f91_png",
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
                mediaID: "RI35a739a6413f436c8ca8b81289078a6c_png",
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
                mediaID: "RI9f6f9bec46244939bf7c8c68b7f56cab_png",
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
                mediaID: "RI6ab96606e39a48b7b3db9ed83b459cdf_png",
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
                mediaID: "RI2ef0bfcc3a334b3486c318d468435406_png",
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
                mediaID: "RA3f606fd9a5144c3e8081081ad687b8d6_mp3",
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
                mediaID: "RAdae76ca185e64cc8b7642ee9cfe03cd5_mp3",
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
                mediaID: "RI28840a19b2ac4f4982bbd9b4a2a5e12f_png",
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
                mediaID: "RI7d07726179624ec4ba7610e8175ea5cd_png",
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
                mediaID: "RI4ef95c14d1fe4c76b35aaaff93c75e86_png",
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
                mediaID: "RI96d0f2e308824fa69822e7075fdfea88_png",
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
                          mediaID: "RI61459986d5c84590947c0be6665b5007_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1e8ad5a53c6548e2881490b52ee8f7cb_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIe893a78a691847e788caa290af61a795_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI78c979e4fbbf4ecba3652c435e5b4eef_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf0d1fa940e3043dd80a48d3ddfc37ecd_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI17a8d5fc752e4b43b0a29fad8c78e81c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI45c2af950ece4f3c857411ecfaf8d739_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9361abea895c437eb872715a1bfd1117_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9a4cc080f50d469a9744efe3fade00cb_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4bc82a50235f41fea0d688c7ae80729e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7b3778bc4b4d48a580aab6e326f80925_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIee0fdd8fe901443cb6717326dc0aa0de_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI24d53832228449fd925e40012730c422_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIe7c0f3a10e144b5caf7dd6b83f299221_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI83870bb70cc5426881bdcef41d7acab4_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1b83630db6714a0ebc14ca1588c7ea6f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0946a6dc163a426d93ec9124a82b35da_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIec872839bd1c456f8f03aec636e7aed1_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa63d49c9aa784e8f8daa0cdc448767cb_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf8844259641c4a00b8f10e6c4ad63b04_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI86e7f7569d4840beb590364a49f5908b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI41e995fb34f04d1f9c1b18526b4e4ffd_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0ab5114af8984bae8acf4b6ac957839c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIcab420138dc44f2ba3f7458470e1c0c6_png",
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
                mediaID: "RI61459986d5c84590947c0be6665b5007_png",
                a: false,
                k: "sia$char_3",
                c: false,
                Y: "0.00",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 585, y: 359 },
            shape: { type: 1, w: 400, h: 500 },
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
                          mediaID: "RIa0840cf828bc482d8d8f9f5830c8650e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI177af1e5b549497cbac4ba73280c4d15_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI94727c9771634d6f9f1c8a69c577b1ff_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa326ec61ac6a4b87ba9a9d45a4dd480f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf54d0814c2294201b8a0d6ee3f64a88d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4c0d3f1d149042e396c8ee009aac2f3c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa85bc4cb313c49699aa7b7c9684aa067_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIaf2c2268f55f406a9a345fb906188448_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI2541fb8e62304860879320b342db0ea9_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4decdce000fa4ba1a9b4aa1960eb40b6_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIe9111ee222424bbe9176cc1e705651e6_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI082a9366746c41e9943a0eace2f05bc4_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6eead5aba938414c9ca0fa939b0bc1ed_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI691bcddd8373480ca3daeddda37e34b1_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb12a9ef16c5840e8a0ceddc2d118c760_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIe3f97f69a75f4b91b85b272c046eb979_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIad9b3e603bd94ecbbe8ceaa13273a8a4_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa5ce483249ee460c8c3739beaeca08b2_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc2dae0560a4e45f8b6c555100bfdb57d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIfe2c8baaf9e04ef5903db63e0975f88a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI59f176bcf7fc4319be4e15fbcde13786_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIfd4328704cb8416db2f781d52253aa2f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI5d87251207414173af8cec0e54866f50_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI75b6be895e4a4e8c939237686c686a44_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId17fca6486f24f69bdc54f63bcbc9b70_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa9278e792fb149be8604645a231b0e5b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf9226c2f31ef45daa637b5f0b80918e8_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9545b1c595dd4e4fb0f65943506b1a84_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc3a305f7771949a19531f6278c3dfe49_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc3a851952c5e48c9823c5b16cb3f712d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0b5bc82bd5214b79a20823da16f8ab55_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI5542ec2085a74091ae4e1dbe2f670137_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIbec7df518e5b43b6a769cd887099b6f2_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI16e4fcd8ed5141cca8a9059070fd1f5e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI21b69855518b4db086e814e4fdc3d31d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI522ab414a1104a6d9ed0841d84b60375_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf3ab2564d6b740bf9f8ef3d6b415bae3_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI5470a7bf195e4fcabf1a34cb54e69fa8_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa2b565ae551f457ca2a0fae59abe734d_png",
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
                mediaID: "RIa0840cf828bc482d8d8f9f5830c8650e_png",
                a: false,
                k: "sia$char_4",
                c: false,
                Y: "0.00",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 502, y: 300 },
            shape: { type: 1, w: 480, h: 560 },
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
                          mediaID: "RIce425f0e751c4e55bb81a244d5eb3b6b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI2505749dbc134f0ca027734d38f4c166_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI92fb0c7cacfa427bb02d80de3a2e3b4b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4c915fbabfed41c1a5a5d433f01f0b2f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI918993869b5745c8adaaa31710c96b7b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI28198d2ddb904235b063967905c76cc2_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb8b79f95603e45918232ecd7a5beeda1_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa0443dae9eef4f86a1af7198b5fdd6ee_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI137b774b961d4c7db39573a3529dda3f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf0b300b2ee8f4eebb0c4a24031e80a3f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIee66738a75804a15b76a72c09701c80d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI5d895685bf604550afabc023104b5303_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI29cbfd3b3d9a48939d96b22a31386511_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI970899ff4a3c4ee9945e742f7cee931c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI97591f4271384a5aad42d770a2a5c808_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9a32a80ee3ae463c85d1132fa1a7d438_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9bd2773e7bc64b84bdd5ed3349f32f63_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3bd54c71b5bd479092d476fb63f224d5_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0ac72acd64b64360b27af53fc432cae6_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9fac995cc8da4d1992e494574f7df9dd_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf69f4fc3ef514390af688a8d4e6e5688_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId139c96f5e31463b9b38cc6fc02c3485_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIcdde515245204858b5aa94d732d48b2a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf67bbefb5dc24f31a5c26d8a8e141ce1_png",
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
                mediaID: "RIce425f0e751c4e55bb81a244d5eb3b6b_png",
                a: false,
                k: "sia$char_2",
                c: false,
                Y: "0.00",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 532, y: 464 },
            shape: { type: 1, w: 450, h: 400 },
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
                mediaID: "RI2a6ace9aa17440b89bdf94bd3df22f67_png",
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
                mediaID: "RAc8bbf49152a742eeb6a0683e71c09ec5_mp3",
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
                mediaID: "RA6a36944e39db4d25b2b889197422f812_mp3",
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
                mediaID: "RAafc1486ce22d4666a1c0fea3a1f45111_mp3",
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
                mediaID: "RIc4a43688b6bf4b5f8f8c94df0239c209_png",
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
                mediaID: "RI81e5f857ad43461b851fb56cd8ed7836_png",
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
          layout: { children: ["7067A5_"] },
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
        "7067A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332932,
            data: {
              properties: {
                attrs: {
                  apxAnimate: true,
                  cfg: {
                    frames: [
                      {
                        sprite: {
                          mediaID: "RIca55608daf35401c9445cbc4d6065bbf_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI21c8ad9d7fe9441a8b0a4ca5cf92afe1_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0ad87b2055eb42f7bb7fd3e287046e42_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1af8c7e665204147a68b99a29c533c8f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI8e1a0a7fe22141faa13c3a5a16c8d094_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI069c3e7902a8412cacfcb8137e71531d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb06d25aad74947fbaf5e247d2f18a1c9_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI220d03fb11cc46c0ad3a209140c43790_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI11ca1083d51f456bbfcd681da6f11bcf_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI665dc6a02ad84f3d9d02b38aace1edc9_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4c984a8f6ab84301a28097bef9a97b5a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc68b74a85de348cfbb831c0c16dc6c8a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3ab99cff06f2415ba962c31bd2085bb3_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf54d8e2f490845a0bae5adf56f6630d7_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI99d63208f5e5409287489441ea348d9f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId076aafcbdd24f2998fa9eea52a3677d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf681a20fdc284d729d08b443fa3300ca_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0b0cab98d4f04ffa9df00e0caaf2a59c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9debfc7cd71b4857bbc6ebbb1dbbc451_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI676afed5a06c4c3589f7640c3282b698_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc25a6966801941b2887623f111ec2b80_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId59ea01d59b1499a926429a88eec4365_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7d17b9c3ba384615a5e1c639281ef1a2_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI273cb726930a4f3797373960637d39b0_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI32332c365193425793f8c78580a18e54_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf2d38b503a114de1a4dbb6de014d0db7_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6297d36a8b19477cb5e33dd78fb20039_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI36801a94820347deb9c277a358cd88a0_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1f76a65a813a45ed90f0e0e757068fbe_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa273cff6d9f84e1faced0cd0cd147920_png",
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
                mediaID: "RIca55608daf35401c9445cbc4d6065bbf_png",
                a: false,
                k: "sia$char_1",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 544, y: 581 },
            shape: { type: 1, w: 434, h: 278 },
            cx: 0,
            cy: 0,
          },
          SPT: {},
        },
        "8154A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333347,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI924da31ec725473580f27db67124344b_png",
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
        "8155A5_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101333348,
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
        "8156A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333349,
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
            children: ["8157A5_", "8159A5_"],
            layers: {
              1: { title: "Layer1", id: "8157A5_" },
              2: { title: "Layer2", id: "8159A5_" },
            },
            layerIndex: 2,
          },
        },
        "8157A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333350 },
          init: {
            position: { x: 912, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8158A5_"] },
        },
        "8158A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333351,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIc44cea7bc43f4eb3b53ed642b93b9240_png",
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
        "8159A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333352 },
          init: {
            position: { x: 912, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8160A5_"] },
        },
        "8160A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333353,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI94b41fa45f4f49ffaa92d88a290e36e3_png",
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
        "8161A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333354,
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
            children: ["8162A5_", "8164A5_"],
            layers: {
              1: { title: "Layer1", id: "8162A5_" },
              2: { title: "Layer2", id: "8164A5_" },
            },
            layerIndex: 2,
          },
        },
        "8162A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333355 },
          init: {
            position: { x: 1012, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8163A5_"] },
        },
        "8163A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333356,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIc44cea7bc43f4eb3b53ed642b93b9240_png",
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
        "8164A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333357 },
          init: {
            position: { x: 1012, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8165A5_"] },
        },
        "8165A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333358,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI94b41fa45f4f49ffaa92d88a290e36e3_png",
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
        "8166A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333359,
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
            children: ["8167A5_", "8169A5_"],
            layers: {
              1: { title: "Layer1", id: "8167A5_" },
              2: { title: "Layer2", id: "8169A5_" },
            },
            layerIndex: 2,
          },
        },
        "8167A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333360 },
          init: {
            position: { x: 1112, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8168A5_"] },
        },
        "8168A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333361,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIc44cea7bc43f4eb3b53ed642b93b9240_png",
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
        "8169A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333362 },
          init: {
            position: { x: 1112, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8170A5_"] },
        },
        "8170A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333363,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI94b41fa45f4f49ffaa92d88a290e36e3_png",
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
        "8171A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333364,
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
            children: ["8172A5_", "8174A5_"],
            layers: {
              1: { title: "Layer1", id: "8172A5_" },
              2: { title: "Layer2", id: "8174A5_" },
            },
            layerIndex: 2,
          },
        },
        "8172A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333365 },
          init: {
            position: { x: 1211, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8173A5_"] },
        },
        "8173A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333366,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIc44cea7bc43f4eb3b53ed642b93b9240_png",
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
        "8174A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333367 },
          init: {
            position: { x: 1211, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8175A5_"] },
        },
        "8175A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333368,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI94b41fa45f4f49ffaa92d88a290e36e3_png",
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
        "8176A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333369,
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
            children: ["8177A5_", "8179A5_"],
            layers: {
              1: { title: "Layer1", id: "8177A5_" },
              2: { title: "Layer2", id: "8179A5_" },
            },
            layerIndex: 2,
          },
        },
        "8177A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333370 },
          init: {
            position: { x: 1311, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8178A5_"] },
        },
        "8178A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333371,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIc44cea7bc43f4eb3b53ed642b93b9240_png",
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
        "8179A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333372 },
          init: {
            position: { x: 1311, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8180A5_"] },
        },
        "8180A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333373,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI94b41fa45f4f49ffaa92d88a290e36e3_png",
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
        "8181A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333374,
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
            children: ["8182A5_", "8184A5_"],
            layers: {
              1: { title: "Layer1", id: "8182A5_" },
              2: { title: "Layer2", id: "8184A5_" },
            },
            layerIndex: 2,
          },
        },
        "8182A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333375 },
          init: {
            position: { x: 1411, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8183A5_"] },
        },
        "8183A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333376,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIc44cea7bc43f4eb3b53ed642b93b9240_png",
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
        "8184A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333377 },
          init: {
            position: { x: 1411, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8185A5_"] },
        },
        "8185A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333378,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI94b41fa45f4f49ffaa92d88a290e36e3_png",
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
        "8186A5_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101333379,
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
        "8187A5_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101333380,
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
        "8188A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333381,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI5586c5e6666047efbf01788d520419ec_png",
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
        "8189A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333382,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI5586c5e6666047efbf01788d520419ec_png",
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
        "8190A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333383,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI5586c5e6666047efbf01788d520419ec_png",
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
              mediaID: "RI0b2240867fdd4c4096c6d4b2078106d9_png",
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
