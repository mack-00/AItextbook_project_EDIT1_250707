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
    title: "[게임으로 정리하기] Ⅱ. 데이터",
    categoryId: "",
    type: "P",
    id: "74352c8e2d3d42429c52e6d4341223b5",
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
                mediaID: "RI347c704c180e485baa1d1e20781f7c0c_png",
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
                L: "#2ec508",
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
          '// 타이틀\nconst elTitle = $W("t$title").tag; // 또는 $W("t$title").tag\n\nelTitle.style.webkitTextStroke = \'12px #2ec508\'; // Chrome, Safari\nelTitle.style.textStroke = \'12px #2ec508\';        // 표준 속성 (일부 Firefox, Edge)\n//elTitle.style.letterSpacing = \'150px\';\n\n// const circleType = new CircleType(elTitle);\n// circleType.radius(3500);\n\n// 서브 타이틀\nconst elSubTitle = $W("t$sub_title").tag;\n\nelSubTitle.style.webkitTextStroke = \'2px #FFFFFF\';\nelSubTitle.style.textStroke = \'2px #FFFFFF\';\n//elSubTitle.style.textShadow = \'6px 6px #ffffff\';\n\nconst elStart = $W("t$start").tag;\n\nelStart.style.webkitTextStroke = \'4px #C14000\';\nelStart.style.textStroke = \'4px #C14000\';\nelStart.id = "btn_start";\n\nconst elHowto = $W("t$howto").tag;\n\nelHowto.style.webkitTextStroke = \'4px #C14000\';\nelHowto.style.textStroke = \'4px #C14000\';\nelHowto.id = "btn_howto";\n\nwindow.document.addEventListener(\'contextmenu\', function (e) {\n  e.stopPropagation(); // 내부에서 막아도 우선권을 가짐\n}, true);\n\nwindow.document.oncontextmenu = null;\n\nelTitle.setAttribute("tabindex",1);\nelSubTitle.setAttribute("tabindex",2);\nelStart.setAttribute("tabindex",3);\nelHowto.setAttribute("tabindex",4);\n\ndocument.addEventListener(\'keydown\', function (e) {\n    if (e.key === \'Enter\') {\n      const activeEl = document.activeElement;\n      if( activeEl.id === "btn_start") {\n          File.browse("pages").forEach((page)=>{\n            if( page.label == "Page 3" ) {\n                linkTo(page.id, {reset:true});\n            }\n          });\n      } else if( activeEl.id === "btn_howto") {\n          File.browse("pages").forEach((page)=>{\n            if( page.label == "Page 2" ) {\n                linkTo(page.id, {reset:true});\n            }\n          });\n      }\n    }\n  });',
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
                mediaID: "RIee695bd46f11483b92b86ef98119f8d6_png",
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
                        mediaID: "RIbe2b1f602d0d44bc8a369e9c9d89e559_png",
                      },
                      down: {
                        mediaID: "RIbe2b1f602d0d44bc8a369e9c9d89e559_png",
                      },
                      hover: {
                        mediaID: "RIbe2b1f602d0d44bc8a369e9c9d89e559_png",
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
                mediaID: "RIbe2b1f602d0d44bc8a369e9c9d89e559_png",
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
                mediaID: "RI7aeff5d2fc8848a18b09c0a9e164eff2_png",
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
            position: { x: 445, y: 606 },
            shape: { type: 1, w: 239, h: 250 },
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
            position: { x: 1030, y: 514 },
            shape: { type: 1, w: 239, h: 250 },
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
                mediaID: "RI6f630a2a97eb41799b78cda532e9189d_png",
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
                mediaID: "RIbac9ebec22dc4f2e9fd709c2d2ce64bf_png",
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
                          mediaID: "RI32ddc2b634d24d1793ddd6da58d03e3e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6d35768cb39e443085aec2d5dea360b6_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI8397efc2d403498e97c6f6467898c4ee_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI61bd9f928c1541868c96a8ec00a2b42e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9ba4a98df5624752a8d39bde8400b699_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf339a381f9f44201b7277ffc8f131b0c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc286da666fef4b5aae567da7a2b83fb0_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI876deeb149cc45aea93ba43f19ed379c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa9087abc082343e6b494f0124eab5f51_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7a6b77619ee246bb97615d03f929d30b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI821abd642e6843f5b9979149e13e54d9_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4030bf1b8e6f41e78ad99d35f93e97cb_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3a467d5b5fe74b129036a571a149defa_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIdea421d69d894c7f8460e00b5af62b73_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4ca401d0a3fd40af8b41f3338dd733b9_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI64d77f115e124f1c87ec36a8d5145540_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa97e7aed32204fb0bbb5b1b93a14504b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb4e19626417b4dd5976d2a342853853b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa907daa430e647aa9c5f17701c1426eb_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI88e269f4b8e0428b9f9c1d4d514716d0_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI634839dc54454b62b587279625206a95_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1a488cfdd9b9473e8ef987d6ac2dde61_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7cdebe6599c34beaaa9ff0a3d65a65a3_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI5ba01d9dd1fc4277b6231bb5da5cecea_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIed12ddeb49e040ed88f6ecf3a6e386be_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId80437cd81fe42a997b9d51d878267cc_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI98ba9dfd1a09491f90e882d2c747f201_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI86c078f5a58f4ee6bfc14510e81704df_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI829f995003c14307bbb093e8bc56ffe1_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI47707e29721b4d0a8d6abdbba4048731_png",
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
                mediaID: "RI32ddc2b634d24d1793ddd6da58d03e3e_png",
                a: false,
                k: "sia$char",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 130, y: 595 },
            shape: { type: 1, w: 239, h: 250 },
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
            position: { x: 464, y: 629 },
            shape: { type: 1, w: 239, h: 250 },
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
            position: { x: 921, y: 457 },
            shape: { type: 1, w: 239, h: 250 },
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
            position: { x: 1278, y: 590 },
            shape: { type: 1, w: 239, h: 250 },
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
            position: { x: 287, y: 631 },
            shape: { type: 1, w: 239, h: 250 },
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
            position: { x: 1248, y: 530 },
            shape: { type: 1, w: 239, h: 250 },
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
                size: 1265,
                data: '[\n  {\n    "id": 1,\n    "question": "(\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0\\u00A0) 부호화는 동일한 데이터가 몇 번 반복되는지 기록하여 데이터를 짧게 만드는 방법이다.",\n    "fontSize": "34px",\n    "type": "two_choice",\n    "answer": "1",\n    "choices": {\n      "1": {\n        "text": "런 길이",\n        "fontSize": "50px"\n      },\n      "2": {\n        "text": "허프만",\n        "fontSize": "50px"\n      }\n    }\n  },\n  {\n    "id": 2,\n    "question": "전치형 암호화는 문자의 순서를 바꾸어 암호화하는 방법이다.",\n    "fontSize": "34px",\n    "type": "ox",\n    "answer": "o"\n  },\n  {\n    "id": 3,\n    "question": "비대칭 암호화는 송신자와 수신자가 같은 키를 갖는다.",\n    "fontSize": "34px",\n    "type": "ox",\n    "answer": "x"\n  },\n  {\n    "id": 4,\n    "question": "빅데이터는 센서, 인터넷, 모바일 장치 등 다양한 곳에서 빠르게 생성되고 수집된다.",\n    "fontSize": "34px",\n    "type": "ox",\n    "answer": "o"\n  },\n  {\n    "id": 5,\n    "question": "원시 데이터를 원하는 형식으로 변환하는 작업을 무엇이라고 하는가?",\n    "fontSize": "34px",\n    "type": "two_choice",\n    "answer": "2",\n    "choices": {\n      "1": {\n        "text": "데이터 수집",\n        "fontSize": "50px"\n      },\n      "2": {\n        "text": "데이터 전처리",\n        "fontSize": "50px"\n      }\n    }\n  },\n  {\n    "id": 6,\n    "question": "데이터를 시각화하면 분석 결과를 이해하기 쉬워진다.",\n    "fontSize": "34px",\n    "type": "ox",\n    "answer": "o"\n  }\n]\n',
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
                mediaID: "RI55f11b14c1f34385bc7f345094ac18c1_png",
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
                mediaID: "RI7f9fa536bc544d0fb6cb3f59ab5e3161_png",
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
                mediaID: "RI582226e59a024c948effb4664e690f7a_png",
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
                mediaID: "RI55f11b14c1f34385bc7f345094ac18c1_png",
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
                mediaID: "RI7f9fa536bc544d0fb6cb3f59ab5e3161_png",
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
                mediaID: "RI582226e59a024c948effb4664e690f7a_png",
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
                mediaID: "RI55f11b14c1f34385bc7f345094ac18c1_png",
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
                mediaID: "RI7f9fa536bc544d0fb6cb3f59ab5e3161_png",
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
                mediaID: "RI582226e59a024c948effb4664e690f7a_png",
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
                mediaID: "RI55f11b14c1f34385bc7f345094ac18c1_png",
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
                mediaID: "RI7f9fa536bc544d0fb6cb3f59ab5e3161_png",
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
                mediaID: "RI582226e59a024c948effb4664e690f7a_png",
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
                mediaID: "RI55f11b14c1f34385bc7f345094ac18c1_png",
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
                mediaID: "RI7f9fa536bc544d0fb6cb3f59ab5e3161_png",
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
                mediaID: "RI582226e59a024c948effb4664e690f7a_png",
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
                mediaID: "RI55f11b14c1f34385bc7f345094ac18c1_png",
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
                mediaID: "RI7f9fa536bc544d0fb6cb3f59ab5e3161_png",
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
                mediaID: "RI582226e59a024c948effb4664e690f7a_png",
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
                mediaID: "RI98e0f8c4494d4bdebf9b1065150339be_png",
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
                          mediaID: "RIb003f576edff48ec8c119af21375dadc_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIc02e1b510c90462f88ee6cc94ac94c79_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI8938f4da364a4095896bae5ca2c146a5_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI0bf7bf8f4c2941bc94994ebdb3872396_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI1f845067fc9f49979a2749c5e1e731b5_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIf8d6ad3fe71249d6ac706738bb42f84e_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI4da87c61bf2749139c928f2babc37f5a_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI54dc99f7659d4669b3c06bda70f2b929_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI556c28b8a6bd499d8e7750023269e40c_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI99d7f729a28546d08cf55311e8c0b53a_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI7094e5483fc348f1a5f14b025a0c8874_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIf3b89f4c6bf449dcab3e7a1a694086b6_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI714d71f9566d4bdf9436faa54b163a52_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI7cb2a362e8ac49e494db71ff17eecb1e_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIe91431af08e34c1898de0f48d593ad62_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI0d4cd07336484ce281248d8555150d1d_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI62087e725b4845e1ae44caab9c97f2c4_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RIf2793bbbccdb4d2697bc3f42f30c646e_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RI35300f8206b84971b6cef99161232c7e_png",
                        },
                        duration: "1000",
                      },
                      {
                        sprite: {
                          mediaID: "RId0b5f6920f3841e796ff654f3f4242ab_png",
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
                mediaID: "RIb003f576edff48ec8c119af21375dadc_png",
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
                mediaID: "RI3c39fd0b88654867b9d3b8e4d526113b_png",
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
                mediaID: "RI268ab89d40e74057816bba854f308b7e_png",
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
                mediaID: "RId8cf3ac770d34ea9ba0cb5212063df68_png",
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
                mediaID: "RIac8d86c6c5364da6a7bdb505e3d636b6_png",
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
                mediaID: "RI482fbefbe1d44b00ad3ca0f26f2d717f_png",
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
                mediaID: "RIc2fe25be8de2481d8c7e92a8f99a825f_png",
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
                mediaID: "RId0b5f6920f3841e796ff654f3f4242ab_png",
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
                mediaID: "RI35300f8206b84971b6cef99161232c7e_png",
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
                mediaID: "RIf2793bbbccdb4d2697bc3f42f30c646e_png",
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
                mediaID: "RI62087e725b4845e1ae44caab9c97f2c4_png",
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
                mediaID: "RI0d4cd07336484ce281248d8555150d1d_png",
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
                mediaID: "RIe91431af08e34c1898de0f48d593ad62_png",
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
                mediaID: "RI7cb2a362e8ac49e494db71ff17eecb1e_png",
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
                mediaID: "RI714d71f9566d4bdf9436faa54b163a52_png",
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
                mediaID: "RIf3b89f4c6bf449dcab3e7a1a694086b6_png",
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
                mediaID: "RI7094e5483fc348f1a5f14b025a0c8874_png",
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
                mediaID: "RI99d7f729a28546d08cf55311e8c0b53a_png",
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
                mediaID: "RI556c28b8a6bd499d8e7750023269e40c_png",
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
                mediaID: "RI54dc99f7659d4669b3c06bda70f2b929_png",
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
                mediaID: "RI4da87c61bf2749139c928f2babc37f5a_png",
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
                mediaID: "RIf8d6ad3fe71249d6ac706738bb42f84e_png",
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
                mediaID: "RI1f845067fc9f49979a2749c5e1e731b5_png",
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
                mediaID: "RI0bf7bf8f4c2941bc94994ebdb3872396_png",
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
                mediaID: "RI8938f4da364a4095896bae5ca2c146a5_png",
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
                mediaID: "RIc02e1b510c90462f88ee6cc94ac94c79_png",
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
                mediaID: "RIb003f576edff48ec8c119af21375dadc_png",
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
                mediaID: "RA417a9ea26bc9400f8c25107f67a7c61d_mp3",
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
                mediaID: "RA5169a4924ca64d6cae145c8753f0dcfe_mp3",
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
                mediaID: "RI2d7e2f388ada45ecac73e137f88dc987_png",
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
                mediaID: "RI746c52b3268b42ebae45bbdecce79248_png",
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
                mediaID: "RI2b4bc9d69d0f49e1be4b1fff2c46e5f8_png",
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
                mediaID: "RI76cfd7fbc7ac4dcc8bf3d4acb63ecfd7_png",
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
                          mediaID: "RI62288aa6be3a4de4bb17ddcf9b939bfb_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf83cc6139d1d4620b216e15305d1997e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId1c9887a02dd4d3f8e6fa4bfe712514f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa62df17cc3a145c494dd91798eb9986f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIe364da6feb4e4c45b9b2fdb8a8bbf530_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4c28491f1dee4f6897ac6782a2cda48b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI42685b5b8ae841fc9de6062e23259775_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIabdde1b776d74c7aa4731675c863718a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI79ac9d6240b945be85478289ee389135_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId8e341ebf46b458f84c4c765bd9637f7_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI81bcac003d584311a6b56b374462fa27_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIe5d46c44e2244cee82430c832d4efd61_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9bf86d09b13943768a0acbe734a7f3cb_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI2b618413c4964e6299988b7402d5a251_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIfc006d29e27347bdb1e6f3e1aa9fa956_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3348660fb80a4e9b8c20a710d07f5151_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIec7c62c2e82d451b81469499bd815309_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3ec211b8be824d52b50965f4df37a2dc_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI5a7d06f62bc54dc785763cea1b5994e7_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7adf187375534b9f9714ad24a7eb9f06_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf978189837474e36975a1d0260fa9cd4_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI884cd614fa8942beb300116291f1cf1b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI2aa43e6a7cbe4ab79529c3cd277f1bcf_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9d2e11f24e434dd1b4537c0a65c94e71_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIaee2a49c2d8d4c28950f6e87a0125a28_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4ccc7776174c4769b589f96b223ba091_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI5628c364b67e4552b34f45a522671e86_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI2ab3e169ea334a46a87f0bd42fd79d31_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3a3305e22de24029965b3e2de7b8a34a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1624c1267a2e445c94458f68d86d3f85_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId92d7b0e9a914618bceefaec3650b604_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI502c0acfe32d41e1ae75166a79d8fe03_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI712c3cffea0746ab99cc8197fde27afa_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIec5eafce35d24dfa9fc75c4697f888c7_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4e6a35d7ca89484891b881fae0f209b3_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI568e5c8c3f034a03bd2da7c9add72cf9_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIed964d644e6f4314b618d63e06b57a06_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9f9ca64cb1a447248e3aade00bc9022b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIbe08bb784c3c47d6ad5450c6e4d5512c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIba9716eed44342a29f93618c5c1554f5_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0ed2dc2cae02438b8162544387654b49_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI092d8a23d6e84cbabc372281244276a8_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI65e8d0dfb7664505bfa7296f82f0cb1e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0daf2c613df64ccfbfa3db13c730b02c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3a9d9b573a454d53acd395b4d61e7ca9_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa3fd106f2e08433f9b804eeadc15c941_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4afe34fe1eae46e4a537707f75d1bc4c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1758060ee4024a279807bae91162e628_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3f7dccd9708642dab550e4cc195db537_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0cfe12e1addd4930a2fd0a4274ac0750_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf8983d51deb44676842af04b59aaf39f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1222e54364854f0e859ae82197c6001b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7f40cda5e6534508ba2dfd7836f7a528_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI81edb9a4fc4d464e87f95b7f26111c75_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb1855089a01b4d06bf9020a3066cea57_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI8262fb016e3b435e8f4d3cef04f7cf2e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI5978ed66b5dc42368622bfad3b36218b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI5975b79e331348bf9591399ee198f5c8_png",
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
                mediaID: "RI62288aa6be3a4de4bb17ddcf9b939bfb_png",
                a: false,
                k: "sia$char_4",
                Y: "0.00",
                c: false,
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 495, y: 249 },
            shape: { type: 1, w: 460, h: 610 },
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
                          mediaID: "RI985314fa31874df587b1edcf91c3ad85_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1991e80fe99e4f92b17d0a1d27e1d62a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb8c56b6689de4ca7ab05f28e6dc4ebbd_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI8b4e4b903f5c4b58b09443fc00d0d1b0_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIaf1dba99530646d7be2c26222db1a0f1_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId503f89e32fe4759bf571caebb419172_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf4ac11a909cd4195b7402bcbddff29c7_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3b5b9b0457544ea092d49717bc869713_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9639cf60569241e6a9241119bd7af43e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI698c484bacd44611846b1bb059fa771b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI85a6cb7631ee4adfa702880d56f24d43_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc9a7cc0be08a49d9b7421eb6662e9a46_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb2e0166835ab443b808effacd1b03021_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI13d7d4845e5a442c883f488aa63b5eaa_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI13d7d4845e5a442c883f488aa63b5eaa_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI8a3f79c74ef341e0a3a1651e60d93eaa_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI81dc8079cd574a5a9703541ef1d287e3_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI75e087477e0e46e79199f62ad2f21d78_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI2077bd05dcde444db2cbd1685b734d37_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIe21bc9c31cab46b4ba04a4dc19677f0f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa2eb19df5fd440c89eede8c5bc9598eb_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId86e2f05e04a43cfb1c64f0e8b54cfb9_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI17e2d16919534a708e4927fade7e9439_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIe82938ee3b014109ad50f61be1ed1a3a_png",
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
                mediaID: "RI985314fa31874df587b1edcf91c3ad85_png",
                a: false,
                k: "sia$char_2",
                c: false,
                Y: "0.00",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 608, y: 449 },
            shape: { type: 1, w: 300, h: 400 },
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
                          mediaID: "RIc19b20d21a77456596ce6f0d085c5991_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIdf54752842d94fa0b52c44b2eb41ea7b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI2c479a65191f4ffba8c45c73e5567b2a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI33a48a883e674d85bd2bb0858ac90cbd_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb2fa0d4480704090b0e19f3e4a8b5208_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIac0c3478bce3410f9ddb709326c3876f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI236e98adbf4c4aa58fb76495ce98e25f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI542caa548e484cd2b131ea3b45b0c1ef_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIe9a462216d9d487ab34e11b970bcad2b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7aed80a4e25240989f63d6c07a4b89b7_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb776d7f8f7914c57bc13ef10df777d5d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIab70491be87744798e6b21b4d6ae279c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9a091d77b26e48bab7f80dc1f6dccc6d_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6908478258754b6ea659f2e5421e3a77_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI97b0afbdca6b4d7c85bfedf212f1e5af_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI253a80a226e14478b511c16f5dbb3f20_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3e78b8e2e6334d83b68eed0e40f3908c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf8fadd5fb1f541e7ab9de932763997c7_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3ea989ddd4dc40bb8f54268cb5c18972_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6a7d85e1613f43fcb426b23ccd7dbb2a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIbe62ebcc5fbf42d1962c25477fba382a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI5cbfb37cc55e4bd9bf51b0eab63ab41f_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI0f5e84104bf84a78a5e41c745dc74add_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIded8ba33404f4003b39fa21c6ad277de_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI5b11524ce82946e18a68d5c42c8d32d8_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf9acae3cd1114a4e8964c0729623174a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc619a28ca92448c8b026eb152e4e2c1a_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId9a42e108e8a49f294c3bfa695d06ea2_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIe6f6d9be61604e3698070183cc104d10_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc7524e3e958941f3ab9b427093741e26_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI111901ce86ab48ddb09ac46c4ecc46ee_png",
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
                mediaID: "RIc19b20d21a77456596ce6f0d085c5991_png",
                a: false,
                k: "sia$char_3",
                c: false,
                Y: "0.00",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 546, y: 336 },
            shape: { type: 1, w: 390, h: 520 },
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
                mediaID: "RI8408bf40a8224008943c24cf8ca5ca1a_png",
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
                mediaID: "RAe25aeb64773749aaa0ed639da931df16_mp3",
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
                mediaID: "RAd37a3c2f35e1489fad5f81a0578290b4_mp3",
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
                mediaID: "RA532105814b1c44a3af680b769f21e64d_mp3",
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
                mediaID: "RI70624d2a2cbd42668cc18da1926b3511_png",
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
                mediaID: "RI7a7be3ff495c475782348fe3cce1c35d_png",
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
          layout: { children: ["6967A5_"] },
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
        "6967A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101332914,
            data: {
              properties: {
                attrs: {
                  apxAnimate: true,
                  cfg: {
                    frames: [
                      {
                        sprite: {
                          mediaID: "RI32ddc2b634d24d1793ddd6da58d03e3e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI6d35768cb39e443085aec2d5dea360b6_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI8397efc2d403498e97c6f6467898c4ee_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI61bd9f928c1541868c96a8ec00a2b42e_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI9ba4a98df5624752a8d39bde8400b699_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIf339a381f9f44201b7277ffc8f131b0c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIc286da666fef4b5aae567da7a2b83fb0_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI876deeb149cc45aea93ba43f19ed379c_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa9087abc082343e6b494f0124eab5f51_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7a6b77619ee246bb97615d03f929d30b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI821abd642e6843f5b9979149e13e54d9_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4030bf1b8e6f41e78ad99d35f93e97cb_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI3a467d5b5fe74b129036a571a149defa_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIdea421d69d894c7f8460e00b5af62b73_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI4ca401d0a3fd40af8b41f3338dd733b9_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI64d77f115e124f1c87ec36a8d5145540_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa97e7aed32204fb0bbb5b1b93a14504b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIb4e19626417b4dd5976d2a342853853b_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIa907daa430e647aa9c5f17701c1426eb_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI88e269f4b8e0428b9f9c1d4d514716d0_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI634839dc54454b62b587279625206a95_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI1a488cfdd9b9473e8ef987d6ac2dde61_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI7cdebe6599c34beaaa9ff0a3d65a65a3_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI5ba01d9dd1fc4277b6231bb5da5cecea_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RIed12ddeb49e040ed88f6ecf3a6e386be_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RId80437cd81fe42a997b9d51d878267cc_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI98ba9dfd1a09491f90e882d2c747f201_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI86c078f5a58f4ee6bfc14510e81704df_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI829f995003c14307bbb093e8bc56ffe1_png",
                        },
                        duration: "42",
                      },
                      {
                        sprite: {
                          mediaID: "RI47707e29721b4d0a8d6abdbba4048731_png",
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
                mediaID: "RI32ddc2b634d24d1793ddd6da58d03e3e_png",
                a: false,
                k: "sia$char_1",
              },
              lockType: 0,
            },
          },
          init: {
            position: { x: 576, y: 520 },
            shape: { type: 1, w: 326, h: 341 },
            cx: 0,
            cy: 0,
          },
          SPT: {},
        },
        "8162A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333310,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI7c8b55d90f7e4803ab1508ea7d7f8223_png",
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
        "8163A5_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101333311,
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
        "8164A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333312,
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
            children: ["8165A5_", "8167A5_"],
            layers: {
              1: { title: "Layer1", id: "8165A5_" },
              2: { title: "Layer2", id: "8167A5_" },
            },
            layerIndex: 2,
          },
        },
        "8165A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333313 },
          init: {
            position: { x: 912, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8166A5_"] },
        },
        "8166A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333314,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI5dc97e4271334256b89368aa18c698a1_png",
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
        "8167A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333315 },
          init: {
            position: { x: 912, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8168A5_"] },
        },
        "8168A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333316,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI9bc63b3900e545589f0ed457f88200f2_png",
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
        "8169A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333317,
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
            children: ["8170A5_", "8172A5_"],
            layers: {
              1: { title: "Layer1", id: "8170A5_" },
              2: { title: "Layer2", id: "8172A5_" },
            },
            layerIndex: 2,
          },
        },
        "8170A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333318 },
          init: {
            position: { x: 1012, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8171A5_"] },
        },
        "8171A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333319,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI5dc97e4271334256b89368aa18c698a1_png",
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
        "8172A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333320 },
          init: {
            position: { x: 1012, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8173A5_"] },
        },
        "8173A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333321,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI9bc63b3900e545589f0ed457f88200f2_png",
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
        "8174A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333322,
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
            children: ["8175A5_", "8177A5_"],
            layers: {
              1: { title: "Layer1", id: "8175A5_" },
              2: { title: "Layer2", id: "8177A5_" },
            },
            layerIndex: 2,
          },
        },
        "8175A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333323 },
          init: {
            position: { x: 1112, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8176A5_"] },
        },
        "8176A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333324,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI5dc97e4271334256b89368aa18c698a1_png",
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
        "8177A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333325 },
          init: {
            position: { x: 1112, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8178A5_"] },
        },
        "8178A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333326,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI9bc63b3900e545589f0ed457f88200f2_png",
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
        "8179A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333327,
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
            children: ["8180A5_", "8182A5_"],
            layers: {
              1: { title: "Layer1", id: "8180A5_" },
              2: { title: "Layer2", id: "8182A5_" },
            },
            layerIndex: 2,
          },
        },
        "8180A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333328 },
          init: {
            position: { x: 1211, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8181A5_"] },
        },
        "8181A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333329,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI5dc97e4271334256b89368aa18c698a1_png",
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
        "8182A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333330 },
          init: {
            position: { x: 1211, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8183A5_"] },
        },
        "8183A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333331,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI9bc63b3900e545589f0ed457f88200f2_png",
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
        "8184A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333332,
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
            children: ["8185A5_", "8187A5_"],
            layers: {
              1: { title: "Layer1", id: "8185A5_" },
              2: { title: "Layer2", id: "8187A5_" },
            },
            layerIndex: 2,
          },
        },
        "8185A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333333 },
          init: {
            position: { x: 1311, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8186A5_"] },
        },
        "8186A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333334,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI5dc97e4271334256b89368aa18c698a1_png",
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
        "8187A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333335 },
          init: {
            position: { x: 1311, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8188A5_"] },
        },
        "8188A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333336,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI9bc63b3900e545589f0ed457f88200f2_png",
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
        "8189A5_": {
          module: "apn.CLayerContainer",
          create: {
            type: 16779780,
            zIndex: 101333337,
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
            children: ["8190A5_", "8192A5_"],
            layers: {
              1: { title: "Layer1", id: "8190A5_" },
              2: { title: "Layer2", id: "8192A5_" },
            },
            layerIndex: 2,
          },
        },
        "8190A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333338 },
          init: {
            position: { x: 1411, y: 65 },
            shape: { type: 1, w: 800, h: 600 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8191A5_"] },
        },
        "8191A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333339,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI5dc97e4271334256b89368aa18c698a1_png",
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
        "8192A5_": {
          module: "apn.CLayer",
          create: { type: 16777729, zIndex: 101333340 },
          init: {
            position: { x: 1411, y: 65 },
            shape: { type: 1, w: 98, h: 58 },
            cx: 0,
            cy: 0,
          },
          layout: { children: ["8193A5_"] },
        },
        "8193A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333341,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI9bc63b3900e545589f0ed457f88200f2_png",
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
        "8194A5_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101333342,
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
        "8195A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333343,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI5fa7e4600b164ebeb1a125d0ffbca15a_png",
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
        "8196A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333344,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI5fa7e4600b164ebeb1a125d0ffbca15a_png",
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
        "8197A5_": {
          module: "apn.CImage",
          create: {
            type: 16777728,
            zIndex: 101333345,
            data: {
              properties: { attrs: { cfg: { mr: 0 } } },
              wgtID: "apn.wgt.image2",
              wgtTitle: "Image",
              styles: {
                mediaID: "RI5fa7e4600b164ebeb1a125d0ffbca15a_png",
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
        "8198A5_": {
          module: "apn.CRect",
          create: {
            type: 16777728,
            zIndex: 101333346,
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
              mediaID: "RIff4080178a1241ad97fa28534ed5ab76_png",
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
