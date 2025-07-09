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
    title: "[게임으로 정리하기] Ⅳ. 인공지능",
    categoryId: "",
    type: "P",
    id: "b806a615c2e24a8fbda1375a193b5bc9",
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
                mediaID: "RIa2a44eada11d4ea18c5394f11cc9f884_png",
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
                L: "#1B57ce",
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
          '// 타이틀\nconst elTitle = $W("t$title").tag; // 또는 $W("t$title").tag\n\nelTitle.style.webkitTextStroke = \'12px #1B57CE\'; // Chrome, Safari\nelTitle.style.textStroke = \'12px #1B57CE\';        // 표준 속성 (일부 Firefox, Edge)\n//elTitle.style.letterSpacing = \'150px\';\n\n// const circleType = new CircleType(elTitle);\n// circleType.radius(3500);\n\n// 서브 타이틀\nconst elSubTitle = $W("t$sub_title").tag;\n\nelSubTitle.style.webkitTextStroke = \'2px #FFFFFF\';\nelSubTitle.style.textStroke = \'2px #FFFFFF\';\n//elSubTitle.style.textShadow = \'6px 6px #ffffff\';\n\nconst elStart = $W("t$start").tag;\n\nelStart.style.webkitTextStroke = \'4px #C14000\';\nelStart.style.textStroke = \'4px #C14000\';\nelStart.id = "btn_start";\n\nconst elHowto = $W("t$howto").tag;\n\nelHowto.style.webkitTextStroke = \'4px #C14000\';\nelHowto.style.textStroke = \'4px #C14000\';\nelHowto.id = "btn_howto";\n\nwindow.document.addEventListener(\'contextmenu\', function (e) {\n  e.stopPropagation(); // 내부에서 막아도 우선권을 가짐\n}, true);\n\nwindow.document.oncontextmenu = null;\n\nelTitle.setAttribute("tabindex",1);\nelSubTitle.setAttribute("tabindex",2);\nelStart.setAttribute("tabindex",3);\nelHowto.setAttribute("tabindex",4);\n\ndocument.addEventListener(\'keydown\', function (e) {\n    if (e.key === \'Enter\') {\n      const activeEl = document.activeElement;\n      if( activeEl.id === "btn_start") {\n          File.browse("pages").forEach((page)=>{\n            if( page.label == "Page 3" ) {\n                linkTo(page.id, {reset:true});\n            }\n          });\n      } else if( activeEl.id === "btn_howto") {\n          File.browse("pages").forEach((page)=>{\n            if( page.label == "Page 2" ) {\n                linkTo(page.id, {reset:true});\n            }\n          });\n      }\n    }\n  });',
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
                mediaID: "RI165c492fc38b42d98980c5b919472ec1_png",
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
                        mediaID: "RI52c6b3cf6bbb4b41ae723a3eaba95b45_png",
                      },
                      down: {
                        mediaID: "RI52c6b3cf6bbb4b41ae723a3eaba95b45_png",
                      },
                      hover: {
                        mediaID: "RI52c6b3cf6bbb4b41ae723a3eaba95b45_png",
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
                mediaID: "RI52c6b3cf6bbb4b41ae723a3eaba95b45_png",
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
          layout: { children: ["2870A3_", "2872A3_", "7222A3_"] },
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
                mediaID: "RI8ccfa9b6caf14577a3c216cb3332603f_png",
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
            position: { x: 333, y: 441 },
            shape: { type: 1, w: 230, h: 371 },
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
          layout: { children: ["2941A3_", "7237A3_", "7238A3_", "7239A3_"] },
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
                mediaID: "RI9f7f4e2ede7c4f679e00ce0460b70db9_png",
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
          layout: { children: ["2979A3_", "4512A3_", "7254A3_", "7255A3_"] },
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
                mediaID: "RIc7439cad35f348b48cec7e88badca31a_png",
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
                          mediaID: "RI55839cd94b3d45f198c84f45f6c9ec3d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI5ca6c848169c46d29a8e42a7facf3d5e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9337b8abc3e643da9efb546e56614cfa_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIfb8694a1eb40430da96453f6685ea49d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI288d5cb6daa74d0a89a3fb82febb9f67_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1ee67484ba8b43d4afa6f55f36b5b3d8_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIecf08803a9084c8a860a495ef49604f6_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc50153c6cfbb4ec5bd2c19e06fba63e2_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc8fd06d5108643f18f04b04524298f5c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf3a552edc3ff4ad5b0f812babcfbc88b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIfe61471b384444a891c1bbac886c8d7d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3c6f8eae65b14b869cc0722470270bad_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIaff752f581e64394a205d2ecff018656_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7ed76aca363445139fe55d522c314abf_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa99f80e1c9d049e9b7d8904763d78a0a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf25ec3b630734d44afbd90e801e90473_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI459fdc41e3ee4d2fb2ba89e3bc20c6e2_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI470dedb6eb924928aca0d7a2239c8125_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6455383eebba4e57bc084ef62c06ef5b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI44644f4e07a349eba3b7d4ba61485ccd_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4c3feb40c8f64ee1aef0aa24bd57cd9e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI25f5ee4ab15c46f9a172eb21bfaa63b6_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI893685ce20ce420db91ea0c77ca18e52_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7995b8b3092a40c5b1fe9d7261106adc_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI8d202da15ead4b8a89e756c2e96fd893_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId26b6f5c3d554e1b8b4706943b39ec7d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7a62a881e82347b5b4c81298e9b20d03_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI74417d05a1f147fa8477ae127ff5f34c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIabfbb037db2d4306bf6ec96eda6b23ba_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI196f26fe4de144b096f37ea2d9bb30c3_png",
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
                mediaID: "RI55839cd94b3d45f198c84f45f6c9ec3d_png",
                a: false,
                k: "sia$char",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 156, y: 462 },
            shape: { type: 1, w: 230, h: 371 },
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
            position: { x: 1328, y: 469 },
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
        "7222A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332933,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_2" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 926, y: 350 },
            shape: { type: 1, w: 230, h: 371 },
            cx: 0,
            cy: 0,
          },
        },
        "7237A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332934,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_3" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 331, y: 443 },
            shape: { type: 1, w: 230, h: 371 },
            cx: 0,
            cy: 0,
          },
        },
        "7238A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332935,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_4" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 853, y: 344 },
            shape: { type: 1, w: 230, h: 371 },
            cx: 0,
            cy: 0,
          },
        },
        "7239A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332936,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_5" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1258, y: 478 },
            shape: { type: 1, w: 230, h: 371 },
            cx: 0,
            cy: 0,
          },
        },
        "7254A3_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101332937,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_6" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 336, y: 444 },
            shape: { type: 1, w: 230, h: 371 },
            cx: 0,
            cy: 0,
          },
        },
        "7255A3_": {
          module: "apn.CRect",
          create: {
            type: 16777736,
            zIndex: 101332938,
            data: {
              properties: { ver: 2, attrs: { txtI: 0 } },
              wgtID: "apn.wgt.rect",
              wgtTitle: "Rectangle",
              styles: { O: true, A: "#FF0000", C: 0, Y: "0.00", k: "r$flag_7" },
              lockType: 0,
            },
          },
          init: {
            position: { x: 1277, y: 389 },
            shape: { type: 1, w: 230, h: 371 },
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
                size: 1808,
                data: '[\n  {\n    "id": 1,\n    "question": "지능 에이전트는 (\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0)과 상호 작용하여 특정 작업을 수행한다.",\n    "fontSize": "34px",\n    "type": "two_choice",\n    "answer": "1",\n    "choices": {\n      "1": {\n        "text": "인공지능",\n        "fontSize": "50px"\n      },\n      "2": {\n        "text": "인간",\n        "fontSize": "50px"\n      }\n    }\n  },\n  {\n    "id": 2,\n    "question": "주어진 데이터에 레이블이 있는 경우 사용하는 기계학습 방법은 (\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0)이다.",\n    "fontSize": "34px",\n    "type": "two_choice",\n    "answer": "1",\n    "choices": {\n      "1": {\n        "text": "지도학습",\n        "fontSize": "50px"\n      },\n      "2": {\n        "text": "비지도학습",\n        "fontSize": "50px"\n      }\n    }\n  },\n  {\n    "id": 3,\n    "question": "기계학습에서 (\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0)은 결괏값을 예측하는 데 사용된다.",\n    "fontSize": "34px",\n    "type": "two_choice",\n    "answer": "2",\n    "choices": {\n      "1": {\n        "text": "군집 분석",\n        "fontSize": "50px"\n      },\n      "2": {\n        "text": "회귀 분석",\n        "fontSize": "50px"\n      }\n    }\n  },\n  {\n    "id": 4,\n    "question": "비지도학습에서는 (\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0) 방법을 통해 데이터를 분류한다.",\n    "fontSize": "34px",\n    "type": "two_choice",\n    "answer": "1",\n    "choices": {\n      "1": {\n        "text": "군집",\n        "fontSize": "50px"\n      },\n      "2": {\n        "text": "회귀",\n        "fontSize": "50px"\n      }\n    }\n  },\n  {\n    "id": 5,\n    "question": "강화 학습은 주어진 데이터를 기반으로 학습하는 방식이다.",\n    "fontSize": "34px",\n    "type": "ox",\n    "answer": "x"\n  },\n  {\n    "id": 6,\n    "question": "기계학습은 사회 문제 해결에만 적용되며, 다른 분야에는 사용되지 않는다.",\n    "fontSize": "34px",\n    "type": "ox",\n    "answer": "x"\n  }\n]\n',
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
                mediaID: "RI190cbd67cd224cdc95113c8978de0d94_png",
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
                mediaID: "RI21e09097d16f4a5fa40bbf303636c22d_png",
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
                mediaID: "RI115d1725272f4cfc87e5075d06158a39_png",
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
                mediaID: "RI190cbd67cd224cdc95113c8978de0d94_png",
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
                mediaID: "RI21e09097d16f4a5fa40bbf303636c22d_png",
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
                mediaID: "RI115d1725272f4cfc87e5075d06158a39_png",
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
                mediaID: "RI190cbd67cd224cdc95113c8978de0d94_png",
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
                mediaID: "RI21e09097d16f4a5fa40bbf303636c22d_png",
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
                mediaID: "RI115d1725272f4cfc87e5075d06158a39_png",
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
                mediaID: "RI190cbd67cd224cdc95113c8978de0d94_png",
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
                mediaID: "RI21e09097d16f4a5fa40bbf303636c22d_png",
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
                mediaID: "RI115d1725272f4cfc87e5075d06158a39_png",
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
                mediaID: "RI190cbd67cd224cdc95113c8978de0d94_png",
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
                mediaID: "RI21e09097d16f4a5fa40bbf303636c22d_png",
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
                mediaID: "RI115d1725272f4cfc87e5075d06158a39_png",
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
                mediaID: "RI190cbd67cd224cdc95113c8978de0d94_png",
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
                mediaID: "RI21e09097d16f4a5fa40bbf303636c22d_png",
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
                mediaID: "RI115d1725272f4cfc87e5075d06158a39_png",
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
                mediaID: "RI9761dabfb4dd41738477d6466392eb36_png",
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
                          mediaID: "RIecdcf0eec54241ec885d4e880038c9d1_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIa0cc675dd90c4e96b46affae2d23a0de_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIa873424bce2f4da2bb18bc6e41a28b6e_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI309ae50ee9b64d60aa60abf764bbc5d4_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI15c2fde9bd7e44fb86c811f9a7e603a6_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI97957ee94f2948ad8211b2c3daf14934_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI29157468a1ec42c18a0dd3402fed1de1_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI401537f2fbee4e159eb45f7c25d7809a_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIb7eeebfcc5a44e82a4f0eecfef8a7444_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI3bd90c9fc74343259adcf635a08253c8_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIc969554ced1e430c8bf386ce51c22a85_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIe09850504a8f4e789353e83067100a0c_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI10f3f53a3311400a8e89865177e8acc2_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI720196ceab9142719b2dd3bfeb522e1f_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI2076ea51ebe148a39a18769795536314_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIb0d54d7868a0404dbdcee7df089d81d7_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI0ef833c911d549418eb5a4abfedc2111_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI3d9826642b4b4614aa9c686d10d9c5c5_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIfa347bc980674a498ec02a9ac4f2cc73_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIbe0abbb757a2405fb3335f964d7a8131_png",
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
                mediaID: "RIecdcf0eec54241ec885d4e880038c9d1_png",
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
                mediaID: "RI8dae8198e7074627ab07a1276f2e10b5_png",
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
                mediaID: "RI23314cc26e814191b475d6727d0285aa_png",
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
                mediaID: "RIfd438306e42147289cbefda7df2ea43d_png",
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
                mediaID: "RI26162456d6404c90a3a6b19ca759e9e0_png",
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
                mediaID: "RI41a579d4fdb740ebb906cd683c1c0d63_png",
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
                mediaID: "RI00fa203f90a74158b9258e9f2544b143_png",
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
                mediaID: "RIbe0abbb757a2405fb3335f964d7a8131_png",
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
                mediaID: "RIfa347bc980674a498ec02a9ac4f2cc73_png",
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
                mediaID: "RI3d9826642b4b4614aa9c686d10d9c5c5_png",
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
                mediaID: "RI0ef833c911d549418eb5a4abfedc2111_png",
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
                mediaID: "RIb0d54d7868a0404dbdcee7df089d81d7_png",
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
                mediaID: "RI2076ea51ebe148a39a18769795536314_png",
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
                mediaID: "RI720196ceab9142719b2dd3bfeb522e1f_png",
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
                mediaID: "RI10f3f53a3311400a8e89865177e8acc2_png",
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
                mediaID: "RIe09850504a8f4e789353e83067100a0c_png",
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
                mediaID: "RIc969554ced1e430c8bf386ce51c22a85_png",
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
                mediaID: "RI3bd90c9fc74343259adcf635a08253c8_png",
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
                mediaID: "RIb7eeebfcc5a44e82a4f0eecfef8a7444_png",
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
                mediaID: "RI401537f2fbee4e159eb45f7c25d7809a_png",
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
                mediaID: "RI29157468a1ec42c18a0dd3402fed1de1_png",
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
                mediaID: "RI97957ee94f2948ad8211b2c3daf14934_png",
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
                mediaID: "RI15c2fde9bd7e44fb86c811f9a7e603a6_png",
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
                mediaID: "RI309ae50ee9b64d60aa60abf764bbc5d4_png",
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
                mediaID: "RIa873424bce2f4da2bb18bc6e41a28b6e_png",
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
                mediaID: "RIa0cc675dd90c4e96b46affae2d23a0de_png",
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
                mediaID: "RIecdcf0eec54241ec885d4e880038c9d1_png",
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
                mediaID: "RAdcce689169d74c27b6d149ca9a6b865b_mp3",
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
                mediaID: "RA321c87f5830f461f92c2e1fea6020e57_mp3",
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
                mediaID: "RI5f21581c926c4026b79929c5b913b2df_png",
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
                mediaID: "RIe86fafdb0cb748468ae0f4a64ed22fe9_png",
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
                mediaID: "RI3521e1021de943bcb85d24f90ba794f4_png",
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
                mediaID: "RI7b520a1b8f2b4897aae9a4e9d3cb51b9_png",
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
        "6747A4_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101332921,
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
          create: { type: 16777729, zIndex: 101332922 },
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
            zIndex: 101332923,
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
          create: { type: 16777729, zIndex: 101332924 },
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
            zIndex: 101332925,
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
        "7118A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332918,
            data: {
              properties: {
                attrs: {
                  apxAnimate: true,
                  cfg: {
                    frames: [
                      {
                        sprite: {
                          mediaID: "RIff4d72b1697c422a8175f05b60609aeb_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf225c508176c44c0a41c101f8f6173f8_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI5df10e48b4874023a1be43f1a0a81192_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIca9de0a049c94157beadd7f391c109eb_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf7a6a60d69af46cd91be22ed7e2ffa90_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI452b7c78058142f79ac20b8214c0f329_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId48691c8b8314a5484d4007d53c23518_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4759713d32034818bfa818142a6f87da_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4e470c42e3a540ad9e5b6dc724a89880_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId45370eb223446c9a8deb4279b917f6f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1aab2153eb11486a9f49f3f63040d8ca_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa84490045a344ca1a8a7c1db2151c3f7_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI08c8ff28ca204db1a179e1b2b9dad5da_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4192c077efb5435389fcfe0bc3308c3f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI2223315f05e74c2ab48a46f8d7a2d6e2_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI29862048c8f2459aa8ba8af6d5892753_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI79e74b807ff04bcfa7c479c7484600ae_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf479c6b056694277acdcc83af299c5cb_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIea50a76d7b524a86abd1a0c5515ac1f2_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIce41f2b6f6ca4680a8e98e0721288404_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc67718c88b934d79af277226ebaea444_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI35b872537b984ec8bb01808236962bb2_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIaeffb42f2857482d9f1d329765a10177_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI2bbce5c644fe47b489816a5975ee63c8_png",
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
                mediaID: "RIff4d72b1697c422a8175f05b60609aeb_png",
                a: false,
                k: "sia$char_4",
                Y: "0.00",
                c: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 523, y: 160 },
            shape: { type: 1, w: 420, h: 700 },
            cx: 0,
            cy: 0,
          },
        },
        "7119A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332919,
            data: {
              properties: {
                attrs: {
                  apxAnimate: true,
                  cfg: {
                    frames: [
                      {
                        sprite: {
                          mediaID: "RI35b4990e8cfe47cd82aa7dba525bd52f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIaf2b09a2a4e8421fa4eb674ed8366906_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId7a7517d079c4f9faf6d706c98658bbf_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb80379acdb654a2e8214403bf0ffb445_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIecae00d08a834c2db615170f9371833f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI579e52912b934b1c994bdf1e41e5b539_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIaca4514ca48145cb88efd488a142e7d7_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf704512248114aca8e577b6f2db0b97f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6290da7ecb434413821daad5a379e4ce_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3be23b64b903472aafb683451191ace4_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI76048b631a454b72ad3cb94dba69aa2b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa2347df26b654036b023b5cb8530ad45_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb9a1523869b049299c1e01afc75b4d25_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI171d152e751742f5adf764863c2ba0bf_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIdcef45b8fd8c4a34a7e39a6ff941c794_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI52479d5c37814e12820843ad4696487a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIbac0beb0ca634ee1bdcfa0b5836fd762_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI80d18a84cf6f4be1bd50690ce7c3d6b6_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI2e244cca814e45b9b6a9609cd4b72cf1_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf52aab250a224681882181d821332e7c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI5fa33166b1c74d61bfdd2a00b8f32631_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId32e1eb139d24163847277b7b1be7ea2_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb7d9dba6212b459e80b8a16a54ffe9ce_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1c62d4b280094064acb5df4bc4bd731e_png",
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
                mediaID: "RI35b4990e8cfe47cd82aa7dba525bd52f_png",
                a: false,
                k: "sia$char_2",
                c: false,
                Y: "0.00",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 560, y: 403 },
            shape: { type: 1, w: 330, h: 470 },
            cx: 0,
            cy: 0,
          },
        },
        "7120A4_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332920,
            data: {
              properties: {
                attrs: {
                  apxAnimate: true,
                  cfg: {
                    frames: [
                      {
                        sprite: {
                          mediaID: "RI986fe557172d4e76b64f318230694b6c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI8ed71f4d8de243abae027abe4a97c2cb_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIe3a5c6f773ac41aeb584e919a7586894_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIbbfef4ef6768403ab42cf7d58510ad59_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId672f508dbe549a6aced16b3c2bc65c1_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI148cf163ef334a33b89938cce7485ea0_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4c6148cf21624220bbb4729d5af19eec_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI11569ca75e214603869061164c325c37_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc1cc2a8049be461e8fe4dd4ecd2deee5_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI526603abe2f74a498b003481a8849efb_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIdbcc2600bb104720b5191cbe8243ffca_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0f3f7b63d392475db7c5f7a14d876a09_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI5dee474d5dac4d01b71049629e22e65a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0723ce981ccf4525906cfd9c7459460c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc0df2b2d4b3b4d04ba130b679c270eeb_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI649a4aa41c30400b8cd16be30efd3910_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI96889133db8a4fe28a0697ed54935a59_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7e862048525c4b50bca380b3a744023f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa78bc6342be840eeabfc558991f4f9ad_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIcae4045aceb44397849ec90c4561f1b3_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb1be4fdb86234d1f9c6d93ac2c2c232a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIe8284be6423344d1a441f589d288f2dd_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1eed5f121a2e49ecbb41cc80b47a4f2b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIded0301af2f7445f8e404882c4cd4e7a_png",
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
                mediaID: "RI986fe557172d4e76b64f318230694b6c_png",
                a: false,
                k: "sia$char_3",
                c: false,
                Y: "0.00",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 546, y: 308 },
            shape: { type: 1, w: 350, h: 560 },
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
                mediaID: "RI2cb0cdf28de7418eb470ff8ee58425c4_png",
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
                mediaID: "RA75f8d27f4e2b487897ddc1b60bc809da_mp3",
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
                mediaID: "RA856e366541e1436793509db3def89b52_mp3",
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
                mediaID: "RAb3249f2f6b3e4ca7afecba51a6e0ad1a_mp3",
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
                mediaID: "RI26e8764151204dee99e9180ecfca0474_png",
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
                mediaID: "RI1510591f39dd46b09f2ec8f59fccac57_png",
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
          layout: { children: ["7287A5_"] },
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
        "7287A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332939,
            data: {
              properties: {
                attrs: {
                  apxAnimate: true,
                  cfg: {
                    frames: [
                      {
                        sprite: {
                          mediaID: "RI55839cd94b3d45f198c84f45f6c9ec3d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI5ca6c848169c46d29a8e42a7facf3d5e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9337b8abc3e643da9efb546e56614cfa_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIfb8694a1eb40430da96453f6685ea49d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI288d5cb6daa74d0a89a3fb82febb9f67_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1ee67484ba8b43d4afa6f55f36b5b3d8_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIecf08803a9084c8a860a495ef49604f6_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc50153c6cfbb4ec5bd2c19e06fba63e2_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc8fd06d5108643f18f04b04524298f5c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf3a552edc3ff4ad5b0f812babcfbc88b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIfe61471b384444a891c1bbac886c8d7d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3c6f8eae65b14b869cc0722470270bad_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIaff752f581e64394a205d2ecff018656_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7ed76aca363445139fe55d522c314abf_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa99f80e1c9d049e9b7d8904763d78a0a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf25ec3b630734d44afbd90e801e90473_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI459fdc41e3ee4d2fb2ba89e3bc20c6e2_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI470dedb6eb924928aca0d7a2239c8125_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6455383eebba4e57bc084ef62c06ef5b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI44644f4e07a349eba3b7d4ba61485ccd_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4c3feb40c8f64ee1aef0aa24bd57cd9e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI25f5ee4ab15c46f9a172eb21bfaa63b6_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI893685ce20ce420db91ea0c77ca18e52_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7995b8b3092a40c5b1fe9d7261106adc_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI8d202da15ead4b8a89e756c2e96fd893_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId26b6f5c3d554e1b8b4706943b39ec7d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7a62a881e82347b5b4c81298e9b20d03_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI74417d05a1f147fa8477ae127ff5f34c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIabfbb037db2d4306bf6ec96eda6b23ba_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI196f26fe4de144b096f37ea2d9bb30c3_png",
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
                mediaID: "RI55839cd94b3d45f198c84f45f6c9ec3d_png",
                a: false,
                k: "sia$char_1",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 607, y: 379 },
            shape: { type: 1, w: 278, h: 449 },
            cx: 0,
            cy: 0,
          },
          SPT: {},
        },
        "8026A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333384,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI3012911b76374a22a5f0b753bc77777c_png",
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
        "8027A5_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101333385,
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
        "8028A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333386,
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
            children: ["8029A5_", "8031A5_"],
            layers: {
              1: { title: "Layer1", id: "8029A5_" },
              2: { title: "Layer2", id: "8031A5_" },
            },
            layerIndex: 2,
          },
        },
        "8029A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333387 },
          init: {
            position: { x: 912, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8030A5_"] },
        },
        "8030A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333388,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIc2a181faea6c4efeaf82ea2b6024588c_png",
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
        "8031A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333389 },
          init: {
            position: { x: 912, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8032A5_"] },
        },
        "8032A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333390,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI23e479f0d77047668e114e91eaedd193_png",
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
        "8033A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333391,
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
            children: ["8034A5_", "8036A5_"],
            layers: {
              1: { title: "Layer1", id: "8034A5_" },
              2: { title: "Layer2", id: "8036A5_" },
            },
            layerIndex: 2,
          },
        },
        "8034A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333392 },
          init: {
            position: { x: 1012, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8035A5_"] },
        },
        "8035A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333393,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIc2a181faea6c4efeaf82ea2b6024588c_png",
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
        "8036A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333394 },
          init: {
            position: { x: 1012, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8037A5_"] },
        },
        "8037A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333395,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI23e479f0d77047668e114e91eaedd193_png",
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
        "8038A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333396,
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
            children: ["8039A5_", "8041A5_"],
            layers: {
              1: { title: "Layer1", id: "8039A5_" },
              2: { title: "Layer2", id: "8041A5_" },
            },
            layerIndex: 2,
          },
        },
        "8039A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333397 },
          init: {
            position: { x: 1112, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8040A5_"] },
        },
        "8040A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333398,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIc2a181faea6c4efeaf82ea2b6024588c_png",
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
        "8041A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333399 },
          init: {
            position: { x: 1112, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8042A5_"] },
        },
        "8042A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333400,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI23e479f0d77047668e114e91eaedd193_png",
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
        "8043A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333401,
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
            children: ["8044A5_", "8046A5_"],
            layers: {
              1: { title: "Layer1", id: "8044A5_" },
              2: { title: "Layer2", id: "8046A5_" },
            },
            layerIndex: 2,
          },
        },
        "8044A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333402 },
          init: {
            position: { x: 1211, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8045A5_"] },
        },
        "8045A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333403,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIc2a181faea6c4efeaf82ea2b6024588c_png",
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
        "8046A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333404 },
          init: {
            position: { x: 1211, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8047A5_"] },
        },
        "8047A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333405,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI23e479f0d77047668e114e91eaedd193_png",
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
        "8048A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333406,
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
            children: ["8049A5_", "8051A5_"],
            layers: {
              1: { title: "Layer1", id: "8049A5_" },
              2: { title: "Layer2", id: "8051A5_" },
            },
            layerIndex: 2,
          },
        },
        "8049A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333407 },
          init: {
            position: { x: 1311, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8050A5_"] },
        },
        "8050A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333408,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIc2a181faea6c4efeaf82ea2b6024588c_png",
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
        "8051A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333409 },
          init: {
            position: { x: 1311, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8052A5_"] },
        },
        "8052A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333410,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI23e479f0d77047668e114e91eaedd193_png",
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
        "8053A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333411,
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
            children: ["8054A5_", "8056A5_"],
            layers: {
              1: { title: "Layer1", id: "8054A5_" },
              2: { title: "Layer2", id: "8056A5_" },
            },
            layerIndex: 2,
          },
        },
        "8054A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333412 },
          init: {
            position: { x: 1411, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8055A5_"] },
        },
        "8055A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333413,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RIc2a181faea6c4efeaf82ea2b6024588c_png",
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
        "8056A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333414 },
          init: {
            position: { x: 1411, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8057A5_"] },
        },
        "8057A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333415,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI23e479f0d77047668e114e91eaedd193_png",
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
        "8058A5_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101333416,
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
        "8059A5_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101333417,
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
        "8060A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333418,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI97094fc085c04d0ea70dad30bda25184_png",
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
        "8061A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333419,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI97094fc085c04d0ea70dad30bda25184_png",
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
        "8062A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333420,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI97094fc085c04d0ea70dad30bda25184_png",
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
          'if( !Event.target ) {\n    if( Event.type == "Page Create") {\n        onPageCreate();\n    } else if( Event.type == "Page Run") {\n        onPageRun();\n    }\n} else {\n    if( Event.type == "Tap Start") {\n        const label = Event.target.get("label");\n        if( label == "i$evolution" ) {\n            onTapEvolution();   \n        } else if( label == "i$home" ) {\n            goHome();\n        }\n    }\n}\n\nfunction onPageCreate() {\n    // 타이틀\n    const elTitle = $W("mt$title_1").tag; // 또는 $W("t$title").tag\n    \n    elTitle.style.webkitTextStroke = \'4px #107DD9\'; // Chrome, Safari\n    elTitle.style.textStroke = \'4px #107DD9\';        // 표준 속성 (일부 Firefox, Edge)\n    \n    // 타이틀 2\n    const elSubTitle = $W("mt$title_2").tag;\n    \n    elSubTitle.style.webkitTextStroke = \'4px #107DD9\';\n    elSubTitle.style.textStroke = \'4px #107DD9\';\n    \n    const elEvolution = $W("t$evolution").tag;\n    \n    elEvolution.style.webkitTextStroke = \'2px #C14000\';\n    elEvolution.style.textStroke = \'2px #C14000\';\n    \n    const elHome = $W("t$home").tag;\n    \n    elHome.style.webkitTextStroke = \'2px #C14000\';\n    elHome.style.textStroke = \'2px #C14000\';\n    \n    elEvolution.setAttribute("tabindex",20);\n    elHome.setAttribute("tabindex",21);\n    \n    elEvolution.id = "btn_evolution";\n    elHome.id = "btn_home";\n    // elTitle.setAttribute("tabindex",0);\n    // elSubTitle.setAttribute("tabindex",0);\n    \n    $W("sia$char_1").changeState("Loop");\n\n}\n\nfunction onPageRun() {\n    const stepCount = File.get("$correct:count") || 6;\n    for (let i = 1; i <= stepCount; i++) {\n      $W("mlc$step_" + i).changeState("Layer2");\n    }\n    if( stepCount < 2 ) {\n        $W("mlc$text").set("visibility","visible");\n        $W("i$evolution").set("visibility","hidden");\n        $W("t$evolution").set("visibility","hidden");\n    }\n\n    $W("sia$char_1").tag.children[0].id = "char_canvas_1";\n    \n    set("$step:count",stepCount);\n}\n\n// 진화 버튼 클릭\nfunction onTapEvolution() {\n    \n    const white = $W("r$white");\n    const evolutionLayer = $W("mlc$evolution");\n    const title = $W("mlc$text");\n    \n    let brightness = 1;\n    let blur = 0;\n    let contrast = 100;\n    let hue = 0;\n\n    const evolveEffect = () => {\n        \n      const canvas = document.getElementById("char_canvas_1");\n    \n      brightness = Math.min(brightness + 0.01, 10);\n      blur = Math.min(blur + 0.1, 3);\n      contrast = Math.min(contrast + 1, 130);\n      hue = (hue + 2) % 360;\n    \n      canvas.style.filter = `\n        brightness(${brightness})\n        blur(${blur}px)\n        contrast(${contrast}%)\n        hue-rotate(${hue}deg)\n      `;\n    \n      if (brightness < 10 || blur < 3 || contrast < 130 || hue !== 0) {\n        requestAnimationFrame(evolveEffect);\n      }\n    };\n\n    evolveEffect();\n    \n    setTimeout(function(){\n        evolutionLayer.set("visibility","hidden");\n        fireEvent("Custom","hideHeader");\n        fireEvent("Custom","showChar_2");\n        white.moveTo(0,0);\n        white.opacityTo(1);\n        white.opacityTo(0, {timing:"ease-in 1000ms",onEnd:function(){\n            if( get("$step:count") <= 3 ) {\n                // 1단계 성장일때만\n                fireEvent("Custom","showHeader");\n                fireEvent("Custom","showTitle");\n                //title.set("visibility","visible");\n            }\n        }});\n        // 3단계 성장(6개)\n        if( get("$step:count") >= 6 ) {\n            setTimeout(function(){\n                fireEvent("Custom","hideHeader");\n                fireEvent("Custom","showChar_3");\n                white.opacityTo(1);\n                white.opacityTo(0, {timing:"ease-in 1000ms"});\n                white.moveTo(0,0);\n                setTimeout(function(){\n                    fireEvent("Custom","showChar_4");\n                    white.opacityTo(1);\n                    white.opacityTo(0, {timing:"ease-in 1000ms",onEnd:function(){\n                        fireEvent("Custom","showHeader");\n                        fireEvent("Custom","showTitle");\n                        //title.set("visibility","visible");\n                    }});\n                    white.moveTo(0,0);\n                }, 1500);\n            }, 1500);    \n        }\n        // 2단계 성장(4~5개)\n        else if( get("$step:count") >= 4 ) {\n            setTimeout(function(){\n                fireEvent("Custom","hideHeader");\n                fireEvent("Custom","showChar_3");\n                white.opacityTo(1);\n                white.opacityTo(0, {timing:"ease-in 1000ms",onEnd:function(){\n                    fireEvent("Custom","showHeader");\n                    fireEvent("Custom","showTitle");\n                    //title.set("visibility","visible");\n                }});\n                white.moveTo(0,0);\n            }, 1500);    \n        }\n    }, 6000);\n    \n    if( get("$step:count") >= 6 ) {\n        $W("a$evolution_3").changeState("Play");    \n    } else if( get("$step:count") >= 4 ) {\n        $W("a$evolution_2").changeState("Play");    \n    } else {\n        $W("a$evolution_1").changeState("Play");    \n    }\n    \n    $W("t$evolution").set("visibility","hidden");\n    $W("i$evolution").set("visibility","hidden");\n    \n    title.changeState("Layer2");\n    \n}\n\n// 홈으로\nfunction goHome() {\n    // fireEvent("Custom","hideHeader");\n    // fireEvent("Custom","clearResult");\n    window.location.href = "";\n}\n\ndocument.addEventListener(\'keydown\', function (e) {\n    if (e.key === \'Enter\') {\n      const activeEl = document.activeElement;\n      if( activeEl.id === "btn_evolution") {\n         onTapEvolution();\n      } else if( activeEl.id === "btn_home") {\n        //   File.browse("pages").forEach((page)=>{\n        //     if( page.label == "Page 1" ) {\n        //         linkTo(page.id, {reset:true});\n        //     }\n        //   });\n          goHome();\n      }\n    }\n  });',
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
              mediaID: "RIf0fb22e947a34f4598931c134416f1f9_png",
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
