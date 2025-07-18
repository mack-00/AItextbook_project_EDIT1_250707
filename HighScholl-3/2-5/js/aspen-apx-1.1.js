(window.apn = window.apn || {}),
  (apn.P = {}),
  (apn.P.INHERIT = "Default"),
  (apn.P.LINEDASH = 1e4),
  (apn.P.LINEEND2 = 10001),
  (apn.P.LINEDASH2 = 10002),
  (apn.P.ITR_EFFECT_W2P = 11010),
  (apn.P.ITR_EFFECT_P2P = 11011),
  (apn.P.ITR_EFFECT_SWP = 11012),
  (apn.P.ITR_OP_WGT = 11020),
  (apn.P.ITR_OP_PAGE_DRAG = 11021),
  (apn.P.ITR_OP_INFLOW = 11023),
  (apn.P.ITR_TIMING = 11030),
  (apn.P.ITR_LTP_TYPE = 11040),
  (apn.P.eventTitle = {
    click: "Tap",
    doubleTap: "Double Tap",
    longHold: "Long Tap",
    tapStart: "Tap Start",
    flickLeft: "Flick Left",
    flickRight: "Flick Right",
    flickUp: "Flick Up",
    flickDown: "Flick Down",
    drawLeft: "Draw Left",
    drawRight: "Draw Right",
    drawUp: "Draw Up",
    drawDown: "Draw Down",
    pinchIn: "Pinch In",
    pinchOut: "Pinch Out",
    pageLoad: "Page Create",
    pageRun: "Page Run",
    pagePause: "Page Pause",
    dragStart: "Drag Start",
    drag: "Drag",
    dragEnd: "Drag End",
    dragDrop: "Drop",
    dragDropResult: "Drop Result",
    pointerOver: "Mouse Over",
    pointerOut: "Mouse Out",
    stateChange: "State Change",
    wgtEvent: "Widget Event",
    contentChange: "Content Change",
    contentLoad: "Content Load",
    inputChange: "Input Change",
    inputFocus: "Input Focus",
    inputBlur: "Input Blur",
    inputSet: "Input Set",
    spt_EvtBubble: "Event Bubble",
    spt_Custom: "Custom Event",
    spt_WgtStart: "Widget Start",
    spt_Collision: "Collision",
    spt_CollisionOff: "Collision Off",
    spt_fontLoad: "Font Load",
    media: "Media",
    animation: "Animation",
    timer: "Timer",
    musicNote: "Music Note",
    musicBeat: "Music Beat",
    musicLine: "Music LineSet",
    musicVerse: "Music Verse",
  }),
  (apn.P.effectTitle = {
    move: "Slide",
    moveLeft: "Slide Left",
    moveRight: "Slide Right",
    moveTop: "Slide Up",
    moveBottom: "Slide Down",
    slideUp: "Slide In",
    slideUpLeft: "Slide In Left",
    slideUpRight: "Slide In Right",
    slideUpTop: "Slide In Up",
    slideUpBottom: "Slide In Down",
    dissolve: "Dissolve",
    zoomIn: "Zoom In",
    zoomOut: "Zoom Out",
    cardUp: "Card Out",
    cardUpLeft: "Card Out Left",
    cardUpRight: "Card Out Right",
    cardUpTop: "Card Out Up",
    cardUpBottom: "Card Out Down",
    fall: "Fall",
    glue: "Glue",
    glueLeft: "Glue Left",
    glueRight: "Glue Right",
    glueTop: "Glue Up",
    glueBottom: "Glue Down",
    timeLag: "Time-lag",
    timeLagLeft: "Time-lag Left",
    timeLagRight: "Time-lag Right",
    timeLagTop: "Time-lag Up",
    timeLagBottom: "Time-lag Down",
    cube: "Cube In",
    cubeLeft: "Cube In Left",
    cubeRight: "Cube In Right",
    cubeTop: "Cube In Up",
    cubeBottom: "Cube In Down",
    cube0: "Cube",
    cube0Left: "Cube Left",
    cube0Right: "Cube Right",
    cube0Top: "Cube Up",
    cube0Bottom: "Cube Down",
    newspaper: "Newspaper",
    flip: "Flip",
    flipLeft: "Flip Left",
    flipRight: "Flip Right",
    flipTop: "Flip Up",
    flipBottom: "Flip Down",
    flip: "Flip",
    flipLeft: "Flip Left",
    flipRight: "Flip Right",
    flipTop: "Flip Up",
    flipBottom: "Flip Down",
    bookFlip1: "Book Flip",
  }),
  (apn.P.effectFromTitle = {
    Slide: "move",
    "Slide Left": "moveLeft",
    "Slide Right": "moveRight",
    "Slide Up": "moveTop",
    "Slide Down": "moveBottom",
    "Slide In": "slideUp",
    "Slide In Left": "slideUpLeft",
    "Slide In Right": "slideUpRight",
    "Slide In Up": "slideUpTop",
    "Slide In Down": "slideUpBottom",
    Dissolve: "dissolve",
    "Zoom In": "zoomIn",
    "Zoom Out": "zoomOut",
    "Card Out": "cardUp",
    "Card Out Left": "cardUpLeft",
    "Card Out Right": "cardUpRight",
    "Card Out Up": "cardUpTop",
    "Card Out Down": "cardUpBottom",
    Fall: "fall",
    Glue: "glue",
    "Glue Left": "glueLeft",
    "Glue Right": "glueRight",
    "Glue Up": "glueTop",
    "Glue Down": "glueBottom",
    "Time-lag": "timeLag",
    "Time-lag Left": "timeLagLeft",
    "Time-lag Right": "timeLagRight",
    "Time-lag Up": "timeLagTop",
    "Time-lag Down": "timeLagBottom",
    "Cube In": "cube",
    "Cube In Left": "cubeLeft",
    "Cube In Right": "cubeRight",
    "Cube In Up": "cubeTop",
    "Cube In Down": "cubeBottom",
    Cube: "cube0",
    "Cube Left": "cube0Left",
    "Cube Right": "cube0Right",
    "Cube Up": "cube0Top",
    "Cube Down": "cube0Bottom",
    Newspaper: "newspaper",
    Flip: "flip",
    "Flip Left": "flipLeft",
    "Flip Right": "flipRight",
    "Flip Up": "flipTop",
    "Flip Down": "flipBottom",
    "Book Flip": "bookFlip1",
  }),
  (apn.P.timingTitle = {
    linear: "Linear",
    ease: "Ease Out-in",
    "ease-in": "Ease In",
    "ease-out": "Ease Out",
    "ease-in-out": "Ease In-out",
  }),
  (apn.P.traceTitle = { none: "None", arcCW: "Arc(CW)", arcCCW: "Arc(CCW)" }),
  (apn.P.exeScreenSetupTitle = { fix: "Fixed", zoom: "Layout to fit screen" }),
  (apn.P.getStatic = function (e, t) {
    var a;
    return (
      e == apn.P.LINEDASH
        ? (a = [
            { value: null, title: "solid" },
            { value: [2, 2], title: "dotted" },
            { value: [4, 3], title: "dashed" },
          ])
        : e == apn.P.LINEEND2
        ? (a = [
            { value: null },
            { value: "1E" },
            { value: "1S" },
            { value: "1" },
            { value: "2E" },
            { value: "2S" },
            { value: "2" },
          ])
        : e == apn.P.LINEDASH2
        ? (a = [
            { value: null },
            { value: [1, 2] },
            { value: [1, 1] },
            { value: [3, 1] },
            { value: [3, 1, 1, 1] },
            { value: [6, 1] },
            { value: [6, 1, 1, 1] },
            { value: [6, 1, 1, 1, 1, 1] },
          ])
        : e == apn.P.ITR_OP_WGT
        ? (apn.dbUI && apn.dbUI.system && apn.dbUI.system.flwModeHide
            ? ((a = [
                { value: "CWP", title: "Change Property" },
                { value: "CWS", title: "Change State" },
              ]),
              apn.dbUI &&
                apn.dbUI.system &&
                apn.dbUI.system.flwModeHideUseLTP &&
                a.push({
                  value: "LTP",
                  title:
                    "Link to " +
                    (apn.dbUI && apn.dbUI.system && apn.dbUI.system.page
                      ? apn.dbUI.system.page
                      : "Page"),
                }))
            : (a = [
                { value: "CWP", title: "Change Property" },
                { value: "CWS", title: "Change State" },
                {
                  value: "LTP",
                  title:
                    "Link to " +
                    (apn.dbUI && apn.dbUI.system && apn.dbUI.system.page
                      ? apn.dbUI.system.page
                      : "Page"),
                },
                { value: "LTB", title: "Link Back" },
                { value: "LTH", title: "Link Back to Home" },
              ]),
          apn.dbUI &&
            apn.dbUI.system &&
            apn.dbUI.system.exeItrURL &&
            "click" == t &&
            a.push({ value: "URL", title: "Link to URL" }),
          a.push({ value: "FCE", title: "Send Message" }),
          "dragDrop" == t &&
            a.push({ value: "FDR", title: "Send Drop Result" }),
          a.push({ value: "WAT", title: "Wait" }),
          a.push({ value: "CMT", title: "Comment" }))
        : e == apn.P.ITR_OP_PAGE_DRAG
        ? (a = [
            {
              value: "LTP",
              title:
                "Link to " +
                (apn.dbUI && apn.dbUI.system && apn.dbUI.system.page
                  ? apn.dbUI.system.page
                  : "Page"),
            },
            { value: "LTB", title: "Link Back" },
            { value: "LTH", title: "Link Back to Home" },
          ])
        : e == apn.P.ITR_OP_INFLOW
        ? (a = [
            {
              value: "LTP",
              title:
                "Link to " +
                (apn.dbUI && apn.dbUI.system && apn.dbUI.system.page
                  ? apn.dbUI.system.page
                  : "Page"),
            },
            { value: "LTB", title: "Link Back" },
            { value: "LTH", title: "Link Back to Home" },
          ])
        : e == apn.P.ITR_EFFECT_W2P
        ? (a = [
            { value: void 0, title: apn.P.INHERIT },
            { value: "none", title: "None" },
            { value: "dissolve", title: apn.P.effectTitle.dissolve },
            { value: "zoomIn", title: apn.P.effectTitle.zoomIn },
            { value: "zoomOut", title: apn.P.effectTitle.zoomOut },
            { value: "fall", title: apn.P.effectTitle.fall },
            { value: "newspaper", title: apn.P.effectTitle.newspaper },
            {
              value: {
                left: "moveLeft",
                right: "moveRight",
                up: "moveTop",
                down: "moveBottom",
              },
              title: apn.P.effectTitle.move,
            },
            {
              value: {
                left: "slideUpLeft",
                right: "slideUpRight",
                up: "slideUpTop",
                down: "slideUpBottom",
              },
              title: apn.P.effectTitle.slideUp,
            },
            {
              value: {
                left: "cardUpLeft",
                right: "cardUpRight",
                up: "cardUpTop",
                down: "cardUpBottom",
              },
              title: apn.P.effectTitle.cardUp,
            },
            {
              value: {
                left: "glueLeft",
                right: "glueRight",
                up: "glueTop",
                down: "glueBottom",
              },
              title: apn.P.effectTitle.glue,
            },
            {
              value: {
                left: "timeLagLeft",
                right: "timeLagRight",
                up: "timeLagTop",
                down: "timeLagBottom",
              },
              title: apn.P.effectTitle.timeLag,
            },
            {
              value: {
                left: "cubeLeft",
                right: "cubeRight",
                up: "cubeTop",
                down: "cubeBottom",
              },
              title: apn.P.effectTitle.cube,
            },
            {
              value: {
                left: "flipLeft",
                right: "flipRight",
                up: "flipTop",
                down: "flipBottom",
              },
              title: apn.P.effectTitle.flip,
            },
          ])
        : e == apn.P.ITR_EFFECT_P2P
        ? (a = apn.P.getStatic(apn.P.ITR_EFFECT_W2P))
        : e == apn.P.ITR_EFFECT_SWP
        ? (a = [
            { value: "none", title: "None" },
            { value: "zoomIn", title: apn.P.effectTitle.zoomIn },
            { value: "newspaper", title: apn.P.effectTitle.newspaper },
          ])
        : e == apn.P.ITR_LTP_TYPE
        ? (a = [
            { value: 1, title: "Link" },
            { value: 3, title: "Link as Popup" },
          ])
        : e == apn.P.ITR_TIMING &&
          (a = [
            { value: "linear", title: apn.P.timingTitle.linear },
            { value: "ease", title: apn.P.timingTitle.ease },
            { value: "ease-in", title: apn.P.timingTitle["ease-in"] },
            { value: "ease-out", title: apn.P.timingTitle["ease-out"] },
            { value: "ease-in-out", title: apn.P.timingTitle["ease-in-out"] },
          ]),
      a
    );
  }),
  (apn.P.getSetOfCWP = function (e, t, a) {
    var i,
      n = e.pages[t].objects[a],
      r = apn.Project.getWidgetModule(n.create.data),
      o = { zIndex: { title: "Z-Index", type: 1 } };
    if (
      ((r && r.exeItrNoMove) ||
        ((o.pBk = { title: "Position back to", type: 2, trace: !0 }),
        (o.position = { title: "Position to", type: 2, trace: !0 }),
        (o.positionBy = { title: "Position by", type: 2, trace: !0 })),
      n.init.shape.type == bx.CCanvasWnd.SHAPE_LINE
        ? (o.line = { title: "Line", type: 2 })
        : ((n.layout && n.layout.children) ||
            (r && r.exeItrNoResize) ||
            ((o.size = { title: "Size to", type: 2 }),
            (o.sizeBy = { title: "Size by", type: 2 })),
          (r && r.exeItrNoZoom) ||
            ((o.zoom = { title: "Zoom to", type: 2 }), (i = !0))),
      r)
    ) {
      r.styleMap &&
        (r.styleMap.angle &&
          ((o.angle = { title: "Rotate to", type: 2 }), (i = !0)),
        r.styleMap.visibility &&
          (o.visibility = { title: "Visibility", type: 1 }),
        r.styleMap.alpha && (o.alpha = { title: "Opacity", type: 2 }),
        r.styleMap.text &&
          ((o.text = { title: "Text", type: 1 }),
          (o.textColor = { title: "Text color", type: 1 })),
        (r.styleMap.dragX || r.styleMap.dragY) &&
          (o.drag = { title: "Drag", type: 1 })),
        r.exeInputSet && (o.value = { title: "Value", type: 1 }),
        i && (o.trOrg = { title: "Zoom/Angle center", type: 1 });
      var s;
      if (r.edtOnBuildRuntimeProperty)
        try {
          s = r.edtOnBuildRuntimeProperty(e, a, t);
        } catch (e) {
          console.error(
            "Program error in edtOnBuildRuntimeProperty() of " +
              n.create.data.wgtID +
              "\n\n" +
              e
          );
        }
      else if (r.editor && r.editor.runtimeProperties)
        for (var p in r.editor.runtimeProperties)
          (s = s || {}),
            (s[p] = bx.$cloneObject({}, r.editor.runtimeProperties[p]));
      s && (o.extended = { title: "Extended property", type: 1, extended: s });
    }
    return o;
  }),
  (apn.P.getCurrentValueOfCWP = function (e, t, a) {
    var i = {},
      n = e.pages[t].objects[a];
    (i.position = { x: n.init.position.x, y: n.init.position.y }),
      n.init.shape.type == bx.CCanvasWnd.SHAPE_RECT
        ? ((i.size = { w: n.init.shape.w, h: n.init.shape.h }),
          (i.zoom = { w: 1, h: 1 }),
          (i.trOrg = {
            orgX: (n.init.cx + n.init.shape.w / 2) / n.init.shape.w,
            orgY: (n.init.cy + n.init.shape.h / 2) / n.init.shape.h,
          }))
        : n.init.shape.type == bx.CCanvasWnd.SHAPE_LINE &&
          (i.line = {
            x1: n.init.position.x + n.init.shape.x[0],
            y1: n.init.position.y + n.init.shape.y[0],
            x2: n.init.position.x + n.init.shape.x[1],
            y2: n.init.position.y + n.init.shape.y[1],
          });
    if (
      n.create.data &&
      (wgtModule = apn.Project.getWidgetModule(n.create.data)) &&
      (n.create.data.styles &&
        (wgtModule.styleMap.visibility &&
          (apn.Project.resolveStyle(
            e,
            "visibility",
            n.create.data.styles.visibility
          ) === !0
            ? (i.visibility = "Show")
            : 1 ===
              apn.Project.resolveStyle(
                e,
                "visibility",
                n.create.data.styles.visibility
              )
            ? (i.visibility = "Pass")
            : 2 ===
              apn.Project.resolveStyle(
                e,
                "visibility",
                n.create.data.styles.visibility
              )
            ? (i.visibility = "Block")
            : (i.visibility = "Hide")),
        wgtModule.styleMap.alpha &&
          (i.alpha = parseFloat(
            apn.Project.resolveStyle(e, "alpha", n.create.data.styles.alpha)
          )),
        wgtModule.styleMap.angle &&
          (i.angle = parseFloat(
            apn.Project.resolveStyle(e, "angle", n.create.data.styles.angle)
          )),
        wgtModule.styleMap.text &&
          !wgtModule.exeItrNoText &&
          ((i.text = apn.Project.resolveStyle(
            e,
            "text",
            n.create.data.styles.text
          )),
          (i.textColor = apn.Project.resolveStyle(
            e,
            "fontStyle",
            n.create.data.styles.fontStyle
          ))),
        (wgtModule.styleMap.dragX || wgtModule.styleMap.dragY) &&
          ((i.drag = { dragX: "No", dragY: "No" }),
          n.create.data.styles &&
            n.create.data.styles.dragX &&
            (i.drag.dragX = "Yes"),
          n.create.data.styles &&
            n.create.data.styles.dragY &&
            (i.drag.dragY = "Yes"),
          (wgtModule.styleMap.dragInParent ||
            wgtModule.styleMap.dragContainParent) &&
            ((i.drag.dragInParent = "None"),
            n.create.data.styles && n.create.data.styles.dragInParent
              ? (i.drag.dragInParent = "In")
              : n.create.data.styles &&
                n.create.data.styles.dragContainParent &&
                (i.drag.dragInParent = "Contain")))),
      wgtModule.editor && wgtModule.editor.runtimeProperties)
    ) {
      var r;
      for (var o in wgtModule.editor.runtimeProperties)
        (r = r || {}),
          n.create.data.properties &&
            n.create.data.properties.attrs &&
            void 0 !== n.create.data.properties.attrs[o] &&
            (r[o] = n.create.data.properties.attrs[o]);
      r && (i.extended = r);
    }
    return i;
  }),
  (apn.P.isObjectCompositeSysEV = function (e) {
    return (
      "dragDrop" == e ||
      0 == e.indexOf("dragDrop:") ||
      "spt_Collision" == e ||
      0 == e.indexOf("spt_Collision:") ||
      "spt_CollisionOff" == e ||
      0 == e.indexOf("spt_CollisionOff:")
    );
  }),
  (apn.P.resolveCompositeSysEV = function (e) {
    if (e.indexOf(":") != -1) {
      var t = e.split(":");
      if (t[0]) return { ev: t[0], param: t[1] || "" };
    }
    return null;
  }),
  (apn.P.$O7u = function (e) {
    var t = null;
    if (e) {
      var a = apn.Project.getExeModule(e);
      a.IStub_getPageEvent && (t = a.IStub_getPageEvent());
    }
    if (apn.dbUI && apn.dbUI.event)
      return t ? bx.$copyObject(t, apn.dbUI.event) : apn.dbUI.event;
    if (e) {
      var i = apn.Project.getLayout(e).CTXT.deviceID;
      if (apn.widgetDevice[i] && apn.widgetDevice[i].event)
        return t
          ? bx.$copyObject(t, apn.widgetDevice[i].event)
          : apn.widgetDevice[i].event;
    }
    return t;
  }),
  (apn.P.$Obu = function (e) {
    if (
      apn.dbUI &&
      apn.dbUI.system &&
      (apn.dbUI.system.exeNativePlayer || apn.dbUI.system.flwModeHide)
    )
      return !1;
    var t = apn.Project.getExeModule(e);
    if (t && t.IStub_getConfiguration) {
      var a = t.IStub_getConfiguration();
      if (a && a.flowModeHide) return !1;
    }
    return !0;
  }),
  (apn.P.getEvent = function (e, t, a, i, n, r) {
    function o(e, t) {
      return S.objects[e].create.data &&
        S.objects[e].create.data.styles &&
        S.objects[e].create.data.styles.title
        ? S.objects[t].create.data &&
          S.objects[t].create.data.styles &&
          S.objects[t].create.data.styles.title
          ? S.objects[e].create.data.styles.title >
            S.objects[t].create.data.styles.title
            ? 1
            : S.objects[e].create.data.styles.title <
              S.objects[t].create.data.styles.title
            ? -1
            : 0
          : -1
        : 1;
    }
    function s(e, t, a) {
      var i = apn.P.resolveCompositeSysEV(t);
      if (i)
        e[i.ev]
          ? (l[i.ev] ||
              ((l[i.ev] = bx.$cloneObject({}, e[i.ev])),
              a && (l[i.ev].removed = !0)),
            (l[i.ev].$O3O = l[i.ev].$O3O || {}),
            (l[i.ev].$O3O[i.param] = !0))
          : a ||
            bx.Trace.log(
              "APN",
              "warning",
              "Unknown custom event=" + t,
              "P.getEvent"
            );
      else if (e[t]) {
        if (
          (l[t] ||
            ((l[t] = bx.$cloneObject({}, e[t])), a && (l[t].removed = !0)),
          e[t].param)
        ) {
          l[t].$O3O = l[t].$O3O || {};
          for (var n in e[t].param) l[t].$O3O[n] = !0;
        }
      } else
        a ||
          bx.Trace.log(
            "APN",
            "warning",
            "Unknown custom event=" + t,
            "P.getEvent"
          );
    }
    var p = e.pages[t].UI.apnCExe;
    (apn.P.eventTitle.pageLoad =
      (apn.dbUI && apn.dbUI.system && apn.dbUI.system.page
        ? apn.dbUI.system.page
        : "Page") + " Create"),
      (apn.P.eventTitle.pageRun =
        (apn.dbUI && apn.dbUI.system && apn.dbUI.system.page
          ? apn.dbUI.system.page
          : "Page") + " Run"),
      (apn.P.eventTitle.pagePause =
        (apn.dbUI && apn.dbUI.system && apn.dbUI.system.page
          ? apn.dbUI.system.page
          : "Page") + " Pause");
    var l, d, c;
    if (a) {
      if (!e.pages[t].objects[a]) return n ? {} : [];
      c = apn.Project.getWidgetModule(e.pages[t].objects[a].create.data);
    }
    var g = apn.Project.getLayout(e).property;
    if (((l = {}), r))
      var u = !0,
        h = !0,
        x = !0;
    else {
      var u = apn.P.$Obu(e),
        h = apn.P.$Obu(e),
        x = !0;
      h ||
        (g.CExeBookCore &&
          ("Y" == g.CExeBookCore.pageNoReset
            ? (apn.P._usePageLoadEvent = !0)
            : "N" == g.CExeBookCore.pageNoReset &&
              (apn.P._usePageLoadEvent = !1)),
        apn.P._usePageLoadEvent && (h = !0));
    }
    if (void 0 === a)
      i
        ? (u &&
            ((l.flickLeft = {}),
            (l.flickRight = {}),
            (l.flickUp = {}),
            (l.flickDown = {})),
          (l.click = {}),
          h && (l.pageLoad = {}),
          (l.pageRun = {}),
          x && (l.pagePause = {}))
        : (h && (l.pageLoad = {}),
          (l.pageRun = {}),
          x && (l.pagePause = {}),
          u &&
            ((l.flickLeft = {}),
            (l.flickRight = {}),
            (l.flickUp = {}),
            (l.flickDown = {})),
          (l.click = {})),
        apn.dbUI &&
          apn.dbUI.system &&
          apn.dbUI.system.exeScripting &&
          ((l.spt_EvtBubble = {}),
          (l.spt_Custom = {}),
          (l.spt_fontLoad = {
            value: "spt_fontLoad",
            title: apn.P.eventTitle.spt_fontLoad,
            param: { End: "End", Timeout: "Timeout" },
          }));
    else if (c) {
      if (!c.APX_NO_POINTER_EV) {
        var f =
          r ||
          (apn.dbUI &&
            apn.dbUI.system &&
            1 == apn.dbUI.system.exeEventStart &&
            !c.exeItrNoTapStart);
        g.CExe && g.CExe.event && "Y" == g.CExe.event.TS1
          ? (f && (l.tapStart = {}), (l.click = {}))
          : ((l.click = {}), f && (l.tapStart = {})),
          u &&
            ((l.flickLeft = {}),
            (l.flickRight = {}),
            (l.flickUp = {}),
            (l.flickDown = {})),
          (r ||
            (apn.dbUI &&
              apn.dbUI.system &&
              1 == apn.dbUI.system.exeEventHover)) &&
            ((l.pointerOver = {}), (l.pointerOut = {})),
          (r ||
            (window.asui &&
              asui.CFG &&
              asui.CFG.getAccessInfo &&
              asui.CFG.getAccessInfo() &&
              asui.CFG.getAccessInfo().exeEventDrag === !0)) &&
            ((c.styleMap.dragX || c.styleMap.dragY) &&
              ((l.dragStart = {}),
              (l.drag = {}),
              (l.dragEnd = {}),
              (l.dragDropResult = {
                value: "dragDropResult",
                title: apn.P.eventTitle.dragDropResult,
                param: { Accepted: "Accepted", Rejected: "Rejected" },
              })),
            (l.dragDrop = {})),
          (r || (p && "Y" == p.evPch)) && ((l.pinchIn = {}), (l.pinchOut = {}));
      }
      c.edtOnCheckContentChange &&
        c.edtOnCheckContentChange(e, t, a) &&
        (l.contentChange = {
          value: "contentChange",
          title: apn.P.eventTitle.contentChange,
          param: c.edtOnCheckContentChange(e, t, a),
        }),
        c.exeOnCheckContentLoad &&
          c.exeOnCheckContentLoad(e, t, a) &&
          (l.contentLoad = {
            value: "contentLoad",
            title: apn.P.eventTitle.contentLoad,
            param: c.exeOnCheckContentLoad(e, t, a),
          });
      var y = e.pages[t].objects[a].create.data;
      if (
        y &&
        y.properties &&
        y.properties.attrs &&
        y.properties.attrs.apxMediaControl
      )
        if (2 == y.properties.attrs.apxMediaControl)
          l.media = {
            value: "media",
            title: apn.P.eventTitle.media,
            param: {
              Start: "Start",
              Resume: "Resume",
              Pause: "Pause",
              End: "End",
            },
          };
        else if (
          !r &&
          apn.dbUI &&
          apn.dbUI.system &&
          apn.dbUI.system.exeNativePlayer
        )
          l.media = {
            value: "media",
            title: apn.P.eventTitle.media,
            param: { Start: "Start", End: "End" },
          };
        else {
          var v = null;
          c.exeMediaSupportTrack && (v = c.exeMediaSupportTrack(e.pages[t], a)),
            v === !1
              ? (l.media = {
                  value: "media",
                  title: apn.P.eventTitle.media,
                  param: {
                    Start: "Start",
                    Resume: "Resume",
                    Pause: "Pause",
                    End: "End",
                    EndN: "EndNormal",
                  },
                })
              : (l.media = {
                  value: "media",
                  title: apn.P.eventTitle.media,
                  param: {
                    Start: "Start",
                    Resume: "Resume",
                    Pause: "Pause",
                    End: "End",
                    EndN: "EndNormal",
                    trackStart: "TrackStart",
                    trackEnd: "TrackEnd",
                    trackEndN: "TrackEndNormal",
                    sectionEndN: "SectionEndNormal",
                  },
                });
        }
      if (
        (y &&
          y.properties &&
          y.properties.attrs &&
          y.properties.attrs.apxAnimate &&
          (l.animation = {
            value: "animation",
            title: apn.P.eventTitle.animation,
            param: { Start: "Start", End: "End" },
          }),
        c.edtOnBuildEvent)
      )
        try {
          c.edtOnBuildEvent(e, a, t, l, r);
        } catch (e) {
          console.error(
            "Program error in edtOnBuildEvent() of " + y.wgtID + "\n\n" + e
          );
        }
      apn.dbUI &&
        apn.dbUI.system &&
        apn.dbUI.system.exeScripting &&
        (e.property.denyWidgetStartEvent || (l.spt_WgtStart = {}),
        (l.spt_Custom = {}),
        (l.spt_Collision = {}),
        (l.spt_CollisionOff = {}));
    }
    var C, b;
    if (c) {
      var _,
        m = !0;
      if (c.editor && c.editor.statesFire) {
        var I = [];
        for (C in c.editor.statesFire)
          I.push({ stateID: "$APX" + C, title: c.editor.statesFire[C] });
      } else {
        var I = apn.Project.getExeStateByObjectID(e, t, a);
        (c && c.exeFireStateEvent) || (m = !1);
      }
      if (
        (r || (apn.Project.getSPT(e, t, a, "stateChange") && (_ = !0)),
        I && I.length && (I.length > 1 || _) && m)
      )
        for (
          l.stateChange = {
            value: "stateChange",
            title: apn.P.eventTitle.stateChange,
            param: {},
          },
            C = 0;
          C < I.length;
          C++
        )
          l.stateChange.param[I[C].stateID] = I[C].title;
    }
    if (l.dragDrop) {
      var S = e.pages[t],
        P = apn.Project.findParentOf(S, a),
        T = [],
        w = {};
      for (C in S.objects)
        if (
          S.objects[C].layout &&
          S.objects[C].layout.children &&
          "bx.CEditorWnd.CGroup" != S.objects[C].module
        )
          for (b = 0; b < S.objects[C].layout.children.length; b++)
            w[S.objects[C].layout.children[b]] = C;
      for (C in S.objects) C != a && P == w[C] && T.push(C);
      if (T.length) {
        (l.dragDrop.value = "dragDrop"),
          (l.dragDrop.title = apn.P.eventTitle.dragDrop),
          (l.dragDrop.param = {}),
          T.sort(o);
        var E;
        for (l.dragDrop.param.$ELSE = "[Else]", C = 0; C < T.length; C++)
          (E = ""),
            apn.Project.getWidgetModule(S.objects[T[C]].create.data) &&
              (S.objects[T[C]].create.data.styles &&
                S.objects[T[C]].create.data.styles.title &&
                (E = S.objects[T[C]].create.data.styles.title),
              E || (E += "(" + S.objects[T[C]].create.data.wgtTitle + ")"),
              (l.dragDrop.param[T[C]] = E));
      }
    }
    if (void 0 === a) {
      var V = apn.P.$O7u(e);
      if (V && e.pages[t]) {
        for (C in e.pages[t].objects)
          if (
            (c = apn.Project.getWidgetModule(
              e.pages[t].objects[C].create.data
            )) &&
            c.events &&
            c.events.length
          )
            for (b = 0; b < c.events.length; b++)
              c.events[b] && s(V, c.events[b]);
        var j = apn.Project.findITRs(e, t, a);
        if (j && j.length) for (C = 0; C < j.length; C++) s(V, j[C].event, !0);
        for (C in V)
          if (V[C].fromPage)
            if (V[C].param) for (b in V[C].param) s(V, C + ":" + b);
            else s(V, C);
      }
    }
    if (n) return l;
    d = [];
    for (C in l) {
      if (l[C].param && l[C].$O3O)
        for (b in l[C].param) l[C].$O3O[b] || delete l[C].param[b];
      l[C].$O3O && delete l[C].$O3O,
        (l[C].value = C),
        l[C].title || (l[C].title = apn.P.eventTitle[C]),
        d.push(l[C]);
    }
    return d;
  }),
  (apn.P.getEventWgtParam = function (e, t, a, i, n) {
    function r(e, t) {
      return x.objects[e].create.data &&
        x.objects[e].create.data.styles &&
        x.objects[e].create.data.styles.title
        ? x.objects[t].create.data &&
          x.objects[t].create.data.styles &&
          x.objects[t].create.data.styles.title
          ? x.objects[e].create.data.styles.title >
            x.objects[t].create.data.styles.title
            ? 1
            : x.objects[e].create.data.styles.title <
              x.objects[t].create.data.styles.title
            ? -1
            : 0
          : -1
        : 1;
    }
    var o, s;
    if (
      !t.pages[a].objects[i] ||
      !(s = apn.Project.getWidgetModule(t.pages[a].objects[i].create.data))
    )
      return o;
    "dragDrop" == n &&
      (s.APX_NO_POINTER_EV ||
        ((o = o || {}),
        (s.styleMap.dragX || s.styleMap.dragY) &&
          (o.dragDropResult = {
            param: { Accepted: "Accepted", Rejected: "Rejected" },
          }),
        (o.dragDrop = {}))),
      "dragDropResult" == n &&
        (s.APX_NO_POINTER_EV ||
          ((o = o || {}),
          (s.styleMap.dragX || s.styleMap.dragY) &&
            (o.dragDropResult = {
              param: { Accepted: "Accepted", Rejected: "Rejected" },
            }))),
      "contentChange" == n &&
        s.edtOnCheckContentChange &&
        s.edtOnCheckContentChange(t, a, i) &&
        ((o = o || {}),
        (o.contentChange = { param: s.edtOnCheckContentChange(t, a, i) })),
      "contentLoad" == n &&
        s.exeOnCheckContentLoad &&
        s.exeOnCheckContentLoad(t, a, i) &&
        ((o = o || {}),
        (o.contentLoad = { param: s.exeOnCheckContentLoad(t, a, i) }));
    var p = t.pages[a].objects[i].create.data;
    if (
      "media" == n &&
      p &&
      p.properties &&
      p.properties.attrs &&
      p.properties.attrs.apxMediaControl
    )
      if (((o = o || {}), 2 == p.properties.attrs.apxMediaControl))
        o.media = {
          param: {
            Start: "Start",
            Resume: "Resume",
            Pause: "Pause",
            End: "End",
          },
        };
      else if (
        !e &&
        apn.dbUI &&
        apn.dbUI.system &&
        apn.dbUI.system.exeNativePlayer
      )
        o.media = { param: { Start: "Start", End: "End" } };
      else {
        var l = null;
        s.exeMediaSupportTrack && (l = s.exeMediaSupportTrack(t.pages[a], i)),
          l === !1
            ? (o.media = {
                param: {
                  Start: "Start",
                  Resume: "Resume",
                  Pause: "Pause",
                  End: "End",
                  EndN: "EndNormal",
                },
              })
            : (o.media = {
                param: {
                  Start: "Start",
                  Resume: "Resume",
                  Pause: "Pause",
                  End: "End",
                  EndN: "EndNormal",
                  trackStart: "TrackStart",
                  trackEnd: "TrackEnd",
                  trackEndN: "TrackEndNormal",
                  sectionEndN: "SectionEndNormal",
                },
              });
      }
    if (
      ("animation" == n &&
        p &&
        p.properties &&
        p.properties.attrs &&
        p.properties.attrs.apxAnimate &&
        ((o = o || {}),
        (o.animation = { param: { Start: "Start", End: "End" } })),
      s.edtOnBuildEvent)
    ) {
      o = o || {};
      try {
        s.edtOnBuildEvent(t, i, a, o, e);
      } catch (e) {
        console.error(
          "Program error in edtOnBuildEvent() of " + p.wgtID + "\n\n" + e
        );
      }
    }
    var d,
      c,
      g,
      u = !0;
    if ("stateChange" == n) {
      if (s.editor && s.editor.statesFire) {
        var h = [];
        for (d in s.editor.statesFire)
          h.push({ stateID: "$APX" + d, title: s.editor.statesFire[d] });
      } else {
        var h = apn.Project.getExeStateByObjectID(t, a, i);
        (s && s.exeFireStateEvent) || (u = !1);
      }
      if (
        (e || (apn.Project.getSPT(t, a, i, "stateChange") && (g = !0)),
        h && h.length && (h.length > 1 || g) && u)
      )
        for (
          o = o || {}, o.stateChange = { param: {} }, d = 0;
          d < h.length;
          d++
        )
          o.stateChange.param[h[d].stateID] = h[d].title;
    }
    if (o && o.dragDrop) {
      var x = t.pages[a],
        f = apn.Project.findParentOf(x, i),
        y = [],
        v = {};
      for (d in x.objects)
        if (
          x.objects[d].layout &&
          x.objects[d].layout.children &&
          "bx.CEditorWnd.CGroup" != x.objects[d].module
        )
          for (c = 0; c < x.objects[d].layout.children.length; c++)
            v[x.objects[d].layout.children[c]] = d;
      for (d in x.objects) d != i && f == v[d] && y.push(d);
      if (y.length) {
        (o.dragDrop.value = "dragDrop"),
          (o.dragDrop.title = apn.P.eventTitle.dragDrop),
          (o.dragDrop.param = {}),
          y.sort(r);
        var C;
        for (o.dragDrop.param.$ELSE = "[Else]", d = 0; d < y.length; d++)
          (C = ""),
            apn.Project.getWidgetModule(x.objects[y[d]].create.data) &&
              (x.objects[y[d]].create.data.styles &&
                x.objects[y[d]].create.data.styles.title &&
                (C = x.objects[y[d]].create.data.styles.title),
              C || (C += "(" + x.objects[y[d]].create.data.wgtTitle + ")"),
              (o.dragDrop.param[y[d]] = C));
      }
    }
    return o;
  }),
  (apn.P.isDrawTypeEvent = function (e) {
    return (
      "drawLeft" == e || "drawRight" == e || "drawUp" == e || "drawDown" == e
    );
  }),
  (apn.P.isTransitionOP = function (e, t, a, i) {
    return (
      !!apn.P.isLinkOP(e) ||
      ("CWS" == e && 2 == apn.Project.checkStateTypeByObjectID(t, a, i))
    );
  }),
  (apn.P.isLinkOP = function (e) {
    if ("LTP" == e || "LTH" == e || "LTB" == e) return !0;
  }),
  (apn.P.isTimingOP = function (e, t, a, i) {
    return "CWS" == e && 1 == apn.Project.checkStateTypeByObjectID(t, a, i);
  }),
  (apn.P.isBackwardOP = function (e) {
    return "LTB" == e || "LTH" == e;
  }),
  (apn.P.isTimingEffect = function (e) {
    return (
      "moveLeft" == e ||
      "moveRight" == e ||
      "moveTop" == e ||
      "moveBottom" == e ||
      "slideUpLeft" == e ||
      "slideUpRight" == e ||
      "slideUpTop" == e ||
      "slideUpBottom" == e ||
      "cardUpLeft" == e ||
      "cardUpRight" == e ||
      "cardUpTop" == e ||
      "cardUpBottom" == e ||
      "cardUpInLeft" == e ||
      "cardUpInRight" == e ||
      "cardUpInTop" == e ||
      "cardUpInBottom" == e ||
      "stackInLeft" == e ||
      "stackInRight" == e ||
      "stackInTop" == e ||
      "stackInBottom" == e ||
      "stackOutLeft" == e ||
      "stackOutRight" == e ||
      "stackOutTop" == e ||
      "stackOutBottom" == e
    );
  }),
  (apn.P.getThumbIcon = function (e, t, a) {
    if (a) {
      var i = apn.Project.getWidgetModule(e.pages[t].objects[a].create.data);
      if (i && i.editor && i.editor.iconThumb) return i.editor.iconThumb;
    }
    return "imgs/wgts/thumbs/page.png";
  }),
  (apn.P.getLtpTarget = function (e, t, a) {
    var i,
      n = apn.Project.getExeModule(e);
    if (n.IStub_getPageTypeList) {
      i = n.IStub_getPageTypeList();
      for (var r in i) i[r].link || delete i[r];
    } else i = { "apn.CFlowPage": !0 };
    for (var r in e.pages)
      i[e.pages[r].module] &&
        ((t && t != r) ||
          (apn.dbUI && apn.dbUI.system && apn.dbUI.system.exeItrSelfReset)) &&
        (a[r] = e.pages[r]);
  }),
  (apn.P.getPropTextFit = function () {
    return [
      { title: apn.CExe.GL({ ko: "안함", en: "No", ja: "無効" }), value: 0 },
      {
        title: apn.CExe.GL({
          ko: "자간 조정",
          en: "BySpacing",
          ja: "字間調整",
        }),
        value: 2,
      },
      {
        title: apn.CExe.GL({
          ko: "자간 축소",
          en: "ShrinkBySpacing",
          ja: "字間縮小",
        }),
        value: 4,
      },
      {
        title: apn.CExe.GL({
          ko: "글자 압축",
          en: "ShrinkByScaling",
          ja: "文字圧縮",
        }),
        value: 1,
      },
      {
        title: apn.CExe.GL({
          ko: "자간&압축 축소",
          en: "ShrinkByBoth",
          ja: "字間&圧縮縮小",
        }),
        value: 5,
      },
    ];
  }),
  (window.apn = window.apn || {}),
  (apn.Project = apn.Project || {}),
  (apn.Project.ID_START_POINT = "$SP"),
  (apn.Project.ID_END_POINT = "$EP"),
  (apn.Project.ID_OUT_POINT = apn.Project.ID_END_POINT),
  (apn.Project.ID_IN_POINT = "$IP"),
  (apn.Project.ID_2NDARY_POINT = "$2P"),
  (apn.Project.FILLSTYLE_PAGE = "#ffffff"),
  (apn.Project.$O19 = function (e, t) {
    function a(t, i, n) {
      if (!e.pages[t].objects[i])
        return void (
          window.console &&
          console.error(
            "[AspenCHK] Dangling object",
            t,
            i,
            e.pages[t].objects[i]
          )
        );
      var r = e.pages[t].objects[i].layout;
      if (r && r.children) {
        for (var o = 0; o < r.children.length; o++)
          if (
            r.children[o] == n &&
            (r.children.splice(o, 1), o--, (s = -1), r.layers)
          )
            for (var p in r.layers) r.layers[p].id == n && delete r.layers[p];
        for (o = 0; o < r.children.length; o++) a(t, r.children[o], n);
      }
    }
    function i(e, t) {
      var a;
      for (var i in e.objects)
        if (
          "bx.CEditorWnd.CGroup" != e.objects[i].module &&
          e.objects[i].layout &&
          e.objects[i].layout.children
        )
          for (a = 0; a < e.objects[i].layout.children.length; a++)
            if (e.objects[i].layout.children[a] == t) return i;
    }
    function n(t, a) {
      var n,
        r = e.pages[t].objects[a].layout;
      if (r && r.layers && (!r.children || !r.children.length))
        return (
          window.console &&
            console.error(
              "[AspenCHK] Broken layer container",
              t,
              a,
              e.pages[t].objects[a]
            ),
          delete e.pages[t].objects[a],
          !0
        );
      if (r && r.children)
        for (var o = 0; o < r.children.length; o++)
          if (!e.pages[t].objects[r.children[o]]) {
            if (r.layers)
              for (var s in r.layers)
                r.layers[s].id == r.children[o] && delete r.layers[s];
            window.console &&
              console.error(
                "[AspenCHK] Dangled child=" + r.children[o],
                t,
                a,
                e.pages[t].objects[a]
              ),
              r.children.splice(o, 1),
              o--,
              (n = !0);
          }
      return "apn.CLayer" != e.pages[t].objects[a].module || i(e.pages[t], a)
        ? n
        : (window.console &&
            console.error(
              "[AspenCHK] Dangled layer",
              t,
              a,
              e.pages[t],
              e.pages[t].objects[a]
            ),
          delete e.pages[t].objects[a],
          !0);
    }
    if (!(e && e.property && e.pages && e.layouts && e.rsc && e.index))
      return !1;
    var r = !1;
    for (var o in e.pages) {
      if (!e.pages[o].UI) return !1;
      if (!e.pages[o].UI.noEditable) {
        r = !0;
        break;
      }
    }
    if (!r) return !1;
    var s = 1;
    for (o in e.pages) for (var p in e.pages[o].objects) a(o, p, p);
    for (var s = 1, l = !0; l; ) {
      l = !1;
      for (o in e.pages) for (var p in e.pages[o].objects) n(o, p) && (l = !0);
    }
    if ((apn.Project.docDcmpr(e), t)) {
      var d;
      for (o in e.pages)
        for (var p in e.pages[o].objects)
          if (
            (d = apn.Project.getWidgetModule(
              e.pages[o].objects[p].create.data
            )) &&
            d.srcOnPreParse
          )
            try {
              d.srcOnPreParse(e.pages[o].objects[p], e.pages[o]);
            } catch (t) {
              window.console &&
                console.error(
                  "[AspenCHK] Program error in srcOnPreParse() of " +
                    e.pages[o].objects[p].create.data.wgtID +
                    "\n\n" +
                    t
                );
            }
    }
    return s;
  }),
  (apn.Project.shrinkZIndex = function (e, t) {
    function a(e, t) {
      return parseInt(e) - parseInt(t);
    }
    var i,
      n,
      r,
      o,
      s,
      p,
      l,
      d,
      c = 0;
    for (i in e.pages) {
      p = [];
      for (n in e.pages[i].objects) {
        if (((l = e.pages[i].objects[n]), l.layout && l.layout.states))
          for (o in l.layout.states)
            if (l.layout.states[o].objects)
              for (s in l.layout.states[o].objects)
                p.push(l.layout.states[o].objects[s].create.zIndex || 0);
        p.push(l.create.zIndex || 0);
      }
      (c = t && t.max && p.length > t.max ? t.max - p.length : 0), p.sort(a);
      for (n in e.pages[i].objects) {
        if (((l = e.pages[i].objects[n]), l.layout && l.layout.states))
          for (o in l.layout.states)
            if (l.layout.states[o].objects)
              for (s in l.layout.states[o].objects)
                for (
                  d = l.layout.states[o].objects[s].create, r = 0;
                  r < p.length;
                  r++
                )
                  p[r] == (d.zIndex || 0) && (d.zi2 = r + c);
        for (r = 0; r < p.length; r++)
          p[r] == (l.create.zIndex || 0) && (l.create.zi2 = r + c);
      }
    }
    var g = apn.Project.getLayout(e).property;
    (g.CExe = g.CExe || {}), (g.CExe.useZIndex2 = !0);
  }),
  (apn.Project.$O18 = function (e) {
    var t = {
      CTXT: { layoutID: null },
      property: {
        ver: "1.0",
        denyCloneLocal: !0,
        allowClearTimeout: !0,
        denyWidgetStartEvent: !0,
        denyInvisibleIntersect: !0,
        fixBookStartProcess: !0,
        allowImmediateContentLoad: !0,
        fixBookPageLayout: !0,
        fixOveralyRun: !0,
        fix2SideBookCase1: !0,
        fixWgtPut: !0,
        fixScreenPadding: !0,
      },
      pages: {
        S: {
          UI: { title: "START", noEditable: !0 },
          objects: {},
          module: "apn.CFlowStartPage",
        },
        E: {
          UI: { title: "OUT", noEditable: !0 },
          objects: {},
          module: "apn.CFlowEndPage",
        },
        I: {
          UI: { title: "IN", noEditable: !0 },
          objects: {},
          module: "apn.CFlowInPage",
        },
        C: {
          UI: { title: "CLIENT", noEditable: !0 },
          objects: {},
          module: "apn.CFlow2ndStartPage",
        },
      },
      layouts: {},
      flow: { pages: {} },
      rsc: {},
      index: { pageID: 1, layoutID: 1, rscID: Math.ceil(1e9 * Math.random()) },
    };
    return (
      e &&
        (void 0 !== e.id && (t.property.id = e.id),
        void 0 !== e.corpID && (t.property.corpID = e.corpID),
        void 0 !== e.accountID && (t.property.accountID = e.accountID)),
      t
    );
  }),
  (apn.Project.$O10 = function (e, t) {
    (e.layouts[e.index.layoutID] = {
      CTXT: {},
      property: {
        screenSize: { w: parseInt(t.w), h: parseInt(t.h) },
        styles: { normal: {} },
        properties: {},
      },
      pages: {},
    }),
      t.deviceID ||
        (apn.dbUI && apn.dbUI.device && (t.deviceID = apn.dbUI.device)),
      (e.CTXT.layoutID = e.index.layoutID),
      t.deviceID && apn.widgetDevice[t.deviceID]
        ? ((e.layouts[e.index.layoutID].CTXT.deviceID = t.deviceID),
          apn.widgetDevice[t.deviceID].skinID &&
            (e.layouts[e.index.layoutID].property.skinID =
              apn.widgetDevice[t.deviceID].skinID),
          apn.widgetDevice[t.deviceID].themeID &&
            (e.layouts[e.index.layoutID].property.themeID =
              apn.widgetDevice[t.deviceID].themeID),
          apn.widgetDevice[t.deviceID].wgtLibID &&
            (e.layouts[e.index.layoutID].CTXT.wgtLibID =
              apn.widgetDevice[t.deviceID].wgtLibID),
          (e.layouts[e.index.layoutID].property.skinShow = 1))
        : bx.Trace.log(
            "APN",
            "error",
            "Unknown deviceID: " + t.deviceID,
            "Project.AL"
          ),
      e.index.layoutID++;
  }),
  (apn.Project.$O11 = function (e, t) {
    var a;
    return (
      (a = t && t.pageId ? t.pageId : e.index.pageID + ""),
      (e.pages[a] = { UI: {}, objects: {} }),
      t && t.module && (e.pages[a].module = t.module),
      t && t.title
        ? (e.pages[a].UI.title = t.title)
        : (e.pages[a].UI.title =
            (apn.dbUI && apn.dbUI.system && apn.dbUI.system.page
              ? apn.dbUI.system.page
              : "Page") +
            " " +
            a),
      apn.Project.FILLSTYLE_PAGE &&
        (e.pages[a].BG = { fillStyle: apn.Project.FILLSTYLE_PAGE }),
      t &&
        t.color &&
        ((e.pages[a].BG = e.pages[a].BG || {}),
        (e.pages[a].BG.fillStyle = t.color)),
      e.index.pageID++,
      a
    );
  }),
  (apn.Project.$O12 = function (e, t) {
    e.pages[t] &&
      (delete e.pages[t], e.flow.pages[t] && delete e.flow.pages[t]);
  }),
  (apn.Project.getPages = function (e, t, a, i) {
    function n(t) {
      a && "object" == typeof a
        ? (a[e.pages[t].module] ||
            p ||
            (i && i.editable && !e.pages[t].UI.noEditable)) &&
          s.push(t)
        : (e.pages[t].module == a ||
            p ||
            (i && i.editable && !e.pages[t].UI.noEditable)) &&
          s.push(t);
    }
    function r(t, a) {
      return void 0 === e.pages[t].UI.order && void 0 === e.pages[a].UI.order
        ? 0
        : void 0 === e.pages[t].UI.order
        ? 1
        : void 0 === e.pages[a].UI.order
        ? -1
        : e.pages[t].UI.order - e.pages[a].UI.order;
    }
    var o,
      s = [],
      p = !(!i || !i.all);
    if (((a = a || "apn.CFlowPage"), t)) for (o in e.flow.pages) n(o);
    else for (o in e.pages) n(o);
    return s.sort(r), s;
  }),
  (apn.Project.getPageTitles = function (e, t, a) {
    for (var i = apn.Project.getPages(e, t, a), n = 0; n < i.length; n++)
      e.pages[i[n]] && e.pages[i[n]].UI.title
        ? (i[n] = e.pages[i[n]].UI.title)
        : (i[n] = "");
    return i;
  }),
  (apn.Project.$O8R = function (e, t, a, i, n, r, o, s) {
    function p(t, a, i) {
      var n = apn.Project.$O11(e, { module: i, title: t });
      return n;
    }
    function l(e, t) {
      var a = e + t;
      return a;
    }
    function d(e) {
      return "A" + e + "_";
    }
    function c(e, t) {
      apn.Project.$O4K(e, t, E);
    }
    function g(e) {
      for (var t = 0; t < e.length; t++)
        if (
          (e[t].target &&
            e[t].target.objectID &&
            T[e[t].target.objectID] &&
            ((e[t].target.objectID = T[e[t].target.objectID]),
            s && s.pageMap && s.pageMap[e[t].target.pageID]
              ? (e[t].target.pageID = s.pageMap[e[t].target.pageID])
              : void 0 !== n && e[t].target.pageID == n
              ? (e[t].target.pageID = h)
              : void 0 === n && (e[t].target.pageID = h)),
          e[t].from &&
            (e[t].from.objectID &&
              T[e[t].from.objectID] &&
              (e[t].from.objectID = T[e[t].from.objectID]),
            s && s.pageMap && s.pageMap[e[t].from.pageID]
              ? (e[t].from.pageID = s.pageMap[e[t].from.pageID])
              : void 0 !== n && e[t].from.pageID == n
              ? (e[t].from.pageID = h)
              : void 0 === n && (e[t].from.pageID = h)),
          e[t].to &&
            (s && s.pageMap && s.pageMap[e[t].to.pageID]
              ? (e[t].to.pageID = s.pageMap[e[t].to.pageID])
              : void 0 !== n && e[t].to.pageID == n
              ? (e[t].to.pageID = h)
              : void 0 === n && (e[t].to.pageID = h)),
          e[t].event && apn.P.isObjectCompositeSysEV(e[t].event))
        ) {
          var a = apn.P.resolveCompositeSysEV(e[t].event);
          "$" != a.param.charAt(0) &&
            T[a.param] &&
            (e[t].event = a.ev + ":" + T[a.param]);
        }
    }
    function u(e) {
      if ("object" == typeof e && e instanceof Object)
        for (var a in e)
          "layout" == a && e[a] && (t.remapLayout || c)(T, e[a]), u(e[a]);
    }
    t = t || {};
    var h = (t.addScreenPage || p)(a, !0, i.module),
      x = e.pages[h],
      f = bx.$cloneObject({}, i.UI);
    if (
      (void 0 !== r && (f.order = r),
      (f.title = x.UI.title),
      (x.UI = f),
      bx.$copyObject(x.objects, i.objects),
      i.BG && (x.BG = bx.$copyObject(x.BG || {}, i.BG)),
      i.NPB && (x.NPB = bx.$copyObject(x.NPB || {}, i.NPB)),
      i.ITRs && i.ITRs.length && (x.ITRs = bx.$cloneObject([], i.ITRs)),
      i.SPT && (x.SPT = bx.$cloneObject({}, i.SPT)),
      i.IJS && (x.IJS = bx.$cloneObject({}, i.IJS)),
      x.IJS)
    ) {
      var y,
        v,
        C = apn.Project.getLayout(e).property.CExe;
      for (var b in x.IJS)
        if (x.IJS[b] && x.IJS[b].length) {
          v = x.IJS[b];
          for (var _ = 0; _ < v.length; _++) {
            if (((y = !1), v[_].name && C && C.js && C.js.fs.length))
              for (var m = 0; m < C.js.fs.length; m++)
                C.js.fs[m].js &&
                  C.js.fs[m].js.data &&
                  C.js.fs[m].js.name == v[_].name &&
                  (y = !0);
            y || (v.splice(_, 1), _--);
          }
        }
      for (var b in x.IJS) x.IJS[b] && !x.IJS[b].length && delete x.IJS[b];
    }
    var I = 0;
    for (var S in i.objects) parseInt(S) > I && (I = parseInt(S));
    var P,
      T = {};
    for (S in x.objects)
      T[S] ||
        (I++,
        (T[S] = (t.allocObjectID || l)(I, (t.getObjectIdPostfix || d)(h))));
    var w, E;
    E =
      t.apd && t.apd.getScreenData()
        ? t.apd
        : {
            getScreenData: function () {
              return x;
            },
          };
    for (S in x.objects)
      if (
        (T[S] != S && ((x.objects[T[S]] = x.objects[S]), delete x.objects[S]),
        (P = x.objects[T[S]]),
        P.layout && (t.remapLayout || c)(T, P.layout),
        P.ITRs && P.ITRs.length && g(P.ITRs),
        (w = apn.Project.getWidgetModule(x.objects[T[S]].create.data)),
        w && w.edtOnRemapObjectID)
      )
        try {
          w.edtOnRemapObjectID(E, x.objects[T[S]].create.data, T);
        } catch (e) {
          t.apd &&
            t.apd.IEditable &&
            t.apd.onSystemError &&
            t.apd.onSystemError(
              "Program error in edtOnRemapObjectID() of " +
                x.objects[T[S]].create.data.wgtID +
                "\n\n" +
                e
            );
        }
    return u(x.objects), x.ITRs && x.ITRs.length && g(x.ITRs), h;
  }),
  (apn.Project.$O3P = function (e) {
    (e.tmp = e.tmp || {}), (e.tmp.rscMap = e.tmp.rscMap || {});
  }),
  (apn.Project._generateUUID = function () {
    var e = new Date().getTime(),
      t = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (t) {
        var a = (e + 16 * Math.random()) % 16 | 0;
        return (
          (e = Math.floor(e / 16)), ("x" == t ? a : (3 & a) | 8).toString(16)
        );
      });
    return t;
  }),
  (apn.Project.$O13 = function (e, t, a, i, n, r, o) {
    apn.Project.$O3P(e);
    var s = apn.Project.mediaLocalUuidToMediaID(
      e,
      apn.Project._generateUUID(),
      t
    );
    return (
      (e.rsc[s] = {
        type: t,
        originFileName: i,
        width: n,
        height: r,
        data: "data:" + t + ";base64," + a,
      }),
      void 0 !== o && (e.rsc[s].UI = o),
      s
    );
  }),
  (apn.Project.$O5V = function (e, t) {
    apn.Project.$O3P(e);
    var a = apn.Project.mediaLocalUuidToMediaID(
      e,
      apn.Project._generateUUID(),
      t.type
    );
    return (e.rsc[a] = t), a;
  }),
  (apn.Project.$O14 = function (e, t, a, i, n, r, o, s) {
    (e.rsc[t].type = a),
      (e.rsc[t].originFileName = n),
      (e.rsc[t].width = r),
      (e.rsc[t].height = o),
      (e.rsc[t].data = "data:" + a + ";base64," + i),
      void 0 !== s
        ? (e.rsc[t].UI = s)
        : void 0 !== e.rsc[t].UI && delete e.rsc[t].UI,
      apn.Project.$O3P(e),
      e.tmp.rscMap[t] && (e.tmp.rscMap[t].src = e.rsc[t].data);
  }),
  (apn.Project.$O1a = function (e, t, a, i) {
    function n(e, t) {
      for (var a in e)
        if ("mediaID" == a)
          if ("object" == typeof e[a])
            for (var i in e[a]) e[a][i] == t && ((e[a][i] = void 0), (d = !0));
          else e[a] == t && ((e[a] = void 0), (d = !0));
        else "object" == typeof e[a] && n(e[a], t);
    }
    var r,
      o,
      s,
      p,
      l,
      d = !1;
    for (var c in e.pages)
      for (r in e.pages[c].objects) {
        if (
          ((p = e.pages[c].objects[r]),
          (l = apn.Project.getWidgetModule(p.create.data)) &&
            l.edtOnRemoveAsset)
        )
          try {
            l.edtOnRemoveAsset(e, p, t) && (d = !0);
          } catch (e) {
            i &&
              i.IEditable &&
              i.onSystemError(
                "Program error in edtOnRemoveAsset() of " +
                  p.create.data.wgtID +
                  "\n\n" +
                  e
              );
          }
        if (
          (p.create.data && p.create.data.styles && n(p.create.data.styles, t),
          p.layout && p.layout.states)
        )
          for (o in p.layout.states)
            if (p.layout.states[o].objects)
              for (s in p.layout.states[o].objects)
                p.layout.states[o].objects[s].create.data &&
                  p.layout.states[o].objects[s].create.data.styles &&
                  n(p.layout.states[o].objects[s].create.data.styles, t);
      }
    n(apn.Project.getLayout(e).property, t);
    for (c in e.pages)
      e.pages[c].BG && n(e.pages[c].BG, t),
        e.pages[c].UI && n(e.pages[c].UI, t);
    return (
      a &&
        (delete e.rsc[t],
        apn.Project.$O3P(e),
        e.tmp.rscMap[t] &&
          (e.tmp.rscMap[t].src =
            "data:image/gif;base64,R0lGODlhAQABAIAAANvf7wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==")),
      d
    );
  }),
  (apn.Project.$O5W = function (e) {
    var t = 0;
    for (var a in e.rsc) t += e.rsc[a].data.length;
    return Math.round(0.75 * t);
  }),
  (apn.Project.$O16 = function (e) {
    return (
      !e.states &&
      ((e.states = { 0: { objects: {} } }),
      (e.state = "0"),
      (e.stateIndex = 0),
      !0)
    );
  }),
  (apn.Project.$O17 = function (e, t, a, i) {
    e.states || apn.Project.$O16(e);
    var n,
      r = [];
    for (n in e.states) r.push(e.states[n]);
    apn.UTIL.sort(r, "order", 1, !0);
    var o = i && e.states[i] ? e.states[i] : r[r.length - 1],
      s = ++e.stateIndex + "";
    return (
      (e.states[s] = { objects: {} }),
      bx.$cloneObject(e.states[s], o),
      (e.states[s].title = t),
      (e.states[s].order = a),
      s
    );
  }),
  (apn.Project.$O1b = function (e, t, a, i, n, r) {
    if (void 0 === a) var o = e.pages[t];
    else var o = e.pages[t].objects[a].layout;
    return apn.Project.$O17(o, i, n, r);
  }),
  (apn.Project.$O1c = function (e, t, a, i) {
    if (!apn.Project.checkStateByObjectID(e, t, a, i))
      return (
        bx.Trace.log(
          "APN",
          "warning",
          "Invalid scene=" + i,
          "Project.removeSceneByObjectID"
        ),
        !1
      );
    if ("0" == i) return !1;
    if (void 0 === a) var n = e.pages[t];
    else var n = e.pages[t].objects[a].layout;
    return delete n.states[i], n.state == i && (n.state = "0"), !0;
  }),
  (apn.Project.checkStateType = function (e) {
    return e && e.states ? 1 : e && e.layers ? 2 : 0;
  }),
  (apn.Project.checkStateTypeByObjectID = function (e, t, a) {
    if (void 0 === a) var i = e.pages[t];
    else var i = e.pages[t].objects[a].layout;
    return apn.Project.checkStateType(i);
  }),
  (apn.Project.checkState = function (e, t) {
    if (e.states && void 0 !== e.states[t]) return !0;
    if (e.layout) {
      if (e.layout.states && void 0 !== e.layout.states[t]) return !0;
      if (e.layout.layers && void 0 !== e.layout.layers[t]) return !0;
    }
    return !1;
  }),
  (apn.Project.checkStateByObjectID = function (e, t, a, i) {
    if (void 0 === a) var n = e.pages[t];
    else var n = e.pages[t].objects[a].layout;
    return apn.Project.checkState(n, i);
  }),
  (apn.Project.getStateByObjectID = function (e, t, a) {
    var i = null;
    if (void 0 === a) var n = e.pages[t];
    else var n = e.pages[t].objects[a].layout;
    if (n && n.states) {
      i = [];
      for (var r in n.states)
        i.push({
          stateID: r,
          order: n.states[r].order,
          duration: n.states[r].duration,
          title: apn.Project.getStateTitleByObjectID(e, t, a, r),
        });
    } else if (n && n.layers) {
      i = [];
      for (var r in n.layers)
        i.push({
          stateID: r,
          order: n.layers[r].order,
          duration: n.layers[r].duration,
          title: apn.Project.getStateTitleByObjectID(e, t, a, r),
        });
    }
    return i;
  }),
  (apn.Project.getExeStateByObjectID = function (e, t, a) {
    if (apn.Project.getApxState(e, t, a)) {
      var i = apn.Project.getApxState(e, t, a),
        n = [];
      for (var r in i) n.push({ stateID: "$APX" + r, title: i[r] });
      return n;
    }
    return apn.Project.getStateByObjectID(e, t, a);
  }),
  (apn.Project.getStateTitleByObjectID = function (e, t, a, i) {
    if (void 0 === a) var n = e.pages[t];
    else var n = e.pages[t].objects[a].layout;
    return n && n.states && n.states[i]
      ? n.states[i].title || ("0" == i ? "Base" : "Scene" + i)
      : n && n.layers && n.layers[i]
      ? n.layers[i].title || ""
      : "";
  }),
  (apn.Project.getExeStateTitleByObjectID = function (e, t, a, i) {
    if (apn.Project.getApxState(e, t, a)) {
      var n = apn.Project.getApxState(e, t, a);
      return void 0 !== n[i.substring(4)] ? n[i.substring(4)] : "";
    }
    return apn.Project.getStateTitleByObjectID(e, t, a, i);
  }),
  (apn.Project.getStateLayerObjectID = function (e, t, a, i) {
    var n = null,
      r = e.pages[t].objects[a].layout;
    return r && r.layers && (n = r.layers[i].id), n;
  }),
  (apn.Project.getApxState = function (e, t, a) {
    if (a) {
      var i = apn.Project.getWidgetModule(e.pages[t].objects[a].create.data);
      if (i && i.edtOnBuildState) {
        var n = {};
        try {
          i.edtOnBuildState(e, a, t, n);
        } catch (i) {
          console.error(
            "[AspenCHK] Program error in edtOnBuildState() of " +
              e.pages[t].objects[a].create.data.wgtID +
              "\n\n" +
              i
          );
        }
        return n;
      }
      if (i && i.editor && i.editor.states) return i.editor.states;
    }
    return null;
  }),
  (apn.Project.$O5j = function (e) {
    return !(!e || "$" != e.charAt(0));
  }),
  (apn.Project.$O1d = function (e, t) {
    var a = apn.Project.findITRs(e, t.from.pageID, t.from.objectID);
    if (a) {
      for (var i = 0; i < a.length; i++)
        if (a[i] == t) return void a.splice(i, 1);
    } else bx.Trace.log("APN", "warning", "Invalid itr link", "Project.$O1d");
  }),
  (apn.Project.findITRs = function (e, t, a, i) {
    if (t)
      return e.pages[t]
        ? a && !apn.Project.$O5j(a)
          ? e.pages[t].objects[a]
            ? (i &&
                (e.pages[t].objects[a].ITRs = e.pages[t].objects[a].ITRs || []),
              e.pages[t].objects[a].ITRs)
            : void console.error("[AspenCHK] Missing", t, a)
          : (i && (e.pages[t].ITRs = e.pages[t].ITRs || []), e.pages[t].ITRs)
        : void console.error("[AspenCHK] Missing Page", t, a);
  }),
  (apn.Project.createITR = function (e, t, a, i) {
    var n = {};
    if (((n.event = i || "click"), (n.action = t), "LTP" == t))
      bx.$copyObject(n, a),
        (n.to = n.to || {}),
        (n.to.type = n.to.type || "1"),
        apn.Project.$O5j(n.from.objectID) && (n.event = "none"),
        (n.transit = {});
    else if ("LTB" == t || "LTH" == t)
      (n.transit = {}),
        void 0 === a.objectID && (n.transit.effect = "moveRight");
    else if ("CWS" == t) {
      n.target = a || {};
      var r;
      (r =
        void 0 === a.objectID
          ? e.pages[a.pageID]
          : e.pages[a.pageID].objects[a.objectID].layout),
        apn.Project.getApxState(e, a.pageID, a.objectID) ||
          (1 == apn.Project.checkStateType(r)
            ? (n.timing = {})
            : 2 == apn.Project.checkStateType(r) && (n.transit = {}));
    } else if ("CWP" == t) {
      if (((n.target = { objectID: a.objectID }), a.set)) {
        var o = apn.P.getSetOfCWP(e, a.pageID, a.objectID);
        for (var s in a.set)
          if (o[s]) {
            (n.set = {}),
              (n.set[s] = a.set[s]),
              2 == o[s].type && (n.timing = { roundUp: !1 }),
              o[s].trace && (n.trace = { type: "none" });
            break;
          }
      }
    } else
      "WAT" == t
        ? (n.timing = { timing: "linear", duration: 0 })
        : "FDR" == t
        ? (n.result = !0)
        : "FCE" == t
        ? (n.param = "")
        : "URL" == t
        ? (n.url = "http://")
        : "CMT" == t && (n.comment = "");
    return n;
  }),
  (apn.Project.$O3Q = function (e) {
    if ("LTP" == e || "LTH" == e || "LTB" == e) return !0;
  }),
  (apn.Project.verifyITR = function (e, t, a, i) {
    function n() {
      if (apn.Project.$O3Q(t.action)) {
        var n = apn.Project.findITRs(e, a, i);
        if (n && n.length)
          for (var r = 0; r < n.length; r++)
            if (
              n[r] != t &&
              n[r].event == t.event &&
              apn.Project.$O3Q(n[r].action)
            )
              return !0;
      }
      return !1;
    }
    if (!t.event || !t.action) return !1;
    if ("LTP" == t.action) {
      if (!t.from.pageID || !t.to.pageID) return !1;
      if (!t.to.type) return !1;
      if (n()) return !1;
    } else if ("LTH" == t.action || "LTB" == t.action) {
      if (n()) return !1;
    } else if ("CWS" == t.action) {
      if (!t.target.stateID) return !1;
    } else if ("CWP" == t.action) {
      if (!t.target.objectID) return !1;
      if (!t.set) return !1;
    } else if ("FCE" == t.action) {
      if (!t.param) return !1;
    } else if ("WAT" == t.action) {
      if (!t.timing || !t.timing.duration) return !1;
    } else if ("URL" == t.action) {
      if (!t.url) return !1;
      if (!t.target || !t.target.objectID) return !1;
    } else "CMT" == t.action;
    return !0;
  }),
  (apn.Project.dictateITR = function (e, t, a, i, n) {
    function r(e) {
      return Math.round(bx.$checkNaN(parseFloat(e)));
    }
    function o(e) {
      return (e + "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }
    function s(e) {
      var t = "";
      return (
        "none" != e.effect &&
          ((t += "with " + h + apn.P.effectTitle[e.effect] + x + " effect "),
          (t += p(e))),
        t
      );
    }
    function p(e) {
      var t = "";
      return (
        e.duration
          ? (t +=
              "for " +
              h +
              r(e.duration) +
              "ms" +
              x +
              " in " +
              (e.roundUp ? " round-trip of " : "") +
              h +
              apn.P.timingTitle[e.timing] +
              x +
              (r(e.wait) ? " after waiting " + r(e.wait) + "%" : "") +
              " ")
          : e.roundUp && (t += "in round-trip "),
        t
      );
    }
    function l(e) {
      var t = "";
      return (
        e.type &&
          "none" != e.type &&
          (t +=
            "in trace of " +
            h +
            apn.P.traceTitle[e.type] +
            "[" +
            e.ratio +
            "]" +
            x +
            " "),
        t
      );
    }
    function d(e, t, a) {
      var n = "";
      return (
        t &&
          (void 0 === e.target.objectID
            ? (n = "[This page]")
            : e.target.objectID === i
            ? (n = "[Self]")
            : a &&
              (a.create.data.styles.title && (n = a.create.data.styles.title),
              (n += "(" + a.create.data.wgtTitle + ")"))),
        o(n)
      );
    }
    var c,
      g = "",
      u = bx.$copyObject({}, t),
      h = n ? '<span style="' + n + '">' : '"',
      x = n ? "</span>" : '"';
    if (
      (u.transit
        ? apn.Project.resolveTransit(e, u.transit, apn.P.isBackwardOP(u.action))
        : u.timing && apn.Project.resolveTiming(e, u.timing),
      "LTP" == u.action)
    )
      u.to.pageID == a
        ? (g +=
            "Reset " +
            h +
            "[This " +
            (apn.dbUI && apn.dbUI.system && apn.dbUI.system.page
              ? apn.dbUI.system.page
              : "Page") +
            "]" +
            x)
        : ((g +=
            "Link to " +
            h +
            o(apn.Project.getPageTitle(e, u.to.pageID)) +
            x +
            " " +
            (apn.dbUI && apn.dbUI.system && apn.dbUI.system.page
              ? apn.dbUI.system.page
              : "Page"
            ).toLowerCase() +
            " "),
          u.to.reset && (g += "and reset "),
          u.transit && (g += s(u.transit)),
          2 == u.to.type
            ? (g += "in replacing history")
            : 3 == u.to.type &&
              (g +=
                "as popup " +
                (apn.dbUI && apn.dbUI.system && apn.dbUI.system.page
                  ? apn.dbUI.system.page
                  : "Page"
                ).toLowerCase()));
    else if ("LTB" == u.action)
      (g +=
        "Link back to previous " +
        (apn.dbUI && apn.dbUI.system && apn.dbUI.system.page
          ? apn.dbUI.system.page
          : "Page"
        ).toLowerCase() +
        " "),
        u.reset && (g += "and reset "),
        u.transit && (g += s(u.transit));
    else if ("LTH" == u.action)
      (g += "Link back to home "),
        u.reset && (g += "and reset "),
        u.transit && (g += s(u.transit));
    else if ("WAT" == u.action)
      (g += "Wait "), (g += "for " + h + r(u.timing.duration) + x + "ms ");
    else if ("CWS" == u.action) {
      var f;
      if (
        !(f = e.pages[a].objects[u.target.objectID]) &&
        apn.CClipboard &&
        apn.CClipboard.$O5Z
      ) {
        var y = apn.CClipboard.$O5Z();
        y &&
          y.opCut &&
          y.data &&
          y.data.objects &&
          y.pageID == a &&
          y.data.objects[u.target.objectID] &&
          ((f = y.data.objects[u.target.objectID]), (c = !0));
      }
      var v = d(u, a, f);
      "$F" == u.target.stateID
        ? (g += "Set forward state of " + h + v + x + " ")
        : "$B" == u.target.stateID
        ? (g += "Set backward state of " + h + v + x + " ")
        : "$RF" == u.target.stateID
        ? ((g += "Set forward state of " + h + v + x + " "),
          (g += "in round-robin "))
        : "$RB" == u.target.stateID
        ? ((g += "Set forward state of " + h + v + x + " "),
          (g += "in round-robin "))
        : (g += c
            ? "Set state of " +
              h +
              v +
              x +
              " to " +
              h +
              '<span style="color:#ff0000;">[Temp]</span>' +
              x +
              " "
            : "Set state of " +
              h +
              v +
              x +
              " to " +
              h +
              o(
                apn.Project.getExeStateTitleByObjectID(
                  e,
                  a,
                  u.target.objectID,
                  u.target.stateID
                ) || "[Untitled|Removed]"
              ) +
              x +
              " "),
        u.transit && (g += s(u.transit)),
        u.timing && (g += p(u.timing));
    } else if ("CWP" == u.action) {
      var C, b, f;
      for (var _ in e.pages)
        for (C in e.pages[_].objects)
          if (C == u.target.objectID) {
            (b = _), (f = e.pages[a].objects[u.target.objectID]);
            break;
          }
      if (!b) {
        if (apn.CClipboard && apn.CClipboard.$O5Z) {
          var y = apn.CClipboard.$O5Z();
          y &&
            y.opCut &&
            y.data &&
            y.data.objects &&
            y.data.objects[u.target.objectID] &&
            ((b = y.pageID), (f = y.data.objects[u.target.objectID]), (c = !0));
        }
        if (!b) return { txt: "" };
      }
      var v = d(u, b, f);
      if (
        (u.set &&
          void 0 !== u.set.text &&
          (g +=
            "Set text of " +
            h +
            v +
            x +
            " to " +
            h +
            '"' +
            o(u.set.text) +
            '"' +
            x +
            " "),
        u.set &&
          void 0 !== u.set.value &&
          (g +=
            "Set value of " +
            h +
            v +
            x +
            " to " +
            h +
            '"' +
            o(u.set.value) +
            '"' +
            x +
            " "),
        u.set &&
          void 0 !== u.set.textColor &&
          (g +=
            "Set text color of " +
            h +
            v +
            x +
            " to " +
            h +
            '<span style="border:solid 1px #afafaf;background-color:' +
            u.set.textColor +
            ';">&nbsp;&nbsp;&nbsp;</span>' +
            x +
            " "),
        u.set &&
          void 0 !== u.set.alpha &&
          (g +=
            "Set opacity of " +
            h +
            v +
            x +
            " to " +
            h +
            r(100 * u.set.alpha) +
            "%" +
            x +
            " "),
        u.set &&
          void 0 !== u.set.trOrg &&
          (g +=
            "Set zoom/angle center of " +
            h +
            v +
            x +
            " to " +
            h +
            "X=" +
            r(100 * u.set.trOrg.orgX) +
            "% Y=" +
            h +
            r(100 * u.set.trOrg.orgY) +
            "%" +
            x +
            " "),
        u.set &&
          void 0 !== u.set.angle &&
          (g +=
            "Rotate " +
            h +
            v +
            x +
            " to " +
            h +
            new Number(bx.CCanvasWnd.radToDegree(u.set.angle)).toFixed(1) +
            x +
            "˚ "),
        u.set &&
          void 0 !== u.set.media &&
          (g += u.set.media + " media of " + h + v + x + " "),
        u.set &&
          void 0 !== u.set.animation &&
          (g += u.set.animation + " animation of " + h + v + x + " "),
        u.set &&
          u.set.size &&
          (g +=
            "Resize " +
            h +
            v +
            x +
            " to " +
            h +
            "W=" +
            r(u.set.size.w) +
            ", H=" +
            r(u.set.size.h) +
            x +
            " "),
        u.set &&
          u.set.sizeBy &&
          (g +=
            "Resize " +
            h +
            v +
            x +
            " by " +
            h +
            "W=" +
            r(u.set.sizeBy.w) +
            ", H=" +
            r(u.set.sizeBy.h) +
            x +
            (u.set.sizeBy.originCenter ? " from center " : " ")),
        u.set &&
          u.set.position &&
          (g +=
            "Move " +
            h +
            v +
            x +
            " to " +
            h +
            "X=" +
            r(u.set.position.x) +
            ", Y=" +
            r(u.set.position.y) +
            x +
            " "),
        u.set &&
          u.set.pBk &&
          (g +=
            "Move " +
            h +
            v +
            x +
            " back to " +
            h +
            "Original position" +
            x +
            " "),
        u.set &&
          u.set.positionBy &&
          (g +=
            "Move " +
            h +
            v +
            x +
            " by " +
            h +
            "X=" +
            r(u.set.positionBy.x) +
            ", Y=" +
            r(u.set.positionBy.y) +
            x +
            " "),
        u.set &&
          u.set.zoom &&
          (g +=
            "Zoom " +
            h +
            v +
            x +
            " to " +
            h +
            (u.set.zoom.w ? "W=" + r(100 * u.set.zoom.w) + "%" : "") +
            (u.set.zoom.h ? " H=" + r(100 * u.set.zoom.h) + "%" : "") +
            x +
            " "),
        u.set &&
          u.set.line &&
          (g +=
            "Line " +
            h +
            v +
            x +
            " from " +
            h +
            "(" +
            r(u.set.line.x1) +
            "," +
            r(u.set.line.y1) +
            ")" +
            x +
            " to " +
            h +
            "(" +
            r(u.set.line.x2) +
            "," +
            r(u.set.line.y2) +
            ") "),
        u.set && void 0 !== u.set.visibility)
      ) {
        var m = "Show",
          I = " ";
        "Hide" == u.set.visibility && (m = "Hide"),
          "Pass" == u.set.visibility && (I = " in bypassing input events "),
          "Block" == u.set.visibility && (I = " in disabling input events "),
          (g += m + " " + h + v + x + I);
      }
      if (
        (u.set &&
          void 0 !== u.set.zIndex &&
          (g +=
            "restore" == u.set.zIndex
              ? "Restore z-index of " + h + v + x + " to original value "
              : "Set z-index of " +
                h +
                v +
                x +
                " to " +
                h +
                u.set.zIndex +
                x +
                " level "),
        u.set &&
          u.set.drag &&
          ("No" == u.set.drag.dragX && "No" == u.set.drag.dragY
            ? (g += "Disable dragging for " + h + v + x)
            : ((g += "Enable dragging for " + h + v + x + " by "),
              "Yes" == u.set.drag.dragX && "Yes" == u.set.drag.dragY
                ? (g += "X,Y ")
                : "Yes" == u.set.drag.dragX
                ? (g += "X ")
                : "Yes" == u.set.drag.dragY && (g += "Y "),
              "Yes" == u.set.drag.dragInParent &&
                (g += "keeping in parent area "))),
        u.set && u.set.extended)
      ) {
        g += "Set property of " + h + v + x + " by";
        var S,
          P,
          T = apn.P.getSetOfCWP(e, a, u.target.objectID),
          w = 0;
        for (var E in u.set.extended) {
          if (
            ((P = u.set.extended[E]),
            T.extended &&
              T.extended.extended[E] &&
              T.extended.extended[E].input instanceof Array)
          )
            for (S = 0; S < T.extended.extended[E].input.length; S++)
              if (
                T.extended.extended[E].input[S] instanceof Object &&
                T.extended.extended[E].input[S].title &&
                T.extended.extended[E].input[S].value == P
              ) {
                P = T.extended.extended[E].input[S].title;
                break;
              }
          (g +=
            (w ? "," : "") +
            " " +
            h +
            (T.extended &&
            T.extended.extended[E] &&
            T.extended.extended[E].title
              ? T.extended.extended[E].title
              : E) +
            "=" +
            P +
            h),
            w++;
        }
        g += " ";
      }
      u.timing && (g += p(u.timing)), u.trace && (g += l(u.trace));
    } else if ("FDR" == u.action)
      g += u.result
        ? "Notify that this drop is accepted"
        : "Notify that this drop is rejected";
    else if ("FCE" == u.action)
      g +=
        "Send message to " +
        h +
        "[This page]" +
        x +
        ', "' +
        h +
        (u.param ? o(u.param) : "[Invalid]") +
        x +
        '"';
    else if ("URL" == u.action)
      if (
        ((g += "Load " + h + o(u.url) + x + " "),
        "$URL_CW" == u.target.objectID)
      )
        g += "into current tab or browser ";
      else if ("$URL_CF" == u.target.objectID) g += "into current frame ";
      else if ("$URL_NW" == u.target.objectID) g += "into new tab or browser ";
      else {
        var C, b;
        for (var _ in e.pages)
          for (C in e.pages[_].objects)
            if (C == u.target.objectID) {
              b = _;
              break;
            }
        if (!b) return { txt: "" };
        g += "into " + h + d(u, b) + x + " ";
      }
    else "CMT" == u.action && (g += h + "※ <em>" + o(u.comment) + "</em>" + x);
    if (g && !c && "CMT" != u.action && t.event && t.event.indexOf(":") != -1) {
      a || (t.from && t.from.pageID && (a = t.from.pageID));
      for (
        var S,
          V = apn.P.getEvent(e, a, i),
          j = apn.P.resolveCompositeSysEV(t.event),
          E = 0;
        E < V.length;
        E++
      )
        if (V[E].value == j.ev)
          if (V[E].param) {
            for (S in V[E].param)
              if (S == j.param) {
                g =
                  "$ELSE" == j.param
                    ? "Else, " +
                      g.substring(0, 1).toLowerCase() +
                      g.substring(1)
                    : "On " +
                      h +
                      V[E].param[S] +
                      x +
                      ", " +
                      g.substring(0, 1).toLowerCase() +
                      g.substring(1);
                break;
              }
          } else
            g =
              "On " +
              h +
              (j.param ? o(j.param) : "[Invalid]") +
              x +
              ", " +
              g.substring(0, 1).toLowerCase() +
              g.substring(1);
    }
    return { txt: g, disabled: c };
  }),
  (apn.Project.iterateAllITR = function (e, t) {
    var a, i;
    for (var n in e.pages) {
      if (e.pages[n].ITRs && e.pages[n].ITRs.length)
        for (i = 0; i < e.pages[n].ITRs.length; i++)
          t(n, e.pages[n].ITRs[i]) && (e.pages[n].ITRs.splice(i, 1), i--);
      for (a in e.pages[n].objects)
        if (e.pages[n].objects[a].ITRs && e.pages[n].objects[a].ITRs.length)
          for (i = 0; i < e.pages[n].objects[a].ITRs.length; i++)
            t(n, e.pages[n].objects[a].ITRs[i]) &&
              (e.pages[n].objects[a].ITRs.splice(i, 1), i--);
    }
  }),
  (apn.Project.findSPT = function (e, t, a, i) {
    if (t) {
      if (!e.pages[t]) return void console.error("[AspenCHK] Missing", t, a);
      if (a && !apn.Project.$O5j(a)) {
        if (!e.pages[t].objects[a]) return;
        return (
          i && (e.pages[t].objects[a].SPT = e.pages[t].objects[a].SPT || {}),
          e.pages[t].objects[a].SPT
        );
      }
      return i && (e.pages[t].SPT = e.pages[t].SPT || {}), e.pages[t].SPT;
    }
  }),
  (apn.Project.findIJS = function (e, t, a) {
    if (t && e.pages[t]) {
      var i = apn.Project.getLayout(e).property.CExe,
        n = "";
      if (
        i &&
        i.js &&
        i.js.fs.length &&
        e.pages[t].IJS &&
        e.pages[t].IJS[a] &&
        e.pages[t].IJS[a].length
      )
        for (var r, o = e.pages[t].IJS[a], s = 0; s < o.length; s++)
          if (o[s].name)
            for (r = 0; r < i.js.fs.length; r++)
              i.js.fs[r].js.data &&
                i.js.fs[r].js.name == o[s].name &&
                (n += i.js.fs[r].js.data + "\n\n");
      return n;
    }
  }),
  (apn.Project.getSPT = function (e, t, a, i) {
    var n = apn.Project.findSPT(e, t, a),
      r = apn.P.resolveCompositeSysEV(i);
    r && r.ev && (i = r.ev);
    var o = "";
    return (o += apn.Project.findIJS(e, t, i)), n && n[i] && (o += n[i]), o;
  }),
  (apn.Project.checkIfAnyScript = function (e) {
    function t(e, t) {
      for (var a, i = 0; i < e.length; i++)
        if (((a = e[i]), a.name)) {
          if (t && t.fs.length)
            for (var n = 0; n < t.fs.length; n++)
              if (t.fs[n].js.data && t.fs[n].js.name == a.name) return !0;
        } else if (a.lnE) return !0;
    }
    var a = apn.Project.getLayout(e).property.CExe;
    if (a && a.spt2impt && a.spt2impt.js && t(a.spt2impt.js, a.js)) return !0;
    var i = apn.Project.getLayout(e).property.PGTPL;
    if (i)
      for (var n in i)
        if (
          i[n] &&
          i[n].spt2impt &&
          i[n].spt2impt.js &&
          i[n].js &&
          t(i[n].spt2impt.js, i[n].js)
        )
          return !0;
    var r;
    for (var o in e.pages) {
      for (ev in apn.P.eventTitle)
        if (apn.Project.getSPT(e, o, void 0, ev)) return !0;
      for (r in e.pages[o].objects)
        for (ev in apn.P.eventTitle)
          if (apn.Project.getSPT(e, o, r, ev)) return !0;
    }
    return !1;
  }),
  (apn.Project.evtCmtForSPT = function (e, t, a, i) {
    return "%%TODO";
  }),
  (apn.Project.setStyle = function (e, t, a) {
    var i =
        apn.theme[e.layouts[e.CTXT.layoutID].property.themeID].styles.normal,
      n = e.layouts[e.CTXT.layoutID].property.styles.normal;
    void 0 !== i[t] && i[t] == a ? delete n[t] : (n[t] = a);
  }),
  (apn.Project.setProperty = function (e, t, a) {
    var i = apn.theme[e.layouts[e.CTXT.layoutID].property.themeID].properties;
    e.layouts[e.CTXT.layoutID].property.properties =
      e.layouts[e.CTXT.layoutID].property.properties || {};
    var n = e.layouts[e.CTXT.layoutID].property.properties;
    void 0 !== i[t] && i[t] == a ? delete n[t] : (n[t] = a);
  }),
  (apn.Project.resolveStyle = function (e, t, a, i) {
    if (void 0 === a) {
      var n =
          apn.theme[e.layouts[e.CTXT.layoutID].property.themeID].styles.normal,
        r = e.layouts[e.CTXT.layoutID].property.styles.normal;
      if (
        (void 0 === r[t] && void 0 !== n[t] && (r[t] = n[t]), void 0 !== r[t])
      )
        return r[t];
      if (void 0 !== n[t]) return n[t];
      if ("fontStrokeStyle" == t) return "#000000";
      if ("fontStrokeWidth" == t) return 0;
      if ("ltrSp" == t) return 0;
      if ("lnSp" == t) return 0;
      if ("csr" == t) return "apn.auto";
      if ("textFit" == t) return 0;
      if ("lD2" == t) return null;
      if ("lE2" == t) return null;
    }
    return a;
  }),
  (apn.Project.resolveProperty = function (e, t, a) {
    if (void 0 === a) {
      var i = apn.theme[e.layouts[e.CTXT.layoutID].property.themeID].properties,
        n = e.layouts[e.CTXT.layoutID].property.properties;
      if (n && void 0 !== n[t]) return n[t];
      if (void 0 !== i[t]) return i[t];
      if ("exeScreenSetup" == t) return;
      if ("exeNetworkMode" == t) return;
      if ("exeScript" == t)
        return apn.dbUI && apn.dbUI.system && apn.dbUI.system.exeScripting
          ? apn.dbUI.system.exeScripting > 1 &&
            apn.dbUI.system.exeScriptingDefault
            ? apn.dbUI.system.exeScriptingDefault
            : 1
          : 0;
      bx.Trace.log(
        "APN",
        "warning",
        "Invalid style resolved key=" + t,
        "Project.resolveProperty"
      );
    }
    return a;
  }),
  (apn.Project.resolveTiming = function (e, t) {
    void 0 === t.timing &&
      (t.timing = apn.Project.resolveProperty(e, "trTiming")),
      void 0 === t.duration &&
        (t.duration = apn.Project.resolveProperty(e, "trDuration"));
  }),
  (apn.Project.resolveTransit = function (e, t, a) {
    apn.Project.resolveTiming(e, t),
      void 0 === t.effect &&
        (t.effect = apn.Project.resolveProperty(
          e,
          a ? "trEffectBackward" : "trEffectForward"
        ));
  }),
  (apn.Project.getDefaultColors = function (e) {
    var t = [];
    return (
      apn.Project.resolveStyle(e, "fillStyle", void 0, !0) &&
        t.push(apn.Project.resolveStyle(e, "fillStyle", void 0, !0)),
      apn.Project.resolveStyle(e, "strokeStyle", void 0, !0) &&
        t.push(apn.Project.resolveStyle(e, "strokeStyle", void 0, !0)),
      apn.Project.resolveStyle(e, "fontStyle", void 0, !0) &&
        t.push(apn.Project.resolveStyle(e, "fontStyle", void 0, !0)),
      apn.Project.resolveStyle(e, "fontStrokeStyle", void 0, !0) &&
        t.push(apn.Project.resolveStyle(e, "fontStrokeStyle", void 0, !0)),
      t
    );
  }),
  (apn.Project.getScriptVer = function (e) {
    var t = apn.Project.resolveProperty(e, "exeScript");
    return (
      2 == t &&
        ((apn.dbUI && apn.dbUI.system && 2 == apn.dbUI.system.exeScripting) ||
          (t = 1),
        apn.Project._sptSearchScript(e, "cloneScriptOf") && (t = 1)),
      t
    );
  }),
  (apn.Project.getExeModule = function (prj, _noDefault) {
    var id = apn.Project.getExeModuleID(prj),
      module = eval(id);
    return module
      ? module
      : _noDefault
      ? null
      : (bx.Trace.log(
          "APN",
          "warning",
          "Unknown Exe module id=" + apn.Project.getLayout(prj).CTXT.exeID,
          "Project.getExeModule"
        ),
        apn.CExe);
  }),
  (apn.Project.getExeModuleID = function (e, t) {
    if (
      ((apn.Project.getLayout(e).CTXT.exeID =
        apn.Project.getLayout(e).CTXT.exeID || apn.Project.getExe(e)),
      apn.Project.getLayout(e).CTXT.exeID)
    ) {
      if (
        apn.widgetDevice[apn.Project.getLayout(e).CTXT.deviceID].exeModule &&
        apn.widgetDevice[apn.Project.getLayout(e).CTXT.deviceID].exeModule[
          apn.Project.getLayout(e).CTXT.exeID
        ]
      )
        return apn.widgetDevice[apn.Project.getLayout(e).CTXT.deviceID]
          .exeModule[apn.Project.getLayout(e).CTXT.exeID].module;
      t ||
        bx.Trace.log(
          "APN",
          "warning",
          "Unknown Exe module id=" + apn.Project.getLayout(e).CTXT.exeID,
          "Project.getExeModuleID"
        );
    }
    return t ? null : "apn.CExe";
  }),
  (apn.Project.setExe = function (e, t) {
    apn.Project.getLayout(e).CTXT.exeID = t;
  }),
  (apn.Project.getExe = function (e) {
    var t = apn.Project.getLayout(e).CTXT.exeID;
    if (!t) {
      var a = apn.Project.getExeList(e);
      if (a.length) {
        for (var i = 0; i < a.length; i++)
          if (a[i].preset) {
            t = a[i].id;
            break;
          }
        t || (t = a[0].id);
      } else t = "standard";
    }
    return t;
  }),
  (apn.Project.getExeList = function (e) {
    var t,
      a = [];
    if (
      (t = apn.widgetDevice[apn.Project.getLayout(e).CTXT.deviceID].exeModule)
    )
      for (var i in t)
        a.push({
          id: i,
          module: t[i].module,
          title: t[i].title,
          info: t[i].info || "",
          option: t[i].option,
          preset: t[i].preset,
        });
    return a;
  }),
  (apn.Project.getFontList = function (prj, exe, standAlone) {
    var fonts, devID;
    prj && (devID = apn.Project.getLayout(prj).CTXT.deviceID),
      apn.dbUI && apn.dbUI.font && apn.dbUI.font.length
        ? (fonts = apn.dbUI.font)
        : devID &&
          apn.widgetDevice[devID] &&
          apn.widgetDevice[devID].font &&
          apn.widgetDevice[devID].font.length &&
          (fonts = apn.widgetDevice[devID].font),
      (fonts = fonts ? fonts.concat() : []);
    var clsExe;
    if (
      (exe
        ? (clsExe = eval(exe))
        : prj && (clsExe = apn.Project.getExeModule(prj)),
      clsExe && clsExe.IStub_getFonts)
    ) {
      var exeFonts = clsExe.IStub_getFonts(standAlone, prj);
      if (exeFonts.fonts)
        if ("replace" == exeFonts.action) fonts = exeFonts.fonts;
        else if ("add" == exeFonts.action) {
          var i, j;
          for (j = 0; j < fonts.length; j++)
            for (i = 0; i < exeFonts.fonts.length; i++)
              if (exeFonts.fonts[i].face == fonts[j].face) {
                fonts.splice(j, 1), j--;
                break;
              }
          fonts = fonts.concat(exeFonts.fonts);
        }
    }
    return fonts;
  }),
  (apn.Project.getDevice = function (exe) {
    var clsExe;
    return (
      (clsExe = eval(exe)),
      clsExe && clsExe.IStub_dbGetDevice ? clsExe.IStub_dbGetDevice() : null
    );
  }),
  (apn.Project.getGetPubModule = function (exe) {
    var clsExe;
    return (
      (clsExe = eval(exe)),
      clsExe && clsExe.IStub_dbGetPublishModule
        ? clsExe.IStub_dbGetPublishModule()
        : null
    );
  }),
  (apn.Project.includeWidget = function (exe, wgtId, wgtLibItem) {
    var clsExe;
    return (
      (clsExe = eval(exe)),
      wgtLibItem.UI.check === !0
        ? !!(
            clsExe &&
            clsExe.IStub_dbIncludeWidget &&
            clsExe.IStub_dbIncludeWidget(wgtId, wgtLibItem)
          )
        : 1 === wgtLibItem.UI.check
        ? !clsExe ||
          !clsExe.IStub_dbIncludeWidget ||
          clsExe.IStub_dbIncludeWidget(wgtId, wgtLibItem) !== !1
        : void 0
    );
  }),
  (apn.Project.getSpt2preq = function (e, t) {
    function a(e) {
      for (var a, r = 0; r < e.length; r++)
        if (e[r].json && e[r].json.data)
          try {
            (a = JSON.parse(e[r].json.data)),
              !n[e[r].json.name] &&
                a &&
                a[t] &&
                ((i = i || []), i.push(a[t]), (n[e[r].json.name] = !0));
          } catch (e) {
            continue;
          }
    }
    var i,
      n = {},
      r = apn.Project.getLayout(e).property;
    if (
      (r.CExe &&
        r.CExe.spt2preq &&
        r.CExe.spt2preq.length &&
        a(r.CExe.spt2preq),
      r.PGTPL)
    )
      for (var o in r.PGTPL) r.PGTPL[o].spt2preq && a(r.PGTPL[o].spt2preq);
    return i;
  }),
  (apn.Project.publishListWidget = function (e, t) {
    var a,
      i = {};
    for (var n in e.pages)
      for (a in e.pages[n].objects)
        e.pages[n].objects[a].create.data &&
          e.pages[n].objects[a].create.data.wgtID &&
          (0 == e.pages[n].objects[a].create.data.wgtID.indexOf("apn.") ||
            (apn.widgets[e.pages[n].objects[a].create.data.wgtID] &&
              apn.widgets[e.pages[n].objects[a].create.data.wgtID]
                .APX_PUB_PRELOAD) ||
            (i[e.pages[n].objects[a].create.data.wgtID] = !0));
    var r = apn.Project.getSpt2preq(e, "widget");
    if (r)
      for (var n = 0; n < r.length; n++)
        if (r[n] && r[n].length)
          for (var a = 0; a < r[n].length; a++)
            (apn.widgets[r[n][a]] || t) && (i[r[n][a]] = !0);
    return i;
  }),
  (apn.Project.publishListFontFile = function (e, t, a, i, n) {
    function r(e) {
      if (((y[e] = !0), !f[e]))
        for (var a = 0; a < o.length; a++)
          if (
            ("file" == o[a].type ||
              "dir" == o[a].type ||
              ("google" == o[a].type && t)) &&
            o[a].face == e
          ) {
            f[e] = !0;
            break;
          }
    }
    var o,
      s = apn.Project.getLayout(e).CTXT.deviceID;
    apn.dbUI && apn.dbUI.font && apn.dbUI.font.length
      ? (o = apn.dbUI.font)
      : apn.widgetDevice[s] &&
        apn.widgetDevice[s].font &&
        apn.widgetDevice[s].font.length &&
        (o = apn.widgetDevice[s].font),
      (o = o ? o.concat() : []);
    var p,
      l,
      d,
      c,
      g,
      u = apn.Project.getExeModule(e);
    if (u.IStub_getFonts && ((p = u.IStub_getFonts(i, e)), p && p.fonts)) {
      for (c = 0; c < o.length; c++)
        for (d = 0; d < p.fonts.length; d++)
          if (p.fonts[d].face == o[c].face) {
            o.splice(c, 1), c--;
            break;
          }
      if (((o = o.concat(p.fonts)), "replace" == p.action))
        for (d = 0; d < p.fonts.length; d++)
          (l = l || {}), (l[p.fonts[d].face] = !0);
    }
    if (!o.length) return o;
    var h,
      x = [],
      f = {},
      y = {};
    a &&
      ((h = apn.Project.resolveStyle(e, "font")),
      r(h),
      "Open Sans" != h && r("Open Sans"));
    var v, C, b;
    for (d in e.pages)
      if (!n || n == d)
        for (c in e.pages[d].objects)
          if (
            ((C = e.pages[d].objects[c].create.data),
            (v = apn.Project.getWidgetModule(C)),
            v && v.pubOnGetFontList)
          )
            try {
              if (((b = v.pubOnGetFontList(e, d, c)), b && b.length))
                for (g = 0; g < b.length; g++) r(b[g]);
            } catch (e) {
              console.error(
                "[AspenCHK] Program error in pubOnGetFontList() of " + C.wgtID,
                e
              );
            }
          else
            v &&
              v.styleMap &&
              v.styleMap.font &&
              r(
                apn.Project.resolveStyle(
                  e,
                  "font",
                  C.styles ? C.styles.font : void 0
                )
              );
    for (d in e.pages)
      if (!n || n == d)
        for (c in e.pages[d].objects)
          (C = e.pages[d].objects[c].create.data),
            C &&
              C.properties &&
              C.properties.attrs &&
              C.properties.attrs.apxFont &&
              r(C.properties.attrs.apxFont);
    var _ = apn.Project.getLayout(e).property.CExe,
      m = apn.Project.getSpt2preq(e, "font");
    if (m)
      for (var d = 0; d < m.length; d++)
        if (m[d] && m[d].length)
          for (g = 0; g < o.length; g++)
            for (c = 0; c < m[d].length; c++)
              if (o[g].title == m[d][c]) {
                r(o[g].face);
                break;
              }
    var I,
      S,
      P = !(p && "replace" == p.action);
    (t || a) && (P = !1), P && _ && _.pubFonts && (I = _.pubFonts);
    var T,
      w = "";
    for (g = 0; g < o.length; g++) {
      if (
        ((S =
          ("file" == o[g].type ||
            "dir" == o[g].type ||
            ("google" == o[g].type && t)) &&
          f[o[g].face]),
        S && "dir" == o[g].type && P && I && I.length)
      )
        for (c = 0; c < I.length; c++)
          if (I[c].face && I[c].path && I[c].face == o[g].face) {
            S = !1;
            break;
          }
      l &&
        !l[o[g].face] &&
        (S && (S = !1),
        y[o[g].face] && ((T = !0), (w += (w ? ", " : "") + o[g].title))),
        S && x.push(bx.$cloneObject({}, o[g]));
    }
    var E;
    for (d in y) {
      for (E = !1, g = 0; g < o.length; g++)
        if (d == o[g].face) {
          E = !0;
          break;
        }
      E || ((T = !0), (w += (w ? ", " : "") + "'" + d + "'"));
    }
    if (!t && !a && T) {
      var V = apn.CExe.GL({
        ko: "본 실행기에 등록되어 있지 않는 폰트가 편집되어 있습니다. 다음 폰트들이 표시되지 않을 수 있습니다.",
        en: "Unregistered fonts are being used in this file. These fonts will not be displayed properly.",
        ja: "本実行機に登録されていないフォントが編集されています。次のフォントが表示されない場合があります。",
      });
      bx.UX.showToast(V + "<br/>" + w, { time: 1e4 });
    }
    if (
      apn.dbUI &&
      apn.dbUI.system &&
      apn.dbUI.system.pubFontCompress &&
      void 0 === t &&
      void 0 === a &&
      void 0 === i
    )
      for (d = 0; d < x.length; d++) x[d].compress && (x.splice(d, 1), d--);
    return x;
  }),
  (apn.Project.publishListAsset = function (e, t, a) {
    function i(e, t) {
      if (e)
        for (var o in e)
          if ("mediaID" == o)
            if ("object" == typeof e[o])
              for (var s in e[o])
                ((e[o][s] && e[o][s].charAt && "R" == e[o][s].charAt(0)) ||
                  a) &&
                  ((t && e[o][s][1] == t) || (n[e[o][s]] = !0));
            else
              ((e[o] && e[o].charAt && "R" == e[o].charAt(0)) || a) &&
                ((t && e[o][1] == t) || (n[e[o]] = !0));
          else if ("object" == typeof e[o]) {
            if (
              r &&
              r.tableImage &&
              e[o] &&
              e[o].id &&
              e[o].data &&
              "L" == e[o].type &&
              e[o].data.data &&
              e[o].data.st &&
              r.tableImage[e[o].id]
            ) {
              i(e[o], "I");
              continue;
            }
            i(e[o], t);
          }
    }
    var n = {},
      r = void 0;
    void 0 === t &&
      void 0 === a &&
      apn.CExeBookEPUB3 &&
      "apn.CExeBookEPUB3" == apn.Project.getExeModuleID(e) &&
      (r = apn.CExeBookEPUB3.epub3GetNullifiedAsset(e));
    var o;
    t && t instanceof Object && ((o = t.pageOnly), (t = t.id));
    var s, p;
    if (t) for (p in e.pages[t].objects) i(e.pages[t].objects[p].create.data);
    else
      for (s in e.pages)
        if (!(r && r.page && r.page[s]))
          for (p in e.pages[s].objects) i(e.pages[s].objects[p].create.data);
    if ((o || i(apn.Project.getLayout(e).property), t))
      e.pages[t].BG && i(e.pages[t].BG), e.pages[t].UI && i(e.pages[t].UI);
    else
      for (s in e.pages)
        (r && r.page && r.page[s]) ||
          (e.pages[s].BG && i(e.pages[s].BG),
          e.pages[s].UI && i(e.pages[s].UI));
    if (void 0 === t && void 0 === a) {
      var l = apn.Project.publishGetPageTemplate(e, { all: !0 });
      if (l)
        for (var d in l)
          for (p = 0; p < l[d].length; p++) n[l[d][p]] && delete n[l[d][p]];
    }
    var c = [];
    for (p in n) c.push(p);
    return c;
  }),
  (apn.Project._applyPagePGTPL = function (e, t, a, i, n, r, o) {
    i.PGTPL && i.PGTPL.byTOOL
      ? (i.PGTPL.pMap = r)
      : ((i.PGTPL = {
          fId: t,
          pId: n,
          pMap: r,
          linkType: a,
          linkEmSpt: e.property.pgTplDenyEditing.embedScript || {},
        }),
        o && (i.PGTPL.byTPL = !0));
  }),
  (apn.Project.isTemplateLinked = function (e) {
    if (
      (!e.property.type || "P" == e.property.type) &&
      e.property.baseId &&
      e.property.pgTplDenyEditing
    )
      return e.property.pgTplDenyEditing;
  }),
  (apn.Project.isLinkingTemplate = function (e) {
    if ("T" == e.property.type && e.property.pgTplDenyEditing)
      return e.property.pgTplDenyEditing;
  }),
  (apn.Project.getTemplatePropAsset = function (e) {
    function t(e, a) {
      if (e)
        for (var n in e)
          if ("mediaID" == n)
            if ("object" == typeof e[n])
              for (var r in e[n])
                e[n][r] &&
                  e[n][r].charAt &&
                  "R" == e[n][r].charAt(0) &&
                  ((a && e[n][r][1] == a) || (i[e[n][r]] = !0));
            else
              e[n] &&
                e[n].charAt &&
                "R" == e[n].charAt(0) &&
                ((a && e[n][1] == a) || (i[e[n]] = !0));
          else "object" == typeof e[n] && t(e[n], a);
    }
    var a = void 0;
    apn.CExeBookEPUB3 &&
      "apn.CExeBookEPUB3" == apn.Project.getExeModuleID(e) &&
      (a = apn.CExeBookEPUB3.epub3GetNullifiedAsset(e));
    var i = {},
      n = apn.Project.getLayout(e).property.CExe,
      r =
        !e.property.pgTplDenyEditing ||
        "Y" != e.property.pgTplDenyEditing.noLinkSettings;
    if (n)
      for (var o in n)
        if ("splash" == o)
          n[o] &&
            n[o].img &&
            n[o].img.srcMediaID &&
            (i[n[o].img.srcMediaID] = !0);
        else if ("layout" == o) r && t(n[o]);
        else if ("sns" != o && "epub3" != o && "apxTdata" != o) t(n[o]);
        else if ("apxTdata" == o)
          for (var s = 0; s < n[o].length; s++)
            if ("L" == n[o][s].type) {
              if (a && a.tableImage && n[o][s].id && a.tableImage[n[o][s].id]) {
                t(n[o][s], "I");
                continue;
              }
              t(n[o][s]);
            }
    return i;
  }),
  (apn.Project.publishGetPageTemplate = function (e, t) {
    var a = void 0;
    void 0 === t &&
      apn.CExeBookEPUB3 &&
      "apn.CExeBookEPUB3" == apn.Project.getExeModuleID(e) &&
      (a = apn.CExeBookEPUB3.epub3GetNullifiedAsset(e));
    var i;
    if ((i = apn.Project.isTemplateLinked(e)) && !i.built) {
      for (
        var n = apn.Project.getPages(e, void 0, void 0, { editable: !0 }),
          r = {},
          o = 0;
        o < n.length;
        o++
      )
        r[n[o]] = n[o];
      for (o = 0; o < n.length; o++)
        apn.Project._applyPagePGTPL(
          e,
          e.property.baseId,
          i.widget || "",
          e.pages[n[o]],
          n[o],
          r,
          !0
        );
      i.built = !0;
    }
    var s,
      p,
      l,
      d = null,
      c = apn.Project.getLayout(e).property.PGTPL;
    for (var o in e.pages)
      (s = e.pages[o]) &&
        s.PGTPL &&
        s.PGTPL.fId &&
        ((l = !1),
        (d = d || {}),
        (!t || !t.all) &&
          c &&
          c[s.PGTPL.fId] &&
          c[s.PGTPL.fId].exAst &&
          c[s.PGTPL.fId].exAst.path &&
          (l = !0),
        "N" == s.PGTPL.linkType && (l = !0),
        a && a.page && a.page[o] && (l = !0),
        l
          ? (d[s.PGTPL.fId] = [])
          : ((p = apn.Project.publishListAsset(e, { id: o, pageOnly: !0 })),
            d[s.PGTPL.fId]
              ? (d[s.PGTPL.fId] = d[s.PGTPL.fId].concat(p))
              : (d[s.PGTPL.fId] = p)));
    if (apn.Project.isTemplateLinked(e)) {
      (d = d || {}), (d[e.property.baseId] = d[e.property.baseId] || []);
      var g = apn.Project.getTemplatePropAsset(e);
      for (var u in g) d[e.property.baseId].push(u);
    }
    return d;
  }),
  (apn.Project.publishMeta = function (e, t, a) {
    function i(e, a, i) {
      e[t] &&
        (a && i
          ? ((o.pages = o.pages || {}),
            (o.pages[a] = o.pages[a] || {}),
            (o.pages[a][i] = e[t]))
          : (o.file = e[t]));
    }
    var n,
      r,
      o = {};
    for (n in e.pages)
      for (r in e.pages[n].objects)
        e.pages[n].objects[r].create.data &&
          e.pages[n].objects[r].create.data.properties &&
          e.pages[n].objects[r].create.data.properties.attrs &&
          i(e.pages[n].objects[r].create.data.properties.attrs, n, r);
    return (
      a &&
        apn.Project.getLayout(e).property[a] &&
        i(apn.Project.getLayout(e).property[a]),
      o
    );
  }),
  (apn.Project.publishAttachments = function (e) {
    function t(e, t) {
      for (var a, i, n = 0; n < e.length; n++)
        if (((a = e[n]), a.name && !c[a.name] && t && t.fs.length))
          for (var i = 0; i < t.fs.length; i++)
            if (t.fs[i].js.data && t.fs[i].js.name == a.name) {
              (s = s || []),
                s.push({ name: a.name, data: t.fs[i].js.data }),
                (c[a.name] = !0);
              break;
            }
    }
    var a,
      i,
      n,
      r,
      o,
      s = null;
    for (var p in e.pages)
      for (a in e.pages[p].objects)
        if (
          ((n = e.pages[p].objects[a]),
          (r = apn.Project.getWidgetModule(n.create.data)) &&
            r.pubOnGetAttachment)
        ) {
          o = null;
          try {
            if ((o = r.pubOnGetAttachment(e, p, a)) && o && o.length)
              for (i = 0; i < o.length; i++)
                o[i].name &&
                  ((s = s || []),
                  s.push({ name: p + "_" + a + o[i].name, data: o[i].data }));
          } catch (e) {
            console.error(
              "[AspenCHK] Program error in pubOnGetAttachment() of " +
                n.create.data.wgtID,
              e
            );
          }
        }
    var l = apn.Project.getExeModule(e);
    if (l.IStub_getMetaFile) {
      var d = l.IStub_getMetaFile(e);
      if (d && d.length)
        for (i = 0; i < d.length; i++) (s = s || []), s.push(d[i]);
    }
    var c = {},
      g = apn.Project.getLayout(e).property.CExe;
    g && g.spt2impt && g.spt2impt.js && t(g.spt2impt.js, g.js);
    var u = apn.Project.getLayout(e).property.PGTPL;
    if (u) {
      var h = [];
      for (var x in u)
        for (var i in e.pages)
          if (e.pages[i].PGTPL && e.pages[i].PGTPL.fId == x) {
            h.push({ fId: x, order: e.pages[i].UI.order });
            break;
          }
      h.sort(function (e, t) {
        return void 0 === e.order && void 0 === t.order
          ? 0
          : void 0 === e.order
          ? 1
          : void 0 === t.order
          ? -1
          : e.order - t.order;
      });
      for (var i = 0; i < h.length; i++)
        (x = h[i].fId),
          u[x] &&
            u[x].spt2impt &&
            u[x].spt2impt.js &&
            u[x].js &&
            t(u[x].spt2impt.js, u[x].js);
    }
    var f,
      y = apn.Project.publishGetExMedia(e),
      v = {};
    for (var i in y)
      apn.Project.exMediaCache &&
        apn.Project.exMediaCache[i] &&
        ((v[i] = apn.Project.exMediaCache[i]), (f = !0));
    return (
      f &&
        ((s = s || []),
        s.push({
          name: "aspen.exmedia.reposit.js",
          data: "window.apxExMediaReposit=" + JSON.stringify(v),
        })),
      s
    );
  }),
  (apn.Project.publishHTML = function (e, t) {
    var a = apn.Project.getExeModule(e);
    return a.IStub_pubGetHTML ? a.IStub_pubGetHTML(e, t) : null;
  }),
  (apn.Project.publishAsyncStart = function (e, t, a) {
    function i(e, t, a) {
      var i = a.split("/"),
        p = i[i.length - 1];
      if (
        (!e && t
          ? (p.indexOf("?") != -1 && (p = p.split("?")[0]),
            (apn.Project.exMediaCache = apn.Project.exMediaCache || {}),
            (apn.Project.exMediaCache[p] = t),
            o++)
          : s++,
        r == o + s)
      ) {
        if (s) {
          var l = apn.CExe.GL({
            ko:
              s +
              "개의 자원 파일의 출판에 실패하였습니다. 다시 시도해 보기 바랍니다.",
            en:
              "Failed in publishing " +
              s +
              " asset files. Please, try this again.",
            ja:
              s +
              "個のリソースファイルの出版に失敗しました。もう一度お試しください。",
          });
          bx.UX.showToast(l, { time: 6e3 });
        }
        n();
      }
    }
    function n() {
      var i = apn.Project.getExeModule(e);
      return i.IStub_pubOnPrePublish
        ? i.IStub_pubOnPrePublish(e, t, a)
        : void t();
    }
    var r = 0,
      o = 0,
      s = 0,
      p = apn.Project.publishGetExMedia(e);
    for (var l in p) r++;
    for (l in p)
      e.rsc && e.rsc[l] && e.rsc[l].data
        ? i(null, e.rsc[l].data, l)
        : window.asui && asui.UTIL
        ? asui.UTIL.getBase64ImgByUrl(
            apn.Project.mediaResolve(e, l),
            apn.Project.getMediaMimeType(e, l),
            i
          )
        : i(!0, null, l);
    r || n();
  }),
  (apn.Project.publishCompressFont = function (e, t) {
    function a(e, t) {
      if (t)
        for (var a = 0; a < t.length; a++)
          "\r" != t[a] &&
            "\n" != t[a] &&
            e.code.indexOf(t[a]) == -1 &&
            (e.code += t[a]);
    }
    var i = null;
    if (apn.dbUI && apn.dbUI.system && apn.dbUI.system.pubFontCompress) {
      for (
        var n = apn.Project.publishListFontFile(e, void 0, !0), r = {}, o = 0;
        o < n.length;
        o++
      )
        n[o].compress &&
          (r[n[o].face] = { code: "", path: n[o].fontFile, face: n[o].face });
      var s, p, l, d, c, g, u, h, x;
      for (o in e.pages)
        for (s in e.pages[o].objects) {
          if (
            ((d = e.pages[o].objects[s].create.data),
            (u = void 0),
            d && d.styles && d.styles.font && (u = d.styles.font),
            (u = apn.Project.resolveStyle(e, "font", u)),
            (l = apn.Project.getWidgetModule(d)) &&
              l.pubOnGetText &&
              (g = l.pubOnGetText(e, o, s)) &&
              g &&
              g.length)
          ) {
            for (var c = 0; c < g.length; c++)
              if (g[c] && g[c].str)
                if (r[g[c].font]) a(r[g[c].font], g[c].str);
                else for (p in r) a(r[p], g[c].str);
          } else
            r[u] &&
              (d && d.styles && d.styles.text && (h = d.styles.text),
              (g = apn.Project.resolveStyle(e, "text", h)) && a(r[u], g));
          if (r[u] && (x = apn.Project.findITRs(e, o, s)))
            for (p = 0; p < x.length; p++)
              "CWP" == x[p].action &&
                x[p].set &&
                x[p].set.text &&
                a(r[u], x[p].set.text + "");
        }
      var f = apn.Project.getLayout(e).property;
      if (f.CExe && f.CExe.js && f.CExe.js.fs) {
        var y = f.CExe.js.fs;
        for (o = 0; o < y.length; o++)
          if (y[o].js && y[o].js.data) for (p in r) a(r[p], y[o].js.data);
      }
      for (o in r)
        r[o].code &&
          (t && t.needTextMap
            ? ((i = i || {}), (i[r[o].face] = r[o].code))
            : ((i = i || { fonts: [] }), i.fonts.push(r[o])));
    }
    return i;
  }),
  (apn.Project.publishGetExMedia = function (e) {
    var t,
      a,
      i = {};
    for (var n in e.pages)
      for (t in e.pages[n].objects) {
        var a = apn.Project.getWidgetModule(e.pages[n].objects[t].create.data);
        a &&
          a.pubOnGetExMedia &&
          bx.$copyObject(i, a.pubOnGetExMedia(e, n, t) || {});
      }
    return i;
  }),
  (apn.Project.isWidget = function (e) {
    return !(!e || !e.wgtID);
  }),
  (apn.Project.getWidgetID = function (e) {
    return apn.Project.isWidget(e) && apn.widgets && apn.widgets[e.wgtID]
      ? e.wgtID
      : null;
  }),
  (apn.Project.getWidgetTitleFromLibrary = function (e, t) {
    if (e) {
      var a = apn.Project.getLayout(e).CTXT.deviceID;
      if (apn.widgetLibrary[a] && apn.widgetLibrary[a].groups) {
        var i,
          n,
          r,
          o = 0;
        for (i = 0; i < apn.widgetLibrary[a].groups.length; i++)
          if (apn.widgetLibrary[a].groups[i].widgets)
            for (n = 0; n < apn.widgetLibrary[a].groups[i].widgets.length; n++)
              (r = apn.widgetLibrary[a].groups[i].widgets[n]),
                r.UI && r.UI.title && r.widget && r.widget.id == t && o++;
        if (o > 1) return;
        for (i = 0; i < apn.widgetLibrary[a].groups.length; i++)
          if (apn.widgetLibrary[a].groups[i].widgets)
            for (n = 0; n < apn.widgetLibrary[a].groups[i].widgets.length; n++)
              if (
                ((r = apn.widgetLibrary[a].groups[i].widgets[n]),
                r.UI && r.UI.title && r.widget && r.widget.id == t)
              )
                return r.UI.title;
      }
    }
  }),
  (apn.Project.getWidgetModule = function (e) {
    return apn.Project.isWidget(e) && apn.widgets && apn.widgets[e.wgtID]
      ? apn.widgets[e.wgtID]
      : null;
  }),
  (apn.Project.verifyWidgetModule = function (e) {
    return (
      !!apn.widgets[e] &&
      !!apn.widgets[e].styleMap &&
      !(!apn.widgets[e].createAsCanvasObject && !apn.widgets[e].createByEditor)
    );
  }),
  (apn.Project.getPageTitle = function (e, t) {
    return e.pages[t] && e.pages[t].UI.title
      ? e.pages[t].UI.title
      : (apn.dbUI && apn.dbUI.system && apn.dbUI.system.page
          ? apn.dbUI.system.page
          : "Page") +
          " " +
          t;
  }),
  (apn.Project.getEditablePageList = function (e) {
    var t = [];
    for (var a in e.pages) e.pages[a].UI.noEditable || t.push(a);
    return (
      t.sort(function (t, a) {
        return void 0 === e.pages[t].UI.order && void 0 === e.pages[a].UI.order
          ? 0
          : void 0 === e.pages[t].UI.order
          ? 1
          : void 0 === e.pages[a].UI.order
          ? -1
          : e.pages[t].UI.order - e.pages[a].UI.order;
      }),
      t
    );
  }),
  (apn.Project.getScreenSize = function (e) {
    return bx.$cloneObject({}, e.layouts[e.CTXT.layoutID].property.screenSize);
  }),
  (apn.Project.setScreenSize = function (e, t, a) {
    (e.layouts[e.CTXT.layoutID].property.screenSize.w = t),
      (e.layouts[e.CTXT.layoutID].property.screenSize.h = a);
  }),
  (apn.Project.getLayout = function (e) {
    return e.layouts[e.CTXT.layoutID];
  }),
  (apn.Project.createNew = function (e) {
    var t = apn.Project.$O18(e);
    return (
      apn.Project.$O11(t, { module: "apn.CFlowPage" }),
      apn.Project.$O10(t, e),
      t
    );
  }),
  (apn.Project.findParentOf = function (e, t, a, i, n) {
    var r;
    for (var o in e.objects)
      if (e.objects[o].layout && e.objects[o].layout.children)
        for (r = 0; r < e.objects[o].layout.children.length; r++)
          if (e.objects[o].layout.children[r] == t) {
            if (
              (i && "bx.CEditorWnd.CGroup" == e.objects[o].module) ||
              (n && "apn.CLayer" == e.objects[o].module)
            )
              return apn.Project.findParentOf(e, o, a, i);
            if (!a || e.objects[o].module == a) return o;
          }
  }),
  (apn.Project.fontHasBold = function (e, t) {
    return (
      !(!apn.fonts || !apn.fonts[t] || apn.fonts[t].noBold) ||
      !(!t || !t.indexOf || t.indexOf(",") == -1)
    );
  }),
  (apn.Project.sptCanVer2 = function (e) {
    return !(
      apn.Project.getScriptVer(e) < 2 &&
      apn.Project._sptSearchScript(e, "cloneScriptOf")
    );
  }),
  (apn.Project._sptSearchScript = function (e, t) {
    var a, i, n;
    for (a in e.pages) {
      if (e.pages[a].SPT)
        for (n in e.pages[a].SPT)
          if (e.pages[a].SPT[n] && (e.pages[a].SPT[n] || "").indexOf(t) != -1)
            return !0;
      for (i in e.pages[a].objects)
        if (e.pages[a].objects[i].SPT)
          for (n in e.pages[a].objects[i].SPT)
            if (
              e.pages[a].objects[i].SPT[n] &&
              (e.pages[a].objects[i].SPT[n] || "").indexOf(t) != -1
            )
              return !0;
    }
    var r = apn.Project.getLayout(e).property.CExe;
    if (r && r.js && r.js.fs)
      for (var o, s = 0; s < r.js.fs.length; s++)
        if ((o = r.js.fs[s]) && o.js && o.js.data && o.js.data.indexOf(t) != -1)
          return !0;
    return !1;
  }),
  (apn.Project.isInHTML = function (e, t, a) {
    var i;
    return !!(
      (i = apn.Project.findParentOf(e.pages[t], a, void 0, !0)) &&
      (i = apn.Project.findParentOf(e.pages[t], i, void 0, !0)) &&
      e.pages[t].objects[i] &&
      e.pages[t].objects[i].create.data &&
      "apn.wgt.htmlCntr" == e.pages[t].objects[i].create.data.wgtID
    );
  }),
  (apn.Project.$O8G = function (e, t) {
    if (e && e.rsc[t]) {
      if (
        e.rsc[t].type &&
        e.rsc[t].type.split &&
        e.rsc[t].type.split("/").length > 0
      )
        return e.rsc[t].type.split("/")[0];
    } else if (t && t.charAt && ("R" == t.charAt(0) || "X" == t.charAt(0))) {
      var a = t.charAt(1);
      if ("A" == a) return "audio";
      if ("I" == a || "G" == a) return "image";
      if ("V" == a) return "video";
      if ("P" == a || "Q" == a) return "pdf";
    }
  }),
  (apn.Project.getMediaType = apn.Project.$O8G),
  (apn.Project.getMediaMimeType = function (e, t) {
    if (e && e.rsc[t]) return e.rsc[t].type;
    if (t && ("P" == t[0] || "Q" == t[0] || "R" == t[0] || "X" == t[0])) {
      var a = t.split("_"),
        i = apn.Project.$O8G(e, t);
      return "jpg" == a[1]
        ? i + "/jpeg"
        : "svg" == a[1]
        ? "image/svg+xml"
        : "pdf" == a[1]
        ? "application/pdf"
        : i + "/" + a[1];
    }
    if (t) {
      var a = t.split("."),
        n = a[a.length - 1];
      if (((n = (n || "").toLowerCase()), "mp4" == n)) return "video/mp4";
      if ("webm" == n) return "video/webm";
      if ("mp3" == n) return "audio/mp3";
      if ("jpg" == n || "jpeg" == n) return "image/jpeg";
      if ("png" == n) return "image/png";
      if ("svg" == n) return "image/svg+xml";
    }
  }),
  (apn.Project.$O1e = function (e, t, a, i, n) {
    function r(e, t) {
      return (
        !i &&
          e &&
          e.indexOf &&
          0 != e.indexOf("data:") &&
          (e +=
            e.indexOf("?") == -1
              ? "?APXNCTM=" + (t || new Date().getTime())
              : "&APXNCTM=" + (t || new Date().getTime())),
        e
      );
    }
    var o = "asset/";
    if (!i) {
      var s = e && e.property && e.property.id;
      !s &&
        asui &&
        asui.PRJIF.getData() &&
        (s = asui.PRJIF.getData().property.id),
        bx.CCookie.get("pid") != s && bx.CCookie.set("pid", s);
    }
    if (
      (n &&
        n.path &&
        (o = n.path + ("/" == n.path[n.path.length - 1] ? "" : "/")),
      e && e.rsc && e.rsc[t] && (!n || !n.ignoreLocal))
    )
      return e.rsc[t].data;
    if (window.apxExMediaReposit && apxExMediaReposit[t] && n && n.base64)
      return apxExMediaReposit[t];
    if (t && t.charAt && ("P" == t.charAt(1) || "Q" == t.charAt(1))) {
      var p, l, d;
      if (((l = t.split("_")), e.property.id && l[0] && 34 == l[0].length))
        return (
          (d = l[0].substring(2)),
          i
            ? o + t.charAt(1) + "/" + d + "/"
            : "/files/asset/" +
              (n && n.fileID ? n.fileID : e.property.id) +
              "/" +
              t.charAt(1) +
              "/" +
              d +
              "/"
        );
    } else {
      if (t && t.charAt && "R" == t.charAt(0)) {
        var c;
        if (!i)
          try {
            c = apn.loadTempFile("apnProject_replaced");
          } catch (e) {}
        var g = t.charAt(1);
        if (a && "A" == g) return bx.c.bx$nullImage;
        var p;
        if (i) {
          if ("S" === t[2]) var u = t.substring(3, t.indexOf("_"));
          else var u = t.substring(2, t.indexOf("_"));
          var h = t.substring(t.indexOf("_") + 1),
            x = "/";
          return (
            a && ((x += "S/"), (h = "png")),
            (p = o + g + x + u + "." + h),
            c && c[t] ? r(p, c[t]) : p
          );
        }
        var f = t;
        return (
          a && ((g = "I"), (t = "S" + t)),
          (p =
            (apn.dbUI && apn.dbUI.system && apn.dbUI.system.mediaResolvePrefix
              ? apn.dbUI &&
                apn.dbUI.system &&
                apn.dbUI.system.mediaResolvePrefix
              : "/aspen") +
            "/asset/" +
            g +
            "/" +
            t),
          c && c[f] ? r(p, c[f]) : p
        );
      }
      if (t && t.charAt && "X" == t.charAt(0)) {
        if (apn.dbUI && apn.dbUI.system && apn.dbUI.system.mediaExternal) {
          var y = t.substring(4, 8);
          if ((y = apn.dbUI.system.mediaExternal[y])) {
            var v;
            if ((v = (y || "").indexOf(".")) > 0) {
              if (
                window[y.substring(0, v)] &&
                window[y.substring(0, v)][y.substring(v + 1)]
              )
                return window[y.substring(0, v)][y.substring(v + 1)](
                  e,
                  t,
                  a,
                  i
                );
            } else if (window[apn.dbUI.system.mediaExternal[y]])
              return window[apn.dbUI.system.mediaExternal[y]](e, t, a, i);
          }
          bx.Trace.log(
            "APN",
            "error",
            "Unknown external media system:" + y,
            "mediaResolve"
          );
        }
      } else if (t && t.indexOf && 0 == t.indexOf("data:")) return t;
    }
    return "";
  }),
  (apn.Project.mediaResolve = apn.Project.$O1e),
  (apn.Project.$O5k = function (e, t, a, i) {
    window.asui &&
      asui.API &&
      asui.API.copyAssetFile &&
      asui.API.copyAssetFile(e, t, a, i);
  }),
  (apn.Project.mediaReplaced = function (e) {
    var t = apn.loadTempFile("apnProject_replaced") || {},
      a = new Date().getTime();
    for (var i in t) a - t[i] > 864e5 && delete t[i];
    (t[e] = a), apn.saveTempFile("apnProject_replaced", t);
  }),
  (apn.Project.mediaLocalPath = function (e, t, a) {
    var i = "";
    if (t && t.length > 32) {
      var n = e.rsc[t];
      if (n.data && n.type && n.type.split("/").length > 1) {
        var r = apn.Project.$O8G(e, t),
          o = n.type.split("/"),
          s = t.substring(2, 34);
        "image" == r
          ? o[1].indexOf("svg") != -1
            ? (i = a ? "asset/G/S/" + s + ".png" : "asset/G/" + s + ".svg")
            : ("jpeg" == o[1] && (o[1] = "jpg"),
              (i = "asset/I/" + s + "." + o[1]))
          : "video" == r
          ? (i = a ? "asset/V/S/" + s + ".png" : "asset/V/" + s + "." + o[1])
          : "audio" == r && (i = "asset/A/" + s + "." + o[1]);
      }
    }
    return i;
  }),
  (apn.Project.mediaLocalUuidToMediaID = function (e, t, a) {
    if (a && a.split("/").length > 1) {
      var i = a.split("/");
      if ("image" == i[0])
        return i[1].indexOf("svg") != -1
          ? "RG" + t + "_svg"
          : ("jpeg" == i[1] && (i[1] = "jpg"), "RI" + t + "_" + i[1]);
      if ("video" == i[0]) return "RV" + t + "_" + i[1];
      if ("audio" == i[0]) return "RA" + t + "_" + i[1];
    }
    return t;
  }),
  (apn.Project.$O5X = function (e, t, a, i, n, r, o) {
    if ("media" == a)
      if (i)
        if (0 == i.indexOf("^L")) {
          var s = i.split("^"),
            p = "";
          "T" == s[2]
            ? (p = "to bottom,")
            : "B" == s[2]
            ? (p = "to top,")
            : "L" == s[2]
            ? (p = "to right,")
            : "R" == s[2] && (p = "to left,"),
            (n.style.backgroundImage =
              "linear-gradient(" +
              p +
              s[3] +
              "," +
              s[4] +
              " " +
              100 * parseFloat(s[5]) +
              "%)");
        } else if (0 == i.indexOf("^I")) {
          var s = i.split("^"),
            l = new Image();
          (l.onload = function () {
            "XY" == s[2] &&
              ((n.style.backgroundImage = "url(" + s[3] + ")"),
              (n.style.backgroundSize =
                Math.round(r * this.width) +
                "px " +
                Math.round(o * this.height) +
                "px"),
              (n.style.backgroundRepeat = "repeat"));
          }),
            (l.src = s[3]);
        } else {
          var d = apn.Project.$O1e(e, i, !1, t),
            l = new Image();
          (l.onload = function () {
            (n.style.backgroundImage = "url(" + d + ")"),
              (n.style.backgroundSize =
                Math.round(r * this.width) +
                "px " +
                Math.round(o * this.height) +
                "px"),
              (n.style.backgroundRepeat = "repeat");
          }),
            (l.src = d);
        }
      else n.style.backgroundImage = "none";
    else
      "color" == a &&
        (i
          ? (n.style.backgroundColor = i)
          : (n.style.backgroundColor = "transparent"));
  }),
  (apn.Project.$O4K = function (e, t, a) {
    var i;
    if (t.children)
      for (i = 0; i < t.children.length; i++)
        e[t.children[i]] && (t.children[i] = e[t.children[i]]);
    if (t.layers)
      for (i in t.layers)
        e[t.layers[i].id] && (t.layers[i].id = e[t.layers[i].id]);
    if (t.connect)
      for (i = 0; i < t.connect.length; i++)
        t.connect[i].objectID &&
          e[t.connect[i].objectID] &&
          (t.connect[i].objectID = e[t.connect[i].objectID]);
    if (t.states) {
      var n, r;
      for (i in t.states)
        for (n in t.states[i].objects)
          e[n] &&
            ((t.states[i].objects[e[n]] = t.states[i].objects[n]),
            delete t.states[i].objects[n],
            a &&
              ((r = apn.Project.getWidgetModule(
                t.states[i].objects[e[n]].create.data
              )),
              r &&
                r.edtOnRemapObjectID &&
                r.edtOnRemapObjectID(
                  a,
                  t.states[i].objects[e[n]].create.data,
                  e
                )));
    }
  }),
  (apn.Project._remapObject = function (e, t, a) {
    function i(e, t) {
      for (var a = 0; a < e.length; a++)
        if (
          (e[a].target &&
            e[a].target.objectID &&
            t[e[a].target.objectID] &&
            (e[a].target.objectID = t[e[a].target.objectID]),
          e[a].from &&
            e[a].from.objectID &&
            t[e[a].from.objectID] &&
            (e[a].from.objectID = t[e[a].from.objectID]),
          e[a].event && apn.P.isObjectCompositeSysEV(e[a].event))
        ) {
          var i = apn.P.resolveCompositeSysEV(e[a].event);
          "$" != i.param.charAt(0) &&
            t[i.param] &&
            (e[a].event = i.ev + ":" + t[i.param]);
        }
    }
    if (t.objects[a].layout && t.objects[a].layout.children)
      for (var n = 0; n < t.objects[a].layout.children.length; n++)
        e[t.objects[a].layout.children[n]] ||
          (t.objects[a].layout.children.splice(n, 1), n--);
    t.objects[a].ITRs && t.objects[a].ITRs.length && i(t.objects[a].ITRs, e);
    var r = {
        getScreenData: function () {
          return t;
        },
      },
      o = apn.Project.getWidgetModule(t.objects[a].create.data);
    o &&
      o.edtOnRemapObjectID &&
      o.edtOnRemapObjectID(r, t.objects[a].create.data, e),
      t.objects[a].layout && apn.Project.$O4K(e, t.objects[a].layout, r);
  }),
  (apn.Project.docMap = {
    fillStyle: "A",
    strokeStyle: "B",
    lineWidth: "C",
    lineDash: "D",
    lineEnd: "E",
    borderRadiusTopLeft: "F",
    borderRadiusTopRight: "G",
    borderRadiusBottomLeft: "H",
    borderRadiusBottomRight: "I",
    font: "J",
    fontSize: "K",
    fontStyle: "L",
    fontItalic: "M",
    fontBold: "N",
    textMultiLine: "O",
    fontUnderlined: "P",
    text: "Q",
    textAlign: "R",
    textValign: "S",
    textPadding: "T",
    textWordWrap: "U",
    textFit: "V",
    fontStrokeStyle: "W",
    fontStrokeWidth: "X",
    alpha: "Y",
    angle: "Z",
    keepRatio: "a",
    visibility: "c",
    dragX: "d",
    dragY: "e",
    dragInParent: "f",
    dragContainParent: "g",
    ltrSp: "h",
    lnSp: "i",
    csr: "j",
    title: "k",
  }),
  (apn.Project.docMapInv = {
    A: "fillStyle",
    B: "strokeStyle",
    C: "lineWidth",
    D: "lineDash",
    E: "lineEnd",
    F: "borderRadiusTopLeft",
    G: "borderRadiusTopRight",
    H: "borderRadiusBottomLeft",
    I: "borderRadiusBottomRight",
    J: "font",
    K: "fontSize",
    L: "fontStyle",
    M: "fontItalic",
    N: "fontBold",
    O: "textMultiLine",
    P: "fontUnderlined",
    Q: "text",
    R: "textAlign",
    S: "textValign",
    T: "textPadding",
    U: "textWordWrap",
    V: "textFit",
    W: "fontStrokeStyle",
    X: "fontStrokeWidth",
    Y: "alpha",
    Z: "angle",
    a: "keepRatio",
    c: "visibility",
    d: "dragX",
    e: "dragY",
    f: "dragInParent",
    g: "dragContainParent",
    h: "ltrSp",
    i: "lnSp",
    j: "csr",
    k: "title",
  }),
  (apn.Project.docCmpr = function (e) {
    var t, a, i, n;
    for (t in e.pages)
      for (a in e.pages[t].objects)
        if (
          e.pages[t].objects[a].create.data &&
          (n = e.pages[t].objects[a].create.data.styles)
        )
          for (i in n)
            apn.Project.docMap[i] &&
              ((n[apn.Project.docMap[i]] = n[i]), delete n[i]);
  }),
  (apn.Project.docDcmpr = function (e) {
    var t, a, i, n;
    for (t in e.pages)
      for (a in e.pages[t].objects)
        if (
          e.pages[t].objects[a].create.data &&
          (n = e.pages[t].objects[a].create.data.styles)
        )
          for (i in n)
            apn.Project.docMapInv[i] &&
              ((n[apn.Project.docMapInv[i]] = n[i]), delete n[i]);
  }),
  (window.apn = window.apn || {}),
  (apn.CRscLoader = function () {
    bx.inClassing;
  }),
  (apn.CRscLoader._cache = {}),
  (apn.CRscLoader.add = function (e, t) {
    apn.CRscLoader._cache[e] = t;
  }),
  (apn.CRscLoader.check = function (e) {
    return apn.CRscLoader._cache[e];
  }),
  (apn.CRscLoader.checkByMID = function (e, t, a) {
    var i = apn.Project.$O1e(a, e, 1 == t, !1, { ignoreLocal: !0 }) || e;
    return apn.CRscLoader._cache[i];
  }),
  (apn.CRscLoader.clear = function () {
    apn.CRscLoader._cache = {};
  }),
  (apn.CRscLoader.prototype.load = function (e, t, a) {
    function i() {
      return t[this.apnImageLoaderId]
        ? (t[this.apnImageLoaderId].local &&
            ((e.tmp = e.tmp || {}),
            (e.tmp.rscMap = e.tmp.rscMap || {}),
            (e.tmp.rscMap[t[this.apnImageLoaderId].mediaID] = this)),
          (t[this.apnImageLoaderId].image = this),
          this.apnImageLoaderNC ||
            apn.CRscLoader.add(this.getAttribute("src"), this),
          p++,
          void (p + l == d && a(d, p, l)))
        : (l++,
          void console.error("Missing resource ID: " + this.apnImageLoaderId));
    }
    function n() {
      l++, p + l == d && a(d, p, l);
    }
    function r(e) {
      var a = new Image();
      return (
        (a.apnImageLoaderId = e),
        (a.apnImageLoaderNC = t[e].noCache),
        (a.onload = i),
        (a.onerror = n),
        (a.onabort = n),
        a
      );
    }
    function o(e, t) {
      return e;
    }
    var s,
      p = 0,
      l = 0,
      d = 0;
    for (s in t) d++;
    var c;
    for (s in t)
      if (t[s].url)
        if (
          !t[s].noCache &&
          !t[s].standAlone &&
          t[s].url &&
          apn.CRscLoader.check(t[s].url)
        )
          (t[s].image = apn.CRscLoader.check(t[s].url)),
            p++,
            p + l == d && a(d, p, l);
        else {
          var g = r(s);
          g.src = o(t[s].url, t[s].noCache);
        }
      else if ((c = t[s].mediaID))
        if (e.rsc[c]) {
          if ("image" == apn.Project.getMediaType(e, c) || 1 == t[s].type)
            if (1 == t[s].type && e.rsc[c].UI && e.rsc[c].UI.snapshot) {
              var g = r(s);
              g.src = e.rsc[c].UI.snapshot;
            } else if (e.tmp && e.tmp.rscMap && e.tmp.rscMap[c])
              (t[s].image = e.tmp.rscMap[c]), p++, p + l == d && a(d, p, l);
            else {
              var g = r(s);
              1 == t[s].type &&
              e.rsc[c].type &&
              e.rsc[c].type.indexOf &&
              (0 == e.rsc[c].type.indexOf("audio") ||
                0 == e.rsc[c].type.indexOf("video"))
                ? (g.src = bx.c.bx$nullImage)
                : (g.src = e.rsc[c].data);
            }
          else p++, p + l == d && a(d, p, l);
          t[s].local = !0;
        } else if (!c.charAt || ("R" != c.charAt(0) && "X" != c.charAt(0)))
          if (t[s].mediaID) {
            var g = r(s);
            g.src = t[s].mediaID;
          } else n();
        else if (
          ((t[s].src = o(
            apn.Project.$O1e(e, c, 1 == t[s].type, t[s].standAlone, {
              ignoreLocal: !0,
            }),
            t[s].noCache
          )),
          "image" == apn.Project.getMediaType(e, c) || 1 == t[s].type)
        )
          if (
            !t[s].noCache &&
            !t[s].standAlone &&
            t[s].src &&
            apn.CRscLoader.check(t[s].src)
          )
            (t[s].image = apn.CRscLoader.check(t[s].src)),
              p++,
              p + l == d && a(d, p, l);
          else {
            var g = r(s);
            g.src = t[s].src || bx.c.bx$nullImage;
          }
        else p++, p + l == d && a(d, p, l);
      else n();
  }),
  (apn.loadTempFile = function (id) {
    var obj = null,
      storage;
    try {
      storage = window.localStorage;
    } catch (e) {}
    if (storage)
      try {
        obj = storage.getItem(id);
      } catch (e) {
        return null;
      }
    else if (bx.CCookie)
      try {
        obj = bx.CCookie.get(id);
      } catch (e) {
        return null;
      }
    if (obj)
      try {
        obj = eval("(" + obj + ")");
      } catch (e) {
        return null;
      }
    return obj;
  }),
  (apn.saveTempFile = function (e, t) {
    var a;
    try {
      a = window.localStorage;
    } catch (e) {
      return null;
    }
    if (a)
      try {
        a.setItem(e, JSON.stringify(t));
      } catch (e) {
        return bx.Trace.log("APN", "error", e, "apn.saveFile"), null;
      }
    else if (bx.CCookie)
      try {
        bx.CCookie.set(e, JSON.stringify(t), 31536e3);
      } catch (e) {
        return null;
      }
    return !0;
  }),
  (apn.clearTempFile = function (e) {
    var t;
    try {
      t = window.localStorage;
    } catch (e) {}
    if (t)
      try {
        t.removeItem(e);
      } catch (e) {}
    else if (bx.CCookie)
      try {
        bx.CCookie.set(e, null, 31536e3);
      } catch (e) {}
  }),
  (apn.localStorage = {
    error: { code: 0, msg: "" },
    $O2u: [
      "",
      "Cannot save a temporary file.",
      "Cannot save a temporary file due to big file size.",
    ],
  }),
  (apn.localStorage.load = function (id) {
    var obj = null,
      storage;
    try {
      storage = window.localStorage;
    } catch (e) {}
    if (storage)
      try {
        obj = storage.getItem(id);
      } catch (e) {
        return null;
      }
    if (obj)
      try {
        obj = eval("(" + obj + ")");
      } catch (e) {
        return null;
      }
    return obj;
  }),
  (apn.localStorage.save = function (e, t) {
    var a;
    try {
      a = window.localStorage;
    } catch (e) {}
    if (a) {
      try {
        a.setItem(e, JSON.stringify(t));
      } catch (e) {
        return (
          (apn.localStorage.error.code = 2),
          (apn.localStorage.error.msg =
            apn.localStorage.$O2u[apn.localStorage.error.code]),
          !1
        );
      }
      return !0;
    }
    return (
      (apn.localStorage.error.code = 1),
      (apn.localStorage.error.msg =
        apn.localStorage.$O2u[apn.localStorage.error.code]),
      !1
    );
  }),
  (apn.localStorage.remove = function (e) {
    var t;
    try {
      t = window.localStorage;
    } catch (e) {}
    t && t.removeItem(e);
  }),
  (apn.localStorage.check = function (e) {
    var t;
    try {
      t = window.localStorage;
    } catch (e) {}
    return !(!t || null === t.getItem(e));
  }),
  (apn.UTIL = {
    isBoolean: function (e) {
      return "boolean" == typeof e;
    },
    isNumber: function (e) {
      return !isNaN(e);
    },
    isString: function (e) {
      return "string" == typeof e;
    },
    isPrimitive: function (e) {
      return this.isString(e) || this.isNumber(e) || this.isBoolean(e);
    },
    isArray: function (e) {
      return (
        "object" == typeof e &&
        (void 0 !== e.length ||
          (Array.isArray
            ? Array.isArray(e)
            : "[object Array]" === Object.prototype.toString.call(e)))
      );
    },
    isObject: function (e) {
      return "[object Object]" === Object.prototype.toString.call(e);
    },
    isEmpty: function (e) {
      return (
        void 0 === e ||
        null === e ||
        ("function" != typeof e &&
          (this.isArray(e)
            ? 0 == e.length
            : this.isObject(e)
            ? 0 == Object.keys(e).length
            : (this.isPrimitive(e), !1)))
      );
    },
    sort: function (e, t, a, i, n) {
      function r(e, i, n) {
        return (
          (c = ""),
          (g = ""),
          (s = t[n]),
          (p = a[n] || 1),
          void 0 === s
            ? 0
            : ((c = e[s] && e[s].toUpperCase ? e[s].toUpperCase() : e[s]),
              (g = i[s] && i[s].toUpperCase ? i[s].toUpperCase() : i[s]),
              null === c && g
                ? 1 * d
                : c && null === g
                ? -1 * d
                : void 0 === c && g
                ? 1 * l
                : c && void 0 === g
                ? -1 * l
                : void 0 === c && null === g
                ? 1
                : null === c && void 0 === g
                ? -1
                : c > g
                ? 1 * p
                : c < g
                ? -1 * p
                : c == g
                ? r(e, i, n + 1) * p
                : void 0)
        );
      }
      function o(e, t) {
        return r(e, t, 0);
      }
      var s, p, l, d, c, g;
      this.isEmpty(t) ||
        this.isEmpty(a) ||
        ((t = this.isPrimitive(t) ? [t] : t),
        (a = this.isPrimitive(a) ? [a] : a),
        (d = n ? 1 : -1),
        (l = i ? 1 : -1),
        e.sort(o));
    },
  }),
  (apn.UTIL.printURL = function (e, t) {
    function a() {
      n.parentNode && n.parentNode.removeChild(n), t && t(!0);
    }
    function i() {
      var e;
      try {
        (e = this.contentWindow), (e.onbeforeunload = a), (e.onafterprint = a);
      } catch (e) {
        return void (t && t(!1, e));
      }
      if (e.matchMedia) {
        var i = e.matchMedia("print");
        i.addListener(function (e) {
          e.matches || setTimeout(a, 0);
        });
      }
      bx.HCL.DV.isIE() && e.focus(), e.print();
    }
    var n,
      r = document.body;
    (n = document.createElement("iframe")),
      r.appendChild(n),
      bx.Event.add(n, "load", i, !1),
      (n.style.position = "fixed"),
      (n.style.top = "-99999px"),
      (n.style.left = "-99999px"),
      (n.src = e);
  }),
  (apn.UTIL.printImgs = function (e, t) {
    function a() {
      try {
        n.parentNode && n.parentNode.removeChild(n);
      } catch (e) {}
      t && t(!0);
    }
    function i() {
      var e;
      try {
        (e = this.contentWindow || this),
          (e.onbeforeunload = a),
          (e.onafterprint = a);
      } catch (e) {
        return void (t && t(!1, e));
      }
      if (e.matchMedia) {
        var i = e.matchMedia("print");
        i.addListener(function (e) {
          e.matches || setTimeout(a, 0);
        });
      }
      bx.HCL.DV.isIE() && e.focus(), e.print();
    }
    var n,
      r = document.body;
    (n = document.createElement("IFRAME")),
      bx.HCL.DV.isIE() && n.addEventListener("load", i, !1),
      r.appendChild(n);
    var o = (n.contentWindow || n).document,
      s = "";
    o.open();
    for (var p = 0; p < e.length; p++)
      e[p] &&
        ((s += '<div style="'),
        (s +=
          "page-break-inside:avoid;overflow:hidden;position:relative;height:100%;background-color:#ffffff;"),
        (s += '"><img style="display:block;width:100%;" src="' + e[p] + '"/>'),
        (s += "</div>"));
    var l =
      '<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html;charset=utf-8"/><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>';
    o.write(
      l +
        '<style>@page{margin:0 0 0 0;}</style></head><body style="padding:0;margin:0;">' +
        s +
        "</body></html>"
    ),
      o.close(),
      bx.HCL.DV.isIE() || n.addEventListener("load", i, !1),
      (n.style.position = "fixed"),
      (n.style.top = "-99999px"),
      (n.style.left = "-99999px");
  }),
  (apn.UTIL.downloadURL = function (e, t, a) {
    var i = bx.UX.domBuffer || document.body,
      n = document.createElement("a");
    (n.href = e),
      n.setAttribute("target", "_blank"),
      "download" in n && n.setAttribute("download", t || "download"),
      (n.style.display = "none"),
      i.appendChild(n),
      setTimeout(function () {
        n.click(), i.removeChild(n), a && a(!0);
      }, 1);
  }),
  (apn.UTIL.toRGBA = function (e) {
    var t = { r: 0, g: 0, b: 0, a: 1 };
    if (e && 7 == e.length && "#" == e[0])
      (t.r = parseInt(e.substring(1, 3), 16)),
        (t.g = parseInt(e.substring(3, 5), 16)),
        (t.b = parseInt(e.substring(5, 7), 16));
    else if (e && e.indexOf && 0 == e.indexOf("rgba(")) {
      var a = e.substring(5).split(",");
      a.length >= 4 &&
        ((t.r = bx.$checkNaN(parseInt(a[0]))),
        (t.g = bx.$checkNaN(parseInt(a[1]))),
        (t.b = bx.$checkNaN(parseInt(a[2]))),
        (t.a = bx.$checkNaN(parseFloat(a[3]))));
    }
    return t;
  }),
  (window.apn = window.apn || {}),
  (apn.inheritWidget = function (e) {
    var t = [
        "createAsCanvasObject",
        "createByEditor",
        "exeCreateTag",
        "exeRenderTag",
        "edtOnConfig",
        "onEdit",
        "edtOnPostDraw",
        "edtOnDraw",
        "edtOnPreClipDraw",
        "edtOnPostCreate",
        "edtOnSetState",
        "edtOnSetProperty",
        "edtOnRemoveResource",
        "edtOnRemoveAsset",
        "edtOnReplaceAsset",
        "edtOnBuildEvent",
        "edtOnBuildState",
        "edtOnExeDataChange",
        "edtOnRemapObjectID",
        "edtOnBuildRuntimeProperty",
        "edtOnBuildProperty",
        "edtOnPreloadAsset",
        "edtOnFitToSize",
        "edtOnInputGet",
        "edtOnCheckContentChange",
        "edtOnCheckEdited",
        "exeAssetLoad",
        "exeAssetPreload",
        "exeMediaPlay",
        "exeMediaPause",
        "exeMediaStop",
        "exeMediaSeek",
        "exeMediaControl",
        "exeMediaInfo",
        "exeMediaCheck",
        "exeMediaSupportTrack",
        "exeSetState",
        "exeInputGet",
        "exeInputSet",
        "exePropGet",
        "exePropSet",
        "exeOnStart",
        "exeOnResume",
        "exeOnPause",
        "exeOnPagePreLoad",
        "exeOnTick",
        "exeOnLoad",
        "exeOnPreLinkToPage",
        "exeOnShow",
        "exeOnVisibilityChange",
        "exeOnDestroy",
        "exeOnScale",
        "exeOnScale2",
        "exeOnScreenRefresh",
        "exeOnScreenDrag",
        "exeOnScreenVisibility",
        "exeOnReceiveMessage",
        "exeOnScreenFull",
        "exeOnForceStyle",
        "exeOnPageRun",
        "exeOnModifyLayer",
      ],
      a = ["exeItrNoText", "exeItrNoTapStart"],
      i = {};
    e.styleMap && (i.styleMap = bx.$copyObject({}, e.styleMap)),
      e.properties && (i.properties = bx.$copyObject({}, e.properties)),
      e.styles && (i.styles = bx.$copyObject({}, e.styles)),
      e.editor && (i.editor = bx.$copyObject({}, e.editor)),
      e.scriptInfo && (i.scriptInfo = bx.$copyObject({}, e.scriptInfo)),
      e.events && (i.events = bx.$copyObject([], e.events)),
      e.BLACKBOX_MODEL && (i.BLACKBOX_MODEL = !0),
      e.CMedia && (i.CMedia = bx.$copyObject({}, e.CMedia));
    for (var n = 0; n < t.length; n++) e[t[n]] && (i[t[n]] = e[t[n]]);
    for (n = 0; n < a.length; n++) void 0 !== e[a[n]] && (i[a[n]] = e[a[n]]);
    return (i.parentClass = e), i;
  }),
  (apn.edtInheritWidget = function (e, t) {
    var a = [
      "createAsCanvasObject",
      "createByEditor",
      "edtOnConfig",
      "onEdit",
      "edtOnPostDraw",
      "edtOnDraw",
      "edtOnPostCreate",
      "edtOnSetState",
      "edtOnSetProperty",
      "edtOnRemoveResource",
      "edtOnRemoveAsset",
      "edtOnReplaceAsset",
      "edtOnExeDataChange",
      "edtOnBuildProperty",
      "edtOnPreloadAsset",
      "edtOnFitToSize",
      "edtOnInputGet",
      "edtOnCheckEdited",
    ];
    t.scriptInfo && (e.scriptInfo = bx.$copyObject({}, t.scriptInfo)),
      t.CMedia && (e.CMedia = bx.$copyObject({}, t.CMedia));
    for (var i = 0; i < a.length; i++) t[a[i]] && (e[a[i]] = t[a[i]]);
  }),
  (apn.IWidget = {}),
  (apn.IWidget.getCanvasObjectStyle = function (e, t, a, i, n) {
    var r =
        apn.theme[a.layouts[a.CTXT.layoutID].property.themeID].styles.normal,
      o = a.layouts[a.CTXT.layoutID].property.styles.normal;
    e = e || {};
    var s;
    for (s in r) void 0 !== t.styleMap[s] && (e[s] = r[s]);
    for (s in o) void 0 !== t.styleMap[s] && (e[s] = o[s]);
    if (i)
      for (s in i) void 0 !== t.styleMap[s] && void 0 !== i[s] && (e[s] = i[s]);
    return t.exeOnForceStyle && t.exeOnForceStyle(a, e), e;
  }),
  (apn.IWidget.createCanvasObject = function (e, t, a, i, n, r, o, s, p, l) {
    var d = {};
    return (
      (l = l || 0),
      (d.module = a),
      (d.create = {
        type:
          512 |
          l |
          (i != bx.CCanvasWnd.SHAPE_LINE || (o && o.keepRatio) ? 0 : 256),
        style: apn.IWidget.getCanvasObjectStyle({}, t, e, o),
      }),
      (d.init = { position: n, shape: { type: i } }),
      p && (d.data = { local: p }),
      i == bx.CCanvasWnd.SHAPE_LINE
        ? ((d.init.shape.x = [0, r.w]), (d.init.shape.y = [0, r.h]))
        : ((d.init.shape.w = r.w), (d.init.shape.h = r.h)),
      d
    );
  }),
  (apn.IWidget.exeGetTrOrigin = function (e, t, a) {
    return e
      ? ((((t || 0) + e.shape.w / 2) / e.shape.w) * 100).toFixed(1) +
          "% " +
          ((((a || 0) + e.shape.h / 2) / e.shape.h) * 100).toFixed(1) +
          "%"
      : "50% 50%";
  }),
  (apn.IWidget.exeSetAngle = function (e, t, a, i, n, r, o) {
    if (((t = bx.$checkNaN(parseFloat(t))), !r)) {
      var s = apn.IWidget.exeGetTrOrigin(a, i, n);
      if (
        void 0 !== e.apnCur.angle &&
        t == e.apnCur.angle &&
        void 0 !== e.apnCur.trOrigin &&
        s == e.apnCur.trOrigin
      )
        return;
    }
    apn.CES.transformSet(e, "rotate", bx.CCanvasWnd.radToDegree(t)),
      r || apn.CES.transformSet(e, "origin", s),
      apn.CES.transformApply(e),
      (e.apnCur.angle = t),
      r || ((e.apnCur.trOrigin = s), (e.apnCur.trCX = i), (e.apnCur.trCY = n)),
      o && ((e.apnCur.apxColDectectOn = !0), (o._apxColDectectOn = !0));
  }),
  (apn.IWidget.exeSetAlpha = function (e, t) {
    0 === t || t ? (e.style.opacity = t) : (e.style.opacity = 1);
  }),
  (apn.IWidget.exeSetCursor = function (e, t, a) {
    if (apn.dbUI && apn.dbUI.system && apn.dbUI.system.exeNoSetCursor);
    else {
      if (
        ((e.apnCur = e.apnCur || {}),
        (e.apnCur.orgCursor = t),
        "apn.auto" == t &&
          (t =
            e.apnBlockPointerEvent ||
            (e.apnPassPointerEvent && !e.apnPassPointerEventButHit) ||
            (!e.apnTapCsr && !e.apnDragCsr)
              ? "inherit"
              : "pointer"),
        a)
      )
        return t;
      void 0 === e.apxCursorBackup
        ? ((e.style.cursor = t), void 0 !== e.apnHitCsr && (e.apnHitCsr = t))
        : (e.apxCursorBackup = t),
        (e.apnCur.cursor = t);
    }
  }),
  (apn.IWidget.exeSetLine = function (e, t, a, i, n) {
    var r = !0;
    if (e.apxRefreshOnStrokeChange) {
      if (
        n &&
        n.screen &&
        e.apnOID &&
        n.screen.objects[e.apnOID] &&
        n.screen.objects[e.apnOID].create.data
      ) {
        var o = apn.Project.getWidgetModule(
          n.screen.objects[e.apnOID].create.data
        );
        o &&
          o.exeRenderTag &&
          o.exeRenderTag(
            n.viewer,
            n,
            e,
            n.screen.objects[e.apnOID],
            1 / n.getZoomX(),
            1 / n.getZoomY()
          );
      }
    } else
      t && a
        ? e._apxLineHeight
          ? ((e.style.height = Math.max(1, Math.round(parseInt(t) * i)) + "px"),
            (e.style.backgroundColor = apn.CES.$O6l(a)))
          : e.apxLineBorderTop
          ? ((e.style.borderTopWidth =
              Math.max(1, Math.round(parseInt(t) * i)) + "px"),
            (e.style.borderTopColor = apn.CES.$O6l(a)))
          : ((e.style.borderWidth =
              Math.max(1, Math.round(parseInt(t) * i)) + "px"),
            (e.style.borderColor = apn.CES.$O6l(a)))
        : e._apxLineHeight
        ? (e.style.height = "0px")
        : (e.style.borderWidth = "0px");
    return (
      void 0 !== e.apnCur.lineWidth &&
        t == e.apnCur.lineWidth &&
        void 0 !== e.apnCur.strokeStyle &&
        a == e.apnCur.strokeStyle &&
        (r = !1),
      (e.apnCur.lineWidth = t),
      (e.apnCur.strokeStyle = a),
      r
    );
  }),
  (apn.IWidget.exeSetLineDash = function (e, t, a) {
    if (e.apxRefreshOnStrokeChange) {
      if (
        a &&
        a.screen &&
        e.apnOID &&
        a.screen.objects[e.apnOID] &&
        a.screen.objects[e.apnOID].create.data
      ) {
        var i = apn.Project.getWidgetModule(
          a.screen.objects[e.apnOID].create.data
        );
        i &&
          i.exeRenderTag &&
          i.exeRenderTag(
            a.viewer,
            a,
            e,
            a.screen.objects[e.apnOID],
            1 / a.getZoomX(),
            1 / a.getZoomY()
          );
      }
    } else {
      if (e._apxLineHeight) return;
      var n = "solid";
      t && (n = 2 == t.length && t[0] == t[1] ? "dotted" : "dashed"),
        e.apxLineBorderTop
          ? (e.style.borderTopStyle = n)
          : (e.style.borderStyle = n);
    }
  }),
  (apn.IWidget.exeSetFillStyle = function (e, t, a) {
    if (e.apxRefreshOnStrokeChange) {
      if (
        a &&
        a.screen &&
        e.apnOID &&
        a.screen.objects[e.apnOID] &&
        a.screen.objects[e.apnOID].create.data
      ) {
        var i = apn.Project.getWidgetModule(
          a.screen.objects[e.apnOID].create.data
        );
        i &&
          i.exeRenderTag &&
          i.exeRenderTag(
            a.viewer,
            a,
            e,
            a.screen.objects[e.apnOID],
            1 / a.getZoomX(),
            1 / a.getZoomY()
          );
      }
    } else
      t && apn.CES.$O6k(t)
        ? e.$CSS(
            "filter",
            bx.$applyMsFilter(e, "backgroundAlpha", apn.CES.$O6k(t))
          )
        : (e.style.backgroundColor = t ? apn.CES.$O6l(t) : "transparent");
    e.tagOnPostSetFillStyle && e.tagOnPostSetFillStyle(e, t);
  }),
  (apn.IWidget.calcLtrSp = function (e, t, a) {
    return e * a;
  }),
  (apn.IWidget.exeSetText = function (e, t, a, i, n, r, o, s, p, l, d, c, g) {
    !e.apnCur.apxTextApplied &&
      e.apnCur._apxTextStack &&
      apn.IWidget.exeApplyText(
        e.apnCur._apxTextStack.data,
        e.apnCur._apxTextStack.styles,
        e,
        e.apnCur._apxTextStack.zx,
        e.apnCur._apxTextStack.zy
      ),
      t || (0 === t ? (t += "") : (t = "")),
      (e.apnCur.forced || void 0 === e.apnCur.text || t != e.apnCur.text) &&
        ((e.apnCur.forced = !1),
        void 0 === e.textTag
          ? e.apnSingleText
            ? apn.widgets["apn.wgt.singleText"].exeSetText(
                e,
                t,
                a,
                i,
                n,
                r,
                o,
                s,
                p,
                l,
                d
              )
            : e.apxInputTag
            ? ((e.apxInputTag.placeholder = t),
              e.apnOnSetText && e.apnOnSetText(e, t, a, i, n, r, o, d, c, g))
            : "DIV" == e.tagName
            ? bx.DOM.setText(e, apn.IWidget.exeFormatText(t))
            : "INPUT" == e.tagName && (e.value = t)
          : e.apnOnSetText
          ? e.apnOnSetText(e, t, a, i, n, r, o, d, c, g)
          : apn.widgets["apn.wgt.rect"].exeSetText(
              e,
              t,
              a,
              i,
              n,
              r,
              o,
              d,
              c,
              g
            ),
        e.apnOnPostSetText && e.apnOnPostSetText(e, t, a, i, n, r, o, d, c, g),
        (e.apnCur.text = t));
  }),
  (apn.IWidget.exeSetFontStyle = function (e, t) {
    (void 0 !== e.apnCur.fontStyle && t == e.apnCur.fontStyle) ||
      ((e.style.color = apn.CES.$O6l(t)), (e.apnCur.fontStyle = t));
  }),
  (apn.IWidget.$Obv = function (e, t, a) {
    t && (e.style.fontSize = Math.round(parseInt(t) * a) + "px");
  }),
  (apn.IWidget.$Obx = function (e, t) {
    t ? (e.style.fontStyle = "italic") : (e.style.fontStyle = "normal");
  }),
  (apn.IWidget.$Obw = function (e, t, a) {
    !t || (a && !apn.CExe.fontHasBold(a))
      ? (e.style.fontWeight = "normal")
      : (e.style.fontWeight = "bold");
  }),
  (apn.IWidget.$Oby = function (e, t) {
    t
      ? (e.style.textDecoration = "underline")
      : ((e.style.textDecoration = "none"), (e.$ObB = !1));
  }),
  (apn.IWidget.exeSetZIndex = function (e, t) {
    e.style.zIndex != t && ((e.style.zIndex = t), (e.apnCur.zIndex = t));
  }),
  (apn.IWidget.exeRenderSize = function (e, t, a, i, n, r, o, s, p) {
    if (i.init.shape.type != bx.CCanvasWnd.SHAPE_RECT)
      return void bx.Trace.log(
        "APN",
        "warning",
        "Tried to resize non-rect type widget.",
        "IWidget.exeRenderSize"
      );
    if (a.REFRESH_ON_RESIZE && !p) t.$O3x(a.apnOID);
    else {
      var l =
          (Math.round(i.init.position.x) * r -
            Math.round(Math.round(i.init.position.x) * r)) /
          r,
        d =
          (Math.round(i.init.position.y) * o -
            Math.round(Math.round(i.init.position.y) * o)) /
          o;
      if (bx.HCL.DV.isIE() && bx.HCL.DV.isIE() <= 7)
        var c = Math.max(
            0,
            apn.widgets.utils.$O2v(i.init.shape.w + l, r) +
              apn.IWidget.$O2z(1, n, i, r) -
              apn.CES.$O5w(a)
          ),
          g = Math.max(
            0,
            apn.widgets.utils.$O2w(i.init.shape.h + d, o) +
              apn.IWidget.$O2z(1, n, i, o) -
              apn.CES.$O5y(a)
          );
      else
        var c = Math.max(
            0,
            apn.widgets.utils.$O2v(i.init.shape.w + l, r) +
              apn.IWidget.$O2z(1, n, i, r)
          ),
          g = Math.max(
            0,
            apn.widgets.utils.$O2w(i.init.shape.h + d, o) +
              apn.IWidget.$O2z(1, n, i, o)
          );
      if (s && c == parseInt(a.style.width) && g == parseInt(a.style.height))
        return;
      (a.style.width = c + "px"),
        (a.style.height = g + "px"),
        (a.apnLW = apn.IWidget.$O2z(1, n, i, r)),
        a.REFRESH_ON_RESIZE ||
          ("CANVAS" != a.tagName && "IFRAME" != a.tagName) ||
          (a.width == c && a.height == g) ||
          ((a.width = c), (a.height = g));
    }
    a.tagOnPostResize && a.tagOnPostResize(t, a),
      a.apnCur && (a.apnCur.apxColDectectOn = !0),
      (t._apxColDectectOn = !0);
  }),
  (apn.IWidget.exeRenderPosition = function (e, t, a, i, n, r, o) {
    if (a.init.shape.type == bx.CCanvasWnd.SHAPE_LINE) {
      var s = apn.Project.getWidgetModule(a.create.data);
      s && s.exeRenderTag && s.exeRenderTag(e.viewer, e, t, a, n, r);
    } else {
      var p = 0;
      a.create.data &&
        a.create.data.styles &&
        (t.apnCur.LW &&
        t.apnCur.LW.lineWidth == a.create.data.styles.lineWidth &&
        t.apnCur.LW.strokeStyle == a.create.data.styles.strokeStyle
          ? (p = t.apnCur.LW.value)
          : ((t.apnCur.LW = t.apnCur.LW || {}),
            (t.apnCur.LW.lineWidth = a.create.data.styles.lineWidth),
            (t.apnCur.LW.strokeStyle = a.create.data.styles.strokeStyle),
            (t.apnCur.LW.value = apn.IWidget.$O2z(2, i, a, n)),
            (p = t.apnCur.LW.value)));
      var l =
          apn.widgets.utils.$O2x(e, t, a.init.position.x, n) -
          p -
          (t.wgt_dx ? t.wgt_dx : 0) +
          "px",
        d =
          apn.widgets.utils.$O2y(e, t, a.init.position.y, r) -
          p -
          (t.wgt_dy ? t.wgt_dy : 0) +
          "px";
      t.style.left != l && (t.style.left = l),
        t.style.top != d && (t.style.top = d),
        o &&
          (t.REFRESH_ON_RESIZE ||
            apn.IWidget.exeRenderSize(e.viewer, e, t, a, i, n, r, !0));
    }
    t.tagOnPostMove && t.tagOnPostMove(e, t),
      t.apnCur && (t.apnCur.apxColDectectOn = !0),
      (e._apxColDectectOn = !0);
  }),
  (apn.IWidget.$O2z = function (e, t, a, i) {
    var n;
    if (
      (n = apn.Project.getWidgetModule(a.create.data)) &&
      a.create.data.styles &&
      void 0 !== n.styleMap.lineWidth &&
      void 0 !== n.styleMap.strokeStyle
    ) {
      var r = apn.Project.resolveStyle(
        t,
        "lineWidth",
        a.create.data.styles.lineWidth,
        !0
      );
      if (
        r > 1 &&
        apn.Project.resolveStyle(
          t,
          "strokeStyle",
          a.create.data.styles.strokeStyle,
          !0
        )
      )
        return Math.floor(Math.ceil(parseInt(r) * i) / e);
    }
    return 0;
  }),
  (apn.IWidget.exeCalcLW = apn.IWidget.$O2z),
  (apn.IWidget.$O3R = function (e, t, a) {
    return t.lineWidth && t.strokeStyle
      ? Math.floor(Math.ceil(parseInt(t.lineWidth) * a) / e)
      : 0;
  });
apn.IWidget.exeApplyCSSpre = function (e, t, a, i, n, r, o, s, p) {
  apn.IWidget.$O6w(t, a, r, o, s, p, e),
    apn.IWidget.exeSetFontStyle(a, t.fontStyle),
    apn.IWidget.exeSetAlpha(a, t.alpha);
};
(apn.IWidget.exeApplyCSSpost = function (e, t, a, i, n, r, o, s, p) {
  apn.IWidget.$O6x(t, a, s, p),
    void 0 !== t.angle &&
      apn.IWidget.exeSetAngle(
        a,
        t.angle,
        e.init,
        e.init.cx || 0,
        e.init.cy || 0
      ),
    apn.IWidget.exeSetText(
      a,
      t.text,
      t.textValign || "middle",
      t.textAlign,
      t.textMultiLine,
      t.textWordWrap,
      t.font,
      t.lineWidth,
      t.strokeStyle,
      t.fillStyle,
      apn.IWidget.calcLtrSp(t.ltrSp, t.fontSize, p),
      t.lnSp * p,
      parseInt(t.fontSize) * p
    );
}),
  (apn.IWidget.exeApplyText = function (e, t, a, i, n) {
    (a.apnCur.apxTextApplied = !0),
      apn.IWidget.exeSetText(
        a,
        t.text,
        t.textValign || "middle",
        t.textAlign,
        t.textMultiLine,
        t.textWordWrap,
        t.font,
        t.lineWidth,
        t.strokeStyle,
        t.fillStyle,
        apn.IWidget.calcLtrSp(t.ltrSp, t.fontSize, n),
        t.lnSp * n,
        parseInt(t.fontSize) * n
      );
  }),
  (apn.IWidget.$O6w = function (e, t, a, i, n, r, o) {
    if (
      (apn.IWidget.exeSetLine(t, e.lineWidth, e.strokeStyle, n), e.textPadding)
    ) {
      var s = Math.min(i / 2, Math.min(a / 2, e.textPadding));
      t.style.padding = Math.floor(s * n) + "px";
    }
    if (
      o &&
      o.create.data &&
      o.create.data.properties &&
      o.create.data.properties.attrs &&
      o.create.data.properties.attrs.apnPadding
    ) {
      for (
        var p = o.create.data.properties.attrs.apnPadding + "",
          l = p.split(" "),
          d = 0;
        d < l.length;
        d++
      )
        l[d] = parseInt(l[d]) || 0;
      if (1 == l.length) {
        var s = Math.min(i / 2, Math.min(a / 2, l[0]));
        (t.apnPadding = !0), (t.style.padding = Math.floor(s * n) + "px");
      } else if (2 == l.length) {
        var c = Math.min(i / 2, l[0]),
          g = Math.min(a / 2, l[1]);
        (t.apnPadding = !0),
          (t.style.padding =
            Math.floor(c * r) + "px " + Math.floor(g * n) + "px");
      } else if (3 == l.length) {
        var u =
            l[0] + l[2] && l[0] + l[2] >= i
              ? Math.floor(l[0] * (i / (l[0] + l[2])))
              : l[0],
          h =
            l[0] + l[2] && l[0] + l[2] >= i
              ? Math.floor(l[2] * (i / (l[0] + l[2])))
              : l[2],
          g = Math.min(a / 2, l[1]);
        (t.apnPadding = !0),
          (t.style.padding =
            Math.floor(u * r) +
            "px " +
            Math.floor(g * n) +
            "px " +
            Math.floor(h * r) +
            "px");
      } else if (l.length >= 4) {
        var u =
            l[0] + l[2] && l[0] + l[2] >= i
              ? Math.floor(l[0] * (i / (l[0] + l[2])))
              : l[0],
          h =
            l[0] + l[2] && l[0] + l[2] >= i
              ? Math.floor(l[2] * (i / (l[0] + l[2])))
              : l[2],
          x =
            l[1] + l[3] && l[1] + l[3] >= a
              ? Math.floor(l[1] * (a / (l[1] + l[3])))
              : l[1],
          f =
            l[1] + l[3] && l[1] + l[3] >= a
              ? Math.floor(l[3] * (a / (l[1] + l[3])))
              : l[3];
        (t.apnPadding = !0),
          (t.style.padding =
            Math.floor(u * r) +
            "px " +
            Math.floor(x * n) +
            "px " +
            Math.floor(h * r) +
            "px " +
            Math.floor(f * n) +
            "px");
      }
    }
  }),
  (apn.IWidget.$O6x = function (e, t, a, i) {
    if (
      (apn.IWidget.exeSetFillStyle(t, e.fillStyle),
      void 0 === t.textTag && (t.style.textAlign = e.textAlign || "center"),
      e.lineWidth && e.strokeStyle && apn.IWidget.exeSetLineDash(t, e.lineDash),
      e.borderRadiusTopLeft
        ? t.$CSS(
            "borderTopLeftRadius",
            Math.max(1, Math.round(parseInt(e.borderRadiusTopLeft) * a)) + "px"
          )
        : void 0 !== e.borderRadiusTopLeft &&
          t.$CSS("borderTopLeftRadius", "0"),
      e.borderRadiusTopRight
        ? t.$CSS(
            "borderTopRightRadius",
            Math.max(1, Math.round(parseInt(e.borderRadiusTopRight) * a)) + "px"
          )
        : void 0 !== e.borderRadiusTopRight &&
          t.$CSS("borderTopRightRadius", "0"),
      e.borderRadiusBottomLeft
        ? t.$CSS(
            "borderBottomLeftRadius",
            Math.max(1, Math.round(parseInt(e.borderRadiusBottomLeft) * a)) +
              "px"
          )
        : void 0 !== e.borderRadiusBottomLeft &&
          t.$CSS("borderBottomLeftRadius", "0"),
      e.borderRadiusBottomRight
        ? t.$CSS(
            "borderBottomRightRadius",
            Math.max(1, Math.round(parseInt(e.borderRadiusBottomRight) * a)) +
              "px"
          )
        : void 0 !== e.borderRadiusBottomRight &&
          t.$CSS("borderBottomRightRadius", "0"),
      e.font && (t.style.fontFamily = e.font),
      e.fontSize && apn.IWidget.$Obv(t, e.fontSize, i),
      apn.IWidget.exeSetCursor(t, e.csr || "inherit"),
      apn.IWidget.$Obx(t, e.fontItalic),
      apn.IWidget.$Obw(t, e.fontBold, e.font),
      apn.IWidget.$Oby(t, e.fontUnderlined),
      e.fontStrokeStyle && e.fontStrokeWidth)
    ) {
      var n = 1;
      Math.round(e.fontStrokeWidth * a) > 1 && (n = 2),
        t.$CSS(
          "textShadow",
          "-1px -1px " +
            (n - 1) +
            "px " +
            apn.CES.$O6l(e.fontStrokeStyle) +
            ", 1px -1px " +
            (n - 1) +
            "px " +
            apn.CES.$O6l(e.fontStrokeStyle) +
            ", -1px 1px " +
            (n - 1) +
            "px " +
            apn.CES.$O6l(e.fontStrokeStyle) +
            ", 1px 1px " +
            (n - 1) +
            "px " +
            apn.CES.$O6l(e.fontStrokeStyle) +
            ", 0px -1px " +
            (n - 1) +
            "px " +
            apn.CES.$O6l(e.fontStrokeStyle) +
            ", 0px 1px " +
            (n - 1) +
            "px " +
            apn.CES.$O6l(e.fontStrokeStyle) +
            ", -1px 0px " +
            (n - 1) +
            "px " +
            apn.CES.$O6l(e.fontStrokeStyle) +
            ", 1px 0px " +
            (n - 1) +
            "px " +
            apn.CES.$O6l(e.fontStrokeStyle)
        );
    } else t.$CSS("textShadow", "none");
  }),
  (apn.IWidget.exeFormatText = function (e, t) {
    if (((e += ""), !e)) return e;
    if (
      "application/xhtml+xml" == document.contentType ||
      document.xmlVersion ||
      (t && t.xml)
    ) {
      var a =
        /[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm;
      e = e.replace(a, "?");
    } else e = e.replace(/\u000b/g, "");
    return (
      0 == e.indexOf("[[HTML]]")
        ? (e = e.substring(8))
        : ((e = e
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/\'/g, "&apos;")
            .replace(/\"/g, "&quot;")
            .replace(/>/g, "&gt;")),
          (t && t.noTag) || (e = e.replace(/\n/g, "<br/>"))),
      e
    );
  }),
  (apn.IWidget.exeApplyLineDash = function (e, t, a) {
    if (e.setLineDash)
      if (((e.$O2B = e.$O2B || []), t && t instanceof Array)) {
        e.$O2B.length = t.length;
        for (var i = 0; i < t.length; i++) e.$O2B[i] = t[i] * a;
        e.setLineDash(e.$O2B);
      } else (e.$O2B.length = 0), e.setLineDash(e.$O2B);
  }),
  (apn.IWidget.hasMediaControl = function (e, t) {
    var a;
    return !!(
      (a = e.screen.objects[t.apnOID]) &&
      a.create.data &&
      a.create.data.properties &&
      a.create.data.properties.attrs &&
      a.create.data.properties.attrs.apxMediaControl
    );
  }),
  (apn.IWidget.isInAnimation = function (e, t) {
    for (var a, i = e.wgtTag(t), n = i.apnParentOID; n; ) {
      if ((a = e.screen.objects[n].create.data)) {
        if ("apn.wgt.sceneContainer" == a.wgtID) return !0;
        if (a.properties && a.properties.attrs && a.properties.attrs.apxAnimate)
          return !0;
        if (
          a.properties &&
          a.properties.attrs &&
          a.properties.attrs.apxAnimateHolder
        )
          return !0;
      }
      n = e.wgtTag(n).apnParentOID;
    }
    return !1;
  }),
  (apn.IWidget.exeRenderTagV1 = function (e, t, a, i, n, r, o) {
    var s = apn.IWidget.getCanvasObjectStyle(
      {},
      this,
      e.project,
      i.create.data.styles
    );
    return (
      o && o(s),
      apn.IWidget.exeApplyCSSpre(
        i,
        s,
        a,
        apn.widgets.utils.$O2x(t, a, i.init.position.x, n),
        apn.widgets.utils.$O2y(t, a, i.init.position.y, r),
        apn.widgets.utils.$O2v(i.init.shape.w, n),
        apn.widgets.utils.$O2w(i.init.shape.h, r),
        n,
        r
      ),
      apn.IWidget.exeRenderSize(e, t, a, i, e.project, n, r),
      apn.IWidget.exeRenderPosition(t, a, i, e.project, n, r),
      apn.IWidget.exeApplyCSSpost(
        i,
        s,
        a,
        apn.widgets.utils.$O2x(t, a, i.init.position.x, n),
        apn.widgets.utils.$O2y(t, a, i.init.position.y, r),
        apn.widgets.utils.$O2v(i.init.shape.w, n),
        apn.widgets.utils.$O2w(i.init.shape.h, r),
        n,
        r
      ),
      s
    );
  }),
  (apn.IWidget.exeRenderTagV2 = function (e, t, a, i, n, r, o) {
    var s = apn.IWidget.htmlRender(
      this,
      e.project,
      t.getPageID(),
      a.apnOID,
      void 0,
      o,
      t
    );
    return (
      (a.style.cssText = "position:absolute;box-sizing:border-box;" + s.css),
      apn.IWidget.exeSetAngle(
        a,
        s.style.angle,
        i.init,
        i.init.cx || 0,
        i.init.cy || 0,
        void 0,
        t
      ),
      s.style.text && apn.IWidget.exeApplyText(i, s.style, a, n, r),
      s
    );
  }),
  (apn.IWidget.exeRenderTagVhtml = function (e, t, a, i, n, r) {
    var o = apn.IWidget.getCanvasObjectStyle(
      {},
      this,
      e.project,
      i.create.data.styles
    );
    return (
      o.csr && "inherit" != o.csr && apn.IWidget.exeSetCursor(a, o.csr),
      apn.IWidget.exeSetAngle(
        a,
        o.angle,
        i.init,
        i.init.cx || 0,
        i.init.cy || 0,
        void 0,
        t
      ),
      o
    );
  }),
  (apn.IWidget.htmlCoord = function (e, t, a, i, n, r, o, s) {
    var p = e.pages[t].objects[a];
    if (n)
      return "x" == i
        ? apn.widgets.utils.$O2x(
            n,
            r,
            e.pages[t].objects[a].init.position.x,
            o
          ) - apn.IWidget.$O2z(2, e, p, o)
        : apn.widgets.utils.$O2y(
            n,
            r,
            e.pages[t].objects[a].init.position.y,
            s
          ) - apn.IWidget.$O2z(2, e, p, s);
    var l;
    return (
      (l = apn.Project.findParentOf(e.pages[t], a, void 0, !0, !0)),
      Math.round(
        p.init.position[i] -
          apn.IWidget.$O2z(2, e, p, 1) -
          (l ? e.pages[t].objects[l].init.position[i] : 0)
      )
    );
  }),
  (apn.IWidget.htmlW = function (e, t, a, i) {
    var n =
      (Math.round(t.init.position.x) * i -
        Math.round(Math.round(t.init.position.x) * i)) /
      i;
    return Math.max(
      0,
      apn.widgets.utils.$O2v(t.init.shape.w + n, i) +
        apn.IWidget.$O2z(1, e, t, i)
    );
  }),
  (apn.IWidget.htmlH = function (e, t, a, i) {
    var n =
      (Math.round(t.init.position.y) * i -
        Math.round(Math.round(t.init.position.y) * i)) /
      i;
    return Math.max(
      0,
      apn.widgets.utils.$O2w(t.init.shape.h + n, i) +
        apn.IWidget.$O2z(1, e, t, i)
    );
  }),
  (apn.IWidget.htmlRender = function (e, t, a, i, n, r, o) {
    apn.CExe.TRACE && o && ((window._hCnt = window._hCnt || 0), window._hCnt++);
    var s = o ? 1 / o.getZoomX() : 1,
      p = o ? 1 / o.getZoomY() : 1,
      l = o ? o.wgtTag(i) : void 0,
      d = t.pages[a].objects[i],
      c = apn.IWidget.htmlW(t, d, o, s),
      g = apn.IWidget.htmlH(t, d, o, p),
      u = "";
    if (
      ((u +=
        "left:" +
        apn.IWidget.htmlCoord(t, a, i, "x", o, l, s, p) +
        "px;top:" +
        apn.IWidget.htmlCoord(t, a, i, "y", o, l, s, p) +
        "px;"),
      (u += "width:" + c + "px;height:" + g + "px;"),
      e)
    ) {
      var h = apn.Project.getLayout(t).property.CExe;
      u +=
        h && h.useZIndex2
          ? "z-index:" + d.create.zi2 + ";"
          : "z-index:" + d.create.zIndex + ";";
      var x = apn.IWidget.getCanvasObjectStyle({}, e, t, d.create.data.styles);
      if (r) for (var f in r) x[f] = r[f];
      if (n) for (var f in n) x[f] && delete x[f];
      if (!o && x.angle) {
        var y = apn.IWidget.exeGetTrOrigin(
          d.init,
          d.init.cx || 0,
          d.init.cy || 0
        );
        (u +=
          "transform:rotate(" +
          bx.CCanvasWnd.radToDegree(x.angle) +
          "deg);transform-origin:" +
          y +
          ";"),
          (u +=
            "-ms-transform:rotate(" +
            bx.CCanvasWnd.radToDegree(x.angle) +
            "deg);-ms-transform-origin:" +
            y +
            ";");
      }
      (0 !== x.alpha && !x.alpha) ||
        1 == x.alpha ||
        (u += "opacity:" + x.alpha + ";");
      var v = 0;
      if (
        d.create.data &&
        d.create.data.properties &&
        d.create.data.properties.attrs &&
        d.create.data.properties.attrs.apnPadding
      ) {
        for (
          var C = d.create.data.properties.attrs.apnPadding + "",
            b = C.split(" "),
            f = 0;
          f < b.length;
          f++
        )
          b[f] = parseInt(b[f]) || 0;
        if (1 == b.length) {
          var v = Math.min(
            d.init.shape.h / 2,
            Math.min(d.init.shape.w / 2, b[0])
          );
          u += "padding:" + Math.floor(v * s) + "px;";
        } else if (2 == b.length) {
          var _ = Math.min(d.init.shape.h / 2, b[0]),
            m = Math.min(d.init.shape.w / 2, b[1]);
          u +=
            "padding:" + Math.floor(_ * p) + "px " + Math.floor(m * s) + "px;";
        } else if (3 == b.length) {
          var I =
              b[0] + b[2] && b[0] + b[2] >= d.init.shape.h
                ? Math.floor(b[0] * (d.init.shape.h / (b[0] + b[2])))
                : b[0],
            S =
              b[0] + b[2] && b[0] + b[2] >= d.init.shape.h
                ? Math.floor(b[2] * (d.init.shape.h / (b[0] + b[2])))
                : b[2],
            m = Math.min(d.init.shape.w / 2, b[1]);
          u +=
            "padding:" +
            Math.floor(I * p) +
            "px " +
            Math.floor(m * s) +
            "px " +
            Math.floor(S * p) +
            "px;";
        } else if (b.length >= 4) {
          var I =
              b[0] + b[2] && b[0] + b[2] >= d.init.shape.h
                ? Math.floor(b[0] * (d.init.shape.h / (b[0] + b[2])))
                : b[0],
            S =
              b[0] + b[2] && b[0] + b[2] >= d.init.shape.h
                ? Math.floor(b[2] * (d.init.shape.h / (b[0] + b[2])))
                : b[2],
            P =
              b[1] + b[3] && b[1] + b[3] >= d.init.shape.w
                ? Math.floor(b[1] * (d.init.shape.w / (b[1] + b[3])))
                : b[1],
            T =
              b[1] + b[3] && b[1] + b[3] >= d.init.shape.w
                ? Math.floor(b[3] * (d.init.shape.w / (b[1] + b[3])))
                : b[3];
          u +=
            "padding:" +
            Math.floor(I * p) +
            "px " +
            Math.floor(P * s) +
            "px " +
            Math.floor(S * p) +
            "px " +
            Math.floor(T * s) +
            "px;";
        }
      } else
        x.textPadding &&
          ((v = Math.floor(
            Math.min(
              d.init.shape.h / 2,
              Math.min(d.init.shape.w / 2, x.textPadding)
            ) * s
          )),
          (u += "padding:" + v + "px;"));
      var w = 0;
      if (x.lineWidth && x.strokeStyle) {
        var E = "solid";
        x.lineDash &&
          (E =
            2 == x.lineDash.length && x.lineDash[0] == x.lineDash[1]
              ? "dotted"
              : "dashed"),
          (w = Math.max(1, Math.round(parseInt(x.lineWidth) * s))),
          (u +=
            "border:" +
            E +
            " " +
            w +
            "px " +
            apn.CES.$O6l(x.strokeStyle) +
            ";");
      }
      if (
        (x.fillStyle &&
          "transparent" != x.fillStyle &&
          (u += "background-color:" + x.fillStyle + ";"),
        x.font &&
          (u +=
            "font:" +
            (x.fontItalic ? "italic " : "") +
            (!x.fontBold || (x.font && !apn.CExe.fontHasBold(x.font))
              ? ""
              : "bold ") +
            (x.fontSize ? Math.round(parseInt(x.fontSize) * p) + "px " : "") +
            x.font +
            ";"),
        x.fontUnderlined && (u += "text-decoration:underline;"),
        x.fontStyle && (u += "color:" + x.fontStyle + ";"),
        (x.borderRadiusTopLeft ||
          x.borderRadiusTopRight ||
          x.borderRadiusBottomLeft ||
          x.borderRadiusBottomRight) &&
          (u +=
            "border-radius:" +
            Math.round(parseInt(x.borderRadiusTopLeft) * s) +
            "px " +
            Math.round(parseInt(x.borderRadiusTopRight) * s) +
            "px " +
            Math.round(parseInt(x.borderRadiusBottomRight) * s) +
            "px " +
            Math.round(parseInt(x.borderRadiusBottomLeft) * s) +
            "px;"),
        x.visibility === !1 && (u += "display:none;"),
        x.fontStrokeStyle && x.fontStrokeWidth)
      ) {
        var V = 1;
        Math.round(x.fontStrokeWidth * s) > 1 && (V = 2),
          (u +=
            "text-shadow:-1px -1px " +
            (V - 1) +
            "px " +
            apn.CES.$O6l(x.fontStrokeStyle) +
            ", 1px -1px " +
            (V - 1) +
            "px " +
            apn.CES.$O6l(x.fontStrokeStyle) +
            ", -1px 1px " +
            (V - 1) +
            "px " +
            apn.CES.$O6l(x.fontStrokeStyle) +
            ", 1px 1px " +
            (V - 1) +
            "px " +
            apn.CES.$O6l(x.fontStrokeStyle) +
            ", 0px -1px " +
            (V - 1) +
            "px " +
            apn.CES.$O6l(x.fontStrokeStyle) +
            ", 0px 1px " +
            (V - 1) +
            "px " +
            apn.CES.$O6l(x.fontStrokeStyle) +
            ", -1px 0px " +
            (V - 1) +
            "px " +
            apn.CES.$O6l(x.fontStrokeStyle) +
            ", 1px 0px " +
            (V - 1) +
            "px " +
            apn.CES.$O6l(x.fontStrokeStyle) +
            ";");
      }
      if (
        (x.textAlign &&
          (o
            ? void 0 === l.textTag &&
              (u += "text-align:" + (x.textAlign || "center") + ";")
            : (u += "text-align:" + x.textAlign + ";")),
        o)
      ) {
        var j = apn.IWidget.exeSetCursor(l, x.csr || "inherit", !0);
        j && (u += "cursor:" + j + ";"),
          x.fontUnderlined || (l.$ObB = !1),
          (l.apnLW = w);
      }
    }
    return { css: u, style: x, w: c, h: g, lineWidth: w, padding: v };
  }),
  (apn.IWidget.htmlRenderText = function (e, t, a, i, n, r) {
    function o(e) {
      var t = 1.2;
      apn.fonts &&
        apn.fonts[e.font] &&
        void 0 !== apn.fonts[e.font].height &&
        (t = apn.fonts[e.font].height);
      var a = parseInt(e.fontSize) * p * t;
      return e.lnSp && (a += e.lnSp * p), a;
    }
    var s = r ? 1 / r.getZoomX() : 1,
      p = r ? 1 / r.getZoomY() : 1,
      l = "";
    return (
      (l += "word-wrap:break-word;"),
      n.style.ltrSp &&
        (l +=
          "letter-spacing:" +
          (parseFloat(n.style.ltrSp) * s).toFixed(3) +
          "px;"),
      (l +=
        n.style.textMultiLine && o(n.style)
          ? "line-height:" + o(n.style).toFixed(1) + "px;"
          : "line-height:" + (n.h - 2 * n.lineWidth) + "px;")
    );
  }),
  (window.apn = window.apn || {}),
  (apn.widgets = apn.widgets || { utils: {} });
var xa;
(xa = {}),
  (xa.apxTextPlainMulti = !0),
  (xa.apxTextAlignJustify = !0),
  (xa.apnWgtRectVer = 2),
  (xa.apnWgtRectDOM2 = !0),
  (xa.styleMap = {
    title: !0,
    visibility: !0,
    strokeStyle: !0,
    lineWidth: !0,
    lineDash: !0,
    fillStyle: !0,
    font: !0,
    fontSize: !0,
    fontStyle: !0,
    fontItalic: !0,
    fontBold: !0,
    textMultiLine: !0,
    fontUnderlined: !0,
    text: !0,
    textAlign: !0,
    textValign: !0,
    textPadding: !0,
    textWordWrap: !0,
    ltrSp: !0,
    lnSp: !0,
    fontStrokeStyle: !0,
    fontStrokeWidth: !0,
    alpha: !0,
    angle: !0,
    dragX: !0,
    dragY: !0,
    dragInParent: !0,
    dragContainParent: !0,
    csr: !0,
  }),
  (xa.editor = { placeHolder: "Double click to edit" }),
  (xa.properties = { ver: 2, attrs: { txtI: 0 } }),
  (xa.exeCreateTag = function (e, t, a, i, n, r) {
    var o;
    return (
      e.o.standAlone &&
      r &&
      (o = apn.CExe.getElementByAttr("div", "data-apx-id", r))
        ? ((o.apnCur = {}),
          (o.apnCur.apxCreatedFromTag = !0),
          (o.textTag = o.firstChild || null),
          o.textTag &&
            "table" == o.textTag.style.display &&
            o.textTag.firstChild &&
            o.textTag.firstChild.tagName &&
            "div" == o.textTag.firstChild.tagName.toLowerCase() &&
            (o.textTag.tv2 = o.textTag.firstChild))
        : ((o = document.body.$TAG("div", {
            style: "position:absolute;overflow:hidden;box-sizing:border-box;",
          })),
          (o.apnCur = {}),
          (o.textTag = null)),
      r &&
        (o.apnCur.textIndent = bx.$checkNaN(
          parseFloat(t.wgtGetProperty(r, "txtI"))
        )),
      o
    );
  }),
  (xa.exeRenderTag = function (e, t, a, i, n, r) {
    e.o.noDynamicFontLoad2
      ? (a.apnCur._apnWgtRectTV = 2)
      : 2 == this.apnWgtRectVer &&
        i.create.data.properties &&
        2 == i.create.data.properties.ver &&
        (a.apnCur._apnWgtRectTV = 2);
    var o = i.create.data.styles;
    if (a.apnCur.apxCreatedFromTag && 1 == n && 1 == r) {
      var s = apn.IWidget.exeRenderTagVhtml.call(this, e, t, a, i, n, r);
      a.apnCur._apxTextStack = { styles: s, data: i, zx: n, zy: r };
    } else if (this.apnWgtRectDOM2 && e.o.exeDOM2) {
      var p = apn.IWidget.htmlRender(
        this,
        e.project,
        t.getPageID(),
        a.apnOID,
        void 0,
        o.strokeStyle && o.lineWidth
          ? { strokeStyle: o.strokeStyle, lineWidth: o.lineWidth }
          : void 0,
        t
      );
      (p.css += apn.IWidget.htmlRenderText(
        this,
        e.project,
        t.getPageID(),
        a.apnOID,
        p,
        t
      )),
        (a.style.cssText =
          "position:absolute;box-sizing:border-box;overflow:hidden;" +
          p.css +
          (a.apnCur.textIndent && a.apnCur.textIndent > 0
            ? "text-indent:" + a.apnCur.textIndent + "em;"
            : "")),
        apn.IWidget.exeSetAngle(a, p.style.angle, i.init, i.init.cx, i.init.cy),
        p.style.text
          ? apn.IWidget.exeApplyText(i, p.style, a, n, r)
          : (a.apnCur._apxTextStack = {
              styles: p.style,
              data: i,
              zx: n,
              zy: r,
            });
    } else apn.IWidget.exeRenderTagV1.call(this, e, t, a, i, n, r);
    return (
      (a.tagOnPostResize = function (e, a) {
        if (2 != a.apnCur._apnWgtRectTV) {
          var i = t.wgtGetProperty(a.apnOID, "apxText");
          i && ((a.apnCur.forced = !0), apn.IWidget.exeSetText(a, i));
        }
      }),
      apn.widgets["apn.wgt.rect"].workaroundAndroid7(t, a, o),
      a
    );
  }),
  (xa.workaroundAndroid7 = function (e, t, a) {
    var i;
    if (
      ("50%" == t.$css("border-radius") && (i = !0),
      (apn.Project.resolveStyle(
        e.project,
        "borderRadiusBottomLeft",
        a.borderRadiusBottomLeft
      ) ||
        apn.Project.resolveStyle(
          e.project,
          "borderRadiusBottomRight",
          a.borderRadiusBottomRight
        ) ||
        apn.Project.resolveStyle(
          e.project,
          "borderRadiusTopLeft",
          a.borderRadiusTopLeft
        ) ||
        apn.Project.resolveStyle(
          e.project,
          "borderRadiusTopRight",
          a.borderRadiusTopRight
        ) ||
        i) &&
        apn.Project.resolveStyle(e.project, "lineDash", a.lineDash) &&
        apn.Project.resolveStyle(e.project, "lineWidth", a.lineWidth) &&
        apn.Project.resolveStyle(e.project, "strokeStyle", a.strokeStyle))
    ) {
      var n = bx.HCL.DV.getBrowser();
      "android" == n.type && "7" == n.ver1 && apn.CExe.ACCEL(t);
    }
  }),
  (xa.exeOnStart = function (e, t) {
    var a = e.wgtTag(t);
    this.apxTextPlainMulti &&
      ((a.apnOnPostSetText = function (a, i) {
        e.wgtSetProperty(t, "apxTextPlainMulti", { txt: i });
      }),
      e.wgtGetProperty(t, "apxText") &&
        a.apnOnPostSetText(a, e.wgtGetProperty(t, "apxText")));
  }),
  (xa.exeOnScreenRefresh = function (e, t, a) {
    var i,
      n = e.wgtTag(t),
      r = !0;
    a && a.font && a.font != e.wgtGetProperty(t, "apxFont", !0) && (r = !1),
      r &&
        this.exeGetSizeByContent &&
        (e.fireEvent("contentChange", "font", t, !0),
        e.project.property.allowImmediateContentLoad ||
          e.fireEvent("contentChange", "all", t, !0)),
      2 != n.apnCur._apnWgtRectTV &&
        r &&
        (i = e.wgtGetProperty(t, "apxText")) &&
        e.wgtSetProperty(t, "apxTextForced", i);
  }),
  (xa.edtOnCheckContentChange = function (e, t, a) {
    if (this.exeGetSizeByContent) return { font: "Font" };
  }),
  (xa.exeGetSizeByContent = function (e, t, a, i) {
    var n = e.wgtTag(t);
    if ((!a && !i) || !n.textTag)
      return {
        w: e.screen.objects[t].init.shape.w,
        h: e.screen.objects[t].init.shape.h,
      };
    var r = n.cloneNode(!0);
    e.tag.appendChild(r), (r.style.display = "block");
    var o = r.offsetWidth,
      s = r.offsetHeight;
    (r.style.visibility = "hidden"),
      (r.style.position = "relative"),
      (r.style.overflow = "visible"),
      (r.style.letterSpacing = n.textTag.style.letterSpacing),
      (r.style.lineHeight = n.textTag.style.lineHeight),
      n.apnCur.textIndent &&
        n.apnCur.textIndent > 0 &&
        (r.style.textIndent = n.apnCur.textIndent + "em"),
      e.project.property.fixMeasureText
        ? i
          ? ((r.style.height = "auto"),
            n.textTag &&
              r.firstChild &&
              ((r.firstChild.style.height = "auto"),
              n.textTag &&
                n.textTag.tv2 &&
                r.firstChild.firstChild &&
                r.firstChild.firstChild.style &&
                (r.firstChild.firstChild.style.height = "auto")))
          : ((r.style.width = "auto"),
            (r.style.display = "inline-block"),
            n.textTag &&
              r.firstChild &&
              ((r.firstChild.style.width = "auto"),
              n.textTag &&
                n.textTag.tv2 &&
                r.firstChild.firstChild &&
                r.firstChild.firstChild.style &&
                (r.firstChild.firstChild.style.width = "auto")))
        : ((r.innerHTML = apn.IWidget.exeFormatText(
            e.wgtGetProperty(t, "apxText")
          )),
          i
            ? (r.style.height = "auto")
            : ((r.style.width = "auto"), (r.style.display = "inline-block")));
    var p =
        r.offsetWidth -
        Math.min(0, bx.$checkNaN(parseInt(r.style.letterSpacing))),
      l = r.offsetHeight;
    r.parentNode.removeChild(r);
    var d = e.screen.objects[t].init.shape.w,
      c = e.screen.objects[t].init.shape.h;
    return (
      i
        ? (c = Math.ceil((l / s) * e.screen.objects[t].init.shape.h) + 1)
        : (d = Math.ceil((p / o) * e.screen.objects[t].init.shape.w) + 1),
      {
        w: d - e.screen.objects[t].init.shape.w,
        h: c - e.screen.objects[t].init.shape.h,
      }
    );
  }),
  (xa.exeSetText = function (e, t, a, i, n, r, o, s, p, l) {
    if (
      (a && (e.$O5a = a),
      i && (e.$O5b = i),
      void 0 !== n && (e.$O6m = n),
      void 0 !== r && (e.$O6n = r),
      void 0 !== o && (e.$O7D = o),
      l && (e.$Obz = l),
      s && (e.$ObA = s),
      p && (e.$ObL = p),
      (o = o || e.$O7D),
      (p = p || e.$ObL),
      e.textTag && l)
    ) {
      var d = 1.2;
      apn.fonts &&
        apn.fonts[o] &&
        void 0 !== apn.fonts[o].height &&
        (d = apn.fonts[o].height);
      var c = l * d;
      p && (c += p), (e.textTag.style.lineHeight = c + "px");
    }
    if (
      ((l = l || e.$Obz), (s = s || e.$ObA), (a = a || e.$O5a), t && !e.textTag)
    ) {
      var g =
          "cursor:inherit;font-family:inherit;letter-spacing:" +
          (s ? s + "px;" : "normal;") +
          "left:0px;top:0px;",
        u = "position:relative;";
      if (
        (2 == e.apnCur._apnWgtRectTV
          ? (void 0 === a ||
              "top" == a ||
              (u += "display:table;table-layout:fixed;"),
            (u += "height:100%;"),
            e.$O6m || (u += "width:100%;"))
          : e.$O6m || (u += "display:inline-block;"),
        e.$O6m)
      ) {
        var d = 1.2;
        apn.fonts &&
          apn.fonts[o] &&
          void 0 !== apn.fonts[o].height &&
          (d = apn.fonts[o].height);
        var c = l * d;
        p && (c += p);
        var h =
          "width:100%;word-wrap:break-word;line-height:" +
          c +
          "px;text-align:" +
          (i || e.$O5b || "center") +
          ";";
        (e.textTag = e.$TAG("div", { style: u + g + h })),
          parseInt(e.$css("padding")) || (e.style.overflow = "visible");
      } else e.textTag = e.$TAG("div", { style: u + g });
    }
    if (
      (e.textTag &&
        e.apnCur &&
        e.apnCur.apxNoWordBreak &&
        ((e.textTag.style.overflowWrap = "normal"),
        (e.textTag.style.wordWrap = "keep-all")),
      e.setAttribute("align", "left"),
      (i = i || e.$O5b),
      (n = n || e.$O6m),
      (r = r || e.$O6n),
      e.textTag &&
        (n && r
          ? "justify" != e.textTag.style.textAlign &&
            (e.textTag.style.whiteSpace = "pre-wrap")
          : n || (e.textTag.style.whiteSpace = "pre")),
      e.textTag)
    ) {
      if (2 == e.apnCur._apnWgtRectTV)
        void 0 === a || "top" == a
          ? ((e.textTag.innerHTML = apn.IWidget.exeFormatText(t)),
            (e.style.textAlign = i),
            e.apnCur.textIndent &&
              e.apnCur.textIndent > 0 &&
              (e.textTag.style.textIndent = e.apnCur.textIndent + "em"))
          : ((e.textTag.tv2 =
              e.textTag.tv2 ||
              e.textTag.$TAG("div", {
                style:
                  "cursor:inherit;display:table-cell;font:inherit;line-height:inherit;vertical-align:" +
                  a +
                  ";text-align:" +
                  i +
                  ";" +
                  (e.apnCur.textIndent && e.apnCur.textIndent > 0
                    ? "text-indent:" + e.apnCur.textIndent + "em"
                    : ""),
              })),
            (e.textTag.tv2.innerHTML = apn.IWidget.exeFormatText(t)),
            e.textTag.tv2.style.textAlign != i &&
              (e.textTag.tv2.style.textAlign = i),
            e.textTag.tv2.style.verticalAlign != a &&
              (e.textTag.tv2.style.verticalAlign = a),
            "middle" == a &&
              (e.apnPadding ||
                ((e.style.paddingTop = "0"), (e.style.paddingBottom = "0"))));
      else {
        e.textTag.innerHTML = apn.IWidget.exeFormatText(t);
        var x = !1;
        if (!bx.DOM.isVisible(e)) {
          var f, y;
          (x = !0),
            (f = e.style.display),
            (e.style.display = "block"),
            (e.style.visibility = "hidden"),
            (y = e.parentNode),
            document.body.appendChild(e);
        }
        var v = e.clientWidth - 2 * bx.$checkNaN(parseInt(e.style.padding)),
          C = e.clientHeight - 2 * bx.$checkNaN(parseInt(e.style.padding));
        if (
          ((e.textTag.scrollWidth && e.textTag.scrollWidth > v) ||
          (e.textTag.scrollHeight && e.textTag.scrollHeight > C)
            ? (void 0 === e._apxTextBkPadding &&
                (e._apxTextBkPadding = e.style.padding),
              (e.style.padding =
                Math.max(
                  0,
                  Math.floor(
                    bx.$checkNaN(parseInt(e.style.padding)) -
                      Math.max(
                        e.textTag.scrollWidth - v,
                        e.textTag.scrollHeight - C
                      ) /
                        2
                  )
                ) + "px"))
            : void 0 !== e._apxTextBkPadding &&
              (e.style.padding = e._apxTextBkPadding),
          void 0 !== a)
        ) {
          var b = a;
          n
            ? "top" == b
              ? ((e.textTag.style.top = "0%"),
                (e.textTag.style.marginTop = "0px"))
              : "bottom" == b
              ? ((e.textTag.style.top = "100%"),
                (e.textTag.style.marginTop = -e.textTag.offsetHeight + "px"))
              : ((e.textTag.style.top = "50%"),
                (e.textTag.style.marginTop =
                  -e.textTag.offsetHeight / 2 + "px"))
            : "top" == b
            ? (e.textTag.style.top = "0px")
            : "bottom" == b
            ? (e.textTag.style.top =
                e.clientHeight -
                2 * bx.$checkNaN(parseInt(e.style.padding)) -
                e.textTag.offsetHeight +
                "px")
            : (e.textTag.style.top =
                (e.clientHeight -
                  2 * bx.$checkNaN(parseInt(e.style.padding)) -
                  e.textTag.offsetHeight) /
                  2 +
                "px");
        }
        void 0 !== i && (n || (e.style.textAlign = i)),
          x &&
            ((e.style.visibility = "visible"),
            (e.style.display = f),
            y.appendChild(e));
      }
      (e.textTag.bxBackText = t),
        void 0 !== a && (e.textTag.bxBackTextValign = a);
    }
  }),
  (xa.exePropGet = function (e, t, a, i) {
    if ("vertex" == a || "vertexInPage" == a) {
      if (i) return !0;
      var n = e.screen.objects[t];
      if ("vertex" == a)
        var r = 0,
          o = 0;
      else
        var r = n.init.position.x,
          o = n.init.position.y;
      var s = n.init.shape.w,
        p = n.init.shape.h,
        l = parseFloat(n.create.data.styles.angle) || 0;
      if (l) {
        var d = r + s / 2 + (n.init.cx || 0),
          c = o + p / 2 + (n.init.cy || 0);
        return [
          { x: apn.CES.$O5M(d, c, l, r, o), y: apn.CES.$O5N(d, c, l, r, o) },
          {
            x: apn.CES.$O5M(d, c, l, r + s, o),
            y: apn.CES.$O5N(d, c, l, r + s, o),
          },
          {
            x: apn.CES.$O5M(d, c, l, r + s, o + p),
            y: apn.CES.$O5N(d, c, l, r + s, o + p),
          },
          {
            x: apn.CES.$O5M(d, c, l, r, o + p),
            y: apn.CES.$O5N(d, c, l, r, o + p),
          },
          { x: apn.CES.$O5M(d, c, l, r, o), y: apn.CES.$O5N(d, c, l, r, o) },
        ];
      }
      return [
        { x: r, y: o },
        { x: r + s, y: o },
        { x: r + s, y: o + p },
        { x: r, y: o + p },
        { x: r, y: o },
      ];
    }
    if ("measuredWidth" == a) {
      if (i) return !0;
      var g = this.exeGetSizeByContent(e, t, !0, !1);
      return g.w + e.wgtW(t);
    }
    if ("measuredHeight" == a) {
      if (i) return !0;
      var g = this.exeGetSizeByContent(e, t, !1, !0);
      return g.h + e.wgtH(t);
    }
  }),
  (xa.exePropSet = function (e, t, a, i, n) {
    if ("noWordBreak" == a) {
      if (n) return !0;
      var r = e.wgtTag(t);
      r.apnCur && (r.apnCur.apxNoWordBreak = i);
    }
  }),
  (apn.widgets["apn.wgt.rect"] = xa),
  (xa = {}),
  (xa.APX_NO_POINTER_EV = !0),
  (xa.exeItrNoResize = !0),
  (xa.exeItrNoZoom = !0),
  (xa.exeItrNoMove = !0),
  (xa.styleMap = {
    title: !0,
    strokeStyle: !0,
    lineWidth: !0,
    lineDash: !0,
    fillStyle: !0,
    font: !0,
    fontSize: !0,
    fontStyle: !0,
    fontItalic: !0,
    fontBold: !0,
    textMultiLine: !0,
    fontUnderlined: !0,
    textWordWrap: !0,
    text: !0,
    textAlign: !0,
    textValign: !0,
    textPadding: !0,
  }),
  (xa.styles = {
    strokeStyle: "#ff0000",
    fontStyle: "#ff0000",
    textAlign: "left",
    textValign: "middle",
    textMultiLine: !0,
    textWordWrap: !0,
  }),
  (xa.exeCreateTag = function (e, t, a, i, n, r) {
    var o;
    return (
      e.o.standAlone &&
      r &&
      (o = apn.CExe.getElementByAttr("div", "data-apx-id", r))
        ? (o.apnCur = {})
        : ((o = document.body.$TAG("div", { style: "position:absolute;" })),
          (o.apnCur = {})),
      (o.textTag = null),
      (o.tagOnPostResize = function (e, t) {
        (this.style.width = "1px"), (this.style.height = "1px");
      }),
      o
    );
  }),
  (xa.exeRenderTag = function (e, t, a, i, n, r) {
    return (a.style.display = "none"), a;
  }),
  (xa.exeSetText = function () {}),
  (apn.widgets["apn.wgt.cmt"] = xa),
  (xa = {}),
  (xa.styleMap = {}),
  (xa.editor = {
    iconThumb: "imgs/wgts/thumbs/error.png",
    color: "#ff0000",
    colorBG: "rgba(255,0,0,0.4)",
    placeHolder:
      "Widget module loading failed. It could be temporary network problem or this file might be created by another configuration of Aspen Editor.",
  }),
  (xa.exeRenderTag = apn.widgets["apn.wgt.rect"].exeRenderTag),
  (xa.exeCreateTag = apn.widgets["apn.wgt.rect"].exeCreateTag),
  (apn.widgets["apn.wgt.null"] = xa),
  (xa = apn.inheritWidget(apn.widgets["apn.wgt.rect"])),
  (xa.apxTextPlainMulti = !0),
  (xa.apxTextAlignJustify = !0),
  (xa.apnWgtRectVer = 2),
  (xa.apnWgtRectDOM2 = !0),
  (xa.styleMap = {
    title: !0,
    visibility: !0,
    strokeStyle: !0,
    lineWidth: !0,
    lineDash: !0,
    fillStyle: !0,
    borderRadiusTopLeft: !0,
    borderRadiusTopRight: !0,
    borderRadiusBottomLeft: !0,
    borderRadiusBottomRight: !0,
    font: !0,
    fontSize: !0,
    fontStyle: !0,
    fontItalic: !0,
    fontBold: !0,
    textMultiLine: !0,
    fontUnderlined: !0,
    text: !0,
    textAlign: !0,
    textValign: !0,
    textPadding: !0,
    textWordWrap: !0,
    ltrSp: !0,
    lnSp: !0,
    fontStrokeStyle: !0,
    fontStrokeWidth: !0,
    alpha: !0,
    angle: !0,
    dragX: !0,
    dragY: !0,
    dragInParent: !0,
    dragContainParent: !0,
    csr: !0,
  }),
  (xa.exeGetSizeByContent = apn.widgets["apn.wgt.rect"].exeGetSizeByContent),
  (xa.exePropGet = function (e, t, a, i) {
    if ("vertex" == a || "vertexInPage" == a) {
      if (i) return !0;
      var n = e.screen.objects[t],
        r = [];
      if ("vertex" == a)
        var o = 0,
          s = 0;
      else
        var o = n.init.position.x,
          s = n.init.position.y;
      var p = n.init.shape.w,
        l = n.init.shape.h,
        d = n.init.cx || 0,
        c = n.init.cy || 0,
        g = 0,
        u = 0,
        h = 0,
        x = 0,
        f = 0;
      n.create.data &&
        n.create.data.styles &&
        ((g = parseFloat(n.create.data.styles.angle) || 0),
        (u = n.create.data.styles.borderRadiusTopLeft || 0),
        (h = n.create.data.styles.borderRadiusTopRight || 0),
        (x = n.create.data.styles.borderRadiusBottomRight || 0),
        (f = n.create.data.styles.borderRadiusBottomLeft || 0));
      var y =
        (2 * Math.PI * u +
          2 * Math.PI * h +
          2 * Math.PI * x +
          2 * Math.PI * f) /
          4 /
          3 +
        5;
      return (
        apn.CES._approximate_rrect_to_polygon(
          o,
          s,
          p,
          l,
          u,
          h,
          x,
          f,
          g || 0,
          r,
          Math.ceil(y),
          d,
          c
        ),
        r.push({ x: r[0].x, y: r[0].y }),
        r
      );
    }
    return apn.widgets["apn.wgt.rect"].exePropGet.call(this, e, t, a, i);
  }),
  (apn.widgets["apn.wgt.roundRect"] = xa),
  (xa = apn.inheritWidget(apn.widgets["apn.wgt.rect"])),
  (xa.apnWgtSTxtDOM2 = !0),
  (xa.styleMap = {
    title: !0,
    visibility: !0,
    strokeStyle: !0,
    lineWidth: !0,
    lineDash: !0,
    fillStyle: !0,
    font: !0,
    fontSize: !0,
    fontStyle: !0,
    fontItalic: !0,
    fontBold: !0,
    fontUnderlined: !0,
    text: !0,
    textAlign: !0,
    textPadding: !0,
    ltrSp: !0,
    textFit: !0,
    fontStrokeStyle: !0,
    fontStrokeWidth: !0,
    alpha: !0,
    angle: !0,
    dragX: !0,
    dragY: !0,
    dragInParent: !0,
    dragContainParent: !0,
    csr: !0,
  }),
  (xa.properties = { attrs: { ofl: "", v: 2 } }),
  (xa.genLtrSp = function (e, t) {
    var a,
      i = "",
      n = t.textContent,
      r = 0;
    if (e && n && !(n.length <= 1)) {
      for (var o = 0; o < n.length; o++)
        (a = !1),
          e > 0 && o < n.length - 1
            ? ((r += e),
              Math.round(r) &&
                ((i +=
                  '<span style="margin-right:' +
                  Math.round(r) +
                  'px;">' +
                  apn.IWidget.exeFormatText(n[o], { xml: !0 }) +
                  "</span>"),
                (r -= Math.round(r)),
                (a = !0)))
            : e < 0 &&
              0 != o &&
              ((r += e),
              Math.round(r) &&
                ((i +=
                  '<span style="margin-left:' +
                  Math.round(r) +
                  'px;">' +
                  apn.IWidget.exeFormatText(n[o], { xml: !0 }) +
                  "</span>"),
                (r -= Math.round(r)),
                (a = !0))),
          a || (i += n[o]);
      (t.innerHTML = i),
        "div" == t.tagName && (t.style.letterSpacing = "normal");
    }
  }),
  (xa._ltrSp = function (e, t) {
    return e + "px";
  }),
  (xa.exeCreateTag = function (e, t, a, i, n, r) {
    if (void 0 === apn.widgets["apn.wgt.singleText"]._apxNoFloatLetterSpacing) {
      var o = bx.HCL.DV.getBrowser();
      if ("android" == o.type && "4" == o.ver1) {
        var s = document.body.$TAG("div", {
            style:
              "font-size:35px;letter-spacing:2px;display:inline-block;visibility:hidden;",
          }),
          p = document.body.$TAG("div", {
            style:
              "font-size:35px;letter-spacing:2.9px;display:inline-block;visibility:hidden;",
          });
        (s.innerHTML = p.innerHTML = "예"),
          s.offsetWidth == p.offsetWidth
            ? (apn.widgets["apn.wgt.singleText"]._apxNoFloatLetterSpacing = !0)
            : (apn.widgets["apn.wgt.singleText"]._apxNoFloatLetterSpacing = !1),
          document.body.removeChild(s),
          document.body.removeChild(p);
      }
    }
    if (
      e.o.standAlone &&
      r &&
      apn.CExe.getElementByAttr("div", "data-apx-id", r)
    ) {
      var l = apn.CExe.getElementByAttr("div", "data-apx-id", r);
      (l.apnCur = {}), (l.apnCur.apxCreatedFromTag = !0);
    } else {
      var l = document.body.$TAG("div", { style: "position:absolute;" });
      l.$CSS({ boxSizing: "border-box" }), (l.apnCur = {});
    }
    (l.apnSingleText = !0),
      a.create.data.properties &&
        a.create.data.properties.attrs &&
        2 == a.create.data.properties.attrs.v &&
        (l._singleTxtV = 2);
    var d = this;
    return (
      (l.apnOnPostSetText = function (e, i) {
        var n;
        a.create.data.properties &&
          a.create.data.properties.attrs &&
          (n = a.create.data.properties.attrs),
          n &&
            ("C" == n.ofl
              ? (e.style.overflow = "hidden")
              : "E" == n.ofl
              ? ((e.style.overflow = "hidden"),
                (e.style.textOverflow = "ellipsis"))
              : "O" == n.ofl && (e.style.overflow = "visible"));
        var r = apn.Project.resolveStyle(
          t.project,
          "textFit",
          a.create.data.styles.textFit
        );
        if (i && i.length && r) {
          var o,
            s = e.style.width;
          if (!bx.DOM.isVisible(e)) {
            var p, l;
            (o = !0),
              (p = e.style.display),
              (e.style.display = "block"),
              (e.style.visibility = "hidden"),
              (l = e.parentNode),
              document.body.appendChild(e);
          }
          var c,
            g = e.clientWidth;
          (e.style.width = "auto"),
            (e.style.letterSpacing = "normal"),
            "static" == e.style.position && e._singleTextClientWidthBack
              ? (c = e._singleTextClientWidthBack)
              : ((c = e.clientWidth),
                "static" != e.style.position &&
                  (e._singleTextClientWidthBack = c));
          var u = !1;
          if (
            ((5 != r && 50 != r) || 1 != i.length || (r = 1),
            (1 == r || 5 == r) && c > g
              ? (u = !0)
              : 4 == r && i.length > 1 && c > g
              ? (u = !0)
              : 2 == r && i.length > 1
              ? (u = !0)
              : (10 != r && 50 != r) || (u = !0),
            u)
          ) {
            var h = apn.widgets["apn.wgt.singleText"]._apxNoFloatLetterSpacing;
            if (
              ((e.firstChild && "span" == e.firstChild.tagName) ||
                (e.innerHTML =
                  '<span style="box-sizing:border-box;font:inherit;cursor:inherit;">' +
                  e.innerHTML +
                  "</span>"),
              1 == r || 10 == r)
            )
              if (10 == r) {
                var x = "50% 0";
                "left" == e.style.textAlign
                  ? (x = "0 0")
                  : "right" == e.style.textAlign && (x = "100% 0"),
                  e.firstChild.$CSS({
                    transformOrigin: x,
                    transform: "scaleX(" + g / c + ")",
                    display: "inline-block",
                  });
              } else
                e.firstChild.$CSS({
                  transformOrigin: "0 0",
                  transform: "scaleX(" + g / c + ")",
                  display: "inline-block",
                });
            else if (2 == r || 4 == r) {
              var f = (g - c) / (i.length - 1);
              h
                ? d.genLtrSp(f, e.firstChild)
                : (e.firstChild.style.letterSpacing = f + "px"),
                f && (e.style.textAlign = "left");
            } else if (5 == r || 50 == r) {
              var y = (g - c) / 2;
              if (50 == r) var f = y / (i.length + 1);
              else var f = y / (i.length - 1);
              if (
                (h && (f = Math.round(f)),
                50 == r && (e.firstChild.style.paddingLeft = f + "px"),
                (e.firstChild.style.letterSpacing = f + "px"),
                (e.firstChild.style.display = "inline-block"),
                50 == r)
              )
                var v = e.firstChild.clientWidth;
              else var v = e.firstChild.clientWidth - f;
              if (50 == r) {
                var x = "50% 0";
                "left" == e.style.textAlign
                  ? (x = "0 0")
                  : "right" == e.style.textAlign && (x = "100% 0"),
                  e.firstChild.$CSS({
                    transformOrigin: x,
                    transform: "scaleX(" + g / v + ")",
                  });
              } else
                e.firstChild.$CSS({
                  transformOrigin: "0 0",
                  transform: "scaleX(" + g / v + ")",
                });
            }
            e._txtFitApplied = !0;
          }
          (e.style.width = s),
            o &&
              ((e.style.visibility = "visible"),
              (e.style.display = p),
              l.appendChild(e));
        }
      }),
      l
    );
  }),
  (xa.exeRenderTag = function (e, t, a, i, n, r) {
    if (a.apnCur.apxCreatedFromTag && 1 == n && 1 == r) {
      var o = i.create.data.properties,
        s = apn.IWidget.exeRenderTagVhtml.call(this, e, t, a, i, n, r);
      !apn.widgets["apn.wgt.singleText"]._apxNoFloatLetterSpacing ||
        (o && o.attrs && o.attrs.apxNoLtrSpProcessed) ||
        apn.IWidget.exeApplyText(i, s, a, n, r),
        a.parentNode.apxCreateForGroup &&
          ((a.style.left =
            parseInt(a.style.left) - parseInt(a.parentNode.style.left) + "px"),
          (a.style.top =
            parseInt(a.style.top) - parseInt(a.parentNode.style.top) + "px"));
    } else if (this.apnWgtSTxtDOM2 && e.o.exeDOM2) {
      var p = apn.IWidget.exeRenderTagV2.call(this, e, t, a, i, n, r);
      p.style.text || apn.IWidget.exeApplyText(i, p.style, a, n, r);
    } else apn.IWidget.exeRenderTagV1.call(this, e, t, a, i, n, r);
    a.tagOnPostResize = function (e, a) {
      var i = t.wgtGetProperty(a.apnOID, "apxText");
      i && ((a.apnCur.forced = !0), apn.IWidget.exeSetText(a, i));
    };
  }),
  (xa.exeOnScreenRefresh = function (e, t, a) {
    var i = e.wgtTag(t);
    if (
      !i.apnCur.apxCreatedFromTag &&
      (i._txtFitApplied ||
        e.wgtGetProperty(t, "acceptContentChange") ||
        e.wgtGetProperty(t, "_apxAcceptCC"))
    ) {
      var n,
        r = !0;
      a && a.font && a.font != e.wgtGetProperty(t, "apxFont", !0) && (r = !1),
        r &&
          (n = e.wgtGetProperty(t, "apxText")) &&
          (i._txtFitApplied && e.wgtSetProperty(t, "apxTextForced", n),
          2 == apn.Project.getScriptVer(e.project) &&
            e.fireEvent("contentChange", "text", t, !0, !0));
    }
  }),
  (xa.edtOnCheckContentChange = function (e, t, a) {
    if (2 == apn.Project.getScriptVer(e)) return { text: "Text" };
  }),
  (xa.exeSetText = function (e, t, a, i, n, r, o, s, p, l, d) {
    i && (e.$O5b = i),
      void 0 !== o && (e.$O7D = o),
      s && (e.$O7E = s),
      p && (e.$O7F = p),
      l && (e.$O7G = l),
      d && (e.$ObA = d),
      (o = o || e.$O7D),
      (i = i || e.$O5b),
      (s = s || e.$O7E),
      (p = p || e.$O7F),
      (l = l || e.$O7G),
      (d = d || e.$ObA),
      (e.style.whiteSpace = 2 == e._singleTxtV ? "pre" : "nowrap");
    var c = p && s ? s : 0;
    (e.style.lineHeight = parseInt(e.style.height) - 2 * c + "px"),
      (e.style.textAlign = i),
      d
        ? (e.style.letterSpacing = d + "px")
        : (e.style.letterSpacing = "normal"),
      (s && p) || l
        ? (e.style.overflow = "hidden")
        : (e.style.overflow = "visible"),
      ("underline" == e.style.textDecoration || e.$ObB) &&
      apn.dbUI &&
      apn.dbUI.system &&
      "border" == apn.dbUI.system.exeTxtUnderlined
        ? ((e.$ObB = !0),
          (e.style.textDecoration = "none"),
          (e.innerHTML =
            '<span style="font:inherit;cursor:inherit;text-decoration:none;box-sizing:border-box;border-bottom:solid ' +
            apn.widgets.utils.getBorderUnderlineWeight(e) +
            "px " +
            e.style.color +
            ';">' +
            apn.IWidget.exeFormatText(t) +
            "</span>"))
        : (e.innerHTML = apn.IWidget.exeFormatText(t));
  }),
  (xa.exeGetSizeByContent = function (e, t, a, i) {
    var n = e.wgtTag(t);
    if (!a && !i)
      return {
        w: e.screen.objects[t].init.shape.w,
        h: e.screen.objects[t].init.shape.h,
      };
    var r = n.cloneNode(!0);
    (r.style.display = "block"),
      (r.style.visibility = "hidden"),
      (r.style.position = "relative"),
      (r.style.overflow = "visible"),
      i && ((r.style.height = "auto"), (r.style.lineHeight = "normal")),
      a && ((r.style.width = "auto"), (r.style.display = "inline-block")),
      e.tag.appendChild(r);
    var o = r.offsetWidth,
      s = r.offsetHeight;
    r.parentNode.removeChild(r);
    var p = e.screen.objects[t].init.shape.w,
      l = e.screen.objects[t].init.shape.h;
    return (
      i &&
        (l = Math.ceil(
          (s / parseInt(n.style.height)) * e.screen.objects[t].init.shape.h
        )),
      a &&
        (p = Math.ceil(
          (o / parseInt(n.style.width)) * e.screen.objects[t].init.shape.w
        )),
      {
        w: p - e.screen.objects[t].init.shape.w,
        h: l - e.screen.objects[t].init.shape.h,
      }
    );
  }),
  (apn.widgets["apn.wgt.singleText"] = xa),
  (xa = {}),
  (xa.styleMap = {
    title: !0,
    borderRadiusTopLeft: !0,
    borderRadiusTopRight: !0,
    borderRadiusBottomLeft: !0,
    borderRadiusBottomRight: !0,
    csr: !0,
  }),
  (xa.editor = {
    properties: {
      hp: {
        title: "Hit&PassEvent",
        input: [
          { title: "Enable", value: "Y" },
          { title: "Disable", value: "N" },
        ],
      },
    },
  }),
  (xa.properties = { attrs: { hp: "N" } }),
  (xa.exeOnForceStyle = function (e, t) {
    (t.csr && "inherit" != t.csr) || (t.csr = "pointer");
  }),
  (xa.exeCreateTag = apn.widgets["apn.wgt.rect"].exeCreateTag),
  (xa.exeRenderTag = function (e, t, a, i, n, r) {
    return (
      apn.widgets["apn.wgt.rect"].exeRenderTag.call(this, e, t, a, i, n, r),
      i.create.data.properties &&
        i.create.data.properties.attrs &&
        "Y" == i.create.data.properties.attrs.hp &&
        t.tagPassPointerEvent(a, !0, !0),
      10 == bx.HCL.DV.isIE() &&
        ((a.style.backgroundColor = "rgba(255,255,255,0)"),
        (a._apxIE10eventPassProblem = !0)),
      a
    );
  }),
  (apn.widgets["apn.wgt.itrAreaRect"] = xa),
  (xa = {}),
  (xa.styleMap = {
    title: !0,
    visibility: !0,
    strokeStyle: !0,
    lineWidth: !0,
    lineDash: !0,
    fillStyle: !0,
    alpha: !0,
    polygon: !0,
    dragX: !0,
    dragY: !0,
    dragInParent: !0,
    csr: !0,
    angle: !0,
  }),
  (xa.editor = {
    properties: {
      join: {
        title: "LineJoin",
        input: [
          { title: "Miter", value: "miter" },
          { title: "Bevel", value: "bevel" },
          { title: "[Round]", value: "" },
        ],
      },
      hp: {
        title: "Hit&PassEvent",
        input: [
          { title: "Enable", value: "Y" },
          { title: "Disable", value: "N" },
        ],
      },
      dto: {
        title: "DataOnly",
        input: [
          { title: "Yes", value: "Y" },
          { title: "No", value: "" },
        ],
      },
    },
  }),
  (xa.styles = { fillStyle: null }),
  (xa.properties = {
    attrs: {
      hp: "N",
      dto: "",
      join: "",
      cfg: {
        sdC: "#000000",
        sdW: 0,
        sdOx: 0,
        sdOy: 0,
        sdP: "1",
        idImg: "",
        cClr: null,
      },
    },
    state: "r",
  }),
  (xa.exeSetState = function (e, t, a, i) {
    t._dataOnly ||
      ("c" == a &&
        t.ctx.img &&
        (this.calcInitPosition(e, t),
        this.exeRenderTag(
          e.viewer,
          e,
          t,
          e.screen.objects[t.apnOID],
          1 / e.getZoomX(),
          1 / e.getZoomY()
        )));
  }),
  (xa.exeCreateTag = function (e, t, a, i, n, r) {
    var o = a.create.data.properties;
    if (o && o.attrs && "Y" == o.attrs.dto) {
      var s = apn.widgets["apn.wgt.rect"].exeCreateTag.call(
        this,
        e,
        t,
        a,
        i,
        n
      );
      (s._dataOnly = !0),
        (s.apxAcceptInvisibleIntersect = !0),
        r && t.wgtHide(r),
        a.create.data.styles && (a.create.data.styles.visibility = !1);
    } else {
      var s = apn.widgets.utils.$O2D(s);
      (s.apxRefreshOnStrokeChange = !0), (s.apxRefreshOnFillChange = !0);
    }
    return (
      o && o.attrs && "Y" == o.attrs.hp && t.tagPassPointerEvent(s, !0, !0), s
    );
  }),
  (xa.exeRenderTag = function (e, t, a, i, n, r) {
    function o(e, t, r, o, l, d, g, u) {
      function h(e) {
        return o + Math.round(s.polygon[e].x * d);
      }
      function x(e) {
        return l + Math.round(s.polygon[e].y * g);
      }
      if (s.polygon) {
        if (
          (e.clearRect(0, 0, e.canvas.width, e.canvas.height), u && u.fillOnly)
        ) {
          var f = e.fillStyle;
          e.fillStyle = u.fillOnly;
        } else {
          if (r) {
            var f = e.fillStyle;
            e.fillStyle = s.fillStyle;
          }
          if (t) {
            var y = e.lineWidth,
              v = e.strokeStyle;
            bx.cCanvasObject.applyLineDash(e, s),
              (e.lineJoin = c || "round"),
              (e.lineWidth = s.lineWidth * n),
              (e.strokeStyle = s.strokeStyle);
          }
          p &&
            "3" != p.sdP &&
            ((e.shadowOffsetX = p.sdOx),
            (e.shadowOffsetY = p.sdOy),
            (e.shadowBlur = p.sdW),
            (e.shadowColor = p.sdC));
        }
        if ("apn.CPolycurve" == i.module)
          apn.widgets.utils.curve(e, s.polygon, h, x);
        else {
          e.beginPath();
          for (var C, b, _ = 0; _ < s.polygon.length; _++)
            (C = h(_)), (b = x(_)), 0 == _ ? e.moveTo(C, b) : e.lineTo(C, b);
          e.closePath();
        }
        u && u.fillOnly
          ? (a.ctx && a.ctx.img && (e.save(), e.clip()),
            e.fill("evenodd"),
            a.ctx && a.ctx.img && e.restore(),
            (e.fillStyle = f))
          : (a.ctx &&
              a.ctx.img &&
              (e.save(),
              e.clip(),
              e.scale(a.width / a.ctx.thisW, a.height / a.ctx.thisH),
              a.ctx.imgBase &&
                e.drawImage(
                  a.ctx.imgBase.image,
                  a.ctx.imgBase.x - a.ctx.thisX,
                  a.ctx.imgBase.y - a.ctx.thisY,
                  a.ctx.imgBase.w,
                  a.ctx.imgBase.h
                ),
              e.drawImage(
                a.ctx.img,
                a.ctx.imgX - a.ctx.thisX,
                a.ctx.imgY - a.ctx.thisY,
                a.ctx.imgW,
                a.ctx.imgH
              ),
              a.ctx.imgOver &&
                e.drawImage(
                  a.ctx.imgOver.image,
                  a.ctx.imgOver.x - a.ctx.thisX,
                  a.ctx.imgOver.y - a.ctx.thisY,
                  a.ctx.imgOver.w,
                  a.ctx.imgOver.h
                ),
              e.restore()),
            r && e.fill("evenodd"),
            t && e.stroke(),
            p &&
              "3" == p.sdP &&
              (e.save(),
              (e.shadowOffsetX = p.sdOx),
              (e.shadowOffsetY = p.sdOy),
              (e.shadowBlur = p.sdW),
              (e.shadowColor = p.sdC),
              e.clip(),
              t && e.stroke(),
              e.restore()),
            r && (e.fillStyle = f),
            t && ((e.lineWidth = y), (e.strokeStyle = v)));
      }
    }
    if (!a._dataOnly) {
      var s = apn.IWidget.getCanvasObjectStyle(
        {},
        this,
        e.project,
        i.create.data.styles
      );
      apn.IWidget.exeSetAlpha(a, s.alpha);
      var p, l, d, c;
      (l = i.create.data.properties) && l.attrs && (d = l.attrs.cfg),
        l && l.attrs && l.attrs.join && (c = l.attrs.join),
        d &&
          d.sdW &&
          ((p = bx.$cloneObject({}, d)),
          (p.sdOx = Math.ceil(p.sdOx * n) || 0),
          (p.sdOy = Math.ceil(p.sdOy * r) || 0),
          (p.sdW = Math.ceil(p.sdW * n) || 0)),
        d &&
          d.cClr &&
          a.ctx &&
          a.ctx.img &&
          !a.ctx.cvsBG &&
          ((a.ctx.cvsBG = t.tag.$TAG("canvas", {
            style: "position:absolute;",
            width: a.width,
            height: a.height,
          })),
          t.tagPassPointerEvent(a.ctx.cvsBG, !0));
      var g;
      if (
        (p &&
          p.sdW &&
          (g = {
            outerX: Math.max(0, p.sdW + Math.abs(p.sdOx)),
            outerY: Math.max(0, p.sdW + Math.abs(p.sdOy)),
          }),
        apn.widgets.utils.$O2F(
          e,
          a,
          i,
          s,
          apn.widgets.utils.$O2x(t, a, i.init.position.x, n),
          apn.widgets.utils.$O2y(t, a, i.init.position.y, r),
          apn.widgets.utils.$O2v(i.init.shape.w, n),
          apn.widgets.utils.$O2w(i.init.shape.h, r),
          n,
          r,
          o,
          g
        ),
        this.styleMap.angle &&
          ((a.apnCur.angle = void 0),
          apn.IWidget.exeSetAngle(a, s.angle, i.init, i.init.cx, i.init.cy)),
        a.ctx && a.ctx.cvsBG)
      ) {
        apn.widgets.utils.$O2F(
          e,
          a.ctx.cvsBG,
          i,
          s,
          apn.widgets.utils.$O2x(t, a, i.init.position.x, n),
          apn.widgets.utils.$O2y(t, a, i.init.position.y, r),
          apn.widgets.utils.$O2v(i.init.shape.w, n),
          apn.widgets.utils.$O2w(i.init.shape.h, r),
          n,
          r,
          o,
          { fillOnly: d.cClr }
        );
        var u = t.wgtTag(d.idImg),
          h = a.ctx.thisX,
          x = a.ctx.thisY;
        u.parentNode != t.tag &&
          ((h -= t.getTagX(u.parentNode)), (x -= t.getTagY(u.parentNode))),
          t.tagPutOn(a.ctx.cvsBG, t.wgtTag(d.idImg)),
          (a.ctx.cvsBG.style.left = h + "px"),
          (a.ctx.cvsBG.style.top = x + "px"),
          (a.ctx.cvsBG.style.width = a.style.width),
          (a.ctx.cvsBG.style.height = a.style.height),
          (a.ctx.cvsBG.width == a.width && a.ctx.cvsBG.height == a.height) ||
            ((a.ctx.cvsBG.width = a.width), (a.ctx.cvsBG.height = a.height));
      }
    }
  }),
  (xa.exeDetect = function (e, t, a, i, n, r) {
    function o(e, t, a, i) {
      var n = { x: (t.x + a.x) / 2, y: (t.y + a.y) / 2 },
        r = { x: (i.x + a.x) / 2, y: (i.y + a.y) / 2 },
        o = 3 * (n.x - t.x),
        s = 3 * (r.x - n.x) - o,
        p = i.x - t.x - o - s,
        l = 3 * (n.y - t.y),
        d = 3 * (r.y - n.y) - l,
        c = i.y - t.y - l - d,
        g = p * Math.pow(e, 3) + s * Math.pow(e, 2) + o * e + t.x,
        u = c * Math.pow(e, 3) + d * Math.pow(e, 2) + l * e + t.y;
      return { x: g, y: u };
    }
    function s(e, i, n, r, o, s) {
      if ("apn.CPolycurve" == a.module && t.ctx.curve.length < 3) return !1;
      var p = a.create.data.styles.polygon;
      if (("apn.CPolycurve" == a.module && (p = t.ctx.curve), t.xx_polygon))
        for (var l = 0; l < p.length; l++)
          (t.xx_polygon[l].x = n + Math.round(p[l].x * o)),
            (t.xx_polygon[l].y = r + Math.round(p[l].y * s));
      else {
        t.xx_polygon = [];
        for (var l = 0; l < p.length; l++)
          t.xx_polygon.push({
            x: n + Math.round(p[l].x * o),
            y: r + Math.round(p[l].y * s),
          });
      }
      return bx.CCanvasWnd.intersect_point_polygon(e, i, t.xx_polygon);
    }
    if ("apn.CPolycurve" == a.module && !t.ctx.curve) {
      t.ctx.curve = [];
      var p = a.create.data.styles.polygon,
        l = 0.1;
      if (p.length >= 3)
        for (
          var d,
            c,
            g = {},
            u = {
              x: (p[0].x + p[p.length - 1].x) / 2,
              y: (p[0].y + p[p.length - 1].y) / 2,
            },
            h = 0;
          h < p.length;
          h++
        ) {
          for (
            g.x = (p[h].x + p[h + 1 > p.length - 1 ? 0 : h + 1].x) / 2,
              g.y = (p[h].y + p[h + 1 > p.length - 1 ? 0 : h + 1].y) / 2,
              d = 0;
            d < 1;
            d += l
          )
            (c = o(d, u, p[h], g)),
              t.ctx.curve.length
                ? Math.abs(t.ctx.curve[t.ctx.curve.length - 1].x - c.x) *
                    a.init.shape.w +
                    Math.abs(t.ctx.curve[t.ctx.curve.length - 1].y - c.y) *
                      a.init.shape.h >
                    4 && t.ctx.curve.push(c)
                : t.ctx.curve.push(c);
          (u.x = g.x), (u.y = g.y);
        }
    }
    return apn.widgets.utils.$O2G(e, t, a, i, n, r, s);
  }),
  (xa.exeOnLoad = function (e, t) {
    function a(a, r, o) {
      "load" == a &&
        (n = e.wgtTag(t)) &&
        n.ctx &&
        ((n.ctx.img = r),
        p.exeRenderTag(e.viewer, e, n, i, 1 / e.getZoomX(), 1 / e.getZoomY()));
    }
    var i = e.screen.objects[t],
      n = e.wgtTag(t),
      n = e.wgtTag(t);
    if (
      (window.top != window &&
        bx.HCL.DV.isChrome() &&
        "block" == n.style.display &&
        setTimeout(function () {
          "block" == n.style.display &&
            ((n.style.display = "none"), (n.style.display = "block"));
        }, 0),
      !(apn.dbUI && apn.dbUI.system && apn.dbUI.system.exeNoSetCursor))
    ) {
      var r = e.wgtGetProperty(t, "apxCursor", !0);
      "apn.auto" == r
        ? n.apnTapCsr || n.apnDragCsr
          ? (n.apnHitCsr = "pointer")
          : (n.apnHitCsr = "inherit")
        : (n.apnHitCsr = r);
    }
    var o,
      s = e.wgtGetProperty(t, "cfg"),
      p = this;
    if (((n.ctx = {}), s && s.idImg && (o = e.wgtTag(s.idImg)))) {
      (n.ctx.imgX = e.tagX(o)),
        (n.ctx.imgY = e.tagY(o)),
        (n.ctx.imgW = parseInt(o.style.width)),
        (n.ctx.imgH = parseInt(o.style.height)),
        this.calcInitPosition(e, n);
      var l = apn.Project.getWidgetModule(
        e.screen.objects[s.idImg].create.data
      );
      l &&
        l.exeGetImage &&
        l.exeGetImage(e, s.idImg) &&
        ((n.ctx.img = l.exeGetImage(e, s.idImg)),
        this.exeRenderTag(
          e.viewer,
          e,
          n,
          i,
          1 / e.getZoomX(),
          1 / e.getZoomY()
        )),
        e.wgtListenMedia(t, s.idImg, a);
    }
  }),
  (xa.exePropGet = function (e, t, a, i) {
    if ("vertex" == a || "vertexInPage" == a) {
      if (i) return !0;
      var n,
        r,
        o = e.screen.objects[t],
        s = [],
        p = parseFloat(o.create.data.styles.angle) || 0;
      if (p)
        var l = o.init.shape.w / 2 + (o.init.cx || 0),
          d = o.init.shape.h / 2 + (o.init.cy || 0);
      for (var c = 0; c < o.create.data.styles.polygon.length; c++)
        (s[c] = {}),
          (n = o.create.data.styles.polygon[c].x * o.init.shape.w),
          (r = o.create.data.styles.polygon[c].y * o.init.shape.h),
          p
            ? ((s[c].x = apn.CES.$O5M(l, d, p, n, r)),
              (s[c].y = apn.CES.$O5N(l, d, p, n, r)))
            : ((s[c].x = n), (s[c].y = r)),
          "vertexInPage" == a &&
            ((s[c].x += o.init.position.x), (s[c].y += o.init.position.y));
      return s.push({ x: s[0].x, y: s[0].y }), s;
    }
  }),
  (xa.exePropSet = function (e, t, a, i, n) {
    if ("baseImage" == a) {
      if (n) return !0;
      var r = e.wgtTag(t);
      r.ctx && (i && i.image ? (r.ctx.imgBase = i) : (r.ctx.imgBase = void 0));
    } else if ("overImage" == a) {
      if (n) return !0;
      var r = e.wgtTag(t);
      r.ctx && (i && i.image ? (r.ctx.imgOver = i) : (r.ctx.imgOver = void 0));
    } else if ("vertexInPage" == a) {
      var o = e.screen.objects[t];
      o.create.data.properties.attrs.cfg;
      if (n) return !0;
      if (i && i.length > 1) {
        i[0].x == i[i.length - 1].x && i[0].y == i[i.length - 1].y && i.pop();
        for (var s, p, l, d, c = 0; c < i.length; c++)
          (void 0 === s || i[c].x < s) && (s = i[c].x),
            (void 0 === p || i[c].y < p) && (p = i[c].y),
            (void 0 === l || i[c].x > l) && (l = i[c].x),
            (void 0 === d || i[c].y > d) && (d = i[c].y);
        if (((l -= s), (d -= p), l && d)) {
          for (
            o.init.position.x = s,
              o.init.position.y = p,
              o.init.shape.w = l,
              o.init.shape.h = d,
              o.create.data.styles.polygon.length = 0,
              c = 0;
            c < i.length;
            c++
          )
            o.create.data.styles.polygon.push({
              x: (i[c].x - s) / l,
              y: (i[c].y - p) / d,
            });
          var r = e.wgtTag(t);
          r.xx_polygon && delete r.xx_polygon,
            this.calcInitPosition(e, r, !0),
            this.exeRenderTag(
              e.viewer,
              e,
              r,
              e.screen.objects[r.apnOID],
              1 / e.getZoomX(),
              1 / e.getZoomY()
            );
        }
      }
    }
  }),
  (xa.calcInitPosition = function (e, t, a) {
    var i,
      n = e.screen.objects[t.apnOID],
      r = e.wgtGetProperty(t.apnOID, "cfg"),
      o = 1 / e.getZoomX(),
      s = 1 / e.getZoomY();
    r.sdW &&
      ((i = bx.$cloneObject({}, r)),
      (i.sdOx = Math.ceil(i.sdOx * o) || 0),
      (i.sdOy = Math.ceil(i.sdOy * s) || 0),
      (i.sdW = Math.ceil(i.sdW * o) || 0));
    var p = {},
      l = { getXY: p };
    i &&
      i.sdW &&
      ((l.outerX = Math.max(0, i.sdW + Math.abs(i.sdOx))),
      (l.outerY = Math.max(0, i.sdW + Math.abs(i.sdOy))));
    var d,
      c,
      g = apn.IWidget.getCanvasObjectStyle(
        {},
        this,
        e.viewer.project,
        n.create.data.styles
      );
    if (
      (d = e.wgtGetParent(t.apnOID)) &&
      (c = e.screen.objects[d]) &&
      c.layout &&
      c.layout.states
    )
      var u = c.layout.states[0].objects[t.apnOID].init;
    else var u = n.init;
    a && delete l.getXY,
      apn.widgets.utils.$O2F(
        e.viewer,
        t,
        n,
        g,
        apn.widgets.utils.$O2x(e, t, u.position.x, o),
        apn.widgets.utils.$O2y(e, t, u.position.y, s),
        apn.widgets.utils.$O2v(u.shape.w, o),
        apn.widgets.utils.$O2w(u.shape.h, s),
        o,
        s,
        void 0,
        l
      ),
      a && ((p.x = parseInt(t.style.left)), (p.y = parseInt(t.style.top))),
      t.parentNode != e.tag &&
        ((p.x += e.getTagX(t.parentNode)), (p.y += e.getTagY(t.parentNode))),
      (t.ctx.thisX = p.x),
      (t.ctx.thisY = p.y),
      (t.ctx.thisW = parseInt(t.style.width)),
      (t.ctx.thisH = parseInt(t.style.height));
  }),
  (xa.edtOnRemapObjectID = function (e, t, a) {
    if (t && t.properties && t.properties.attrs && t.properties.attrs.cfg) {
      var i = t.properties.attrs.cfg;
      i.idImg &&
        (a[i.idImg]
          ? (i.idImg = a[i.idImg])
          : e.getScreenData().objects[i.idImg] || (i.idImg = ""));
    }
  }),
  (xa.edtOnBuildState = function (e, t, a, i) {
    var n = e.pages[a].objects[t].create.data;
    n &&
      n.properties &&
      n.properties.attrs &&
      n.properties.attrs.cfg &&
      n.properties.attrs.cfg.idImg &&
      ((i.r = "Ready"), (i.c = "Cut"));
  }),
  (apn.widgets["apn.wgt.polygon"] = xa),
  (xa = apn.inheritWidget(apn.widgets["apn.wgt.polygon"])),
  (xa.editor = {
    properties: {
      hp: {
        title: "Hit&PassEvent",
        input: [
          { title: "Enable", value: "Y" },
          { title: "Disable", value: "N" },
        ],
      },
      dto: {
        title: "DataOnly",
        input: [
          { title: "Yes", value: "Y" },
          { title: "No", value: "" },
        ],
      },
    },
  }),
  (xa.exeDetect = apn.widgets["apn.wgt.polygon"].exeDetect),
  (xa.calcInitPosition = apn.widgets["apn.wgt.polygon"].calcInitPosition),
  (xa.exePropGet = function (e, t, a, i) {
    if ("vertex" == a || "vertexInPage" == a) {
      if (i) return !0;
      var n = e.screen.objects[t],
        r = e.wgtTag(t);
      if (!r || !r.ctx) return [];
      r.ctx.curve || this.exeDetect(e.project, r, n, 0, 0, 0);
      var o,
        s,
        p = [],
        l = parseFloat(n.create.data.styles.angle) || 0;
      if (l)
        var d = n.init.shape.w / 2 + (n.init.cx || 0),
          c = n.init.shape.h / 2 + (n.init.cy || 0);
      for (var g = 0; g < r.ctx.curve.length; g++)
        (p[g] = {}),
          (o = r.ctx.curve[g].x * n.init.shape.w),
          (s = r.ctx.curve[g].y * n.init.shape.h),
          l
            ? ((p[g].x = apn.CES.$O5M(d, c, l, o, s)),
              (p[g].y = apn.CES.$O5N(d, c, l, o, s)))
            : ((p[g].x = o), (p[g].y = s)),
          "vertexInPage" == a &&
            ((p[g].x += n.init.position.x), (p[g].y += n.init.position.y));
      return p;
    }
  }),
  (apn.widgets["apn.wgt.polycurve"] = xa),
  (xa = apn.inheritWidget(apn.widgets["apn.wgt.polygon"])),
  (xa.exeItrNoResize = !0),
  (xa.exeItrNoZoom = !0),
  (xa.styleMap = {
    title: !0,
    visibility: !0,
    strokeStyle: !0,
    lineWidth: !0,
    lineEnd: !0,
    alpha: !0,
    polygon: !0,
    dragX: !0,
    dragY: !0,
    dragInParent: !0,
    csr: !0,
    lD2: !0,
    lE2: !0,
  }),
  (xa.editor = {
    properties: {
      join: {
        title: "LineJoin",
        input: [
          { title: "Miter", value: "miter" },
          { title: "Bevel", value: "bevel" },
          { title: "[Round]", value: "" },
        ],
      },
      dto: {
        title: "DataOnly",
        input: [
          { title: "Yes", value: "Y" },
          { title: "No", value: "" },
        ],
      },
    },
  }),
  (xa.exeRenderTag = function (e, t, a, i, n, r) {
    function o(e, t, a, r, o, u, h) {
      function x(e) {
        return r + Math.round(s.polygon[e].x * u);
      }
      function f(e) {
        return o + Math.round(s.polygon[e].y * h);
      }
      if (s.polygon && t) {
        e.clearRect(0, 0, e.canvas.width, e.canvas.height);
        var y,
          v = e.lineWidth,
          C = e.strokeStyle,
          b = e.lineJoin,
          _ = e.lineCap;
        if (
          (i.create.data.properties &&
            i.create.data.properties.attrs &&
            (y = i.create.data.properties.attrs.join),
          e.setLineDash && s.lineWidth && s.lD2)
        ) {
          var m = s.lD2.concat();
          if ("butt" != s.lineEnd)
            for (var I = 1; I < m.length; I += 2) m[I] += 2;
          for (var I = 0; I < m.length; I++)
            m[I] = m[I] * Math.max(1, Math.round(s.lineWidth * n));
          e.setLineDash(m);
        }
        (e.lineJoin = y || "round"),
          (e.lineWidth = s.lineWidth * n),
          (e.strokeStyle = s.strokeStyle),
          (e.lineCap = s.lineEnd),
          p &&
            d &&
            (l = apn.widgets.utils.drawArrow(
              e,
              x(1),
              f(1),
              x(0),
              f(0),
              s,
              0,
              n
            )),
          p &&
            g &&
            (c = apn.widgets.utils.drawArrow(
              e,
              x(s.polygon.length - 2),
              f(s.polygon.length - 2),
              x(s.polygon.length - 1),
              f(s.polygon.length - 1),
              s,
              0,
              n
            )),
          e.beginPath();
        for (var S, P, I = 0; I < s.polygon.length; I++)
          (S = x(I)),
            (P = f(I)),
            0 == I
              ? e.moveTo(S + (l ? l.x : 0), P + (l ? l.y : 0))
              : e.lineTo(
                  S + (I == s.polygon.length - 1 && c ? c.x : 0),
                  P + (I == s.polygon.length - 1 && c ? c.y : 0)
                );
        e.stroke(),
          p &&
            d &&
            (l = apn.widgets.utils.drawArrow(
              e,
              x(1),
              f(1),
              x(0),
              f(0),
              s,
              p,
              n
            )),
          p &&
            g &&
            (c = apn.widgets.utils.drawArrow(
              e,
              x(s.polygon.length - 2),
              f(s.polygon.length - 2),
              x(s.polygon.length - 1),
              f(s.polygon.length - 1),
              s,
              p,
              n
            )),
          (e.lineWidth = v),
          (e.strokeStyle = C),
          (e.lineJoin = b),
          (e.lineCap = _);
      }
    }
    if (!a._dataOnly) {
      var s = apn.IWidget.getCanvasObjectStyle(
        {},
        this,
        e.project,
        i.create.data.styles
      );
      apn.IWidget.exeSetAlpha(a, s.alpha), (a._LW = s.lineWidth);
      var p, l, d, c, g;
      s.lineWidth &&
        s.lE2 &&
        s.lE2[0] &&
        ((p = parseInt(s.lE2[0])),
        "S" == s.lE2[1]
          ? (d = !0)
          : "E" == s.lE2[1]
          ? (g = !0)
          : ((d = !0), (g = !0)));
      var u;
      (d || g) &&
        (u = {
          outerX: Math.ceil(3.1 * s.lineWidth * n),
          outerY: Math.ceil(3.1 * s.lineWidth * r),
        });
      apn.widgets.utils.$O2F(
        e,
        a,
        i,
        s,
        apn.widgets.utils.$O2x(t, a, i.init.position.x, n),
        apn.widgets.utils.$O2y(t, a, i.init.position.y, r),
        apn.widgets.utils.$O2v(i.init.shape.w, n),
        apn.widgets.utils.$O2w(i.init.shape.h, r),
        n,
        r,
        o,
        u
      );
    }
  }),
  (xa.exeDetect = function (e, t, a, i, n, r) {
    function o(e, i, n, r, o, s) {
      var p = a.create.data.styles.polygon;
      if (t.xx_polygon)
        for (var l = 0; l < p.length; l++)
          (t.xx_polygon[l].x = n + Math.round(p[l].x * o)),
            (t.xx_polygon[l].y = r + Math.round(p[l].y * s));
      else {
        t.xx_polygon = [];
        for (var l = 0; l < p.length; l++)
          t.xx_polygon.push({
            x: n + Math.round(p[l].x * o),
            y: r + Math.round(p[l].y * s),
          });
      }
      for (var d, c, l = 0; l < t.xx_polygon.length - 1; l++)
        if (
          ((d = t.xx_polygon[l]),
          (c = t.xx_polygon[l + 1]),
          bx.CCanvasWnd.intersect_circle_line(
            e,
            i,
            Math.round(t._LW / 2),
            d.x,
            d.y,
            c.x,
            c.y
          ))
        )
          return !0;
      return !1;
    }
    return apn.widgets.utils.$O2G(e, t, a, i, n, r, o);
  }),
  (xa.calcInitPosition = apn.widgets["apn.wgt.polygon"].calcInitPosition),
  (xa.exePropGet = function (e, t, a, i) {
    if ("vertex" == a || "vertexInPage" == a) {
      if (i) return !0;
      var n = apn.widgets["apn.wgt.polygon"].exePropGet.call(this, e, t, a, i);
      return n.length > 1 && n.pop(), n;
    }
    return apn.widgets["apn.wgt.polygon"].exePropGet.call(this, e, t, a, i);
  }),
  (apn.widgets["apn.wgt.polyline"] = xa),
  (xa = {}),
  (xa.apnWgtImgDOM2 = !0),
  (xa.styleMap = {
    title: !0,
    visibility: !0,
    mediaID: !0,
    angle: !0,
    alpha: !0,
    dragX: !0,
    dragY: !0,
    dragInParent: !0,
    dragContainParent: !0,
    csr: !0,
    keepRatio: !0,
  }),
  (xa.exeScriptMediaID = !0),
  (xa.properties = {}),
  (xa.properties.attrs = { cfg: { mr: 0, svgKR: "Y" } }),
  (xa.exeCreateTag = function (e, t, a, i, n, r) {
    var o = a.create.data.properties ? a.create.data.properties.attrs : void 0,
      s = o && (2 == o.svg || (o.cfg && "Y" == o.cfg.svgKR)),
      p = o && o.svg;
    if (o && ((o.cfg && parseInt(o.cfg.mr) >= 1) || p)) {
      var l = document.body.$TAG("div", {
        style: "position:absolute;cursor:inherit;",
      });
      s
        ? (l.$ObC = l.$TAG("img", {
            style: "position:absolute;left:0;top:0;width:100%;height:100%;",
            alt: "",
          }))
        : ((l.$ObC = l.$TAG("div", {
            style: "position:absolute;left:0;top:0;width:100%;height:100%;",
          })),
          (l._tagSvg = l.$ObC.$TAG("img", {
            style: "position:absolute;left:0;top:0;",
            alt: "",
          })));
    } else
      var l = $TAG("img", {
        style: "position:absolute;cursor:inherit;",
        alt: "",
      });
    return l.$CSS({ boxSizing: "border-box" }), (l.apnCur = {}), l;
  }),
  (xa.exeRenderTag = function (e, t, a, i, n, r) {
    function o(e) {
      s && bx.$copyObject(e, s);
    }
    var s,
      p = i.create.data.styles;
    return (
      p.strokeStyle &&
        p.lineWidth &&
        ((s = {}),
        (s.strokeStyle = p.strokeStyle),
        (s.lineWidth = p.lineWidth)),
      this.apnWgtImgDOM2 && e.o.exeDOM2
        ? apn.IWidget.exeRenderTagV2.call(this, e, t, a, i, n, r, s)
        : apn.IWidget.exeRenderTagV1.call(this, e, t, a, i, n, r, o),
      (a.style.overflow = "hidden"),
      (a.tagOnPostResize = function (e, t) {
        apn.widgets["apn.wgt.image"]._resizeImage(e, t);
      }),
      a
    );
  }),
  (xa.exeAssetLoad = function (e, t, a, i) {
    function n(a, i, n) {
      (a.onload = function () {
        bx.HCL.DV.isIE() &&
          (document.body.appendChild(a),
          (a.ieWidth = a.offsetWidth),
          (a.ieHeight = a.offsetHeight),
          t.$ObC.appendChild(a)),
          n(),
          (a.style.visibility = "visible"),
          o.exeOnCheckContentLoad &&
            e.fireEvent(
              "contentLoad",
              "i",
              t.apnOID,
              !0,
              e.project.property.allowImmediateContentLoad
            );
      }),
        (a.onerror = a.onabort =
          function () {
            window.console &&
              console.error("[APX] SVG file loading failed. url=" + this.src);
          }),
        (a.style.visibility = "hidden"),
        (a.src = i);
    }
    function r() {
      if (
        (apn.widgets["apn.wgt.image"]._resizeImage(apx, t),
        t.$ObC && p && p.cfg)
      ) {
        var e = "",
          a = "50% 50%";
        1 == p.cfg.mr
          ? (e += "rotateY(180deg)")
          : 2 == p.cfg.mr
          ? (e += "rotateX(180deg)")
          : 3 == p.cfg.mr &&
            ((a = "50% 50%"), (e += "rotateX(180deg) rotateY(180deg)")),
          e && (t.$ObC.$CSS("transformOrigin", a), t.$ObC.$CSS("transform", e));
      }
    }
    var o = this,
      s = e.screen.objects[t.apnOID].create.data,
      p = s.properties ? s.properties.attrs : void 0;
    if (i) {
      var l = t.$ObC || t;
      return void (l.src = "");
    }
    if ((a || (s && s.styles && (a = s.styles.mediaID)), a))
      if (t._tagSvg) n(t._tagSvg, e.mediaURL(a, !0) || a, r);
      else {
        var l = t.$ObC || t;
        (l.onload = function () {
          o.exeOnCheckContentLoad &&
            e.fireEvent(
              "contentLoad",
              "i",
              t.apnOID,
              !0,
              e.project.property.allowImmediateContentLoad
            );
        }),
          (l.src = e.mediaURL(a, !0) || a),
          r();
      }
  }),
  (xa.exeOnLoad = function (e, t) {
    "Transparent" == e.wgtGetProperty(t, "EventProcess") &&
      e.tagPassPointerEvent(e.wgtTag(t), !0);
  }),
  (xa._resizeImage = function (e, t) {
    if (t._tagSvg) {
      var a = t._tagSvg.ieWidth || t._tagSvg.naturalWidth || t._tagSvg.width,
        i = t._tagSvg.ieHeight || t._tagSvg.naturalHeight || t._tagSvg.height;
      (parseInt(t.style.width) == a && parseInt(t.style.height) == i) ||
        (t._tagSvg.$CSS("transformOrigin", "0 0"),
        t._tagSvg.$CSS(
          "transform",
          "scale(" +
            parseInt(t.style.width) / a +
            "," +
            parseInt(t.style.height) / i +
            ")"
        ));
    }
  }),
  (apn.widgets["apn.wgt.image"] = xa),
  (xa = apn.inheritWidget(apn.widgets["apn.wgt.image"])),
  (xa.apnWgtImgDOM2 = !0),
  (xa.styleMap = {
    title: !0,
    visibility: !0,
    mediaID: !0,
    strokeStyle: !0,
    lineWidth: !0,
    lineDash: !0,
    fillStyle: !0,
    borderRadiusTopLeft: !0,
    borderRadiusTopRight: !0,
    borderRadiusBottomLeft: !0,
    borderRadiusBottomRight: !0,
    angle: !0,
    alpha: !0,
    dragX: !0,
    dragY: !0,
    dragInParent: !0,
    dragContainParent: !0,
    csr: !0,
    keepRatio: !0,
  }),
  (xa.exeScriptMediaID = !0),
  (xa.styles = { lineWidth: 0, fillStyle: "transparent" }),
  (xa.exeOnCheckContentLoad = function (e, t, a) {
    return { i: "Image" };
  }),
  (apn.widgets["apn.wgt.svg"] = xa),
  (xa = apn.inheritWidget(apn.widgets["apn.wgt.image"])),
  (xa.apnWgtImg2DOM2 = !0),
  (xa.styleMap = {
    title: !0,
    visibility: !0,
    strokeStyle: !0,
    lineWidth: !0,
    lineDash: !0,
    fillStyle: !0,
    borderRadiusTopLeft: !0,
    borderRadiusTopRight: !0,
    borderRadiusBottomLeft: !0,
    borderRadiusBottomRight: !0,
    alpha: !0,
    angle: !0,
    mediaID: !0,
    dragX: !0,
    dragY: !0,
    dragInParent: !0,
    dragContainParent: !0,
    csr: !0,
  }),
  (xa.exeScriptMediaID = !0),
  (xa.editor = {
    runtimeProperties: { ImageURL: { title: "Image URL", input: "http://" } },
  }),
  (xa.styles = { lineWidth: 0, fillStyle: "transparent" }),
  (xa.properties.attrs = { cfg: { mr: 0 } }),
  (xa.exeOnLoad = function (e, t) {
    function a(a, i) {
      a == t &&
        (r.imageCrop && delete r.imageCrop,
        r._bkImageCrop && delete r._bkImageCrop,
        apn.widgets["apn.wgt.image2"].exeAssetLoad(e, r, i));
    }
    function i(a, i) {
      if (a == t) {
        var n, s;
        if (i)
          try {
            (n = JSON.parse(i)),
              void 0 !== n.x && void 0 !== n.y && (o.$ObD(e, t, n), (s = !0));
          } catch (e) {}
        s
          ? r.imageCrop && ((r._bkImageCrop = r.imageCrop), delete r.imageCrop)
          : o.$ObE(e, t);
      }
    }
    function n(a, i) {
      if (a == t) {
        var n = 0;
        i && i.x && i.y ? (n = 3) : i && i.x ? (n = 2) : i && i.y && (n = 1),
          apn.widgets["apn.wgt.image2"]._mirrorSetup(e, r, !0),
          apn.widgets["apn.wgt.image2"]._mirrorApply(e, r, n);
      }
    }
    var r = e.wgtTag(t);
    e.wgtListenProperty(t, "ImageURL", a);
    var o = this;
    e.wgtListenProperty(t, "crop", i), e.wgtListenProperty(t, "mirror", n);
  }),
  (xa.exeCreateTag = apn.widgets["apn.wgt.rect"].exeCreateTag),
  (xa.exeRenderTag = function (e, t, a, i, n, r) {
    function o(e) {
      s && bx.$copyObject(e, s);
    }
    var s,
      p = i.create.data.styles;
    if (
      (p.strokeStyle &&
        p.lineWidth &&
        ((s = {}),
        (s.strokeStyle = p.strokeStyle),
        (s.lineWidth = p.lineWidth)),
      a.apnCur.apxCreatedFromTag && 1 == n && 1 == r)
    ) {
      var l = apn.IWidget.exeRenderTagVhtml.call(this, e, t, a, i, n, r);
      a.apnCur._apxTextStack = { styles: l, data: i, zx: n, zy: r };
    } else
      this.apnWgtImg2DOM2 && e.o.exeDOM2
        ? apn.IWidget.exeRenderTagV2.call(this, e, t, a, i, n, r, s)
        : apn.IWidget.exeRenderTagV1.call(this, e, t, a, i, n, r, o);
    (apn.Project.resolveStyle(
      e.project,
      "borderRadiusTopLeft",
      p.borderRadiusTopLeft
    ) ||
      apn.Project.resolveStyle(
        e.project,
        "borderRadiusTopRight",
        p.borderRadiusTopRight
      ) ||
      apn.Project.resolveStyle(
        e.project,
        "borderRadiusBottomLeft",
        p.borderRadiusBottomLeft
      ) ||
      apn.Project.resolveStyle(
        e.project,
        "borderRadiusBottomRight",
        p.borderRadiusBottomRight
      )) &&
      (a.style.overflow = "hidden");
    var d = i.create.data.properties;
    apn.Project.isInHTML(t.project, t.getPageID(), a.apnOID) &&
      d &&
      (d.attrs &&
        d.attrs.cfg &&
        void 0 !== d.attrs.cfg.mr &&
        delete d.attrs.cfg.mr,
      d.imgCrop && delete d.imgCrop),
      d &&
        d.attrs &&
        d.attrs.cfg &&
        parseInt(d.attrs.cfg.mr) >= 1 &&
        apn.widgets["apn.wgt.image2"]._mirrorSetup(t, a),
      d && d.imgCrop && (a.imageCrop = d.imgCrop),
      (a.tagOnPostResize = function (e, a) {
        if (
          (a.uTagHolder &&
            ((a.uTagHolder.style.width = a.style.width),
            (a.uTagHolder.style.height = a.style.height)),
          a.imageCrop &&
            bx.CImageEditor.applyToDIV(a.uTagHolder || a, a.imageCrop),
          2 != a.apnCur._apnWgtRectTV)
        ) {
          var i = t.wgtGetProperty(a.apnOID, "apxText");
          i && ((a.apnCur.forced = !0), apn.IWidget.exeSetText(a, i));
        }
      });
  }),
  (xa.exeAssetLoad = function (e, t, a, i) {
    if (this.styleMap.text || this.apnWgtImg2oldLoad || !this.styleMap.dragX) {
      if (i)
        return (
          (t.style.backgroundImage = "none"), void (t.$ObG && (t.$ObG.src = ""))
        );
      var n = e.screen.objects[t.apnOID].create.data;
      !a &&
        n &&
        (n.styles && n.styles.mediaID
          ? (a = n.styles.mediaID)
          : n.properties &&
            n.properties.attrs &&
            (n.properties.attrs.URL || n.properties.attrs.URL2) &&
            (a =
              n.properties.attrs.URL2 && e.viewer.o.standAlone
                ? n.properties.attrs.URL2
                : n.properties.attrs.URL)),
        a &&
          (t.$CSS("backgroundSize", "100% 100%"),
          (t.style.backgroundRepeat = "no-repeat"),
          (t.style.backgroundImage = "url(" + (e.mediaURL(a, !0) || a) + ")"),
          t.$ObG ||
            (t.$ObG = t.$TAG("img", { style: "display:none;", alt: "" })),
          (t.$ObG.src = e.mediaURL(a, !0) || a));
    } else {
      var r = !1;
      apn.IWidget.isInAnimation(e, t.apnOID) &&
        (r =
          (bx.HCL.DV.isIE() && bx.HCL.DV.isIE() > 8) ||
          "edge" == bx.HCL.DV.getBrowserType() ||
          bx.HCL.DV.isFirefox());
      var o = t.uTagHolder || t;
      if (i)
        return void (
          o.$ObG && (o.$ObG.parentNode.removeChild(o.$ObG), delete o.$ObG)
        );
      var n = e.screen.objects[t.apnOID].create.data;
      if (
        (a ||
          (n && n.styles && n.styles.mediaID
            ? (a = n.styles.mediaID)
            : n &&
              n.properties &&
              n.properties.attrs &&
              (n.properties.attrs.URL || n.properties.attrs.URL2) &&
              (a =
                n.properties.attrs.URL2 && e.viewer.o.standAlone
                  ? n.properties.attrs.URL2
                  : n.properties.attrs.URL)),
        a)
      ) {
        var s = this;
        if (
          (o.$ObG ||
            (o.$ObG = o.$TAG(r ? "canvas" : "img", {
              style:
                "cursor:inherit;position:absolute;left:0px;top:0px;width:100%;height:100%;",
            })),
          r)
        )
          var p = new Image();
        else {
          var p = o.$ObG;
          p.setAttribute("alt", "");
        }
        e.tagPassPointerEvent(o.$ObG, !0),
          (p.onload = function () {
            var a = t.uTagHolder || t;
            if (
              ((a.$ObG._orgW = this.naturalWidth || this.width),
              (a.$ObG._orgH = this.naturalHeight || this.height),
              r)
            ) {
              (a.$ObG.width = a.$ObG._orgW), (a.$ObG.height = a.$ObG._orgH);
              var i = a.$ObG.getContext("2d");
              i.clearRect(0, 0, i.canvas.width, i.canvas.height),
                i.drawImage(this, 0, 0, i.canvas.width, i.canvas.height);
            }
            t.$ObF
              ? s.$ObD(e, t.apnOID, t.$ObF)
              : t.imageCrop &&
                ((a.imeImage = a.$ObG),
                (t.style.overflow = "hidden"),
                bx.CImageEditor.applyToDIV(a, t.imageCrop)),
              (t._loadedImage = this),
              e.wgtTag(t.apnOID, !0) &&
                (e.fireApxMediaEvent(t.apnOID, "load", this),
                s.exeOnCheckContentLoad &&
                  e.fireEvent(
                    "contentLoad",
                    "i",
                    t.apnOID,
                    !0,
                    e.project.property.allowImmediateContentLoad
                  ));
          }),
          (t._loadedImage = void 0),
          (p.src = e.mediaURL(a, !0) || a),
          t.imageCrop ||
            (o.$ObG.style.cssText =
              "cursor:inherit;position:absolute;left:0px;top:0px;width:100%;height:100%;"),
          n &&
            n.properties &&
            n.properties.attrs &&
            n.properties.attrs.cfg &&
            apn.widgets["apn.wgt.image2"]._mirrorApply(
              e,
              t,
              n.properties.attrs.cfg.mr
            );
      }
    }
  }),
  (xa.exeGetImage = function (e, t) {
    var a = e.wgtTag(t);
    return a._loadedImage;
  }),
  (xa.exeGetSizeByContent = function (e, t, a, i) {
    var n = e.screen.objects[t].init.shape.w,
      r = e.screen.objects[t].init.shape.h,
      o = this.exeGetImage(e, t);
    if (!o || !o.width || !o.height)
      return (
        e.log(
          t,
          "Cannot get the size of image because its image file is not loaded yet."
        ),
        { w: 0, h: 0 }
      );
    var s = o.naturalWidth || o.width,
      p = o.naturalHeight || o.height;
    return a || i
      ? a && i
        ? { w: s - n, h: p - r }
        : i
        ? { w: 0, h: Math.round((p * n) / s) - r }
        : { w: Math.round((s * r) / p) - n, h: 0 }
      : { w: 0, h: 0 };
  }),
  (xa.exeOnCheckContentLoad = function (e, t, a) {
    return { i: "Image" };
  }),
  (xa.$ObD = function (e, t, a) {
    var i = e.wgtTag(t),
      n = i.uTagHolder || i;
    i.$ObF = a;
    var r = n.$ObG;
    r &&
      r._orgW &&
      r._orgH &&
      ((r.style.left = -(a.x * (1 / e.getZoomX())) + "px"),
      (r.style.top = -(a.y * (1 / e.getZoomY())) + "px"),
      (r.style.width = r._orgW * (1 / e.getZoomX()) + "px"),
      (r.style.height = r._orgH * (1 / e.getZoomY()) + "px"),
      (i.style.overflow = "hidden"));
  }),
  (xa.$ObE = function (e, t) {
    var a = e.wgtTag(t),
      i = a.uTagHolder || a;
    a.$ObF && delete a.$ObF,
      i.$ObG &&
        ((i.$ObG.style.cssText =
          "cursor:inherit;position:absolute;left:0px;top:0px;width:100%;height:100%;"),
        !a.imageCrop &&
          a._bkImageCrop &&
          ((a.imageCrop = a._bkImageCrop),
          delete a._bkImageCrop,
          bx.CImageEditor.applyToDIV(i, a.imageCrop)));
  }),
  (xa._mirrorSetup = function (e, t, a) {
    if (!t.uTagHolder) {
      var i = parseInt(t.style.width),
        n = parseInt(t.style.height);
      (i -= 2 * bx.$checkNaN(parseInt(t.style.borderWidth))),
        (n -= 2 * bx.$checkNaN(parseInt(t.style.borderWidth))),
        (t.uTagHolder = t.$TAG("div", {
          style:
            "position:absolute;cursor:inherit;left:0px;top:0px;width:" +
            i +
            "px;height:" +
            n +
            "px;",
        })),
        t.$ObG &&
          (t.uTagHolder.appendChild(t.$ObG),
          (t.uTagHolder.$ObG = t.$ObG),
          delete t.$ObG);
    }
  }),
  (xa._mirrorApply = function (e, t, a) {
    1 == a
      ? (t.uTagHolder.$CSS("transformOrigin", "50% 50%"),
        t.uTagHolder.$CSS("transform", "rotateY(180deg)"))
      : 2 == a
      ? (t.uTagHolder.$CSS("transformOrigin", "50% 50%"),
        t.uTagHolder.$CSS("transform", "rotateX(180deg)"))
      : 3 == a
      ? (t.uTagHolder.$CSS("transformOrigin", "50% 50%"),
        t.uTagHolder.$CSS("transform", "rotateX(180deg) rotateY(180deg)"))
      : t.uTagHolder && t.uTagHolder.$CSS("transform", "none");
  }),
  (apn.widgets["apn.wgt.image2"] = xa),
  (xa = {}),
  (xa.styleMap = {
    title: !0,
    visibility: !0,
    mediaID: !0,
    angle: !0,
    alpha: !0,
    dragX: !0,
    dragY: !0,
    dragInParent: !0,
    dragContainParent: !0,
    csr: !0,
  }),
  (xa.exeScriptMediaID = !0),
  (xa.properties = { attrs: {} }),
  (xa.exeCreateTag = function (e, t, a, i, n, r) {
    var o;
    if (
      e.o.standAlone &&
      r &&
      (o = apn.CExe.getElementByAttr("img", "data-apx-id", r))
    )
      (o.apnCur = {}), (o.apnCur.apxCreatedFromTag = !0);
    else {
      o = $TAG("img", { style: "position:absolute;cursor:inherit;" });
      var s = a.create.data.properties.attrs;
      o.setAttribute(
        "alt",
        s.alt
          ? e.o.exeXML && !e.o.exePreview
            ? apn.IWidget.exeFormatText(s.alt, { xml: !0, noTag: !0 })
            : s.alt
          : ""
      ),
        s.ttip &&
          o.setAttribute(
            "title",
            e.o.exeXML && !e.o.exePreview
              ? apn.IWidget.exeFormatText(s.ttip, { xml: !0, noTag: !0 })
              : s.ttip
          ),
        (o.apnCur = {});
    }
    return o.$CSS({ boxSizing: "border-box" }), o;
  }),
  (xa.exeRenderTag = function (e, t, a, i, n, r) {
    return (
      a.apnCur.apxCreatedFromTag && 1 == n && 1 == r
        ? apn.IWidget.exeRenderTagVhtml.call(this, e, t, a, i, n, r)
        : apn.IWidget.exeRenderTagV1.call(this, e, t, a, i, n, r),
      a
    );
  }),
  (xa.exeAssetLoad = function (e, t, a, i) {
    if (
      t.width &&
      t.height &&
      t.apnCur.apxCreatedFromTag &&
      !t.apnCur.apxAssetLoadTried
    )
      return void (t.apnCur.apxAssetLoadTried = !0);
    if (
      (a ||
        (e.screen.objects[t.apnOID].create.data &&
          e.screen.objects[t.apnOID].create.data.styles &&
          (a = e.screen.objects[t.apnOID].create.data.styles.mediaID)),
      a)
    ) {
      var n = this;
      (t.onload = function () {
        e.fireApxMediaEvent(t.apnOID, "load", this),
          n.exeOnCheckContentLoad &&
            e.fireEvent(
              "contentLoad",
              "i",
              t.apnOID,
              !0,
              e.project.property.allowImmediateContentLoad
            );
      }),
        (t.src = e.mediaURL(a, !0) || a);
    }
  }),
  (xa.exeOnStart = function (e, t) {
    var a = e.wgtTag(t);
    a.apnCur.apxAssetLoadTried &&
      (e.fireApxMediaEvent(t, "load", a),
      this.exeOnCheckContentLoad &&
        e.fireEvent(
          "contentLoad",
          "i",
          t,
          !0,
          e.project.property.allowImmediateContentLoad
        ));
  }),
  (apn.widgets["apn.wgt.image0"] = xa),
  (xa = apn.inheritWidget(apn.widgets["apn.wgt.image0"])),
  (xa.styleMap = {
    title: !0,
    visibility: !0,
    fillStyle: !0,
    mediaID: !0,
    angle: !0,
    alpha: !0,
    dragX: !0,
    dragY: !0,
    dragInParent: !0,
    dragContainParent: !0,
    csr: !0,
  }),
  (xa.styles = { fillStyle: null }),
  (xa.exeScriptMediaID = !0),
  (xa.exeOnCheckContentLoad = function (e, t, a) {
    return { i: "Image" };
  }),
  (apn.widgets["apn.wgt.image0a"] = xa),
  (xa = apn.inheritWidget(apn.widgets["apn.wgt.image0"])),
  (xa.styleMap = {
    title: !0,
    visibility: !0,
    fillStyle: !0,
    mediaID: !0,
    angle: !0,
    alpha: !0,
    dragX: !0,
    dragY: !0,
    dragInParent: !0,
    dragContainParent: !0,
    csr: !0,
    keepRatio: !0,
  }),
  (xa.styles = { fillStyle: null }),
  (xa.exeScriptMediaID = !0),
  (xa.properties = xa.properties || {}),
  (xa.properties.attrs = xa.properties.attrs || {}),
  (xa.properties.attrs.svg = !0),
  (xa.exeOnCheckContentLoad = function (e, t, a) {
    return { i: "Image" };
  }),
  (apn.widgets["apn.wgt.svg0"] = xa),
  (xa = {}),
  (xa.styleMap = {
    title: !0,
    visibility: !0,
    font: !0,
    fontSize: !0,
    fontStyle: !0,
    fontItalic: !0,
    fontBold: !0,
    textMultiLine: !0,
    fontUnderlined: !0,
    text: !0,
    textAlign: !0,
    textValign: !0,
    textPadding: !0,
    textWordWrap: !0,
    ltrSp: !0,
    fontStrokeStyle: !0,
    fontStrokeWidth: !0,
    alpha: !0,
    angle: !0,
    mediaID: !0,
    dragX: !0,
    dragY: !0,
    dragInParent: !0,
    dragContainParent: !0,
    csr: !0,
  }),
  (xa.exeScriptMediaID = !0),
  (xa.apnWgtRectVer = 2),
  (xa.editor = {}),
  (xa.editor.properties = { apnPadding: { title: "Padding", input: "" } }),
  (xa.properties = { ver: 2, attrs: { apnPadding: "" } }),
  (xa.exeCreateTag = apn.widgets["apn.wgt.rect"].exeCreateTag),
  (xa.exeRenderTag = apn.widgets["apn.wgt.rect"].exeRenderTag),
  (xa.exeOnScreenRefresh = apn.widgets["apn.wgt.rect"].exeOnScreenRefresh),
  (xa.exeGetSizeByContent = apn.widgets["apn.wgt.rect"].exeGetSizeByContent),
  (xa.exePropGet = apn.widgets["apn.wgt.rect"].exePropGet),
  (xa.exeAssetLoad = function (e, t, a, i) {
    return i
      ? void (t.style.backgroundImage = "none")
      : (a ||
          (e.screen.objects[t.apnOID].create.data &&
            e.screen.objects[t.apnOID].create.data.styles &&
            (a = e.screen.objects[t.apnOID].create.data.styles.mediaID)),
        void (
          a &&
          (t.$CSS("backgroundSize", "100% 100%"),
          (t.style.backgroundRepeat = "no-repeat"),
          (t.style.backgroundImage = "url(" + (e.mediaURL(a, !0) || a) + ")"))
        ));
  }),
  (apn.widgets["apn.wgt.imageText"] = xa),
  (xa = apn.inheritWidget(apn.widgets["apn.wgt.imageText"])),
  (xa.styleMap = {
    title: !0,
    visibility: !0,
    strokeStyle: !0,
    lineWidth: !0,
    lineDash: !0,
    fillStyle: !0,
    borderRadiusTopLeft: !0,
    borderRadiusTopRight: !0,
    borderRadiusBottomLeft: !0,
    borderRadiusBottomRight: !0,
    alpha: !0,
    angle: !0,
    mediaID: !0,
    dragX: !0,
    dragY: !0,
    dragInParent: !0,
    dragContainParent: !0,
    csr: !0,
  }),
  (xa.exeCreateTag = function (e, t, a, i, n) {
    var r = apn.widgets["apn.wgt.rect"].exeCreateTag.call(this, e, t, a, i, n);
    return (
      (r.imageTag = r.$TAG("img", { style: "position:absolute;", alt: "" })),
      (r.imageTag.onload = function () {
        (this.width = Math.round(this.naturalWidth * i)),
          (this.height = Math.round(this.naturalHeight * n)),
          (this.style.left =
            (parseInt(this.parentNode.style.width) - this.width) / 2 -
            this.parentNode.apnLW +
            "px"),
          (this.style.top =
            (parseInt(this.parentNode.style.height) - this.height) / 2 -
            this.parentNode.apnLW +
            "px");
      }),
      r
    );
  }),
  (xa.exeOnScreenRefresh = void 0),
  (xa.exeAssetLoad = function (e, t, a, i) {
    return i
      ? void (t.imageTag.src = "")
      : (a ||
          (e.screen.objects[t.apnOID].create.data &&
            e.screen.objects[t.apnOID].create.data.styles &&
            (a = e.screen.objects[t.apnOID].create.data.styles.mediaID)),
        void (a && (t.imageTag.src = e.mediaURL(a, !0) || a)));
  }),
  (apn.widgets["apn.wgt.imageRect"] = xa),
  (xa = {}),
  (xa.exeFireStateEvent = !0),
  (xa.styleMap = {
    title: !0,
    visibility: !0,
    alpha: !0,
    state: !0,
    dragX: !0,
    dragY: !0,
    dragInParent: !0,
    dragContainParent: !0,
    borderRadiusTopLeft: !0,
    borderRadiusTopRight: !0,
    borderRadiusBottomLeft: !0,
    borderRadiusBottomRight: !0,
    csr: !0,
  }),
  (xa.styles = { lineWidth: 0 }),
  (xa.editor = { iconThumb: "imgs/wgts/thumbs/multi_layer_container.png" }),
  (xa.properties = { attrs: { ofl: "", Mode: "" } }),
  (xa.useLayerOverflow = !0),
  (xa.exeCreateTag = function (e, t, a, i, n, r) {
    if (
      e.o.standAlone &&
      r &&
      apn.CExe.getElementByAttr("div", "data-apx-id", r)
    ) {
      var o = apn.CExe.getElementByAttr("div", "data-apx-id", r);
      (o.style.overflow = "hidden"),
        (o.apnCur = {}),
        (o.apnCur.apxCreatedFromTag = !0);
    } else {
      var o = document.body.$TAG("div", {
        style: "position:absolute;overflow:hidden;",
      });
      o.apnCur = {};
    }
    return o;
  }),
  (xa.exeRenderTag = function (e, t, a, i, n, r) {
    var o = i.create.data.styles,
      s = apn.IWidget.getCanvasObjectStyle({}, this, e.project, o);
    return (
      apn.IWidget.exeSetAlpha(a, s.alpha),
      apn.IWidget.exeRenderSize(e, t, a, i, e.project, n, r),
      apn.IWidget.exeRenderPosition(t, a, i, e.project, n, r),
      apn.IWidget.$O6x(s, a, n, r),
      10 == bx.HCL.DV.isIE() &&
        ((a.style.backgroundColor = "rgba(255,255,255,0)"),
        (a._apxIE10eventPassProblem = !0)),
      a
    );
  }),
  (xa.exeSetState = function (e, t, a, i, n) {
    a != i &&
      e.fireEvent("stateChange", a, t.apnOID, void 0, void 0, void 0, n);
  }),
  (xa.exeOnLoad = function (e, t) {
    function a(a, i) {
      if (a == t) {
        var n = e.screen.objects[t].layout.layers;
        for (var r in n)
          (layerData = e.screen.objects[n[r].id]),
            (layerData.init.shape.w = e.screen.objects[t].init.shape.w),
            (layerData.init.shape.h = e.screen.objects[t].init.shape.h),
            (layerData.x_o_w = layerData.init.shape.w),
            (layerData.x_o_h = layerData.init.shape.h),
            apn.IWidget.exeRenderSize(
              e.viewer,
              e,
              e.wgtTag(n[r].id),
              e.screen.objects[n[r].id],
              e.project,
              1 / e.getZoomX(),
              1 / e.getZoomY()
            );
      }
    }
    function i(a, i, r, o, s, p, l) {
      "click" == n.__scrollContainer_showEvent
        ? i == bx.CGesture.POINTER_START &&
          (bx.DOM.IsDescendantOf(bx.Event.getElement(l), n) ||
            bx.Event.getElement(l) == n ||
            ((n.style.display = "none"), e.fireEvent("wgtEvent", "hd", t)))
        : "tapStart" == n.__scrollContainer_showEvent &&
          i == bx.CGesture.POINTER_START &&
          (bx.DOM.IsDescendantOf(bx.Event.getElement(l), n) ||
            bx.Event.getElement(l) == n ||
            (n.__scrollContainer_show
              ? delete n.__scrollContainer_show
              : ((n.style.display = "none"),
                e.fireEvent("wgtEvent", "hd", t))));
    }
    var n = e.wgtTag(t);
    e.wgtListenProperty(t, "layout", a),
      "dd" == e.wgtGetProperty(t, "Mode") &&
        (new bx.CGesture(document, i, {
          noDelayedEvent: !0,
          noLongholdEvent: !0,
        }),
        "block" == n.style.display &&
          apn.widgets["apn.wgt.scrollContainer"]._onDdShow(n, "click"));
  }),
  (xa.exeOnStart = function (e, t) {
    var a = e.wgtTag(t);
    if ("Y" == e.wgtGetProperty(t, "ofl") && a.childNodes) {
      for (var i = 0; i < a.childNodes.length; i++)
        a.childNodes[i].apnOID && (a.childNodes[i].style.overflow = "visible");
      a.style.overflow = "visible";
    }
    "dd" == e.wgtGetProperty(t, "Mode") &&
      e.fireEvent("wgtEvent", "none" == a.style.display ? "hd" : "sh", t);
  }),
  (xa.exeOnShow = function (e, t, a, i) {
    "dd" == e.wgtGetProperty(t, "Mode") &&
      ("click" != i && "tapStart" != i && (i = "click"),
      a && apn.widgets["apn.wgt.scrollContainer"]._onDdShow(e.wgtTag(t), i),
      e.fireEvent("wgtEvent", a ? "sh" : "hd", t));
  }),
  (xa.exeOnCloneLayer = function (e, t) {
    var a = e.stateGetActive(t);
    e.stateLayerActivate(t, a, !0), e.stateSetActive(t, a);
  }),
  (xa.edtOnBuildEvent = function (e, t, a, n) {
    var r = e.pages[a].objects[t].create.data;
    r &&
      r.properties &&
      r.properties.attrs &&
      "dd" == r.properties.attrs.Mode &&
      ((n.wgtEvent = {
        value: "wgtEvent",
        title: apn.P.eventTitle.wgtEvent,
        param: {},
      }),
      (n.wgtEvent.param.sh = "Show"),
      (n.wgtEvent.param.hd = "Hide"));
    var o = apn.Project.findITRs(e, a, t);
    if (o && o.length) {
      var s;
      for (i = 0; i < o.length; i++)
        (s = apn.P.resolveCompositeSysEV(o[i].event)),
          !s ||
            !s.param ||
            "wgtEvent" != s.ev ||
            (n.wgtEvent && n.wgtEvent.param[s.param]) ||
            ((n.wgtEvent = n.wgtEvent || {
              value: "wgtEvent",
              title: apn.P.eventTitle.wgtEvent,
              param: {},
            }),
            "sh" == s.param
              ? (n.wgtEvent.param.sh = "Show")
              : "hd" == s.param && (n.wgtEvent.param.hd = "Hide"));
    }
  }),
  (apn.widgets["apn.wgt.layerContainer"] = xa),
  (xa = apn.inheritWidget(apn.widgets["apn.wgt.layerContainer"])),
  (xa.styleMap = { title: !0, visibility: !0, alpha: !0, state: !0, csr: !0 }),
  (xa.exeFireStateEvent = !0),
  (xa.editor = {
    iconThumb: "imgs/wgts/thumbs/pageContainer.png",
    properties: {
      Direction: ["Horizontal", "Vertical"],
      Effect: [
        apn.P.effectTitle.move,
        apn.P.effectTitle.slideUp,
        apn.P.effectTitle.cardUp,
        apn.P.effectTitle.glue,
        apn.P.effectTitle.timeLag,
        apn.P.effectTitle.cube,
      ],
      RoundUp: ["Yes", "No"],
    },
  });
xa.properties.attrs = {
  Effect: "Slide",
  Direction: "Horizontal",
  RoundUp: "Yes",
  apxStep: { current: 0, count: 1 },
};
(xa.exeOnLoad = function (e, t) {
  var a,
    i = e.screen.objects[t],
    n = 0;
  for (a in i.layout.layers) n++;
  if (n > 1) {
    var r,
      o,
      s = e.wgtGetProperty(t, "Direction") || "Horizontal",
      p = e.wgtGetProperty(t, "RoundUp") || "Yes",
      l = e.wgtGetProperty(t, "Effect");
    (l = l ? apn.P.effectFromTitle[l] : "move"),
      (o = apn.Project.findITRs(e.project, e.getPageID(), t, !0)),
      (r = {
        action: "CWS",
        event: "Horizontal" == s ? "flickLeft" : "flickUp",
        target: { objectID: t, stateID: "Yes" == p ? "$RF" : "$F" },
        transit: { duration: 500 },
        _system: !0,
      }),
      (r.transit.effect = l + ("Horizontal" == s ? "Left" : "Top")),
      o.push(r),
      (r = {
        action: "CWS",
        event: "Horizontal" == s ? "flickRight" : "flickDown",
        target: { objectID: t, stateID: "Yes" == p ? "$RB" : "$B" },
        transit: { duration: 500 },
        _system: !0,
      }),
      (r.transit.effect = l + ("Horizontal" == s ? "Right" : "Bottom")),
      o.push(r);
  }
}),
  (xa.fireApxStep = function (e, t, a, i) {
    var n = [],
      r = e.screen.objects[t.apnOID].layout.layers;
    for (var o in r) n.push({ order: r[o].order, id: o });
    apn.UTIL.sort(n, "order", 1, !0);
    var s = n.length,
      p = -1;
    for (o = 0; o < n.length; o++)
      if (n[o].id == a) {
        p = o;
        break;
      }
    e.wgtSetProperty(t.apnOID, "apxStep", { current: p, count: s });
  }),
  (xa.exeSetState = function (e, t, a, n, r) {
    this.fireApxStep
      ? this.fireApxStep(e, t, a, n)
      : apn.widgets["apn.wgt.pagedContainer"].fireApxStep.call(
          this,
          e,
          t,
          a,
          n
        );
    var o,
      s,
      p = e.screen.objects[t.apnOID].layout.layers;
    for (i in p)
      if (i != a)
        for (
          o = e.getWidgetsByProperty("apxMediaControl", p[i].id), s = 0;
          s < o.length;
          s++
        )
          e.wgtTag(o[s]).apxBackgroundRun || e.wgtControlMedia(o[s], "stop");
    a != n &&
      e.fireEvent("stateChange", a, t.apnOID, void 0, void 0, void 0, r);
  }),
  (apn.widgets["apn.wgt.pagedContainer"] = xa),
  (xa = apn.inheritWidget(apn.widgets["apn.wgt.pagedContainer"])),
  (xa.exeFireStateEvent = !0),
  (xa.exeItrNoTapStart = !0),
  (xa.editor = {
    iconThumb: "imgs/wgts/thumbs/pageContainer.png",
    properties: {
      Effect: {
        title: "Drag Effect",
        input: [
          "None",
          apn.P.effectTitle.move,
          apn.P.effectTitle.cardUp,
          apn.P.effectTitle.cube0,
        ],
      },
      Direction: ["Horizontal", "Vertical"],
      RoundUp: ["Yes", "No"],
    },
  }),
  (xa.exeOnLoad = function (e, t) {
    function a(e, a) {
      e == t && (r.$ObH = a);
    }
    function i(a, i) {
      if (a == t) {
        var n = apn.widgets["apn.wgt.pagedContainer2"].$ObM(e, t, i);
        n.length &&
          (e.stateLayerActivate(t, n[0].id), e.stateSetActive(t, n[0].id));
      }
    }
    function n(a, i) {
      if (a == t) {
        var n = e.wgtGetProperty(t, "activePane"),
          r = apn.widgets["apn.wgt.pagedContainer2"].$ObM(e, t, n);
        if (r && r[i]) e.wgtSetProperty(t, "apxLayer", r[i].id);
        else {
          var o = apn.Project.getStateByObjectID(
            e.viewer.project,
            e.getPageID(),
            t
          );
          o &&
            (apn.UTIL.sort(o, "order", 1, !0),
            o[i] &&
              o[i].stateID &&
              e.wgtSetProperty(t, "apxLayer", o[i].stateID));
        }
      }
    }
    var r = e.wgtTag(t);
    e.wgtListenProperty(t, "disableDrag", a);
    e.wgtListenProperty(t, "activePane", i);
    var o = apn.Project.getStateByObjectID(e.viewer.project, e.getPageID(), t);
    if (o) {
      apn.UTIL.sort(o, "order", 1, !0);
      for (var s = [], p = 0; p < o.length; p++) s.push(o[p].title);
      e.wgtSetProperty(t, "allPane", s);
    }
    e.wgtListenProperty(t, "apxStepRun", n);
  }),
  (xa.exePropSet = function (e, t, a, i, n) {
    if ("layout" == a) {
      if (n) return !0;
      var r = e.screen.objects[t].layout.layers;
      for (var o in r)
        (layerData = e.screen.objects[r[o].id]),
          (layerData.init.shape.w = e.screen.objects[t].init.shape.w),
          (layerData.init.shape.h = e.screen.objects[t].init.shape.h),
          (layerData.x_o_w = layerData.init.shape.w),
          (layerData.x_o_h = layerData.init.shape.h),
          apn.IWidget.exeRenderSize(
            e.viewer,
            e,
            e.wgtTag(r[o].id),
            e.screen.objects[r[o].id],
            e.project,
            1 / e.getZoomX(),
            1 / e.getZoomY()
          );
    } else if ("disableBounceBack" == a) {
      if (n) return !0;
      e.wgtSetProperty(t, "_disableBB", i);
    } else if ("overflow" == a) {
      if (n) return !0;
      e.wgtSetProperty(t, "_overflowEF", i),
        i &&
          this.exeSetState.call(
            this,
            e,
            e.wgtTag(t),
            e.screen.objects[t].create.data.styles.state,
            e.screen.objects[t].create.data.styles.state
          );
    }
  }),
  (xa.$ObM = function (e, t, a) {
    var i = [],
      n = e.screen.objects[t].layout.layers;
    if (a && a.length) {
      var r = [];
      for (var o in n)
        r.push({
          order: n[o].order,
          id: o,
          layerOID: n[o].id,
          title: apn.Project.getStateTitleByObjectID(
            e.project,
            e.getPageID(),
            t,
            o
          ),
        });
      if (r && r.length) {
        var s, p;
        for (o = 0; o < a.length; o++) {
          for (p = !1, s = 0; s < r.length; s++)
            if (r[s].title == a[o]) {
              (p = !0), i.push(r[s]);
              break;
            }
          p ||
            e.log(
              t,
              "Invalid layer(pane) title='" +
                a[o] +
                "' is referenced from 'activePane' setting."
            );
        }
      }
    }
    return i;
  }),
  (xa.fireApxStep = function (e, t, a, i) {
    var n = e.wgtGetProperty(t.apnOID, "activePane"),
      r = e.screen.objects[t.apnOID].layout.layers,
      o = apn.widgets["apn.wgt.pagedContainer2"].$ObM(e, t.apnOID, n);
    if (!o.length) {
      for (var s in r) o.push({ order: r[s].order, id: s, layerOID: r[s].id });
      apn.UTIL.sort(o, "order", 1, !0);
    }
    var p = -1;
    for (s = 0; s < o.length; s++)
      if (o[s].id == a) {
        p = s;
        break;
      }
    e.wgtSetProperty(t.apnOID, "apxStep", { current: p, count: o.length });
  }),
  (xa.exeOnGetStateList = function (e, t) {
    var a = e.wgtGetProperty(t, "activePane"),
      i = e.screen.objects[t].layout.layers,
      n = apn.widgets["apn.wgt.pagedContainer2"].$ObM(e, t, a);
    if (!n.length) {
      for (var r in i) n.push({ order: i[r].order, id: r, layerOID: i[r].id });
      apn.UTIL.sort(n, "order", 1, !0);
    }
    for (var o = [], r = 0; r < n.length; r++) o.push(n[r].id);
    return o;
  }),
  (xa.exeSetState = function (e, t, a, i, n) {
    function r(a) {
      if ("left" == t.$ObH || "top" == t.$ObH) {
        if (a == -1) return !1;
      } else if ("right" == t.$ObH || "bottom" == t.$ObH) {
        if (1 == a) return !1;
      } else if (t.$ObH) return !1;
      if (e.wgtGetProperty(t.apnOID, "_disableBB")) {
        if (1 == a && !t._prvID && parseInt(c.style.left) >= 0)
          return (c.style.left = "0px"), !1;
        if (a == -1 && !t._nxtID && parseInt(c.style.left) <= 0)
          return (c.style.left = "0px"), !1;
      }
      return !0;
    }
    var o = e.wgtGetProperty(t.apnOID, "activePane"),
      s = e.screen.objects[t.apnOID].layout.layers,
      p = apn.widgets["apn.wgt.pagedContainer2"].$ObM(e, t.apnOID, o);
    if (!p.length) {
      for (var l in s) p.push({ order: s[l].order, id: l, layerOID: s[l].id });
      apn.UTIL.sort(p, "order", 1, !0);
    }
    var d = -1;
    for (l = 0; l < p.length; l++)
      if (p[l].id == a) {
        d = l;
        break;
      }
    if (d != -1) {
      var c,
        g,
        u,
        h = -1,
        x = -1;
      d >= 0 &&
        p.length &&
        ((c = e.wgtTag(p[d].layerOID)),
        d - 1 >= 0
          ? (x = d - 1)
          : "Yes" == e.wgtGetProperty(t.apnOID, "RoundUp") &&
            p.length > 2 &&
            (x = (d - 1 + p.length) % p.length),
        x != -1 && x != d
          ? ((g = e.wgtTag(p[x].layerOID)), (t._prvID = p[x].id))
          : (t._prvID = null),
        d + 1 <= p.length - 1
          ? (h = d + 1)
          : "Yes" == e.wgtGetProperty(t.apnOID, "RoundUp") &&
            p.length > 2 &&
            (h = (d + 1) % p.length),
        h != -1 && h != d
          ? ((u = e.wgtTag(p[h].layerOID)), (t._nxtID = p[h].id))
          : (t._nxtID = null)),
        c &&
          "None" != e.wgtGetProperty(t.apnOID, "Effect") &&
          (e.wgtGetProperty(t.apnOID, "_overflowEF") &&
            (bx.PageDrag.__effect ||
              ((bx.PageDrag.__effect = bx.PageDrag.$N2R),
              (bx.PageDrag.$N2R = function (e, t, a, i) {
                bx.PageDrag.__effect(e, t, a, i),
                  e.bxPageDrag.tagLT &&
                    ((e.bxPageDrag.tagLT.style.left =
                      parseInt(e.bxPageDrag.tagC.style.left) -
                      parseInt(e.bxPageDrag.tagLT.style.width) +
                      "px"),
                    (e.bxPageDrag.tagLT.style.display = "block")),
                  e.bxPageDrag.tagRB &&
                    ((e.bxPageDrag.tagRB.style.left =
                      parseInt(e.bxPageDrag.tagC.style.left) +
                      parseInt(e.bxPageDrag.tagC.style.width) +
                      "px"),
                    (e.bxPageDrag.tagRB.style.display = "block"));
              })),
            (c.style.left = "0px"),
            g &&
              ((g.style.left =
                parseInt(c.style.left) - parseInt(g.style.width) + "px"),
              (g.style.display = "block")),
            u &&
              ((u.style.left =
                parseInt(c.style.left) + parseInt(c.style.width) + "px"),
              (u.style.display = "block"))),
          t.onBxPageDragEnd ||
            (t.onBxPageDragEnd = function (a) {
              1 == a && t._nxtID
                ? (e.stateLayerActivate(t.apnOID, t._nxtID),
                  e.stateSetActive(t.apnOID, t._nxtID))
                : 2 == a &&
                  t._prvID &&
                  (e.stateLayerActivate(t.apnOID, t._prvID),
                  e.stateSetActive(t.apnOID, t._prvID));
            }),
          bx.PageDrag(
            t,
            c,
            g,
            u,
            apn.P.effectFromTitle[e.wgtGetProperty(t.apnOID, "Effect")] ||
              "move",
            "Horizontal" == e.wgtGetProperty(t.apnOID, "Direction") ? "x" : "y",
            { fnCanDrag: r }
          ),
          e.wgtGetProperty(t.apnOID, "_overflowEF") &&
            (t.style.overflow = "visible")),
        apn.widgets["apn.wgt.pagedContainer"].exeSetState.call(
          this,
          e,
          t,
          a,
          i,
          n
        );
    }
  }),
  (xa.exeOnCloneLayer = apn.widgets["apn.wgt.layerContainer"].exeOnCloneLayer),
  (apn.widgets["apn.wgt.pagedContainer2"] = xa),
  (xa = {}),
  (xa.styleMap = {
    title: !0,
    visibility: !0,
    alpha: !0,
    state: !0,
    dragX: !0,
    dragY: !0,
    dragInParent: !0,
    dragContainParent: !0,
    csr: !0,
  }),
  (xa.exeItrNoResize = !0),
  (xa.editor = { iconThumb: "imgs/wgts/thumbs/multi_scene_container.png" }),
  (xa.properties = { attrs: { ver: 2, ofl: "" } }),
  (xa.exeCreateTag = function (e, t, a, i, n) {
    var r = document.body.$TAG("div", {
      style: "position:absolute;overflow:hidden;",
    });
    return (
      (r.apnCur = {}),
      a.create.data &&
        a.create.data.properties &&
        a.create.data.properties.attrs &&
        a.create.data.properties.attrs.ver &&
        (r.apnCur.ver = a.create.data.properties.attrs.ver),
      r
    );
  }),
  (xa.exeRenderTag = function (e, t, a, i, n, r) {
    return (
      apn.widgets["apn.wgt.layerContainer"].exeRenderTag.call(
        this,
        e,
        t,
        a,
        i,
        n,
        r
      ),
      a
    );
  }),
  (xa.exeOnStart = function (e, t) {
    "Y" == e.wgtGetProperty(t, "ofl") &&
      (e.wgtTag(t).style.overflow = "visible");
  }),
  (apn.widgets["apn.wgt.sceneContainer"] = xa),
  (xa = {}),
  (xa.styleMap = { title: !0, visibility: !0, alpha: !0, state: !0, csr: !0 }),
  (xa.editor = {
    iconThumb: "imgs/wgts/thumbs/scroll_container.png",
    properties: {
      ScrollerX: { title: "ScrollbarX", input: ["Auto", "Always", "Hidden"] },
      ScrollerY: { title: "ScrollbarY", input: ["Auto", "Always", "Hidden"] },
      Mode: [
        { title: "Normal", value: "" },
        { title: "Dropdown", value: "dd" },
      ],
    },
    states: { ready: "Ready", refresh: "Refresh" },
  }),
  (xa.properties = { attrs: { ScrollerX: "Auto", ScrollerY: "Auto" } }),
  (xa.exeCreateTag = function (e, t, a, i, n) {
    var r = document.body.$TAG("div", { style: "position:absolute;" });
    return (
      r.$CSS({ boxSizing: "border-box" }),
      (r.apnCur = {}),
      (r.apnScroll = !0),
      bx.HCL.DV.hasTouchEvent() && r.$CSS("overflowScrolling", "touch"),
      "Hidden" == a.create.data.properties.attrs.ScrollerY
        ? (r.style.overflowY = "hidden")
        : "Always" == a.create.data.properties.attrs.ScrollerY
        ? (r.style.overflowY = "scroll")
        : (r.style.overflowY = "auto"),
      "Hidden" == a.create.data.properties.attrs.ScrollerX
        ? (r.style.overflowX = "hidden")
        : "Always" == a.create.data.properties.attrs.ScrollerX
        ? (r.style.overflowX = "scroll")
        : (r.style.overflowX = "auto"),
      bx.HCL.DV.isIE() && bx.HCL.DV.isIE() < 8
        ? r.setAttribute("className", "apnCExeScroll")
        : r.setAttribute("class", "apnCExeScroll"),
      r
    );
  }),
  (xa.exeRenderTag = apn.widgets["apn.wgt.layerContainer"].exeRenderTag),
  (xa.exeSetState = function (e, t, a, i, n) {
    if ("refresh" == a) {
      var r;
      e.wgtGetProperty(t.apnOID, "_scrollPaddingR") &&
        ((r = r || {}),
        (r.paddingRight = e.wgtGetProperty(t.apnOID, "_scrollPaddingR"))),
        e.wgtGetProperty(t.apnOID, "_scrollPaddingB") &&
          ((r = r || {}),
          (r.paddingBottom = e.wgtGetProperty(t.apnOID, "_scrollPaddingB")));
      var o = e.$ObI(e.screen.objects[t.apnOID], void 0, void 0, void 0, r);
      apn.IWidget.exeRenderSize(
        e.viewer,
        e,
        e.wgtTag(o),
        e.screen.objects[o],
        e.project,
        1 / e.getZoomX(),
        1 / e.getZoomY()
      );
    }
  }),
  (xa.exePropSet = function (e, t, a, i, n) {
    if ("layout" == a) {
      if (n) return !0;
      var r = !1;
      i && i.excludeHidden && (r = !0);
      var o;
      e.wgtGetProperty(t, "_scrollPaddingR") &&
        ((o = o || {}),
        (o.paddingRight = e.wgtGetProperty(t, "_scrollPaddingR"))),
        e.wgtGetProperty(t, "_scrollPaddingB") &&
          ((o = o || {}),
          (o.paddingBottom = e.wgtGetProperty(t, "_scrollPaddingB")));
      var s = e.$ObI(e.screen.objects[t], void 0, void 0, r, o);
      apn.IWidget.exeRenderSize(
        e.viewer,
        e,
        e.wgtTag(s),
        e.screen.objects[s],
        e.project,
        1 / e.getZoomX(),
        1 / e.getZoomY()
      );
    } else if ("paddingBottom" == a) {
      if (n) return !0;
      e.wgtSetProperty(t, "_scrollPaddingB", parseInt(i) || 0);
    } else if ("paddingRight" == a) {
      if (n) return !0;
      e.wgtSetProperty(t, "_scrollPaddingR", parseInt(i) || 0);
    }
  }),
  (xa.exePropGet = function (e, t, a, i) {
    return "paddingBottom" == a
      ? !!i || e.wgtGetProperty(t, "_scrollPaddingB") || 0
      : "paddingRight" == a
      ? !!i || e.wgtGetProperty(t, "_scrollPaddingR") || 0
      : void 0;
  }),
  (xa.exeOnLoad = function (e, t) {
    function a(e, t) {
      bx.HCL.DV.isIOS() &&
        bx.HCL.DV.hasTouchEvent() &&
        c.$CSS("overflowScrolling", "auto"),
        t ? (c.scrollLeft = e) : (c.scrollTop = e),
        setTimeout(function () {
          bx.HCL.DV.isIOS() &&
            bx.HCL.DV.hasTouchEvent() &&
            c.$CSS("overflowScrolling", "touch");
        }, 0);
    }
    function i(a, i) {
      "auto" == i || "hidden" == i
        ? (c.style["overflow" + a] = i)
        : "always" == i
        ? (c.style["overflow" + a] = "scroll")
        : e.log(
            t,
            "Unknown parameter for wgt.run(id,'displayBar" +
              a +
              ",...), param='" +
              i +
              "'"
          );
    }
    function n(e, a) {
      e == t && i("X", a);
    }
    function r(e, a) {
      e == t && i("Y", a);
    }
    function o(a, i) {
      if (a == t && i && i.w && i.h) {
        var n;
        e.wgtGetProperty(t, "_scrollPaddingR") &&
          ((n = n || {}),
          (n.paddingRight = e.wgtGetProperty(t, "_scrollPaddingR"))),
          e.wgtGetProperty(t, "_scrollPaddingB") &&
            ((n = n || {}),
            (n.paddingBottom = e.wgtGetProperty(t, "_scrollPaddingB")));
        var r = e.$ObI(e.screen.objects[t], i.w, i.h, void 0, n);
        apn.IWidget.exeRenderSize(
          e.viewer,
          e,
          e.wgtTag(r),
          e.screen.objects[r],
          e.project,
          1 / e.getZoomX(),
          1 / e.getZoomY()
        ),
          e.wgtSetProperty(t, "scrollArea", { w: i.w, h: i.h }, !0),
          e.wgtSetProperty(
            t,
            "scrollX",
            Math.round(c.scrollLeft * e.getZoomX()),
            !0
          ),
          e.wgtSetProperty(
            t,
            "scrollY",
            Math.round(c.scrollTop * e.getZoomY()),
            !0
          );
      }
    }
    function s(e, i) {
      if (e == t) {
        if (!c._scrollCntrVisible) return void (c._scrollCntrDlydScrollTo = i);
        if ("top" == i || "bottom" == i) {
          var n = parseInt(c.style.height),
            r = parseInt(c.firstChild.style.height),
            o = 0;
          c.clientHeight && (o = n - c.clientHeight),
            a("bottom" == i ? -(n - r) + o : 0);
        } else if ("left" == i || "right" == i) {
          var s = parseInt(c.style.width),
            p = parseInt(c.firstChild.style.width),
            o = 0;
          c.clientWidth && (o = s - c.clientWidth),
            "right" == i ? a(-(s - p) + o, !0) : a(0, !0);
        }
      }
    }
    function p(i, n) {
      if (i == t) {
        if (!c._scrollCntrVisible) return void (c._scrollCntrDlydScrollX = n);
        a(Math.round(bx.$checkNaN(parseFloat(n)) / e.getZoomX()), !0);
      }
    }
    function l(i, n) {
      if (i == t) {
        if (!c._scrollCntrVisible) return void (c._scrollCntrDlydScrollY = n);
        a(Math.round(bx.$checkNaN(parseFloat(n)) / e.getZoomY()));
      }
    }
    function d(a, i, n, r, o, s, p) {
      "click" == c.__scrollContainer_showEvent
        ? i == bx.CGesture.POINTER_START &&
          (bx.DOM.IsDescendantOf(bx.Event.getElement(p), c) ||
            bx.Event.getElement(p) == c ||
            ((c.style.display = "none"), e.fireEvent("wgtEvent", "hd", t)))
        : "tapStart" == c.__scrollContainer_showEvent &&
          i == bx.CGesture.POINTER_START &&
          (bx.DOM.IsDescendantOf(bx.Event.getElement(p), c) ||
            bx.Event.getElement(p) == c ||
            (c.__scrollContainer_show
              ? delete c.__scrollContainer_show
              : ((c.style.display = "none"),
                e.fireEvent("wgtEvent", "hd", t))));
    }
    var c = e.wgtTag(t);
    bx.Event.add(
      c,
      "scroll",
      function (a) {
        e.wgtSetProperty(
          t,
          "scrollX",
          Math.round(c.scrollLeft * e.getZoomX()),
          !0
        ),
          e.wgtSetProperty(
            t,
            "scrollY",
            Math.round(c.scrollTop * e.getZoomY()),
            !0
          ),
          e.fireEvent("wgtEvent", "scl", t, void 0, !0);
      },
      !1
    );
    e.wgtListenProperty(t, "displayBarX", n),
      e.wgtListenProperty(t, "displayBarY", r);
    e.wgtSetProperty(
      t,
      "scrollArea",
      {
        w: Math.round(c.scrollWidth * e.getZoomX()),
        h: Math.round(c.scrollHeight * e.getZoomY()),
      },
      !0
    ),
      e.wgtListenProperty(t, "scrollArea", o),
      e.wgtListenProperty(t, "scrollTo", s),
      e.wgtSetProperty(t, "scrollX", 0, !0),
      e.wgtListenProperty(t, "scrollX", p),
      e.wgtSetProperty(t, "scrollY", 0, !0),
      e.wgtListenProperty(t, "scrollY", l),
      "dd" == e.wgtGetProperty(t, "Mode") &&
        (new bx.CGesture(document, d, {
          noDelayedEvent: !0,
          noLongholdEvent: !0,
        }),
        "block" == c.style.display &&
          apn.widgets["apn.wgt.scrollContainer"]._onDdShow(c, "click"));
  }),
  (xa._onDdShow = function (e, t) {
    ("click" != t && "tapStart" != t) ||
      ((e.__scrollContainer_showEvent = t),
      "tapStart" == t && (e.__scrollContainer_show = !0));
  }),
  (xa.exeOnStart = function (e, t) {
    var a = e.wgtTag(t);
    e.fireEvent("wgtEvent", "none" == a.style.display ? "hd" : "sh", t),
      (a._scrollCntrVisible = e.wgtIsVisible(t));
  }),
  (xa.exeOnResume = function (e, t) {
    var a = e.wgtTag(t);
    a._scrollCntrVisible = e.wgtIsVisible(t);
  }),
  (xa.exeOnVisibilityChange = function (e, t, a) {
    var i = e.wgtTag(t);
    (i._scrollCntrVisible = a),
      a &&
        (void 0 !== i._scrollCntrDlydScrollTo &&
          (e.wgtSetProperty(t, "scrollTo", i._scrollCntrDlydScrollTo),
          (i._scrollCntrDlydScrollTo = void 0)),
        void 0 !== i._scrollCntrDlydScrollX &&
          (e.wgtSetProperty(t, "scrollX", i._scrollCntrDlydScrollX),
          (i._scrollCntrDlydScrollX = void 0)),
        void 0 !== i._scrollCntrDlydScrollY &&
          (e.wgtSetProperty(t, "scrollY", i._scrollCntrDlydScrollY),
          (i._scrollCntrDlydScrollY = void 0)));
  }),
  (xa.exeOnShow = function (e, t, a, i) {
    "dd" == e.wgtGetProperty(t, "Mode") &&
      ("click" != i && "tapStart" != i && (i = "click"),
      a && apn.widgets["apn.wgt.scrollContainer"]._onDdShow(e.wgtTag(t), i)),
      e.fireEvent("wgtEvent", a ? "sh" : "hd", t);
  }),
  (xa.edtOnBuildEvent = function (e, t, a, i) {
    (i.wgtEvent = {
      value: "wgtEvent",
      title: apn.P.eventTitle.wgtEvent,
      param: {},
    }),
      (i.wgtEvent.param.scl = "Scroll");
    var n = e.pages[a].objects[t].create.data;
    n &&
      n.properties &&
      n.properties.attrs &&
      "dd" == n.properties.attrs.Mode &&
      ((i.wgtEvent.param.sh = "Show"), (i.wgtEvent.param.hd = "Hide"));
  }),
  (apn.widgets["apn.wgt.scrollContainer"] = xa),
  (xa = apn.inheritWidget(apn.widgets["apn.wgt.layerContainer"])),
  (xa.styleMap = { title: !0, visibility: !0, alpha: !0 }),
  (xa.editor = { iconThumb: "imgs/wgts/thumbs/html.png" }),
  (xa.properties = {
    attrs: { cfg: { bg: { mediaID: void 0, x: 0, y: 0, w: 1e3, h: 1e3 } } },
  }),
  (xa.exeRenderTag = function (e, t, a, i, n, r) {
    if (
      (apn.widgets["apn.wgt.layerContainer"].exeRenderTag.call(
        this,
        e,
        t,
        a,
        i,
        n,
        r
      ),
      a.apnCur.apxCreatedFromTag && 1 == n && 1 == r)
    );
    else {
      var o = i.create.data;
      o &&
        o.properties &&
        o.properties.attrs &&
        o.properties.attrs.cfg &&
        o.properties.attrs.cfg.bg &&
        o.properties.attrs.cfg.bg.mediaID &&
        ((a.style.backgroundPosition =
          o.properties.attrs.cfg.bg.x * n +
          "px " +
          o.properties.attrs.cfg.bg.y * r +
          "px"),
        (a.style.backgroundImage =
          "url(" + t.mediaURL(o.properties.attrs.cfg.bg.mediaID) + ")"),
        (a.style.backgroundRepeat = "no-repeat"),
        a.$CSS(
          "backgroundSize",
          o.properties.attrs.cfg.bg.w * n +
            "px " +
            o.properties.attrs.cfg.bg.h * r +
            "px"
        ));
    }
    return a;
  }),
  (xa.exeOnPostCreateTag = function (e, t, a) {
    if (e.viewer.constructor.IStub_pubArrangeHTML) {
      var i = e.widgetsByClass(void 0, t);
      e.viewer.constructor.IStub_pubArrangeHTML(e.project, e.getPageID(), i);
      var n;
      for (var r in a.layout.layers) n = a.layout.layers[r].id;
      for (var o, s = e.wgtTag(n), r = 0; r < i.length; r++)
        (o = e.wgtTag(i[r])),
          s.lastElementChild &&
            o.parentNode == s &&
            bx.DOM.putAfter(o, s.lastElementChild);
    }
  }),
  (apn.widgets["apn.wgt.htmlCntr"] = xa),
  (xa = {}),
  (xa.styleMap = {
    title: !0,
    visibility: !0,
    alpha: !0,
    strokeStyle: !0,
    lineWidth: !0,
    lineDash: !0,
    fillStyle: !0,
    font: !0,
    fontSize: !0,
    fontStyle: !0,
    fontItalic: !0,
    fontBold: !0,
    textMultiLine: !0,
    fontUnderlined: !0,
    text: !0,
    textAlign: !0,
    textValign: !0,
    textPadding: !0,
    textWordWrap: !0,
    ltrSp: !0,
    lnSp: !0,
    fontStrokeStyle: !0,
    fontStrokeWidth: !0,
    angle: !0,
    dragX: !0,
    dragY: !0,
    dragInParent: !0,
    dragContainParent: !0,
    csr: !0,
  }),
  (xa.apnWgtRectVer = 2),
  (xa.properties = { ver: 2 }),
  (xa.exeCreateTag = function (e, t, a, i, n) {
    var r = apn.widgets["apn.wgt.rect"].exeCreateTag.call(this, e, t, a, i, n);
    return r.$CSS("borderRadius", "50%"), r;
  }),
  (xa.exeOnScreenRefresh = apn.widgets["apn.wgt.rect"].exeOnScreenRefresh),
  (xa.exeRenderTag = apn.widgets["apn.wgt.rect"].exeRenderTag),
  (xa.exePropGet = function (e, t, a, i) {
    if ("vertex" == a || "vertexInPage" == a) {
      if (i) return !0;
      var n = e.screen.objects[t],
        r = [];
      if ("vertex" == a)
        var o = 0,
          s = 0;
      else
        var o = n.init.position.x,
          s = n.init.position.y;
      var p = n.init.shape.w,
        l = n.init.shape.h,
        d = n.init.cx || 0,
        c = n.init.cy || 0,
        g =
          n.create.data && n.create.data.styles
            ? parseFloat(n.create.data.styles.angle)
            : 0;
      return (
        apn.CES.$O4p(
          o,
          s,
          p,
          l,
          g || 0,
          r,
          2 * Math.ceil(Math.max(p, l) / 3),
          d,
          c
        ),
        r.push({ x: r[0].x, y: r[0].y }),
        r
      );
    }
  }),
  (apn.widgets["apn.wgt.ellipse"] = xa),
  (xa = {}),
  (xa.styleMap = { title: !0, csr: !0 }),
  (xa.exeOnForceStyle = function (e, t) {
    (t.csr && "inherit" != t.csr) || (t.csr = "pointer");
  }),
  (xa.exeCreateTag = apn.widgets["apn.wgt.ellipse"].exeCreateTag),
  (xa.exeRenderTag = apn.widgets["apn.wgt.ellipse"].exeRenderTag),
  (apn.widgets["apn.wgt.itrAreaEllipse"] = xa),
  (xa = {}),
  (xa.styleMap = {
    title: !0,
    visibility: !0,
    alpha: !0,
    mediaID: !0,
    dragX: !0,
    dragY: !0,
    dragInParent: !0,
    dragContainParent: !0,
    csr: !0,
  }),
  (xa.exeScriptMediaID = !0),
  (xa.exeAssetDelayedLoad = !0),
  (xa.properties = {
    state: "stop",
    attrs: {
      apxMediaControl: !0,
      Control: "System",
      Loop: "No",
      apxStep: { current: 0, count: 1 },
      v: 2,
      stp: 0,
      ttip: "",
    },
  }),
  (xa.editor = {
    iconThumb: "imgs/wgts/thumbs/video.png",
    properties: {
      Control: ["System", "Simple", "None"],
      stp: { title: "Step", input: "", type: "number" },
    },
    runtimeProperties: {
      playbackRate: { title: "Playback Rate", input: "1", type: "number" },
      volume: { title: "Volume", input: "1", type: "number" },
      loop: { title: "Loop", input: ["On", "Off"] },
      fullScreen: { title: "Full Screen", input: ["On", "Off"] },
    },
    states: {
      play: "Play",
      stop: "Stop",
      resume: "Resume",
      pause: "Pause",
      mute: "Mute",
      muteOff: "Mute Off",
    },
  }),
  (xa.exeSetState = function (e, t, a, i) {
    if ((i || ("stop" != a && "pause" != a)) && a) {
      if (
        ("play" == a || "resume" == a) &&
        e.isPaused() &&
        !t.apxBackgroundRun &&
        !e.isRunByScript()
      )
        return void e.sptLog(
          "",
          "Media " +
            a +
            " request from <" +
            (e.$OcB(e.wgtId(t)) || "Untitled") +
            "> was ignored, because its page was being paused(stopped)."
        );
      e.wgtControlMedia(e.wgtId(t), a);
    }
  }),
  (xa.exeCreateTag = function (e, t, a, i, n, r) {
    function o() {
      var e = t.wgtTag(y.oId);
      (e.style.visibility = "hidden"), (h = void 0);
    }
    function s() {
      var t =
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement;
      e.IWidget_onFullScreen &&
        (t
          ? (c(!1), t == g.mediaTag && e.IWidget_onFullScreen(!0, t))
          : (c(!0),
            "System" != C && (g.mediaTag.controls = !1),
            setTimeout(function () {
              e.IWidget_onFullScreen(!1, t);
            }, 500)));
    }
    function p(a) {
      var i =
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement,
        n =
          document.fullScreen ||
          document.mozFullScreen ||
          document.webkitIsFullScreen ||
          document.webkitDisplayingFullscreen ||
          g.mediaTag.webkitDisplayingFullscreen;
      if (((n = !!n), !i)) {
        var r = bx.Event.getElement(a);
        r && r.tagName && "video" == r.tagName.toLowerCase() && (i = r);
      }
      if (e.IWidget_onFullScreen)
        if (n) {
          if (
            ("edge" == bx.HCL.DV.getBrowserType() && c(!1),
            e.IWidget_onFullScreen(n, i),
            x && t.wgtTag(y.oId))
          ) {
            var s = t.wgtTag(y.oId);
            (s.fsBkPrtNode = s.parentNode),
              (s.style.top = "auto"),
              (s.style.bottom = "1px"),
              "right" == v
                ? ((s.style.left = "auto"), (s.style.right = "1px"))
                : ((s.style.left = "50%"),
                  (s.style.marginLeft = -(parseInt(s.style.width) / 2) + "px")),
              g.appendChild(s),
              (h = setTimeout(o, f));
          }
        } else {
          if (
            ("edge" == bx.HCL.DV.getBrowserType() && c(!0),
            x && t.wgtTag(y.oId))
          ) {
            h && (clearTimeout(h), (h = void 0));
            var s = t.wgtTag(y.oId);
            s &&
              ((s.style.visibility = "visible"),
              (s.style.bottom = "auto"),
              "right" == v
                ? (s.style.right = "auto")
                : (s.style.marginLeft = 0),
              s.fsBkPrtNode &&
                (s.fsBkPrtNode.appendChild(s),
                apn.IWidget.exeRenderPosition(
                  t,
                  s,
                  t.screen.objects[y.oId],
                  e.project,
                  1 / t.getZoomX(),
                  1 / t.getZoomY()
                )));
          } else
            (g.mediaTag.mozRequestFullScreen ||
              "edge" == bx.HCL.DV.getBrowserType()) &&
              "System" != C &&
              (g.mediaTag.controls = !1);
          setTimeout(function () {
            e.IWidget_onFullScreen(n, i);
          }, 500);
        }
    }
    function l(e) {
      var a = t.wgtTag(y.oId);
      this == a.parentNode &&
        ((a.style.visibility = "visible"),
        h && clearTimeout(h),
        (h = setTimeout(o, f)));
    }
    function d(e) {
      var t = g.simplePlayTag.getContext("2d");
      (t.fillStyle = "#ffffff"),
        (t.strokeStyle = "#acacac"),
        bx.CCanvasWnd.drawEllipse(t, !0, !0, 9, 9, 58, 58),
        t.beginPath(),
        t.moveTo(32, 26),
        t.lineTo(32, 50),
        t.lineTo(49, 38),
        t.closePath(),
        (t.fillStyle = e ? "#2cb100" : "#4a4a4a"),
        t.fill();
    }
    function c(e) {
      if (e) {
        if (g.mediaTag.videoWidth && g.mediaTag.videoHeight) {
          var t = g.mediaTag.videoWidth / g.mediaTag.videoHeight,
            a = parseInt(g.style.width) / parseInt(g.style.height);
          Math.abs(t - a) < 0.01
            ? (g.mediaTag.$CSS("transform", "none"),
              (g.mediaTag.style.left = "0px"),
              (g.mediaTag.style.top = "0px"),
              (g.mediaTag.style.width = "100%"),
              (g.mediaTag.style.height = "100%"))
            : t < a
            ? (g.mediaTag.$CSS("transform", "scale(" + a / t + ",1)"),
              (g.mediaTag.style.left =
                (parseInt(g.style.width) - t * parseInt(g.style.height)) / 2 +
                "px"),
              (g.mediaTag.style.top = "0px"),
              (g.mediaTag.style.width = t * parseInt(g.style.height) + "px"),
              (g.mediaTag.style.height = "100%"))
            : t > a &&
              (g.mediaTag.$CSS("transform", "scale(1," + t / a + ")"),
              (g.mediaTag.style.top =
                (parseInt(g.style.height) - (1 / t) * parseInt(g.style.width)) /
                  2 +
                "px"),
              (g.mediaTag.style.left = "0px"),
              (g.mediaTag.style.height =
                (1 / t) * parseInt(g.style.width) + "px"),
              (g.mediaTag.style.width = "100%"));
        }
      } else
        g.mediaTag.$CSS("transform", "none"),
          (g.mediaTag.style.left = "0px"),
          (g.mediaTag.style.top = "0px"),
          (g.mediaTag.style.width = "100%"),
          (g.mediaTag.style.height = "100%");
    }
    var g = $TAG("div", { style: "position:absolute;overflow:hidden;" });
    g.$CSS({ boxSizing: "border-box" }),
      (g.apnCur = {}),
      e.o.standAlone &&
      r &&
      apn.CExe.getElementByAttr("video", "data-apx-id", r)
        ? ((g.mediaTag = apn.CExe.getElementByAttr("video", "data-apx-id", r)),
          (g.mediaTag.style.cssText =
            "border:none;position:absolute;left:0px;top:0px;width:100%;height:100%;box-sizing:border-box;cursor:inherit;"),
          g.appendChild(g.mediaTag))
        : (g.mediaTag = g.$TAG(
            "video",
            {
              style:
                "border:none;position:absolute;left:0px;top:0px;width:100%;height:100%;cursor:inherit;",
            },
            { boxSizing: "border-box" }
          )),
      (g.apnPlayEnded = !0),
      (g.mediaTag.apnPlayEnded = !0),
      (g.sourceTag = g.mediaTag.$TAG("source"));
    var u = a.create.data.properties;
    u &&
      u.attrs &&
      (u.attrs.apxMediaSubFormat || (u.attrs.sub && u.attrs.sub.mediaID)) &&
      (g.sourceTag2 = g.mediaTag.$TAG("source")),
      g.mediaTag.setAttribute("webkit-playsinline", ""),
      g.mediaTag.setAttribute("playsinline", ""),
      u &&
        u.attrs &&
        u.attrs.ttip &&
        g.setAttribute(
          "title",
          e.o.exeXML && !e.o.exePreview
            ? apn.IWidget.exeFormatText(u.attrs.ttip, { xml: !0, noTag: !0 })
            : u.attrs.ttip
        );
    var h,
      x,
      f = 3e3,
      y = u && u.attrs ? u && u.attrs.fs : void 0;
    !t.wgtGetMediaInfo(null, "supportFullScreenControl") &&
      y &&
      y.oId &&
      (x = !0);
    var v;
    e.constructor.IStub_getConfiguration &&
      e.constructor.IStub_getConfiguration(e.project) &&
      (v = e.constructor.IStub_getConfiguration(
        e.project
      ).exeFullscreenControlAlign),
      bx.HCL.DV.isIE()
        ? bx.Event.add(document, "MSFullscreenChange", s, !1)
        : (x
            ? bx.Event.add(g, "webkitfullscreenchange", p, !1)
            : bx.Event.add(g.mediaTag, "webkitfullscreenchange", p, !1),
          bx.Event.add(document, "mozfullscreenchange", p, !1),
          bx.Event.add(g.mediaTag, "fullscreenchange", p, !1),
          bx.Event.add(g.mediaTag, "webkitbeginfullscreen", p, !1),
          bx.Event.add(g.mediaTag, "webkitendfullscreen", p, !1)),
      x && bx.Event.add(g, "mousemove", l, !1),
      u &&
        u.attrs &&
        u.attrs.apxPoster &&
        u.attrs.apxPoster.mediaID &&
        g.mediaTag.setAttribute(
          "poster",
          t.mediaURL(u.attrs.apxPoster.mediaID)
        );
    var C = "System";
    if (
      (u && u.attrs && u.attrs.Control && (C = u.attrs.Control), "Simple" == C)
    ) {
      (g.simplePlayTag = g.$TAG("canvas", {
        style:
          "cursor:inherit;position:absolute;left:50%;top:50%;margin-left:-38px;margin-top:-38px;display:block;z-index:1;",
      })),
        (g.simplePlayTag.width = 76),
        (g.simplePlayTag.height = 76),
        e.o.verGestureDispatch
          ? (g.simplePlayTag.apxOnEventOver = function (e, t) {
              t
                ? ((this.style.cursor = "pointer"), d(!0))
                : ((this.style.cursor = "inherit"), d());
            })
          : ((g.simplePlayTag.onmouseover = function () {
              d(!0);
            }),
            (g.simplePlayTag.onmouseout = function () {
              d();
            })),
        d();
      var b = this;
      (g.simplePlayTag.apxOnEvent = function (e, t) {
        if ("click" == t)
          return (
            (g.sourceTag.src || (g.sourceTag2 && g.sourceTag2.src)) &&
              b.exeMediaPlay(g),
            !0
          );
      }),
        (g.apxOnEvent = function (e, t) {
          if ("click" == t) {
            if (!this.mediaTag.paused && !this.mediaTag.ended)
              try {
                this.mediaTag.pause();
              } catch (e) {}
            return !0;
          }
        });
    } else "System" == C && (g.mediaTag.controls = !0);
    return (
      g.mediaTag.setAttribute("controlsList", "nodownload"),
      bx.HCL.DV.isIE() || "edge" == bx.HCL.DV.getBrowserType()
        ? (g.tagOnPostResize = function (e, t) {
            c(!0);
          })
        : (g.mediaTag.style.objectFit = "fill"),
      apn.widgets["apn.wgt.video"].mediaHandler.call(this, g, t, a),
      g
    );
  }),
  (xa.exeOnStart = function (e, t) {
    var a = e.wgtTag(t);
    e.wgtGetProperty(t, "apxStep") &&
      a.apnPlayList &&
      a.apnPlayList.length > 1 &&
      (e.wgtSetProperty(t, "apxStep", {
        current: 0,
        count: a.apnPlayList.length,
      }),
      (a._uStepCur = 0));
  }),
  (xa.subsInit = function (e, t) {
    if (t.mediaTag.addTextTrack) {
      var a,
        i,
        n,
        r,
        o = e.wgtGetProperty(t.apnOID, "fs");
      if (o && o.subs)
        for (var s = 0; s < o.subs.length; s++)
          if (o.subs[s].oId && e.wgtTag(o.subs[s].oId)) {
            if (
              (o.subs[s].subsTrack ||
                (o.subs[s].subsTrack = t.mediaTag.addTextTrack(
                  "subtitles",
                  apn.CExe.LN_TITLE[o.subs[s].lng]
                    ? apn.CExe.GL(apn.CExe.LN_TITLE[o.subs[s].lng])
                    : apn.CExe.GL({ ko: "자막", en: "Subtitle", ja: "字幕" }),
                  o.subs[s].lng
                )),
              (n = o.subs[s].subsTrack),
              (i = n.cues),
              i && i.length)
            ) {
              var p = [];
              for (r = 0; r < i.length; r++) p[r] = i[r];
              for (r = 0; r < p.length; r++) n.removeCue(p[r]);
            }
            if (((a = e.wgtGetValue(o.subs[s].oId, "value")), a && a.length))
              for (r = 0; r < a.length; r++)
                bx.HCL.DV.isIE() || "edge" == bx.HCL.DV.getBrowserType()
                  ? n.addCue(
                      new TextTrackCue(a[r].stime, a[r].etime, a[r].text)
                    )
                  : n.addCue(new VTTCue(a[r].stime, a[r].etime, a[r].text));
          }
    }
  }),
  (xa.subsShow = function (e, t, a) {
    if (t.mediaTag.addTextTrack) {
      var i,
        n = -1,
        r = -1,
        o = e.wgtGetProperty(t.apnOID, "fs"),
        s = bx.HCL.DV.isIE() || "edge" == bx.HCL.DV.getBrowserType();
      if (o && o.subs) {
        for (var p = 0; p < o.subs.length; p++)
          if (o.subs[p].subsTrack) {
            if (o.subs[p].lng == bx.HCL.DV.getLanguage()) {
              n = p;
              break;
            }
            "en" == o.subs[p].lng && (r = p);
          }
        for (n == -1 && (n = r), p = 0; p < o.subs.length; p++)
          (i = o.subs[p].subsTrack) &&
            (a && n === p
              ? s
                ? (i.mode = i.SHOWING)
                : (i.mode = "showing")
              : s
              ? (i.mode = i.HIDDEN)
              : (i.mode = "hidden"));
      }
    }
  }),
  (xa.mediaHandler = function (e, t, a) {
    function i() {
      e.exeOnMediaEvent &&
        e.exeOnMediaEvent(
          "trackStart",
          e.apnPlayList && e.apnPlayList.length > 1
            ? e.apnPlayList && e.apnPlayList.length
            : 1,
          e.apnPlayList.apnCurrent + 1
        );
      var a = h.exeMediaSupportTrack(t.screen, e.apnOID);
      if (
        (a !== !1 &&
          (e.apnTrackPlayIdx ||
            1 === a ||
            t.fireEvent("media", "trackStart", e.apnOID),
          t.fireEvent(
            "media",
            "trS_" + (e.apnTrackPlayIdx || e.apnPlayList.apnCurrent + 1),
            e.apnOID
          )),
        t.wgtGetProperty(e.apnOID, "apxStep") &&
          e.apnPlayList &&
          e.apnPlayList.length > 1)
      ) {
        var i = (e.apnTrackPlayIdx || e.apnPlayList.apnCurrent + 1) - 1;
        (void 0 !== e._uStepCur && e._uStepCur == i) ||
          (t.wgtSetProperty(e.apnOID, "apxStep", {
            current: i,
            count: e.apnPlayList.length,
          }),
          (e._uStepCur = i));
      }
    }
    function n() {
      if (!e.$ObK || e.mediaTag.$ObJ == e.apnOID) {
        e.simplePlayTag && (e.simplePlayTag.style.display = "none"),
          (e._apxAutoLoadDelayed = !1);
        var a = !0;
        (e.apnPlayEnded = !1),
          (e.mediaTag.apnPlayEnded = !1),
          (e.mediaTag.$OcT = !1),
          e.mediaTag.currentTime < 0.1 &&
            (t.wgtSetProperty(e.apnOID, "apxState", "play", !0),
            e.exeOnMediaEvent &&
              (0 == e.apnPlayList.apnCurrent && e.exeOnMediaEvent("listStart"),
              i()),
            (0 == e.apnPlayList.apnCurrent || e.apnTrackPlayIdx) &&
              ((a = !1),
              t.wgtSetProperty(e.apnOID, "apxState", "play", !0),
              t.fireEvent("media", "Start", e.apnOID))),
          a &&
            (t.wgtSetProperty(e.apnOID, "apxState", "resume", !0),
            e.exeOnMediaEvent && e.exeOnMediaEvent("trackResume"),
            t.fireEvent("media", "Resume", e.apnOID));
        var n;
        (n = t.wgtGetProperty(e.apnOID, "mdaSync")) &&
          t.ctxSet("apxMediaToggle_" + n, { oId: e.apnOID });
      }
    }
    function r(a) {
      if (!e.$ObK || e.mediaTag.$ObJ == e.apnOID) {
        if (e.mediaTag.$OcT) return void (e.mediaTag.$OcT = !1);
        if (
          (void 0 !== e._apnPlaySectionStartVol &&
            h.exeMediaControl(e, "volume", e.__bkVolume),
          1 == e.apnPlayEnded)
        ) {
          t.wgtSetProperty(e.apnOID, "apxState", "stop", !0);
          var i = h.exeMediaSupportTrack(t.screen, e.apnOID);
          if (i !== !1) {
            var n =
              e.apnTrackPlayIdx ||
              (e.apnPlayList && e.apnPlayList.length > 1
                ? e.apnPlayList.apnCurrent + 1
                : 1);
            e.apnTrackPlayIdx ||
              1 === i ||
              t.fireEvent("media", "trackEnd", e.apnOID, !0),
              t.fireEvent("media", "trE_" + n, e.apnOID, !0);
          }
          t.fireEvent("media", "End", e.apnOID, !0),
            e.exeOnMediaEvent && e.exeOnMediaEvent("trackEnd");
        } else
          t.wgtSetProperty(e.apnOID, "apxState", "pause", !0),
            t.fireEvent("media", "Pause", e.apnOID),
            e.exeOnMediaEvent && e.exeOnMediaEvent("trackPause"),
            e.__delayedFireSectionEndN &&
              ((e.__delayedFireSectionEndN = !1),
              t.fireEvent("media", "sectionEndN", e.apnOID),
              e.exeOnMediaEvent && e.exeOnMediaEvent("sectionEndN"));
        e.simplePlayTag && (e.simplePlayTag.style.display = "block");
      }
    }
    function o(i) {
      if (!e.$ObK || e.mediaTag.$ObJ == e.apnOID) {
        var n = !1,
          r =
            e.apnTrackPlayIdx ||
            (e.apnPlayList && e.apnPlayList.length > 1
              ? e.apnPlayList.apnCurrent + 1
              : 1);
        if (
          ((e.$ObN = 0),
          i &&
            (bx.HCL.DV.isIE() &&
              ((e.mediaTag.$OcT = !0),
              e.mediaTag.pause(),
              t.wgtSetProperty(e.apnOID, "apxState", "pause", !0),
              t.fireEvent("media", "Pause", e.apnOID),
              e.exeOnMediaEvent && e.exeOnMediaEvent("trackPause")),
            !e.apnPlayOnlyThisTrack &&
              e.apnPlayList &&
              e.apnPlayList.length > 1 &&
              (a.create.data.styles && a.create.data.styles.mediaLoop
                ? ((e.apnPlayList.apnCurrent =
                    (e.apnPlayList.apnCurrent + 1) % e.apnPlayList.length),
                  (n = !0))
                : e.apnPlayList.apnCurrent < e.apnPlayList.length - 1 &&
                  (e.apnPlayList.apnCurrent++, (n = !0)),
              n &&
                ((e.sourceTag.src =
                  e.apnPlayList[e.apnPlayList.apnCurrent] || ""),
                e.apnPlayListMIME[e.apnPlayList.apnCurrent] &&
                  (e.sourceTag.type =
                    e.apnPlayListMIME[e.apnPlayList.apnCurrent]),
                e.sourceTag2 &&
                  (e.apnPlayListSub[e.apnPlayList.apnCurrent]
                    ? ((e.sourceTag2.src =
                        e.apnPlayListSub[e.apnPlayList.apnCurrent]),
                      (e.sourceTag2.type =
                        e.apnPlayListSubMIME[e.apnPlayList.apnCurrent]))
                    : ((e.sourceTag2.src = ""), (e.sourceTag2.type = ""))),
                e.mediaTag.load))))
        ) {
          e._delayedSeekTo && delete e._delayedSeekTo, e.mediaTag.load();
          var o = e.mediaTag.play();
          void 0 !== o &&
            o.then &&
            o.then(function () {}).catch(function (e) {});
        }
        (e.apnPlayOnlyThisTrack = !1),
          n
            ? e.simplePlayTag && (e.simplePlayTag.style.display = "none")
            : (e.simplePlayTag && (e.simplePlayTag.style.display = "block"),
              (e.apnPlayEnded = !0),
              (e.mediaTag.apnPlayEnded = !0)),
          void 0 !== e._apnPlaySectionStartVol &&
            h.exeMediaControl(e, "volume", e.__bkVolume);
        var s =
          e.apnPlayList && e.apnPlayList.length > 1
            ? e.apnPlayList && e.apnPlayList.length
            : 1;
        t.wgtSetProperty(e.apnOID, "apxState", "stop", !0),
          e.exeOnMediaEvent && e.exeOnMediaEvent("trackEnd", s, r);
        var p = h.exeMediaSupportTrack(t.screen, e.apnOID);
        p !== !1 &&
          (e.apnTrackPlayIdx ||
            1 === p ||
            (t.fireEvent("media", "trackEnd", e.apnOID),
            i && t.fireEvent("media", "trackEndN", e.apnOID)),
          t.fireEvent("media", "trE_" + r, e.apnOID),
          i && t.fireEvent("media", "trEN_" + r, e.apnOID)),
          i && t.fireEvent("media", "EndN", e.apnOID),
          (s == r || e.apnTrackPlayIdx) &&
            t.fireEvent("media", "End", e.apnOID);
      }
    }
    function s(t) {
      e.$ObK && e.mediaTag.$ObJ != e.apnOID;
    }
    function p(a) {
      if (!e.$ObK || e.mediaTag.$ObJ == e.apnOID) {
        e.mediaTag.duration &&
          e.exeOnMediaEvent(
            "infoDuration",
            e.mediaTag.currentTime,
            e.mediaTag.duration
          ),
          t.wgtSetProperty(e.apnOID, "duration", e.mediaTag.duration || 0, !0);
        var i = parseInt(t.wgtGetProperty(e.apnOID, "stp"));
        !i ||
          (e.apnPlayList && e.apnPlayList.length > 1) ||
          (t.wgtSetProperty(e.apnOID, "apxStep", { current: 0, count: i }),
          (e._uStepCur = 0)),
          apn.widgets["apn.wgt.video"].subsInit.call(this, t, e),
          e.isFull &&
            apn.widgets["apn.wgt.video"].subsShow.call(this, t, e, !0),
          e.tagOnPostResize && e.tagOnPostResize(t, e);
      }
    }
    function l() {
      if (
        !(
          (e.$ObK && e.mediaTag.$ObJ != e.apnOID) ||
          (e.$ObN && 0 == e.mediaTag.currentTime && !e.apnPlayEnded && i(),
          e.mediaTag.paused)
        )
      ) {
        e.exeOnMediaEvent(
          "infoPlayTime",
          e.mediaTag.currentTime,
          e.mediaTag.duration
        ),
          (e.$ObN = e.mediaTag.currentTime),
          t.wgtSetProperty(
            e.apnOID,
            "currentTime",
            e.mediaTag.currentTime || 0,
            !0
          );
        var a;
        if ((a = t.wgtGetProperty(e.apnOID, "playSection"))) {
          var n = h.exeMediaInfo(e, "currentTime"),
            r = 0;
          if (t.viewer.ISub_getMediaTimeOffset)
            r = t.viewer.ISub_getMediaTimeOffset();
          else {
            var o = bx.HCL.DV.getBrowser();
            "android" == o.type && "4" == o.ver1 && "4" == o.ver2
              ? (r = 1)
              : bx.HCL.DV.isIOS() && (r = 0.5);
          }
          if (
            (e._seekFrom && n > a.from && (e._seekFrom = !1),
            a.fadeInOut && e.__bkVolume && a.to - a.from > 0)
          ) {
            var s = void 0,
              p = Math.max(0.01, Math.min(a.fadeInOut, (a.to - a.from) / 2));
            (s =
              n < a.from || n > a.to
                ? 0
                : n - a.from < p
                ? n - a.from
                : a.to - n < p
                ? a.to - n
                : p),
              void 0 !== s &&
                h.exeMediaControl(e, "volume", e.__bkVolume * (s / p));
          }
          n < a.from - r && !e._seekFrom
            ? ((e._seekFrom = !0), h.exeMediaSeek(e, a.from, !0))
            : n >= a.to &&
              (a.clearOnEnd
                ? (t.wgtSetProperty(e.apnOID, "playSection", void 0, !0),
                  e.exeOnMediaEvent("seeked"))
                : h.exeMediaSeek(e, a.from, !0),
              h.exeMediaInfo(e, "loop") ||
                ((e.$ObN = 0),
                h.exeMediaPause(e),
                a.fadeInOut &&
                  e.__bkVolume &&
                  a.to - a.from > 0 &&
                  h.exeMediaControl(e, "volume", e.__bkVolume),
                (e.__delayedFireSectionEndN = !0)));
        }
        var l = parseInt(t.wgtGetProperty(e.apnOID, "stp"));
        if (l && !(e.apnPlayList && e.apnPlayList.length > 1)) {
          var n = h.exeMediaInfo(e, "currentTime"),
            d = e.mediaTag.duration / l,
            c = Math.max(0, Math.min(Math.ceil(n / d) - 1, l - 1));
          (void 0 !== e._uStepCur && e._uStepCur == c) ||
            (t.wgtSetProperty(e.apnOID, "apxStep", { current: c, count: l }),
            (e._uStepCur = c));
        }
      }
    }
    function d(t) {
      (e.$ObK && e.mediaTag.$ObJ != e.apnOID) ||
        e.exeOnMediaEvent("volumeChange", e.mediaTag.volume, e.mediaTag.muted);
    }
    function c(t) {
      (e.$ObK && e.mediaTag.$ObJ != e.apnOID) ||
        (bx.HCL.DV.isIE() && (e.mediaTag.apxSeeking = !1),
        e.exeOnMediaEvent("seeked"));
    }
    function g(t) {
      (e.$ObK && e.mediaTag.$ObJ != e.apnOID) ||
        (bx.HCL.DV.isIE() && (e.mediaTag.apxSeeking = !0));
    }
    function u(a) {
      if (!e.$ObK || e.mediaTag.$ObJ == e.apnOID) {
        if (
          (e._delayedSeekTo &&
            (h.exeMediaSeek(
              e,
              e._delayedSeekTo.seek,
              e._delayedSeekTo.play,
              e._delayedSeekTo.opts
            ),
            delete e._delayedSeekTo),
          e._iePlaybackRate && (e.mediaTag.playbackRate = e._iePlaybackRate),
          e.$ObK)
        )
          for (var i in e.$ObK)
            h.exeMediaInfo(e, i) != e.$ObK[i] &&
              h.exeMediaControl(e, i, e.$ObK[i]);
        e._cLoadFired ||
          (h.exeOnCheckContentLoad &&
            t.fireEvent(
              "contentLoad",
              "m",
              e.apnOID,
              !0,
              t.project.property.allowImmediateContentLoad
            ),
          e.exeOnMediaEvent("canPlay"),
          (e._cLoadFired = !0));
      }
    }
    var h = this;
    bx.Event.add(e.mediaTag, "play", n, !1),
      bx.Event.add(e.mediaTag, "ended", o, !1),
      bx.Event.add(e.mediaTag, "pause", r, !1),
      bx.Event.add(e.mediaTag, "error", s, !1),
      bx.Event.add(e.mediaTag, "suspend", s, !1),
      bx.Event.add(e.mediaTag, "abort", s, !1),
      bx.Event.add(e.mediaTag, "timeupdate", l, !1),
      bx.Event.add(e.mediaTag, "loadedmetadata", p, !1),
      bx.Event.add(e.mediaTag, "volumechange", d, !1),
      bx.Event.add(e.mediaTag, "seeked", c, !1),
      bx.Event.add(e.mediaTag, "seeking", g, !1),
      bx.Event.add(e.mediaTag, "canplay", u, !1),
      (e.$ObO = function () {
        bx.Event.remove(e.mediaTag, "play", n, !1),
          bx.Event.remove(e.mediaTag, "ended", o, !1),
          bx.Event.remove(e.mediaTag, "pause", r, !1),
          bx.Event.remove(e.mediaTag, "error", s, !1),
          bx.Event.remove(e.mediaTag, "suspend", s, !1),
          bx.Event.remove(e.mediaTag, "abort", s, !1),
          bx.Event.remove(e.mediaTag, "timeupdate", l, !1),
          bx.Event.remove(e.mediaTag, "loadedmetadata", p, !1),
          bx.Event.remove(e.mediaTag, "volumechange", d, !1),
          bx.Event.remove(e.mediaTag, "seeked", c, !1),
          bx.Event.remove(e.mediaTag, "seeking", g, !1),
          bx.Event.remove(e.mediaTag, "canplay", u, !1);
      }),
      (e.mediaTag.apxMediaOnEndException =
        e.mediaTag.apxMediaOnEndException || []),
      e.mediaTag.apxMediaOnEndException.push(function () {
        o();
      }),
      (e.$O7I = function () {
        for (var t = 0; t < e.mediaTag.apxMediaOnEndException.length; t++)
          e.mediaTag.apxMediaOnEndException[t] &&
            e.mediaTag.apxMediaOnEndException[t]();
      }),
      (e._onApxTickTimeUpdate = function () {
        h.exeMediaInfo(e, "pause") || l();
      });
  }),
  (xa.exeOnCheckContentLoad = function (e, t, a) {
    return { m: "Media" };
  }),
  (xa.exeRenderTag = function (e, t, a, i, n, r) {
    var o = apn.IWidget.getCanvasObjectStyle(
      {},
      this,
      e.project,
      i.create.data.styles
    );
    return (
      apn.IWidget.exeApplyCSSpre(
        i,
        o,
        a,
        apn.widgets.utils.$O2x(t, a, i.init.position.x, n),
        apn.widgets.utils.$O2y(t, a, i.init.position.y, r),
        apn.widgets.utils.$O2v(i.init.shape.w, n),
        apn.widgets.utils.$O2w(i.init.shape.h, r),
        n,
        r
      ),
      apn.IWidget.exeRenderSize(e, t, a, i, e.project, n, r),
      apn.IWidget.exeRenderPosition(t, a, i, e.project, n, r),
      apn.IWidget.exeApplyCSSpost(
        i,
        o,
        a,
        apn.widgets.utils.$O2x(t, a, i.init.position.x, n),
        apn.widgets.utils.$O2y(t, a, i.init.position.y, r),
        apn.widgets.utils.$O2v(i.init.shape.w, n),
        apn.widgets.utils.$O2w(i.init.shape.h, r),
        n,
        r
      ),
      a
    );
  }),
  (xa.exeOnScreenFull = function (e, t, a) {
    var i = e.wgtTag(t);
    (i.isFull = a.on),
      apn.widgets["apn.wgt.video"].subsShow.call(this, e, i, a.on);
  }),
  (xa.exeOnLoad = function (e, t) {
    function a(a, i) {
      a == t &&
        (u.exeMediaControl(h, "playbackRate", bx.$checkNaN(parseFloat(i)) || 1),
        e.wgtSetProperty(
          t,
          "playbackRate",
          u.exeMediaInfo(h, "playbackRate"),
          !0
        ));
    }
    function i(a, i) {
      a == t &&
        (u.exeMediaControl(
          h,
          "volume",
          Math.min(1, Math.max(0, bx.$checkNaN(parseFloat(i))))
        ),
        e.wgtSetProperty(t, "volume", u.exeMediaInfo(h, "volume"), !0));
    }
    function n(a, i) {
      a == t &&
        (u.exeMediaControl(h, "mute", !!i),
        e.wgtSetProperty(t, "muted", u.exeMediaInfo(h, "mute"), !0));
    }
    function r(a, i) {
      a == t &&
        ("On" == i ? (i = !0) : "Off" == i && (i = !1),
        u.exeMediaControl(h, "loop", !!i),
        e.wgtSetProperty(t, "loop", u.exeMediaInfo(h, "loop"), !0));
    }
    function o(a, i) {
      a == t &&
        (i && void 0 !== i.from && void 0 !== i.to
          ? ((h._apnPlaySectionStart = i.from),
            i.fadeInOut
              ? ((h._apnPlaySectionStartVol = 0),
                void 0 === h.__bkVolume &&
                  (h.__bkVolume = u.exeMediaInfo(h, "volume")))
              : (h._apnPlaySectionStartVol = void 0))
          : ((h._apnPlaySectionStart = 0),
            (h._apnPlaySectionStartVol = void 0),
            e.wgtSetProperty(t, "playSection", void 0, !0)));
    }
    function s(a, i) {
      a == t &&
        ("On" == i ? (i = !0) : "Off" == i && (i = !1),
        e.wgtSetMediaInfo(t, "fullScreen", i));
    }
    function p() {
      setTimeout(function () {
        u.$ObQ(e, t, !0);
      }, 200);
    }
    function l() {
      u.$ObQ(e, t, !0);
    }
    function d(e, a) {
      e == t && u.exeMediaSeek(h, parseFloat(a) || 0, !1, { seekOnly: !0 });
    }
    function c(a, i) {
      var n,
        r = e.wgtGetProperty(t, "fs");
      if (r && r.subs)
        for (var o = 0; o < r.subs.length; o++)
          if (r.subs[o].oId && r.subs[o].oId == a) {
            n = !0;
            break;
          }
      n && apn.widgets["apn.wgt.video"].subsInit.call(u, e, h);
    }
    function g(a) {
      e.wgtTag(t) &&
        a &&
        a.oId != t &&
        (u.exeMediaInfo(h, "pause") ||
          ("PS" == e.wgtGetProperty(t, "mdaSyncType")
            ? u.exeMediaStop(h)
            : (h.mediaTag.pause(), (h.$ObN = 0))));
    }
    var u = this,
      h = e.wgtTag(t);
    e.wgtSetProperty(
      t,
      "playbackRate",
      this.exeMediaInfo(h, "playbackRate"),
      !0
    ),
      e.wgtListenProperty(t, "playbackRate", a),
      e.wgtSetProperty(t, "volume", this.exeMediaInfo(h, "volume"), !0),
      e.wgtListenProperty(t, "volume", i),
      e.wgtSetProperty(t, "muted", this.exeMediaInfo(h, "mute"), !0),
      e.wgtListenProperty(t, "muted", n),
      e.wgtSetProperty(t, "loop", this.exeMediaInfo(h, "loop"), !0),
      e.wgtListenProperty(t, "loop", r),
      e.wgtSetProperty(t, "duration", 0, !0),
      e.wgtSetProperty(t, "currentTime", 0, !0),
      e.wgtListenProperty(t, "playSection", o),
      e.wgtListenProperty(t, "fullScreen", s),
      e.wgtSetProperty(
        t,
        "supportFullScreen",
        e.wgtGetMediaInfo(t, "supportFullScreen")
      ),
      this.$ObP &&
        this.$ObP(e, t) &&
        ((h.mediaTag.style.display = "none"),
        (h.mediaTag.controls = !1),
        bx.HCL.DV.isIE()
          ? bx.Event.add(h.mediaTag, "canplaythrough", p, !1)
          : bx.Event.add(h.mediaTag, "canplay", l, !1)),
      e.wgtListenProperty(t, "seekTo", d),
      e.wgtListenProperty(t, "apxValue", c);
    var x;
    (x = e.wgtGetProperty(t, "mdaSync")) &&
      e.wgtListenContext(t, "apxMediaToggle_" + x, g, !0);
  }),
  (xa.exePropSet = function (e, t, a, i, n) {
    if ("poster" == a) {
      if (n) return !0;
      var r = e.wgtTag(t);
      i
        ? r.mediaTag && r.mediaTag.setAttribute("poster", e.mediaURL(i) || i)
        : e.log(t, "Invalid parameter for setData() of 'poster'. Value=" + i);
    }
  }),
  (xa.exePropGet = function (e, t, a, i) {
    if ("paused" == a) {
      if (i) return !0;
      var n = e.wgtTag(t);
      if (n) return this.exeMediaInfo(n, "pause");
    }
  }),
  (xa.exeOnTick = function (e, t) {
    var a = bx.HCL.DV.getBrowser();
    if (
      ("android" != a.type || "4" != a.ver1 || "4" != a.ver2) &&
      (this.$ObP && this.$ObP(e, t) && this.$ObQ(e, t),
      e.wgtGetProperty(t, "playSection") ||
        e.wgtGetProperty(t, "highResolutionPlaytime"))
    ) {
      var i = e.wgtTag(t);
      i && i._onApxTickTimeUpdate && i._onApxTickTimeUpdate();
    }
  }),
  (xa.exeOnPause = function (e, t) {
    (e.viewer.ISub_onCloseWidgetMedia &&
      e.viewer.ISub_onCloseWidgetMedia(e, t)) ||
      this.exeMediaStop(e.$O3d[t]);
  }),
  (xa.exeOnScreenVisibility = function (e, t, a) {
    var i = e.wgtTag(t);
    if (!i.$ObK || i.mediaTag.$ObJ == i.apnOID) {
      var n = apn.Project.getLayout(e.project).property.CExe,
        r = "P";
      if (n && "P" == n.mediaOnHidden);
      else if (n && "S" == n.mediaOnHidden) r = "S";
      else {
        if (n && "B" == n.mediaOnHidden) return;
        if (i.apxBackgroundOnSystemHidden) return;
        if (
          e.viewer.constructor.IStub_getConfiguration &&
          e.viewer.constructor.IStub_getConfiguration(e.project) &&
          e.viewer.constructor.IStub_getConfiguration(e.project)
            .apxBackgroundOnSystemHidden
        )
          return;
      }
      if (((i.__apxLastScreenVisibility = a), "visible" == a)) {
        if (this.exeMediaInfo(i, "pause") && i.$ObR) {
          try {
            var o = i.mediaTag.play();
            void 0 !== o &&
              o.then &&
              o.then(function () {}).catch(function (e) {});
          } catch (e) {}
          i.$ObR = !1;
        }
      } else
        "hidden" == a &&
          (this.exeMediaInfo(i, "pause") ||
            ("S" == r
              ? this.exeMediaStop(i)
              : (i.mediaTag.pause(), (i.$ObR = !0), (i.$ObN = 0))));
    }
  }),
  (xa.exeOnVisibilityChange = function (e, t, a) {
    var i,
      n = e.wgtTag(t),
      r = apn.Project.getLayout(e.project).property.CExe;
    r && r.vdLD && "Y" == r.vdLD.prgs && (i = !0),
      (e.viewer.ISub_getMediaPreload && e.viewer.ISub_getMediaPreload(e, t)) ||
        (r && r.mdLD && "V" == r.mdLD.type && (i = !0)),
      !n.$ObK &&
        i &&
        a &&
        n._apxAutoLoadDelayed &&
        (n._delayedSeekTo && delete n._delayedSeekTo,
        n.mediaTag.load(),
        (n._apxAutoLoadDelayed = !1));
  }),
  (xa.exeAssetLoad = function (e, t, a, i) {
    function n(a, i, n) {
      t.apnPlayList.push(e.mediaURL(a) || a || ""),
        n &&
          ((t.apnPlayListMIME[t.apnPlayList.length - 1] =
            apn.Project.getMediaMimeType(e.project, a)),
          i
            ? ((t.apnPlayListSub[t.apnPlayList.length - 1] =
                e.mediaURL(i) || i),
              (t.apnPlayListSubMIME[t.apnPlayList.length - 1] =
                apn.Project.getMediaMimeType(e.project, i)))
            : ((t.apnPlayListSub[t.apnPlayList.length - 1] = ""),
              (t.apnPlayListSubMIME[t.apnPlayList.length - 1] = "")));
    }
    var r,
      o = apn.Project.getLayout(e.project).property.CExe;
    if (
      (o && o.vdLD && "Y" == o.vdLD.prgs && (r = !0),
      (e.viewer.ISub_getMediaPreload &&
        e.viewer.ISub_getMediaPreload(e, t.apnOID)) ||
        (o && o.mdLD && "V" == o.mdLD.type && (r = !0)),
      "WebAudioAPI" == t.apxMediaLayer)
    );
    else if (!t.$ObK) {
      var s;
      e.viewer.ISub_getMediaPreload &&
      (s = e.viewer.ISub_getMediaPreload(e, t.apnOID))
        ? "apxDelayLoad" == s && void 0 === t._apxAutoLoadDelayedByDev
          ? ((t._apxAutoLoadDelayedByDev = !0), (t.mediaTag.preload = "auto"))
          : (t.mediaTag.preload = e.viewer.ISub_getMediaPreload(e, t.apnOID))
        : o &&
          o.mdLD &&
          ("P" == o.mdLD.type || ("Pi" == o.mdLD.type && bx.HCL.DV.isIOS()))
        ? void 0 === t._apxAutoLoadDelayedByDev &&
          ((t._apxAutoLoadDelayedByDev = !0), (t.mediaTag.preload = "none"))
        : t.mediaTag.tagName && "video" == t.mediaTag.tagName.toLowerCase() && r
        ? e.wgtGetProperty(t.apnOID, "apxDelayedLoad")
          ? (t.mediaTag.preload = "none")
          : (t.mediaTag.preload = "auto")
        : e.wgtGetProperty(t.apnOID, "apxDelayedLoad")
        ? (t.mediaTag.preload = "metadata")
        : (t.mediaTag.preload = "auto");
    }
    (t.apnPlayList = []),
      (t.apnPlayList.apnCurrent = -1),
      (t.apnPlayListMIME = []),
      (t.apnPlayListSub = []),
      (t.apnPlayListSubMIME = []);
    var p = e.screen.objects[t.apnOID].create.data;
    if ((a || (p && p.styles && (a = p.styles.mediaID)), a))
      if (a.main && a.main.length)
        for (var l = 0; l < a.main.length; l++)
          n(a.main[l], a.sub ? a.sub[l] : void 0, !0);
      else if (a instanceof Array) for (var l = 0; l < a.length; l++) n(a[l]);
      else
        p && p.properties && p.properties.attrs && p.properties.attrs.sub
          ? n(a, p.properties.attrs.sub.mediaID, !0)
          : n(a);
    t._iePlaybackRate && delete t._iePlaybackRate,
      (t._apxAutoLoadDelayed = !1),
      t.$ObK
        ? (t.mediaTag.paused || this.exeMediaPause(t),
          (t._apxApCHset = !0),
          (t.apnPlayList.apnCurrent = 0),
          t.exeOnMediaEvent &&
            t.exeOnMediaEvent("listSet", t.apnPlayList.length))
        : t.apnPlayList.length &&
          ("WebAudioAPI" == t.apxMediaLayer
            ? (t.mediaTag.setMedia(t.apnPlayList[0]),
              (t.apnPlayList.apnCurrent = 0))
            : (t.mediaTag.paused || (t.$O7I && t.$O7I()),
              (t.sourceTag.src = t.apnPlayList[0] || ""),
              t.apnPlayListMIME[0] && (t.sourceTag.type = t.apnPlayListMIME[0]),
              t.sourceTag2 &&
                (t.apnPlayListSub[0]
                  ? ((t.sourceTag2.src = t.apnPlayListSub[0]),
                    (t.sourceTag2.type = t.apnPlayListSubMIME[0]))
                  : ((t.sourceTag2.src = ""), (t.sourceTag2.type = ""))),
              (t.apnPlayList.apnCurrent = 0),
              t.mediaTag.load &&
                (r &&
                t.mediaTag.tagName &&
                "video" == t.mediaTag.tagName.toLowerCase() &&
                !e.wgtIsVisible(t.apnOID)
                  ? (t._apxAutoLoadDelayed = !0)
                  : t._apxAutoLoadDelayedByDev ||
                    (t._delayedSeekTo && delete t._delayedSeekTo,
                    t.mediaTag.load()))),
          t.exeOnMediaEvent &&
            t.exeOnMediaEvent("listSet", t.apnPlayList.length)),
      (t._cLoadFired = void 0);
  }),
  (xa.exeMediaPlay = function (e, t, a, i) {
    if ("hidden" != e.__apxLastScreenVisibility) {
      if ("WebAudioAPI" == e.apxMediaLayer);
      else {
        if (!e.mediaTag.load) return;
        if (!e.$ObK && !(e.sourceTag.src || (e.sourceTag2 && e.sourceTag2.src)))
          return;
        e._apxAutoLoadDelayedByDev &&
          (e._delayedSeekTo && delete e._delayedSeekTo,
          e.mediaTag.load(),
          (e._apxAutoLoadDelayedByDev = !1));
      }
      var n = 0;
      if ("WebAudioAPI" == e.apxMediaLayer)
        (e.apnPlayEnded = !1),
          (e.mediaTag.apnPlayEnded = !1),
          (e.apnPlayList.apnCurrent = n),
          e.mediaTag.setMedia(e.apnPlayList[n]);
      else if (e.$ObK) {
        if (e._apxApCHset || e.mediaTag.$ObJ != e.apnOID) {
          (e._apxApCHset = !1),
            e.mediaTag.paused || (e.$O7I && e.$O7I()),
            (e.apnPlayEnded = !1),
            (e.mediaTag.apnPlayEnded = !1);
          var r;
          e.apnPlayList[n] &&
          e.sourceTag.getAttribute("src") == e.apnPlayList[n]
            ? (r = !0)
            : (e.sourceTag.src = e.apnPlayList[n] || ""),
            r
              ? ((e.apnPlayList.apnCurrent = n),
                this.exeMediaInfo(e, "pause") || e.mediaTag.pause())
              : (e.apnPlayListMIME[n] &&
                  (e.sourceTag.type = e.apnPlayListMIME[n]),
                e.sourceTag2 &&
                  (e.apnPlayListSub[n]
                    ? ((e.sourceTag2.src = e.apnPlayListSub[n]),
                      (e.sourceTag2.type = e.apnPlayListSubMIME[n]))
                    : ((e.sourceTag2.src = ""), (e.sourceTag2.type = ""))),
                (e.apnPlayList.apnCurrent = n),
                e._delayedSeekTo && delete e._delayedSeekTo,
                e.mediaTag.load());
        }
        e.mediaTag.$ObJ = e.apnOID;
      }
      if (
        ((e.apnPlayOnlyThisTrack = !1),
        t &&
          void 0 !== a &&
          e.apnPlayList &&
          e.apnPlayList[a - 1] &&
          ((n = a - 1), i && (e.apnPlayOnlyThisTrack = !0)),
        (t || e.apnPlayEnded) &&
          e.apnPlayList &&
          e.apnPlayList.length > 1 &&
          ((e.apnPlayEnded = !1),
          (e.mediaTag.apnPlayEnded = !1),
          "WebAudioAPI" == e.apxMediaLayer
            ? ((e.apnPlayList.apnCurrent = n),
              e.mediaTag.setMedia(e.apnPlayList[n]))
            : ((e.sourceTag.src = e.apnPlayList[n] || ""),
              e.apnPlayListMIME[n] && (e.sourceTag.type = e.apnPlayListMIME[n]),
              e.sourceTag2 &&
                (e.apnPlayListSub[n]
                  ? ((e.sourceTag2.src = e.apnPlayListSub[n]),
                    (e.sourceTag2.type = e.apnPlayListSubMIME[n]))
                  : ((e.sourceTag2.src = ""), (e.sourceTag2.type = ""))),
              (e.apnPlayList.apnCurrent = n),
              e._delayedSeekTo && delete e._delayedSeekTo,
              e.mediaTag.load())),
        (e._apxAutoLoadDelayed = !1),
        "WebAudioAPI" == e.apxMediaLayer)
      )
        e.mediaTag.play(t);
      else {
        e._apnPlaySectionStart &&
          void 0 !== e._apnPlaySectionStartVol &&
          this.exeMediaControl(e, "volume", e._apnPlaySectionStartVol);
        try {
          var o = e.mediaTag.play();
          void 0 !== o &&
            o.then &&
            o.then(function () {}).catch(function (e) {});
        } catch (e) {
          console.error("Exception in play video", e);
        }
        if (e.mediaTag.paused) e.$O7I && e.$O7I();
        else
          try {
            if (t) {
              var s = 0;
              e._apnPlaySectionStart && (s = e._apnPlaySectionStart);
              try {
                e.mediaTag.currentTime = s;
              } catch (e) {}
            } else
              bx.HCL.DV.isChrome() &&
                (e.apnPlayReqBySeek ||
                  (e.mediaTag.apnPlayEnded && (e.mediaTag.currentTime = 0)));
          } catch (t) {
            (bx.HCL.DV.isIE() && "InvalidStateError" == t) ||
              (e.$O7I && e.$O7I(), console.error("Exception in play media", t));
          }
      }
      bx.HCL.DV.isChrome() && (e.apnPlayReqBySeek = !1);
    }
  }),
  (xa.exeMediaPause = function (e) {
    if (!e.$ObK || e.mediaTag.$ObJ == e.apnOID)
      if ("WebAudioAPI" == e.apxMediaLayer) e.mediaTag.pause();
      else {
        if (!e.mediaTag.pause) return;
        if (!(e.sourceTag.src || (e.sourceTag2 && e.sourceTag2.src))) return;
        try {
          e.mediaTag.pause(),
            e.mediaTag.paused &&
              e.simplePlayTag &&
              (e.simplePlayTag.style.display = "block");
        } catch (e) {}
      }
  }),
  (xa.exeMediaStop = function (e, t, a) {
    if (!e.$ObK || e.mediaTag.$ObJ == e.apnOID)
      if ("WebAudioAPI" == e.apxMediaLayer)
        (e.apnPlayEnded = !0),
          (e.mediaTag.apnPlayEnded = !0),
          e.mediaTag.stop();
      else {
        if (!e.mediaTag.pause) return;
        if (!(e.sourceTag.src || (e.sourceTag2 && e.sourceTag2.src))) return;
        try {
          e.mediaTag.paused
            ? ((e.apnPlayEnded = !0),
              (e.mediaTag.apnPlayEnded = !0),
              (e.mediaTag.currentTime = 0),
              e.$O7I && e.$O7I())
            : ((e.mediaTag.currentTime = 0),
              e.mediaTag.pause(),
              (e.apnPlayEnded = !0),
              (e.mediaTag.apnPlayEnded = !0)),
            e.mediaTag.paused &&
              e.simplePlayTag &&
              (e.simplePlayTag.style.display = "block");
        } catch (e) {}
      }
  }),
  (xa.exeMediaSeek = function (e, t, a, i) {
    if ((!e.$ObK || e.mediaTag.$ObJ == e.apnOID) && e.mediaTag)
      if (e._apxAutoLoadDelayedByDev)
        (e._delayedSeekTo = { seek: t, play: a, opts: i }),
          e.mediaTag.load(),
          (e._apxAutoLoadDelayedByDev = !1);
      else if (e.mediaTag.duration) {
        var n = 0;
        (n =
          "string" == typeof t
            ? (bx.$checkNaN(parseFloat(t)) / 100) * e.mediaTag.duration
            : t),
          (n = Math.min(n, e.mediaTag.duration));
        var r, o;
        if (
          (i &&
            (i instanceof Object
              ? ((r = i.rangeCheck), (o = i.seekOnly))
              : (r = !0)),
          r)
        ) {
          if (void 0 !== e.$ObS && Math.abs(e.$ObS - n) < 1) return;
          e.$ObS = n;
        }
        o
          ? ((bx.HCL.DV.isIE() || "edge" == bx.HCL.DV.getBrowserType()) &&
              (e.mediaTag.currentTime = n),
            (e.mediaTag.currentTime = n))
          : (a || e.mediaTag.paused || e.mediaTag.pause(),
            a && (e.mediaTag.currentTime = n)),
          e.mediaTag.apnOnSeek && e.mediaTag.apnOnSeek(n),
          e.exeOnMediaEvent &&
            e.exeOnMediaEvent("infoPlayTime", n, e.mediaTag.duration),
          o
            ? (bx.HCL.DV.isChrome() && (e.apnPlayReqBySeek = !0),
              (e.apnPlayEnded = !1),
              (e.mediaTag.apnPlayEnded = !1))
            : a &&
              e.mediaTag.paused &&
              (bx.HCL.DV.isChrome() && (e.apnPlayReqBySeek = !0),
              this.exeMediaPlay(e));
      }
  }),
  (xa.exeMediaControl = function (e, t, a) {
    if (e.mediaTag) {
      if (
        e.$ObK &&
        ((e.$ObK[t] = a),
        "playbackRate" == t && bx.HCL.DV.isIE() && (e._iePlaybackRate = a),
        e.mediaTag.$ObJ != e.apnOID)
      )
        return !0;
      if ("WebAudioAPI" == e.apxMediaLayer) {
        if ("mute" == t) return e.mediaTag.setMute(a), !0;
        if ("loop" == t) return e.mediaTag.setLoop(a), !0;
        if ("volume" == t) return e.mediaTag.setVolume(a), !0;
      } else {
        if ("mute" == t)
          return a && (e.mediaTag.muted = !1), (e.mediaTag.muted = a), !0;
        if ("loop" == t) return (e.mediaTag.loop = a), !0;
        if ("volume" == t) return (e.mediaTag.volume = a), !0;
        if ("playbackRate" == t)
          return (
            (e.mediaTag.playbackRate = a),
            bx.HCL.DV.isIE() && (e._iePlaybackRate = a),
            !0
          );
      }
    }
    return !1;
  }),
  (xa.exeMediaInfo = function (e, t) {
    if (e.mediaTag) {
      if (e.$ObK && e.mediaTag.$ObJ != e.apnOID)
        return ("pause" == t && void 0 === e.$ObK[t]) || e.$ObK[t];
      if ("WebAudioAPI" == e.apxMediaLayer) {
        if ("mute" == t) return e.mediaTag.getMute();
        if ("loop" == t) return e.mediaTag.getLoop();
        if ("volume" == t) return e.mediaTag.getVolume();
        if ("pause" == t) return e.mediaTag.getPaused();
        if ("currentTime" == t) return e.mediaTag.getInfoPlayTime();
        if ("end" == t) return e.mediaTag.apnPlayEnded;
      } else {
        if ("mute" == t) return e.mediaTag.muted;
        if ("loop" == t) return e.mediaTag.loop;
        if ("volume" == t) return e.mediaTag.volume;
        if ("pause" == t) return e.mediaTag.paused;
        if ("currentTime" == t) return e.mediaTag.currentTime;
        if ("playbackRate" == t) return e.mediaTag.playbackRate;
        if ("seeking" == t)
          return void 0 !== e.mediaTag.apxSeeking
            ? e.mediaTag.apxSeeking
            : e.mediaTag.seeking;
        if ("end" == t) return e.mediaTag.apnPlayEnded;
      }
    }
  }),
  (xa.exeMediaClear = function (e, t) {
    var a = e.wgtTag(t);
    if (a.mediaTag) {
      if (a.$ObK)
        return void (
          a.mediaTag.$ObJ == a.apnOID &&
          (((a.mediaTag.tagName &&
            "video" == a.mediaTag.tagName.toLowerCase()) ||
            (a.mediaTag.tagName &&
              "audio" == a.mediaTag.tagName.toLowerCase())) &&
            (a.mediaTag.paused || a.mediaTag.pause()),
          delete a.mediaTag.$ObJ)
        );
      if ("WebAudioAPI" == a.apxMediaLayer) a.mediaTag.pause();
      else if (
        (a.mediaTag.tagName && "video" == a.mediaTag.tagName.toLowerCase()) ||
        (a.mediaTag.tagName && "audio" == a.mediaTag.tagName.toLowerCase())
      )
        try {
          a.mediaTag.paused || a.mediaTag.pause(),
            (a.sourceTag.src = ""),
            a.sourceTag2 && (a.sourceTag2.src = ""),
            a._delayedSeekTo && delete a._delayedSeekTo,
            a.mediaTag.load();
        } catch (e) {}
    }
  }),
  (xa.exeMediaSupportTrack = function (e, t) {
    if (!(apn.dbUI && apn.dbUI.system && apn.dbUI.system.exeEventCache))
      return null;
    var a = e.objects[t].create.data;
    return !(
      a &&
      a.properties &&
      a.properties.attrs &&
      2 == a.properties.attrs.v
    );
  }),
  (xa.exeOnDestroy = function (e, t) {
    var a = e.wgtTag(t);
    a.$ObO && a.$ObO(), apn.widgets["apn.wgt.video"].exeMediaClear(e, t);
  }),
  (xa.$ObP = function (e, t) {
    var a = e.wgtGetProperty(t, "apxAlpha");
    return !!a && (0 != a[0].cnd || 0 != a[1].cnd || 0 != a[2].cnd);
  }),
  (xa.$ObQ = function (e, t, a) {
    var i = e.wgtTag(t);
    if (i.mediaTag.videoWidth && (a || !i.mediaTag.paused)) {
      if (!i.cvsOut) {
        var n = parseInt(i.style.width),
          r = parseInt(i.style.height);
        i.cvsOut = i.$TAG("canvas", {
          width: i.mediaTag.videoWidth,
          height: i.mediaTag.videoHeight,
          style:
            "cursor:inherit;position:absolute;left:0px;top:0px;width:" +
            n +
            "px;height:" +
            r +
            "px;",
        });
      }
      var o = i.cvsOut.getContext("2d");
      o.drawImage(i.mediaTag, 0, 0, o.canvas.width, o.canvas.height);
      try {
        var s = o.getImageData(0, 0, o.canvas.width, o.canvas.height);
      } catch (a) {
        return void e.log(
          t,
          "'Transparent channel processing'" + apn.CExe.MSG_SECURITY_2
        );
      }
      for (
        var p,
          l = s.data,
          d = e.wgtGetProperty(t, "apxAlpha"),
          c = 0,
          g = l.length;
        c < g;
        c += 4
      )
        (p = 0),
          0 == d[0].cnd
            ? p++
            : 1 == d[0].cnd && l[c + 0] > bx.$checkNaN(parseInt(d[0].v))
            ? p++
            : 2 == d[0].cnd && l[c + 0] < bx.$checkNaN(parseInt(d[0].v))
            ? p++
            : 3 == d[0].cnd &&
              l[c + 0] == bx.$checkNaN(parseInt(d[0].v)) &&
              p++,
          0 == d[1].cnd
            ? p++
            : 1 == d[1].cnd && l[c + 1] > bx.$checkNaN(parseInt(d[1].v))
            ? p++
            : 2 == d[1].cnd && l[c + 1] < bx.$checkNaN(parseInt(d[1].v))
            ? p++
            : 3 == d[1].cnd &&
              l[c + 1] == bx.$checkNaN(parseInt(d[1].v)) &&
              p++,
          0 == d[2].cnd
            ? p++
            : 1 == d[2].cnd && l[c + 2] > bx.$checkNaN(parseInt(d[2].v))
            ? p++
            : 2 == d[2].cnd && l[c + 2] < bx.$checkNaN(parseInt(d[2].v))
            ? p++
            : 3 == d[2].cnd &&
              l[c + 2] == bx.$checkNaN(parseInt(d[2].v)) &&
              p++,
          3 == p && (l[c + 3] = 0);
      i.cvsOut.getContext("2d").putImageData(s, 0, 0);
    }
  }),
  (xa.edtOnRemapObjectID = function (e, t, a) {
    if (t && t.properties && t.properties.attrs && t.properties.attrs.fs) {
      var i = t.properties.attrs.fs;
      if (
        (i.oId &&
          (a[i.oId]
            ? (i.oId = a[i.oId])
            : e.getScreenData().objects[i.oId] || (i.oId = "")),
        i.subs)
      )
        for (var n = 0; n < i.subs.length; n++)
          i.subs[n].oId &&
            (a[i.subs[n].oId]
              ? (i.subs[n].oId = a[i.subs[n].oId])
              : e.getScreenData().objects[i.subs[n].oId] ||
                (i.subs[n].oId = ""));
    }
  }),
  (apn.widgets["apn.wgt.video"] = xa),
  (xa = apn.inheritWidget(apn.widgets["apn.wgt.video"])),
  (xa.styleMap = {
    title: !0,
    visibility: !0,
    alpha: !0,
    mediaID: !0,
    dragX: !0,
    dragY: !0,
    dragInParent: !0,
    dragContainParent: !0,
  }),
  (xa.exeScriptMediaID = !0),
  (xa.editor = {
    iconThumb: "imgs/wgts/thumbs/audio.png",
    properties: {
      Control: ["System", "None"],
      Loop: ["No", "Yes"],
      stp: { title: "Step", input: "", type: "number" },
    },
    runtimeProperties: {
      playbackRate: { title: "Playback Rate", input: "", type: "number" },
      volume: { title: "Volume", input: "", type: "number" },
      loop: { title: "Loop", input: ["On", "Off"] },
    },
  }),
  (xa.editor.states = apn.widgets["apn.wgt.video"].editor.states),
  (xa.exeOnCheckContentLoad =
    apn.widgets["apn.wgt.video"].exeOnCheckContentLoad),
  (xa.exeCreateTag = function (e, t, a, i, n, r) {
    var o = $TAG("div", { style: "position:absolute;" });
    if (
      (o.$CSS({ boxSizing: "border-box" }),
      (o.apnCur = {}),
      e.IDevice_useWebAudio())
    )
      (o.apxMediaLayer = "WebAudioAPI"),
        (o.mediaTag = new AspenWebAudio(o)),
        apn.widgets["apn.wgt.audio"].mediaHandler_waAPI.call(this, o, t, a),
        a.create.data.properties &&
          a.create.data.properties.attrs &&
          "Yes" == a.create.data.properties.attrs.Loop &&
          o.mediaTag.setLoop(!0);
    else {
      var s = a.create.data.properties;
      if (
        (s && s.attrs && s.attrs.apxBackgroundTick && (o.apxBackgroundRun = !0),
        apn.CExe.IWidget_getAudioAutoplayCount(e.project) &&
          s &&
          s.attrs &&
          s.attrs.cfg &&
          s.attrs.cfg.apxApCH &&
          s.attrs.cfg.apxApCH <=
            apn.CExe.IWidget_getAudioAutoplayCount(e.project))
      )
        (o.mediaTag = e.$ObT.$O3d[s.attrs.cfg.apxApCH - 1]),
          (o.sourceTag = o.mediaTag.sourceTag),
          (o.$ObK = {}),
          apn.widgets["apn.wgt.video"].mediaHandler.call(this, o, t, a),
          s && s.attrs && "Yes" == s.attrs.Loop
            ? (o.$ObK.loop = !0)
            : (o.$ObK.loop = !1);
      else {
        e.o.standAlone &&
        r &&
        apn.CExe.getElementByAttr("audio", "data-apx-id", r)
          ? ((o.mediaTag = apn.CExe.getElementByAttr(
              "audio",
              "data-apx-id",
              r
            )),
            (o.mediaTag.style.cssText =
              "border:none;position:absolute;left:0px;top:0px;width:100%;height:100%;box-sizing:border-box;"),
            o.appendChild(o.mediaTag))
          : (o.mediaTag = o.$TAG(
              "audio",
              {
                style:
                  "border:none;position:absolute;left:0px;top:0px;width:100%;height:100%",
              },
              { boxSizing: "border-box" }
            )),
          (o.sourceTag = o.mediaTag.$TAG("source")),
          s &&
            s.attrs &&
            (s.attrs.apxMediaSubFormat ||
              (s.attrs.sub && s.attrs.sub.mediaID)) &&
            (o.sourceTag2 = o.mediaTag.$TAG("source"));
        var p = "System";
        s && s.attrs && s.attrs.Control && (p = s.attrs.Control),
          "System" == p
            ? (o.mediaTag.controls = !0)
            : (o.mediaTag.controls = !1),
          o.mediaTag.setAttribute("controlsList", "nodownload"),
          apn.widgets["apn.wgt.video"].mediaHandler.call(this, o, t, a),
          s && s.attrs && "Yes" == s.attrs.Loop
            ? (o.mediaTag.loop = !0)
            : (o.mediaTag.loop = !1);
      }
    }
    return o;
  }),
  (xa.exeMediaCheck = function (e) {
    switch (e) {
      case "supportFullScreen":
        return !1;
    }
    return !0;
  }),
  (xa.mediaHandler_waAPI = function (e, t, a) {
    function i() {
      e.exeOnMediaEvent &&
        e.exeOnMediaEvent(
          "trackStart",
          e.apnPlayList && e.apnPlayList.length > 1
            ? e.apnPlayList && e.apnPlayList.length
            : 1,
          e.apnPlayList.apnCurrent + 1
        );
      var a = d.exeMediaSupportTrack(t.screen, e.apnOID);
      a !== !1 &&
        (e.apnTrackPlayIdx ||
          1 === a ||
          t.fireEvent("media", "trackStart", e.apnOID),
        t.fireEvent(
          "media",
          "trS_" + (e.apnTrackPlayIdx || e.apnPlayList.apnCurrent + 1),
          e.apnOID
        ));
    }
    function n() {
      var a = !0;
      (e.apnPlayEnded = !1),
        (e.mediaTag.apnPlayEnded = !1),
        e.mediaTag.getInfoPlayTime() < 0.1 &&
          (t.wgtSetProperty(e.apnOID, "apxState", "play", !0),
          e.exeOnMediaEvent &&
            (0 == e.apnPlayList.apnCurrent && e.exeOnMediaEvent("listStart"),
            i()),
          (0 == e.apnPlayList.apnCurrent || e.apnTrackPlayIdx) &&
            ((a = !1),
            t.wgtSetProperty(e.apnOID, "apxState", "play", !0),
            t.fireEvent("media", "Start", e.apnOID))),
        a &&
          (t.wgtSetProperty(e.apnOID, "apxState", "resume", !0),
          e.exeOnMediaEvent && e.exeOnMediaEvent("trackResume"),
          t.fireEvent("media", "Resume", e.apnOID));
    }
    function r(i) {
      var n = !1,
        r =
          e.apnTrackPlayIdx ||
          (e.apnPlayList && e.apnPlayList.length > 1
            ? e.apnPlayList.apnCurrent + 1
            : 1);
      !e.apnPlayOnlyThisTrack &&
        e.apnPlayList &&
        e.apnPlayList.length > 1 &&
        (a.create.data.styles && a.create.data.styles.mediaLoop
          ? ((e.apnPlayList.apnCurrent =
              (e.apnPlayList.apnCurrent + 1) % e.apnPlayList.length),
            (n = !0))
          : e.apnPlayList.apnCurrent < e.apnPlayList.length - 1 &&
            (e.apnPlayList.apnCurrent++, (n = !0)),
        n &&
          (e.mediaTag.setMedia(e.apnPlayList[e.apnPlayList.apnCurrent]),
          e.mediaTag.play())),
        (e.apnPlayOnlyThisTrack = !1),
        n || ((e.apnPlayEnded = !0), (e.mediaTag.apnPlayEnded = !0));
      var o =
        e.apnPlayList && e.apnPlayList.length > 1
          ? e.apnPlayList && e.apnPlayList.length
          : 1;
      t.wgtSetProperty(e.apnOID, "apxState", "stop", !0),
        e.exeOnMediaEvent && e.exeOnMediaEvent("trackEnd", o, r);
      var s = d.exeMediaSupportTrack(t.screen, e.apnOID);
      s !== !1 &&
        (e.apnTrackPlayIdx ||
          1 === s ||
          (t.fireEvent("media", "trackEnd", e.apnOID),
          i && t.fireEvent("media", "trackEndN", e.apnOID)),
        t.fireEvent("media", "trE_" + r, e.apnOID),
        i && t.fireEvent("media", "trEN_" + r, e.apnOID)),
        i && t.fireEvent("media", "EndN", e.apnOID),
        (o == r || e.apnTrackPlayIdx) && t.fireEvent("media", "End", e.apnOID);
    }
    function o() {
      t.wgtSetProperty(e.apnOID, "apxState", "pause", !0),
        t.fireEvent("media", "Pause", e.apnOID),
        e.exeOnMediaEvent && e.exeOnMediaEvent("trackPause");
    }
    function s() {
      t.fireEvent("media", "Resume", e.apnOID),
        e.exeOnMediaEvent && e.exeOnMediaEvent("trackResume");
    }
    function p() {
      e.exeOnMediaEvent &&
        e.exeOnMediaEvent(
          "infoDuration",
          e.mediaTag.getInfoPlayTime() || 0,
          e.mediaTag.getInfoDuration()
        ),
        t.wgtSetProperty(
          e.apnOID,
          "duration",
          e.mediaTag.getInfoDuration() || 0,
          !0
        );
    }
    function l() {
      e.exeOnMediaEvent &&
        e.exeOnMediaEvent(
          "infoPlayTime",
          e.mediaTag.getInfoPlayTime() || 0,
          e.mediaTag.getInfoDuration()
        ),
        t.wgtSetProperty(
          e.apnOID,
          "currentTime",
          e.mediaTag.getInfoPlayTime() || 0,
          !0
        );
    }
    var d = this;
    e.mediaTag.setCallback(n, r, s, o, p, l);
  }),
  (apn.widgets["apn.wgt.audio"] = xa),
  (xa = {}),
  (xa.styleMap = {
    title: !0,
    visibility: !0,
    strokeStyle: !0,
    lineWidth: !0,
    lineDash: !0,
    lineEnd: !0,
    alpha: !0,
    keepRatio: !0,
    dragX: !0,
    dragY: !0,
    csr: !0,
  }),
  (xa.exeCreateTag = function (e, t, a, i, n) {
    var r = $TAG("div", { style: "position:absolute;overflow:hidden;" });
    return (
      (r.apxLineBorderTop = !0),
      window.navigator &&
      navigator.userAgent.indexOf("Version/") != -1 &&
      navigator.userAgent.indexOf("Android") != -1
        ? ((r.style.height = "1px"), (r.style.backgroundColor = "transparent"))
        : (r.style.height = "0px"),
      (r.apnCur = {}),
      r
    );
  }),
  (xa.exeRenderTag = function (e, t, a, i, n, r) {
    function o(e, t, a, i) {
      return (Math.atan2(a - e, t - i) % (2 * Math.PI)) * (180 / Math.PI) - 90;
    }
    var s = apn.IWidget.getCanvasObjectStyle(
        {},
        this,
        e.project,
        i.create.data.styles
      ),
      p = apn.widgets.utils.$O2x(
        t,
        a,
        i.init.position.x + i.init.shape.x[0],
        n
      ),
      l = apn.widgets.utils.$O2y(
        t,
        a,
        i.init.position.y + i.init.shape.y[0],
        r
      ),
      d = apn.widgets.utils.$O2x(
        t,
        a,
        i.init.position.x + i.init.shape.x[1],
        n
      ),
      c = apn.widgets.utils.$O2y(
        t,
        a,
        i.init.position.y + i.init.shape.y[1],
        r
      ),
      g = 0;
    s.lineWidth && s.strokeStyle && (g = s.lineWidth * Math.min(n, r));
    var u = 0;
    "1px" == a.style.height && (u = 1);
    var h;
    bx.HCL.DV.isIE() &&
      "round" == s.lineEnd &&
      g >= 3 &&
      ((h = !0), (a._apxLineHeight = !0));
    var x = Math.sqrt(Math.pow(d - p, 2) + Math.pow(c - l, 2));
    if (
      ((a.style.top = l - Math.round(g / 2) + u + "px"),
      bx.HCL.DV.isChrome() &&
        e.isStretch() &&
        "round" == s.lineEnd &&
        (!g || g < 5) &&
        (s.lineEnd = "square"),
      "butt" == s.lineEnd
        ? ((a.style.width = x + "px"),
          (a.style.left = p + "px"),
          apn.CES.transformSet(a, "origin", "0% 50%"))
        : "square" == s.lineEnd
        ? ((a.style.width = x + Math.floor(g) + "px"),
          (a.style.left = p - Math.floor(g / 2) + "px"),
          apn.CES.transformSet(a, "origin", Math.floor(g / 2) + "px 50%"))
        : ((a.style.width = x + Math.floor(g) + "px"),
          (a.style.left = p - Math.floor(g / 2) + "px"),
          apn.CES.transformSet(a, "origin", Math.floor(g / 2) + "px 50%"),
          h
            ? a.$CSS("borderRadius", Math.floor(g / 2) + "px")
            : a.$CSS("borderRadius", Math.floor(g) + "px")),
      apn.CES.transformSet(a, "rotate", o(p, l, d, c)),
      apn.CES.transformApply(a),
      g)
    ) {
      var f = "solid";
      s.lineDash &&
        (f =
          2 == s.lineDash.length && s.lineDash[0] == s.lineDash[1]
            ? "dotted"
            : "dashed"),
        h
          ? ((a.style.height = (0 == g ? 0 : Math.round(g) || 1) + "px"),
            (a.style.backgroundColor = s.strokeStyle))
          : (a.style.borderTop =
              f +
              " " +
              (0 == g ? 0 : Math.round(g) || 1) +
              "px " +
              s.strokeStyle);
    }
    apn.IWidget.exeSetAlpha(a, s.alpha), apn.IWidget.exeSetCursor(a, s.csr);
  }),
  (xa.exePropSet = function (e, t, a, i, n) {
    if ("vertex" == a || "vertexInPage" == a) {
      if (n) return !0;
      var r = e.wgtTag(t),
        o = e.screen.objects[t].init;
      if (
        i &&
        i[0] &&
        i[1] &&
        void 0 !== i[0].x &&
        void 0 !== i[0].y &&
        void 0 !== i[1].x &&
        void 0 !== i[1].y
      ) {
        var s = Math.min(i[0].x, i[1].x),
          p = Math.min(i[0].y, i[1].y);
        (o.position.x = s),
          (o.position.y = p),
          (o.shape.x[0] = i[0].x - s),
          (o.shape.y[0] = i[0].y - p),
          (o.shape.x[1] = i[1].x - s),
          (o.shape.y[1] = i[1].y - p),
          this.exeRenderTag(
            e.viewer,
            e,
            e.wgtTag(t),
            e.screen.objects[t],
            1 / e.getZoomX(),
            1 / e.getZoomY()
          ),
          r.apnCur && (r.apnCur.apxColDectectOn = !0),
          (e._apxColDectectOn = !0);
      }
    }
  }),
  (xa.exePropGet = function (e, t, a, i) {
    if ("vertex" == a || "vertexInPage" == a) {
      if (i) return !0;
      var n = e.screen.objects[t].init;
      return [
        { x: n.position.x + n.shape.x[0], y: n.position.y + n.shape.y[0] },
        { x: n.position.x + n.shape.x[1], y: n.position.y + n.shape.y[1] },
      ];
    }
  }),
  (apn.widgets["apn.wgt.line"] = xa),
  (apn.widgets.utils.$O2D = function (e) {
    return (
      e ||
        ((e = $TAG("canvas", { style: "position:absolute;" })),
        e.$CSS({ boxSizing: "border-box" }),
        (e.apnCur = {}),
        (e.REFRESH_ON_RESIZE = !0)),
      e
    );
  }),
  (apn.widgets.utils.canvasCreateTag = apn.widgets.utils.$O2D),
  (apn.widgets.utils.$O2F = function (e, t, a, i, n, r, o, s, p, l, d, c) {
    var g = !(!c || !c.getXY);
    g || (apn.CES.transformSet(t, "rotate", 0), apn.CES.transformApply(t));
    var u = 0,
      h = 0;
    if (i.lineWidth && i.strokeStyle) {
      var x = apn.IWidget.$O3R(2, i, p),
        f = 1;
      a.create.data.properties &&
        a.create.data.properties.attrs &&
        "miter" == a.create.data.properties.attrs.join &&
        (f = 6),
        (n -= x * f),
        (r -= x * f),
        (o += apn.IWidget.$O3R(1, i, p) * f),
        (s += apn.IWidget.$O3R(1, i, p) * f),
        (u += x * f),
        (h += x * f),
        a.create.data.properties &&
          a.create.data.properties.attrs &&
          a.create.data.properties.attrs.join;
    }
    if (
      (c && c.outerX && ((n -= c.outerX), (o += 2 * c.outerX), (u += c.outerX)),
      c && c.outerY && ((r -= c.outerY), (s += 2 * c.outerY), (h += c.outerY)),
      (i.angle = bx.$checkNaN(parseFloat(i.angle))),
      g || ((t.wgt_dx = u), (t.wgt_dy = h)),
      g)
    )
      return (c.getXY.x = n), void (c.getXY.y = r);
    (t.style.left = n + "px"),
      (t.style.top = r + "px"),
      (parseInt(t.width) == o && parseInt(t.height) == s) ||
        ((t.width = o), (t.height = s)),
      (t.style.width = o + "px"),
      (t.style.height = s + "px");
    var y = apn.widgets.utils.$O2v(a.init.shape.w, p),
      v = apn.widgets.utils.$O2w(a.init.shape.h, l),
      C = t.getContext("2d");
    i.fillStyle && (C.fillStyle = i.fillStyle),
      i.lineWidth &&
        i.strokeStyle &&
        (bx.cCanvasObject.applyLineDash(C, i),
        (C.lineJoin = "round"),
        (C.lineWidth = Math.max(1, Math.round(parseInt(i.lineWidth) * p))),
        (C.strokeStyle = i.strokeStyle),
        i.lineDash && apn.IWidget.exeApplyLineDash(C, i.lineDash, C.lineWidth)),
      d &&
        d(
          C,
          !(!i.lineWidth || !i.strokeStyle),
          !!i.fillStyle,
          (o - y) / 2,
          (s - v) / 2,
          y,
          v,
          c
        ),
      i.text &&
        bx.CCanvasWnd.drawText(
          C,
          (o - y) / 2,
          (s - v) / 2,
          y,
          v,
          i.text,
          i.textMultiLine,
          Math.round(parseInt(i.fontSize) * l) + "px" ||
            bx.CEditorWnd.FONT_SIZE_DEF,
          i.fontStyle || bx.CEditorWnd.FONT_COLOR_DEF,
          i.font || bx.CEditorWnd.FONT_DEF,
          i.textAlign,
          i.textValign,
          i.textPadding,
          i.fontBold,
          i.fontItalic,
          i.fontUnderlined
        );
  }),
  (apn.widgets.utils.canvasRenderTag = apn.widgets.utils.$O2F),
  (apn.widgets.utils.$O2G = function (e, t, a, i, n, r, o) {
    var s = a.init.shape.w,
      p = a.init.shape.h,
      l = bx.$checkNaN(
        parseFloat(
          apn.Project.resolveStyle(e, "angle", a.create.data.styles.angle)
        )
      );
    if (l) {
      var d = s / 2 + (a.init.cx || 0),
        c = p / 2 + (a.init.cy || 0),
        g = n - d,
        u = r - c;
      (n = g * Math.cos(-l) - u * Math.sin(-l)),
        (r = u * Math.cos(-l) + g * Math.sin(-l)),
        (n = Math.round(n + d)),
        (r = Math.round(r + c));
    }
    return o(n, r, 0, 0, s, p);
  }),
  (apn.widgets.utils.$O2I = function (e, t, a, i) {
    var n = a.lineWidth && a.strokeStyle ? t.shape.lw : 0,
      r = a.lineWidth && a.strokeStyle ? a.lineWidth : 0,
      o = 1 / e.getZoomX(),
      s = 1 / e.getZoomY();
    (i.style.left = e.tagVP.offsetLeft + e.toScreenX(t.position.x + n) + "px"),
      (i.style.top = e.tagVP.offsetTop + e.toScreenY(t.position.y + n) + "px"),
      (i.style.width = e.toScreenW(t.shape.w - r) + "px"),
      (i.style.height = e.toScreenH(t.shape.h - r) + "px"),
      apn.IWidget.exeSetFontStyle(i, a.fontStyle),
      apn.IWidget.$O6x(a, i, o, s),
      t.getAngle && t.getAngle()
        ? i.$CSS("transform", "rotate(" + t.getAngle() + "rad)")
        : i.$CSS("transform", "none"),
      (i.style.backgroundColor = "transparent"),
      (i.style.borderColor = "transparent");
  }),
  (apn.widgets.utils._applyCSS2TextInputPadding = function (e, t, a, i) {
    var n = 1 / e.getZoomX();
    if (a.textPadding) {
      var r = Math.min(t.shape.h / 2, Math.min(t.shape.w / 2, a.textPadding));
      i.style.padding = r * n + "px";
    } else i.style.padding = 0;
  }),
  (apn.widgets.utils.$O2C = function (e, t, a, i, n, r, o) {
    var s = e.getObjectByID(i),
      p = apn.Project.resolveStyle(
        t,
        "textMultiLine",
        s.data.styles.textMultiLine
      ),
      l = e.getWgtInputTAG(
        p,
        apn.Project.resolveStyle(t, "textWordWrap", s.data.styles.textWordWrap)
      );
    if (p) {
      var d = l.multiTxt,
        c = s.style.font,
        g = 1.2;
      apn.fonts &&
        apn.fonts[c] &&
        void 0 !== apn.fonts[c].height &&
        (g = apn.fonts[c].height);
      var u =
        parseInt(
          apn.Project.resolveStyle(t, "fontSize", s.data.styles.fontSize)
        ) * g;
      apn.Project.resolveStyle(t, "lnSp", s.data.styles.lnSp) &&
        (u += apn.Project.resolveStyle(t, "lnSp", s.data.styles.lnSp)),
        (d.style.lineHeight = u * (1 / e.getZoomY()) + "px");
      var h = bx.$checkNaN(parseFloat(e.wgtGetProperty(i, "txtI")));
      h && h > 0
        ? (d.style.textIndent = h + "em")
        : (d.style.textIndent = "initial");
    } else {
      var d = l.singleTxt;
      (d.style.width = "100%"), d.$CSS("transform", "none");
    }
    apn.Project.resolveStyle(t, "ltrSp", s.data.styles.ltrSp)
      ? (d.style.letterSpacing =
          apn.Project.resolveStyle(t, "ltrSp", s.data.styles.ltrSp) *
            (1 / e.getZoomY()) +
          "px")
      : (d.style.letterSpacing = "normal"),
      (d.style.display = "block");
    var x = apn.IWidget.getCanvasObjectStyle({}, a, t, s.data.styles);
    return (
      (d.onchange = function () {
        e.$O1i({ text: this.value }, s);
      }),
      (d.onfocus = function () {
        s.setStyle("text", ""), e.draw();
      }),
      (d.onblur = function (t) {
        "textarea" == this.tagName.toLowerCase() &&
          "center" == s.style.textAlign &&
          /[ \t]$/.test(this.value) &&
          bx.UX.showToast(
            apn.CEditorS.GL(apn.CEditorS.TXT_EDT_WARN_IOS_RIGHTSPACE),
            { css: "bxToastErr", time: 3e3 }
          ),
          e.$O1i({ text: this.value }, s),
          e.draw();
      }),
      (d.onkeydown = function (e) {
        if ("input" == this.tagName.toLowerCase() && 13 == event.keyCode)
          return e.preventDefault(), !1;
      }),
      (d.onkeypress = d.onkeyup =
        function (n) {
          d.value
            ? (l.dummy.innerHTML = d.value
                .replace(/\n$/, "<br>&nbsp;")
                .replace(/\n/g, "<br>"))
            : (l.dummy.innerHTML = "&nbsp;"),
            (l.dummy.style.letterSpacing = d.style.letterSpacing),
            p
              ? l.dummy.offsetHeight < l.clientHeight
                ? ((d.style.height = l.clientHeight + "px"),
                  "middle" == x.textValign
                    ? ((d.style.paddingTop =
                        (l.clientHeight - l.dummy.offsetHeight) / 2 + "px"),
                      (d.style.paddingBottom =
                        (l.clientHeight - l.dummy.offsetHeight) / 2 + "px"))
                    : "bottom" == x.textValign
                    ? (d.style.paddingTop =
                        l.clientHeight - l.dummy.offsetHeight + "px")
                    : (d.style.paddingBottom =
                        l.clientHeight - l.dummy.offsetHeight + "px"))
                : (d.style.height = l.dummy.offsetHeight + "px")
              : a.edtOnChangeSingleTextEditor &&
                a.edtOnChangeSingleTextEditor(e, t, i, d, l.dummy);
        }),
      l.$CSS("borderRadius", "0"),
      apn.widgets.utils.$O2I(e, s, x, l),
      apn.widgets.utils._applyCSS2TextInputPadding(e, s, x, d),
      o && o(l),
      (l.dummy.style.lineHeight = d.style.lineHeight),
      (d.value = x.text || ""),
      l.apnShow(),
      d.focus(),
      p || d.select(),
      d.onkeypress(),
      p
        ? ((l.dummy.style.width = "100%"),
          l.dummy.offsetHeight < l.clientHeight
            ? (l.scrollTop = 0)
            : "middle" == x.textValign
            ? (l.scrollTop = Math.max(0, (d.offsetHeight - l.clientHeight) / 2))
            : "bottom" == x.textValign
            ? (l.scrollTop = Math.max(0, d.offsetHeight - l.clientHeight))
            : (l.scrollTop = 0))
        : ((l.dummy.style.width = "auto"),
          l.dummy.offsetHeight < l.clientHeight
            ? ((d.style.height = l.clientHeight + "px"),
              "top" == x.textValign
                ? ((d.style.paddingTop = "0px"),
                  (d.style.paddingBottom =
                    l.clientHeight - l.dummy.offsetHeight + "px"))
                : "bottom" == x.textValign
                ? ((d.style.paddingTop =
                    l.clientHeight - l.dummy.offsetHeight + "px"),
                  (d.style.paddingBottom = "0px"))
                : ((d.style.paddingTop =
                    (l.clientHeight - l.dummy.offsetHeight) / 2 + "px"),
                  (d.style.paddingBottom =
                    (l.clientHeight - l.dummy.offsetHeight) / 2 + "px")))
            : ((d.style.height = l.dummy.offsetHeight + "px"),
              (d.style.paddingTop = "0px"),
              (d.style.paddingBottom = "0px")),
          a.edtOnChangeSingleTextEditor &&
            a.edtOnChangeSingleTextEditor(e, t, i, d, l.dummy)),
      !1
    );
  }),
  (apn.widgets.utils.$O2x = function (e, t, a, i) {
    if (!t.parentNode)
      return console.error("[Aspen Trace] toScreenX " + e.getPageID()), 0;
    if (t.parentNode == e.tag) return Math.round(a * i);
    if (t.parentNode.apnOID && t.parentNode.apnPID) {
      var n = t.parentNode.apnOID;
      return (
        "apn.CLayer" == e.screen.objects[n].module &&
          (n = t.parentNode.parentNode.apnOID),
        Math.round(a * i) - Math.round(e.screen.objects[n].init.position.x * i)
      );
    }
    return Math.round(a * i) - e.getTagX(t.parentNode);
  }),
  (apn.widgets.utils.toScreenX = apn.widgets.utils.$O2x),
  (apn.widgets.utils.$O2y = function (e, t, a, i) {
    if (!t.parentNode)
      return console.error("[Aspen Trace] toScreenY " + e.getPageID()), 0;
    if (t.parentNode == e.tag) return Math.round(a * i);
    if (t.parentNode.apnOID && t.parentNode.apnPID) {
      var n = t.parentNode.apnOID;
      return (
        "apn.CLayer" == e.screen.objects[n].module &&
          (n = t.parentNode.parentNode.apnOID),
        Math.round(a * i) - Math.round(e.screen.objects[n].init.position.y * i)
      );
    }
    return Math.round(a * i) - e.getTagY(t.parentNode);
  }),
  (apn.widgets.utils.toScreenY = apn.widgets.utils.$O2y),
  (apn.widgets.utils.$O2v = function (e, t) {
    return Math.round(e * t);
  }),
  (apn.widgets.utils.toScreenW = apn.widgets.utils.$O2v),
  (apn.widgets.utils.$O2w = function (e, t) {
    return Math.round(e * t);
  }),
  (apn.widgets.utils.toScreenH = apn.widgets.utils.$O2w),
  (apn.widgets.utils.$O3Z = function (e, t) {
    return e / t;
  }),
  (apn.widgets.utils.$O40 = function (e, t) {
    return e / t;
  }),
  (apn.widgets.utils.getBorderUnderlineWeight = function (e) {
    var t;
    return (
      (t = Math.round(bx.$checkNaN(parseInt(e.$css("font-size"))) / 17) || 1),
      "bold" == e.$css("font-weight") && t++,
      t
    );
  }),
  (apn.widgets.utils.$O7H = function (e) {
    try {
      for (
        var t = atob(e.split(",")[1]),
          a = new ArrayBuffer(t.length),
          i = new Uint8Array(a),
          n = 0;
        n < t.length;
        n++
      )
        i[n] = t.charCodeAt(n);
      var r = new Blob([a]);
      return URL.createObjectURL(r);
    } catch (t) {
      return e;
    }
  }),
  (apn.widgets.utils.patch3 = function (e, t, a, i, n, r) {
    var o = "cursor:inherit;position:absolute;";
    if (r) var s = parseInt(r) || 0;
    else
      var s =
        apn.dbUI && apn.dbUI.system && apn.dbUI.system.exePatchOverlap
          ? apn.dbUI.system.exePatchOverlap
          : 0;
    e.$ObU =
      e.$ObU ||
      e.$TAG("div", { style: o + "left:0px;top:0px;width:100%;height:100%" });
    var p = e.$ObU;
    if (
      (void 0 === t ? (t = p.$ObV) : (p.$ObV = t),
      void 0 === a ? (a = p.$ObW) : (p.$ObW = a),
      void 0 === i ? (i = p.$ObX) : (p.$ObX = i),
      void 0 === n ? (n = p.$ObY) : (p.$ObY = n),
      t)
    ) {
      var l = parseFloat(e.style.width) / a.naturalWidth;
      p.tagC
        ? (p.tagC.style.height =
            2 * s +
            parseFloat(e.style.height) -
            (a.naturalHeight + n.naturalHeight) * l +
            "px")
        : ((p.tagC = p.tagC || p.$TAG("div")),
          p.tagC.$A({
            style:
              o +
              "left:0px;top:" +
              (a.naturalHeight * l - s) +
              "px;height:" +
              (2 * s +
                parseFloat(e.style.height) -
                (a.naturalHeight + n.naturalHeight) * l) +
              "px;width:100%;background:url(" +
              i.getAttribute("src") +
              ") repeat-y left center;",
          }),
          bx.HCL.DV.isAndroid()
            ? p.tagC.$CSS("backgroundSize", "100% " + i.naturalHeight + "px")
            : p.tagC.$CSS("backgroundSize", "100% auto"),
          (p.tagL = p.tagL || p.$TAG("div")),
          p.tagL.$A({
            style:
              o +
              "left:0px;top:0px;width:100%;height:" +
              a.naturalHeight * l +
              "px;background:url(" +
              a.getAttribute("src") +
              ") no-repeat left top;",
          }),
          p.tagL.$CSS("backgroundSize", "100% 100%"),
          (p.tagR = p.tagR || p.$TAG("div")),
          p.tagR.$A({
            style:
              o +
              "left:0px;bottom:0px;width:100%;height:" +
              n.naturalHeight * l +
              "px;background:url(" +
              n.getAttribute("src") +
              ") no-repeat left bottom;",
          }),
          p.tagR.$CSS("backgroundSize", "100% 100%"));
    } else {
      var l = parseFloat(e.style.height) / a.naturalHeight;
      p.tagC
        ? (p.tagC.style.width =
            2 * s +
            parseFloat(e.style.width) -
            (a.naturalWidth + n.naturalWidth) * l +
            "px")
        : ((p.tagC = p.tagC || p.$TAG("div")),
          p.tagC.$A({
            style:
              o +
              "top:0px;left:" +
              (a.naturalWidth * l - s) +
              "px;width:" +
              (2 * s +
                parseFloat(e.style.width) -
                (a.naturalWidth + n.naturalWidth) * l) +
              "px;height:100%;background:url(" +
              i.getAttribute("src") +
              ") repeat-x center top;",
          }),
          bx.HCL.DV.isAndroid()
            ? p.tagC.$CSS("backgroundSize", i.naturalWidth + "px 100%")
            : p.tagC.$CSS("backgroundSize", "auto 100%"),
          (p.tagL = p.tagL || p.$TAG("div")),
          p.tagL.$A({
            style:
              o +
              "left:0px;top:0px;height:100%;width:" +
              a.naturalWidth * l +
              "px;background:url(" +
              a.getAttribute("src") +
              ") no-repeat left top;",
          }),
          p.tagL.$CSS("backgroundSize", "100% 100%"),
          (p.tagR = p.tagR || p.$TAG("div")),
          p.tagR.$A({
            style:
              o +
              "right:0px;top:0px;height:100%;width:" +
              n.naturalWidth * l +
              "px;background:url(" +
              n.getAttribute("src") +
              ") no-repeat right top;",
          }),
          p.tagR.$CSS("backgroundSize", "100% 100%"));
    }
    return p;
  }),
  (apn.widgets.utils.patch9 = function (
    e,
    t,
    a,
    i,
    n,
    r,
    o,
    s,
    p,
    l,
    d,
    c,
    g,
    u
  ) {
    var h = "cursor:inherit;position:absolute;";
    if (u) var x = parseInt(u) || 0;
    else
      var x =
        apn.dbUI && apn.dbUI.system && apn.dbUI.system.exePatchOverlap
          ? apn.dbUI.system.exePatchOverlap
          : 0;
    (t = t || 1),
      (a = a || 1),
      (e.$ObZ =
        e.$ObZ ||
        e.$TAG("div", {
          style: h + "left:0px;top:0px;width:100%;height:100%",
        }));
    var f = e.$ObZ;
    if (
      (void 0 === i ? (i = f.$Oc0) : (f.$Oc0 = i),
      void 0 === n ? (n = f.$ObW) : (f.$ObW = n),
      void 0 === r ? (r = f.$Oc1) : (f.$Oc1 = r),
      void 0 === o ? (o = f.$Oc2) : (f.$Oc2 = o),
      void 0 === s ? (s = f.$Oc3) : (f.$Oc3 = s),
      void 0 === p ? (p = f.$ObY) : (f.$ObY = p),
      void 0 === l ? (l = f.$Oc4) : (f.$Oc4 = l),
      void 0 === d ? (d = f.$Oc5) : (f.$Oc5 = d),
      void 0 === c ? (c = f.$ObX) : (f.$ObX = c),
      (f.tagLT = f.tagLT || f.$TAG("div")),
      f.tagLT.$A({
        style:
          h +
          "left:0px;top:0px;height:" +
          i.naturalHeight * a +
          "px;width:" +
          i.naturalWidth * t +
          "px;background:url(" +
          i.getAttribute("src") +
          ") no-repeat left top;",
      }),
      f.tagLT.$CSS("backgroundSize", "100% 100%"),
      (f.tagRT = f.tagRT || f.$TAG("div")),
      f.tagRT.$A({
        style:
          h +
          "right:0px;top:0px;height:" +
          l.naturalHeight * a +
          "px;width:" +
          l.naturalWidth * t +
          "px;background:url(" +
          l.getAttribute("src") +
          ") no-repeat right top;",
      }),
      f.tagRT.$CSS("backgroundSize", "100% 100%"),
      (f.tagLB = f.tagLB || f.$TAG("div")),
      f.tagLB.$A({
        style:
          h +
          "left:0px;bottom:0px;height:" +
          r.naturalHeight * a +
          "px;width:" +
          r.naturalWidth * t +
          "px;background:url(" +
          r.getAttribute("src") +
          ") no-repeat left bottom;",
      }),
      f.tagLB.$CSS("backgroundSize", "100% 100%"),
      (f.tagRB = f.tagRB || f.$TAG("div")),
      f.tagRB.$A({
        style:
          h +
          "right:0px;bottom:0px;height:" +
          s.naturalHeight * a +
          "px;width:" +
          s.naturalWidth * t +
          "px;background:url(" +
          s.getAttribute("src") +
          ") no-repeat right bottom;",
      }),
      f.tagRB.$CSS("backgroundSize", "100% 100%"),
      bx.HCL.DV.isChrome() && g)
    ) {
      (f.tagT = f.tagT || f.$TAG("canvas")),
        f.tagT.$A({
          style: h + "left:" + (i.naturalWidth * t - x) + "px;top:0px;",
          width:
            2 * x +
            parseFloat(e.style.width) -
            (i.naturalWidth + l.naturalWidth) * t,
          height: d.naturalHeight * a,
        });
      var y = f.tagT.getContext("2d");
      y.scale(t, a),
        (y.fillStyle = y.createPattern(d, "repeat-x")),
        y.fillRect(0, 0, y.canvas.width, y.canvas.height);
    } else
      (f.tagT = f.tagT || f.$TAG("div")),
        f.tagT.$A({
          style:
            h +
            "left:" +
            (i.naturalWidth * t - x) +
            "px;top:0px;width:" +
            (2 * x +
              parseFloat(e.style.width) -
              (i.naturalWidth + l.naturalWidth) * t) +
            "px;height:" +
            d.naturalHeight * a +
            "px;background:url(" +
            d.getAttribute("src") +
            ") repeat-x center top;",
        }),
        bx.HCL.DV.isAndroid()
          ? f.tagT.$CSS("backgroundSize", d.naturalWidth + "px 100%")
          : f.tagT.$CSS("backgroundSize", "auto 100%");
    if (bx.HCL.DV.isChrome() && g) {
      (f.tagB = f.tagB || f.$TAG("canvas")),
        f.tagB.$A({
          style: h + "left:" + (r.naturalWidth * t - x) + "px;bottom:0px;",
          width:
            2 * x +
            parseFloat(e.style.width) -
            (r.naturalWidth + s.naturalWidth) * t,
          height: o.naturalHeight * a,
        });
      var y = f.tagB.getContext("2d");
      y.scale(t, a),
        (y.fillStyle = y.createPattern(o, "repeat-x")),
        y.fillRect(0, 0, y.canvas.width, y.canvas.height);
    } else
      (f.tagB = f.tagB || f.$TAG("div")),
        f.tagB.$A({
          style:
            h +
            "left:" +
            (r.naturalWidth * t - x) +
            "px;bottom:0px;width:" +
            (2 * x +
              parseFloat(e.style.width) -
              (r.naturalWidth + s.naturalWidth) * t) +
            "px;height:" +
            o.naturalHeight * a +
            "px;background:url(" +
            o.getAttribute("src") +
            ") repeat-x center bottom;",
        }),
        bx.HCL.DV.isAndroid()
          ? f.tagB.$CSS("backgroundSize", o.naturalWidth + "px 100%")
          : f.tagB.$CSS("backgroundSize", "auto 100%");
    if (bx.HCL.DV.isChrome() && g) {
      (f.tagL = f.tagL || f.$TAG("canvas")),
        f.tagL.$A({
          style: h + "top:" + (i.naturalHeight * a - x) + "px;left:0px;",
          height:
            2 * x +
            parseFloat(e.style.height) -
            (i.naturalHeight + r.naturalHeight) * a,
          width: n.naturalWidth * t,
        });
      var y = f.tagL.getContext("2d");
      y.scale(t, a),
        (y.fillStyle = y.createPattern(n, "repeat-y")),
        y.fillRect(0, 0, y.canvas.width, y.canvas.height);
    } else
      (f.tagL = f.tagL || f.$TAG("div")),
        f.tagL.$A({
          style:
            h +
            "top:" +
            (i.naturalHeight * a - x) +
            "px;left:0px;height:" +
            (2 * x +
              parseFloat(e.style.height) -
              (i.naturalHeight + r.naturalHeight) * a) +
            "px;width:" +
            n.naturalWidth * t +
            "px;background:url(" +
            n.getAttribute("src") +
            ") repeat-y left center;",
        }),
        bx.HCL.DV.isAndroid()
          ? f.tagL.$CSS("backgroundSize", "100% " + n.naturalHeight + "px")
          : f.tagL.$CSS("backgroundSize", "100% auto");
    if (bx.HCL.DV.isChrome() && g) {
      (f.tagR = f.tagR || f.$TAG("canvas")),
        f.tagR.$A({
          style: h + "top:" + (l.naturalHeight * a - x) + "px;right:0px;",
          width: p.naturalWidth * t,
          height:
            2 * x +
            parseFloat(e.style.height) -
            (l.naturalHeight + s.naturalHeight) * a,
        });
      var y = f.tagR.getContext("2d");
      y.scale(t, a),
        (y.fillStyle = y.createPattern(p, "repeat-y")),
        y.fillRect(0, 0, y.canvas.width, y.canvas.height);
    } else
      (f.tagR = f.tagR || f.$TAG("div")),
        f.tagR.$A({
          style:
            h +
            "top:" +
            (l.naturalHeight * a - x) +
            "px;right:0px;height:" +
            (2 * x +
              parseFloat(e.style.height) -
              (l.naturalHeight + s.naturalHeight) * a) +
            "px;width:" +
            p.naturalWidth * t +
            "px;background:url(" +
            p.getAttribute("src") +
            ") repeat-y right center;",
        }),
        bx.HCL.DV.isAndroid()
          ? f.tagR.$CSS("backgroundSize", "100% " + p.naturalHeight + "px")
          : f.tagR.$CSS("backgroundSize", "100% auto");
    return (
      (f.tagC = f.tagC || f.$TAG("div")),
      f.tagC.$A({
        style:
          h +
          "top:" +
          (i.naturalHeight * a - x) +
          "px;left:" +
          (i.naturalWidth * t - x) +
          "px;height:" +
          (2 * x +
            parseFloat(e.style.height) -
            (i.naturalHeight + r.naturalHeight) * a) +
          "px;width:" +
          (2 * x +
            parseFloat(e.style.width) -
            (i.naturalWidth + l.naturalWidth) * t) +
          "px;background:url(" +
          c.getAttribute("src") +
          ") repeat left top;",
      }),
      f.tagC.$CSS("backgroundSize", 100 * t + "% " + 100 * a + "%"),
      f
    );
  }),
  (apn.widgets.utils.curve = function (e, t, a, i, n) {
    if (t.length >= 3) {
      if ((e.beginPath(), n));
      else {
        var r = (a(0) + a(t.length - 1)) / 2,
          o = (i(0) + i(t.length - 1)) / 2;
        e.moveTo(r, o);
        for (var s, p, l, d, c, g, u = 0; u < t.length; u++)
          (c = (a(u) + a(u + 1 > t.length - 1 ? 0 : u + 1)) / 2),
            (g = (i(u) + i(u + 1 > t.length - 1 ? 0 : u + 1)) / 2),
            (s = (r + a(u)) / 2),
            (p = (o + i(u)) / 2),
            (l = (c + a(u)) / 2),
            (d = (g + i(u)) / 2),
            e.bezierCurveTo(s, p, l, d, c, g),
            (r = c),
            (o = g);
      }
      e.closePath();
    }
  }),
  (apn.widgets.utils.interpolatePath = function (e, t) {
    var a;
    if (void 0 === e._distAll) {
      if (
        ((e._distAll = 0),
        (e._distCur = 0),
        (e._ptLast = 0),
        (e.index = 0),
        (e.minDist = e.minDist || 2),
        e.path.length > 1)
      ) {
        e._distPts = new Array(e.path.length);
        for (var a = 0; a < e.path.length - 1; a++)
          (e._distPts[a] = e._distAll),
            0 === e.path[a].lw ||
              (e._distAll += Math.sqrt(
                Math.pow(e.path[a + 1].x - e.path[a].x, 2) +
                  Math.pow(e.path[a + 1].y - e.path[a].y, 2)
              ));
        e._distPts[a] = e._distAll;
      }
      (e.pt1 = { x: e.path[0].x, y: e.path[0].y }),
        (e.pt2 = { x: e.path[0].x, y: e.path[0].y });
    }
    if (((e.draw = !1), (e.again = !1), e._distAll)) {
      if (e._ptLast >= e.path.length - 1)
        return (e.draw = !0), void (e.index = e.path.length - 1);
      var i = t * e._distAll,
        n = i - e._distCur;
      if (i < e._distPts[e._ptLast + 1])
        if (n < e.minDist);
        else {
          var r = Math.atan2(
            e.path[e._ptLast + 1].y - e.path[e._ptLast].y,
            e.path[e._ptLast + 1].x - e.path[e._ptLast].x
          );
          (r += 0.5 * Math.PI),
            (e.pt1.x = e.pt2.x),
            (e.pt1.y = e.pt2.y),
            (e.pt2.x = e.pt1.x + Math.sin(r) * n),
            (e.pt2.y = e.pt1.y - Math.cos(r) * n),
            (e.draw = !0),
            (e.index = e._ptLast),
            (e._distCur = i);
        }
      else
        (e.pt1.x = e.pt2.x),
          (e.pt1.y = e.pt2.y),
          (e.pt2.x = e.path[e._ptLast + 1].x),
          (e.pt2.y = e.path[e._ptLast + 1].y),
          (e.draw = !0),
          (e.again = !0),
          (e.index = e._ptLast),
          (e._distCur = e._distPts[e._ptLast + 1]),
          e._ptLast++;
    }
  }),
  (apn.widgets.utils.interpolatePathGetRatio = function (e, t) {
    var a = 0,
      i = 0;
    if (e.length > 1)
      for (var n = 0; n < e.length - 1; n++)
        0 === e[n].lw ||
          (a += Math.sqrt(
            Math.pow(e[n + 1].x - e[n].x, 2) + Math.pow(e[n + 1].y - e[n].y, 2)
          )),
          t - 1 == n && (i = a);
    return a ? i / a : 0;
  }),
  (apn.widgets.utils.drawArrow = function (e, t, a, i, n, r, o, s) {
    function p(e, t, a, i) {
      return (Math.atan2(a - e, t - i) + 2 * Math.PI) % (2 * Math.PI);
    }
    s = s || 1;
    var l = r.lineWidth * s,
      d = p(i, n, t, a),
      c = 8 * l + (1 == r.lineWidth ? 1 : 0) * s;
    if (1 == o) {
      var g = l / 2 / Math.tan(Math.PI / 9);
      (i += Math.sin(d) * g), (n += -Math.cos(d) * g);
    }
    var u = Math.sin(d - Math.PI / 9) * c,
      h = -Math.cos(d - Math.PI / 9) * c,
      x = Math.sin(d + Math.PI / 9) * c,
      f = -Math.cos(d + Math.PI / 9) * c;
    if (0 == o) {
      var y = "butt" == r.lineEnd ? Math.ceil(l / 2) : l;
      return (y += l), { x: Math.sin(d) * y, y: -Math.cos(d) * y };
    }
    e.save(),
      r.lineDash && bx.cCanvasObject.clearLineDash(e),
      r.lD2 && e.setLineDash && e.setLineDash([]),
      (e.lineJoin = "miter"),
      (e.strokeStyle = r.strokeStyle),
      (e.fillStyle = r.strokeStyle),
      2 == o
        ? ((e.lineCap = "butt"),
          (e.lineWidth = 1),
          e.beginPath(),
          e.moveTo(i, n),
          e.lineTo(i + u, n + h),
          e.lineTo(i + x, n + f),
          e.lineTo(i, n),
          e.closePath(),
          e.fill(),
          e.stroke())
        : (e.beginPath(),
          e.moveTo(i + u, n + h),
          e.lineTo(i, n),
          e.lineTo(i + x, n + f),
          e.stroke()),
      e.restore();
  }),
  (window.apn = window.apn || {}),
  (apn.widgets = apn.widgets || { utils: {} });
var xa;
(xa = {}),
  (xa.exeItrNoResize = !0),
  (xa.exeItrNoText = !0),
  (xa.apdNeedFontPreload = !0),
  (xa.apxTextAlignJustify = !0),
  (xa.styleMap = {
    title: !0,
    visibility: !0,
    fillStyle: !0,
    font: !0,
    fontSize: !0,
    fontStyle: !0,
    textAlign: !0,
    ltrSp: !0,
    lnSp: !1,
    alpha: !0,
    angle: !0,
  }),
  (xa.editor = { placeHolder: "Double click to edit" }),
  (xa.properties = {
    attrs: { v: 2, plainText: "", text: "", exeText: "", mediaID: [] },
  }),
  (xa.createAsCanvasObject = function (e, t, a, i, n) {
    return apn.IWidget.createCanvasObject(
      e,
      this,
      "apn.CRtxt",
      bx.CCanvasWnd.SHAPE_RECT,
      t,
      a,
      i,
      n
    );
  }),
  (xa.srcOnPreParse = function (e) {
    var t = e.create.data.properties.attrs;
    (t.mediaID = t.mediaID || []),
      (t.exeText = t.exeText || ""),
      (t.plainText = t.plainText || "");
  }),
  (xa.exeCreateTag = function (e, t, a, i, n) {
    var r = document.body.$TAG("div", {
      style: "position:absolute;overflow:hidden;",
    });
    r.$CSS({ boxSizing: "border-box;", backgroundColor: "red" }),
      (r.apnCur = {}),
      (r.textTag = void 0);
    var o = a.create.data.properties && a.create.data.properties.attrs;
    if (o && (o.text || o.exeText)) {
      r.innerHTML = this._convertXhtmlRule(o.exeText || o.text);
      var s = r.querySelectorAll("img");
      if (s.length)
        for (var p = 0; p < s.length; p++)
          s[p].dataset &&
            s[p].dataset.id &&
            (s[p].src = t.mediaURL(s[p].dataset.id));
    }
    if (1 != i || 1 != n) {
      var l = r.firstElementChild;
      l &&
        ((l.style.transformOrigin = "left top"),
        (l.style.msTransformOrigin = "left top"),
        (l.style.webkitTransformOrigin = "left top"),
        (l.style.transform = "scale(" + i + ", " + n + ")"),
        (l.style.msTransform = "scale(" + i + ", " + n + ")"),
        (l.style.webkitTransform = "scale(" + i + ", " + n + ")"));
    }
    return r;
  }),
  (xa.edtOnRemoveResource = function (e, t, a) {
    var i,
      n,
      r = e.getObjectByID(t),
      o = r.data.properties && r.data.properties.attrs;
    if (o && o.text) {
      (i = r.getSnapshotTag()),
        (i.innerHTML = o.text),
        (n = i.querySelectorAll('img[data-id="' + a + '"]') || []);
      for (var s = 0; s < n.length; s++)
        n[s].parentElement && n[s].parentElement.removeChild(n[s]);
      (o.text = i.innerHTML),
        (o.mediaID = []),
        (n = i.querySelectorAll("img[data-id]") || []);
      for (var s = 0; s < n.length; s++)
        o.mediaID.indexOf(n[s].dataset.id) == -1 &&
          o.mediaID.push(n[s].dataset.id);
      e.$Oc6(o, r), r.refresh();
    }
  }),
  (xa.exeRenderTag = function (e, t, a, i, n, r) {
    function o(e, t) {
      if (
        t.fontFamily &&
        parseInt(t.fontSize) &&
        t.letterSpacing &&
        parseInt(t.letterSpacing) < 0
      ) {
        var a =
          parseInt(t.fontSize) *
          (0.1 + Math.abs(0.02 * parseInt(t.letterSpacing)));
        e.style.paddingRight = Math.ceil(a) + "px";
      } else e.style.paddingRight = "0px";
    }
    var s = i.create.data.properties && i.create.data.properties.attrs;
    if (!a.firstElementChild && (s.text || s.exeText))
      return void bx.Trace.log(
        "RTXT",
        "warning",
        "cannot render rxtx. wrapper tag empty"
      );
    var p = apn.IWidget.getCanvasObjectStyle(
      {},
      this,
      e.project,
      i.create.data.styles
    );
    apn.IWidget.exeApplyCSSpre(
      i,
      p,
      a,
      apn.widgets.utils.$O2x(t, a, i.init.position.x, n),
      apn.widgets.utils.$O2y(t, a, i.init.position.y, r),
      apn.widgets.utils.$O2v(i.init.shape.w, n),
      apn.widgets.utils.$O2w(i.init.shape.h, r),
      n,
      r
    ),
      apn.IWidget.exeRenderSize(e, t, a, i, e.project, n, r),
      apn.IWidget.exeRenderPosition(t, a, i, e.project, n, r),
      apn.IWidget.exeApplyCSSpost(
        i,
        p,
        a,
        apn.widgets.utils.$O2x(t, a, i.init.position.x, n),
        apn.widgets.utils.$O2y(t, a, i.init.position.y, r),
        apn.widgets.utils.$O2v(i.init.shape.w, n),
        apn.widgets.utils.$O2w(i.init.shape.h, r),
        n,
        r
      ),
      (p = this.$Oc7(t.wgtGetProperty(a.apnOID, "v"), p));
    var l = a.firstElementChild;
    if (l) {
      o(l, p);
      for (var d in p) l.style[d] = p[d];
      var c = apn.Project.getLayout(e.project).property.CExe;
      c && c.event && "Y" == c.event.SL
        ? ((l.style.webkitUserSelect = "text"),
          (l.style.mozUserSelect = "text"),
          (l.style.msUserSelect = "text"),
          (l.style.userSelect = "text"))
        : ((l.style.webkitUserSelect = "none"),
          (l.style.mozUserSelect = "none"),
          (l.style.msUserSelect = "none"),
          (l.style.userSelect = "none"));
    }
    return l;
  }),
  (xa.exeOnLoad = function (e, t) {
    var a = e.screen.objects[t],
      i = (a.init.shape.w, a.init.shape.h, e.wgtTag(t));
    parseInt(i.style.width), parseInt(i.style.height);
  }),
  (xa.onEdit = function (e, t, a, i) {
    var n = e.getObjectByID(t),
      r = e.getRichEditTAG(),
      o = apn.IWidget.getCanvasObjectStyle(
        {},
        this,
        e.getData(),
        n.data.styles
      );
    return this.$Oc8(e, n, o, r), r.apnShow(n, o), !1;
  }),
  (xa._convertXhtmlRule = function (e) {
    return (
      e.indexOf("<br>") != -1 &&
        e.indexOf("<br></br>") == -1 &&
        (e = e.replace(/<br>/g, "<br></br>")),
      e.indexOf("<br/>") != -1 && (e = e.replace(/<br\/>/g, "<br></br>")),
      (e = e.replace(/&nbsp;/g, "&#160;"))
    );
  }),
  (xa.$Oc9 = {}),
  (xa.$Oc7 = function (e, t) {
    var a = this.$Oc9;
    return (
      (a.fontFamily = t.font),
      (a.fontSize = t.fontSize),
      (a.color = t.fontStyle),
      (a.textAlign = t.textAlign),
      (a.letterSpacing = t.ltrSp + "px"),
      a
    );
  }),
  (xa.$Oc8 = function (e, t, a, i) {
    var n = a.lineWidth && a.strokeStyle ? t.shape.lw : 0,
      r = a.lineWidth && a.strokeStyle ? a.lineWidth : 0,
      o = e.tagVP.offsetLeft + e.toScreenX(t.position.x + n),
      s = e.tagVP.offsetTop + e.toScreenY(t.position.y + n),
      p = e.getZoomPercent() / 100,
      l = e.toScreenW(t.shape.w - r) / p,
      d = e.toScreenH(t.shape.h - r) / p;
    (a = this.$Oc7(e.wgtGetProperty(t.id, "v"), a)),
      (i.style.transform = ""),
      (i.style.left = o + "px"),
      (i.style.top = s + "px"),
      (i.style.width = l + "px"),
      (i.style.height = d + "px"),
      (o = -(l - l * p) / 2),
      (s = -(d - d * p) / 2);
    for (var c in a) i.style[c] = a[c];
    (i.style.transform =
      "translate(" + o + "px," + s + "px) scale(" + p + "," + p + ")"),
      t.getAngle &&
        t.getAngle() &&
        (i.style.transform += "rotate(" + t.getAngle() + "rad)"),
      (i.style.lineHeight = "normal"),
      (i.style.backgroundColor = "transparent"),
      (i.style.borderColor = "transparent");
  }),
  (xa.pubOnGetFontList = function (e, t, a, i) {
    var n,
      r = e.pages[t].objects[a];
    if (
      r &&
      r.create.data &&
      r.create.data.properties &&
      r.create.data.properties.attrs &&
      r.create.data.properties.attrs.exeText
    ) {
      (n = document.createElement("div")),
        (n.innerHTML = this._convertXhtmlRule(
          r.create.data.properties.attrs.exeText
        ));
      var o,
        s,
        p,
        l = "",
        d = [],
        c = document.createNodeIterator(
          n.firstElementChild,
          NodeFilter.SHOW_ELEMENT,
          null,
          !1
        );
      for (
        r.create.data.styles && r.create.data.styles.font
          ? i
            ? ((l = {
                font: apn.Project.resolveStyle(
                  e,
                  "font",
                  r.create.data.styles.font
                ),
                str: "",
              }),
              d.push(l))
            : "inherit" !== r.create.data.styles.font &&
              d.push(r.create.data.styles.font)
          : i &&
            ((l = { font: apn.Project.resolveStyle(e, "font"), str: "" }),
            d.push(l));
        (p = c.nextNode());

      )
        if (p.style && p.style.fontFamily && "inherit" !== p.style.fontFamily) {
          for (s = !1, o = 0; o < d.length; o++)
            if ((i ? d[o].font : d[o]) === p.style.fontFamily) {
              s = !0;
              break;
            }
          s
            ? i && (d[o].str += p.textContent)
            : d.push(
                i
                  ? { font: p.style.fontFamily, str: p.textContent }
                  : p.style.fontFamily
              );
        } else
          i &&
            l &&
            "SPAN" == p.tagName &&
            p.textContent &&
            (l.str += p.textContent);
      for (c.detach(), o = 0; o < d.length; o++)
        d[o] &&
          (i
            ? (d[o].font = d[o].font.replace(/\"/g, ""))
            : (d[o] = d[o].replace(/\"/g, "")));
      return d;
    }
    return [];
  }),
  (xa.pubOnGetText = function (e, t, a) {
    return this.pubOnGetFontList(e, t, a, !0);
  }),
  (apn.widgets["apn.wgt.rtxt"] = xa),
  (window.apn = window.apn || {}),
  (apn.widgets = apn.widgets || { utils: {} });
var xa;
(xa = {}),
  (xa.exeItrNoResize = !0),
  (xa.exeItrNoText = !0),
  (xa.apdNeedFontPreload = !0),
  (xa.apxTextAlignJustify = !0),
  (xa.styleMap = {
    title: !0,
    visibility: !0,
    fillStyle: !0,
    font: !0,
    fontSize: !0,
    fontStyle: !0,
    textAlign: !0,
    ltrSp: !0,
    lnSp: !0,
    alpha: !0,
    angle: !0,
  }),
  (xa.editor = { placeHolder: "Double click to edit" }),
  (xa.properties = {
    attrs: { exeText: "", prvText: "", text: "", plainText: "" },
  }),
  (xa.createAsCanvasObject = function (e, t, a, i, n) {
    return apn.IWidget.createCanvasObject(
      e,
      this,
      "apn.CRtxt",
      bx.CCanvasWnd.SHAPE_RECT,
      t,
      a,
      i,
      n
    );
  }),
  (xa.exeCreateTag = function (e, t, a, i, n, r) {
    var o = null;
    if (
      e.o.standAlone &&
      r &&
      apn.CExe.getElementByAttr("div", "data-apx-id", r)
    )
      (o = apn.CExe.getElementByAttr("div", "data-apx-id", r)),
        (o.apnCur = {}),
        (o.apnCur.apxCreatedFromTag = !0);
    else {
      (o = document.body.$TAG("div", {
        style: "position:absolute;overflow:hidden;",
      })),
        (o.apnCur = {}),
        (o.apnCur.apxCreatedFromTag = !1);
      var s =
        (a.create.data.properties && a.create.data.properties.attrs) || {};
      (o.innerHTML =
        (e.o.standAlone ? this._convertXhtmlRule(s.exeText) : s.prvText) || ""),
        o.$CSS({ boxSizing: "border-box;", backgroundColor: "red" });
    }
    o.textTag = void 0;
    var p = o.firstElementChild;
    return (
      p &&
        ((1 == i && 1 == n) ||
          ((p.style.transformOrigin = "left top"),
          (p.style.msTransformOrigin = "left top"),
          (p.style.webkitTransformOrigin = "left top"),
          (p.style.transform = "scale(" + i + ", " + n + ")"),
          (p.style.msTransform = "scale(" + i + ", " + n + ")"),
          (p.style.webkitTransform = "scale(" + i + ", " + n + ")"))),
      o
    );
  }),
  (xa.exeRenderTag = function (e, t, a, i, n, r) {
    function o(e, t) {
      if (
        t.fontFamily &&
        parseInt(t.fontSize) &&
        t.letterSpacing &&
        parseInt(t.letterSpacing) < 0
      ) {
        var a =
          parseInt(t.fontSize) *
          (0.1 + Math.abs(0.02 * parseInt(t.letterSpacing)));
        e.style.paddingRight = Math.ceil(a) + "px";
      } else e.style.paddingRight = "0px";
    }
    var s = i.create.data.properties && i.create.data.properties.attrs;
    if (!a.firstElementChild && (s.text || s.exeText))
      return void bx.Trace.log(
        "RTXT",
        "warning",
        "cannot render rxtx. wrapper tag empty"
      );
    if (
      !(
        e.o.standAlone &&
        a.apnOID &&
        apn.CExe.getElementByAttr("div", "data-apx-id", a.apnOID)
      )
    ) {
      var p = apn.IWidget.getCanvasObjectStyle(
        {},
        this,
        e.project,
        i.create.data.styles
      );
      apn.IWidget.exeApplyCSSpre(
        i,
        p,
        a,
        apn.widgets.utils.$O2x(t, a, i.init.position.x, n),
        apn.widgets.utils.$O2y(t, a, i.init.position.y, r),
        apn.widgets.utils.$O2v(i.init.shape.w, n),
        apn.widgets.utils.$O2w(i.init.shape.h, r),
        n,
        r
      ),
        apn.IWidget.exeRenderSize(e, t, a, i, e.project, n, r),
        apn.IWidget.exeRenderPosition(t, a, i, e.project, n, r),
        apn.IWidget.exeApplyCSSpost(
          i,
          p,
          a,
          apn.widgets.utils.$O2x(t, a, i.init.position.x, n),
          apn.widgets.utils.$O2y(t, a, i.init.position.y, r),
          apn.widgets.utils.$O2v(i.init.shape.w, n),
          apn.widgets.utils.$O2w(i.init.shape.h, r),
          n,
          r
        ),
        (p = this.$Oc7(t.wgtGetProperty(a.apnOID, "v"), p));
      var l = a.firstElementChild;
      if (l) {
        o(l, p);
        for (var d in p) l.style[d] = p[d];
        l.style.width = l.parentNode.offsetWidth + "px";
      }
      return l;
    }
  }),
  (xa.exeOnLoad = function (e, t) {}),
  (xa.onEdit = function (e, t, a, i) {
    var n = e.getObjectByID(t),
      r = e.getRichEditTAG(),
      o = apn.IWidget.getCanvasObjectStyle(
        {},
        this,
        e.getData(),
        n.data.styles
      );
    return this.$Oc8(e, n, o, r), r.apnShow(n, o), !1;
  }),
  (xa._convertXhtmlRule = function (e) {
    return (
      e.indexOf("<br") != -1 &&
        (e = e.replace(/<(\/br|br)([^>]*)>/gi, function (e) {
          return "</br>" == e ? "" : "<br></br>";
        })),
      (e = e.replace(/&nbsp;/g, "&#160;"))
    );
  }),
  (xa.$Oc9 = {}),
  (xa.$Oc7 = function (e, t) {
    var a = this.$Oc9;
    return (
      (a.fontFamily = t.font),
      (a.fontSize = t.fontSize),
      (a.color = t.fontStyle),
      (a.textAlign = t.textAlign),
      (a.letterSpacing = t.ltrSp + "px"),
      (a.lineHeight = 1.3 * parseInt(t.fontSize) + t.lnSp + "px"),
      a
    );
  }),
  (xa.$Oc8 = function (e, t, a, i) {
    var n = a.lineWidth && a.strokeStyle ? t.shape.lw : 0,
      r = a.lineWidth && a.strokeStyle ? a.lineWidth : 0,
      o = e.tagVP.offsetLeft + e.toScreenX(t.position.x + n),
      s = e.tagVP.offsetTop + e.toScreenY(t.position.y + n),
      p = e.getZoomPercent() / 100,
      l = e.toScreenW(t.shape.w - r) / p,
      d = e.toScreenH(t.shape.h - r) / p;
    (a = this.$Oc7(e.wgtGetProperty(t.id, "v"), a)),
      (i.style.transform = ""),
      (i.style.left = o + "px"),
      (i.style.top = s + "px"),
      (i.style.width = l + "px"),
      (i.style.height = d + "px"),
      (o = -(l - l * p) / 2),
      (s = -(d - d * p) / 2);
    for (var c in a) i.style[c] = a[c];
    (i.style.transform =
      "translate(" + o + "px," + s + "px) scale(" + p + "," + p + ")"),
      t.getAngle &&
        t.getAngle() &&
        (i.style.transform += "rotate(" + t.getAngle() + "rad)"),
      (i.style.backgroundColor = "transparent"),
      (i.style.borderColor = "transparent");
  }),
  (xa.pubOnGetFontList = function (e, t, a, i) {
    var n,
      r = e.pages[t].objects[a];
    if (
      r &&
      r.create.data &&
      r.create.data.properties &&
      r.create.data.properties.attrs &&
      r.create.data.properties.attrs.exeText
    ) {
      (n = document.createElement("div")),
        (n.innerHTML = this._convertXhtmlRule(
          r.create.data.properties.attrs.exeText
        ));
      var o,
        s,
        p,
        l = "",
        d = [],
        c = document.createNodeIterator(
          n.firstElementChild,
          NodeFilter.SHOW_ELEMENT,
          null,
          !1
        );
      for (
        r.create.data.styles && r.create.data.styles.font
          ? i
            ? ((l = {
                font: apn.Project.resolveStyle(
                  e,
                  "font",
                  r.create.data.styles.font
                ),
                str: "",
              }),
              d.push(l))
            : "inherit" !== r.create.data.styles.font &&
              d.push(r.create.data.styles.font)
          : i
          ? ((l = { font: apn.Project.resolveStyle(e, "font"), str: "" }),
            d.push(l))
          : d.push(apn.Project.resolveStyle(e, "font"));
        (p = c.nextNode());

      )
        if (p.style && p.style.fontFamily && "inherit" !== p.style.fontFamily) {
          for (s = !1, o = 0; o < d.length; o++)
            if ((i ? d[o].font : d[o]) === p.style.fontFamily) {
              s = !0;
              break;
            }
          s
            ? i && (d[o].str += p.textContent)
            : d.push(
                i
                  ? { font: p.style.fontFamily, str: p.textContent }
                  : p.style.fontFamily
              );
        } else
          i &&
            l &&
            "SPAN" == p.tagName &&
            p.textContent &&
            (l.str += p.textContent);
      for (c.detach(), o = 0; o < d.length; o++)
        d[o] &&
          (i
            ? (d[o].font = d[o].font.replace(/\"/g, ""))
            : (d[o] = d[o].replace(/\"/g, "")));
      return d;
    }
    return [];
  }),
  (xa.pubOnGetText = function (e, t, a) {
    return this.pubOnGetFontList(e, t, a, !0);
  }),
  (xa.pubOnGetHTML = function (e, t, a, i) {
    function n(e) {
      var t = 1.2;
      apn.fonts &&
        apn.fonts[e.font] &&
        void 0 !== apn.fonts[e.font].height &&
        (t = apn.fonts[e.font].height);
      var a = parseInt(e.fontSize) * t;
      return e.lnSp && (a += e.lnSp), a;
    }
    var r = apn.IWidget.htmlRender(this, e, t, a),
      o = "<div";
    r.style.textAlign && (r.css += "text-align:" + r.style.textAlign + ";"),
      r.style.ltrSp &&
        (r.css +=
          "letter-spacing:" + parseFloat(r.style.ltrSp).toFixed(3) + "px;"),
      isNaN(r.style.lnSp) ||
        (r.css += "line-height:" + n(r.style).toFixed(1) + "px;"),
      (o += ' style="' + r.css + '"'),
      (o += ' class="apxWgt1"'),
      (o += i && i.noId ? ">" : ' data-apx-id="' + a + '">');
    var s = e.pages[t].objects[a];
    return (
      (s =
        s &&
        s.create &&
        s.create.data &&
        s.create.data.properties &&
        s.create.data.properties.attrs),
      s && s.exeText && (o += this._convertXhtmlRule(s.exeText)),
      (o += "</div>")
    );
  }),
  (apn.widgets["apn.wgt.simplertxt"] = xa),
  (window.apn = window.apn || {}),
  (apn.CExe = function (e, t, a, i) {
    bx.inClassing ||
      (window.JSON &&
        !JSON.$Oca &&
        ((JSON.$Oca = JSON.parse),
        (JSON.parse = function () {
          return arguments[0] instanceof Object
            ? arguments[0]
            : JSON.$Oca.apply(JSON, arguments);
        })),
      (this.o = i || {}),
      (this.o.verGestureDispatch = !0),
      (this.o.backgroundColor = this.o.backgroundColor || "#FFFFFF"),
      (this.o.eventSystem = 2),
      this.o.screenLayoutCenter || (this.o.screenLayoutCenter = !1),
      apn.dbUI &&
        apn.dbUI.system &&
        apn.dbUI.system.exeDOM2 &&
        (this.o.exeDOM2 = !0),
      (this.o._screenStretchBK = this.o.screenStretch),
      (this.o._screenLayoutCenterBK = this.o.screenLayoutCenter),
      (this.clsPageManager = bx.CPageManager),
      (this.$O2J = null),
      (this._loadSession = 0),
      (apn.CExe.$O2K = apn.CExe.$O2K || 0),
      apn.CExe.$O2K++,
      (a = a || {}),
      (a.type = a.type
        ? a.type | bx.CWnd.TYPE_NO_VIEWPORT
        : bx.CWnd.TYPE_NO_VIEWPORT),
      this.constructor == apn.CExe &&
        apn.theme &&
        apn.theme.EDU &&
        apn.theme.EDU.properties &&
        apn.theme.EDU.properties.exeScreenSetup &&
        (this.IStub_setup = void 0),
      bx.CWnd.call(
        this,
        e,
        "apn$CExe_" + apn.CExe.$O2K,
        "",
        t ||
          new bx.CPosition({
            type: "overlap",
            coord: { top: "0px", left: "0px" },
            width: "100%",
            height: "100%",
          }),
        new bx.CMode(),
        a
      ));
  }),
  bx.$Inherit(apn.CExe, bx.CWnd),
  (apn.CExe.sceneEditableStyles = {
    visibility: !0,
    alpha: !0,
    angle: !0,
    polygon: !0,
  }),
  (apn.CExe.SCROLLBAR_WIDTH = 17),
  (apn.CExe.SCROLLBAR_BTN_COLOR = "#6e6e6e"),
  (apn.CExe.TIME_TOASTMSG_ERROR = 5e3),
  (apn.CExe.TIME_DEF_TRANSITION = 700),
  (apn.CExe.SW_TITLE = "AspenEDU"),
  (apn.CExe.PATH_SKIN_IMG = "imgs/skins"),
  (apn.CExe.NULL_AUDIO =
    "data:audio/mp3;base64,SUQzBAAAAAAAGVRTU0UAAAAPAAADTGF2ZjU0LjYzLjEwNAD/4zjAAAAAAAAAAAAASW5mbwAAAAcAAAAMAAAHmAAvLy8vLy8vL0JCQkJCQkJCVVVVVVVVVVVoaGhoaGhoaGh7e3t7e3t7e46Ojo6Ojo6OoaGhoaGhoaGhtLS0tLS0tLTHx8fHx8fHx9ra2tra2tra2u3t7e3t7e3t//////////9MYXZmNTQuNjMuMTA0AAAAAAAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4yjEAAAAA0gAAAAATEFNRVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/4yjEfAAAA0gAAAAAVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/4yjEfAAAA0gAAAAAVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/4yjEfAAAA0gAAAAAVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/4yjEfAAAA0gAAAAAVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/4yjEfAAAA0gAAAAAVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/4yjEfAAAA0gAAAAAVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/4yjEfAAAA0gAAAAAVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/4yjEfAAAA0gAAAAAVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/4yjEfAAAA0gAAAAAVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/4yjEfAAAA0gAAAAAVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/4yjEfAAAA0gAAAAAVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUQUcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/w=="),
  (apn.CExe.DEBUG = !1),
  (apn.CExe.LN_TITLE = {
    ko: { ko: "한국어", en: "Korean", ja: "韓国語" },
    en: { ko: "영어", en: "English", ja: "英語" },
    zh: { ko: "중국어", en: "Chinese", ja: "中国語" },
    ja: { ko: "일본어", en: "Japanese", ja: "日本語" },
    es: { ko: "스페인어", en: "Spanish", ja: "スペイン語" },
    de: { ko: "독일어", en: "German", ja: "ドイツ語" },
    fr: { ko: "프랑스어", en: "French", ja: "フランス語" },
    ar: { ko: "아랍어", en: "Arabic", ja: "アラビア語" },
    vi: { ko: "베트남어", en: "Vietnamese", ja: "ベトナム語" },
  }),
  (bx.CTransition.RELATIVE_TIME_SYSTEM = !0),
  (bx.HCL.getElementX2 = function (e, t) {
    var a = 0;
    for (
      void 0 === this.$Ocb && (this.$Ocb = bx.HCL.DV.isIE());
      e && e != document;

    )
      (a += e.offsetLeft || bx.$checkNaN(parseInt(e.style.left))),
        t && (a -= e.scrollLeft),
        (e = this.$Ocb ? e.parentNode : e.offsetParent || e.parentNode);
    return a;
  }),
  (bx.HCL.getElementY2 = function (e, t) {
    var a = 0;
    for (
      void 0 === this.$Ocb && (this.$Ocb = bx.HCL.DV.isIE());
      e && e != document;

    )
      (a += e.offsetTop || bx.$checkNaN(parseInt(e.style.top))),
        t && (a -= e.scrollTop),
        (e = this.$Ocb ? e.parentNode : e.offsetParent || e.parentNode);
    return a;
  }),
  (apn.CExe.GL = function (e, t) {
    return e
      ? t && e[t]
        ? e[t][bx.HCL.DV.getLanguage()]
          ? e[t][bx.HCL.DV.getLanguage()]
          : e[t].en
          ? e[t].en
          : e[t]
        : e[bx.HCL.DV.getLanguage()]
        ? e[bx.HCL.DV.getLanguage()]
        : e.en
        ? e.en
        : e
      : e;
  }),
  (apn.CExe.MSG_SECURITY_1 = apn.CExe.GL({
    en: " cannot be tested on Version 2 scrpting preview mode due to HTML5 security policy. You can test with Version 1 scripting preview mode or with published(exported) file.",
    ko: " 기능은 HTML5 보안정책으로 스크립팅 버전2 프리뷰 모드에서는 시험할 수 없습니다. 버전1으로 기능 시험하거나 퍼블리시 후에 시험할 수 있습니다.",
    ja: "機能は、HTML5のセキュリティポリシーによりスクリプトバージョン2プレビューモードでは、テストすることができません。バージョン1またはパブリッシュ後に機能テストが可能です。",
  })),
  (apn.CExe.MSG_SECURITY_2 = apn.CExe.GL({
    en: " cannot be tested on Version 2 scrpting preview mode or on local disk due to HTML5 security policy. It works with Version 1 scripting preview mode, web site service or application such as Aspen Reader App, ...",
    ko: " 기능은 HTML5 보안정책으로 스크립팅 버전2 프리뷰 모드나 로컬 디스크 퍼블리시 상태에서는 시험할 수 없습니다. 버전1이나 웹 서비스 방식 또는 Aspen Reader와 같이 보안이 해제된 앱에서 동작합니다.",
    ja: "機能は、HTML5のセキュリティポリシーによりスクリプトバージョン2プレビューモードまたはローカルディスクパブリッシュの状態ではテストすることができません。バージョン1やWebサービス方式、またはAspen Readerのようなセキュリティが解除されたアプリで動作します。",
  })),
  (apn.CExe.MSG_SECURITY_3 = apn.CExe.GL({
    en: " cannot be tested on Aspen preview mode due to HTML5 security policy. You can test with published(exported) file.",
    ko: " 기능은 HTML5 보안정책으로 아스펜 프리뷰 모드에서는 시험할 수 없습니다. 파일을 퍼블리시한 후에 시험할 수 있습니다.",
    ja: "機能は、HTML5のセキュリティポリシーにAspenプレビューモードでは、テストすることができません。ファイルをパブリッシュした後に試験することができます。",
  })),
  (apn.CExe.ACCEL = function (e) {
    bx.HCL.DV.isIE() ||
      (apn.CES.transformSet(e, "z", 0),
      e.style.backfaceVisibility || (e.style.backfaceVisibility = "hidden"),
      apn.CES.transformApply(e));
  }),
  (apn.CExe.fontHasBold = function (e) {
    return apn.Project.fontHasBold(null, e);
  }),
  (apn.CExe.getElementByAttr = function (e, t, a) {
    if (void 0 === t || void 0 === a) return null;
    if (document.querySelector)
      return document.querySelector((e || "") + "[" + t + "='" + a + "']");
    for (
      var i = document.getElementsByTagName(e || "*"), n = 0;
      n < i.length;
      n++
    )
      if (i[n].getAttribute(t) == a) return i[n];
    return null;
  }),
  (apn.CExe.getScript2List = function (e) {
    function t(e, t) {
      for (var a, i = 0; i < e.length; i++)
        if (((a = e[i]), a.name && !n[a.name])) {
          if (t && t.fs.length)
            for (var s = 0; s < t.fs.length; s++)
              if (t.fs[s].js.data && t.fs[s].js.name == a.name) {
                o.push("asset/" + a.name), (n[a.name] = !0);
                break;
              }
        } else a.lnP && !r[a.lnP] && (o.push(a.lnP), (r[a.lnP] = !0));
    }
    var a,
      i,
      n = {},
      r = {},
      o = [],
      s = apn.Project.getLayout(e).property.CExe;
    s && s.spt2impt && s.spt2impt.js && t(s.spt2impt.js, s.js);
    var p = apn.Project.getLayout(e).property.PGTPL;
    if (p) {
      var l = [];
      for (var d in p)
        for (var a in e.pages)
          if (e.pages[a].PGTPL && e.pages[a].PGTPL.fId == d) {
            l.push({ fId: d, order: e.pages[a].UI.order });
            break;
          }
      l.sort(function (e, t) {
        return void 0 === e.order && void 0 === t.order
          ? 0
          : void 0 === e.order
          ? 1
          : void 0 === t.order
          ? -1
          : e.order - t.order;
      });
      for (var a = 0; a < l.length; a++)
        (d = l[a].fId),
          p[d] &&
            p[d].spt2impt &&
            p[d].spt2impt.js &&
            p[d].js &&
            t(p[d].spt2impt.js, p[d].js);
    }
    for (var c in e.pages)
      if (((i = apx.searchWidgets(e.pages[c], 3, "apxGetExMedia")), i.length)) {
        o.push("asset/aspen.exmedia.reposit.js");
        break;
      }
    return o;
  }),
  (apn.CExe.prototype.init = function (e) {
    function t(e) {
      function t(t) {
        t.canvas &&
          t.canvas.$O3X("exeOnScreenRefresh", t.id, { font: e.data.data });
      }
      s.o.exeScript ||
        (e.data &&
          "apnFontLoad" == e.data.type &&
          s.$O2J &&
          s.$O2J.iteratePage(t));
    }
    function a(e) {
      if (e.data && e.data.CExe) {
        var t = e.data.CExe;
        "onVisibilityChange" == t.type &&
          ((s._iframeVisibilityState = t.data),
          i(),
          "visible" == s._iframeVisibilityState
            ? bx.Transition.resumeTimer()
            : "hidden" == s._iframeVisibilityState &&
              bx.Transition.pauseTimer());
      }
    }
    function i() {
      function e(e) {
        e.canvas && e.canvas.$O3X("exeOnScreenVisibility", e.id, t);
      }
      var t = s._iframeVisibilityState || document.visibilityState;
      ("visible" != t && "hidden" != t) || (s.$O2J && s.$O2J.iteratePage(e));
    }
    function n(e) {
      if (
        e.data &&
        e.data.apxID &&
        s.getCurrentPageID() &&
        s.project &&
        s.project.pages[s.getCurrentPageID()] &&
        s.project.pages[s.getCurrentPageID()].objects[e.data.apxID]
      ) {
        var t = apn.Project.getWidgetModule(
          s.project.pages[s.getCurrentPageID()].objects[e.data.apxID].create
            .data
        );
        if (t && t.exeOnReceiveMessage) {
          var a = s.getPage(s.getCurrentPageID()).canvas;
          if (a) {
            if (apn.CExe.DEBUG)
              t.exeOnReceiveMessage(a, e.data.apxID, e.data.value);
            else
              try {
                t.exeOnReceiveMessage(a, e.data.apxID, e.data.value);
              } catch (e) {
                console.error(
                  "Problem in source code of the widget. Please consult to the technical support team."
                );
              }
            return;
          }
        }
      }
    }
    function r(e) {
      e.ctrlKey &&
        65 != e.keyCode &&
        67 != e.keyCode &&
        86 != e.keyCode &&
        bx.Event.preventDefault(e),
        e.altKey && bx.Event.preventDefault(e),
        ((e.keyCode >= 112 && e.keyCode <= 121) || 123 == e.keyCode) &&
          bx.Event.preventDefault(e);
    }
    function o(e, t) {
      t.ctrlKey && bx.Event.preventDefault(t);
    }
    var s = this;
    this.updateStart(),
      bx.$getParamFromURL(location.href, "APXTRACE") && (apn.CExe.TRACE = !0),
      this.o.exePreview &&
        ((apn.CExe.DEBUG = !0),
        bx.Event.add(window, "message", t, !1),
        bx.CConsole &&
          ((this.$O3T = new bx.CConsole(this).create()),
          this.$O3T.init(),
          this.$O3T.setZindex(bx.UX.getZindex("alert"))),
        (this.tag.style.zIndex = 0)),
      (apn.CExeBookEPUB3 && this.constructor == apn.CExeBookEPUB3) ||
        (document.body.style.background = "none"),
      (this.$Occ = new bx.CWnd(
        this,
        this.tagId + "_cntr",
        "",
        new bx.CPosition({
          type: "overlap",
          coord: { top: "0px", left: "0px" },
          width: "100%",
          height: "100%",
          noclip: !0,
        }),
        new bx.CMode(),
        { type: bx.CWnd.TYPE_NO_VIEWPORT }
      ).create()),
      this.$Occ.init(!0),
      (this.$Occ.tag.style.overflow = "hidden"),
      (this.$O2J = new this.clsPageManager(
        this.$Occ,
        new bx.CPosition({
          type: "overlap",
          coord: { top: "0px", left: "0px" },
          width: "100%",
          height: "100%",
          noclip: !0,
        })
      ).create()),
      this.$O2J.init(!0),
      (apn.CExeBookEPUB3 && this.constructor == apn.CExeBookEPUB3) ||
        (this.$Occ.tag.style.backgroundColor = apn.CES.$O6l(
          this.o.backgroundColor
        )),
      this.o.exePreview ||
        (window.parent != window && bx.Event.add(window, "message", a, !1)),
      apn.CExe.DEBUG && (document.oncontextmenu = null),
      bx.Event.add(
        this.tag,
        "mousedown",
        function (e) {
          bx.Event.isLeftButton(e) ||
            bx.Event.isRightButton(e) ||
            (e.preventDefault(), e.stopPropagation());
        },
        !1
      ),
      bx.Event.add(document, "visibilitychange", i, !1),
      bx.Event.add(window, "message", n, !1),
      bx.$getParamFromURL(location.href, "APXABRDPXY") &&
        bx.$getParamFromURL(location.href, "APXABRDPXY").indexOf("Y") != -1 &&
        (bx.Event.add(window, "keydown", r, !0),
        bx.Event.setupMouseWheel(window, o, 30)),
      this.updateEnd(),
      this.o.exePreview &&
        (this.clearGlobalHandler = function () {
          bx.Event.remove(window, "message", t, !1),
            bx.Event.remove(document, "visibilitychange", i, !1),
            bx.Event.remove(window, "message", n, !1);
        }),
      bx.CWnd.prototype.init.call(this, e);
  }),
  (apn.CExe.prototype.onResize = function (e, t, a, i) {
    if (this.isPreview2()) {
      var n = bx.CWnd.prototype.onResize.call(this, e, t, a, i);
      return (
        this.hasSkin()
          ? this._skinShow && this._skinShow()
          : this.$O51 && this.$O51(),
        this.project &&
          2 != this.$O3W &&
          !i &&
          this.project &&
          (void 0 !== this._resizeByPrvFullScreen
            ? (this.pause(), this.load(), this.run())
            : this.onRunByResize()),
        (this._resizeByPrvFullScreen = void 0),
        n
      );
    }
    if (!bx.HCL.DV.isMobile()) {
      if (this.$Ocd) return;
      if (bx.HCL.DV.isChrome()) {
        var r =
            document.fullScreen ||
            document.mozFullScreen ||
            document.webkitIsFullScreen ||
            document.webkitDisplayingFullscreen,
          o =
            document.fullscreenElement ||
            document.mozFullScreenElement ||
            document.webkitFullscreenElement ||
            document.msFullscreenElement;
        if (r && o && o.tagName && "video" == o.tagName.toLowerCase()) return;
      }
    }
    var s,
      n = bx.CWnd.prototype.onResize.call(this, e, t, a, i);
    if (this.o.noResize) {
      if (this.o.standAlone) return;
      s = !0;
    }
    return (
      this.o.standAlone && (s = this._resizeIsFixed()),
      !this.$O5l ||
        (this.$O5l.w == e.w && this.$O5l.h == e.h) ||
        (!i &&
          bx.DOM.isVisible(this.tag) &&
          this.project &&
          this.isRunning() &&
          (s && this.o.standAlone ? this.resize() : this.onRunByResize())),
      (this.$O5l = e),
      n
    );
  }),
  (apn.CExe.prototype.onGestureCoordTransformX = function (e, t) {
    return this.stretchSX(e);
  }),
  (apn.CExe.prototype.onGestureCoordTransformY = function (e, t) {
    return this.stretchSY(t);
  }),
  (apn.CExe.prototype.onRunByResize = function () {
    this.isPreview2()
      ? this.resize()
      : this.o.screenStretch && !this.o.exePreview
      ? this.resize()
      : (this.pause(), this.load(), this.run());
  }),
  (apn.CExe.prototype.onStyleScrollBar = function (e, t, a, i, n) {
    if (!bx.HCL.DV.isIOS() && !bx.HCL.DV.isAndroid())
      if (
        ((i = i || apn.CExe.SCROLLBAR_WIDTH),
        (e = e || "#7f7f7f"),
        (t = t || e),
        (a = a || "#dddddd"),
        bx.HCL.DV.isIE())
      )
        bx.HCL.getCssRule(".apnCExeScroll") ||
          bx.HCL.addCssRule(
            ".apnCExeScroll",
            "scrollbar-arrow-color:" +
              e +
              ";scrollbar-track-color:" +
              a +
              ";scrollbar-face-color:" +
              e +
              ";scrollbar-shadow-color:" +
              a +
              ";scrollbar-highlight-color:" +
              a +
              ";scrollbar-3dlight-color:" +
              a +
              ";scrollbar-darkshadow-color:" +
              a +
              ";"
          );
      else {
        var r = Math.floor(0.5 * i);
        void 0 !== n && (r = Math.floor(i * n));
        var o;
        bx.HCL.getCssRule(".apnCExeScroll") ||
          bx.HCL.addCssRule(".apnCExeScroll", " "),
          bx.HCL.getCssRule(".apnCExeScroll::-webkit-scrollbar") ||
            bx.HCL.addCssRule(
              ".apnCExeScroll::-webkit-scrollbar",
              "height:" +
                i +
                "px;width:" +
                i +
                "px;z-index:" +
                3 * bx.CCanvasWnd.ZINDEX_OBJECT +
                ";"
            ),
          (o = bx.HCL.getCssRule(
            ".apnCExeScroll::-webkit-scrollbar-track:vertical"
          ))
            ? (o.style.cssText =
                "border-radius:" +
                r +
                "px;background-clip:content-box;background-color:" +
                a +
                ";border:solid " +
                Math.round(0.3 * i) +
                "px rgba(255,255,255,0);box-sizing:border-box;box-shadow:inset 0px 0px 2px #888888;z-index:" +
                3 * bx.CCanvasWnd.ZINDEX_OBJECT +
                ";")
            : bx.HCL.addCssRule(
                ".apnCExeScroll::-webkit-scrollbar-track:vertical",
                "border-radius:" +
                  r +
                  "px;background-clip:content-box;background-color:" +
                  a +
                  ";border:solid " +
                  Math.round(0.3 * i) +
                  "px rgba(255,255,255,0);box-sizing:border-box;box-shadow:inset 0px 0px 2px #888888;z-index:" +
                  3 * bx.CCanvasWnd.ZINDEX_OBJECT +
                  ";"
              ),
          (o = bx.HCL.getCssRule(
            ".apnCExeScroll::-webkit-scrollbar-track:horizontal"
          ))
            ? (o.style.cssText =
                "border-radius:" +
                r +
                "px;background-clip:content-box;background-color:" +
                a +
                ";border:solid " +
                Math.round(0.3 * i) +
                "px rgba(255,255,255,0);box-sizing:border-box;box-shadow:inset 0px 0px 2px #888888;z-index:" +
                3 * bx.CCanvasWnd.ZINDEX_OBJECT +
                ";")
            : bx.HCL.addCssRule(
                ".apnCExeScroll::-webkit-scrollbar-track:horizontal",
                "border-radius:" +
                  r +
                  "px;background-clip:content-box;background-color:" +
                  a +
                  ";border:solid " +
                  Math.round(0.3 * i) +
                  "px rgba(255,255,255,0);box-sizing:border-box;box-shadow:inset 0px 0px 2px #888888;z-index:" +
                  3 * bx.CCanvasWnd.ZINDEX_OBJECT +
                  ";"
              ),
          (o = bx.HCL.getCssRule(".apnCExeScroll::-webkit-scrollbar-thumb"))
            ? ((o.style.cssText =
                "border-radius:" +
                r +
                "px;background-clip:content-box;border:solid 1px rgba(255,255,255,0);background-image:none;background-color:" +
                e +
                ";box-shadow:inset 0px 0px 3px #313131;z-index:" +
                3 * bx.CCanvasWnd.ZINDEX_OBJECT +
                ";"),
              (o = bx.HCL.getCssRule(
                ".apnCExeScroll::-webkit-scrollbar-thumb:hover"
              )) &&
                (e == t
                  ? (o.style.cssText =
                      "border-radius:" +
                      r +
                      "px;background-clip:content-box;border:solid 1px rgba(255,255,255,0);background-image:none;background-color:" +
                      e +
                      ";box-shadow:inset 0px 0px 3px #ffffff;z-index:" +
                      3 * bx.CCanvasWnd.ZINDEX_OBJECT +
                      ";")
                  : (o.style.cssText =
                      "border-radius:" +
                      r +
                      "px;background-clip:content-box;border:solid 1px rgba(255,255,255,0);background-image:none;background-color:" +
                      t +
                      ";box-shadow:inset 0px 0px 3px #313131;z-index:" +
                      3 * bx.CCanvasWnd.ZINDEX_OBJECT +
                      ";")))
            : (bx.HCL.addCssRule(
                ".apnCExeScroll::-webkit-scrollbar-thumb",
                "border-radius:" +
                  r +
                  "px;background-clip:content-box;border:solid 1px rgba(255,255,255,0);background-image:none;background-color:" +
                  e +
                  ";box-shadow:inset 0px 0px 3px #313131;z-index:" +
                  3 * bx.CCanvasWnd.ZINDEX_OBJECT +
                  ";"
              ),
              e == t
                ? bx.HCL.addCssRule(
                    ".apnCExeScroll::-webkit-scrollbar-thumb:hover",
                    "border-radius:" +
                      r +
                      "px;background-clip:content-box;border:solid 1px rgba(255,255,255,0);background-image:none;background-color:" +
                      e +
                      ";box-shadow:inset 0px 0px 3px #ffffff;z-index:" +
                      3 * bx.CCanvasWnd.ZINDEX_OBJECT +
                      ";"
                  )
                : bx.HCL.addCssRule(
                    ".apnCExeScroll::-webkit-scrollbar-thumb:hover",
                    "border-radius:" +
                      r +
                      "px;background-clip:content-box;border:solid 1px rgba(255,255,255,0);background-image:none;background-color:" +
                      t +
                      ";box-shadow:inset 0px 0px 3px #313131;z-index:" +
                      3 * bx.CCanvasWnd.ZINDEX_OBJECT +
                      ";"
                  )),
          bx.HCL.getCssRule(".apnCExeScroll::-webkit-scrollbar-corner") ||
            bx.HCL.addCssRule(
              ".apnCExeScroll::-webkit-scrollbar-corner",
              "background-color:transparent;"
            );
      }
  }),
  (apn.CExe.prototype.IWidget_onFullScreen = function (e, t) {
    function a(a) {
      a.canvas && a.canvas.$O3X("exeOnScreenFull", a.id, { on: e, tag: t });
    }
    if (!this.o.exePreview) {
      (this.$Ocd = e), (this.__fullScreenByWidgetTag = t);
      this.$O2J.iteratePage(a);
      var i;
      (window.opener || (window.parent && parent != window)) &&
        (i = window.opener || window.parent),
        i &&
          i.postMessage(
            {
              CExe: {
                type: "onFullscreenChangeByMedia",
                data: { fullscreen: e },
              },
            },
            "*"
          );
    }
  }),
  (apn.CExe.prototype.isInFullScreenByWidget = function () {
    return !(!this.$Ocd || !this.__fullScreenByWidgetTag);
  }),
  (apn.CExe.IWidget_getAudioAutoplayCount = function (e) {
    var t = apn.Project.getLayout(e).property,
      a = 0;
    if (t.PGTPL)
      for (var i in t.PGTPL)
        t.PGTPL[i].apCH &&
          t.PGTPL[i].apCH.acnt &&
          t.PGTPL[i].apCH.acnt > a &&
          (a = t.PGTPL[i].apCH.acnt);
    return (
      t.CExe &&
        t.CExe.apCH &&
        t.CExe.apCH.acnt &&
        t.CExe.apCH.acnt > a &&
        (a = t.CExe.apCH.acnt),
      a
    );
  }),
  (apn.CExe.prototype.IStub_sptInfo = function (e) {
    var t = { fns: {} };
    this._sptGetInfo = this._sptGetInfo || this.ISub_sptGetInfo();
    for (var a in this._sptGetInfo)
      this._sptGetInfo[a].help &&
        (t.fns[a] = bx.$cloneObject({}, this._sptGetInfo[a].help));
    return t;
  }),
  (apn.CExe.prototype.IStub_sptRunCheck = function (e, t, a) {
    if (
      ((this._sptGetInfo = this._sptGetInfo || this.ISub_sptGetInfo()),
      this._sptGetInfo[e] && this._sptGetInfo[e].api)
    ) {
      if (!this._sptGetInfo[e].apiCheck) return !0;
      var i = this.getCurApx();
      if (
        (a &&
          this.$O2J.get(a) &&
          this.$O2J.get(a).canvas &&
          (i = this.$O2J.get(a).canvas),
        i)
      )
        return this._sptGetInfo[e].apiCheck(i, t);
    }
    return !1;
  }),
  (apn.CExe.prototype.IStub_sptRun = function (e, t, a) {
    if (
      ((this._sptGetInfo = this._sptGetInfo || this.ISub_sptGetInfo()),
      this._sptGetInfo[e] && this._sptGetInfo[e].api)
    ) {
      var i = this.getCurApx();
      if (
        (a &&
          this.$O2J.get(a) &&
          this.$O2J.get(a).canvas &&
          (i = this.$O2J.get(a).canvas),
        i)
      )
        return this._sptGetInfo[e].api(i, t);
    }
  }),
  (apn.CExe.prototype.ISub_sptGetInfo = function () {
    var e = this;
    return {
      markKeyword: {
        api: function (e, t) {
          t && e.$O3X("exeOnMarkText", void 0, t);
        },
      },
      isMobile: {
        api: function (e, t) {
          return bx.HCL.DV.isMobile();
        },
        help: {
          param: "",
          help:
            apn.CExe.GL({
              ko: "Mobile browser에서 실행 중인지 확인함.",
              en: "Check if running on a mobile browser.",
              ja: "Mobile browserで実行されているか確認する。",
            }) + "\nReturn Boolean",
        },
      },
      getCurPage: {
        api: function (t, a) {
          return e.$O2J.getCurrent();
        },
      },
    };
  }),
  (apn.CExe.prototype.IDevice_linkToURL = function (e, t) {
    function a(e) {
      if (window.opener || (window.parent && parent != window)) {
        var t;
        if (
          window.opener &&
          window.navigator &&
          (navigator.userAgent.toLowerCase().indexOf("msie") != -1 ||
            navigator.userAgent.toLowerCase().indexOf("trident") != -1)
        )
          try {
            t = window.opener.abrPostMessage;
          } catch (e) {
            window.console && console.error(e);
          }
        if (t) t(e);
        else {
          var a = window.opener || window.parent;
          a.postMessage(e, "*");
        }
      }
    }
    var i = 0;
    if (
      (window.flx && flx.sys && flx.sys.openURL
        ? (i = 1)
        : bx.$getParamFromURL(location.href, "APXABRDPXY") &&
          bx.$getParamFromURL(location.href, "APXABRDPXY").indexOf("Y") != -1 &&
          (i = 2),
      i && "currentTab" == t && (t = "currentFrame"),
      e)
    ) {
      if ("currentFrame" == t) window.location.href = e;
      else if ("currentTab" == t) top.location.href = e;
      else {
        if ("newTab" != t) return !1;
        1 == i
          ? flx.sys.openURL(e)
          : 2 == i
          ? a({
              abr: {
                type: "device",
                data: { type: "runURL", param: { url: e } },
              },
            })
          : window.open(e, "_blank");
      }
      return !0;
    }
    return !1;
  }),
  (apn.CExe.prototype.IDevice_downloadURL = function (e, t, a) {
    apn.UTIL.downloadURL(e, t, a);
  }),
  (apn.CExe.prototype.IDevice_saveAs = function (e, t) {
    function a() {
      setTimeout(function () {
        URL.revokeObjectURL(n);
      }, 100);
    }
    var i = new Blob([e], { type: "text/plain;charset=utf-8" });
    if (navigator.msSaveOrOpenBlob) navigator.msSaveOrOpenBlob(i, t);
    else if (window.URL && URL.createObjectURL) {
      var n = URL.createObjectURL(i);
      apn.UTIL.downloadURL(n, t, a);
    }
  }),
  (apn.CExe.prototype.IDevice_useWebAudio = function () {
    return !!(
      window.AspenWebAudio &&
      AspenWebAudio.isUseWebAudio &&
      AspenWebAudio.isUseWebAudio()
    );
  }),
  (apn.CExe.prototype.IStub_runScreen = function (e) {
    this.isPreview2()
      ? this.sbxIF("loadPage", { pId: e })
      : this.run(void 0, e);
  }),
  (apn.CExe.prototype.IStub_fullScreen = function (e) {
    bx.DOM.isVisible(this.tag) &&
      this.project &&
      (this.isRunning() || this.isPreview2()) &&
      ((this.$O7J = e),
      this.isPreview2() && (this._resizeByPrvFullScreen = e),
      this.restore());
  }),
  (apn.CExe.prototype.IStub_getScreenList = function () {
    return this.$O6t();
  }),
  (apn.CExe.IStub_property = function (e, t, a) {
    if (e) return apn.Project.getLayout(e).property[t];
  }),
  (apn.CExe.IStub_getFonts = function (e, t) {
    var a,
      i,
      n = { action: "add" },
      r = "";
    if (
      (t &&
        apn.Project.getLayout(t).property.CExe &&
        apn.Project.getLayout(t).property.CExe.exFonts &&
        ((a = apn.Project.getLayout(t).property.CExe.exFonts),
        (r = apn.Project.getLayout(t).property.CExe.exFontsPub)),
      a && a.length)
    )
      for (i = 0; i < a.length; i++)
        if (a[i] && a[i].face) {
          n.fonts = n.fonts || [];
          var o = bx.$cloneObject({}, a[i]);
          "Y" == o.noBold ? (o.noBold = !0) : delete o.noBold,
            e && (o.path = "2" == r ? o.pathL2 : o.pathL),
            delete o.pathL,
            void 0 !== o.pathL2 && delete o.pathL2,
            (o.height = 1.3),
            (o.type = "google"),
            n.fonts.push(o);
        }
    var s,
      p,
      l,
      d = {};
    for (var c in t.pages)
      for (s in t.pages[c].objects) {
        var p = apn.Project.getWidgetModule(t.pages[c].objects[s].create.data);
        if (p && p.pubOnGetFonts)
          for (l = p.pubOnGetFonts(t, c, s, e), i = 0; i < l.length; i++)
            d[l[i].face] ||
              ((n.fonts = n.fonts || []),
              n.fonts.push(l[i]),
              (d[l[i].face] = !0));
      }
    return n;
  }),
  (apn.CExe.prototype.getPM = function () {
    return this.$O2J;
  }),
  (apn.CExe.prototype.getContainer = function () {
    return this.$Occ;
  }),
  (apn.CExe.prototype.getContainerTAG = function () {
    return this.$Occ.tag;
  }),
  (apn.CExe.prototype.getZoomX = function () {
    return this.$O2O;
  }),
  (apn.CExe.prototype.getZoomY = function () {
    return this.$O2P;
  }),
  (apn.CExe.prototype.setZoom = function (e, t) {
    (this.$O2O = e), (this.$O2P = t);
  }),
  (apn.CExe.prototype.getScreenW = function () {
    return this.$O2N.w;
  }),
  (apn.CExe.prototype.getScreenH = function () {
    return this.$O2N.h;
  }),
  (apn.CExe.prototype.setScreenInfo = function (e) {
    this.$O2N = e;
  }),
  (apn.CExe.prototype.initAutoplay = function () {
    var e;
    if (this.$ObT && this.$ObT.$O3d.length && !this.$ObT.$Oce) {
      for (var t = 0; t < this.$ObT.$O3d.length; t++)
        (e = this.$ObT.$O3d[t]),
          e.sourceTag.getAttribute("src") ||
            (bx.HCL.DV.isChrome() && !bx.HCL.DV.isMobile()
              ? (e.sourceTag.src = apn.widgets.utils.$O7H(apn.CExe.NULL_AUDIO))
              : (e.sourceTag.src = apn.CExe.NULL_AUDIO),
            e.load && (e.load(), e.play()));
      this.$ObT.$Oce = !0;
    }
  }),
  (apn.CExe.prototype.controlGesture = function (e) {
    this.useGestureControl = e;
  }),
  (apn.CExe.prototype.isPreview2 = function () {
    return (
      !(!this.project || !this.o.exePreview || 2 != this.getScriptVer()) &&
      (void 0 === this._hasAnyScript &&
        (this._hasAnyScript = apn.Project.checkIfAnyScript(this.project)),
      this._hasAnyScript)
    );
  }),
  (apn.CExe.prototype.preloadLoadAssets = function (e) {
    if (!this.$Ocg) {
      if (((this.$Ocf = e), e.url)) {
        if (
          ((this.$Ocg = this.tag.$TAG("img", {
            style: "display:none;position:absolute;left:50%;top:50%;",
          })),
          !e.w || !e.h)
        ) {
          var t = this;
          (this.$Ocg.style.visibility = "hidden"),
            (this.$Ocg.onload = function () {
              (t.$Ocf.w = this.width),
                (t.$Ocf.h = this.height),
                t.preloadImageReset(),
                (t.$Ocg.style.visibility = "visible");
            });
        }
        (this.$Ocg.src = e.url),
          "rotate" == e.css &&
            this.$Ocg.$CSS(
              "animation",
              "apxSpnRotate 1.2s infinite linear both"
            );
      } else
        e.css &&
          ((e.w = e.h =
            Math.ceil(
              0.15 * Math.min(this.getProjectSize().w, this.getProjectSize().h)
            )),
          (this.$Ocg = this.tag.$TAG("div", {
            style: "display:none;position:absolute;left:50%;",
          })),
          this.buildSpinner(this.$Ocg, e.css, e.color));
      this.$Ocg &&
        (e.w && e.h && this.preloadImageReset(),
        this.$Ocg.$CSS("pointerEvents", "none"),
        (this.$Ocg.style.zIndex = 11));
    }
  }),
  (apn.CExe.prototype.preloadImageReset = function () {
    var e;
    if ((e = this.$Ocg)) {
      this.hasSkin()
        ? (e.style.top =
            this.$O2N.y + (this.$O2N.h / 2) * this.getStretchY() + "px")
        : (e.style.top = "50%");
      var t = Math.ceil(
          this.$Ocf.w *
            (1 / this.$O2O) *
            Math.min(this.getStretchX(), this.getStretchY())
        ),
        a = Math.ceil(
          this.$Ocf.h *
            (1 / this.$O2P) *
            Math.min(this.getStretchX(), this.getStretchY())
        );
      (e.style.width = t + "px"),
        (e.style.height = a + "px"),
        (e.style.marginLeft = -t / 2 + "px"),
        (e.style.marginTop = -a / 2 + "px");
    }
  }),
  (apn.CExe.prototype.buildSpinner = function (e, t, a) {
    var i = "";
    if ("roller1" == t || "roller2" == t)
      for (var n = 1; n <= 12; n++)
        (i +=
          '<div style="position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:rotate(' +
          30 * (n - 1) +
          "deg);transform:rotate(" +
          30 * (n - 1) +
          'deg);">'),
          (i +=
            '<div style="display:block;margin:0 auto;width:13%;height:13%;background-color:' +
            (a || "#000000") +
            ";border-radius:100%;-webkit-animation:apxSpnRrFadeDelay" +
            ("roller1" == t ? "1" : "2") +
            " 1.2s infinite ease-in-out both;animation:apxSpnRrFadeDelay" +
            ("roller1" == t ? "1" : "2") +
            " 1.2s infinite ease-in-out both;-webkit-animation-delay:" +
            (1 == n ? 0 : 0.1 * -(13 - n)) +
            "s;animation-delay:" +
            (1 == n ? 0 : 0.1 * -(13 - n)) +
            's;"></div>'),
          (i += "</div>");
    else if ("ring1" == t || "ring2" == t) {
      var r =
        "ring1" == t
          ? "rgba(" +
            apn.CES.toRGBValue(a || "#000000").r +
            "," +
            apn.CES.toRGBValue(a || "#000000").g +
            "," +
            apn.CES.toRGBValue(a || "#000000").b +
            ",0.2)"
          : "transparent";
      i =
        '<div style="display:block;width:100%;height:100%;box-sizing:border-box;border-width:thick;border-style:solid;border-right-color:' +
        (a || "#000000") +
        ";border-left-color:" +
        (a || "#000000") +
        ";border-top-color:" +
        r +
        ";border-bottom-color:" +
        r +
        ';border-radius:50%;-webkit-animation:apxSpnRotate 1.2s infinite linear both;animation:apxSpnRotate 1.2s infinite linear both;"></div>';
    }
    e.innerHTML = i;
  }),
  (apn.CExe.prototype.pause = function (e) {
    function t(t) {
      t.canvas &&
        (e
          ? (t.canvas.$O3X("exeOnPause", t.id),
            (t.canvas.$O7K = !0),
            t.canvas.$O3M())
          : t.canvas.$O3X("exeOnPause", t.id));
    }
    this.isPreview2()
      ? ((this.$O3W = 2), this.sbxClear())
      : 1 == this.$O3W && ((this.$O3W = 2), this.$O2J.iteratePage(t));
  }),
  (apn.CExe.prototype.resume = function () {
    function e(e) {
      e.canvas && e.canvas.$O3X("exeOnResume", e.id);
    }
    this.isPreview2()
      ? (this.$O3W = 1)
      : 2 == this.$O3W && ((this.$O3W = 1), this.$O2J.iteratePage(e));
  }),
  (apn.CExe.prototype.setRunState = function (e) {
    this.$O3W = e;
  }),
  (apn.CExe.prototype.isRunning = function () {
    return 1 == this.$O3W;
  }),
  (apn.CExe.prototype.clear = function () {
    if (
      ((this.$O3W = 0),
      this.o &&
        ((this.o.screenStretch = this.o._screenStretchBK),
        (this.o.screenLayoutCenter = this.o._screenLayoutCenterBK)),
      this.project &&
        apn.Project.resolveProperty(this.project, "exeNetworkMode") &&
        this.remoteDisconnect &&
        this.remoteDisconnect(),
      this.$O3T && (this.$O3T.hide(), this.$O3T.clear()),
      this.$O3V && delete this.$O3V,
      this.$O3U && delete this.$O3U,
      this.$O5m && delete this.$O5m,
      void 0 !== this._apxPageEventList && delete this._apxPageEventList,
      this._uPubExAstPath && delete this._uPubExAstPath,
      this.$ObT)
    ) {
      for (var e = 0; e < this.$ObT.$O3d.length; e++)
        try {
          this.$ObT.$O3d[e].pause(),
            (this.$ObT.$O3d[e].sourceTag.src = ""),
            this.$ObT.$O3d[e].load();
        } catch (e) {}
      delete this.$ObT;
    }
    this.$O51 && this.$O51(),
      this.$Ocg &&
        (this.$Ocg.parentNode.removeChild(this.$Ocg), delete this.$Ocg),
      (this.$Oci = void 0),
      (this._hasAnyScript = void 0),
      (this._sptVer = void 0),
      (this._fontLoadEvtFired = !1),
      (this._fontLoadTimeoutFired = !1),
      this.isPreview2() ||
        (this.stretch(1, 1, { noNotify: !0, cleanup: !0 }), this.$O2J.reset()),
      delete this.project,
      delete this.flow,
      this.ISub_clear && this.ISub_clear();
  }),
  (apn.CExe.prototype.destroy = function () {
    return (
      this.$O3T && (this.$O3T.destroy(), delete this.$O3T),
      this.clear(),
      this.clearGlobalHandler && this.clearGlobalHandler(),
      this.sbxDestroy && this.sbxDestroy(),
      this.$O2J && (this.$O2J.destroy(), delete this.$O2J),
      bx.CWnd.prototype.destroy.call(this)
    );
  }),
  (apn.CExe.prototype.load = function (e, t, a) {
    function i(e) {
      var t;
      return (
        l.o.standAlone &&
          l._uPubExAstPath &&
          l._uPubExAstPath[e] &&
          (t = { path: l._uPubExAstPath[e] }),
        apn.Project.$O1e(l.project, e, void 0, l.o.standAlone, t)
      );
    }
    function n(e) {
      if (l.o.exePreview) {
        if (l.hasSkin()) var t = l.$Occ.tag;
        else var t = l.tag;
        (l.tag.style.background = "none"),
          (l.$Occ.tag.style.background = "none");
      } else var t = document.body || l.tag;
      if (
        e.style &&
        ("rptX" == e.style.bgImgPtn || !e.style.bgImgPtn) &&
        e.style.bgImg &&
        e.style.bgImg.mediaID
      ) {
        var a = new Image();
        (a.onload = function () {
          (t.style.backgroundImage = "url(" + this.getAttribute("src") + ")"),
            (t.style.backgroundRepeat = "repeat-x"),
            t.$CSS("backgroundSize", "auto 100%");
        }),
          (a.src = i(e.style.bgImg.mediaID));
      } else if (
        e.style &&
        "tile" == e.style.bgImgPtn &&
        e.style.bgImg &&
        e.style.bgImg.mediaID
      ) {
        var a = new Image();
        (a.onload = function () {
          var a = 1,
            n = 1;
          1 != l.getStretchX() && (a = l.getStretchX()),
            1 != l.getZoomX() && (a *= 1 / l.getZoomX()),
            1 != l.getStretchY() && (n = l.getStretchY()),
            1 != l.getZoomY() && (n *= 1 / l.getZoomY()),
            (t.style.backgroundImage = "url(" + i(e.style.bgImg.mediaID) + ")"),
            (t.style.backgroundRepeat = "repeat"),
            t.$CSS(
              "backgroundSize",
              a * this.width + "px " + n * this.height + "px"
            );
        }),
          (a.src = i(e.style.bgImg.mediaID));
      } else if (
        e.style &&
        "tileOrg" == e.style.bgImgPtn &&
        e.style.bgImg &&
        e.style.bgImg.mediaID
      )
        (t.style.backgroundImage = "url(" + i(e.style.bgImg.mediaID) + ")"),
          (t.style.backgroundRepeat = "repeat");
      else if (
        e.style &&
        "stretch" == e.style.bgImgPtn &&
        e.style.bgImg &&
        e.style.bgImg.mediaID
      ) {
        var a = new Image();
        (a.onload = function () {
          (t.style.backgroundImage = "url(" + i(e.style.bgImg.mediaID) + ")"),
            (t.style.backgroundRepeat = "no-repeat"),
            t.$CSS("backgroundSize", "100% 100%");
        }),
          (a.src = i(e.style.bgImg.mediaID));
      }
      (l.tag.style.backgroundColor = "transparent"),
        (l.$Occ.tag.style.backgroundColor = "transparent"),
        e.style && e.style.bgClr
          ? (t.style.backgroundColor = apn.CES.$O6l(e.style.bgClr))
          : (t.style.backgroundColor = apn.CES.$O6l(l.o.backgroundColor));
    }
    function r(e) {
      function t(t) {
        for (var a = 0; a < t.length; a++)
          if (t[a] && t[a].accept)
            for (var i = 0; i < t[a].accept.length; i++)
              if (t[a].accept[i] == e) return !0;
      }
      return (
        !(!apx._spt2evLnPre || !t(apx._spt2evLnPre)) ||
        !(!apx._spt2evLn || !t(apx._spt2evLn))
      );
    }
    function o(e) {
      e &&
        e.type &&
        (l.apxRunCmd(e.type, e.data) || l.apxDispatchMessage(e.type, e.data));
    }
    function s(e) {
      function t() {
        return !(
          !l.__iosLastTouchS_dtm ||
          l.__iosLastTouchS_dtm > 500 ||
          l.__iosLastTouchS_fingers > 1
        );
      }
      if ((e || (e = window.event), "touchstart" == e.type)) {
        var a = e.timeStamp,
          i = l.__iosLastTouchS_tm || a;
        (l.__iosLastTouchS_dtm = a - i),
          (l.__iosLastTouchS_fingers = e.targetTouches.length),
          (l.__iosLastTouchS_tm = a);
      }
      var n = e.srcElement,
        r = apn.Project.getLayout(l.project).property;
      if (
        (!(
          r.CExe &&
          "Y" == r.CExe.inputTextScroll &&
          n.tagName &&
          "textarea" == n.tagName.toLowerCase() &&
          n.clientHeight &&
          n.clientHeight < n.scrollHeight &&
          document.activeElement == n
        ) ||
          t()) &&
        (("touchstart" != e.type && "touchend" != e.type) ||
          !n.tagName ||
          ("input" != n.tagName.toLowerCase() &&
            "textarea" != n.tagName.toLowerCase() &&
            "select" != n.tagName.toLowerCase()) ||
          t())
      ) {
        for (; n && n != n.ownerDocument; ) {
          if (n.apnScroll && !t()) return;
          n = n.parentNode;
        }
        bx.Event.preventDefault(e);
      }
    }
    function p(e) {
      e || (e = window.event);
      var t = e.srcElement;
      if (
        !(
          t.tagName &&
          "textarea" == t.tagName.toLowerCase() &&
          t.clientHeight &&
          t.clientHeight < t.scrollHeight
        )
      ) {
        for (; t && t != t.ownerDocument; ) {
          if (t.apnScroll) return;
          t = t.parentNode;
        }
        bx.Event.preventDefault(e);
      }
    }
    var l = this;
    if (
      (this._loadSession++,
      t
        ? (bx.CCanvasWnd.maxFontWaitTime = 1500)
        : (bx.CCanvasWnd.maxFontWaitTime = 3e4),
      this.clear(),
      e ? (apn.Project.$O19(e), (this.$O5c = e)) : (e = this.$O5c),
      (this.project = this.$O3Y(e)),
      (this.project.orgPages = e.pages),
      (this.flow = e.flow),
      this._buildExAstPath(),
      apn.Project._sptSearchScript(e, apn.P.eventTitle.contentChange)
        ? (this._sptContentChangeUsed = !0)
        : r(apn.P.eventTitle.contentChange) &&
          (this._sptContentChangeUsed = !0),
      apn.Project._sptSearchScript(e, apn.P.eventTitle.contentLoad)
        ? (this._sptContentLoadUsed = !0)
        : r(apn.P.eventTitle.contentLoad) && (this._sptContentLoadUsed = !0),
      this.ISub_onPostSetProject && this.ISub_onPostSetProject(),
      !apn.Project.$O19(this.project, !0))
    )
      return !1;
    for (var d in this.flow.pages)
      this.project.pages[d] ||
        (bx.Trace.err(
          "APN",
          "Unknown page is in flow: pageID=" + d,
          "CExe.load"
        ),
        delete this.flow.pages[d]);
    var c = this.getExeOption();
    c &&
      (c.screenBackgroundColor &&
        (this.hasSkin()
          ? ((this.tag.style.backgroundColor = "transparent"),
            (this.$Occ.tag.style.backgroundColor = apn.CES.$O6l(
              this.o.backgroundColor
            )))
          : ((this.tag.style.backgroundColor = apn.CES.$O6l(
              c.screenBackgroundColor
            )),
            (this.$Occ.tag.style.backgroundColor = apn.CES.$O6l(
              c.screenBackgroundColor
            ))),
        (this.o.screenBackgroundColor = c.screenBackgroundColor)),
      void 0 !== c.screenLayoutCenter &&
        (this.hasSkin()
          ? (this.o.screenLayoutCenter = !1)
          : (this.o.screenLayoutCenter = c.screenLayoutCenter)),
      c.screenNoResize &&
        (this.o.exePreview ? (this.o.noResize = !1) : (this.o.noResize = !0)),
      c.preloadAsset && (this.o.preloadAsset = c.preloadAsset),
      c.screenStretch && (this.o.screenStretch = c.screenStretch)),
      this._applyExeProp(this.project);
    var g = apn.Project.getLayout(this.project).property.CExe;
    if (
      (g &&
        g.layout &&
        ("C" == g.layout.layout || this.hasSkin()
          ? ((this.o.screenStretch = 4), (this.o.screenLayoutCenter = !0))
          : "H" == g.layout.layout
          ? (this.o.screenStretch = 2)
          : "W" == g.layout.layout
          ? (this.o.screenStretch = 3)
          : "Z" == g.layout.layout
          ? (this.o.screenStretch = 1)
          : "Rym" == g.layout.layout && (this.o.screenLayoutCenter = !0)),
      this.o.exeUseZIndex2 && g && g.useZIndex2
        ? (this.o.exeUseZIndex2 = !0)
        : (this.o.exeUseZIndex2 = !1),
      bx.HCL.DV.isMobile() || !g || "Y" != g.enhcTxt
        ? (this._fullAclbySet = !0)
        : (this._fullAclbySet = !1),
      this.isPreview2())
    )
      return this.$O2J.hide(), this.sbxLoad(), !0;
    if (
      (this.$O2J.isShow() || this.$O2J.show(),
      (apn.CExeBookEPUB3 && this.constructor == apn.CExeBookEPUB3) ||
        (document.body.style.background = "none"),
      g && g.layout && n(g.layout),
      g && g.scBar && "Y" == g.scBar.noCustom)
    );
    else if (g && g.scBar) {
      var u;
      g.scBar.cRdr && (u = bx.$checkNaN(parseInt(g.scBar.cRdr)) / 100),
        this.onStyleScrollBar(
          g.scBar.clrThumb,
          g.scBar.clrThumbHover,
          g.scBar.clrTrack,
          void 0,
          u
        );
    } else this.onStyleScrollBar();
    if (
      (bx.HCL.DV.isIE() && bx.HCL.DV.isIE() < 8
        ? this.tag.setAttribute("className", "apnCExeScroll")
        : this.tag.setAttribute("class", "apnCExeScroll"),
      this.o.exePreview ||
        (g &&
          g.brTm &&
          g.brTm.frameClr &&
          bx.$setMeta("theme-color", g.brTm.frameClr)),
      bx.$getParamFromURL(location.href, "APXBGCLR") &&
        ((this.tag.style.backgroundColor = "transparent"),
        (this.$Occ.tag.style.backgroundColor = "transparent"),
        ((document.body || this.tag).style.backgroundColor = apn.CES.$O6l(
          decodeURIComponent(bx.$getParamFromURL(location.href, "APXBGCLR"))
        ))),
      !apn.fonts)
    ) {
      var h = apn.Project.getFontList(this.project, void 0, this.o.standAlone);
      if (h) {
        apn.fonts = {};
        for (var d = 0; d < h.length; d++)
          (apn.fonts[h[d].face] = {}),
            (apn.fonts[h[d].face].height = h[d].height),
            (apn.fonts[h[d].face].noBold = h[d].noBold),
            (apn.fonts[h[d].face].paddingRight = h[d].paddingRight || 0),
            (apn.fonts[h[d].face].title = h[d].title);
      }
    }
    var x = apn.CExe.IWidget_getAudioAutoplayCount(this.project);
    if (x) {
      this.$ObT = { $O3d: [] };
      for (var d = 0; d < x; d++) {
        var f = $TAG("audio", { style: "display:none;" });
        (f.sourceTag = f.$TAG("source")), (this.$ObT.$O3d[d] = f);
      }
    }
    if (apx.spt2fileVar)
      for (var d = 0; d < apx.spt2fileVar.length; d++)
        apx._setFileVar(this, apx.spt2fileVar[d].key, apx.spt2fileVar[d].value);
    if (
      (this.resize(),
      g && g.loading && "S" == g.loading.type
        ? this.preloadLoadAssets({
            css: g.loading.spinner.type,
            color: g.loading.spinner.fillClr,
          })
        : g &&
          g.loading &&
          "I" == g.loading.type &&
          g.loading.img &&
          g.loading.img.mediaID
        ? this.preloadLoadAssets({
            css: g.loading.img.type,
            url: i(g.loading.img.mediaID),
          })
        : this.o.preloadAsset && this.preloadLoadAssets(this.o.preloadAsset),
      this._layoutPaddingApplied &&
        ((g && g.layout && g.layout.padding && g.layout.padding.ofl) ||
          ((this.$Occ.tag.style.overflow = "visible"),
          (this.$O2J.tag.style.overflow = "visible")),
        this.$O2J.tag.onBxPageTransitionStart ||
          (this.$O2J.tag.onBxPageTransitionStart = function () {
            this.style.overflow = "visible";
          })),
      this.o.runPerPage && !this.o.exePreview)
    );
    else {
      (this._loadedFontList = {}),
        this.project.property.fontLoadTimeout &&
          setTimeout(function () {
            if (!l._fontLoadEvtFired) {
              var e = [];
              l.$O2J &&
                l.$O2J.iteratePage(function (t) {
                  e.push(t);
                });
              for (var t = 0; t < e.length; t++)
                e[t].canvas &&
                  e[t].canvas.fireEvent("spt_fontLoad", "Timeout", void 0, !0);
              l._fontLoadTimeoutFired = !0;
            }
          }, this.project.property.fontLoadTimeout),
        !this.o.exePreview && this.o.noDynamicFontLoad2
          ? (this.$O4Z(void 0, void 0, !0), t && t())
          : this.$O4Z(t, a);
      try {
        this.project.property.fontLoadDenyHtml5 ||
          !document.fonts ||
          bx.HCL.DV.isIOS() ||
          ((document.fonts.onloadingdone = function (e) {
            var t = [];
            if (
              (l.$O2J &&
                l.$O2J.iteratePage(function (e) {
                  t.push(e);
                }),
              e.fontfaces && e.fontfaces.length)
            ) {
              for (var a = 0; a < e.fontfaces.length; a++) {
                var i = e.fontfaces[a].family;
                if (1 == l._loadedFontList[i]) {
                  for (var n = 0; n < t.length; n++)
                    t[n].canvas &&
                      t[n].canvas.$O3X("exeOnScreenRefresh", t[n].canvas.id, {
                        font: i,
                      });
                  l._loadedFontList[i] = 2;
                }
              }
              for (var n = 0; n < t.length; n++)
                t[n].canvas &&
                  t[n].canvas.fireEvent("spt_fontLoad", "End", void 0, !0);
              l._fontLoadEvtFired = !0;
            }
          }),
          document.fonts.onloadingdone && (this._supportFontLoad = !0));
      } catch (e) {
        console.error(e);
      }
    }
    if (
      (apn.Project.resolveProperty(this.project, "exeNetworkMode") &&
        this.remoteConnect &&
        (this.remoteConnect(window.apxNetConnection, o) ||
          bx.Trace.log(
            "APN",
            "warning",
            "Cannot connect to data switching server",
            "CExe.load"
          )),
      !this.o.exePreview &&
        document.getElementsByTagName("TITLE").length &&
        this.project.property.title)
    )
      try {
        document.getElementsByTagName("TITLE")[0].innerHTML =
          this.project.property.title;
      } catch (e) {}
    var y = apn.Project.getPages(this.project, !1, "apn.COverlayPage");
    if (y.length)
      for (var d = 0; d < y.length; d++) {
        var v = new apn.CExePage(this.$O2J, y[d], {}).create();
        if (
          ((v.viewer = this),
          v.init(),
          this.$O2J.add(v),
          (this._apxPassEventIfExeStop = !0),
          v.execRun({
            data: { noNotifyToEditor: !0, fileDomainEventReceive: !0 },
          }),
          this.project.pages[y[d]].UI.apnCExe &&
            "B" == this.project.pages[y[d]].UI.apnCExe.layer)
        ) {
          var C = this.project.pages[y[d]].UI.order;
          v.tag.style.zIndex = C ? -C : -1;
        } else
          this.project.pages[y[d]].UI.apnCExe &&
          "Tmost" == this.project.pages[y[d]].UI.apnCExe.layer
            ? (v.tag.style.zIndex = bx.UX.getZindex("waiting"))
            : (v.tag.style.zIndex = bx.UX.getZindex("popup"));
        var b = bx.$cloneObject({}, v.position.data);
        if (
          ((b.width = "0%"),
          (b.height = "0%"),
          v.setPosition(new bx.CPosition(b)),
          (v.tag.style.overflow = "visible"),
          this.project.property.fixOveralyRun)
        ) {
          var _;
          (_ = v.canvas.$O3I()), _.load && !_.run && v.canvas.$O5t();
        } else v.canvas.$O3I(), v.canvas.$O5t();
        (this._apxPassEventIfExeStop = !1), (v.tag.style.background = "none");
      }
    return (
      this.o.exePreview ||
        this.o.noScreenFix ||
        (g && g.event && "N" == g.event.PE) ||
        (bx.HCL.DV.isIOS() &&
          (bx.CGesture.supportEventPassive()
            ? bx.Event.add(window, "touchmove", s, { capture: !1, passive: !1 })
            : bx.Event.add(window, "touchmove", s, !1),
          bx.Event.add(window, "touchstart", s, !1),
          bx.Event.add(window, "touchend", s, !1)),
        bx.HCL.DV.isAndroid() &&
          (bx.CGesture.supportEventPassive()
            ? bx.Event.add(window, "touchmove", p, { capture: !1, passive: !1 })
            : bx.Event.add(window, "touchmove", p, !1)),
        (document.body.style.touchAction = "none")),
      !0
    );
  }),
  (apn.CExe.prototype.preparePage = function (e) {
    var t;
    for (var a in this.project.pages)
      this.project.pages[a].UI.title == e && (t = a);
    return this.preparePageById(t);
  }),
  (apn.CExe.prototype.preparePageById = function (e) {
    if (!this.$O2J.get(e) && e) {
      var t = new apn.CExePage(this.$O2J, e, {}).create();
      return (
        (t.viewer = this),
        t.init(),
        this.$O2J.add(t),
        t.execInit(),
        (t.initialized = !0),
        t.canvas
      );
    }
  }),
  (apn.CExe.prototype._buildExAstPath = function () {
    var e = this.project,
      t = apn.Project.getLayout(e).property.PGTPL;
    if (t) {
      var a, i, n;
      for (var r in e.pages)
        if (
          (a = e.pages[r]) &&
          a.PGTPL &&
          a.PGTPL.fId &&
          t[a.PGTPL.fId] &&
          t[a.PGTPL.fId].exAst &&
          t[a.PGTPL.fId].exAst.path
        )
          for (
            i = apn.Project.publishListAsset(e, { id: r, pageOnly: !0 }), n = 0;
            n < i.length;
            n++
          )
            (this._uPubExAstPath = this._uPubExAstPath || {}),
              (this._uPubExAstPath[i[n]] = t[a.PGTPL.fId].exAst.path);
    }
  }),
  (apn.CExe.prototype._resizeIsFixed = function () {
    if (!this.project) return !1;
    if ("fix" == apn.Project.resolveProperty(this.project, "exeScreenSetup"))
      return !0;
    if (this.o.noResize) return !0;
    if (this.o.noLayout) return !0;
    var e = apn.Project.getLayout(this.project).property;
    return !!(
      e.CExe &&
      e.CExe.layout &&
      e.CExe.layout.layout &&
      "F" == e.CExe.layout.layout[0]
    );
  }),
  (apn.CExe.prototype.getScreenSize = function (e, t, a, i, n, r) {
    var o = {},
      s = apn.Project.getLayout(this.project).property.CExe,
      p = !this.hasSkin() && !this.o.noLayout && s && s.layout;
    if (p && ("H" == s.layout.layout || s.layout.layout.indexOf("yh") != -1))
      return (
        (o.w = Math.round((t / i) * a)),
        (o.h = t),
        (o.x = Math.round((e - o.w) / 2)),
        (o.y = Math.round((t - o.h) / 2)),
        "H" == s.layout.layout
          ? ((o.zoomX = 1), (o.zoomY = 1))
          : ((o.zoomY = i / o.h), (o.zoomX = o.zoomY)),
        s.layout.layout.indexOf("$FIX") != -1 &&
          ((o.x = 0), (o.y = 0), (o.noClip = !0)),
        o
      );
    if (p && "W" == s.layout.layout)
      return (
        (o.w = e),
        (o.h = Math.round((e / a) * i)),
        (o.x = Math.round((e - o.w) / 2)),
        (o.y = Math.round((t - o.h) / 2)),
        (o.zoomX = 1),
        (o.zoomY = 1),
        o
      );
    if (n)
      (o.zoomX = 1),
        (o.zoomY = 1),
        (o.w = a),
        (o.h = i),
        this.o.noLayout
          ? ((o.x = 0), (o.y = 0))
          : ((o.x = Math.round((e - o.w) / 2)),
            (o.y = Math.round((t - o.h) / 2)));
    else {
      var l,
        d,
        c = e / a;
      if (2 == r) (l = a), (d = i), (o.zoomX = 1), (o.zoomY = 1);
      else if (Math.floor(c * i) <= t || 2 == r)
        (l = e), (d = Math.round(c * i)), (o.zoomX = 1 / c), (o.zoomY = 1 / c);
      else {
        var g = t / i;
        (d = t), (l = Math.round(g * a)), (o.zoomX = 1 / g), (o.zoomY = 1 / g);
      }
      (o.w = l),
        (o.h = d),
        (o.x = Math.round((e - o.w) / 2)),
        1 == r ? (o.y = Math.round((t - o.h) / 2)) : (o.y = 0);
    }
    var u = this.getPaneCount();
    return (
      u.x > 1 && (o.w = Math.floor(o.w / u.x) * u.x),
      u.y > 1 && (o.h = Math.floor(o.h / u.y) * u.y),
      o
    );
  }),
  (apn.CExe.prototype.resize = function () {
    this.$O2M = 1;
    var e = null,
      t = apn.Project.getLayout(this.project).property;
    this.hasSkin() &&
      apn.dbSkin &&
      ((t.skinShow = 2),
      (t.skinID = "Apple"),
      t.skinID &&
        (2 == t.skinShow || (1 == t.skinShow && bx.HCL.DV.isMobile())) &&
        (e = apn.dbSkin[t.skinID].border));
    var a = 2,
      i = this.innerWidth,
      n = this.innerHeight;
    e && ((i -= e.left + e.right + 2 * a), (n -= e.top + e.bottom + 2 * a));
    var r = { L: 0, R: 0, T: 0, B: 0, fW: !1, fH: !1 };
    if (
      ((this._layoutPaddingApplied = !1),
      !this.hasSkin() &&
        !this.o.exePreview &&
        t.CExe &&
        t.CExe.layout &&
        t.CExe.layout.padding &&
        1 != this.o.screenStretch &&
        !this.o.screenLayoutRatioByWidth &&
        "F" != t.CExe.layout.layout)
    ) {
      var o = t.CExe.layout.padding;
      if (
        (parseInt(o.left) && (r.L = parseInt(o.left)),
        parseInt(o.right) && (r.R = parseInt(o.right)),
        parseInt(o.top) && (r.T = parseInt(o.top)),
        parseInt(o.bottom) && (r.B = parseInt(o.bottom)),
        this.project.property.fixScreenPadding)
      ) {
        var s = this.getScreenSize(
          i * this.$O2M,
          n * this.$O2M,
          this.getProjectSize().w,
          this.getProjectSize().h,
          void 0,
          d
        );
        (r.T = r.T / s.zoomY),
          (r.B = r.B / s.zoomY),
          (r.L = r.L / s.zoomX),
          (r.R = r.R / s.zoomX);
        var p = (n - r.T - r.B) / n,
          l = (i - r.L - r.R) / i;
        (r.T *= p), (r.B *= p), (r.L *= l), (r.R *= l);
      }
      (r.L || r.R) && i > r.L + r.R && (r.fW = !0),
        (r.T || r.B) && n > r.T + r.B && (r.fH = !0),
        2 == this.o.screenStretch || "Ryh" == t.CExe.layout.layout
          ? (r.fW = !1)
          : 3 == this.o.screenStretch && (r.fH = !1),
        r.fW && ((i -= r.L + r.R), (this._layoutPaddingApplied = !0)),
        r.fH && ((n -= r.T + r.B), (this._layoutPaddingApplied = !0));
    }
    var d = 0;
    this.o.screenLayoutCenter
      ? (d = 1)
      : this.o.screenLayoutRatioByWidth && !this.hasSkin() && (d = 2);
    var c = !1;
    if (((c = this._resizeIsFixed()), c && !this.o.standAlone)) {
      var s = this.getScreenSize(
        i * this.$O2M,
        n * this.$O2M,
        this.getProjectSize().w,
        this.getProjectSize().h,
        void 0,
        d
      );
      (s.zoomX > 1 || s.zoomY > 1) && (c = !1);
    }
    (this.$O2N = this.getScreenSize(
      i * this.$O2M,
      n * this.$O2M,
      this.getProjectSize().w,
      this.getProjectSize().h,
      c,
      d
    )),
      e && ((this.$O2N.x += e.left + a), (this.$O2N.y += e.top + a)),
      r.fW && (this.$O2N.x += r.L),
      r.fH && (this.$O2N.y += r.T),
      (this.$O2N.wOrg = this.$O2N.w),
      (this.$O2N.hOrg = this.$O2N.h),
      this.$O2N.noClip &&
        this.setPosition(
          new bx.CPosition({
            type: "overlap",
            coord: { top: this.$O2N.y + "px", left: this.$O2N.x + "px" },
            width: this.$O2N.wOrg + "px",
            height: this.$O2N.hOrg + "px",
            noclip: !0,
          }),
          !0
        );
    var g;
    if (
      ((g =
        this.hasSkin() || 1 != this.o.screenStretch
          ? !this.hasSkin() && this.o.screenLayoutRatioByWidth
            ? {
                type: "overlap",
                coord: { top: "0px", left: "0px" },
                width: this.innerWidth + "px",
                height: this.innerHeight + "px",
                noclip: !0,
              }
            : {
                type: "overlap",
                coord: { top: this.$O2N.y + "px", left: this.$O2N.x + "px" },
                width: this.$O2N.wOrg + "px",
                height: this.$O2N.hOrg + "px",
                noclip: !0,
              }
          : {
              type: "overlap",
              coord: { top: "0px", left: "0px" },
              width: this.innerWidth + "px",
              height: this.innerHeight + "px",
              noclip: !0,
            }),
      this.$Occ.setPosition(new bx.CPosition(g)),
      this.$O3T &&
        this.$O3T.setPosition(new bx.CPosition(bx.$cloneObject({}, g))),
      !this.isPreview2())
    )
      if (this.o.screenStretch) {
        if (this.isNeedChromeScaleFix()) {
          var u = this.getProjectSize().w / screen.width,
            h = this.getProjectSize().h / screen.height;
          this.o.exeXML && ((u = 1), (h = 1)),
            4 == this.o.screenStretch
              ? (this.$O2N.zoomX = this.$O2N.zoomY = Math.max(u, h))
              : 2 == this.o.screenStretch
              ? (this.$O2N.zoomX = this.$O2N.zoomY = h)
              : 3 == this.o.screenStretch
              ? (this.$O2N.zoomX = this.$O2N.zoomY = u)
              : 1 == this.o.screenStretch &&
                (this.$O2N.zoomX = this.$O2N.zoomY = Math.min(u, h)),
            (this.$O2N.w = this.getProjectSize().w / this.$O2N.zoomX),
            (this.$O2N.h = this.getProjectSize().h / this.$O2N.zoomY);
        } else
          (this.$O2N.zoomX = 1),
            (this.$O2N.zoomY = 1),
            (this.$O2N.w = this.getProjectSize().w),
            (this.$O2N.h = this.getProjectSize().h);
        this.$O2J.setPosition(
          new bx.CPosition({
            type: "overlap",
            coord: { top: "0px", left: "0px" },
            width: this.$O2N.w + "px",
            height: this.$O2N.h + "px",
            noclip: !0,
          })
        );
      } else
        this.o.screenLayoutRatioByWidth && !this.hasSkin()
          ? this.$O2J.setPosition(
              new bx.CPosition({
                type: "overlap",
                coord: { top: "0px", left: "0px" },
                width: this.getProjectSize().w + "px",
                height: this.getProjectSize().h + "px",
                noclip: !0,
              })
            )
          : this.$O2J.setPosition(
              new bx.CPosition({
                type: "overlap",
                coord: { top: "0px", left: "0px" },
                width: "100%",
                height: "100%",
                noclip: !0,
              })
            );
    if (
      ((this.$O2O = this.$O2N.zoomX),
      (this.$O2P = this.$O2N.zoomY),
      (this.selectMargin = Math.ceil(
        0.01 * Math.min(this.$O2N.w, this.$O2N.h)
      )),
      e && this.$O50
        ? this.$O50(t.skinID, apn.dbSkin[t.skinID])
        : this.$O51 && this.$O51(),
      this.$Ocf && this.preloadImageReset(),
      !this.isPreview2() && this.o.screenStretch)
    ) {
      if (this.isNeedChromeScaleFix())
        var x = {
          w: this.getProjectSize().w / this.$O2O,
          h: this.getProjectSize().h / this.$O2P,
        };
      else var x = this.getProjectSize();
      if (this.hasSkin())
        var f = this.$O2N.wOrg / x.w,
          y = this.$O2N.hOrg / x.h;
      else if (this.o.exePreview)
        var f = i / this.getPM().width,
          y = n / this.getPM().height;
      else
        var f = i / x.w,
          y = n / x.h;
      if (2 == this.o.screenStretch) f = y;
      else if (3 == this.o.screenStretch) y = f;
      else if (4 == this.o.screenStretch) {
        var v = Math.min(f, y);
        (f = v), (y = v);
      }
      this.stretch(f, y);
    }
  }),
  (apn.CExe.prototype.stretch = function (e, t, a) {
    function i(e) {
      e.canvas && e.canvas.$O3X("exeOnScale2", e.id);
    }
    bx.HCL.DV.supportCSS3D() &&
      (e && t && (1 != e || 1 != t)
        ? (apn.CES.transformSet(this.$O2J.tag, "resizeX", e),
          apn.CES.transformSet(this.$O2J.tag, "resizeY", t),
          apn.CES.transformSet(this.$O2J.tag, "origin", "left top"),
          this.$O2J.tag.$CSS({ backfaceVisibility: "hidden" }),
          apn.CES.transformApply(this.$O2J.tag),
          (this.$Oci = { x: e, y: t }))
        : (apn.CES.transformClear(this.$O2J.tag),
          apn.CES.transformApply(this.$O2J.tag),
          this.$Oci && delete this.$Oci),
      this.$O2J.iteratePage(i)),
      (a && a.cleanup) || (this.$Ocf && this.preloadImageReset()),
      (a && a.noNotify) ||
        (this.IDriver_onZoomChange &&
          this.IDriver_onZoomChange(e, t, !(!a || !a.inDrag)));
  }),
  (apn.CExe.prototype.isResizeSafe = function () {
    if (!this.project) return !1;
    if (this.o.noLayout || this.o.noResize) return !0;
    var e = apn.Project.getLayout(this.project).property.CExe;
    return !!(e && e.layout && e.layout.layout && "R" != e.layout.layout[0]);
  }),
  (apn.CExe.prototype.isNeedChromeScaleFix = function () {
    return !(
      !bx.HCL.DV.isChrome() ||
      !this.o.screenStretch ||
      this.o.fullAccel ||
      this._fullAclbySet
    );
  }),
  (apn.CExe.prototype.isStretch = function () {
    return !!this.$Oci;
  }),
  (apn.CExe.prototype.isInTransitByDrag = function () {
    return !1;
  }),
  (apn.CExe.prototype.getStretchX = function () {
    return this.$Oci ? this.$Oci.x : 1;
  }),
  (apn.CExe.prototype.getStretchY = function () {
    return this.$Oci ? this.$Oci.y : 1;
  }),
  (apn.CExe.prototype.stretchSX = function (e) {
    return this.$Oci ? (1 / this.$Oci.x) * e : e;
  }),
  (apn.CExe.prototype.stretchSY = function (e) {
    return this.$Oci ? (1 / this.$Oci.y) * e : e;
  }),
  (apn.CExe.prototype.getExeOption = function (e) {
    e = e || this.project;
    var t = apn.Project.getLayout(e).CTXT.deviceID,
      a = apn.Project.getExe(e),
      i = apn.widgetDevice[t];
    return i && i.exeModule && i.exeModule[a] && i.exeModule[a].option
      ? i.exeModule[a].option
      : i && i.exeOption
      ? i.exeOption
      : void 0;
  }),
  (apn.CExe.prototype._applyExeProp = function (e) {
    var t,
      a = apn.Project.getLayout(e).property;
    this.constructor.IStub_getConfiguration &&
      this.constructor.IStub_getConfiguration(e) &&
      (t = this.constructor.IStub_getConfiguration(e).property) &&
      t.CExe &&
      ((a.CExe = a.CExe || {}),
      t.CExe.layout && !a.CExe.layout && (a.CExe.layout = t.CExe.layout));
  }),
  (apn.CExe.prototype.getFonts = function (e) {
    var t;
    this.constructor.IStub_getFonts &&
      (t = this.constructor.IStub_getFonts(this.o.standAlone, this.project));
    var a,
      i = apn.Project.publishListFontFile(
        this.project,
        !0,
        void 0,
        this.o.standAlone
      ),
      n = this.o.standAlone && !(t && "replace" == t.action);
    if (n) {
      var r = apn.Project.getLayout(this.project).property.CExe;
      r && r.pubFonts && (a = r.pubFonts);
    }
    for (var o, s = 0; s < i.length; s++)
      if ("dir" == i[s].type && n && a && a.length)
        for (o = 0; o < a.length; o++)
          if (a[o].face && a[o].path && a[o].face == i[s].face) {
            (i[s].path = a[o].path), (i[s]._prepro = !0);
            break;
          }
    var p;
    if (
      (bx.$getParamFromURL(location.href, "APXFONTPATH") &&
        ((p = bx.$getParamFromURL(location.href, "APXFONTPATH")),
        p && (p = decodeURIComponent(p))),
      !p && this.o.pathFont && (p = this.o.pathFont),
      p)
    )
      for (var l, s = 0; s < i.length; s++) {
        if (this.o.standAlone) {
          if (
            apn.dbUI &&
            apn.dbUI.system &&
            apn.dbUI.system.pubFontCompress &&
            i[s].compress
          )
            continue;
          if ("zzpdf" == i[s].ln) continue;
        }
        ("file" != i[s].type && "google" != i[s].type && "dir" != i[s].type) ||
          ((l = (i[s].path || "").split("/")),
          (l[l.length - 1].indexOf(".css") == -1 &&
            l[l.length - 1].indexOf(".ttf") == -1) ||
            ((i[s].path = p + "/" + l[l.length - 1]), (i[s]._prepro = !0)));
      }
    if (t && "replace" == t.action && t.fonts) {
      for (var o, d, s = 0; s < t.fonts.length; s++) {
        for (d = !1, o = 0; o < i.length; o++)
          if (t.fonts[s].face == i[o].face) {
            d = !0;
            break;
          }
        d || (t.fonts.splice(s, 1), s--);
      }
      i = t.fonts;
    }
    if (e)
      for (
        var c,
          g = apn.Project.publishListFontFile(
            this.project,
            void 0,
            void 0,
            this.o.standAlone,
            e
          ),
          s = 0;
        s < i.length;
        s++
      ) {
        c = !1;
        for (var o = 0; o < g.length; o++)
          if (i[s].face == g[o].face) {
            c = !0;
            break;
          }
        c || (i.splice(s, 1), s--);
      }
    return i;
  }),
  (apn.CExe.prototype.$O4Z = function (e, t, a, i) {
    function n(e) {
      e.canvas && e.canvas.fireEvent("spt_fontLoad", "End", void 0, !0);
    }
    function r(t, a, i) {
      function r(e) {
        e.canvas && e.canvas.$O3X("exeOnScreenRefresh", e.id, { font: a });
      }
      s++,
        (p._loadedFontList && 2 == p._loadedFontList[a]) ||
          (p.$O2J && p.$O2J.iteratePage(r)),
        s == o.length &&
          (p._supportFontLoad || (p.$O2J && p.$O2J.iteratePage(n)),
          (p._fontLoadEvtFired = !0),
          e && e()),
        i &&
          bx.Trace.log(
            "APN",
            "error",
            "Failed to load a font. Face=[" + a + "]",
            "CExe.LF"
          );
    }
    var o = this.getFonts(i);
    if (!o.length)
      return (
        this.$O2J && this.$O2J.iteratePage(n),
        (this._fontLoadEvtFired = !0),
        void (e && e())
      );
    var s = 0,
      p = this;
    if (
      apn.dbUI &&
      apn.dbUI.system &&
      apn.dbUI.system.pubFontCompress &&
      this.o.standAlone
    ) {
      var l;
      if (
        (l = apn.Project.publishCompressFont(this.project, { needTextMap: !0 }))
      )
        for (var d = 0; d < o.length; d++)
          l[o[d].face] && (o[d].txtTest = l[o[d].face]);
    }
    for (var c, g, u = 0, d = 0; d < o.length; d++)
      if (
        ("file" == o[d].type
          ? this.o.exeAPN
            ? (c = "/" + o[d].path)
            : ((u = o[d].path.split("/")),
              (c =
                this.o.standAlone && !o[d]._prepro
                  ? "fonts/" + u[u.length - 1]
                  : o[d].path))
          : "dir" == o[d].type
          ? this.o.exeAPN
            ? (c = "/" + o[d].path)
            : ((u = o[d].path.split("/")),
              (c =
                this.o.standAlone && u.length > 1 && !o[d]._prepro
                  ? "fonts/" + u[u.length - 2] + "/" + u[u.length - 1]
                  : o[d].path))
          : (c = o[d].path),
        bx.HCL.DV.isIE() && bx.HCL.DV.isIE() < 9)
      )
        r(!1, o[d].face, !1);
      else {
        (g = a),
          apn.dbUI &&
            apn.dbUI.system &&
            apn.dbUI.system.pubFontCompress &&
            this.o.standAlone &&
            o[d].compress &&
            (g = !0);
        try {
          "ko" == o[d].ln &&
            (o[d].txtTest
              ? (o[d].txtTest += "홁내음이나면")
              : (o[d].txtTest = "홁내음이나면")),
            this._loadedFontList &&
              (this._loadedFontList[o[d].face] ||
                (this._loadedFontList[o[d].face] = 1)),
            bx.CCanvasWnd.loadCustomFont(
              o[d].face,
              c,
              r,
              "google" == o[d].type || "dir" == o[d].type,
              g,
              !o[d].noBold,
              o[d].txtTest
            );
        } catch (e) {
          r(!1, o[d].face, !1);
        }
      }
  }),
  (apn.CExe.prototype.hasSkin = function () {
    return !(!this.o.exePreview || this.$O7J);
  }),
  (apn.CExe.prototype.doPreRunProcess = function () {
    this.$O3W = 1;
  }),
  (apn.CExe.prototype.runByTitle = function (e) {
    if (this.project) {
      for (
        var t = apn.Project.getPages(this.project),
          a = apn.Project.getPageTitles(this.project),
          i = 0;
        i < a.length;
        i++
      )
        if (a[i] == e) return void this.run(void 0, t[i]);
      this.run();
    }
  }),
  (apn.CExe.prototype.runByIndex = function (e, t) {
    if (this.project) {
      var a = apn.Project.getPages(this.project);
      return e >= 1 && a[e - 1]
        ? void this.run(void 0, a[e - 1], void 0, t)
        : void this.run();
    }
  }),
  (apn.CExe.prototype.run = function (e, t, a, i) {
    function n(e, a) {
      e
        ? _.$O2J.prev({
            transit: y,
            transitDuration: f,
            transitTiming: v,
            postRun: a,
            data: { refresh: i, popup: C },
          })
        : _.$O2J.run(t, {
            transit: y,
            transitDuration: f,
            transitTiming: v,
            postRun: a,
            data: { refresh: i, popup: C },
          });
    }
    function r(e) {
      return e
        ? _.$O2J.canPrev({ transit: y, transitDuration: f, transitTiming: v })
        : void _.$O2J.canRun(t, {
            transit: y,
            transitDuration: f,
            transitTiming: v,
          });
    }
    function o() {
      function e() {
        _.$O2J.get(a).show();
      }
      if (s()) {
        var a = _.$O2J.getCurrent();
        _.$O2J.run(t, {
          transit: y,
          transitDuration: f,
          transitTiming: v,
          postRun: e,
          data: { refresh: i, popup: C },
        });
      }
    }
    function s() {
      return _.$O2J.canRun(t, {
        transit: y,
        transitDuration: f,
        transitTiming: v,
      });
    }
    function p(e) {
      r(!0) && n(!0);
    }
    function l(e) {
      return r(!0);
    }
    function d() {
      if (s()) {
        var e = _.$O2J.historyPop();
        void 0 !== e && void 0 !== _.$O2J.getCurrent()
          ? (_.$O2J.get(e).execShut(_.$O2J.get(_.$O2J.getCurrent())),
            _.$O2J.get(_.$O2J.getCurrent()).execRun(),
            _.$O2J.get(_.$O2J.getCurrent()).execTransitEnd())
          : bx.Trace.log(
              "APN",
              "warning",
              "Invalid link flow case",
              "CExe.run"
            ),
          o();
      }
    }
    function c() {
      var e = _.$O2J.getCurrent();
      if (l(e)) {
        var a = _.$O2J.historyGet(1);
        void 0 !== a
          ? (_.$O2J.get(a).execShut(_.$O2J.get(t)), _.$O2J.historyAdd(1, t))
          : bx.Trace.log(
              "APN",
              "warning",
              "Invalid link flow case",
              "CExe.run"
            ),
          p(e);
      }
    }
    if (this.project && !this.isPreview2()) {
      if (!t && !e) {
        var g;
        (g = bx.$getParamFromURL(location.href, "APXFLOW")) &&
          this.getStartPageID(g) &&
          (t = this.getStartPageID(g));
      }
      if (((0 == t || t) && (t += ""), t && e))
        return void bx.Trace.log(
          "APN",
          "warning",
          "Parameter error link=" + e + ", pageID=" + t,
          "CExe.run"
        );
      this.doPreRunProcess();
      var u,
        h = !1;
      if (e) e.to && e.to.reset && (i = !0);
      else {
        if (this.o.exePreview && t && !this.$O2J.getCurrent()) {
          var x;
          (x = this.getPM().get(t)) &&
            x.canvas &&
            x.canvas.screen &&
            "apn.COverlayPage" == x.canvas.screen.module &&
            (t = void 0);
        }
        t || (t = this.$O36()),
          t &&
            (e = {
              action: "LTP",
              to: { pageID: t },
              transit: { effect: "none" },
            }),
          (h = !0);
      }
      if (!e) {
        for (u in this.project.pages)
          if ("apn.CFlowPage" == this.project.pages[u].module) {
            (t = u),
              (e = {
                action: "LTP",
                to: { pageID: t },
                transit: { effect: "none" },
              }),
              (h = !0);
            break;
          }
        if (!e)
          for (u in this.project.pages) {
            (t = u),
              (e = {
                action: "LTP",
                to: { pageID: t },
                transit: { effect: "none" },
              });
            break;
          }
        this.o.exePreview &&
          !(apn.dbUI && apn.dbUI.system && apn.dbUI.system.flwModeHide);
      }
      if (
        (this.flow.pages[e.to.pageID] ||
          ((this.flow.pages[e.to.pageID] = { init: {} }),
          (this.flow.pages[e.to.pageID].init.position = { x: 0, y: 0 })),
        (t = e.to.pageID),
        t == this.$O2J.getCurrent())
      )
        return void (i && this.reloadCurPage());
      var x;
      if (
        !(
          this.o.exePreview &&
          (x = this.getPM().get(t)) &&
          x.canvas &&
          x.canvas.screen &&
          "apn.COverlayPage" == x.canvas.screen.module
        )
      ) {
        (x = this.$O2J.get(t)) ||
          ((x = new apn.CExePage(this.$O2J, t, {}).create()),
          (x.viewer = this),
          x.init(),
          this.$O2J.add(x)),
          (e.transit = e.transit || {}),
          apn.Project.resolveTransit(this.project, e.transit, a),
          bx.$checkNaN(parseInt(e.transit.duration)) ||
            (e.transit.effect = "none");
        var f,
          y = e.transit.effect || "none",
          f = "none" == y ? 1 : bx.$checkNaN(parseInt(e.transit.duration)),
          v = e.transit.timing,
          C = !h && "3" == e.to.type,
          b =
            !h &&
            void 0 !== this.$O2J.getCurrent() &&
            this.$O2J.get(this.$O2J.getCurrent()).popup;
        h ||
          (this.project.pages[e.to.pageID] &&
            "apn.CPopupPage" == this.project.pages[e.to.pageID].module &&
            (C = !0),
          void 0 !== this.$O2J.getCurrent() &&
            this.project.pages[this.$O2J.getCurrent()] &&
            "apn.CPopupPage" ==
              this.project.pages[this.$O2J.getCurrent()].module &&
            (b = !0));
        var _ = this;
        b
          ? a
            ? C
              ? bx.Trace.log(
                  "APN",
                  "warning",
                  "Invalid link flow case",
                  "CExe.run"
                )
              : p(this.$O2J.getCurrent())
            : this.$O2J.getPrev() == t
            ? ((a = !0), p(this.$O2J.getCurrent()))
            : C
            ? d()
            : c()
          : a
          ? C
            ? bx.Trace.log(
                "APN",
                "warning",
                "Invalid link flow case",
                "CExe.run"
              )
            : n(a)
          : C
          ? o()
          : n(a);
      }
    }
  }),
  (apn.CExe.prototype.reloadCurPage = function () {
    var e;
    (e = this.$O2J.getCurrent()) && this._reloadPage(e);
  }),
  (apn.CExe.prototype._reloadPage = function (e, t) {
    var a,
      i = this.$O2J.get(e);
    if (i && (a = i.canvas)) {
      if (a._inPageCreateEvent && !t) return;
      a.$O37(),
        a.$O5n(),
        a.$O3I(),
        (a.afterLoaded = !1),
        a.$O5t(),
        (i.apxInRun = !0),
        this.IDriver_onRefreshScreen && this.IDriver_onRefreshScreen(e);
    }
  }),
  (apn.CExe.prototype.reloadPage = apn.CExe.prototype._reloadPage),
  (apn.CExe.prototype.$O6t = function () {
    function e(t) {
      var a = n.project.pages[t];
      if ("apn.CFlowPage" == a.module) {
        if (a.ITRs && a.ITRs.length)
          for (var r = 0; r < a.ITRs.length; r++)
            "LTP" != a.ITRs[r].action ||
              i[a.ITRs[r].to.pageID] ||
              ((i[a.ITRs[r].to.pageID] = !0), e(a.ITRs[r].to.pageID));
        for (var o in a.objects)
          if (a.objects[o].ITRs && a.objects[o].ITRs.length)
            for (r = 0; r < a.objects[o].ITRs.length; r++)
              "LTP" != a.objects[o].ITRs[r].action ||
                i[a.objects[o].ITRs[r].to.pageID] ||
                ((i[a.objects[o].ITRs[r].to.pageID] = !0),
                e(a.objects[o].ITRs[r].to.pageID));
      }
    }
    var t = [],
      a = this.$O36();
    if (a) {
      var i = {},
        n = this;
      (i[a] = !0), e(a);
      for (var r in i) t.push(r);
    }
    return t;
  }),
  (apn.CExe.prototype.$O36 = function (e) {
    if (!this.project) return null;
    for (var t in this.flow.pages)
      if (this.project.pages[t].ITRs && this.project.pages[t].ITRs.length)
        for (i = 0; i < this.project.pages[t].ITRs.length; i++)
          if ("LTP" == this.project.pages[t].ITRs[i].action)
            if (2 == e) {
              if (
                this.project.pages[t].ITRs[i].from.objectID ==
                apn.Project.ID_2NDARY_POINT
              )
                return this.project.pages[t].ITRs[i].to.pageID;
            } else if (
              this.o.exePreview &&
              this.o.useSecondaryFlow &&
              this.project.pages[t].ITRs[i].from.objectID ==
                apn.Project.ID_2NDARY_POINT
            )
              return this.project.pages[t].ITRs[i].to.pageID;
    if (void 0 === e || 1 == e)
      for (var t in this.flow.pages)
        if (this.project.pages[t].ITRs && this.project.pages[t].ITRs.length)
          for (i = 0; i < this.project.pages[t].ITRs.length; i++)
            if (
              "LTP" == this.project.pages[t].ITRs[i].action &&
              this.project.pages[t].ITRs[i].from.objectID ==
                apn.Project.ID_START_POINT
            )
              return this.project.pages[t].ITRs[i].to.pageID;
    var a = apn.Project.getPages(this.project, !0, "apn.CFlowPage");
    return a.length ? a[0] : null;
  }),
  (apn.CExe.prototype.getStartPageID = apn.CExe.prototype.$O36),
  (apn.CExe.prototype.isRunnerablePage = function (e) {
    if (this.constructor.IStub_getPageTypeList) {
      var t = this.constructor.IStub_getPageTypeList();
      if (t[e.module]) return !0;
    } else if ("apn.CFlowPage" == e.module) return !0;
    return !1;
  }),
  (apn.CExe.prototype.isCurrentPage = function (e) {
    return e == this.$O2J.getCurrent();
  }),
  (apn.CExe.prototype.getOutPageID = function () {
    if (!this.project) return null;
    for (var e in this.flow.pages)
      if (this.project.pages[e].ITRs && this.project.pages[e].ITRs.length)
        for (i = 0; i < this.project.pages[e].ITRs.length; i++)
          if (
            "LTP" == this.project.pages[e].ITRs[i].action &&
            this.project.pages[e].ITRs[i].from.objectID ==
              apn.Project.ID_END_POINT
          )
            return this.project.pages[e].ITRs[i].to.pageID;
    return null;
  }),
  (apn.CExe.prototype.getInPageID = function () {
    if (!this.project) return null;
    for (var e in this.flow.pages)
      if (this.project.pages[e].ITRs && this.project.pages[e].ITRs.length)
        for (i = 0; i < this.project.pages[e].ITRs.length; i++)
          if (
            "LTP" == this.project.pages[e].ITRs[i].action &&
            this.project.pages[e].ITRs[i].from.objectID ==
              apn.Project.ID_IN_POINT
          )
            return this.project.pages[e].ITRs[i].to.pageID;
    return null;
  }),
  (apn.CExe.prototype.getCurrentPageID = function () {
    return this.project && this.$O2J
      ? void 0 === this.$O2J.getCurrent()
        ? null
        : this.$O2J.getCurrent()
      : null;
  }),
  (apn.CExe.prototype.getCurPageID = apn.CExe.prototype.getCurrentPageID),
  (apn.CExe.prototype.getCurApx = function () {
    var e;
    if ((e = this.$O2J.getCurrent())) {
      var t = this.$O2J.get(e);
      if (t && t.canvas) return t.canvas;
    }
  }),
  (apn.CExe.prototype.getPage = function (e) {
    return this.project && this.$O2J ? this.$O2J.get(e) : null;
  }),
  (apn.CExe.prototype.getProjectSize = function () {
    return apn.Project.getScreenSize(this.project);
  }),
  (apn.CExe.prototype.getProject = function () {
    return this.$O5c;
  }),
  (apn.CExe.prototype.getPaneCount = function () {
    return { x: 1, y: 1 };
  }),
  (apn.CExe.prototype.setPinchDetectInfo = function (e) {
    this.__uPncDctInfo = e;
  }),
  (apn.CExe.prototype.getScriptVer = function () {
    return (
      void 0 === this._sptVer &&
        (this._sptVer = apn.Project.getScriptVer(this.project)),
      this._sptVer
    );
  }),
  (apn.CExe.prototype.showLoading = function (e, t) {
    if (!this.$O39) {
      var a = Math.ceil(this.height / 54);
      this.$O39 = this.tagVP.$TAG(
        "div",
        { align: "center" },
        {
          position: "absolute",
          fontSize: a + "px",
          maxWidth: parseInt(0.7 * this.width) + "px",
          padding:
            Math.floor(a / 2) +
            "px " +
            2 * a +
            "px " +
            Math.floor(a / 2) +
            "px " +
            2 * a +
            "px",
          borderRadius: Math.floor(0.4 * a) + "px",
          backgroundColor: apn.CES.$O6l("rgba(83, 83, 83, 0.5)"),
          color: "#ffffff",
        }
      );
    }
    if (
      (this.$O2U && "block" == this.$O2U.style.display
        ? (this.$O39.style.bottom =
            parseInt(this.$O2U.style.height) +
            parseInt(0.01 * this.height) +
            "px")
        : (this.$O39.style.bottom = parseInt(0.06 * this.height) + "px"),
      this.$O39.$O3a && (clearTimeout(this.$O39.$O3a), (this.$O39.$O3a = 0)),
      t)
    ) {
      var i = this;
      this.$O39.$O3a = setTimeout(function () {
        i.hideLoading();
      }, t);
    }
    (this.$O39.style.display = "block"),
      (this.$O39.innerHTML = e),
      (this.$O39.style.zIndex = bx.UX.getZindex("alert")),
      (this.$O39.style.left =
        parseInt((this.width - this.$O39.offsetWidth) / 2) + "px");
  }),
  (apn.CExe.prototype.hideLoading = function () {
    this.$O39 && ((this.$O39.style.display = "none"), (this.$O39.$O3a = 0));
  }),
  (apn.CExe.prototype.$O3Y = function (e) {
    var t = e.tmp,
      a = e.rsc;
    delete e.tmp, a && delete e.rsc;
    var i = bx.$cloneObject({}, e);
    return (e.tmp = t), a && ((e.rsc = a), (i.rsc = a)), i;
  }),
  (apn.CExe.prototype.IStub_emulRun = function (e) {
    this.isPreview2()
      ? this.sbxIF("emulate", { item: e })
      : e.CustomEvent &&
        this.getCurApx() &&
        this.getCurApx().sptFireCustomEvent(e.CustomEvent);
  }),
  (apn.CExePage = function (e, t, a, i) {
    bx.inClassing || bx.CPage2.call(this, e, t, i, void 0, a);
  }),
  bx.$Inherit(apn.CExePage, bx.CPage2),
  (apn.CExePage.prototype.execInit = function () {
    this.updateStart(),
      (this.tag.style.zIndex = 0),
      (this.canvas = new (
        this.o.CExePage && this.o.CExePage.clsCanvas
          ? this.o.CExePage.clsCanvas
          : apn.CES
      )(this.tagVP)),
      (this.canvas.viewer = this.viewer),
      (this.canvas.page = this),
      (this.canvas.popup = this.popup),
      (this.canvas.$Och = this.fileDomainEventReceive),
      this.canvas.init(),
      this.canvas.zoom(this.viewer.$O2O, this.viewer.$O2P),
      this.canvas.$O5o(this.id),
      this.updateEnd();
    var e = apn.Project.getLayout(this.viewer.project).property.CExe;
    if ("apn.COverlayPage" != this.canvas.screen.module && e && e.pageOutline) {
      var t, a, i, n;
      (t = e.pageOutline.radius[0]),
        (a = e.pageOutline.shadow[0]),
        (i = this.canvas.tag),
        (n = 1 / this.canvas.$O2O),
        t.LT && i.$CSS("borderTopLeftRadius", Math.ceil(t.LT * n) + "px"),
        t.RT && i.$CSS("borderTopRightRadius", Math.ceil(t.RT * n) + "px"),
        t.RB && i.$CSS("borderBottomRightRadius", Math.ceil(t.RB * n) + "px"),
        t.LB && i.$CSS("borderBottomLeftRadius", Math.ceil(t.LB * n) + "px"),
        a.color &&
          a.spread &&
          ((this.viewer.isStretch() && bx.HCL.DV.isChrome()) ||
            i.$CSS(
              "boxShadow",
              Math.ceil(a.x * n) +
                "px " +
                Math.ceil(a.y * n) +
                "px " +
                Math.ceil(a.spread * n) +
                "px " +
                a.color
            ));
    }
    this.canvas.tag.style.visibility = "hidden";
  }),
  (apn.CExePage.prototype.execRun = function (e) {
    this.show();
    var t = !0;
    if (
      (e && e.data && e.data.popup ? (this.popup = !0) : (this.popup = !1),
      e &&
        e.data &&
        e.data.fileDomainEventReceive &&
        (this.fileDomainEventReceive = !0),
      (this.apxInRun = !1),
      this.canvas
        ? this._everExecuted &&
          e &&
          e.data &&
          e.data.refresh &&
          (this.canvas.$O37(),
          this.viewer.IDriver_onRefreshScreen &&
            this.viewer.IDriver_onRefreshScreen(this.id),
          (t = !1))
        : (this.execInit(), (this.initialized = !0), (t = !1)),
      this.popup ||
        (this.tag.parentNode.bxPageTransition &&
          this.tag.parentNode.bxPageTransition.tagPopup &&
          (this.tag.parentNode.bxPageTransition.tagPopup.style.display =
            "none")),
      t && this.canvas.$O41)
    ) {
      var a = this;
      setTimeout(function () {
        a.canvas.$O3X("exeOnResume", a.id);
      }, 0);
    } else this.canvas.$O5n(e && e.data && e.data.noStart);
    (this.canvas.$O41 = !0),
      (this._everExecuted = !0),
      this.canvas.$O5q(),
      (e && e.data && (e.data.noStart || e.data.noNotifyToEditor)) ||
        (this.viewer.IDriver_onRunScreen &&
          this.viewer.IDriver_onRunScreen(this.id)),
      this.viewer.ISub_onPostRunPage && this.viewer.ISub_onPostRunPage(this);
  }),
  (apn.CExePage.prototype.execShut = function (e) {
    this.hide(!0),
      (this.popup = !1),
      this.canvas && this.canvas._eventOnPagePause(),
      this.canvas && this.canvas.$O3X("exeOnPause", this.id),
      this.viewer.ISub_onPostShutPage && this.viewer.ISub_onPostShutPage(this);
  }),
  (apn.CExePage.prototype.execTransitStart = function () {
    this.popup && this.canvas && this.canvas.project
      ? (apn.Project.$O5X(
          this.canvas.project,
          this.viewer.o.standAlone,
          "color",
          this.canvas.screen.BG ? this.canvas.screen.BG.fillStyle : void 0,
          this.tag.parentNode.bxPageTransition.tagPopup,
          1 / this.canvas.getZoomX(),
          1 / this.canvas.getZoomY()
        ),
        (this.tag._orgBackground = this.tag.$css("background")),
        (this.tag.style.background = "none"),
        this.canvas.screen.BG
          ? apn.Project.$O5X(
              this.canvas.project,
              this.viewer.o.standAlone,
              "media",
              this.canvas.screen.BG.mediaID ||
                this.canvas.screen.BG.mediaFillStyle,
              this.tag.parentNode.bxPageTransition.tagPopup,
              1 / this.canvas.getZoomX(),
              1 / this.canvas.getZoomY()
            )
          : apn.Project.$O5X(
              this.canvas.project,
              this.viewer.o.standAlone,
              "media",
              void 0,
              this.tag.parentNode.bxPageTransition.tagPopup,
              1 / this.canvas.getZoomX(),
              1 / this.canvas.getZoomY()
            ))
      : void 0 !== this.tag._orgBackground &&
        ((this.tag.style.background = this.tag._orgBackground),
        delete this.tag._orgBackground);
  }),
  (apn.CExePage.prototype.execTransitEnd = function (e) {
    var t;
    if ((e || (t = !0), this.canvas && this.canvas.afterLoaded)) {
      if (!e) {
        var a = this.canvas.$O3I();
        this.canvas._pageLoadRefCount && (t = !1), a.run && (t = !1);
      }
      this.canvas.afterLoaded = !1;
    }
    this.popup &&
      (this.tag.parentNode.bxPageTransition.tagPopup.style.display = "block"),
      this.canvas && (t && this.canvas.$O5t(), this.canvas.$O5r()),
      (this.apxInRun = !0);
  }),
  (apn.CExePage.prototype.execPreShut = function (e) {
    (e && e.popup) || this.canvas.$O5s();
  }),
  (apn.CExePage.prototype.execTransitOutEnd = function (e) {
    this.canvas && this.canvas.$O5r();
  }),
  (apn.CExePage.prototype.destroy = function () {
    return (
      this.canvas &&
        (void 0 !== this.canvas.$O42 &&
          (bx.Transition.loopRemove(this.canvas.$O42), delete this.canvas.$O42),
        this.canvas.$O3M(),
        (this.canvas.$O7K = !0),
        delete this.canvas),
      bx.CWnd.prototype.destroy.call(this)
    );
  }),
  (apn.CExeScreen = function (e) {
    if (!bx.inClassing) {
      (this.$O3d = {}), (this.tag = e);
      var t = bx.HCL.getElementRect(this.tag);
      (this.width = t.w), (this.height = t.h);
    }
  }),
  (apn.CES = apn.CExeScreen),
  (apn.CES.transformSet = function (e, t, a) {
    "rotate" == t
      ? (e.apxTrRotate = a)
      : "rotateX" == t
      ? (e.apxTrRotateX = a)
      : "rotateZ" == t
      ? (e.apxTrRotateZ = a)
      : "rotateY" == t
      ? (e.apxTrRotateY = a)
      : "resize" == t
      ? (e.apxTrResize = a)
      : "resizeX" == t
      ? (e.apxTrResizeX = a)
      : "resizeY" == t
      ? (e.apxTrResizeY = a)
      : "origin" == t
      ? (e.apxTrOrigin = a)
      : "x" == t
      ? (e.apxTrX = a)
      : "y" == t
      ? (e.apxTrY = a)
      : "z" == t
      ? (e.apxTrZ = a)
      : "originX" == t
      ? (e.apxTrOriginX = a)
      : "originY" == t && (e.apxTrOriginY = a);
  }),
  (apn.CES.transformGet = function (e, t) {
    return "rotate" == t
      ? e.apxTrRotate
      : "rotateX" == t
      ? e.apxTrRotateX
      : "rotateZ" == t
      ? e.apxTrRotateZ
      : "rotateY" == t
      ? e.apxTrRotateY
      : "resize" == t
      ? e.apxTrResize
      : "resizeX" == t
      ? e.apxTrResizeX
      : "resizeY" == t
      ? e.apxTrResizeY
      : "origin" == t
      ? e.apxTrOrigin
      : "x" == t
      ? e.apxTrX
      : "y" == t
      ? e.apxTrY
      : "z" == t
      ? e.apxTrZ
      : "originX" == t
      ? e.apxTrOriginX
      : "originY" == t
      ? e.apxTrOriginY
      : void 0;
  }),
  (apn.CES.transformApply = function (e) {
    if (bx.HCL.DV.isIE() && bx.HCL.DV.isIE() <= 8)
      if (void 0 !== e.apxTrRotate && 0 !== e.apxTrRotate) {
        var t = bx.CCanvasWnd.degreeToRad(e.apxTrRotate),
          a = Math.cos(t),
          i = Math.sin(t),
          n = this.$O6y || {},
          r = 0.5,
          o = 0.5;
        if (e.apxTrOrigin && e.apxTrOrigin.split) {
          var s = e.apxTrOrigin.split(" ");
          (r =
            "left" == s[0]
              ? 0
              : "right" == s[0]
              ? 1
              : "center" == s[0]
              ? 0.5
              : bx.$checkNaN(parseFloat(s[0])) / 100),
            (o =
              "top" == s[1]
                ? 0
                : "bottom" == s[1]
                ? 1
                : "center" == s[1]
                ? 0.5
                : bx.$checkNaN(parseFloat(s[1])) / 100);
        }
        (n = bx.CCanvasWnd.getEnclosingRect(
          parseInt(e.style.left),
          parseInt(e.style.top),
          apn.CES.$O5v(e) || 1,
          apn.CES.$O5x(e) || 1,
          t,
          n,
          parseInt(e.style.left) + apn.CES.$O5v(e) * r,
          parseInt(e.style.top) + apn.CES.$O5x(e) * o
        )),
          (e.style.marginLeft = n.x1 - parseInt(e.style.left) + "px"),
          (e.style.marginTop = n.y1 - parseInt(e.style.top) + "px"),
          e.$CSS(
            "filter",
            bx.$applyMsFilter(
              e,
              "matrix",
              "M11=" + a + ",M12=" + -i + ",M21=" + i + ",M22=" + a
            )
          );
      } else e.$CSS("filter", bx.$applyMsFilter(e, "matrix"));
    else {
      var p = "";
      void 0 !== e.apxTrRotateZ &&
        0 !== e.apxTrRotateZ &&
        (p += p
          ? " rotateZ(" + e.apxTrRotateZ + "deg)"
          : "rotateZ(" + e.apxTrRotateZ + "deg)"),
        void 0 !== e.apxTrRotateX &&
          0 !== e.apxTrRotateX &&
          (p += p
            ? " rotateX(" + e.apxTrRotateX + "deg)"
            : "rotateX(" + e.apxTrRotateX + "deg)"),
        void 0 !== e.apxTrRotateY &&
          0 !== e.apxTrRotateY &&
          (p += p
            ? " rotateY(" + e.apxTrRotateY + "deg)"
            : "rotateY(" + e.apxTrRotateY + "deg)"),
        void 0 !== e.apxTrRotate &&
          0 !== e.apxTrRotate &&
          (p += p
            ? " rotate(" + e.apxTrRotate + "deg)"
            : "rotate(" + e.apxTrRotate + "deg)"),
        void 0 !== e.apxTrResize &&
          1 !== e.apxTrResize &&
          (p += p
            ? " scale(" + e.apxTrResize + "," + e.apxTrResize + ")"
            : "scale(" + e.apxTrResize + "," + e.apxTrResize + ")"),
        void 0 !== e.apxTrResizeX &&
          1 !== e.apxTrResizeX &&
          (p += p
            ? " scaleX(" + e.apxTrResizeX + ")"
            : "scaleX(" + e.apxTrResizeX + ")"),
        void 0 !== e.apxTrResizeY &&
          1 !== e.apxTrResizeY &&
          (p += p
            ? " scaleY(" + e.apxTrResizeY + ")"
            : "scaleY(" + e.apxTrResizeY + ")"),
        void 0 !== e.apxTrX && 0 !== e.apxTrX
          ? ((p += p
              ? " translateX(" + bx.$checkNaN(parseInt(e.apxTrX)) + "px)"
              : "translateX(" + bx.$checkNaN(parseInt(e.apxTrX)) + "px)"),
            (e.$O7L =
              e.apxTrX +
              (e.width || parseInt(e.style.width)) *
                (void 0 === e.apxTrOriginX ? 0.5 : e.apxTrOriginX) +
              "px"))
          : e.$O7L && delete e.$O7L,
        void 0 !== e.apxTrY && 0 !== e.apxTrY
          ? ((p += p
              ? " translateY(" + bx.$checkNaN(parseInt(e.apxTrY)) + "px)"
              : "translateY(" + bx.$checkNaN(parseInt(e.apxTrY)) + "px)"),
            (e.$O7O =
              e.apxTrY +
              (e.height || parseInt(e.style.height)) *
                (void 0 === e.apxTrOriginY ? 0.5 : e.apxTrOriginY) +
              "px"))
          : e.$O7O && delete e.$O7O,
        void 0 !== e.apxTrZ &&
          (p += p
            ? " translateZ(" + bx.$checkNaN(parseInt(e.apxTrZ)) + "px)"
            : "translateZ(" + bx.$checkNaN(parseInt(e.apxTrZ)) + "px)"),
        p
          ? (e.$CSS("transform", p),
            e.$O7L || e.$O7O
              ? e.$CSS(
                  "transformOrigin",
                  (e.$O7L || "50%") + " " + (e.$O7O || "50%")
                )
              : e.apxTrOrigin && e.$CSS("transformOrigin", e.apxTrOrigin))
          : e.$CSS("transform", "none");
    }
  }),
  (apn.CES.transformClear = function (e) {
    void 0 !== e.apxTrRotate && delete e.apxTrRotate,
      void 0 !== e.apxTrRotateX && delete e.apxTrRotateX,
      void 0 !== e.apxTrRotateZ && delete e.apxTrRotateZ,
      void 0 !== e.apxTrRotateY && delete e.apxTrRotateY,
      void 0 !== e.apxTrResize && delete e.apxTrResize,
      void 0 !== e.apxTrResizeX && delete e.apxTrResizeX,
      void 0 !== e.apxTrResizeY && delete e.apxTrResizeY,
      void 0 !== e.apxTrOrigin && delete e.apxTrOrigin,
      void 0 !== e.apxTrX && delete e.apxTrX,
      void 0 !== e.apxTrY && delete e.apxTrY,
      void 0 !== e.apxTrZ && delete e.apxTrZ,
      void 0 !== e.apxOriginX && delete e.apxOriginX,
      void 0 !== e.apxOriginY && delete e.apxOriginY;
  }),
  (apn.CES.$O5v = function (e) {
    return bx.$checkNaN(parseInt(e.style.width)) + apn.CES.$O5w(e);
  }),
  (apn.CES.$O5w = function (e) {
    return (
      bx.$checkNaN(parseInt(e.$css("padding-left"))) +
      bx.$checkNaN(parseInt(e.$css("padding-right"))) +
      bx.$checkNaN(parseInt(e.$css("border-left-width"))) +
      bx.$checkNaN(parseInt(e.$css("border-right-width")))
    );
  }),
  (apn.CES.$O5x = function (e) {
    return bx.$checkNaN(parseInt(e.style.height)) + apn.CES.$O5y(e);
  }),
  (apn.CES.$O5y = function (e) {
    return (
      bx.$checkNaN(parseInt(e.$css("padding-top"))) +
      bx.$checkNaN(parseInt(e.$css("padding-bottom"))) +
      bx.$checkNaN(parseInt(e.$css("border-top-width"))) +
      bx.$checkNaN(parseInt(e.$css("border-bottom-width")))
    );
  }),
  (apn.CES.$O6l = function (e) {
    return bx.HCL.DV.isIE() &&
      bx.HCL.DV.isIE() <= 8 &&
      e &&
      e.toLowerCase &&
      0 == e.toLowerCase().indexOf("rgba(")
      ? apn.CES.$O6z(e)
      : e;
  }),
  (apn.CES.ieColor = apn.CES.$O6l),
  (apn.CES.$O6z = function (e) {
    if (e && e.toLowerCase && 0 == e.toLowerCase().indexOf("rgba(")) {
      var t = e.substring(5).split(",");
      if (t.length >= 4)
        return 0 == bx.$checkNaN(parseFloat(t[3]))
          ? "transparent"
          : "rgb(" +
              bx.$checkNaN(parseInt(t[0])) +
              "," +
              bx.$checkNaN(parseInt(t[1])) +
              "," +
              bx.$checkNaN(parseInt(t[2])) +
              ")";
    }
    return e;
  }),
  (apn.CES.toRGB = apn.CES.$O6z),
  (apn.CES.$O6k = function (e) {
    if (
      bx.HCL.DV.isIE() &&
      bx.HCL.DV.isIE() <= 8 &&
      e &&
      e.toLowerCase &&
      0 == e.toLowerCase().indexOf("rgba(")
    ) {
      var t = e.substring(5).split(",");
      if (t.length >= 4) {
        if (0 == bx.$checkNaN(parseFloat(t[3]))) return "";
        var a,
          i = "";
        return (
          (a = new Number(
            Math.floor(255 * bx.$checkNaN(parseFloat(t[3])))
          ).toString(16)),
          (i += 1 == a.length ? "0" + a : a),
          (a = new Number(bx.$checkNaN(parseInt(t[0]))).toString(16)),
          (i += 1 == a.length ? "0" + a : a),
          (a = new Number(bx.$checkNaN(parseInt(t[1]))).toString(16)),
          (i += 1 == a.length ? "0" + a : a),
          (a = new Number(bx.$checkNaN(parseInt(t[2]))).toString(16)),
          (i += 1 == a.length ? "0" + a : a)
        );
      }
    }
    return "";
  }),
  (apn.CES.setupScrollY = function (e) {
    (e.style.overflowY = "auto"),
      bx.HCL.DV.hasTouchEvent() && e.$CSS("overflowScrolling", "touch"),
      (e.apnScroll = !0);
  }),
  (apn.CES.toRGBA = function (e, t) {
    var a = (g = b = 0);
    if (
      ((t = t || 0),
      (e = e || ""),
      (e = e.toLowerCase()),
      "#" == e[0] && 7 == e.length)
    )
      return (
        (a = parseInt("0x" + e.substring(1, 3))),
        (g = parseInt("0x" + e.substring(3, 5))),
        (b = parseInt("0x" + e.substring(5, 7))),
        "rgba(" + a + "," + g + "," + b + "," + t + ")"
      );
    if (0 == e.indexOf("rgb(")) {
      var i = e.substring(4).split(",");
      return (
        (a = parseInt(i[0])),
        (g = parseInt(i[1])),
        (b = parseInt(i[2])),
        "rgba(" + a + "," + g + "," + b + "," + t + ")"
      );
    }
    return e;
  }),
  (apn.CES.toRGBValue = function (e) {
    var t = (g = b = 0);
    if (((e = e || ""), (e = e.toLowerCase()), "#" == e[0] && 7 == e.length))
      (t = parseInt("0x" + e.substring(1, 3))),
        (g = parseInt("0x" + e.substring(3, 5))),
        (b = parseInt("0x" + e.substring(5, 7)));
    else if (0 == e.indexOf("rgb(")) {
      var a = e.substring(4).split(",");
      (t = parseInt(a[0])), (g = parseInt(a[1])), (b = parseInt(a[2]));
    }
    return { r: t, g: g, b: b };
  }),
  (apn.CES.prototype.init = function (e) {
    this.$O44();
  }),
  (apn.CES.prototype.zoom = function (e, t) {
    return (this.$O2O = e), (this.$O2P = t), !0;
  }),
  (apn.CES.prototype.getZoomX = function () {
    return this.$O2O;
  }),
  (apn.CES.prototype.getZoomY = function () {
    return this.$O2P;
  }),
  (apn.CES.prototype.getTagX = function (e) {
    var t = 0;
    for (
      void 0 === this.$Ocb && (this.$Ocb = bx.HCL.DV.isIE());
      e && e != this.tag;

    )
      (t += e.offsetLeft || bx.$checkNaN(parseInt(e.style.left))),
        (e = this.$Ocb ? e.parentNode : e.offsetParent || e.parentNode);
    return t;
  }),
  (apn.CES.prototype.getTagY = function (e) {
    var t = 0;
    for (
      void 0 === this.$Ocb && (this.$Ocb = bx.HCL.DV.isIE());
      e && e != this.tag;

    )
      (t += e.offsetTop || bx.$checkNaN(parseInt(e.style.top))),
        (e = this.$Ocb ? e.parentNode : e.offsetParent || e.parentNode);
    return t;
  }),
  (apn.CES.prototype.getPageID = function () {
    return this.$O1m;
  }),
  (apn.CES.prototype.getPageId = apn.CES.prototype.getPageID),
  (apn.CES.prototype.isPaused = function () {
    return this.$O6J;
  }),
  (apn.CES.prototype.setPaused = function (e) {
    this.$O6J = e;
  }),
  (apn.CES.prototype.dispatchPause = function () {
    this._eventOnPagePause(), this.$O3X("exeOnPause", this.getPageID());
  }),
  (apn.CES.prototype.$Ocj = function (e) {
    function t(a) {
      e
        ? ((a.apxCursorBackup = a.style.cursor), (a.style.cursor = "none"))
        : (a.apnCur && a.apnCur.cursor
            ? (a.style.cursor = a.apnCur.cursor)
            : a.apxCursorBackup
            ? (a.style.cursor = a.apxCursorBackup)
            : (a.style.cursor = "inherit"),
          void 0 !== a.apxCursorBackup && delete a.apxCursorBackup);
      for (var i = 0; i < a.childNodes.length; i++)
        1 == a.childNodes[i].nodeType && t(a.childNodes[i]);
    }
    t(this.tag);
  }),
  (apn.CES.prototype.applyCursor = apn.CES.prototype.$Ocj),
  (apn.CES.prototype.setCursor = function (e, t, a) {
    (this.$Ock = { url: e, cx: t || 0, cy: a || 0 }),
      this.$Ocl ||
        ((this.$Ocl = this.tag.$TAG("img", { style: "position:absolute;" })),
        this.$Ocl.$CSS("pointerEvents", "none"),
        this.tagPassPointerEvent(this.$Ocl, !0));
    var i = this;
    (this.$Ocl.onload = function () {
      i.$Ocl &&
        ((i.$Ocl.style.width =
          Math.round((1 / i.getZoomX()) * this.naturalWidth) + "px"),
        (i.$Ocl.style.height =
          Math.round((1 / i.getZoomY()) * this.naturalHeight) + "px"),
        (i.$Ock.cx = Math.round(i.$Ock.cx * (1 / i.getZoomX()))),
        (i.$Ock.cy = Math.round(i.$Ock.cy * (1 / i.getZoomY()))));
    }),
      (this.$Ocl.src = e),
      (this.$Ocl.style.display = "none"),
      (this.$Ocl.style.zIndex = 3 * bx.CCanvasWnd.ZINDEX_OBJECT),
      this.$Ocj(!0);
  }),
  (apn.CES.prototype.clearCursor = function () {
    this.$Ock &&
      (delete this.$Ock,
      this.$Ocj(),
      this.$Ocl.parentNode.removeChild(this.$Ocl),
      delete this.$Ocl);
  }),
  (apn.CES.prototype.eventBlock = function (e) {
    this.$O7P = e;
  }),
  (apn.CES.prototype.isEventBlocked = function () {
    return this.$O7P;
  }),
  (apn.CES.prototype.$O44 = function () {
    function e(e, t, i, n, r, o, s) {
      var p = bx.HCL.getElementX(a.tag),
        l = bx.HCL.getElementY(a.tag),
        d = bx.HCL.getElementX(a.viewer.getContainerTAG()),
        c = bx.HCL.getElementY(a.viewer.getContainerTAG());
      a.viewer.uOnGestureControl && a.viewer.uOnGestureControl(s, r - d, o - c);
      var g = i,
        u = n;
      if (
        ((i = a.viewer.onGestureCoordTransformX(r - d, o - c)),
        (n = a.viewer.onGestureCoordTransformY(r - d, o - c)),
        (a._lastEvTag = bx.Event.getElement(s)),
        (i += d),
        (n += c),
        (i -= p),
        (n -= l),
        (a.$Ocm = Math.round(i / (1 / a.$O2O))),
        (a.$Ocn = Math.round(n / (1 / a.$O2P))),
        a.startDrag &&
          (t == bx.CGesture.POINTER_DRAG || t == bx.CGesture.POINTER_END))
      ) {
        var h = a.startDrag,
          x = a.startDragX,
          f = a.startDragY;
        if (
          (a.$O46(h) || (x = !1),
          a.$O47(h) || (f = !1),
          t == bx.CGesture.POINTER_DRAG && (x || f))
        ) {
          if (
            (h.x_inDrag ||
              ((h.x_inDrag = !0),
              (a.inDragTag = h),
              h.$CSS({ transitionDuration: 0 })),
            a.viewer.uOnGestureDragControl && a.viewer.uOnGestureDragControl(s),
            !h.apxOnDrag ||
              h.apxOnDrag(
                a,
                h.x_dragSX + (i - h.x_inDragSX),
                h.x_dragSY + (n - h.x_inDragSY),
                i,
                n,
                s,
                i - (bx.HCL.getElementX2(h) - p),
                n - (bx.HCL.getElementY2(h) - l),
                i - (bx.HCL.getElementX2(h, !0) - p),
                n - (bx.HCL.getElementY2(h, !0) - l)
              ))
          ) {
            var y = h.x_dragW,
              v = h.x_dragH;
            if (x) {
              var C = h.x_dragSX + (i - h.x_inDragSX),
                b = 0;
              a.$O5z(h)
                ? C < 0
                  ? ((b = 0 - C), (C = 0))
                  : C > h.parentNode.clientWidth - y &&
                    ((b = h.parentNode.clientWidth - y - C),
                    (C = h.parentNode.clientWidth - y))
                : a.$O7Q(h) &&
                  (C > 0
                    ? ((b = -C), (C = 0))
                    : C < -(y - h.parentNode.clientWidth) &&
                      ((b = -C - (y - h.parentNode.clientWidth)),
                      (C = -(y - h.parentNode.clientWidth)))),
                h.apnOID &&
                  a.screen.objects[h.apnOID] &&
                  (a.$O5D(
                    a.screen.objects[h.apnOID],
                    apn.widgets.utils.$O3Z(i + b - h.x_inDragEX, 1 / a.$O2O),
                    void 0
                  ),
                  (a.screen.objects[h.apnOID].init.position.x +=
                    apn.widgets.utils.$O3Z(i + b - h.x_inDragEX, 1 / a.$O2O))),
                (h.style.left = C + "px"),
                (h.x_inDragEX = i + b);
            }
            if (f) {
              var _ = h.x_dragSY + (n - h.x_inDragSY),
                m = 0;
              a.$O5z(h)
                ? _ < 0
                  ? ((m = 0 - _), (_ = 0))
                  : _ > h.parentNode.clientHeight - v &&
                    ((m = h.parentNode.clientHeight - v - _),
                    (_ = h.parentNode.clientHeight - v))
                : a.$O7Q(h) &&
                  (_ > 0
                    ? ((m = -_), (_ = 0))
                    : _ < -(v - h.parentNode.clientHeight) &&
                      ((m = -_ - (v - h.parentNode.clientHeight)),
                      (_ = -(v - h.parentNode.clientHeight)))),
                h.apnOID &&
                  a.screen.objects[h.apnOID] &&
                  (a.$O5D(
                    a.screen.objects[h.apnOID],
                    void 0,
                    apn.widgets.utils.$O40(n + m - h.x_inDragEY, 1 / a.$O2P)
                  ),
                  (a.screen.objects[h.apnOID].init.position.y +=
                    apn.widgets.utils.$O40(n + m - h.x_inDragEY, 1 / a.$O2P))),
                (h.style.top = _ + "px"),
                (h.x_inDragEY = n + m);
            }
            (x || f) &&
              h.apnOID &&
              a.screen.objects[h.apnOID] &&
              (a.$O4a(h, "drag"),
              (apn.dbUI &&
                apn.dbUI.system &&
                apn.dbUI.system.exeApxMoveWgtByDOM) ||
                apn.IWidget.exeRenderPosition(
                  a,
                  h,
                  a.screen.objects[h.apnOID],
                  a.project,
                  1 / a.$O2O,
                  1 / a.$O2P
                ));
          }
        } else if (t == bx.CGesture.POINTER_END) {
          if (
            ((h.x_inDrag = !1),
            (a.inDragTag = null),
            (a.inDragLastTime = s.timeStamp),
            !h.apxOnDragEnd ||
              h.apxOnDragEnd(a, s) ||
              ((h.style.left = h.x_dragSX + "px"),
              (h.style.top = h.x_dragSY + "px"),
              h.apnOID &&
                a.screen.objects[h.apnOID] &&
                (x &&
                  (a.$O5D(
                    a.screen.objects[h.apnOID],
                    h.x_inDragScX - a.screen.objects[h.apnOID].init.position.x,
                    void 0,
                    !0
                  ),
                  (a.screen.objects[h.apnOID].init.position.x = h.x_inDragScX)),
                f &&
                  (a.$O5D(
                    a.screen.objects[h.apnOID],
                    void 0,
                    h.x_inDragScY - a.screen.objects[h.apnOID].init.position.y,
                    !0
                  ),
                  (a.screen.objects[h.apnOID].init.position.y =
                    h.x_inDragScY)))),
            h.apnOID && a.screen.objects[h.apnOID])
          ) {
            (apn.dbUI &&
              apn.dbUI.system &&
              apn.dbUI.system.exeApxMoveWgtByDOM) ||
              apn.IWidget.exeRenderPosition(
                a,
                h,
                a.screen.objects[h.apnOID],
                a.project,
                1 / a.$O2O,
                1 / a.$O2P,
                !0
              ),
              a.$O4a(h, "dragEnd"),
              (a.$O5E = h);
            var I,
              S = !1;
            if ((I = a.$O5A(h, i, n)))
              for (var P = 0; P < I.length; P++)
                a.$O4a(a.$O3d[I[P]], "dragDrop:" + h.apnOID),
                  a.$O5B(a.$O3d[I[P]], "dragDrop:" + h.apnOID) && (S = !0);
            S || a.$O5F({ result: !1 });
          }
          void 0 !== h._x_dragCssSel &&
            (h.$CSS("userSelect", h._x_dragCssSel), (h._x_dragCssSel = void 0)),
            (a.startDrag = null);
        }
      }
      if (
        ((t != bx.CGesture.POINTER_MOVE && t != bx.CGesture.POINTER_DRAG) ||
          ("mousemove" == s.type &&
            a.$Ock &&
            a.$Ocl &&
            ("none" == a.$Ocl.style.display && (a.$Ocl.style.display = "block"),
            (a.$Ocl.style.left = i - a.$Ock.cx + "px"),
            (a.$Ocl.style.top = n - a.$Ock.cy + "px"))),
        !a.$O7P)
      ) {
        var T;
        if (t == bx.CGesture.PINCH_END) {
          var w = s.targetTouches[0].clientX,
            E = s.targetTouches[0].clientY,
            V = a.viewer.onGestureCoordTransformX(
              s.targetTouches[0].clientX - d,
              s.targetTouches[0].clientY - c
            ),
            j = a.viewer.onGestureCoordTransformY(
              s.targetTouches[0].clientX - d,
              s.targetTouches[0].clientY - c
            );
          (V += d), (j += c), (V -= p), (j -= l);
          var D = r,
            L = o,
            A = Math.max(g, u),
            O = Math.max(D, L);
          O > A &&
          O / A >
            (a.viewer.__uPncDctInfo && a.viewer.__uPncDctInfo.ratioOut
              ? a.viewer.__uPncDctInfo.ratioOut
              : 1.5)
            ? a.$O48(apn.CExe.EV_PINCH_OUT, V, j, w, E, s, V, j)
            : O < A &&
              A / O >
                (a.viewer.__uPncDctInfo && a.viewer.__uPncDctInfo.ratioIn
                  ? a.viewer.__uPncDctInfo.ratioIn
                  : 1.5) &&
              a.$O48(apn.CExe.EV_PINCH_IN, V, j, w, E, s, V, j);
        } else if (t == bx.CGesture.MOUSE_OUT) {
          var R = s.toElement || s.relatedTarget;
          R && bx.Event.getElement(s).apnOID
            ? (!bx.DOM.IsDescendantOf(R, a.tag) ||
                (R.tagName && "iframe" == R.tagName.toLowerCase())) &&
              (a.$O6A(null),
              a.$O6B("pointerOut", bx.Event.getElement(s), r, o, s, i, n))
            : R ||
              (a.$O6E &&
                (a.$O6B("pointerOut", a.$O6E, r, o, s, i, n), (a.$O6E = null)));
        } else
          !a.inDragLastTime ||
          a.inDragLastTime != s.timeStamp ||
          (t != bx.CGesture.POINTER_FLICK_LEFT &&
            t != bx.CGesture.POINTER_FLICK_RIGHT &&
            t != bx.CGesture.POINTER_FLICK_UP &&
            t != bx.CGesture.POINTER_FLICK_DOWN)
            ? (a.$O48(t, i, n, r, o, s, i, n),
              a.viewer.IDriver_onGestureEvent &&
                a.viewer.IDriver_onGestureEvent(t, i, n, r, o, s, a),
              (T = !0),
              t == bx.CGesture.POINTER_END && (this.__drgStart2 = null))
            : (a.inDragLastTime = 0);
        a.$O4d(t, i, n, r, o, s),
          T &&
            a.viewer.IDriver_onPostGestureEvent &&
            a.viewer.IDriver_onPostGestureEvent(t, i, n, r, o, s, a);
      }
    }
    this.$Ocm = this.$Ocn = 0;
    var t,
      a = this,
      i = this.viewer.project.pages[this.page.id].UI.apnCExe;
    this.viewer.uOnGestureContainer && (t = this.viewer.uOnGestureContainer()),
      new bx.CGesture(this.tag, e, {
        noDelayedEvent: !0,
        noLongholdEvent: !this.viewer.o.useLongHold,
        pinchEvent: i && "Y" == i.evPch,
        dragContainer: t,
      });
  }),
  (apn.CES.prototype.$O4d = function (e, t, a, i, n, r) {
    if (e == bx.CGesture.POINTER_START) {
      var o = this.$O4e(e, t, a, i, n, r);
      if (o) {
        var s = this.getPageID();
        o.apnPID && o.apnPID != s
          ? (o = null)
          : o.parentNode &&
            (o.parentNode.apnPID && o.parentNode.apnPID != s
              ? (o = null)
              : o.parentNode.parentNode &&
                o.parentNode.parentNode.apnPID &&
                o.parentNode.parentNode.apnPID != s &&
                (o = null));
      }
      if (!o) return;
      this.__drgStart2 = o;
      var p = this._event2canScrollX(o, r),
        l = this._event2canScrollY(o, r),
        d = this.$O46(o),
        c = this.$O47(o);
      for (
        p && (d = !1), l && (c = !1);
        o && o != this.tag && !d && !c && (!p || !l);

      )
        (o = o.parentNode) &&
          (!p && this._event2canScrollX(o, r) && (p = !0),
          !l && this._event2canScrollY(o, r) && (l = !0),
          (d = this.$O46(o)),
          (c = this.$O47(o)),
          p && (d = !1),
          l && (c = !1));
      if (d || c)
        if (
          (this.viewer.uOnGestureDragStartControl &&
            this.viewer.uOnGestureDragStartControl(r),
          !o.apxOnDragStart ||
            o.apxOnDragStart(
              this,
              t,
              a,
              r,
              t - (bx.HCL.getElementX2(o) - bx.HCL.getElementX2(this.tag)),
              a - (bx.HCL.getElementY2(o) - bx.HCL.getElementY2(this.tag)),
              t - (bx.HCL.getElementX2(o, !0) - bx.HCL.getElementX2(this.tag)),
              a - (bx.HCL.getElementY2(o, !0) - bx.HCL.getElementY2(this.tag))
            ))
        ) {
          if (
            ((this.startDrag = o),
            (this.startDragX = d),
            (this.startDragY = c),
            o.apnOID && (this.viewer.isStretch() || apn.CExe.ACCEL(o)),
            o.apnOID &&
              this.screen.objects[o.apnOID] &&
              ((o.x_inDragScX = this.screen.objects[o.apnOID].init.position.x),
              (o.x_inDragScY = this.screen.objects[o.apnOID].init.position.y),
              this.$O4a(o, "dragStart")),
            (o.x_dragSX = parseInt(o.style.left) || 0),
            (o.x_dragSY = parseInt(o.style.top) || 0),
            o.apnOID && this.screen.objects[o.apnOID])
          ) {
            var g = this._getBoundingClientRect(o, o.x_dragSX, o.x_dragSY);
            (o.x_dragW = Math.abs(g.x2 - g.x1)),
              (o.x_dragH = Math.abs(g.y2 - g.y1)),
              (o.x_dragSX = g.x1),
              (o.x_dragSY = g.y1);
          } else (o.x_dragW = o.offsetWidth), (o.x_dragH = o.offsetHeight);
          (o.x_inDragSX = t),
            (o.x_inDragSY = a),
            (o.x_inDragEX = t),
            (o.x_inDragEY = a),
            "none" != o.$css("user-select")
              ? ((o._x_dragCssSel = o.$css("user-select")),
                o.$CSS("userSelect", "none"))
              : (o._x_dragCssSel = void 0);
        } else this.startDrag = null;
    }
  }),
  (apn.CES.prototype._getBoundingClientRect = function (e, t, a) {
    var i = {},
      n = this.screen.objects[e.apnOID],
      r = 1,
      o = 1;
    void 0 !== e.apxTrResizeX && 1 !== e.apxTrResizeX && (r = e.apxTrResizeX),
      void 0 !== e.apxTrResizeY && 1 !== e.apxTrResizeY && (o = e.apxTrResizeY);
    var s = e.offsetWidth * r,
      p = e.offsetHeight * o;
    return (
      (i = bx.CCanvasWnd.getEnclosingRect(
        0,
        0,
        s,
        p,
        n.create.data.styles.angle || 0,
        i,
        s * ((n.init.cx || 0) + 0.5),
        p * ((n.init.cy || 0) + 0.5)
      )),
      (t += (e.offsetWidth - s) / 2),
      (a += (e.offsetHeight - p) / 2),
      (i.x1 += t),
      (i.x2 += t),
      (i.y1 += a),
      (i.y2 += a),
      i
    );
  }),
  (apn.CES.prototype.$O5B = function (e, t) {
    var a = this.$O3g(t, e ? e.apnOID : void 0);
    if (a && a.length)
      for (var i = 0; i < a[0].length; i++)
        if ("FDR" == a[0][i].action) return !0;
    return (
      !!this.$Oco(t, e ? e.apnOID : void 0) ||
      !(!e || !e.apnOID || this.$O3u(e.apnOID, "acceptDrop") !== !0)
    );
  }),
  (apn.CES.prototype.$O5A = function (e, t, a) {
    function i(e, t) {
      return (
        s._getWgtZIndex(s.screen.objects[t].create) -
        s._getWgtZIndex(s.screen.objects[e].create)
      );
    }
    var n,
      r = this.$O5G(e.apnOID, !0);
    for (var o in this.$O3d)
      o != e.apnOID &&
        bx.DOM.isVisible(this.$O3d[o]) &&
        r == this.$O5G(o, !0) &&
        this.$O3u(o, "acceptDrop") !== !1 &&
        (void 0 !== this.$O3u(o, "acceptDrop") || this.$O5H("dragDrop", o)) &&
        apx.wgt.$O4u(this, e, this.$O3d[o]) &&
        ((n = n || []), n.push(o));
    var s = this;
    return (
      n && n.length > 1 && n.sort(i),
      this.stubOnCheckDropOnDrag ? this.stubOnCheckDropOnDrag(e, n) : n || null
    );
  }),
  (apn.CES.prototype.$O5C = function (e, t) {
    return (
      (!e || !e.apnBlockPointerEvent) &&
      (!!(
        e.apnOID &&
        this.screen.objects[e.apnOID] &&
        this.screen.objects[e.apnOID].create.data &&
        this.screen.objects[e.apnOID].create.data.styles &&
        this.screen.objects[e.apnOID].create.data.styles[t]
      ) ||
        !(!e.apxDragInfo || !e.apxDragInfo[t]))
    );
  }),
  (apn.CES.prototype._event2canScrollX = function (e, t) {
    if (
      "touchstart" == t.type &&
      e.apnScroll &&
      e.style &&
      "hidden" != e.style.overflowX &&
      e.scrollWidth > e.clientWidth
    )
      return !0;
  }),
  (apn.CES.prototype._event2canScrollY = function (e, t) {
    if (
      "touchstart" == t.type &&
      e.apnScroll &&
      e.style &&
      "hidden" != e.style.overflowY &&
      e.scrollHeight > e.clientHeight
    )
      return !0;
  }),
  (apn.CES.prototype.$O46 = function (e) {
    return this.$O5C(e, "dragX");
  }),
  (apn.CES.prototype.$O47 = function (e) {
    return this.$O5C(e, "dragY");
  }),
  (apn.CES.prototype.$O5z = function (e) {
    return this.$O5C(e, "dragInParent");
  }),
  (apn.CES.prototype.$O7Q = function (e) {
    return this.$O5C(e, "dragContainParent");
  }),
  (apn.CES.prototype.$O6C = function (e, t) {
    var a = this.$O3g(t, e ? e.apnOID : void 0);
    if (a && a.length) return !0;
    if (this.$Oco(t, e ? e.apnOID : void 0)) return !0;
    if (e && ("pointerOver" == t || "pointerOut" == t)) {
      if (e.apnOID && this.$O3u(e.apnOID, "acceptMouseOver") === !0) return !0;
      if (e.apxOnEventOver) return !0;
    }
    return !1;
  }),
  (apn.CES.prototype.$O5d = function (e) {
    if (
      e.apnCur &&
      e.apnCur.Event2Holder &&
      !(
        e.apxOnEvent ||
        e.apxOnGesture ||
        e.apxOnDragStart ||
        e.apxOnDrag ||
        e.apxOnDragEnd
      )
    )
      return !0;
  }),
  (apn.CES.prototype.$O49 = function (e, t, a, i, n, r, o) {
    if (this.$O5d(e)) return !0;
    for (var s = !1, p = e; p && p != this.tag; ) {
      if (p.apnPassPointerEvent && p.apnPassPointerEventButHit) {
        s = !0;
        break;
      }
      if (p.apnPassPointerEvent) return !0;
      p = p.parentNode;
    }
    if (
      "pointerOut" != o &&
      e.apnOID &&
      this.$O1m == e.apnPID &&
      this.screen.objects[e.apnOID]
    ) {
      var l = apn.Project.getWidgetModule(
        this.screen.objects[e.apnOID].create.data
      );
      if (l && l.exeDetect) {
        var d =
            bx.HCL.getElementX2(this.$O3d[e.apnOID], !0) -
            bx.HCL.getElementX2(this.tag, !0),
          c =
            bx.HCL.getElementY2(this.$O3d[e.apnOID], !0) -
            bx.HCL.getElementY2(this.tag, !0);
        if (
          !l.exeDetect(
            this.project,
            this.$O3d[e.apnOID],
            this.screen.objects[e.apnOID],
            this.viewer.selectMargin,
            (n - d - (e.wgt_dx || 0)) * this.getZoomX(),
            (r - c - (e.wgt_dy || 0)) * this.getZoomY()
          )
        )
          return !0;
        p.apnPassPointerEvent && p.apnPassPointerEventButHit && (s = !0);
      }
    }
    return !!s && 1;
  }),
  (apn.CES.prototype.event2checkPass = apn.CES.prototype.$O49),
  (apn.CES.prototype.$O4a = function (e, t) {
    return (
      !(!e || !e.apnBlockPointerEvent) ||
      this.eventExe(t, e ? e.apnOID : void 0)
    );
  }),
  (apn.CES.prototype.$O4e = function (e, t, a, i, n, r, o) {
    if (void 0 === i || void 0 === n) var s = null;
    else if (document.elementsFromPoint || document.msElementsFromPoint) {
      if (document.msElementsFromPoint)
        var p = document.msElementsFromPoint(i, n);
      else var p = document.elementsFromPoint(i, n);
      var l,
        s = null;
      if (p && p.length)
        for (
          var d = 0;
          d < p.length &&
          ((s = p[d]),
          s.apnPassPointerEventButHit && (l = !0),
          s.apnHitCsr && (l = !0),
          this.$O49(s, i, n, r, t, a)) &&
          (o && s.apnPassPointerEventButHit && o(s),
          s != this.tag && s != this.tag.ownerDocument);
          d++
        );
      var c,
        g = bx.HCL.DV.isIE();
      if ((l || (g && g <= 10)) && (c = s || this.tag)) {
        if (!c.apnOID || ("inherit" == c.$css("cursor") && !c.apnHitCsr))
          for (var u = c; u && u != this.tag; ) {
            if ("inherit" != u.$css("cursor")) {
              c = u;
              break;
            }
            if (((u = u.parentNode), u && u.apnOID)) {
              c = u;
              break;
            }
          }
        var h,
          x = c.apnHitCsr || c.$css("cursor");
        if (p && p.length) {
          var f;
          for (
            d = 0;
            d < p.length &&
            (p[d].apnOID &&
              ((f = !1),
              p[d].apnPassPointerEventButHit &&
                this.wgtGetProperty(p[d].apnOID, "apxCursor") &&
                (f = !0),
              this.$O49(p[d], i, n, r, t, a) &&
                !f &&
                ((p[d].style.cursor = x),
                (h = p[d]),
                (p[d].apnCur = p[d].apnCur || {}),
                (p[d].apnCur._apxCsrChangedForIE10 = !0))),
            c != p[d]);
            d++
          );
        }
        !h && c.apnHitCsr && ((c.style.cursor = x), (c.apnCur.cursor = x)),
          c.apnCur &&
            c.apnCur.orgCursor &&
            c.apnCur._apxCsrChangedForIE10 &&
            (apn.IWidget.exeSetCursor(c, c.apnCur.orgCursor),
            (c.apnCur._apxCsrChangedForIE10 = !1));
      }
    } else {
      this.$O4e.$O4c = this.$O4e.$O4c || [];
      var s = document.elementFromPoint(i, n),
        y =
          bx.HCL.DV.isIE() && bx.HCL.DV.isIE() < 10
            ? document.activeElement
            : void 0;
      for (
        y &&
        y.tagName &&
        ("input" == y.tagName.toLowerCase() ||
          "textarea" == y.tagName.toLowerCase()) &&
        (y.apxIeIgnoreFocusEvent = !0);
        s &&
        this.$O49(s, i, n, r, t, a) &&
        (o && s.apnPassPointerEventButHit && o(s),
        (s.style.visibility = "hidden"),
        this.$O4e.$O4c.push(s),
        (s = document.elementFromPoint(i, n)),
        s != this.tag && s != this.tag.ownerDocument);

      );
      if (this.$O4e.$O4c.length)
        for (var d = 0; d < this.$O4e.$O4c.length; d++)
          this.$O4e.$O4c[d].style.visibility = "visible";
      y &&
        y.apxIeIgnoreFocusEvent &&
        (y.focus(),
        setTimeout(function () {
          y.apxIeIgnoreFocusEvent = !1;
        }, 0)),
        (this.$O4e.$O4c.length = 0);
    }
    if (o) {
      var v = s;
      !this.startDrag ||
      (e != bx.CGesture.POINTER_DRAG && e != bx.CGesture.POINTER_END)
        ? this.__drgStart2 &&
          e == bx.CGesture.POINTER_END &&
          (v = this.__drgStart2)
        : (v = this.startDrag),
        v &&
          v.apxOnGesture &&
          (v.apnBlockPointerEvent || v.apxOnGesture(this, e));
    }
    return s;
  }),
  (apn.CES.prototype.$O48 = function (e, t, a, i, n, r) {
    function o(e) {
      s && p.$O6B(s, e, i, n, r, t, a);
    }
    var s,
      p = this;
    s = this.$O3G(e);
    var l = this.$O4e(e, t, a, i, n, r, o);
    if (l) {
      if (!s) return null;
      if (
        (("click" != s && "tapStart" != s) || this.viewer.initAutoplay(),
        "_pointerMove" == s)
      ) {
        var d = this.$O6D("pointerOver", l),
          c = this.$O6A(d || l);
        c &&
          c.pointerOut &&
          this.$O6B("pointerOut", c.pointerOut, i, n, r, t, a),
          c &&
            c.pointerOver &&
            this.$O6B("pointerOver", c.pointerOver, i, n, r, t, a);
      } else this.$O6B(s, l, i, n, r, t, a);
    }
  });
apn.CES.prototype.$O6B = function (e, t, a, i, n, r, o) {
  for (
    var s = !1, p = !1, l = t;
    l &&
    l != this.tag &&
    (this.$O49(l, a, i, n, r, o, e) !== !0 &&
      ("pointerOver" == e || "pointerOut" == e
        ? l.apxOnEventOver &&
          (s =
            !!l.apnBlockPointerEvent ||
            l.apxOnEventOver(this, "pointerOver" == e, n))
        : l.apxOnEvent &&
          (s =
            !!l.apnBlockPointerEvent ||
            l.apxOnEvent(
              this,
              e,
              a,
              i,
              r * this.getZoomX(),
              o * this.getZoomY(),
              n
            ))),
    !s);

  )
    l = l.parentNode;
  for (
    l = t;
    l &&
    l != this.tag &&
    (this.$O49(l, a, i, n, r, o, e) !== !0 &&
      l.apnOID &&
      this.$O1m == l.apnPID &&
      this.screen.objects[l.apnOID] &&
      (p = this.$O4a(l, e)),
    !p);

  )
    l = l.parentNode;
  l == this.tag && (s || p || this.$O4a(void 0, e));
};
(apn.CES.prototype.$O6D = function (e, t) {
  if (!this.screen) return null;
  for (var a = t; a && a != this.tag; ) {
    if (a.apnOID && this.$O1m == a.apnPID && this.screen.objects[a.apnOID]) {
      if (this.$O6C(a, e)) return a;
    } else if (("pointerOver" == e || "pointerOut" == e) && a.apxOnEventOver)
      return a;
    a = a.parentNode;
  }
  return null;
}),
  (apn.CES.prototype.$O6A = function (e) {
    if (this.$O6E) {
      if (this.$O6E != e) {
        var t = { pointerOut: this.$O6E };
        return (
          (this.$O6E = null),
          e &&
            (e.apnOID || e.apxOnEventOver) &&
            ((this.$O6E = e), (t.pointerOver = e)),
          t
        );
      }
    } else if (e && (e.apnOID || e.apxOnEventOver))
      return (this.$O6E = e), { pointerOver: e };
  }),
  (apn.CES.prototype.toEvtScreenX = function (e) {
    return e - bx.HCL.getElementX2(this.tag);
  }),
  (apn.CES.prototype.toEvtScreenY = function (e) {
    return e - bx.HCL.getElementY2(this.tag);
  }),
  (apn.CES.prototype.$O34 = function (e, t, a, i) {
    function n() {
      o++, r == o && t();
    }
    var r = e.length,
      o = 0;
    if (t && 0 == r) return void t();
    for (var s = 0; s < e.length; s++)
      i && "FCE" == e[s].action && (e[s].src = i),
        this.$O35(e[s], t ? n : void 0, a);
  }),
  (apn.CES.prototype.$O35 = function (e, t, a, i) {
    if (
      ("LTP" == e.action &&
        "1" == e.to.type &&
        this.getPageID() != e.to.pageID &&
        (this.$O3X("exeOnPreLinkToPage"),
        this.$O5e && (e.$O3y = e.$O3y ? e.$O3y + this.$O5e : this.$O5e)),
      e.$O3y)
    ) {
      var n = this,
        r = this.setTimeout(function () {
          n.$O5I(r), n.$O7K || n.$O3i(e, t, a, i);
        }, e.$O3y);
      return this.$O5J(r, i || e.action, e.$Ocp), !0;
    }
    return this.$O3i(e, t, a, i);
  }),
  (apn.CES.prototype.isRunByScript = function () {
    return "SPT" == this._lastWorkType;
  }),
  (apn.CES.prototype.$O3i = function (e, t, a, i) {
    this._lastWorkType = i;
    var n = !0;
    switch (e.action) {
      case "LTP":
        e.to && e.to.pageID == this.getPageID() && (e.to.reset = !0),
          this.viewer.run(e);
        break;
      case "LTH":
        var r = {
          to: { pageID: this.viewer.$O36(), reset: e.reset },
          transit: bx.$cloneObject({}, e.transit),
        };
        (r.transit.effect = apn.Project.resolveProperty(
          this.viewer.project,
          "trEffectBackward",
          r.transit.effect
        )),
          this.viewer.run(r);
        break;
      case "LTB":
        if (this.viewer.$O2J.uLinkToPrev)
          this.viewer.$O2J.uLinkToPrev(this.getPageID());
        else if (void 0 !== this.viewer.$O2J.getPrev()) {
          var r = {
            to: { pageID: this.viewer.$O2J.getPrev(), reset: e.reset },
            transit: bx.$cloneObject({}, e.transit),
          };
          this.viewer.run(r, void 0, !0);
        } else
          this.viewer.showLoading(
            "No page to go back in history.",
            apn.CExe.TIME_TOASTMSG_ERROR
          );
        break;
      case "CWP":
        this.$O3j(e, t, a, i) || (n = !1);
        break;
      case "CWS":
        this.$O3r(e) || (n = !1);
        break;
      case "FDR":
        this.$O5F(e) || (n = !1);
        break;
      case "FCE":
        this.__opFCE(e) || (n = !1);
        break;
      case "URL":
        this.$O6F(e, t) || (n = !1);
        break;
      case "CMT":
    }
    return (
      n ||
        (bx.Trace.log("APN", "error", "Invalid ITR", "CES.runInteraction"),
        bx.Trace.data(e)),
      n
    );
  }),
  (apn.CES.prototype.$O3s = function (e, t, a, i) {
    function n(e, a) {
      return t.states
        ? void 0 === t.states[e].order && void 0 === t.states[a].order
          ? 0
          : void 0 === t.states[e].order
          ? 1
          : void 0 === t.states[a].order
          ? -1
          : t.states[e].order - t.states[a].order
        : t.layers
        ? void 0 === t.layers[e].order && void 0 === t.layers[a].order
          ? 0
          : void 0 === t.layers[e].order
          ? 1
          : void 0 === t.layers[a].order
          ? -1
          : t.layers[e].order - t.layers[a].order
        : void 0;
    }
    var r,
      o = apn.Project.getWidgetModule(this.screen.objects[i].create.data);
    if (o && o.exeOnGetStateList) var s = o.exeOnGetStateList(this, i);
    else {
      var p,
        s = [];
      if (1 == apn.Project.checkStateType(t))
        for (r in t.states) s.push(r), void 0 !== t.states[r].order && (p = !0);
      else if (2 == apn.Project.checkStateType(t))
        for (r in t.layers) s.push(r), void 0 !== t.layers[r].order && (p = !0);
      p && s.sort(n);
    }
    var l;
    for (r = 0; r < s.length; r++)
      if (s[r] == a) {
        l = r;
        break;
      }
    if (void 0 === l) {
      if (!(o && o.exeOnGetStateList && s.length))
        return (
          bx.Trace.log(
            "APN",
            "warning",
            "Invalid current state=" + a,
            "CES.opCWS"
          ),
          bx.Trace.data(t),
          null
        );
      "$RF" == e || "$F" == e
        ? (l = 0)
        : ("$RB" != e && "$B" != e) || (l = s.length - 1);
    }
    return "$RF" == e
      ? s[(l + 1) % s.length]
      : "$RB" == e
      ? s[(l - 1 + s.length) % s.length]
      : "$F" == e
      ? l + 1 < s.length
        ? s[l + 1]
        : null
      : "$B" == e
      ? l - 1 >= 0
        ? s[l - 1]
        : null
      : (bx.Trace.log("APN", "warning", "Invalid state=" + e, "CES.opCWS"),
        null);
  }),
  (apn.CES.prototype.$O3k = function (e) {
    return "$RB" == e || "$B" == e;
  }),
  (apn.CES.prototype.$O3r = function (e) {
    function t() {
      s.screen &&
        (s.$O3p(s.screen, a, i),
        (o.$O7R = (o.$O7R || 0) - 1),
        o.$O7R < 0 && (o.$O7R = 0));
    }
    if (
      e.target &&
      e.target.stateID &&
      this.screen.objects[e.target.objectID]
    ) {
      if (0 == e.target.stateID.indexOf("$APX"))
        return (
          this.wgtSetProperty(
            e.target.objectID,
            "apxState",
            e.target.stateID.substring(4),
            void 0,
            e.stateInitialize ? { stateInitialize: !0 } : void 0
          ),
          !0
        );
      var a;
      a = this.screen.objects[e.target.objectID].layout;
      var i = e.target.stateID,
        n = this.$O3l(e.target.objectID);
      if (
        (i && "$" == i.charAt(0) && (i = this.$O3s(i, a, n, e.target.objectID)),
        null === i)
      )
        return !0;
      if (1 == apn.Project.checkStateType(a)) {
        e.timing
          ? apn.Project.resolveTiming(this.project, e.timing)
          : e.transit &&
            ((e.timing = e.transit),
            delete e.timing.effect,
            apn.Project.resolveTiming(this.project, e.timing));
        var r,
          o = this.$O3d[e.target.objectID];
        r = this.$O3n(
          this.project,
          this.screen,
          a,
          n,
          i,
          e.timing,
          o.apnCur.ver
        );
        var s = this;
        return (
          r && r.length && ((o.$O7R = (o.$O7R || 0) + 1), this.$O34(r, t)),
          this.$O3m(e.target.objectID, i, e.stateInitialize),
          !0
        );
      }
      if (2 != apn.Project.checkStateType(a)) return !1;
      e.transit &&
        apn.Project.resolveTransit(
          this.project,
          e.transit,
          apn.CES.prototype.$O3k(e.target.stateID)
        );
      var p = this.$O3d[e.target.objectID];
      if (bx.PageDrag && bx.PageDrag.isInTransit(p)) return !0;
      if (void 0 !== p.$O7S) return !0;
      if (bx.PageTransition.isInTransit(p)) {
        if (p.apnTransitITR == e) return !0;
        bx.PageTransition.abort(p);
      }
      if (this.$O3l(e.target.objectID) == i) return !0;
      var l = this.$O3d[this.$O3q(e.target.objectID, i)],
        d =
          this.$O3d[this.$O3q(e.target.objectID, this.$O3l(e.target.objectID))];
      if (p && l && d) {
        var s = this,
          c = p.style.overflow;
        return (
          "visible" == c && "fall" == e.transit.effect
            ? (p.onBxPageTransitionStart = function () {
                this.style.overflow = "visible";
              })
            : delete p.onBxPageTransitionStart,
          (p.onBxPageTransitionEnd = function (t) {
            (p.style.overflow = c),
              s.$O4f(e.target.objectID, i),
              s.$O3m(e.target.objectID, i, e.stateInitialize);
          }),
          (e.transit = e.transit || { effect: "none" }),
          (!e.transit.duration || e.transit.duration < 50) &&
            (e.transit.effect = "none"),
          "none" == e.transit.effect && (e.transit.duration = 1),
          (p.apnTransitITR = e),
          "none" != e.transit.effect
            ? ((p.$O7S = setTimeout(function () {
                (l.style.opacity = 1),
                  delete p.$O7S,
                  bx.PageTransition(
                    p,
                    l,
                    d,
                    e.transit.effect,
                    e.transit.duration,
                    e.transit.timing ? { timing: e.transit.timing } : void 0
                  );
              }, 0)),
              (l.style.display = "block"),
              (l.style.opacity = 0))
            : (bx.PageTransition(
                p,
                l,
                d,
                e.transit.effect,
                e.transit.duration,
                e.transit.timing ? { timing: e.transit.timing } : void 0
              ),
              (l.style.display = "block")),
          !0
        );
      }
      console.error(
        "[" +
          apn.CExe.SW_TITLE +
          "]\r\n[Error] Interaction(" +
          e.title +
          ") is on the removed object!"
      );
    }
    return !1;
  }),
  (apn.CES.$O5L = function (e, t, a, i, n, r, o, s) {
    var p = Math.sqrt(Math.pow(n - a, 2) + Math.pow(r - i, 2)),
      l = Math.atan2(n - a, i - r),
      d = 1;
    switch (((t = t || 1), e)) {
      case "arcCW":
        d = 1;
        break;
      case "arcCCW":
        d = -1;
    }
    var c = -(p / 2) * Math.cos(o * Math.PI) + p / 2,
      g = -((t * p) / 2) * Math.sin(o * Math.PI) * d;
    (s.x = apn.CES.$O5M(0, 0, l - Math.PI / 2, c, g) + a),
      (s.y = apn.CES.$O5N(0, 0, l - Math.PI / 2, c, g) + i);
  }),
  (apn.CES.prototype.__clearTagTR = function (e) {
    if (e.apnTRs)
      for (var t in e.apnTRs) {
        var a = (e.apnTRs[t] + "").split(":");
        2 == a.length && bx.Transition.end(parseInt(a[0]), a[1]),
          delete e.apnTRs[t];
      }
  }),
  (apn.CES.prototype.$O7T = function (e, t) {
    if (e.apnTRs && e.apnTRs[t]) {
      var a = (e.apnTRs[t] + "").split(":");
      2 == a.length && bx.Transition.end(parseInt(a[0]), a[1]),
        delete e.apnTRs[t];
    }
  }),
  (apn.CES.prototype.$O6G = function (e, t, a, i) {
    if (t) {
      (apn.CES.$O5Q = apn.CES.$O5Q || 0),
        apn.CES.$O5Q++,
        (t.id = "TMR$" + apn.CES.$O5Q),
        (e.apnTRs = e.apnTRs || {});
      var n = this;
      return (
        (t.onEnd = function (e) {
          if (
            (!e.element.REFRESH_ON_RESIZE ||
              (void 0 === e.styles.width && void 0 === e.styles.height) ||
              apn.IWidget.exeRenderSize(
                n.viewer,
                n,
                e.element,
                n.screen.objects[e.element.apnOID],
                n.project,
                1 / n.$O2O,
                1 / n.$O2P
              ),
            n.$O7V)
          )
            for (var t in n.$O7V)
              if (e.id == t.split(":")[1]) {
                delete n.$O7V[t];
                break;
              }
          i && setTimeout(i, 0);
        }),
        (t.onCancel = function (e) {
          if (n.$O7V)
            for (var t in n.$O7V)
              if (e.id == t.split(":")[1]) {
                delete n.$O7V[t];
                break;
              }
        }),
        (e.apnTRs[a] = bx.Transition.add(t) + ":" + t.id),
        e.apnTRs[a]
      );
    }
  }),
  (apn.CES.prototype.$O7U = function (e, t) {
    e &&
      ((this.$O7V = this.$O7V || {}),
      (this.$O7V[e] = t && t._autoClear ? "AC" : "Y"));
  }),
  (apn.CES.prototype.$O7W = function () {
    if (this.$O7V) {
      for (var e in this.$O7V)
        if (this.$O7V[e]) {
          var t = e.split(":");
          2 == t.length &&
            ("AC" == this.$O7V[e]
              ? bx.Transition.cancel(parseInt(t[0]), t[1])
              : bx.Transition.end(parseInt(t[0]), t[1]));
        }
      delete this.$O7V;
    }
  }),
  (apn.CES.prototype.$O3j = function (e, t, a, i) {
    function n(e, t) {
      return {
        element: e,
        timing: apn.CES.toBxTiming(t.timing),
        time: parseInt(t.duration),
        styles: {},
        roundUp: t.roundUp,
        wait: bx.$checkNaN(parseFloat(t.wait)) / 100,
      };
    }
    function r(t, a, i) {
      apn.CES.$O5L(e.trace.type, e.trace.ratio, L, A, j, D, i, O);
    }
    function o(e, t, a) {
      O.use && (a = O.x),
        S.$O5D(
          S.screen.objects[e.apnOID],
          a - S.screen.objects[e.apnOID].init.position.x,
          void 0
        ),
        (S.screen.objects[e.apnOID].init.position.x = a);
    }
    function s(e, t, a) {
      O.use && (a = O.y),
        S.$O5D(
          S.screen.objects[e.apnOID],
          void 0,
          a - S.screen.objects[e.apnOID].init.position.y
        ),
        (S.screen.objects[e.apnOID].init.position.y = a);
    }
    function p(e, t, a) {
      apn.IWidget.exeRenderPosition(
        S,
        e,
        S.screen.objects[e.apnOID],
        S.project,
        1 / S.$O2O,
        1 / S.$O2P,
        1 == a
      );
    }
    function l(t, a, i) {
      apn.CES.$O5L(e.trace.type, e.trace.ratio, 0, 0, W, B, i, F);
    }
    function d(e, t, a) {
      F.use && (a = F.x),
        S.$O5D(S.screen.objects[e.apnOID], a - N, void 0),
        (S.screen.objects[e.apnOID].init.position.x += a - N),
        (N = a);
    }
    function c(e, t, a) {
      F.use && (a = F.y),
        S.$O5D(S.screen.objects[e.apnOID], void 0, a - G),
        (S.screen.objects[e.apnOID].init.position.y += a - G),
        (G = a);
    }
    function g(e, t, a) {
      apn.IWidget.exeRenderPosition(
        S,
        e,
        S.screen.objects[e.apnOID],
        S.project,
        1 / S.$O2O,
        1 / S.$O2P,
        1 == a
      );
    }
    function u(e, t, a) {
      S.screen.objects[e.apnOID].init.shape.w = a;
    }
    function h(e, t, a) {
      (S.screen.objects[e.apnOID].init.shape.h = a),
        apn.IWidget.exeRenderSize(
          S.viewer,
          S,
          e,
          S.screen.objects[e.apnOID],
          S.project,
          1 / S.$O2O,
          1 / S.$O2P,
          !1,
          !0
        );
    }
    function x(e, t, a) {
      apn.CES.transformSet(e, "resizeX", a);
    }
    function f(e, t, a) {
      apn.CES.transformSet(e, "resizeY", a), apn.CES.transformApply(e);
    }
    function y(e, t, a) {
      (S.screen.objects[e.apnOID].init.shape.w += a - q),
        S.screen.objects[e.apnOID].init.shape.w < 1 &&
          (S.screen.objects[e.apnOID].init.shape.w = 1),
        (q = a);
    }
    function v(e, t, a) {
      (S.screen.objects[e.apnOID].init.shape.h += a - J),
        S.screen.objects[e.apnOID].init.shape.h < 1 &&
          (S.screen.objects[e.apnOID].init.shape.h = 1),
        (J = a),
        apn.IWidget.exeRenderSize(
          S.viewer,
          S,
          e,
          S.screen.objects[e.apnOID],
          S.project,
          1 / S.$O2O,
          1 / S.$O2P,
          !1,
          !0
        );
    }
    function C(e, t, a) {
      "px0" == t
        ? (S.screen.objects[e.apnOID].init.shape.x[0] = a)
        : "py0" == t
        ? (S.screen.objects[e.apnOID].init.shape.y[0] = a)
        : "px1" == t
        ? (S.screen.objects[e.apnOID].init.shape.x[1] = a)
        : "py1" == t
        ? (S.screen.objects[e.apnOID].init.shape.y[1] = a)
        : "x" == t && (S.screen.objects[e.apnOID].init.position.x = a);
    }
    function b(e, t, a) {
      (S.screen.objects[e.apnOID].init.position.y = a),
        T &&
          T.exeRenderTag &&
          T.exeRenderTag(
            S.viewer,
            S,
            e,
            S.screen.objects[e.apnOID],
            1 / S.$O2O,
            1 / S.$O2P
          );
    }
    function _(e, t, a) {
      (S.screen.objects[e.apnOID].create.data.styles.alpha = a),
        apn.IWidget.exeSetAlpha(e, a);
    }
    function m(t, a, i) {
      (S.screen.objects[t.apnOID].create.data.styles.angle = i),
        e.set.angle2
          ? apn.IWidget.exeSetAngle(
              t,
              i,
              S.screen.objects[t.apnOID].init,
              e.set.angle2.cx,
              e.set.angle2.cy,
              void 0,
              S
            )
          : apn.IWidget.exeSetAngle(t, i, void 0, void 0, void 0, !0, S);
    }
    var I,
      S = this,
      P = !1;
    if (e.target && e.set && (I = this.$O3d[e.target.objectID])) {
      var T = apn.Project.getWidgetModule(
        this.screen.objects[e.target.objectID].create.data
      );
      T &&
        (T.exeItrNoResize &&
          (e.set.size && delete e.set.size,
          e.set.sizeBy && delete e.set.sizeBy),
        T.exeItrNoZoom && e.set.zoom && delete e.set.zoom),
        e.set.line &&
          this.screen.objects[e.target.objectID].init.shape.type !=
            bx.CCanvasWnd.SHAPE_LINE &&
          delete e.set.line;
      var w;
      if (
        (e.timing &&
          (apn.Project.resolveTiming(this.project, e.timing),
          e.timing.roundUp &&
            !parseInt(e.timing.duration) &&
            (e.timing.duration = 1)),
        (T && T.exeItrNoText) ||
          (void 0 !== e.set.text &&
            this.wgtSetProperty(e.target.objectID, "apxText", e.set.text),
          void 0 !== e.set.textColor &&
            (apn.IWidget.exeSetFontStyle(I, e.set.textColor),
            this.wgtSetProperty(
              e.target.objectID,
              "apxTextColor",
              e.set.textColor
            ))),
        void 0 !== e.set.value &&
          this.sptWgtSetProp(e.target.objectID, "value", e.set.value),
        e.set.drag)
      ) {
        this.screen.objects[e.target.objectID].create.data =
          this.screen.objects[e.target.objectID].create.data || {};
        var E = this.screen.objects[e.target.objectID].create.data;
        (E.styles = E.styles || {}),
          void 0 !== e.set.drag.dragX &&
            (E.styles.dragX = "Yes" == e.set.drag.dragX),
          void 0 !== e.set.drag.dragY &&
            (E.styles.dragY = "Yes" == e.set.drag.dragY),
          "SPT" == i
            ? (void 0 !== e.set.drag.dragInParent &&
                (E.styles.dragInParent =
                  "Yes" == e.set.drag.dragInParent ||
                  "In" == e.set.drag.dragInParent),
              void 0 !== e.set.drag.dragContainParent &&
                (E.styles.dragContainParent =
                  "Contain" == e.set.drag.dragInParent))
            : ((E.styles.dragInParent =
                "Yes" == e.set.drag.dragInParent ||
                "In" == e.set.drag.dragInParent),
              (E.styles.dragContainParent =
                "Contain" == e.set.drag.dragInParent)),
          this.$O46(I) || this.$O47(I)
            ? (I.apnDragCsr = !0)
            : (I.apnDragCsr = !1),
          apn.IWidget.exeSetCursor(I, I.apnCur.orgCursor);
      }
      if (e.set.extended)
        for (var V in e.set.extended)
          this.wgtSetProperty(e.target.objectID, V, e.set.extended[V]);
      if (
        (void 0 !== e.set.visibility &&
          ("Hide" != e.set.visibility && e.set.visibility !== !1
            ? (I.$Ocq && (clearTimeout(I.$Ocq), (I.$Ocq = null)),
              (I.style.display = "block"),
              "Pass" == e.set.visibility || 1 === e.set.visibility
                ? (this.tagPassPointerEvent(I, !0),
                  this.tagBlockPointerEvent(I, !1))
                : "Block" == e.set.visibility || 2 === e.set.visibility
                ? (this.tagPassPointerEvent(I, !1),
                  this.tagBlockPointerEvent(I, !0))
                : (this.tagPassPointerEvent(I, !1),
                  this.tagBlockPointerEvent(I, !1)),
              apn.IWidget.exeSetCursor(I, I.apnCur.orgCursor),
              T &&
                T.exeOnShow &&
                T.exeOnShow(this, e.target.objectID, !0, e.event),
              this._exeOnWgtVisibilityChange(e.target.objectID, !0))
            : (e.event &&
              e.event.indexOf &&
              ("tapStart" == e.event || e.event.indexOf(";tapStart;") != -1)
                ? (I.$Ocq = setTimeout(function () {
                    (I.style.display = "none"), (I.$Ocq = null);
                  }, 0))
                : (I.style.display = "none"),
              T &&
                T.exeOnShow &&
                T.exeOnShow(this, e.target.objectID, !1, e.event),
              this._exeOnWgtVisibilityChange(e.target.objectID, !1)),
          this.wgtSetProperty(
            e.target.objectID,
            "apxVisibility",
            e.set.visibility
          ),
          I.apnCur && (I.apnCur.apxColDectectOn = !0),
          (this._apxColDectectOn = !0)),
        e.set.media &&
          e.set.media.toLowerCase &&
          apn.IWidget.hasMediaControl(this, I) &&
          this.wgtControlMedia(I.apnOID, e.set.media.toLowerCase()),
        "O" == e.set.pBk &&
          this.$O3u(I.apnOID, "orgPos") &&
          (e.set.position = this.$O3u(I.apnOID, "orgPos")),
        e.set.position &&
          (void 0 !== e.set.position.x || void 0 !== e.set.position.y))
      ) {
        var j = isNaN(parseFloat(e.set.position.x))
            ? this.screen.objects[I.apnOID].init.position.x
            : parseFloat(e.set.position.x),
          D = isNaN(parseFloat(e.set.position.y))
            ? this.screen.objects[I.apnOID].init.position.y
            : parseFloat(e.set.position.y);
        this.$O7T(I, "position");
        var L = this.screen.objects[I.apnOID].init.position.x,
          A = this.screen.objects[I.apnOID].init.position.y,
          O = { x: 0, y: 0 };
        if (j != L || D != A)
          if (
            e.timing &&
            e.timing.timing &&
            "none" != e.timing.timing &&
            parseInt(e.timing.duration)
          ) {
            this.viewer.isStretch() || apn.CExe.ACCEL(I);
            var R = n(I, e.timing);
            e.trace &&
              "none" != e.trace.type &&
              e.trace.ratio > 0 &&
              ((O.use = !0), (R.styles.trace = { from: 0, to: 1, unit: r })),
              (R.styles.x = { from: L, to: j, unit: o }),
              (R.styles.y = { from: A, to: D, unit: s }),
              (R.styles.end = { from: 0, to: 1, unit: p }),
              this.$O7U(this.$O6G(I, R, "position", P ? void 0 : t), e),
              (P = !0);
          } else o(I, "x", j), s(I, "y", D), p(I, "end", 1);
      }
      if (
        e.set.sizeBy &&
        (void 0 !== e.set.sizeBy.w || void 0 !== e.set.sizeBy.h)
      )
        if (e.set.sizeBy.origin) {
          var M = bx.$checkNaN(parseFloat(e.set.sizeBy.w)),
            k = bx.$checkNaN(parseFloat(e.set.sizeBy.h));
          (M || k) &&
            (e.set.positionBy = {
              x: -M * (e.set.sizeBy.origin.x || 0),
              y: -k * (e.set.sizeBy.origin.y || 0),
            }),
            delete e.set.sizeBy.origin;
        } else if (e.set.sizeBy.originCenter) {
          var M = bx.$checkNaN(parseFloat(e.set.sizeBy.w)),
            k = bx.$checkNaN(parseFloat(e.set.sizeBy.h));
          (M || k) && (e.set.positionBy = { x: -M / 2, y: -k / 2 }),
            delete e.set.sizeBy.originCenter;
        }
      if (
        e.set.positionBy &&
        (void 0 !== e.set.positionBy.x || void 0 !== e.set.positionBy.y)
      ) {
        var W = bx.$checkNaN(parseFloat(e.set.positionBy.x)),
          B = bx.$checkNaN(parseFloat(e.set.positionBy.y)),
          N = 0,
          G = 0,
          F = { x: 0, y: 0 };
        if (
          e.forceQueue ||
          (e.timing &&
            e.timing.timing &&
            "none" != e.timing.timing &&
            parseInt(e.timing.duration))
        ) {
          this.viewer.isStretch() || apn.CExe.ACCEL(I);
          var U = n(I, e.timing);
          e.trace &&
            "none" != e.trace.type &&
            e.trace.ratio > 0 &&
            ((F.use = !0), (U.styles.trace = { from: 0, to: 1, unit: l })),
            (U.styles.dx = { from: 0, to: W, unit: d }),
            (U.styles.dy = { from: 0, to: B, unit: c }),
            (U.styles.end = { from: 0, to: 1, unit: g }),
            this.$O7U(this.$O6G(I, U, "positionBy", P ? void 0 : t), e),
            (P = !0);
        } else d(I, "dx", W), c(I, "dy", B), g(I, "end", 1);
      }
      if (e.set.size && e.set.size.w && e.set.size.h) {
        var H = isNaN(parseInt(e.set.size.w))
            ? this.screen.objects[I.apnOID].init.shape.w
            : parseInt(e.set.size.w),
          z = isNaN(parseInt(e.set.size.h))
            ? this.screen.objects[I.apnOID].init.shape.h
            : parseInt(e.set.size.h);
        if (
          e.timing &&
          e.timing.timing &&
          "none" != e.timing.timing &&
          parseInt(e.timing.duration)
        ) {
          this.viewer.isStretch() || apn.CExe.ACCEL(I);
          var X = n(I, e.timing);
          this.$O7T(I, "size"),
            (X.styles.width = {
              from: this.screen.objects[I.apnOID].init.shape.w,
              to: H,
              unit: u,
            }),
            (X.styles.height = {
              from: this.screen.objects[I.apnOID].init.shape.h,
              to: z,
              unit: h,
            }),
            this.$O7U(this.$O6G(I, X, "size", P ? void 0 : t), e),
            (P = !0);
        } else
          this.$O7T(I, "size"),
            this.$O6G(I, null, "size"),
            u(I, "width", H),
            h(I, "height", z);
      }
      if (e.set.trOrg) {
        var Y = bx.$checkNaN(parseFloat(e.set.trOrg.orgX)),
          $ = bx.$checkNaN(parseFloat(e.set.trOrg.orgY));
        (this.screen.objects[I.apnOID].init.cx = apn.CES._sptOrX2CrX(
          this.screen.objects[I.apnOID],
          Y
        )),
          (this.screen.objects[I.apnOID].init.cy = apn.CES._sptOrY2CrY(
            this.screen.objects[I.apnOID],
            $
          ));
      }
      if (e.set.zoom && e.set.zoom.w && e.set.zoom.h) {
        var H = isNaN(parseFloat(e.set.zoom.w)) ? 1 : parseFloat(e.set.zoom.w),
          z = isNaN(parseFloat(e.set.zoom.h)) ? 1 : parseFloat(e.set.zoom.h);
        if (
          (apn.CES.transformSet(
            I,
            "origin",
            apn.IWidget.exeGetTrOrigin(
              this.screen.objects[I.apnOID].init,
              this.screen.objects[I.apnOID].init.cx || 0,
              this.screen.objects[I.apnOID].init.cy || 0
            )
          ),
          e.timing &&
            e.timing.timing &&
            "none" != e.timing.timing &&
            parseInt(e.timing.duration))
        ) {
          this.viewer.isStretch() || apn.CExe.ACCEL(I);
          var Z = n(I, e.timing);
          this.$O7T(I, "zoom"),
            (Z.styles.scaleX = { from: I.apxTrResizeX || 1, to: H, unit: x }),
            (Z.styles.scaleY = { from: I.apxTrResizeY || 1, to: z, unit: f }),
            this.$O7U(this.$O6G(I, Z, "zoom", P ? void 0 : t), e),
            (P = !0);
        } else
          this.$O7T(I, "zoom"),
            this.$O6G(I, null, "zoom"),
            x(I, "scaleX", H),
            f(I, "scaleY", z);
      }
      if (
        e.set.sizeBy &&
        (void 0 !== e.set.sizeBy.w || void 0 !== e.set.sizeBy.h)
      ) {
        var M = bx.$checkNaN(parseFloat(e.set.sizeBy.w)),
          k = bx.$checkNaN(parseFloat(e.set.sizeBy.h)),
          q = 0,
          J = 0;
        if (
          e.forceQueue ||
          (e.timing &&
            e.timing.timing &&
            "none" != e.timing.timing &&
            parseInt(e.timing.duration))
        ) {
          this.viewer.isStretch() || apn.CExe.ACCEL(I);
          var K = n(I, e.timing);
          (K.styles.dw = { from: 0, to: M, unit: y }),
            (K.styles.dh = { from: 0, to: k, unit: v }),
            this.$O7U(this.$O6G(I, K, "sizeBy", P ? void 0 : t), e),
            (P = !0);
        } else y(I, "dw", M), v(I, "dh", k);
      }
      if (
        e.set.line &&
        (6 == e.set.line.length ||
          (void 0 !== e.set.line.x1 &&
            void 0 !== e.set.line.y1 &&
            void 0 !== e.set.line.x2 &&
            void 0 !== e.set.line.y2))
      )
        if (
          e.forceQueue ||
          (e.timing &&
            e.timing.timing &&
            "none" != e.timing.timing &&
            parseInt(e.timing.duration))
        ) {
          var Q = n(I, e.timing),
            ee = this.screen.objects[I.apnOID].init;
          if ((this.$O7T(I, "line"), 6 == e.set.line.length))
            (Q.styles.px0 = {
              from: ee.shape.x[0],
              to: e.set.line[2],
              unit: C,
            }),
              (Q.styles.py0 = {
                from: ee.shape.y[0],
                to: e.set.line[3],
                unit: C,
              }),
              (Q.styles.px1 = {
                from: ee.shape.x[1],
                to: e.set.line[4],
                unit: C,
              }),
              (Q.styles.py1 = {
                from: ee.shape.y[1],
                to: e.set.line[5],
                unit: C,
              }),
              (Q.styles.x = {
                from: ee.position.x,
                to: e.set.line[0],
                unit: C,
              }),
              (Q.styles.y = {
                from: ee.position.y,
                to: e.set.line[1],
                unit: b,
              });
          else {
            var te = Math.min(e.set.line.x1, e.set.line.x2),
              ae = Math.min(e.set.line.y1, e.set.line.y2);
            (Q.styles.px0 = {
              from: ee.shape.x[0],
              to: e.set.line.x1 - te,
              unit: C,
            }),
              (Q.styles.py0 = {
                from: ee.shape.y[0],
                to: e.set.line.y1 - ae,
                unit: C,
              }),
              (Q.styles.px1 = {
                from: ee.shape.x[1],
                to: e.set.line.x2 - te,
                unit: C,
              }),
              (Q.styles.py1 = {
                from: ee.shape.y[1],
                to: e.set.line.y2 - ae,
                unit: C,
              }),
              (Q.styles.x = { from: ee.position.x, to: te, unit: C }),
              (Q.styles.y = { from: ee.position.y, to: ae, unit: b });
          }
          this.$O7U(this.$O6G(I, Q, "line", P ? void 0 : t), e), (P = !0);
        } else {
          var ee = this.screen.objects[I.apnOID].init;
          if (
            (this.$O7T(I, "line"),
            this.$O6G(I, null, "line"),
            6 == e.set.line.length)
          )
            (ee.shape.x[0] = e.set.line[2]),
              (ee.shape.y[0] = e.set.line[3]),
              (ee.shape.x[1] = e.set.line[4]),
              (ee.shape.y[1] = e.set.line[5]),
              (ee.position.x = e.set.line[0]),
              b(I, "y", e.set.line[1]);
          else {
            var te = Math.min(e.set.line.x1, e.set.line.x2),
              ae = Math.min(e.set.line.y1, e.set.line.y2);
            (ee.shape.x[0] = e.set.line.x1 - te),
              (ee.shape.y[0] = e.set.line.y1 - ae),
              (ee.shape.x[1] = e.set.line.x2 - te),
              (ee.shape.y[1] = e.set.line.y2 - ae),
              (ee.position.x = te),
              b(I, "y", ae);
          }
        }
      if (void 0 !== e.set.alpha)
        if (
          ((e.set.alpha = parseFloat(e.set.alpha) || 0),
          e.forceQueue ||
            (e.timing &&
              e.timing.timing &&
              "none" != e.timing.timing &&
              parseInt(e.timing.duration)))
        )
          if ((this.viewer.isStretch() || apn.CExe.ACCEL(I), a))
            w || (w = n(I, e.timing)),
              (w.styles.alpha = {
                from: parseFloat(
                  apn.Project.resolveStyle(
                    this.project,
                    "alpha",
                    this.screen.objects[I.apnOID].create.data.styles.alpha
                  )
                ),
                to: Math.max(0, Math.min(1, e.set.alpha)),
                unit: _,
              });
          else {
            var ie = n(I, e.timing);
            this.$O7T(I, "alpha"),
              (ie.styles.alpha = {
                from: parseFloat(
                  apn.Project.resolveStyle(
                    this.project,
                    "alpha",
                    this.screen.objects[I.apnOID].create.data.styles.alpha
                  )
                ),
                to: Math.max(0, Math.min(1, e.set.alpha)),
                unit: _,
              }),
              this.$O7U(this.$O6G(I, ie, "alpha", P ? void 0 : t), e),
              (P = !0);
          }
        else
          a || (this.$O7T(I, "alpha"), this.$O6G(I, null, "alpha")),
            _(I, "alpha", Math.max(0, Math.min(1, e.set.alpha)));
      if (void 0 !== e.set.angle) {
        "object" == typeof e.set.angle
          ? ((e.set.angle2 = e.set.angle), (e.set.angle = e.set.angle2.angle))
          : apn.CES.transformSet(
              I,
              "origin",
              apn.IWidget.exeGetTrOrigin(
                this.screen.objects[I.apnOID].init,
                this.screen.objects[I.apnOID].init.cx || 0,
                this.screen.objects[I.apnOID].init.cy || 0
              )
            ),
          (e.set.angle = parseFloat(e.set.angle) || 0);
        var ne = !1;
        if (
          (!e.set.angle2 ||
            (I.apnCur.trCX == e.set.angle2.cx &&
              I.apnCur.trCY == e.set.angle2.cy) ||
            (ne = !0),
          !ne &&
            (e.forceQueue ||
              (e.timing &&
                e.timing.timing &&
                "none" != e.timing.timing &&
                parseInt(e.timing.duration))))
        )
          if ((this.viewer.isStretch() || apn.CExe.ACCEL(I), a))
            w || (w = n(I, e.timing)),
              (w.styles.angle = {
                from: apn.Project.resolveStyle(
                  this.project,
                  "angle",
                  this.screen.objects[I.apnOID].create.data.styles.angle
                ),
                to: e.set.angle,
                unit: m,
              });
          else {
            var re = n(I, e.timing);
            this.$O7T(I, "angle"),
              (re.styles.angle = {
                from: apn.Project.resolveStyle(
                  this.project,
                  "angle",
                  this.screen.objects[I.apnOID].create.data.styles.angle
                ),
                to: e.set.angle,
                unit: m,
              }),
              this.$O7U(this.$O6G(I, re, "angle", P ? void 0 : t), e),
              (P = !0);
          }
        else
          a || (this.$O7T(I, "angle"), this.$O6G(I, null, "angle")),
            m(I, "angle", e.set.angle);
      }
      if (void 0 !== e.set.zIndex) {
        var oe;
        "top" == e.set.zIndex || "Top" == e.set.zIndex
          ? (oe = this.$O3v() + 1)
          : "bottom" == e.set.zIndex || "Bottom" == e.set.zIndex
          ? (oe = this.$O3w() - 1)
          : "restore" == e.set.zIndex || "Restore" == e.set.zIndex
          ? void 0 === (oe = this.$O3u(I.apnOID, "orgZindex")) &&
            (oe = this._getWgtZIndex(this.screen.objects[I.apnOID].create))
          : (oe = parseInt(e.set.zIndex)),
          this._setWgtZIndex(I, void 0, oe);
      }
      return (
        e.set.animation &&
          ("Play" == e.set.animation || "Loop" == e.set.animation
            ? this.wgtAniCheck(e.target.objectID) &&
              this.wgtAniRun(
                e.target.objectID,
                "Play" == e.set.animation ? 1 : 2
              )
            : this.wgtAniSet(e.target.objectID)),
        w
          ? ((w.onEnd = function (e) {
              !e.element.REFRESH_ON_RESIZE ||
                (void 0 === e.styles.width && void 0 === e.styles.height) ||
                apn.IWidget.exeRenderSize(
                  S.viewer,
                  S,
                  e.element,
                  S.screen.objects[e.element.apnOID],
                  S.project,
                  1 / S.$O2O,
                  1 / S.$O2P
                ),
                t && setTimeout(t, 0);
            }),
            (apn.CES.$O5Q = apn.CES.$O5Q || 0),
            apn.CES.$O5Q++,
            (w.id = "TMR$" + apn.CES.$O5Q),
            this.$O7U(bx.Transition.add(w) + ":" + w.id, e))
          : P || (t && t()),
        !0
      );
    }
    return (
      t && t(),
      bx.Trace.log(
        "APN",
        "error",
        "Invalid CWP tag=" + I,
        "CES.runInteraction"
      ),
      !1
    );
  }),
  (apn.CES.prototype.$O5F = function (e) {
    if (this.$O5E) {
      var t = this;
      return (
        setTimeout(function () {
          t.$O4a(
            t.$O5E,
            "dragDropResult:" + (e.result ? "Accepted" : "Rejected")
          );
        }, 0),
        !0
      );
    }
    return !1;
  }),
  (apn.CES.prototype.__opFCE = function (e) {
    return (
      !!e.param && (this.sptFireCustomEvent(e.param, void 0, !0, void 0, e), !0)
    );
  }),
  (apn.CES.prototype.$O6F = function (e) {
    return (
      !!(this.viewer.IDevice_linkToURL && e.target && e.target.objectID) &&
      ("$URL_CF" == e.target.objectID
        ? this.viewer.IDevice_linkToURL(e.url, "currentFrame")
        : "$URL_CW" == e.target.objectID
        ? this.viewer.IDevice_linkToURL(e.url, "currentTab")
        : "$URL_NW" == e.target.objectID &&
          this.viewer.IDevice_linkToURL(e.url, "newTab"))
    );
  }),
  (apn.CES.toBxTiming = function (e, t) {
    if (e && "x" == (e + "")[0]) return e;
    switch (e) {
      case "ease":
        return "inOutQuad";
      case "ease-in":
        return "inCubic";
      case "ease-out":
        return "outCubic";
      case "ease-in-out":
        return "inOutCubic";
      default:
        return t && "linear" != e ? "" : "linear";
    }
  }),
  (apn.CES.prototype.$O5H = function (e, t) {
    var a = apn.Project.findITRs(this.project, this.$O1m, t);
    if (a && a.length)
      for (var i = 0; i < a.length; i++)
        if (0 == a[i].event.indexOf(e)) return !0;
    return !!this.$Oco(e, t);
  }),
  (apn.CES.prototype.$O3g = function (e, t) {
    function a(e, t) {
      return void 0 === e.cases && void 0 === t.cases
        ? 0
        : void 0 === e.cases
        ? 1
        : void 0 === t.cases
        ? -1
        : e.cases - t.cases;
    }
    function i(e, t) {
      return void 0 === e.order && void 0 === t.order
        ? 0
        : void 0 === e.order
        ? 1
        : void 0 === t.order
        ? -1
        : e.order - t.order;
    }
    var n = apn.Project.findITRs(this.project, this.$O1m, t);
    if (!n) return null;
    (n = n.concat()),
      e.indexOf && 0 == e.indexOf("spt_Custom:")
        ? (e = decodeURIComponent(e))
        : e.indexOf &&
          0 == e.indexOf("wgtEvent:") &&
          (e = decodeURIComponent(e));
    var r;
    if (apn.P.isObjectCompositeSysEV(e)) {
      var o = apn.P.resolveCompositeSysEV(e);
      if ("$ELSE" != o.param) {
        for (r = 0; r < n.length && n[r].event != e; r++);
        r == n.length && (e = o.ev + ":$ELSE");
      }
    }
    for (r = 0; r < n.length; r++) n[r].event != e && (n.splice(r, 1), r--);
    if (0 == n.length) return null;
    n.sort(a);
    var s = [];
    for (s.push(n), r = 0; r < s.length; r++)
      1 == s[r].length && "WAT" == s[r][0].action && (s.splice(r, 1), r--);
    var p, l;
    for (r = 0; r < s.length; r++)
      for (l = 0, s[r].sort(i), p = 0; p < s[r].length; p++)
        "WAT" == s[r][p].action && s[r][p].timing
          ? ((l += bx.$checkNaN(parseInt(s[r][p].timing.duration))),
            s[r].splice(p, 1),
            p--)
          : (s[r][p].$O3y = l);
    return s;
  }),
  (apn.CES.prototype.$Oco = function (e, t) {
    return apn.Project.getSPT(this.project, this.$O1m, t, e);
  }),
  (apn.CES.prototype.$O3z = function () {
    (this.$O3A = {}), (this.$O3B = {});
  }),
  (apn.CES.prototype.$O3t = function (e, t, a) {
    void 0 !== e
      ? ((this.$O3A[e] = this.$O3A[e] || {}), (this.$O3A[e][t] = a))
      : (this.$O3B[t] = a);
  }),
  (apn.CES.prototype.$O3u = function (e, t) {
    return void 0 === e
      ? this.$O3B[t]
      : this.$O3A[e]
      ? this.$O3A[e][t]
      : void 0;
  }),
  (apn.CES.prototype.$O5q = function () {
    for (var e in this.$O3d)
      this.wgtGetProperty(e, "apxFixOverPage") &&
        ((this.$O3d[e].apxParentPO = this.$O3d[e].parentNode),
        this.viewer.$O2J.tag.appendChild(this.$O3d[e]));
  }),
  (apn.CES.prototype.$O5r = function () {
    for (var e in this.$O3d)
      this.$O3d[e].apxParentPO &&
        (this.$O3d[e].apxParentPO.appendChild(this.$O3d[e]),
        delete this.$O3d[e].$O6I);
  }),
  (apn.CES.prototype.pageOverEnd = apn.CES.prototype.$O5r),
  (apn.CES.prototype.$O5s = function () {
    for (var e in this.$O3d)
      this.wgtGetProperty(e, "apxFixOverPage") &&
        ((this.$O5O =
          this.$O5O || this.tag.$TAG("div", { style: "display:none" })),
        (this.$O3d[e].apxParentPO = this.$O3d[e].parentNode),
        this.$O5O.appendChild(this.$O3d[e]));
  }),
  (apn.CES.prototype.$O3C = function () {
    var e, t, a;
    this.$O3z();
    for (e in this.screen.objects)
      if (
        ((a = this.screen.objects[e]),
        a.layout && a.layout.children && a.layout.children.length)
      )
        for (t = 0; t < a.layout.children.length; t++)
          this.screen.objects[a.layout.children[t]] &&
            this.$O3t(a.layout.children[t], "parent", e);
    for (e in this.screen.objects)
      (a = this.screen.objects[e]),
        a.init.shape.type == bx.CCanvasWnd.SHAPE_RECT
          ? ((a.x_o_w = a.init.shape.w), (a.x_o_h = a.init.shape.h))
          : a.init.shape.type == bx.CCanvasWnd.SHAPE_LINE &&
            ((a.x_o_w = Math.abs(a.init.shape.x[1] - a.init.shape.x[0]) + 1),
            (a.x_o_h = Math.abs(a.init.shape.y[1] - a.init.shape.y[0]) + 1)),
        this.$O3t(e, "orgPos", { x: a.init.position.x, y: a.init.position.y });
    for (e in this.screen.objects)
      (a = this.screen.objects[e]),
        "apn.CScrollContainer" == a.module && this.$ObI(a);
    for (e in this.screen.objects)
      if (
        ((a = this.screen.objects[e]),
        1 == apn.Project.checkStateType(a.layout))
      )
        this.$O3t(e, "activeState", a.layout.state),
          this.$O3p(this.screen, a.layout, a.layout.state);
      else if (2 == apn.Project.checkStateType(a.layout)) {
        this.$O3t(e, "activeState", a.create.data.styles.state);
        for (t in a.layout.layers)
          t != a.create.data.styles.state
            ? this.$O3t(a.layout.layers[t].id, "isHidden", !0)
            : this.$O3t(a.layout.layers[t].id, "isHidden", !1),
            "apn.CScrollContainer" != a.module &&
              bx.$copyObject(
                this.screen.objects[a.layout.layers[t].id].init,
                a.init
              );
      }
    for (e in this.screen.objects)
      (a = this.screen.objects[e]),
        a.create.data &&
          a.create.data.styles &&
          this.$O3t(e, "visibility", a.create.data.styles.visibility),
        this.$O3t(e, "orgZindex", a.create.zIndex);
  }),
  (apn.CES.prototype.$Ocr = function (e) {
    var t, a;
    if (
      ((a = this.screen.objects[e]),
      a.layout && a.layout.children && a.layout.children.length)
    )
      for (t = 0; t < a.layout.children.length; t++)
        this.screen.objects[a.layout.children[t]] &&
          this.$O3t(a.layout.children[t], "parent", e);
    if (
      (a.init.shape.type == bx.CCanvasWnd.SHAPE_RECT
        ? ((a.x_o_w = a.init.shape.w), (a.x_o_h = a.init.shape.h))
        : a.init.shape.type == bx.CCanvasWnd.SHAPE_LINE &&
          ((a.x_o_w = Math.abs(a.init.shape.x[1] - a.init.shape.x[0]) + 1),
          (a.x_o_h = Math.abs(a.init.shape.y[1] - a.init.shape.y[0]) + 1)),
      "apn.CScrollContainer" == a.module && this.$ObI(a),
      1 == apn.Project.checkStateType(a.layout))
    )
      this.$O3t(e, "activeState", a.layout.state),
        this.$O3p(this.screen, a.layout, a.layout.state);
    else if (2 == apn.Project.checkStateType(a.layout)) {
      this.$O3t(e, "activeState", a.create.data.styles.state);
      for (t in a.layout.layers)
        t != a.create.data.styles.state
          ? this.$O3t(a.layout.layers[t].id, "isHidden", !0)
          : this.$O3t(a.layout.layers[t].id, "isHidden", !1),
          "apn.CScrollContainer" != a.module &&
            bx.$copyObject(
              this.screen.objects[a.layout.layers[t].id].init,
              a.init
            );
    }
    a.create.data &&
      a.create.data.styles &&
      this.$O3t(e, "visibility", a.create.data.styles.visibility),
      this.$O3t(e, "orgZindex", a.create.zIndex);
  }),
  (apn.CES.prototype.$ObI = function (e, t, a, i, n) {
    var r, o, s;
    if (
      ((r = this.screen.objects[e.layout.layers[1].id]),
      (r.init.position.x = e.init.position.x),
      (r.init.position.y = e.init.position.y),
      t && a)
    )
      (r.init.shape.w = Math.max(t, e.init.shape.w)),
        (r.init.shape.h = Math.max(a, e.init.shape.h));
    else if (
      ((r.init.shape.w = e.init.shape.w),
      (r.init.shape.h = e.init.shape.h),
      r.layout)
    ) {
      if (i) {
        for (var p, l = [], d = 0; d < r.layout.children.length; d++)
          (p = apn.Project.resolveStyle(
            this.project,
            "visibility",
            this.wgtGetProperty(r.layout.children[d], "apxVisibility")
          )),
            "Hide" != p && p !== !1 && l.push(r.layout.children[d]);
        var c = this.$O3D(void 0, l);
      } else var c = this.$O3D(void 0, r.layout.children);
      (o = c.x - r.init.position.x),
        (s = c.y - r.init.position.y),
        (r.init.shape.w = Math.max(r.init.shape.w, c.w + o)),
        (r.init.shape.h = Math.max(r.init.shape.h, c.h + s));
    }
    return (
      n && n.paddingBottom && (r.init.shape.h += n.paddingBottom),
      n && n.paddingRight && (r.init.shape.w += n.paddingRight),
      (r.x_o_w = e.init.shape.w),
      (r.x_o_h = e.init.shape.h),
      e.layout.layers[1].id
    );
  }),
  (apn.CES.prototype.$O3E = function (e) {
    function t() {
      i.viewer.$Ocg &&
        (i.tag &&
          void 0 !== i.tag.$Ocs &&
          ((i.tag.style.opacity = i.tag.$Ocs), delete i.tag.$Ocs),
        (i.viewer.$Ocg.style.display = "none")),
        i._pageLoadRefCount && i.$O3I();
    }
    var a = this._preloadAssetsCount();
    if (a && this.viewer.$Ocf && !e) {
      this.viewer.$Ocg &&
        ((this.tag.$Ocs = this.tag.style.opacity),
        (this.tag.style.opacity = 0),
        (this.viewer.$Ocg.style.display = "block"));
      var i = this;
      this.viewer.$Ocg &&
        apn.dbUI &&
        apn.dbUI.system &&
        apn.dbUI.system.exePostPageCreateOnPreload &&
        this.viewer.constructor == apn.CExe &&
        i.eventOnPageLoad_setRefCount(2),
        this.$Oct(t);
    } else this.$Oct();
    var n;
    for (n in this.screen.objects) this.$Ocu(n);
  }),
  (apn.CES.prototype.$Ocu = function (e) {
    var t = this.$O3d[e];
    this.$O3u(e, "isHidden") && (t.style.display = "none"),
      this.$O3u(e, "visibility") === !1
        ? (t.style.display = "none")
        : 1 === this.$O3u(e, "visibility")
        ? (this.tagPassPointerEvent(t, !0),
          apn.IWidget.exeSetCursor(t, t.apnCur.orgCursor))
        : 2 === this.$O3u(e, "visibility") &&
          (this.tagBlockPointerEvent(t, !0),
          apn.IWidget.exeSetCursor(t, t.apnCur.orgCursor));
  }),
  (apn.CES.prototype.$O5o = function (e, t) {
    var a = bx.$cloneObject({}, this.viewer.project.orgPages[e]);
    (this.viewer.project.pages[e] = a),
      this.$O1B(a, this.viewer.project, e, void 0, t);
  }),
  (apn.CES.prototype.run = apn.CES.prototype.$O5o),
  (apn.CES.prototype.$O37 = function () {
    this.$O5o(this.$O1m, !0), (this.$O41 = !0);
  }),
  (apn.CES.prototype.reset = apn.CES.prototype.$O37),
  (apn.CES.prototype.$O5n = function (e) {
    if (!e) {
      this.setPaused(!1);
      var t;
      for (var a in this.screen.objects)
        (t = apn.Project.getWidgetModule(this.screen.objects[a].create.data)),
          t &&
            t.exeSetState &&
            this.wgtGetProperty(a, "apxState") &&
            null !==
              t.exeSetState(
                this,
                this.$O3d[a],
                this.wgtGetProperty(a, "apxState"),
                void 0,
                !0
              ) &&
            t.exeFireStateEvent &&
            this.fireEvent(
              "stateChange",
              "$APX" + this.wgtGetProperty(a, "apxState"),
              a,
              void 0,
              void 0,
              void 0,
              !0
            );
      for (var a in this.screen.objects)
        (t = apn.Project.getWidgetModule(this.screen.objects[a].create.data)),
          t &&
            t.exeSetState &&
            apn.Project.checkStateType(this.screen.objects[a].layout) &&
            !t.BLACKBOX_MODEL &&
            t.exeSetState(this, this.$O3d[a], this.$O3l(a), void 0, !0);
      this.$O3X("exeOnStart", this.$O1m);
    }
    this.tag.style.visibility = "visible";
  }),
  (apn.CES.prototype.startProcess = apn.CES.prototype.$O5n),
  (apn.CES.prototype.$O3D = function (e, t, a) {
    var i, n, r, o, s;
    (a = a || { x: 0, y: 0, w: 1, h: 1 }),
      e &&
        (s = this.screen.objects[e]) &&
        ((i = s.init.position.x),
        (n = s.init.position.y),
        (r = s.init.position.x + s.init.shape.w),
        (o = s.init.position.y + s.init.shape.h));
    for (var p, l, d, c, g = {}, u = 0; u < t.length; u++)
      (s = this.screen.objects[t[u]]) &&
        ((p = s.init.position.x),
        (l = s.init.position.y),
        s.init.shape.type == bx.CCanvasWnd.SHAPE_LINE
          ? ((d =
              s.init.position.x +
              Math.abs(s.init.shape.x[1] - s.init.shape.x[0]) +
              1),
            (c =
              s.init.position.y +
              Math.abs(s.init.shape.y[1] - s.init.shape.y[0]) +
              1))
          : ((d = s.init.position.x + s.init.shape.w),
            (c = s.init.position.y + s.init.shape.h)),
        apn.Project.isWidget(s.create.data) &&
          void 0 !== s.create.data.styles.angle &&
          ((s.create.data.styles.angle = bx.$checkNaN(
            parseFloat(s.create.data.styles.angle)
          )),
          bx.CCanvasWnd.getEnclosingRect(
            p,
            l,
            d - p,
            c - l,
            s.create.data.styles.angle,
            g
          ),
          void 0 !== g.x1 && (p = g.x1),
          void 0 !== g.y1 && (l = g.y1),
          void 0 !== g.x2 && (d = g.x2),
          void 0 !== g.y2 && (c = g.y2)),
        (void 0 === i || i > p) && (i = p),
        (void 0 === n || n > l) && (n = l),
        (void 0 === r || r < d) && (r = d),
        (void 0 === o || o < c) && (o = c));
    return (
      void 0 !== i && ((a.x = i), (a.y = n), (a.w = r - i), (a.h = o - n)), a
    );
  }),
  (apn.CES.prototype.getAreaOfGroup = apn.CES.prototype.$O3D),
  (apn.CExe.EV_PINCH_IN = 901),
  (apn.CExe.EV_PINCH_OUT = 902),
  (apn.CES.prototype.$O3G = function (e) {
    var t = null;
    switch (e) {
      case bx.CGesture.POINTER_TAP:
        t = "click";
        break;
      case bx.CGesture.POINTER_START:
        t = "tapStart";
        break;
      case bx.CGesture.POINTER_HOLD:
        t = "longHold";
        break;
      case apn.CExe.EV_PINCH_IN:
        t = "pinchIn";
        break;
      case apn.CExe.EV_PINCH_OUT:
        t = "pinchOut";
        break;
      case bx.CGesture.POINTER_FLICK_LEFT:
        t = "flickLeft";
        break;
      case bx.CGesture.POINTER_FLICK_RIGHT:
        t = "flickRight";
        break;
      case bx.CGesture.POINTER_FLICK_UP:
        t = "flickUp";
        break;
      case bx.CGesture.POINTER_FLICK_DOWN:
        t = "flickDown";
        break;
      case bx.CGesture.POINTER_MOVE:
        t = "_pointerMove";
    }
    return (
      this.viewer.onGestureEventTransform &&
        null !== this.viewer.onGestureEventTransform(e) &&
        (t = this.viewer.onGestureEventTransform(e) || null),
      t
    );
  }),
  (apn.CES.prototype.eventOnPageLoad_setRefCount = function (e) {
    this._pageLoadRefCount = e;
  }),
  (apn.CES.prototype.$O3I = function () {
    var e = {};
    return (
      this._pageLoadRefCount &&
        (this.__pageLoadRefCountCur
          ? this.__pageLoadRefCountCur++
          : (this.__pageLoadRefCountCur = 1)),
      (this.__pageLoadRefCountCur &&
        this._pageLoadRefCount != this.__pageLoadRefCountCur) ||
        ((this._pagePauseFired = !1),
        (this._pageLoadRefCount = void 0),
        this.eventExe("pageLoad"),
        (e.load = !0),
        this.__pageLoadRefCountCur && (this.$O5t(), (e.run = !0)),
        (this.__pageLoadRefCountCur = void 0),
        this.viewer._fontLoadEvtFired
          ? this.fireEvent("spt_fontLoad", "End", void 0, !0)
          : this.viewer._fontLoadTimeoutFired &&
            this.fireEvent("spt_fontLoad", "Timeout", void 0, !0)),
      e
    );
  }),
  (apn.CES.prototype.eventOnPageLoad = apn.CES.prototype.$O3I),
  (apn.CES.prototype.$O5t = function () {
    function e(e) {
      e.canvas &&
        e.canvas.$Och &&
        e.canvas.$O3X("exeOnPageRun", e.canvas.getPageID(), t.getPageID());
    }
    if (((this._pagePauseFired = !1), this.setPaused(!1), apn.CExe.DEBUG))
      this.eventExe("pageRun");
    else
      try {
        this.eventExe("pageRun");
      } catch (e) {
        console.error(e);
      }
    var t = this;
    this.$Och || this.viewer.$O2J.iteratePage(e);
  }),
  (apn.CES.prototype.eventOnPageRun = apn.CES.prototype.$O5t),
  (apn.CES.prototype._eventOnPagePause = function () {
    if (!this._pagePauseFired) {
      var e;
      if (this._timeoutsConP)
        for (var t in this._timeoutsConP)
          (e = this._timeoutsConP[t]),
            "clear" == e.type
              ? this.$Ocz(e.id)
              : "complete" == e.type && this.clearTimeout(e.id);
      (this._inPagePauseEvent = !0),
        this.eventExe("pagePause"),
        (this._inPagePauseEvent = !1),
        (this._pagePauseFired = !0),
        (this.pagePauseEverFired = !0);
    }
  }),
  (apn.CES.$Ocv = {
    pageLoad: !0,
    pageRun: !0,
    pagePause: !0,
    click: !0,
    tapStart: !0,
    flickLeft: !0,
    flickRight: !0,
    flickUp: !0,
    flickDown: !0,
    dragStart: !0,
    drag: !0,
    dragEnd: !0,
    dragDrop: !0,
    dragDropResult: !0,
    pinchIn: !0,
    pinchOut: !0,
    stateChange: !0,
    inputChange: !0,
    inputFocus: !0,
    inputBlur: !0,
    inputSet: !0,
    media: !0,
    animation: !0,
    wgtEvent: !0,
    musicNote: !0,
    musicBeat: !0,
    musicLine: !0,
    musicVerse: !0,
    pointerOver: !0,
    pointerOut: !0,
    spt_Custom: !0,
    spt_Collision: !0,
    spt_CollisionOff: !0,
  }),
  (apn.CES.prototype.eventExe = function (e, t, a, i) {
    if (this.$O7K) return !1;
    ("pageLoad" != e && "pageRun" != e) || (this._inPageCreateEvent = !0);
    var n,
      r = this.$O3g(e, t),
      o = !1,
      s = apn.P.resolveCompositeSysEV(e),
      p = s ? s.ev : e;
    (n = s
      ? "spt_EvtBubble:" + s.param + ";" + p + ";" + (t || "")
      : "spt_EvtBubble:;" + p + ";" + (t || "")),
      this.spt2ExEval &&
        apx._spt2evLnPre &&
        apx._spt2evLnPre.length &&
        this.spt2ExEval(!0, "spt_EvtBubble", void 0, n, 0, p, a, i),
      r && r.length && (this.$O34(r[0], void 0, void 0, t), (o = !0)),
      this.sptEval(e, t, { oId: t, ev: e, depth: 0, orgPgId: a, byStart: i }) &&
        (o = !0),
      ("pointerOver" != e && "pointerOut" != e) ||
        (t && this.$O3u(t, "acceptMouseOver") === !0 && (o = !0)),
      void 0 === this.viewer._apxPageEventList &&
        (this.viewer._apxPageEventList = apn.P.$O7u(this.project));
    var l =
        apn.CES.$Ocv[p] ||
        (this.viewer._apxPageEventList && this.viewer._apxPageEventList[p]),
      d = !0;
    return (
      "contentChange" == p
        ? this.viewer._sptContentChangeUsed
          ? ((l = !0), (d = !0))
          : t && this.wgtGetProperty(t, "_apxAcceptCC")
          ? ((l = !0), (d = !0))
          : (d = !1)
        : "contentLoad" == p
        ? this.viewer._sptContentLoadUsed
          ? ((l = !0), (d = !0))
          : (d = !1)
        : "timer" == p &&
          t &&
          "Y" == this.wgtGetProperty(t, "apxAllowBubble") &&
          ((l = !0), (d = !0)),
      l &&
        t &&
        this.$O3d[t].apxBubblingCtl &&
        this.$O3d[t].apxBubblingCtl[p] &&
        ((l = !1),
        (d = !1),
        1 === this.$O3d[t].apxBubblingCtl[p] &&
          delete this.$O3d[t].apxBubblingCtl[p]),
      l &&
        this.$Oco("spt_EvtBubble") &&
        this.sptEval("spt_EvtBubble", void 0, {
          oId: void 0,
          ev: n,
          depth: 0,
          orgPgId: a,
          byStart: i,
        }),
      this._apxEventListenBubble &&
        this._apxEventListenBubble.length &&
        (s
          ? this._eventDispatchBubbleToAPX(p, t || "", s.param)
          : this._eventDispatchBubbleToAPX(p, t || "", "")),
      d &&
        this.spt2ExEval &&
        apx._spt2evLn &&
        apx._spt2evLn.length &&
        this.spt2ExEval(!1, "spt_EvtBubble", void 0, n, 0, p, a, i),
      (this._inPageCreateEvent = !1),
      o
    );
  }),
  (apn.CES.prototype._eventDispatchBubbleToAPX = function (e, t, a) {
    function i(e, t, a) {
      return function () {
        return e.apply(t, [a]);
      };
    }
    if (this._apxEventListenBubble && this._apxEventListenBubble.length)
      for (var n = this, r = 0; r < this._apxEventListenBubble.length; r++)
        this._apxEventListenBubble[r].event == e &&
          setTimeout(
            i(
              function (e) {
                n._apxEventListenBubble &&
                  n._apxEventListenBubble[e] &&
                  n._apxEventListenBubble[e].handler(a, t);
              },
              this,
              r
            ),
            0
          );
  }),
  (apn.CES.$Ocw = {
    exeOnScreenVisibility: !0,
    exeOnScreenFull: !0,
    exeOnMarkText: !0,
    exeOnScale: !0,
    exeOnPageRun: !0,
    exeOnScreenRefresh: !0,
  }),
  (apn.CES.prototype.$O3X = function (e, t, a) {
    var i;
    if ("exeOnResume" == e) this.setPaused(!1), apx.wgt.$O5P(this);
    else if ("exeOnPause" == e) {
      if (
        (this.$O5K(), this.viewer.o.clearItrOnPause && this.$O7W(), this.$O4i)
      )
        for (var n in this.$O4i)
          if (!this.$O4i[n].allowBackground)
            try {
              this.$O4i[n].tag.pause();
            } catch (e) {}
      this.setPaused(!0);
    }
    if (this.screen)
      for (var n in this.screen.objects) {
        if (
          ((i = apn.Project.getWidgetModule(
            this.screen.objects[n].create.data
          )),
          i && i[e])
        ) {
          if ("exeOnPause" == e && this.$O3d[n].apxBackgroundRun) continue;
          if (apn.CExe.DEBUG)
            apn.CES.$Ocw[e] ? i[e](this, n, a) : i[e](this, n);
          else
            try {
              apn.CES.$Ocw[e] ? i[e](this, n, a) : i[e](this, n);
            } catch (e) {
              this.log(
                n,
                "Problem in source code of the widget. Please consult to the technical support team."
              );
            }
        }
        i && "exeOnStart" == e && this.eventExe("spt_WgtStart", n);
      }
  }),
  (apn.CES.prototype.exeOnPageState = apn.CES.prototype.$O3X),
  (apn.CES.prototype._exeOnWgtVisibilityChange = function (e, t) {
    var a = this.screen.objects[e],
      i = apn.Project.getWidgetModule(a.create.data);
    if (
      (i && i.exeOnVisibilityChange && i.exeOnVisibilityChange(this, e, t),
      a.layout && a.layout.children && a.layout.children.length)
    )
      for (var n = 0; n < a.layout.children.length; n++)
        this._exeOnWgtVisibilityChange(
          a.layout.children[n],
          this.wgtIsVisible(a.layout.children[n])
        );
  }),
  (apn.CES.prototype.$O5G = function (e, t) {
    return apn.Project.findParentOf(this.screen, e, void 0, t);
  }),
  (apn.CES.prototype.fireApxMediaEvent = function (e, t, a, i) {
    if (this.$O4j && this.$O4j.length)
      for (var n = 0; n < this.$O4j.length; n++)
        this.$O4j[n].mediaWidgetId == e && this.$O4j[n].handler(t, a, i);
  }),
  (apn.CES.mapNonWgtGroupOverflow = {
    "apn.CLayerContainer": "visible",
    "apn.CFixedLayerContainer": "visible",
    "apn.CLayer": "hidden",
    "bx.CEditorWnd.CGroup": "visible",
    "bx.CEditorWnd.CContainer": "visible",
  }),
  (apn.CES.prototype.$O3L = function (e, t, a) {
    if (apn.CExe.TRACE) var i = new Date().getTime();
    var n,
      r,
      o = this,
      s = apn.Project.getWidgetModule(a.create.data);
    if (
      (this.viewer.constructor.IStub_checkCreateGroup &&
        (r = this.viewer.constructor.IStub_checkCreateGroup(a)),
      s)
    )
      (this.$O3d[t] = s.exeCreateTag(
        this.viewer,
        this,
        a,
        1 / this.$O2O,
        1 / this.$O2P,
        t
      )),
        (n = this.$O3d[t]),
        (n.apnOID = t),
        (n.apnPID = this.$O1m),
        e.apnOID && (n.apnParentOID = e.apnOID),
        (this.$O5H("click", t) || this.$O5H("tapStart", t)) &&
          (n.apnTapCsr = !0),
        e.appendChild(n),
        s.exeRenderTag(this.viewer, this, n, a, 1 / this.$O2O, 1 / this.$O2P),
        (n.style.display = "block");
    else {
      if (
        (a.create.data &&
          a.create.data.wgtID &&
          console.error("[Aspen] Cannot load module=" + a.create.data.wgtID),
        this.$O3d[t] ||
          ((this.$O3d[t] = e.$TAG("div")), (this.$O3d[t].apnCur = {})),
        (n = this.$O3d[t]),
        (n.apnOID = t),
        (n.apnPID = this.$O1m),
        e.apnOID && (n.apnParentOID = e.apnOID),
        this.viewer.o.exeDOM2)
      ) {
        var p = apn.IWidget.htmlRender(
          null,
          this.project,
          this.getPageID(),
          n.apnOID,
          void 0,
          void 0,
          this
        );
        n.style.cssText =
          "position:absolute;opacity:1;cursor:inherit;overflow:" +
          apn.CES.mapNonWgtGroupOverflow[a.module] +
          ";display:" +
          (r || "bx.CEditorWnd.CGroup" != a.module ? "block" : "none") +
          ";" +
          p.css;
      } else
        (n.style.position = "absolute"),
          apn.IWidget.exeSetAlpha(n, 1),
          apn.IWidget.exeRenderPosition(
            this,
            n,
            this.screen.objects[t],
            this.project,
            1 / this.$O2O,
            1 / this.$O2P
          ),
          apn.IWidget.exeRenderSize(
            this.viewer,
            this,
            n,
            this.screen.objects[t],
            this.project,
            1 / this.$O2O,
            1 / this.$O2P
          ),
          apn.IWidget.exeSetCursor(n, "inherit"),
          apn.CES.mapNonWgtGroupOverflow[a.module]
            ? (n.style.overflow = apn.CES.mapNonWgtGroupOverflow[a.module])
            : bx.Trace.log(
                "APN",
                "warning",
                "Unknown non-widget group=" + a.module,
                "CES.createWidget"
              ),
          r || "bx.CEditorWnd.CGroup" != a.module
            ? (n.style.display = "block")
            : (n.style.display = "none");
      r &&
        "bx.CEditorWnd.CGroup" == a.module &&
        ((n.style.textAlign = "left"), (n.apxCreateForGroup = !0)),
        !a.layout ||
          !a.layout.children ||
          (a.ITRs && a.ITRs.length) ||
          (n.apnCur.isHolder = !0);
    }
    if (
      ((n.apnCur.apxColDectectOn = !0),
      (this._apxColDectectOn = !0),
      !n.apnCur.apxCreatedFromTag)
    ) {
      var l;
      if (
        this.viewer.constructor.IStub_pubProcWgtAttr &&
        (l = this.viewer.constructor.IStub_pubProcWgtAttr(
          this.project,
          this.getPageID(),
          t
        ))
      ) {
        if (l.attr)
          for (var d in l.attr)
            void 0 !== l.attr[d] && n.setAttribute(d, l.attr[d]);
        if (l.attr0 && n.firstChild && 1 == n.firstChild.nodeType)
          for (var d in l.attr0)
            void 0 !== l.attr0[d] && n.firstChild.setAttribute(d, l.attr0[d]);
      }
    }
    if (
      ((this.$O46(n) || this.$O47(n)) &&
        ((n.apnDragCsr = !0), apn.IWidget.exeSetCursor(n, n.apnCur.orgCursor)),
      this.viewer.isStretch() &&
        (this.viewer.o.fullAccel || this.viewer._fullAclbySet) &&
        apn.CExe.ACCEL(n),
      "apn.CLayer" == a.module && (n.apnCur.Event2Holder = !0),
      this._setWgtZIndex(n, a.create),
      n.$CSS({ transitionDuration: 0 }),
      apn.CExe.DEBUG &&
        !n.title &&
        a.create.data &&
        a.create.data.styles &&
        (n.title =
          (a.create.data.styles.title
            ? a.create.data.styles.title + ":"
            : ":") +
          t +
          "(" +
          a.create.data.wgtTitle +
          ")"),
      window.apx &&
        apx.wgt &&
        s &&
        s.exeMediaPlay &&
        (n.exeOnMediaEvent = function (e, a, i) {
          o.fireApxMediaEvent(t, e, a, i);
        }),
      apn.CExe.TRACE)
    ) {
      if (
        ((window._cCntTM = window._cCntTM || 0),
        (window._cCnt = window._cCnt || 0),
        (window._htmCnt = window._htmCnt || 0),
        window._cCnt++,
        (window._cCntMap = window._cCntMap || {}),
        a.create.data && a.create.data.wgtID)
      ) {
        window._cCntMap[a.create.data.wgtID] = window._cCntMap[
          a.create.data.wgtID
        ] || { cnt: 0, htmCnt: 0, tm: 0 };
        var c = window._cCntMap[a.create.data.wgtID];
        c.cnt++,
          (c.tm += new Date().getTime() - i),
          (c.av = Math.round(
            window._cCntMap[a.create.data.wgtID].tm /
              window._cCntMap[a.create.data.wgtID].cnt
          )),
          n.apnCur &&
            n.apnCur.apxCreatedFromTag &&
            (c.htmCnt++, window._htmCnt++);
      } else
        (window._cCntMap.ETC = window._cCntMap.ETC || { cnt: 0, tm: 0 }),
          window._cCntMap.ETC.cnt++,
          (window._cCntMap.ETC.tm += new Date().getTime() - i),
          (window._cCntMap.ETC.av = Math.round(
            window._cCntMap.ETC.tm / window._cCntMap.ETC.cnt
          ));
      window._cCntTM += new Date().getTime() - i;
    }
    if (a.layout && a.layout.children && a.layout.children.length)
      for (var g = 0; g < a.layout.children.length; g++)
        this.screen.objects[a.layout.children[g]] &&
          (r || "bx.CEditorWnd.CGroup" != a.module
            ? this.$O3L(
                n,
                a.layout.children[g],
                this.screen.objects[a.layout.children[g]]
              )
            : this.$O3L(
                e,
                a.layout.children[g],
                this.screen.objects[a.layout.children[g]]
              ));
    s && s.exeOnPostCreateTag && s.exeOnPostCreateTag(this, t, a);
  }),
  (apn.CES.prototype.$O3x = function (e, t) {
    var a = this.screen.objects[e],
      i = this.$O3d[e],
      n = apn.Project.getWidgetModule(a.create.data);
    n && n.exeRenderTag
      ? n.exeRenderTag(this.viewer, this, i, a, 1 / this.$O2O, 1 / this.$O2P, t)
      : (apn.IWidget.exeRenderPosition(
          this,
          i,
          a,
          this.project,
          1 / this.$O2O,
          1 / this.$O2P
        ),
        apn.IWidget.exeRenderSize(
          this.viewer,
          this,
          i,
          a,
          this.project,
          1 / this.$O2O,
          1 / this.$O2P
        )),
      this._setWgtZIndex(i, a.create);
  }),
  (apn.CES.prototype.$O5D = function (e, t, a) {
    apn.CES.onWidgetPositionChange(this.screen, e, t, a);
  }),
  (apn.CES.onWidgetPositionChange = function (e, t, a, i) {
    function n(t, r) {
      if (
        (r > 0 &&
          (void 0 !== a && a && (t.init.position.x += a),
          void 0 !== i && i && (t.init.position.y += i)),
        t.layout && t.layout.states)
      ) {
        var o;
        for (var s in t.layout.states)
          for (o in t.layout.states[s].objects)
            void 0 !== a &&
              a &&
              (t.layout.states[s].objects[o].init.position.x += a),
              void 0 !== i &&
                i &&
                (t.layout.states[s].objects[o].init.position.y += i);
        for (o in t.layout.states[0].objects)
          void 0 !== a && a && (e.objects[o].init.position.x += a),
            void 0 !== i && i && (e.objects[o].init.position.y += i);
      } else if (t.layout && t.layout.children && t.layout.children.length)
        for (var s = 0; s < t.layout.children.length; s++)
          n(e.objects[t.layout.children[s]], r + 1);
    }
    (a || i) && n(t, 0);
  }),
  (apn.CES.prototype._preloadAssetsCount = function () {
    var e = apn.Project.publishListAsset(this.project, {
        id: this.$O1m,
        pageOnly: !0,
      }),
      t = 0;
    for (i = 0; i < e.length; i++)
      "image" == apn.Project.$O8G(this.project, e[i]) && t++;
    return t;
  }),
  (apn.CES.prototype.$Oct = function (e) {
    function t() {
      r++, n == r && e && e();
    }
    function a(t, a, i) {
      r++, n == r && e && e();
    }
    var i,
      n = 1,
      r = 0;
    for (var o in this.screen.objects)
      (i = apn.Project.getWidgetModule(this.screen.objects[o].create.data)),
        i && i.exeAssetPreload && n++;
    for (o in this.screen.objects)
      (i = apn.Project.getWidgetModule(this.screen.objects[o].create.data)),
        i && i.exeAssetPreload && i.exeAssetPreload(this, o, t);
    var s = apn.Project.publishListAsset(this.project, {
        id: this.$O1m,
        pageOnly: !0,
      }),
      p = 0,
      l = {};
    for (o = 0; o < s.length; o++)
      "image" == apn.Project.$O8G(this.project, s[o]) &&
        ((l[o] = { url: this.mediaURL(s[o]) }), p++);
    p ? new apn.CRscLoader().load(this.project, l, a) : a(0, 0, 0);
  }),
  (apn.CES.prototype.$O1B = function (e, t, a, i, n) {
    function r(e) {
      if (o.$O6J) {
        if (!o.$O7K)
          for (var t in o.__tickLoop)
            o.__tickLoop[t].bg && o.__tickLoop[t].module.exeOnTick(o, t, e);
      } else {
        for (var t in o.__tickLoop) o.__tickLoop[t].module.exeOnTick(o, t, e);
        o.__spriteLoop && apx.wgt.$O4l(o, e);
        var a, i, n;
        if (
          o._apxColDectectOn &&
          o._apxColDectect &&
          o._apxColDectect.length > 1
        ) {
          var r = o._apxColDectect;
          for (t = 0; t < r.length; t++)
            if (r[t].disabled) r.splice(t, 1), t--;
            else {
              for (n = !1, a = t + 1; a < r.length; a++)
                r[a].disabled ||
                  ((i = !1),
                  ((o.$O3d[r[t].oId].apnCur &&
                    o.$O3d[r[t].oId].apnCur.apxColDectectOn) ||
                    (o.$O3d[r[a].oId].apnCur &&
                      o.$O3d[r[a].oId].apnCur.apxColDectectOn)) &&
                    apx.wgt.$O4u(
                      o,
                      o.$O3d[r[t].oId],
                      o.$O3d[r[a].oId],
                      void 0,
                      !0
                    ) &&
                    ((o._apxColDectectMap = o._apxColDectectMap || {}),
                    o._apxColDectectMap[r[t].oId + ":" + r[a].oId] ||
                      o._apxColDectectMap[r[a].oId + ":" + r[t].oId] ||
                      (o.fireEvent(
                        "spt_Collision",
                        encodeURIComponent(
                          o.wgtGetProperty(r[t].oId, "apxLabel") || ""
                        ),
                        r[a].oId,
                        !0,
                        !0
                      ),
                      o.fireEvent(
                        "spt_Collision",
                        encodeURIComponent(
                          o.wgtGetProperty(r[a].oId, "apxLabel") || ""
                        ),
                        r[t].oId,
                        !0,
                        !0
                      ),
                      (o._apxColDectectMap[r[t].oId + ":" + r[a].oId] = !0)),
                    (i = !0),
                    (n = !0)),
                  !i &&
                    o._apxColDectectMap &&
                    (o._apxColDectectMap[r[t].oId + ":" + r[a].oId] ||
                      o._apxColDectectMap[r[a].oId + ":" + r[t].oId]) &&
                    (o._apxColDectectMap[r[t].oId + ":" + r[a].oId] &&
                      delete o._apxColDectectMap[r[t].oId + ":" + r[a].oId],
                    o._apxColDectectMap[r[a].oId + ":" + r[t].oId] &&
                      delete o._apxColDectectMap[r[a].oId + ":" + r[t].oId],
                    o.fireEvent(
                      "spt_CollisionOff",
                      encodeURIComponent(
                        o.wgtGetProperty(r[t].oId, "apxLabel") || ""
                      ),
                      r[a].oId,
                      !0,
                      !0
                    ),
                    o.fireEvent(
                      "spt_CollisionOff",
                      encodeURIComponent(
                        o.wgtGetProperty(r[a].oId, "apxLabel") || ""
                      ),
                      r[t].oId,
                      !0,
                      !0
                    )));
              !n &&
                o.$O3d[r[t].oId].apnCur &&
                (o.$O3d[r[t].oId].apnCur.apxColDectectOn = !1);
            }
          o._apxColDectectOn = !1;
        }
      }
    }
    var o = this;
    if (
      (this.$O3M(),
      (this.project = t),
      (this.flow = t.flow),
      (this.screen = e),
      apn.CExe.TRACE &&
        ((window._cCntTM = 0),
        (window._cCnt = 0),
        (window._hCnt = 0),
        (window._htmCnt = 0),
        (window._cCntMap = {})),
      (this.$O1m = a),
      this.popup
        ? ((this.tag.style.backgroundColor = "transparent"),
          (this.tag.style.backgroundImage = "none"))
        : (apn.Project.$O5X(
            this.project,
            this.viewer.o.standAlone,
            "color",
            this.screen.BG ? this.screen.BG.fillStyle : void 0,
            this.tag,
            1 / this.getZoomX(),
            1 / this.getZoomY()
          ),
          this.screen.BG
            ? apn.Project.$O5X(
                this.project,
                this.viewer.o.standAlone,
                "media",
                this.screen.BG.mediaID || this.screen.BG.mediaFillStyle,
                this.tag,
                1 / this.getZoomX(),
                1 / this.getZoomY()
              )
            : apn.Project.$O5X(
                this.project,
                this.viewer.o.standAlone,
                "media",
                void 0,
                this.tag,
                1 / this.getZoomX(),
                1 / this.getZoomY()
              )),
      this.$O3X("exeOnPagePreLoad", a),
      apx.spt2evPP && apx.spt2evPP.length)
    )
      for (var s, p = 0; p < apx.spt2evPP.length; p++)
        if (apx.spt2evPP[p].onEvent) {
          if (((s = !1), apx.spt2evPP[p].target)) {
            if (apx.spt2evPP[p].target.length)
              for (var l = 0; l < apx.spt2evPP[p].target.length; l++)
                if (apx.spt2evPP[p].target[l] == this.screen.UI.title) {
                  s = !0;
                  break;
                }
          } else s = !0;
          if (s) {
            var d = new apn.CExeSpt2Page(new apn.CExeSpt2(this.project), a);
            apx.spt2evPP[p].onEvent.call(d, d, this);
          }
        }
    var p;
    this.$O3C();
    for (p in this.screen.objects)
      void 0 === this.$O3u(p, "parent") &&
        this.$O3L(this.tag, p, this.screen.objects[p]);
    apn.CExe.TRACE &&
      console.error(
        "[TRACE] PageID=[" +
          a +
          "], Count ALL=[" +
          window._cCnt +
          "], Count HTML=[" +
          window._htmCnt +
          "], Count DOM2=[" +
          (window._hCnt || 0) +
          "], Time=[" +
          window._cCntTM +
          "]",
        window._cCntMap
      ),
      this.$O3E(n);
    var c = 0;
    for (p in this.screen.objects)
      (wgtModule = apn.Project.getWidgetModule(
        this.screen.objects[p].create.data
      )),
        wgtModule && wgtModule.exeAssetDelayedLoad && c++;
    for (p in this.screen.objects)
      (wgtModule = apn.Project.getWidgetModule(
        this.screen.objects[p].create.data
      )),
        wgtModule &&
          wgtModule.exeAssetLoad &&
          (c > 1 &&
            wgtModule.exeAssetDelayedLoad &&
            this.wgtSetProperty(p, "apxDelayedLoad", !0),
          wgtModule.exeAssetLoad(this, this.$O3d[p]));
    var g = apn.Project.getLayout(this.project).property;
    if (g.CExe && "Y" == g.CExe.inputSave)
      for (p in this.screen.objects)
        (wgtModule = apn.Project.getWidgetModule(
          this.screen.objects[p].create.data
        )),
          wgtModule &&
            wgtModule.apxInputSave &&
            this.wgtSetProperty(p, "save", !0, !0);
    if (
      (this.$O3X("exeOnLoad", a),
      this.$Och
        ? this.setPaused(!1)
        : this.setPaused(!!this.viewer.o.clearItrOnPause),
      this._updateTickLoop(),
      void 0 !== this.$O42 &&
        (bx.Transition.loopRemove(this.$O42), delete this.$O42),
      (this.$O42 = bx.Transition.loopAdd(r)),
      (this.afterLoaded = !0),
      apx._dispatchEvent(this.viewer.getPM()),
      this.viewer.isStretch() && bx.HCL.DV.isChrome())
    ) {
      var u = apn.Project.getLayout(this.viewer.project).property.CExe;
      if ("apn.COverlayPage" != this.screen.module && u && u.pageOutline) {
        var h, x;
        if (((x = u.pageOutline.shadow[0]), x.color && x.spread)) {
          var f = 3 * bx.CCanvasWnd.ZINDEX_OBJECT - 2,
            y = this.tag.$TAG("div", {
              style:
                "position:absolute;right:0px;top:0px;width:100%;height:100%;display:block;box-sizing:border-box;z-index:" +
                f +
                ";",
            });
          this.tagPassPointerEvent(y, !0),
            (h = u.pageOutline.radius[0]),
            h.LT &&
              y.$CSS(
                "borderTopLeftRadius",
                Math.ceil(h.LT * (1 / this.$O2O)) + "px"
              ),
            h.RT &&
              y.$CSS(
                "borderTopRightRadius",
                Math.ceil(h.RT * (1 / this.$O2O)) + "px"
              ),
            h.RB &&
              y.$CSS(
                "borderBottomRightRadius",
                Math.ceil(h.RB * (1 / this.$O2O)) + "px"
              ),
            h.LB &&
              y.$CSS(
                "borderBottomLeftRadius",
                Math.ceil(h.LB * (1 / this.$O2O)) + "px"
              ),
            (y.style.border =
              "solid " +
              Math.ceil(0.3 * x.spread * (1 / this.$O2O)) +
              "px " +
              x.color);
        }
      }
    }
    return !0;
  }),
  (apn.CES.prototype._updateTickLoop = function () {
    this.__tickLoop = this.__tickLoop || {};
    var e;
    for (var t in this.$O3d)
      this.$O3d[t].apxNoTick ||
        this.__tickLoop[t] ||
        ((e = apn.Project.getWidgetModule(this.screen.objects[t].create.data)),
        e &&
          e.exeOnTick &&
          !this.wgtGetProperty(t, "apxDisabledTick") &&
          (this.__tickLoop[t] = {
            module: e,
            bg: "Y" == this.wgtGetProperty(t, "apxBackgroundTick"),
          }));
  }),
  (apn.CES.prototype.$O3M = function () {
    if (
      (this.$O5K(!0),
      this.$O7W(),
      this.project &&
        this.project.property.allowClearTimeout &&
        this._cancelTimeoutAll(),
      (this.startDrag = null),
      (this.$O7P = !1),
      this.__tickLoop && delete this.__tickLoop,
      this.__spriteLoop && delete this.__spriteLoop,
      this.clearCursor(),
      this.$O3X("exeOnDestroy", this.getPageID()),
      (this.tag.innerHTML = ""),
      (this.$O3d = {}),
      this.$Ock && delete this.$Ock,
      this.$Ocl && delete this.$Ocl,
      this._lastEvTag && delete this._lastEvTag,
      this.$O4j && delete this.$O4j,
      this.$O4m && delete this.$O4m,
      this.$O4n && delete this.$O4n,
      this._apxEventListenBubble && delete this._apxEventListenBubble,
      this.$O4i)
    ) {
      for (var e in this.$O4i)
        if ("WebAudioAPI" == this.$O4i[e].type)
          this.$O4i[e].tag.stop(), this.$O4i[e].tag.close();
        else
          try {
            this.$O4i[e].tag.pause(),
              (this.$O4i[e].tag.sourceTag.src = ""),
              this.$O4i[e].tag.load();
          } catch (e) {}
      delete this.$O4i;
    }
    this.$O5e && (this.$O5e = 0),
      this.$Ocx && delete this.$Ocx,
      this._apxColDectect && delete this._apxColDectect,
      this._apxColDectectMap && delete this._apxColDectectMap,
      (this._apxColDectectOn = !0),
      this._apxGetEventCache && delete this._apxGetEventCache,
      (this._inPageCreateEvent = !1),
      (this._inPagePauseEvent = !1),
      (this._pagePauseFired = !1),
      (this.$O41 = !1),
      delete this.screen;
  }),
  (apn.CES.prototype.$O3n = function (e, t, a, i, n, r, o) {
    function s(e) {
      var t = {
        action: "CWP",
        event: "none",
        forceQueue: !0,
        target: { objectID: _ },
        set: {},
      };
      return (
        r &&
          ((t.timing = bx.$cloneObject({}, r)),
          t.timing.effect && delete t.timing.effect),
        t
      );
    }
    var p,
      l = [];
    if (2 == o);
    else if (i == n) return l;
    if (!a.states[i] || !a.states[n])
      return (
        console.error("unknown state id for state change itr generation"), l
      );
    var d,
      c,
      g,
      u,
      h,
      x,
      f,
      y,
      v = a.states[0].objects,
      C = a.states[i].objects,
      b = a.states[n].objects;
    for (var _ in v) {
      if (((d = b[_] || v[_]), 2 == o)) {
        var m = this.$O3d[_];
        this.__clearTagTR(m), (c = C[_] || v[_]);
      } else c = C[_] || v[_];
      (f = !1),
        (g = d.init.cx || 0),
        (u = d.init.cy || 0),
        (h = c.init.cx || 0),
        (x = c.init.cy || 0),
        (g == h && u == x) || (f = !0),
        d.init.shape.type == bx.CCanvasWnd.SHAPE_LINE
          ? (d.init.position.x == c.init.position.x &&
              d.init.position.y == c.init.position.y &&
              d.init.shape.x[0] == c.init.shape.x[0] &&
              d.init.shape.y[0] == c.init.shape.y[0] &&
              d.init.shape.x[1] == c.init.shape.x[1] &&
              d.init.shape.y[1] == c.init.shape.y[1]) ||
            ((p = s(_)),
            (p.set.line = [
              d.init.position.x,
              d.init.position.y,
              d.init.shape.x[0],
              d.init.shape.y[0],
              d.init.shape.x[1],
              d.init.shape.y[1],
            ]),
            l.push(p))
          : ((d.init.position.x == c.init.position.x &&
              d.init.position.y == c.init.position.y) ||
              ((p = s(_)),
              (p.set.positionBy = {
                x: d.init.position.x - c.init.position.x,
                y: d.init.position.y - c.init.position.y,
              }),
              l.push(p)),
            (d.init.shape.w == c.init.shape.w &&
              d.init.shape.h == c.init.shape.h) ||
              ((p = s(_)),
              (p.set.sizeBy = {
                w: d.init.shape.w - c.init.shape.w,
                h: d.init.shape.h - c.init.shape.h,
              }),
              l.push(p)));
      var I = this._getWgtZIndex(d.create);
      2 == o
        ? I != this.$O3d[_].apnCur.zIndex &&
          ((p = s(_)), (p.set.zIndex = I), l.push(p))
        : I != c.create.zIndex && ((p = s(_)), (p.set.zIndex = I), l.push(p)),
        d.create.data &&
          d.create.data.styles &&
          ((y = apn.Project.getWidgetModule(
            this.screen.objects[_].create.data
          )),
          y &&
            y.styleMap &&
            y.styleMap.angle &&
            (f ||
              apn.Project.resolveStyle(
                e,
                "angle",
                d.create.data.styles.angle
              ) !=
                apn.Project.resolveStyle(
                  e,
                  "angle",
                  c.create.data.styles.angle
                )) &&
            ((p = s(_)),
            (p.set.angle = {
              angle: apn.Project.resolveStyle(
                e,
                "angle",
                d.create.data.styles.angle
              ),
            }),
            (p.set.angle.cx = g),
            (p.set.angle.cy = u),
            l.push(p)),
          y &&
            y.styleMap &&
            y.styleMap.alpha &&
            apn.Project.resolveStyle(e, "alpha", d.create.data.styles.alpha) !=
              apn.Project.resolveStyle(
                e,
                "alpha",
                c.create.data.styles.alpha
              ) &&
            ((p = s(_)),
            (p.set.alpha = apn.Project.resolveStyle(
              e,
              "alpha",
              d.create.data.styles.alpha
            )),
            l.push(p)),
          y &&
            y.styleMap &&
            y.styleMap.visibility &&
            apn.Project.resolveStyle(
              e,
              "visibility",
              d.create.data.styles.visibility
            ) !=
              apn.Project.resolveStyle(
                e,
                "visibility",
                c.create.data.styles.visibility
              ) &&
            ((p = s(_)),
            (p.set.visibility = apn.Project.resolveStyle(
              e,
              "visibility",
              d.create.data.styles.visibility
            )),
            l.push(p)));
    }
    return l;
  }),
  (apn.CES.prototype.$O3q = function (e, t) {
    return this.screen.objects[e].layout.layers[t].id;
  }),
  (apn.CES.prototype.$O4f = function (e, t, a) {
    var i = this.screen.objects[e].layout.layers;
    if (
      void 0 !== i[t] &&
      (a || this.$O3u(this.screen.objects[e].layout.layers[t].id, "isHidden"))
    )
      for (var n in i)
        n == t
          ? (this.$O3t(i[n].id, "isHidden", !1),
            (this.$O3d[i[n].id].style.display = "block"),
            this._exeOnWgtVisibilityChange(i[n].id, !0))
          : (this.$O3t(i[n].id, "isHidden", !0),
            (this.$O3d[i[n].id].style.display = "none"),
            this._exeOnWgtVisibilityChange(i[n].id, !1));
  }),
  (apn.CES.prototype.stateLayerActivate = apn.CES.prototype.$O4f),
  (apn.CES.prototype.$O3l = function (e, t) {
    var a = this.$O3u(e, "activeState");
    return (
      void 0 !== a ||
        t ||
        bx.Trace.log(
          "APN",
          "warning",
          "Invalid layer container=" + e,
          "CES.$O3l"
        ),
      a
    );
  }),
  (apn.CES.prototype.stateGetActive = apn.CES.prototype.$O3l),
  (apn.CES.prototype.$O3m = function (e, t, a) {
    if (
      !this.screen.objects[e].layout ||
      !this.screen.objects[e].layout.layers ||
      void 0 !== this.screen.objects[e].layout.layers[t]
    ) {
      var i = this.$O3l(e, !0);
      if ((this.$O3t(e, "activeState", t), void 0 !== e)) {
        var n = apn.Project.getWidgetModule(this.screen.objects[e].create.data);
        n &&
          n.exeSetState &&
          !n.BLACKBOX_MODEL &&
          n.exeSetState(this, this.$O3d[e], t, i, a);
      }
    }
  }),
  (apn.CES.prototype.stateSetActive = apn.CES.prototype.$O3m),
  (apn.CES.prototype.$O3p = function (e, t, a) {
    var i, n, r;
    this.$O3N(e, t);
    for (i in t.states[a].objects) {
      if (
        ((r = t.states[a].objects[i]), r.create.data && r.create.data.styles)
      ) {
        (e.objects[i].create.data = e.objects[i].create.data || {}),
          (e.objects[i].create.data.styles =
            e.objects[i].create.data.styles || {});
        for (n in apn.CExe.sceneEditableStyles)
          e.objects[i].create.data.styles[n] = r.create.data.styles[n];
      }
      bx.$cloneObject(e.objects[i].init, r.init);
    }
  }),
  (apn.CES.prototype.$O3N = function (e, t) {
    var a, i, n;
    for (a in t.states[0].objects)
      (i = t.states[0].objects[a]),
        (n = null),
        i.create.data &&
          i.create.data.properties &&
          delete i.create.data.properties,
        e.objects[a].create.data &&
          e.objects[a].create.data.properties &&
          (n = e.objects[a].create.data.properties),
        bx.$cloneObject(e.objects[a].create, i.create),
        n && (e.objects[a].create.data.properties = n),
        bx.$cloneObject(e.objects[a].init, i.init);
  }),
  (apn.CES.prototype.$O3o = function (e) {
    for (var t in e.states[0].objects) this.$O3x(t);
  }),
  (apn.CES.prototype.$O5K = function (e) {
    if ((this.viewer.o.clearItrOnPause && (e = !0), this.$O4o)) {
      for (var t = this.$O4o.concat(), a = 0; a < t.length; a++)
        (e || ("CWP" != t[a].action && "SPT" != t[a].action)) &&
          (this.clearTimeout(t[a].id), t.splice(a, 1), a--);
      e && delete this.$O4o;
    }
  }),
  (apn.CES.prototype.$O5I = function (e) {
    if (this.$O4o)
      for (var t = 0; t < this.$O4o.length; t++)
        this.$O4o[t].id == e && (this.$O4o.splice(t, 1), t--);
  }),
  (apn.CES.prototype.$Ocy = function (e) {
    var t = !1;
    if (this.$O4o)
      for (var a = 0; a < this.$O4o.length; a++)
        this.$O4o[a].grp &&
          this.$O4o[a].grp == e &&
          (this.$Ocz(this.$O4o[a].id), this.$O4o.splice(a, 1), a--, (t = !0));
    return t;
  }),
  (apn.CES.prototype.$O5J = function (e, t, a) {
    (this.$O4o = this.$O4o || []), this.$O4o.push({ id: e, action: t, grp: a });
  }),
  (apn.CES.prototype.setTimeout = function (e, t, a) {
    if (!t) return e(), "";
    var i = this,
      n = {
        time: t,
        onEnd: function (t) {
          void 0 !== i._timeouts[t.id] && delete i._timeouts[t.id],
            i._timeoutsConP &&
              void 0 !== i._timeoutsConP[t.id] &&
              delete i._timeoutsConP[t.id],
            e();
        },
        onCancel: function (e) {
          void 0 !== i._timeouts[e.id] && delete i._timeouts[e.id],
            i._timeoutsConP &&
              void 0 !== i._timeoutsConP[e.id] &&
              delete i._timeoutsConP[e.id];
        },
      };
    (apn.CES.$O5Q = apn.CES.$O5Q || 0),
      apn.CES.$O5Q++,
      (n.id = "TMR$" + apn.CES.$O5Q);
    var r = bx.Transition.add(n);
    return (
      (this._timeouts = this._timeouts || {}),
      (this._timeouts[n.id] = r),
      a &&
        a.onPagePause &&
        ("complete" == a.onPagePause || "clear" == a.onPagePause
          ? ((this._timeoutsConP = this._timeoutsConP || {}),
            (this._timeoutsConP[n.id] = {
              id: r + ":" + n.id,
              type: a.onPagePause,
            }))
          : this.log(
              void 0,
              "Invalid value for 'onPagePause' of setTimeout(). Value=" +
                a.onPagePause
            )),
      r + ":" + n.id
    );
  }),
  (apn.CES.prototype.clearTimeout = function (e) {
    if (e) {
      var t = (e + "").split(":");
      2 == t.length && bx.Transition.end(parseInt(t[0]), t[1]);
    }
  }),
  (apn.CES.prototype.$Ocz = function (e) {
    if (e) {
      var t = (e + "").split(":");
      2 == t.length && bx.Transition.cancel(parseInt(t[0]), t[1]);
    }
  }),
  (apn.CES.prototype.cancelTimeout = apn.CES.prototype.$Ocz),
  (apn.CES.prototype._cancelTimeoutAll = function () {
    if (this._timeouts)
      for (var e in this._timeouts) bx.Transition.cancel(this._timeouts[e], e);
  }),
  (apn.CES.prototype.$O3v = function () {
    if (this.viewer.o.exeUseZIndex2) {
      var e;
      for (var t in this.screen.objects)
        (void 0 === e || e < this.screen.objects[t].create.zi2) &&
          (e = this.screen.objects[t].create.zi2),
          this.$O3d[t] &&
            void 0 !== this.$O3d[t].apnCur.zIndex &&
            (void 0 === e || e < this.$O3d[t].apnCur.zIndex) &&
            (e = this.$O3d[t].apnCur.zIndex);
      e = e || 0;
    } else {
      var e = bx.CCanvasWnd.ZINDEX_OBJECT;
      for (var t in this.screen.objects)
        e < this.screen.objects[t].create.zIndex &&
          (e = this.screen.objects[t].create.zIndex),
          this.$O3d[t] &&
            void 0 !== this.$O3d[t].apnCur.zIndex &&
            e < this.$O3d[t].apnCur.zIndex &&
            (e = this.$O3d[t].apnCur.zIndex);
    }
    return e;
  }),
  (apn.CES.prototype.getZIndexMax = apn.CES.prototype.$O3v),
  (apn.CES.prototype.$O3w = function () {
    if (this.viewer.o.exeUseZIndex2) {
      var e;
      for (var t in this.screen.objects)
        (void 0 === e || e > this.screen.objects[t].create.zi2) &&
          (e = this.screen.objects[t].create.zi2),
          this.$O3d[t] &&
            void 0 !== this.$O3d[t].apnCur.zIndex &&
            (void 0 === e || e > this.$O3d[t].apnCur.zIndex) &&
            (e = this.$O3d[t].apnCur.zIndex);
      e = e || 0;
    } else {
      var e = bx.CCanvasWnd.ZINDEX_OBJECT;
      for (var t in this.screen.objects)
        e > this.screen.objects[t].create.zIndex &&
          (e = this.screen.objects[t].create.zIndex),
          this.$O3d[t] &&
            void 0 !== this.$O3d[t].apnCur.zIndex &&
            e > this.$O3d[t].apnCur.zIndex &&
            (e = this.$O3d[t].apnCur.zIndex);
    }
    return e;
  }),
  (apn.CES.prototype._setWgtZIndex = function (e, t, a) {
    t
      ? this.viewer.o.exeUseZIndex2
        ? apn.IWidget.exeSetZIndex(e, t.zi2)
        : apn.IWidget.exeSetZIndex(e, t.zIndex)
      : apn.IWidget.exeSetZIndex(e, a);
  }),
  (apn.CES.prototype._getWgtZIndex = function (e) {
    return this.viewer.o.exeUseZIndex2 ? e.zi2 : e.zIndex;
  }),
  (apn.CES.$O5M = function (e, t, a, i, n) {
    return a ? Math.cos(a) * (i - e) - Math.sin(a) * (n - t) + e : i;
  }),
  (apn.CES.$O5N = function (e, t, a, i, n) {
    return a ? Math.sin(a) * (i - e) + Math.cos(a) * (n - t) + t : n;
  }),
  (apn.CES.$O4p = function (e, t, a, i, n, r, o, s, p) {
    var l,
      d = o && o > 4 ? o : 32,
      c = 0;
    for (r = r || [], r.length = d, l = 0; l < d; l++) r[l] = {};
    for (l = 0; l < d; l++)
      (c = (l / d) * (2 * Math.PI)),
        (r[l].x = e + a / 2 + (a / 2) * Math.cos(c)),
        (r[l].y = t + i / 2 + (i / 2) * Math.sin(c)),
        n &&
          ((r[l].x0 = apn.CES.$O5M(
            e + a / 2 + (s || 0),
            t + i / 2 + (p || 0),
            n,
            r[l].x,
            r[l].y
          )),
          (r[l].y = apn.CES.$O5N(
            e + a / 2 + (s || 0),
            t + i / 2 + (p || 0),
            n,
            r[l].x,
            r[l].y
          )),
          (r[l].x = r[l].x0),
          delete r[l].x0);
    return r;
  }),
  (apn.CES._approximate_rrect_to_polygon = function (
    e,
    t,
    a,
    i,
    n,
    r,
    o,
    s,
    p,
    l,
    d,
    c,
    g
  ) {
    var u,
      h,
      x,
      f = Math.floor((d && d >= 8 ? d : 32) / 4) - 1,
      y = 1;
    if (
      ((l = l || []),
      (l.length = 0),
      (n = n || 0),
      (r = r || 0),
      (s = s || 0),
      (o = o || 0),
      (y = Math.max((n + r) / a, (s + o) / a, (n + s) / i, (r + o) / i, 1)),
      y > 1 && ((n /= y), (r /= y), (s /= y), (o /= y)),
      (x = r))
    ) {
      for (l.push({ x: e + a, y: t + x }), u = 1; u < f; u++)
        (h = (u / f) * (0.5 * Math.PI)),
          l.push({
            x: e + a - x + x * Math.cos(h),
            y: t + x - x * Math.sin(h),
          });
      l.push({ x: e + a - x, y: t });
    } else l.push({ x: e + a, y: t });
    if ((x = n)) {
      for (
        l[l.length - 1].x != e + x && l.push({ x: e + x, y: t }), u = 1;
        u < f;
        u++
      )
        (h = (u / f) * (0.5 * Math.PI) + 0.5 * Math.PI),
          l.push({ x: e + x + x * Math.cos(h), y: t + x - x * Math.sin(h) });
      l.push({ x: e, y: t + x });
    } else l.push({ x: e, y: t });
    if ((x = s)) {
      for (
        l[l.length - 1].y != t + i - x && l.push({ x: e, y: t + i - x }), u = 1;
        u < f;
        u++
      )
        (h = (u / f) * (0.5 * Math.PI) + Math.PI),
          l.push({
            x: e + x + x * Math.cos(h),
            y: t + i - x - x * Math.sin(h),
          });
      l.push({ x: e + x, y: t + i });
    } else l.push({ x: e, y: t + i });
    if ((x = o)) {
      for (
        l[l.length - 1].x != e + a - x && l.push({ x: e + a - x, y: t + i }),
          u = 1;
        u < f;
        u++
      )
        (h = (u / f) * (0.5 * Math.PI) + 1.5 * Math.PI),
          l.push({
            x: e + a - x + x * Math.cos(h),
            y: t + i - x - x * Math.sin(h),
          });
      l[0].y != t + i - x && l.push({ x: e + a, y: t + i - x });
    } else l.push({ x: e + a, y: t + i });
    if (p)
      for (u = 0; u < l.length; u++)
        (l[u].x0 = apn.CES.$O5M(
          e + a / 2 + (c || 0),
          t + i / 2 + (g || 0),
          p,
          l[u].x,
          l[u].y
        )),
          (l[u].y = apn.CES.$O5N(
            e + a / 2 + (c || 0),
            t + i / 2 + (g || 0),
            p,
            l[u].x,
            l[u].y
          )),
          (l[u].x = l[u].x0),
          delete l[u].x0;
    return l;
  }),
  (apn.CES.getLineAngle = function (e) {
    return (
      (Math.atan2(e.x[1] - e.x[0], e.y[0] - e.y[1]) + 2 * Math.PI) %
      (2 * Math.PI)
    );
  }),
  (apn.CES.sptERR = {
    notFound: {
      en: "Widget is not found.",
      ko: "위젯이 존재하지 않습니다.",
      ja: "ウィジェットが存在しません。",
    },
    notFoundPage: {
      en: "Page is not found.",
      ko: "페이지가 존재하지 않습니다.",
      ja: "ページが存在しません。",
    },
    notSet: {
      en: "Tried to access an unset value.",
      ko: "Set되지 않은 값에 대한 Get요청입니다.",
      ja: "Setされていない値のGet要求です。",
    },
    notSetValue: {
      en: "Tried to set undefined/invalid value.",
      ko: "Set할 수 없는 값을 지정하려고 했습니다. 실행이 취소되었습니다.",
      ja: "Setできない値を指定しようとしました。実行がキャンセルされました。",
    },
    noSupportProp: {
      en: "The property is not supported for the widget.",
      ko: "위젯이 지원하지 않는 속성입니다.",
      ja: "ウィジェットがサポートしていない属性です。",
    },
    noSupportAPI: {
      en: "The API is not supported for the widget.",
      ko: "위젯이 지원하지 않는 API입니다.",
      ja: "ウィジェットがサポートしていないAPIです。",
    },
    noAPIparam: {
      en: "Unsupported parameter is passed for API.",
      ko: "API가 지원하지 않는 인수입니다.",
      ja: "APIがサポートしていない引数です。",
    },
    dupSearch: {
      en: "More than one instance are searched by the request.",
      ko: "하나 이상의 객체가 검색이 되었습니다.",
      ja: "複数のオブジェクトが検索されました。",
    },
    errAction: {
      en: "Problem in executing the given Action.",
      ko: "액션 실행에서 오류가 발생했습니다.",
      ja: "アクションの実行でエラーが発生しました。",
    },
    errLoop: {
      en: "Requested function is canceled by Aspen due to possibility of infinite-loop.",
      ko: "무한 루프 발생의 가능성으로 인하여, 함수 호출이 Aspen에 의해 취소되었습니다.",
      ja: "無限ループ発生の可能性により、関数の呼び出しがAspenによってキャンセルされました。",
    },
    noSupportClone: {
      en: "Cloning of Scene type widgets are not supported yet.",
      ko: "Scene구조 위젯에 대한 Clone 기능은 아직 제공되지 않습니다.",
      ja: "Scene構造ウィジェットのClone機能はまだ提供されていません。",
    },
    noSupportExeRun: {
      en: 'The execution layer cannot run "exe.run()" for ',
      ko: "현재 실행기가 지원하지 않는 exe.run()기능입니다.",
      ja: "現在実行機がサポートしていないexe.run（）の機能です。",
    },
  }),
  (apn.CES._sptCrX2OrX = function (e, t) {
    return (t + e.init.shape.w / 2) / e.init.shape.w;
  }),
  (apn.CES._sptCrY2OrY = function (e, t) {
    return (t + e.init.shape.h / 2) / e.init.shape.h;
  }),
  (apn.CES._sptOrX2CrX = function (e, t) {
    return t * e.init.shape.w - e.init.shape.w / 2;
  }),
  (apn.CES._sptOrY2CrY = function (e, t) {
    return t * e.init.shape.h - e.init.shape.h / 2;
  }),
  (apn.CES.$OcA = function (e) {
    var t = "solid";
    return e && (t = 2 == e.length && e[0] == e[1] ? "dotted" : "dashed"), t;
  }),
  (apn.CES.$OcE = function (e) {
    for (var t = apn.P.getStatic(apn.P.LINEDASH), a = 0; a < t.length; a++)
      if (t[a].title == e) return t[a].value;
    return null;
  }),
  (apn.CES.prototype.runITR = function (e, t, a, i) {
    function n() {
      a &&
        (e.target && e.target.objectID && o.wgtTag(e.target.objectID)
          ? a(e.target.objectID)
          : a());
    }
    if (
      e &&
      e.target &&
      e.target.objectID &&
      "$" != e.target.objectID[0] &&
      !(
        this.screen.objects[e.target.objectID] &&
        this.screen.objects[e.target.objectID].create.data &&
        this.screen.objects[e.target.objectID].create.data.wgtID
      )
    )
      return (
        this.sptLog(
          "warn",
          apn.CExe.GL(apn.CES.sptERR, "notFound") +
            " (Invalid widget=" +
            this.$OcB(e.target.objectID) +
            ")"
        ),
        void (a && a())
      );
    if (
      (e.timing && !e.timing.duration && delete e.timing,
      e.set && e.set.alpha && e.set.alpha <= 0.01 && (e.set.alpha *= 100),
      t)
    ) {
      var r;
      "string" == typeof t && (r = t.split(";")).length > 1
        ? ((e.$O3y = bx.$checkNaN(parseInt(r[0]))), (e.$Ocp = r[1]))
        : (e.$O3y = bx.$checkNaN(parseInt(t)));
    }
    i && "clear" == i.onPageDestroy && (e._autoClear = !0);
    var o = this;
    this.$O35(e, n, void 0, "SPT") ||
      this.sptLog(
        "err",
        apn.CExe.GL(apn.CES.sptERR, "errAction") + " (Action=" + e.action + ")"
      );
  }),
  (apn.CES.prototype.sptEval = function (e, t, a) {
    var i;
    if (((this.$OcC = a), (i = this.$Oco(e, t)))) {
      if (a.depth > 5)
        return (
          this.sptLog(
            "err",
            apn.CExe.GL(apn.CES.sptERR, "errLoop") +
              " (WidgetID=" +
              this.$OcB(a.oId) +
              ")"
          ),
          !0
        );
      if (window.AspenUIRun) {
        var n;
        n = apn.P.resolveCompositeSysEV(a.ev || e);
        var r = bx.$cloneObject({}, a);
        return (
          r.depth++,
          AspenUIRun("run_script", {
            src: i,
            apx: this,
            objectID: a.oId || t,
            param: n && n.param ? n.param : void 0,
            stack: r,
          }),
          !0
        );
      }
    }
    return !1;
  }),
  (apn.CES.$OcD = function (e) {
    var t,
      a = {};
    return (
      "string" == typeof e && (t = e.split(";")).length > 1
        ? ((a.wait = bx.$checkNaN(parseInt(t[0]))), (a.grp = t[1]))
        : (a.wait = bx.$checkNaN(parseInt(e))),
      a
    );
  }),
  (apn.CES.prototype.sptPageSetVar = function (e, t, a) {
    function i() {
      (n.$Ocx = n.$Ocx || {}), (n.$Ocx[e] = t);
    }
    var n = this;
    if (a) {
      var r = apn.CES.$OcD(a),
        o = this.setTimeout(function () {
          n.$O5I(o), n.$O7K || i();
        }, r.wait);
      this.$O5J(o, "SPT", r.grp);
    } else i();
  }),
  (apn.CES.prototype.sptPageGetVar = function (e, t) {
    if (!e || !e.indexOf || 0 != e.indexOf("$template:"))
      return this.$Ocx && void 0 !== this.$Ocx[e]
        ? this.$Ocx[e]
        : t
        ? void 0
        : "";
    e = e.substring(10);
    var a = this.screen.UI.CExe;
    if (a && a.apxTdata)
      for (var i = 0; i < a.apxTdata.length; i++)
        if (a.apxTdata[i].id && a.apxTdata[i].id == e)
          return apn.CES.sptDataToArray(a.apxTdata[i].data);
    if (a && a.apxTdataF)
      for (var i = 0; i < a.apxTdataF.length; i++)
        if (a.apxTdataF[i].id && a.apxTdataF[i].id == e)
          return a.apxTdataF[i].json.data;
  }),
  (apn.CES.prototype.sptWgtClone = function (e, t, a) {
    var i = this.wgtClone(e, t, a);
    return void 0 === i
      ? (this.sptLog(
          "warn",
          apn.CExe.GL(apn.CES.sptERR, "notFound") +
            " (WidgetID=" +
            this.$OcB(e) +
            ")"
        ),
        "")
      : null === i
      ? (this.sptLog(
          "warn",
          apn.CExe.GL(apn.CES.sptERR, "noSupportClone") +
            " (WidgetID=" +
            this.$OcB(e) +
            ")"
        ),
        "")
      : i;
  }),
  (apn.CES.prototype.sptWgtPut = function (e, t, a) {
    if (t) {
      var i,
        n = this.screen.objects[t];
      if (!(n && n.layout && (i = n.layout.layers)))
        return void this.sptLog(
          "warn",
          apn.CExe.GL(apn.CES.sptERR, "notFound") +
            " LayerContainerID=[" +
            t +
            "], Widget=[" +
            this.$OcB(e) +
            "]"
        );
      var r;
      for (var o in i)
        if (i[o].title == a || void 0 === a) {
          r = i[o].id;
          break;
        }
      void 0 === r && (r = i[0].id);
    }
    var s;
    if ((s = this.wgtGetParent(e))) {
      var p = this.screen.objects[s];
      if (p.layout && p.layout.children)
        for (var o = 0; o < p.layout.children.length; o++)
          if (p.layout.children[o] == e) {
            p.layout.children.splice(o, 1);
            break;
          }
    }
    if (this.project.property.fixWgtPut) {
      var l = {
        rotate: void 0,
        rotateX: void 0,
        rotateZ: void 0,
        rotateY: void 0,
        resize: void 0,
        resizeX: void 0,
        resizeY: void 0,
        origin: void 0,
        x: void 0,
        y: void 0,
        z: void 0,
        originX: void 0,
        originY: void 0,
      };
      for (var o in l) l[o] = apn.CES.transformGet(this.$O3d[e], o);
    }
    if (t) {
      var d = this.screen.objects[r];
      (d.layout = d.layout || {}),
        (d.layout.children = d.layout.children || []),
        d.layout.children.push(e),
        this.$O3d[r].appendChild(this.$O3d[e]),
        this.$O3x(e),
        this.$O3t(e, "parent", r);
    } else
      this.tag.appendChild(this.$O3d[e]),
        this.$O3x(e),
        this.$O3t(e, "parent", void 0);
    if (this.project.property.fixWgtPut) {
      for (var o in l) apn.CES.transformSet(this.$O3d[e], o, l[o]);
      apn.CES.transformApply(this.$O3d[e]);
    }
  }),
  (apn.CES.prototype.sptWgtBubbling = function (e, t, a, i) {
    var n,
      r = this.wgtTag(e);
    if (a)
      for (var o in apn.P.eventTitle)
        if (a == apn.P.eventTitle[o]) {
          n = o;
          break;
        }
    if (((r.apxBubblingCtl = r.apxBubblingCtl || {}), t))
      if (n) r.apxBubblingCtl[n] = !i || 1;
      else for (var o in apn.CES.$Ocv) r.apxBubblingCtl[o] = !i || 1;
    else
      n
        ? r.apxBubblingCtl[n] && delete r.apxBubblingCtl[n]
        : (r.apxBubblingCtl = {});
  }),
  (apn.CES.prototype.sptWgtGetProp = function (e, t, a, i) {
    var n;
    if (!(n = this.screen.objects[e]))
      return (
        a ||
          this.sptLog(
            "warn",
            apn.CExe.GL(apn.CES.sptERR, "notFound") +
              " (WidgetID=" +
              this.$OcB(e) +
              ")"
          ),
        i ? void 0 : ""
      );
    if (!n.create.data || !n.create.data.wgtID)
      return (
        a ||
          this.sptLog(
            "warn",
            apn.CExe.GL(apn.CES.sptERR, "notFound") +
              " (Invalid widget=" +
              this.$OcB(e) +
              ")"
          ),
        i ? void 0 : ""
      );
    if (("w" == t || "h" == t) && n.init.shape.type != bx.CCanvasWnd.SHAPE_RECT)
      return (
        a ||
          this.sptLog(
            "warn",
            apn.CExe.GL(apn.CES.sptERR, "noSupportProp") +
              " (WidgetID=" +
              this.$OcB(e) +
              ': "w", "h")'
          ),
        i ? void 0 : ""
      );
    if ("x" == t) return n.init.position.x;
    if ("y" == t) return n.init.position.y;
    if ("w" == t) return n.init.shape.w;
    if ("h" == t) return n.init.shape.h;
    if ("state" == t) {
      var r;
      if (
        (r = this.wgtGetProperty(e, "apxState")
          ? "$APX" + this.wgtGetProperty(e, "apxState")
          : this.stateGetActive(e, !0))
      )
        return apn.Project.getExeStateTitleByObjectID(
          this.project,
          this.getPageID(),
          e,
          r
        );
    }
    if (!n.create.data || !n.create.data.styles)
      return (
        a ||
          this.sptLog(
            "warn",
            apn.CExe.GL(apn.CES.sptERR, "noSupportProp") +
              " (WidgetID=" +
              this.$OcB(e) +
              ': "text", "textColor", "visibility", "angle", "opacity", "dragX", "dragY")'
          ),
        i ? void 0 : ""
      );
    var o,
      s = apn.Project.getWidgetModule(n.create.data);
    if (!s || !s.exeItrNoText) {
      if ("text" == t)
        return (
          apn.Project.resolveStyle(
            this.project,
            "text",
            this.wgtGetProperty(e, "apxText")
          ) || ""
        );
      if ("textColor" == t)
        return (
          apn.Project.resolveStyle(
            this.project,
            "fontStyle",
            this.wgtGetProperty(e, "apxTextColor")
          ) || ""
        );
      if ("textItalic" == t)
        return (
          apn.Project.resolveStyle(
            this.project,
            "fontItalic",
            this.wgtGetProperty(e, "apxTextItalic")
          ) || !1
        );
      if ("textBold" == t)
        return (
          apn.Project.resolveStyle(
            this.project,
            "fontBold",
            this.wgtGetProperty(e, "apxTextBold")
          ) || !1
        );
      if ("textUnderline" == t)
        return (
          apn.Project.resolveStyle(
            this.project,
            "fontUnderlined",
            this.wgtGetProperty(e, "apxTextUnderline")
          ) || !1
        );
      if ("fontSize" == t)
        return (
          apn.Project.resolveStyle(
            this.project,
            "fontSize",
            this.wgtGetProperty(e, "apxFontSize")
          ) || ""
        );
      if ("font" == t) {
        var p = apn.Project.resolveStyle(
          this.project,
          "font",
          this.wgtGetProperty(e, "apxFont")
        );
        return apn.fonts && apn.fonts[p] && apn.fonts[p].title
          ? apn.fonts[p].title
          : "";
      }
    }
    if ("strokeStyle" == t)
      return (
        apn.Project.resolveStyle(
          this.project,
          "strokeStyle",
          this.wgtGetProperty(e, "apxStrokeStyle")
        ) || ""
      );
    if ("fillStyle" == t)
      return (
        apn.Project.resolveStyle(
          this.project,
          "fillStyle",
          this.wgtGetProperty(e, "apxFillStyle")
        ) || ""
      );
    if ("lineDash" == t)
      return apn.CES.$OcA(
        apn.Project.resolveStyle(
          this.project,
          "lineDash",
          this.wgtGetProperty(e, "apxLineDash")
        )
      );
    if ("lineWeight" == t)
      return (
        apn.Project.resolveStyle(
          this.project,
          "lineWidth",
          this.wgtGetProperty(e, "apxLineWeight")
        ) || ""
      );
    if ("visibility" == t) {
      if (
        ((o = apn.Project.resolveStyle(
          this.project,
          "visibility",
          this.wgtGetProperty(e, "apxVisibility")
        )),
        "Hide" == o || o === !1)
      )
        return "hidden";
      if ("Pass" == o || 1 === o) return "visibleEventPass";
      if ("Block" == o || 2 === o) return "visibleEventBlock";
      if ("Show" == o || o === !0) return "visible";
    }
    if ("angle" == t)
      return (
        (o = apn.Project.resolveStyle(
          this.project,
          "angle",
          this.wgtGetProperty(e, "apxAngle")
        )),
        bx.CCanvasWnd.radToDegree(o)
      );
    if ("opacity" == t)
      return (
        (o = this.wgtGetProperty(e, "apxOpacity")),
        void 0 !== o && bx.$checkNaN(parseFloat(o)),
        apn.Project.resolveStyle(this.project, "alpha", o)
      );
    if (
      "dragX" == t &&
      ((o = apn.Project.resolveStyle(
        this.project,
        "dragX",
        this.wgtGetProperty(e, "apxDragX")
      )),
      o === !0 || o === !1)
    )
      return o;
    if (
      "dragY" == t &&
      ((o = apn.Project.resolveStyle(
        this.project,
        "dragY",
        this.wgtGetProperty(e, "apxDragY")
      )),
      o === !0 || o === !1)
    )
      return o;
    if ("media" == t) return this.wgtGetProperty(e, "sptMediaID") || "";
    if ("label" == t)
      return (
        apn.Project.resolveStyle(
          this.project,
          "title",
          this.wgtGetProperty(e, "apxLabel")
        ) || ""
      );
    if ("cursor" == t)
      return (
        (o = apn.Project.resolveStyle(
          this.project,
          "csr",
          this.wgtGetProperty(e, "apxCursor")
        )),
        "apn.auto" == o ? "Aspen/auto" : o
      );
    if ("value" == t) {
      var s = apn.Project.getWidgetModule(this.screen.objects[e].create.data);
      if (s && s.exeInputGet) {
        var l = s.exeInputGet(this, this.$O3d[e]);
        return i ? l : void 0 === l || null === l ? "" : l;
      }
    }
    if ("acceptDrop" == t) {
      var d = _this.$O3u(e, "acceptDrop");
      return d === !0 || d === !1 ? d : "";
    }
    if ("acceptMouseOver" == t) {
      var c = _this.$O3u(e, "acceptMouseOver");
      return c === !0 || c === !1 ? c : "";
    }
    return "origin" == t
      ? {
          x: apn.CES._sptCrX2OrX(
            this.screen.objects[e],
            this.screen.objects[e].init.cx || 0
          ),
          y: apn.CES._sptCrY2OrY(
            this.screen.objects[e],
            this.screen.objects[e].init.cy || 0
          ),
        }
      : (a ||
          this.sptLog(
            "warn",
            apn.CExe.GL(apn.CES.sptERR, "noSupportProp") +
              " (Widget=" +
              this.$OcB(e) +
              ': "' +
              t +
              '")'
          ),
        i ? void 0 : "");
  }),
  (apn.CES.prototype.sptWgtSetProp = function (e, t, a, i) {
    function n() {
      if ("label" == t) return void r.wgtSetProperty(e, "apxLabel", a);
      if ("cursor" == t)
        return void r.wgtSetProperty(
          e,
          "apxCursor",
          "Aspen/auto" == a ? "apn.auto" : a
        );
      if ("media" == t) return void r.wgtSetProperty(e, "sptMediaID", a);
      if ("strokeStyle" == t)
        return void r.wgtSetProperty(e, "apxStrokeStyle", a);
      if ("fillStyle" == t) return void r.wgtSetProperty(e, "apxFillStyle", a);
      if ("lineDash" == t)
        return void r.wgtSetProperty(e, "apxLineDash", apn.CES.$OcE(a));
      if ("lineWeight" == t)
        return void r.wgtSetProperty(e, "apxLineWeight", a);
      if (
        "fontSize" == t ||
        "textItalic" == t ||
        "textBold" == t ||
        "textUnderline" == t
      ) {
        var i = apn.Project.getWidgetModule(r.screen.objects[e].create.data);
        if (!i || !i.exeItrNoText)
          return (
            "fontSize" == t &&
              r.wgtSetProperty(
                e,
                "apxFontSize",
                bx.$checkNaN(parseInt(a)) + "px"
              ),
            "textItalic" == t && r.wgtSetProperty(e, "apxTextItalic", a),
            "textBold" == t && r.wgtSetProperty(e, "apxTextBold", a),
            void (
              "textUnderline" == t && r.wgtSetProperty(e, "apxTextUnderline", a)
            )
          );
      } else if ("font" == t && a) {
        var i = apn.Project.getWidgetModule(r.screen.objects[e].create.data);
        if (!i || !i.exeItrNoText) {
          var n;
          if (apn.fonts)
            for (var o in apn.fonts) {
              if (
                (apn.fonts[o].title || "").toLowerCase() ==
                (a || "").toLowerCase()
              ) {
                n = o;
                break;
              }
              if (
                (apn.fonts[o].title || "").toLowerCase() ==
                (a || "").toLowerCase() + " (i)"
              ) {
                n = o;
                break;
              }
              if (
                (apn.fonts[o].title || "").toLowerCase() ==
                (a || "").toLowerCase() + "(i)"
              ) {
                n = o;
                break;
              }
            }
          return n
            ? void r.wgtSetProperty(e, "apxFont", n)
            : void r.sptLog(
                "warn",
                apn.CExe.GL(apn.CES.sptERR, "notSetValue") +
                  " (WidgetID=" +
                  r.$OcB(e) +
                  ', key=font, value="' +
                  a +
                  '")'
              );
        }
      } else {
        if ("value" == t) {
          var i = apn.Project.getWidgetModule(r.screen.objects[e].create.data);
          return void (
            i &&
            i.exeInputSet &&
            (i.exeInputSet(r, r.$O3d[e], a), r._dispatchProp("apxValue", e, a))
          );
        }
        if ("x" == t || "y" == t || "w" == t || "h" == t) {
          var s = r.screen.objects[e];
          if ("x" == t || "y" == t) {
            var p = s.init.position.x,
              l = s.init.position.y;
            return (
              "x" == t ? (p = a) : "y" == t && (l = a),
              void r.$O3i({
                action: "CWP",
                target: { objectID: e },
                set: { position: { x: p, y: l } },
              })
            );
          }
          if (
            ("w" == t || "h" == t) &&
            s &&
            s.init.shape.type == bx.CCanvasWnd.SHAPE_RECT
          ) {
            var d = s.init.shape.w,
              c = s.init.shape.h;
            return (
              "w" == t ? (d = a) : "h" == t && (c = a),
              void r.$O3i({
                action: "CWP",
                target: { objectID: e },
                set: { size: { w: d, h: c } },
              })
            );
          }
        } else {
          if ("angle" == t)
            return (
              (a = bx.CCanvasWnd.degreeToRad(a)),
              void r.$O3i({
                action: "CWP",
                target: { objectID: e },
                set: { angle: a },
              })
            );
          if ("opacity" == t)
            return void r.$O3i({
              action: "CWP",
              target: { objectID: e },
              set: { alpha: a },
            });
          if ("acceptDrop" == t) return void r.wgtAcceptDrop(e, a);
          if ("acceptMouseOver" == t) return void r.wgtAcceptPointerOver(e, a);
        }
      }
      r.sptLog(
        "warn",
        apn.CExe.GL(apn.CES.sptERR, "noSupportProp") +
          " (Widget=" +
          r.$OcB(e) +
          ': "' +
          t +
          '")'
      );
    }
    var r = this;
    if (
      !(
        this.screen.objects[e] &&
        this.screen.objects[e].create.data &&
        this.screen.objects[e].create.data.wgtID
      )
    )
      return void this.sptLog(
        "warn",
        apn.CExe.GL(apn.CES.sptERR, "notFound") +
          " (Invalid widget=" +
          this.$OcB(e) +
          ")"
      );
    if (i) {
      var o = apn.CES.$OcD(i),
        s = this.setTimeout(function () {
          r.$O5I(s), r.$O7K || n();
        }, o.wait);
      this.$O5J(s, "SPT", o.grp);
    } else n();
  }),
  (apn.CES.prototype.sptWgtSetData = function (e, t, a, i) {
    function n() {
      r.wgtSetProperty(e, t, a);
    }
    var r = this;
    if (
      !(
        this.screen.objects[e] &&
        this.screen.objects[e].create.data &&
        this.screen.objects[e].create.data.wgtID
      )
    )
      return void this.sptLog(
        "warn",
        apn.CExe.GL(apn.CES.sptERR, "notFound") +
          " (Invalid widget=" +
          this.$OcB(e) +
          ")"
      );
    if (i) {
      var o = apn.CES.$OcD(i),
        s = this.setTimeout(function () {
          r.$O5I(s), r.$O7K || n();
        }, o.wait);
      this.$O5J(s, "SPT", o.grp);
    } else n();
  }),
  (apn.CES.prototype.sptWgtGetData = function (e, t, a) {
    if (
      !(
        this.screen.objects[e] &&
        this.screen.objects[e].create.data &&
        this.screen.objects[e].create.data.wgtID
      )
    )
      return (
        this.sptLog(
          "warn",
          apn.CExe.GL(apn.CES.sptERR, "notFound") +
            " (Invalid widget=" +
            this.$OcB(e) +
            ")"
        ),
        a ? void 0 : ""
      );
    var i = this.wgtGetProperty(e, t);
    return a ? i : void 0 === i ? "" : i;
  }),
  (apn.CES.sptDataToArray = function (e) {
    if (e && e.data && e.data.tbl && e.data.tbl.length) {
      e = e.data;
      var t,
        a = [],
        i = !0;
      if (e.st)
        for (t in e.st) {
          i = !1;
          break;
        }
      for (var n = 0; n < e.tbl.length; n++) {
        a.push([]);
        for (t in e.tbl[n])
          (i || e.st[t]) &&
            (e.tbl[n][t] instanceof Object && void 0 !== e.tbl[n][t].data
              ? a[a.length - 1].push(e.tbl[n][t].data)
              : e.tbl[n][t] instanceof Object
              ? a[a.length - 1].push(e.tbl[n][t].mediaID)
              : a[a.length - 1].push(e.tbl[n][t]));
      }
      return a;
    }
  }),
  (apn.CES.prototype.sptFileGetVar = function (e, t) {
    if (!e || !e.indexOf || 0 != e.indexOf("$template:")) {
      var a = this.ctxGet(e);
      return t ? a : void 0 === a ? "" : a;
    }
    e = e.substring(10);
    var i = apn.Project.getLayout(this.project).property.CExe;
    if (i && i.apxTdata)
      for (var n = 0; n < i.apxTdata.length; n++)
        if (i.apxTdata[n].id && i.apxTdata[n].id == e)
          return apn.CES.sptDataToArray(i.apxTdata[n].data);
    if (i && i.apxTdataF)
      for (var n = 0; n < i.apxTdataF.length; n++)
        if (i.apxTdataF[n].id && i.apxTdataF[n].id == e)
          return i.apxTdataF[n].json.data;
  }),
  (apn.CES.prototype.sptFileSetVar = function (e, t, a) {
    function i() {
      n.ctxSet(e, t);
    }
    var n = this;
    if (a) {
      var r = apn.CES.$OcD(a),
        o = this.setTimeout(function () {
          n.$O5I(o), n.$O7K || i();
        }, r.wait);
      this.$O5J(o, "SPT", r.grp);
    } else i();
  }),
  (apn.CES.prototype.sptFileBrowse = function (e, t) {
    if ("mostRecentPage" == e) return this.viewer.getPM().getCurrent();
    if ("pages" == e || "overlayPages" == e || "popupPages" == e) {
      var a;
      "overlayPages" == e
        ? (a = "apn.COverlayPage")
        : "popupPages" == e && (a = "apn.CPopupPage");
      for (
        var i = apn.Project.getPages(this.project, void 0, a),
          n = apn.Project.getPageTitles(this.project, void 0, a),
          r = [],
          o = 0;
        o < i.length;
        o++
      )
        n[o] && r.push({ id: i[o], label: n[o] });
      return r;
    }
    if ("widgets" == e) {
      var r = [];
      if (void 0 === t || !this.project.pages[t])
        return (
          this.sptLog(
            "err",
            apn.CExe.GL(apn.CES.sptERR, "notFoundPage") +
              " (param(pageId)=" +
              t +
              ")"
          ),
          r
        );
      var s,
        p = this.project.pages[t].objects;
      for (var o in p)
        p[o].create.data &&
          p[o].create.data.styles &&
          p[o].create.data.styles.title &&
          ((s = { id: o, label: p[o].create.data.styles.title }),
          p[o].create.data.properties &&
            p[o].create.data.properties.attrs &&
            (s.data = p[o].create.data.properties.attrs),
          r.push(s));
      return r;
    }
    if ("scale" == e)
      return { x: this.viewer.getStretchX(), y: this.viewer.getStretchY() };
    if ("supportPageCreate" == e) return !this.viewer.o.clearItrOnPause;
    if ("resolution" == e) return apn.Project.getScreenSize(this.project);
    if ("preemptiveTapStart" == e) {
      if (apn.dbUI && apn.dbUI.system && 1 == apn.dbUI.system.exeEventStart) {
        var l = apn.Project.getLayout(this.project).property.CExe;
        if (l && l.event && "Y" == l.event.TS1) return !0;
      }
      return !1;
    }
    this.sptLog(
      "err",
      apn.CExe.GL(apn.CES.sptERR, "noAPIparam") +
        " (API=file.browse, key=" +
        e +
        ")"
    );
  }),
  (apn.CES.prototype.$OcB = function (e) {
    if (
      e &&
      this.screen &&
      this.screen.objects[e] &&
      this.screen.objects[e].create.data &&
      this.screen.objects[e].create.data.styles
    ) {
      var t = "";
      if (
        (this.screen.objects[e].create.data.styles.title &&
          (t += this.screen.objects[e].create.data.styles.title),
        this.screen.objects[e].create.data.wgtTitle &&
          (t += "(" + this.screen.objects[e].create.data.wgtTitle + ")"),
        t)
      )
        return t;
    }
    return e;
  }),
  (apn.CES.prototype.$OcF = function (e, t) {
    var a = "",
      i = apn.P.resolveCompositeSysEV(t);
    return (
      i && i.ev
        ? ((a = apn.P.eventTitle[i.ev]),
          this.sptResolveParam(e, i.ev, i.param) &&
            (a += "(" + this.sptResolveParam(e, i.ev, i.param) + ")"))
        : (a = apn.P.eventTitle[t]),
      a
    );
  }),
  (apn.CES.prototype.sptLogStack = function (e) {
    this._sptStack2 = e;
  }),
  (apn.CES.prototype.sptLog = function (e, t, a, i) {
    function n(e) {
      return e
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/\'/g, "&apos;")
        .replace(/\"/g, "&quot;")
        .replace(/>/g, "&gt;");
    }
    var r = "",
      o = "",
      s = "",
      p = "#ffffff";
    "warn" == e
      ? ((r = "Warning"), (p = "#ffff55"))
      : "err" == e
      ? ((r = "Error"), (p = "#ff5555"))
      : (r = "Information");
    var l, d, c, g, u, h, x, f;
    if (this._sptStack2 && bx.HCL.DV.isChrome())
      if (
        ((l = this._sptStack2.type),
        (d = this._sptStack2.target ? this._sptStack2.target.id : void 0),
        (x = this._sptStack2.bubble),
        (i = i || new Error()),
        i && i.stack && i.stack.indexOf)
      ) {
        for (var y, v = i.stack.split("at "), C = 0; C < v.length; C++)
          if ((y = v[C].indexOf("<anonymous>")) != -1) {
            var b = v[C].substring(y).match(/\:\d+\:\d+/);
            if (b) {
              var _ = b[0].split(":");
              _[1] && (c = parseInt(_[1])),
                _[2] && (g = parseInt(_[2])),
                1 == c &&
                  g &&
                  (g = Math.max(1, g - this.sptExeIsPreview() ? 95 : 89));
              var m = v[C].substring(y).match(/[^\/\\\(]*\.js/);
              m && (u = m[0]),
                v[C].substring(y).indexOf("run_prv.html") != -1 && (h = !0);
              break;
            }
          }
      } else i && (f = i);
    else {
      if ((a = a || this.$OcC)) {
        var I = apn.P.resolveCompositeSysEV(a.ev);
        (l = I && I.ev ? I.ev : a.ev),
          I && "spt_EvtBubble" == l
            ? ((x = !0),
              (l = this.sptResolveParam(a.oId, l, I.param, 2)),
              (d = this.sptResolveParam(a.oId, l, I.param, 3)))
            : ((l = this.sptResolveEvent(l)), (d = a.oId));
      }
      window.AspenUIRun &&
        AspenUIRun("cur_script_line") >= 0 &&
        (c = AspenUIRun("cur_script_line"));
    }
    l &&
      ((o += " On " + (x ? "bubble " : "") + "<" + l + ">"),
      (o += " At"),
      d && (o += " <" + (this.$OcB(d) || "Untitled") + "> in")),
      this.screen &&
        this.screen.UI &&
        this.screen.UI.title &&
        (o += " <" + this.screen.UI.title + ">"),
      c &&
        (s =
          " " +
          (h ? "External script" : "Script") +
          " at " +
          (g ? g + " of " : "") +
          "line " +
          c +
          (u ? " of " + u : "") +
          ",");
    var S =
        (r || o
          ? '<span style="color:' + p + '">[' + r + n(o) + "]</span> "
          : "") +
        s +
        " " +
        n(t),
      P = "[Aspen " + r + o + "]" + s + " " + t;
    this.viewer.$O3T
      ? this.viewer.$O3T.error(S)
      : !this.viewer.o.standAlone && apn.CExe.sbxExeIF
      ? (apn.CExe.sbxExeIF("onLog", { log: S }),
        window.console && !c && console.error(P))
      : window.console && console.error(P),
      f && window.console && console.error(f);
  }),
  (apn.CES.prototype.widgetsByLabel = function (e, t, a, i) {
    var n = apx.$O4s(this, a ? 5 : 4, "title", t, void 0, void 0, e);
    return (
      0 == n.length &&
        (i ||
          this.sptLog(
            "err",
            apn.CExe.GL(apn.CES.sptERR, "notFound") + " (Label=" + e + ")"
          )),
      !a &&
        n.length > 1 &&
        ((n = [n[0]]),
        i ||
          this.sptLog(
            "warn",
            apn.CExe.GL(apn.CES.sptERR, "dupSearch") + " (Label=" + e + ")"
          )),
      n
    );
  }),
  (apn.CES.prototype.widgetsByLabel2 = function (e, t, a, i, n, r) {
    if (r) var o = apx.$O4s(this, 3, e, t);
    else var o = apx.$O4s(this, i ? 5 : 4, "title", t, void 0, void 0, e);
    if (0 == o.length) {
      if (this.wgtTag(e)) return e;
      n ||
        this.sptLog(
          "err",
          apn.CExe.GL(apn.CES.sptERR, "notFound") + " (Label=" + e + ")"
        );
    }
    return (
      a ||
        i ||
        r ||
        (o.length > 1 &&
          !a &&
          !i &&
          !n &&
          this.sptLog(
            "warn",
            apn.CExe.GL(apn.CES.sptERR, "dupSearch") + " (Label=" + e + ")"
          ),
        (o = o[0])),
      o
    );
  }),
  (apn.CES.prototype.countWidgetsByLabel = function (e, t, a) {
    var i = apx.$O4s(this, a ? 5 : 4, "title", t, void 0, void 0, e);
    return i.length;
  }),
  (apn.CES.prototype.wgtIsChildOf = function (e, t) {
    return !(!e || !t || e == t) && !!apx.$O4s(this, 6, e, t).length;
  }),
  (apn.CES.prototype.sptResetPage = function (e) {
    function t() {
      a.viewer._reloadPage(a.getPageID());
    }
    var a = this;
    if (this._inPageCreateEvent)
      return void this.sptLog(
        "warn",
        apn.CExe.GL(apn.CES.sptERR, "errLoop") + " (reset())"
      );
    if (e) {
      var i = apn.CES.$OcD(e),
        n = this.setTimeout(function () {
          a.$O5I(n), a.$O7K || t();
        }, i.wait);
      this.$O5J(n, "SPT", i.grp);
    } else t();
  }),
  (apn.CES.prototype.pageByLabel = function (e, t) {
    if (void 0 === e) return this.getPageID();
    var a = apn.Project.getPages(this.project, void 0, {
      "apn.CFlowPage": !0,
      "apn.CPopupPage": !0,
    });
    if (0 == a.length)
      return void this.sptLog(
        "err",
        apn.CExe.GL(apn.CES.sptERR, "notFound") + " (Label=" + e + ")"
      );
    for (var i = t ? void 0 : "", n = 0, r = 0; r < a.length; r++)
      this.project.pages[a[r]] &&
        this.project.pages[a[r]].UI.title == e &&
        (i || (i = a[r]), n++);
    return (
      n > 1 &&
        this.sptLog(
          "warn",
          apn.CExe.GL(apn.CES.sptERR, "dupSearch") + " (Label=" + e + ")"
        ),
      i
    );
  }),
  (apn.CES.prototype.sptResolveEvent = function (e) {
    return apn.P.eventTitle[e]
      ? apn.P.eventTitle[e]
      : (void 0 === this.viewer._apxPageEventList &&
          (this.viewer._apxPageEventList = apn.P.$O7u(this.project)),
        this.viewer._apxPageEventList && this.viewer._apxPageEventList[e]
          ? this.viewer._apxPageEventList[e].title
          : void 0);
  }),
  (apn.CES.prototype.sptResolveParam = function (e, t, a, i, n) {
    if (e && apn.dbUI && apn.dbUI.system && apn.dbUI.system.exeEventCache) {
      if (a) {
        var r = apn.P.resolveCompositeSysEV(t);
        if ((r && r.ev && (t = r.ev), "spt_EvtBubble" == t)) {
          var o = a.split(";"),
            i = i || 1;
          if (((i = parseInt(i)), 1 == i)) {
            var s;
            if ("spt_Custom" == o[1]) return decodeURIComponent(o[0] || "");
            if ("spt_Collision" == o[1] || "spt_CollisionOff" == o[1])
              return decodeURIComponent(o[0] || "");
            if (
              ("wgtEvent" == o[1] && o[0] && (o[0] = decodeURIComponent(o[0])),
              (s = apn.P.getEventWgtParam(
                this,
                this.project,
                this.getPageID(),
                o[2] ? o[2] : void 0,
                o[1]
              )) &&
                s[o[1]] &&
                s[o[1]].param &&
                s[o[1]].param[o[0]])
            )
              return s[o[1]].param[o[0]];
          } else {
            if (2 == i) return this.sptResolveEvent(o[1]);
            if (3 == i) return o[2];
          }
        } else {
          if (2 == i && n) return this.sptResolveEvent(t);
          var s;
          if ("spt_Custom" == t) return decodeURIComponent(a);
          if ("spt_Collision" == t || "spt_CollisionOff" == t)
            return decodeURIComponent(a);
          if (
            ("wgtEvent" == t && a && (a = decodeURIComponent(a)),
            (s = apn.P.getEventWgtParam(
              this,
              this.project,
              this.getPageID(),
              e,
              t
            )) &&
              s[t] &&
              s[t].param &&
              s[t].param[a])
          )
            return s[t].param[a];
        }
      }
      return n ? void 0 : "";
    }
    if (a) {
      var r = apn.P.resolveCompositeSysEV(t);
      if ((r && r.ev && (t = r.ev), "spt_EvtBubble" == t)) {
        var o = a.split(";"),
          i = i || 1;
        if (((i = parseInt(i)), 1 == i)) {
          var s = apn.P.getEvent(
            this.project,
            this.getPageID(),
            o[2] ? o[2] : void 0,
            void 0,
            !0,
            this
          );
          if ("spt_Custom" == o[1]) return decodeURIComponent(o[0] || "");
          if ("spt_Collision" == o[1] || "spt_CollisionOff" == o[1])
            return decodeURIComponent(o[0] || "");
          if (
            ("wgtEvent" == o[1] && o[0] && (o[0] = decodeURIComponent(o[0])),
            s[o[1]] && s[o[1]].param && s[o[1]].param[o[0]])
          )
            return s[o[1]].param[o[0]];
        } else {
          if (2 == i) return this.sptResolveEvent(o[1]);
          if (3 == i) return o[2];
        }
      } else {
        var s = apn.P.getEvent(
          this.project,
          this.getPageID(),
          e,
          void 0,
          !0,
          this
        );
        if (2 == i && n) return this.sptResolveEvent(t);
        if ("spt_Custom" == t) return decodeURIComponent(a);
        if ("spt_Collision" == t || "spt_CollisionOff" == t)
          return decodeURIComponent(a);
        if (
          ("wgtEvent" == t && a && (a = decodeURIComponent(a)),
          s[t] && s[t].param && s[t].param[a])
        )
          return s[t].param[a];
      }
    }
    return n ? void 0 : "";
  }),
  (apn.CES.prototype.sptPointerX = function () {
    return this.$Ocm;
  }),
  (apn.CES.prototype.sptPointerY = function () {
    return this.$Ocn;
  }),
  (apn.CES.prototype.sptPointerOrigin = function (e) {
    if (this._lastEvTag) {
      var t = this._lastEvTag;
      if (t.apnOID && (!t.apnCur || !t.apnCur.Event2Holder)) return t.apnOID;
      for (
        t = t.parentNode;
        t &&
        t != this.tag &&
        t != this.viewer.getPM().tag &&
        t != this.tag.ownerDocument;

      ) {
        if (t.apnOID && (!t.apnCur || !t.apnCur.Event2Holder)) return t.apnOID;
        t = t.parentNode;
      }
    }
    return e ? void 0 : "";
  }),
  (apn.CES.prototype.sptCancelWait = function (e) {
    return this.$Ocy(e);
  }),
  (apn.CES.prototype.sptExeCall = function (e, t) {
    return (this.viewer.IStub_sptRunCheck &&
      !this.viewer.IStub_sptRunCheck(e, t, this.getPageID())) ||
      !this.viewer.IStub_sptRun
      ? void this.sptLog(
          "err",
          apn.CExe.GL(apn.CES.sptERR, "noSupportExeRun") +
            " (Function=" +
            e +
            ", Param=" +
            t +
            ")"
        )
      : this.viewer.IStub_sptRun(e, t, this.getPageID());
  }),
  (apn.CES.prototype.sptExeGetURLParam = function (e) {
    var t = "";
    return (
      (t = bx.$getParamFromURL(location.href, e)) &&
        ((t = decodeURIComponent(t)),
        bx.$getParamFromURL(location.href, "BXUESC") &&
          bx.$getParamFromURL(location.href, "BXUESC").indexOf("1") != -1 &&
          (t = t.replace(/\^\^\//g, "../"))),
      t
    );
  }),
  (apn.CES.prototype.sptExeIsPreview = function () {
    return !this.viewer.o.standAlone;
  }),
  (apn.CES.prototype.sptGetLayerID = function (e, t, a) {
    var i, n;
    if ((i = apn.Project.getStateByObjectID(this.project, this.getPageID(), e)))
      for (var r = 0; r < i.length; r++)
        if (i[r].title == t) {
          n = apn.Project.getStateLayerObjectID(
            this.project,
            this.getPageID(),
            e,
            i[r].stateID
          );
          break;
        }
    return n
      ? n
      : (this.sptLog(
          "warn",
          apn.CExe.GL(apn.CES.sptERR, "notFound") +
            " (ContainerID=" +
            this.$OcB(e) +
            ") Layer=" +
            t
        ),
        a ? void 0 : "");
  }),
  (apn.CES.prototype.sptFireCustomEvent = function (e, t, a, i, n) {
    function r(t, i) {
      t.fireEvent(
        "spt_Custom",
        encodeURIComponent(e || ""),
        i,
        !0,
        a,
        s.getPageID()
      );
    }
    function o() {
      function e(e) {
        e.canvas && e.canvas != s && e.canvas.$Och && r(e.canvas);
      }
      if ((i ? r(s, i.oId) : r(s), s.$Och)) {
        var t;
        for (var a in s.project.pages)
          s.viewer.isCurrentPage(a) && (t = s.viewer.getPage(a)) && r(t.canvas);
      }
      s.viewer.$O2J.iteratePage(e);
    }
    var s = this;
    if (t) {
      var p = apn.CES.$OcD(t),
        l = this.setTimeout(function () {
          s.$O5I(l), s.$O7K || o();
        }, p.wait);
      this.$O5J(l, "SPT", p.grp);
    } else o();
  }),
  (apn.CES.prototype.sptSizeByContent = function (e, t, a, i, n, r) {
    var o;
    if (
      (a.target &&
        a.target.objectID &&
        "$" != a.target.objectID[0] &&
        this.screen.objects[a.target.objectID] &&
        (o = apn.Project.getWidgetModule(
          this.screen.objects[a.target.objectID].create.data
        )),
      o && o.exeGetSizeByContent)
    ) {
      var s = o.exeGetSizeByContent(this, a.target.objectID, e, t);
      (s.w || s.h) &&
        ((a.set.sizeBy.w = s.w),
        (a.set.sizeBy.h = s.h),
        this.runITR(a, i, n, r));
    } else
      this.sptLog(
        "warn",
        apn.CExe.GL(apn.CES.sptERR, "noSupportAPI") +
          " (API=wgt.sizeByContent, Widget=" +
          this.$OcB(a.target.objectID) +
          ")"
      );
  }),
  (apn.CES.prototype.sptSystem = function (e, t, a, i, n) {
    function r() {
      s.viewer.o.exePreview
        ? s.sptLog(
            void 0,
            'extern.set("' + t + '",' + JSON.stringify(a) + ") called."
          )
        : (o[t] = a);
    }
    var o = n || window;
    if ("run" == e)
      if (this.viewer.o.exePreview)
        this.sptLog(
          void 0,
          'extern.run("' + t + '",' + JSON.stringify(a) + ") called."
        );
      else if (o[t] && "function" == typeof o[t]) {
        void 0 === a || a instanceof Array || (a = [a]);
        try {
          return o[t].apply(o, a);
        } catch (e) {
          o.console && console.error(e);
        }
      } else
        this.sptLog(
          "warn",
          "window." + t + "() does not exist or is not a function."
        );
    else if ("get" == e) {
      if (!this.viewer.o.exePreview) return o[t];
      this.sptLog(void 0, 'extern.get("' + t + '") called.');
    } else if ("set" == e) {
      var s = this;
      if (i) {
        var p = apn.CES.$OcD(i),
          l = this.setTimeout(function () {
            s.$O5I(l), s.$O7K || r();
          }, p.wait);
        this.$O5J(l, "SPT", p.grp);
      } else r();
    }
  }),
  (apn.CES._spt2getMedia = function (e, t) {
    var a = apn.Project.getLayout(e).property;
    if (a.CExe && a.CExe.spt2impt) {
      var i;
      if (a.CExe.spt2impt.media)
        for (var n = 0; n < a.CExe.spt2impt.media.length; n++)
          if (((i = a.CExe.spt2impt.media[n]), i.md.mediaID && i.key == t))
            return i.md.mediaID;
      if (a.CExe.spt2impt.mediaA)
        for (var n = 0; n < a.CExe.spt2impt.mediaA.length; n++)
          if (((i = a.CExe.spt2impt.mediaA[n]), i.md.mediaID && i.key == t))
            return i.md.mediaID;
    }
  }),
  (apn.CES.prototype.spt2getMedia = function (e) {
    return apn.CES._spt2getMedia(this.project, e);
  }),
  (apn.CES.prototype.spt2detectCollision = function (e, t) {
    function a(e, t) {
      var a,
        i = null;
      for (var n in e)
        (a = e[n].apnOID || e[n].oId || e[n].id || e[n]),
          o.$O3d[a] &&
            ((t && a == t) ||
              (apx.wgt.$O4u(o, o.$O3d[t], o.$O3d[a], void 0, !0, r) &&
                ((i = i || []), i.push(a))));
      return i;
    }
    function i(e, t, a) {
      var i,
        n = null;
      for (var s in e)
        (i = e[s].apnOID || e[s].oId || e[s].id || e[s]),
          o.$O3d[i] &&
            apx.wgt.$O4u(o, t, o.$O3d[i], void 0, !0, r) &&
            ((n = n || []), n.push(i));
      return n;
    }
    function n(e, t, a, i) {
      for (var n = i || 0; n < (a || t.length); n++)
        t[n]
          ? (e[n - (i || 0)] = { x: t[n].x || 0, y: t[n].y || 0 })
          : (e[n - (i || 0)] = { x: 0, y: 0 });
    }
    var r,
      o = this;
    t && t.applyScroll && (r = { applyScroll: !0 });
    var s, p;
    if ("string" == typeof e) this.wgtTag(e) && (s = e);
    else if (e)
      if (e.type || void 0 === e.x || void 0 === e.y)
        if (
          "rect" == e.type &&
          void 0 !== e.x &&
          void 0 !== e.y &&
          void 0 !== e.w &&
          void 0 !== e.h
        )
          p = bx.$cloneObject({}, e);
        else if (
          "ellipse" == e.type &&
          void 0 !== e.x &&
          void 0 !== e.y &&
          void 0 !== e.w &&
          void 0 !== e.h
        )
          (p = { type: "poly", pts: [] }),
            apn.CES.$O4p(
              e.x,
              e.y,
              e.w,
              e.h,
              0,
              p.pts,
              2 * Math.ceil(Math.max(e.w, e.h) / 5)
            );
        else if ("line" == e.type && e.vertex && e.vertex.length > 1)
          if (2 == e.vertex.length)
            (p = { type: "poly", pts: [] }), n(p.pts, e.vertex, 2);
          else {
            (p = { type: "polySet", polygons: [], pts: [] }),
              n(p.pts, e.vertex);
            for (var l = 0; l < e.vertex.length - 1; l++)
              (p.polygons[l] = p.polygons[l] || []),
                n(p.polygons[l], e.vertex, l + 2, l);
          }
        else
          "polygon" == e.type &&
            e.vertex &&
            e.vertex.length > 2 &&
            ((p = { type: "poly", pts: [] }), n(p.pts, e.vertex));
      else p = { type: "rect", x: e.x - 1, y: e.y - 1, w: 2, h: 2 };
    var d;
    t && t.target
      ? (d = t.target)
      : t && t.all
      ? (d = this.$O3d)
      : this._apxColDectect &&
        this._apxColDectect.length &&
        (d = this._apxColDectect);
    var c = null;
    return (
      d &&
        (s
          ? (c = a(d, s))
          : p
          ? (c = i(d, p))
          : this.sptLog(
              "warn",
              "Invalid 'area' is passed for Widget:detectCollision."
            )),
      c
    );
  }),
  (apn.CES.prototype.spt2acceptEvent = function (e, t, a) {
    "Drop" == t
      ? (void 0 === a && (a = ""), this.wgtAcceptDrop(e, a))
      : "Mouse Over" == t
      ? this.wgtAcceptPointerOver(e, a)
      : "Collision" == t
      ? this.wgtAcceptCollision(e, a)
      : "Content Change" == t
      ? this.wgtSetProperty(e, "_apxAcceptCC", !0)
      : this.sptLog(
          "warn",
          'Unsupported event type="' + t + '" for Widget:acceptEvent.'
        );
  }),
  (apn.CES.prototype.spt2cloneLayer = function (e, t, a) {
    var i = this.wgtCloneLayer(e, t, a);
    return void 0 === i
      ? void this.sptLog(
          "warn",
          apn.CExe.GL(apn.CES.sptERR, "notFound") +
            " (WidgetID=" +
            this.$OcB(e) +
            ")"
        )
      : null === i
      ? void this.sptLog(
          "warn",
          apn.CExe.GL(apn.CES.sptERR, "noSupportClone") +
            " (WidgetID=" +
            this.$OcB(e) +
            ")"
        )
      : i;
  }),
  (apn.CES.prototype._spt2LinkToNext = function (e, t) {
    if (this.viewer[e]) {
      var a;
      if (t && t.timing && t.timing.split)
        for (var i = t.timing.split(" "), n = 0; n < i.length; n++)
          if (NaN != parseInt(i[n])) {
            a = parseInt(i[n]);
            break;
          }
      var r = this.viewer[e](a, void 0, t);
      return r === !0 ? 1 : r === !1 ? 0 : -1;
    }
    return -2;
  }),
  (apn.CES.prototype.spt2LinkToNext = function (e) {
    var t = this._spt2LinkToNext("runNext", e);
    return 1 == t;
  }),
  (apn.CES.prototype.spt2LinkToPrev = function (e) {
    var t = this._spt2LinkToNext("runPrev", e);
    return 1 == t;
  }),
  (apn.CES.prototype.sptEval = function (ev, oId, stack, _cbExRun) {
    var pageId = this.getPageID(),
      src = this.$Oco(ev, oId);
    if (
      (void 0 === this.isSptCanVer2 &&
        (this.isSptCanVer2 = apn.Project.sptCanVer2(this.project)),
      src || _cbExRun)
    ) {
      if (
        ((this.scriptEvals = this.scriptEvals || __setScriptRunIf()),
        (this.scriptStubs =
          this.scriptStubs || this.scriptEvals.getEvalStubs()),
        stack.depth > 5)
      )
        return (
          this.sptLog(
            "err",
            apn.CExe.GL(apn.CES.sptERR, "errLoop") +
              " (WidgetID=" +
              this.$OcB(stack.oId) +
              ")"
          ),
          !0
        );
      var scriptEvals = this.scriptEvals,
        scriptStubs = this.scriptStubs,
        runOId = stack.oId || oId,
        runEvt = stack.ev || ev,
        cEV = apn.P.resolveCompositeSysEV(runEvt),
        param = cEV && cEV.param ? cEV.param : void 0;
      scriptEvals.setRunMode(!0), scriptEvals.setRunApx(this);
      var commonEvent = scriptEvals.setOidAndParam(runOId, param, stack, cEV),
        $apxAPX = this;
      if (_cbExRun) {
        if (this.sptExeIsPreview()) {
          this.sptLogStack(commonEvent);
          try {
            _cbExRun.call(scriptStubs, commonEvent, scriptStubs);
          } catch (e) {
            this.sptLog("err", e + "", void 0, e);
          }
        } else
          this.sptLogStack(commonEvent),
            _cbExRun.call(scriptStubs, commonEvent, scriptStubs);
        this.sptLogStack();
      } else
        with (scriptStubs)
          if (this.isSptCanVer2) {
            runEvt = (cEV && cEV.ev) || runEvt;
            var funcName =
              "sptFunc_" +
              (pageId || "page") +
              "_" +
              (runOId || "object") +
              "_" +
              runEvt;
            (funcName = funcName.replace(/[^(a-z0-9)]/gi, "_")),
              scriptStubs[funcName] ||
                (this.sptExeIsPreview()
                  ? eval(
                      "scriptStubs['" +
                        funcName +
                        "'] = function(Event) { try { $apxAPX.sptLogStack(Event); " +
                        src +
                        '\n\n} catch(ex) { $apxAPX.sptLog("err", ex+"", undefined, ex);}\n$apxAPX.sptLogStack();\n}'
                    )
                  : eval(
                      "scriptStubs['" +
                        funcName +
                        "'] = function(Event) { $apxAPX.sptLogStack(Event); " +
                        src +
                        "\n$apxAPX.sptLogStack();\n}"
                    )),
              scriptStubs[funcName] && scriptStubs[funcName](commonEvent);
          } else
            eval(
              "try { " +
                src +
                '\n\n } catch(ex) { $apxAPX.sptLog("err", "Execution error:" + ex); if (ex.stack) console.error(ex.stack); }'
            );
      return scriptEvals.removeOidAndParam(), !0;
    }
    return !1;
  }),
  (apn.CES.prototype._spt2procTarget = function (e) {
    switch (((e._procd = !0), (e._pIdMap = {}), e.ev)) {
      case "pageBubble":
        e._ev = "spt_EvtBubble";
    }
    if (e.accept && e.accept.length) {
      apn.P.getEvent(this.project, this.$O1m);
      for (var t, a = 0; a < e.accept.length; a++)
        for (t in apn.P.eventTitle)
          if (apn.P.eventTitle[t] == e.accept[a]) {
            (e._accept = e._accept || {}), (e._accept[t] = !0);
            break;
          }
    }
    var i = this.sptFileBrowse("pages"),
      n = this.sptFileBrowse("overlayPages"),
      r = this.sptFileBrowse("popupPages");
    if (((i = i.concat(n)), (i = i.concat(r)), e.target)) {
      if (e.target instanceof Array) {
        for (var a, t = 0; t < e.target.length; t++)
          for (a = 0; a < i.length; a++)
            if (e.target[t] == i[a].label) {
              e._pIdMap[i[a].id] = !0;
              break;
            }
      } else
        for (var a = 0; a < i.length; a++)
          if (e.target == i[a].label) {
            e._pIdMap[i[a].id] = !0;
            break;
          }
    } else for (var a = 0; a < i.length; a++) e._pIdMap[i[a].id] = !0;
  }),
  (apn.CES.prototype.spt2ExEval = function (e, t, a, i, n, r, o, s) {
    for (var p = e ? apx._spt2evLnPre : apx._spt2evLn, l = 0; l < p.length; l++)
      p[l]._procd || this._spt2procTarget(p[l]),
        p[l]._ev == t &&
          p[l]._pIdMap[this.$O1m] &&
          ((p[l]._accept && !p[l]._accept[r]) ||
            this.sptEval(
              t,
              void 0,
              { oId: a, ev: i, depth: n, orgPgId: o, byStart: s },
              p[l].onEvent
            ));
  }),
  (apn.CExeSpt2 = function (e) {
    this.project = e;
  }),
  (apn.CExeSpt2.prototype.$P = function (e, t) {
    var a = apn.Project.getPages(
      this.project,
      void 0,
      void 0,
      t && t.all ? { all: !0 } : void 0
    );
    if ("*" == e) {
      for (var i = [], n = 0; n < a.length; n++)
        i.push(new apn.CExeSpt2Page(this, a[n]));
      return i;
    }
    for (var n = 0; n < a.length; n++)
      if (this.project.pages[a[n]] && this.project.pages[a[n]].UI.title == e)
        return new apn.CExeSpt2Page(this, a[n]);
    (t && t.silent) || apn.CExeSpt2.log("Page is not found. Label='" + e + "'");
  }),
  (apn.CExeSpt2.prototype.set = function (e, t) {
    switch (e) {
      case "w":
        t > 0 &&
          (this.project.layouts[
            this.project.CTXT.layoutID
          ].property.screenSize.w = t);
        break;
      case "h":
        t > 0 &&
          (this.project.layouts[
            this.project.CTXT.layoutID
          ].property.screenSize.h = t);
    }
  }),
  (apn.CExeSpt2.prototype.get = function (e, t) {
    if (e && e.indexOf && 0 == e.indexOf("$template:")) {
      e = e.substring(10);
      var a = this.project.layouts[this.project.CTXT.layoutID].property.CExe;
      if (a && a.apxTdata)
        for (var i = 0; i < a.apxTdata.length; i++)
          if (a.apxTdata[i].id && a.apxTdata[i].id == e)
            return t && t.reference
              ? a.apxTdata[i].data.data.tbl
              : apn.CES.sptDataToArray(a.apxTdata[i].data);
      if (a && a.apxTdataF && a.apxTdataF.length)
        for (var i = 0; i < a.apxTdataF.length; i++)
          if (((buf = a.apxTdataF[i]), buf.id == e)) {
            if (t && t.reference) return buf.json;
            if (!t || !t.parse) return buf.json.data;
            try {
              return JSON.parse(buf.json.data);
            } catch (e) {}
          }
    } else
      switch (e) {
        case "w":
          return this.project.layouts[this.project.CTXT.layoutID].property
            .screenSize.w;
        case "h":
          return this.project.layouts[this.project.CTXT.layoutID].property
            .screenSize.h;
      }
  }),
  (apn.CExeSpt2.prototype.getMedia = function (e) {
    return apn.CES._spt2getMedia(this.project, e);
  }),
  (apn.CExeSpt2.prototype.addPage = function (e, t, a) {
    return e
      ? apn.Project.$O8R(
          this.project,
          void 0,
          t || "",
          e.data,
          e.id,
          void 0,
          !0
        )
      : apn.Project.$O11(this.project, {
          module: "apn.CFlowPage",
          title: t,
          color: a ? a.color : void 0,
        });
  }),
  (apn.CExeSpt2.log = function (e) {
    (e = "[Aspen Preboot] " + e),
      apn.CExe && apn.CExe.sbxExeIF
        ? apn.CExe.sbxExeIF("onLog", { log: e })
        : window.console && console.error(e);
  }),
  (apn.CExeSpt2Page = function (e, t) {
    (this.data = e), (this.id = t);
  }),
  (apn.CExeSpt2Page.prototype.clone = function (e) {
    var t = apn.Project.$O8R(
      this.data.project,
      void 0,
      e || "",
      this.data.project.pages[this.id],
      this.id,
      void 0,
      !0
    );
    return new apn.CExeSpt2Page(this.data, t);
  }),
  (apn.CExeSpt2Page.prototype.set = function (e, t) {
    var a = this.data.project.pages[this.id].UI;
    switch (e) {
      case "label":
        a.title = t;
        break;
      case "order":
        a.order = t;
    }
  }),
  (apn.CExeSpt2Page.prototype.get = function (e, t) {
    var a = this.data.project.pages[this.id].UI;
    if (e && e.indexOf && 0 == e.indexOf("$template:")) {
      e = e.substring(10);
      var i = a.CExe;
      if (i && i.apxTdata)
        for (var n = 0; n < i.apxTdata.length; n++)
          if (i.apxTdata[n].id && i.apxTdata[n].id == e)
            return t && t.reference
              ? i.apxTdata[n].data.data.tbl
              : apn.CES.sptDataToArray(i.apxTdata[n].data);
      if (i && i.apxTdataF && i.apxTdataF.length)
        for (var n = 0; n < i.apxTdataF.length; n++) {
          var r = i.apxTdataF[n];
          if (r.id == e) {
            if (t && t.reference) return r.json;
            if (!t || !t.parse) return r.json.data;
            try {
              return JSON.parse(r.json.data);
            } catch (e) {}
          }
        }
    } else
      switch (e) {
        case "label":
          return a.title;
        case "order":
          return a[e];
      }
  }),
  (apn.CExeSpt2Page.prototype.$W = function (e, t, a) {
    var i = apx.$O4s(
      this.data.project.pages[this.id],
      a && a.like ? 5 : 4,
      "title",
      t,
      void 0,
      void 0,
      e
    );
    if (i.length) {
      if (a && a.like) {
        for (var n = [], r = 0; r < i.length; r++)
          n.push(new apn.CExeSpt2Wgt(this, i[r]));
        return n;
      }
      return new apn.CExeSpt2Wgt(this, i[0]);
    }
  }),
  (apn.CExeSpt2Page.prototype.addWidget = function (e) {
    if (e && e.module && e.create) {
      var t,
        a,
        i = this.data.project.pages[this.id];
      for (var n in i.objects)
        (void 0 === t || t < i.objects[n].create.zIndex) &&
          (t = i.objects[n].create.zIndex),
          (void 0 === a || a < parseInt(n)) && (a = parseInt(n));
      t ? t++ : (t = bx.CCanvasWnd.ZINDEX_OBJECT),
        a ? a++ : (a = 1),
        (e.create.type = e.create.type || 16777728),
        (e.create.zIndex = e.create.zIndex || t),
        (e.create.properties = e.create.properties || {}),
        (e.create.properties.attrs = e.create.properties.attrs || {}),
        (e.create.data = e.create.data || {}),
        (e.create.data.wgtTitle = e.create.data.wgtTitle || ""),
        (e.create.data.styles = e.create.data.styles || {}),
        (e.init = e.init || {}),
        (e.init.position = e.init.position || { x: -64, y: -64 }),
        (e.init.shape = e.init.shape || {
          type: bx.CCanvasWnd.SHAPE_RECT,
          w: 64,
          h: 64,
        }),
        (e.init.shape.type = e.init.shape.type || bx.CCanvasWnd.SHAPE_RECT),
        (e.init.cx = e.init.cx || 0),
        (e.init.cy = e.init.cy || 0);
      var r = a + "A" + this.id + "_";
      return (i.objects[r] = e), new apn.CExeSpt2Wgt(this, r);
    }
  }),
  (apn.CExeSpt2Wgt = function (e, t) {
    (this.id = t), (this.page = e);
  }),
  (apn.CExeSpt2Wgt.prototype.clone = function (e, t) {
    var a = this.page.data.project.pages[this.page.id];
    if (t)
      var i = t.data.project.pages[t.id],
        n = apx.srcCloneWidget(a, this.id, { id: t.id, data: i });
    else
      var i = a,
        n = apx.srcCloneWidget(a, this.id);
    if (void 0 !== e) {
      var r = i.objects[n].create.data;
      r && r.styles && (r.styles.title = e);
    }
    return (
      n ||
        console.error("[AspenUX] srcCloneWidget failed. WidgetID=" + this.id),
      new apn.CExeSpt2Wgt(t || this.page, n)
    );
  }),
  (apn.CExeSpt2Wgt.prototype.cloneLayer = function (e, t) {
    if (!e || !t)
      return void apn.CExeSpt2.log(
        " cloneLayer() - Invalid parameter. layerID='" +
          e +
          "' or newLabel='" +
          t +
          "'"
      );
    var a = this.page.data.project.pages[this.page.id];
    if (!a.objects[e])
      return void apn.CExeSpt2.log(
        " cloneLayer() - Layer is not found. layerID='" + e + "'"
      );
    if (!a.objects[this.id].layout || !a.objects[this.id].layout.layers)
      return void apn.CExeSpt2.log(
        " cloneLayer() - This wdiget is not a contianer layer."
      );
    var i = apx.srcCloneWidget(a, e),
      n = a.objects[this.id];
    return (n.layout.layers[++n.layout.layerIndex] = { title: t, id: i }), i;
  }),
  (apn.CExeSpt2Wgt.prototype.getLayer = function (e) {
    var t,
      a,
      i = this.page.data.project;
    if ((t = apn.Project.getStateByObjectID(i, this.page.id, this.id)))
      for (var n = 0; n < t.length; n++)
        if (t[n].title == e) {
          a = apn.Project.getStateLayerObjectID(
            i,
            this.page.id,
            this.id,
            t[n].stateID
          );
          break;
        }
    return (
      a ||
        apn.CExeSpt2.log(" getLayer() - Layer is not found. label='" + e + "'"),
      a
    );
  }),
  (apn.CExeSpt2Wgt.prototype.put = function (e, t) {
    var a = this.page.data.project.pages[this.page.id];
    if (!e || !a.objects[e.id].layout || !a.objects[e.id].layout.layers)
      return (
        apn.CExeSpt2.log(" put() - Parent wdiget is not a contianer layer."), !1
      );
    var i = a.objects[e.id].layout.layers;
    if (void 0 === t)
      for (var n in i) {
        t = i[n].id;
        break;
      }
    return void 0 !== t && a.objects[t]
      ? ((a.objects[t].layout = a.objects[t].layout || {}),
        (a.objects[t].layout.children = a.objects[t].layout.children || []),
        a.objects[t].layout.children.push(this.id),
        !0)
      : (apn.CExeSpt2.log(
          " put() - Layer is not found. parentLayerID='" + t + "'"
        ),
        !1);
  }),
  (apn.CExeSpt2Wgt.styleMap = { label: "title" }),
  (apn.CExeSpt2Wgt.prototype.set = function (e, t) {
    var a,
      i,
      n = this.page.data.project.pages[this.page.id].objects[this.id];
    switch (e) {
      case "x":
        (t = Math.round(t)),
          (a = t - n.init.position.x),
          (n.init.position.x = t),
          a &&
            apn.CES.onWidgetPositionChange(
              this.page.data.project.pages[this.page.id],
              n,
              a,
              void 0
            );
        break;
      case "y":
        (t = Math.round(t)),
          (i = t - n.init.position.y),
          (n.init.position.y = t),
          i &&
            apn.CES.onWidgetPositionChange(
              this.page.data.project.pages[this.page.id],
              n,
              void 0,
              i
            );
        break;
      case "w":
        (t = Math.round(t)),
          n.init.shape.type == bx.CCanvasWnd.SHAPE_RECT &&
            t > 0 &&
            (n.init.shape.w = t);
        break;
      case "h":
        (t = Math.round(t)),
          n.init.shape.type == bx.CCanvasWnd.SHAPE_RECT &&
            t > 0 &&
            (n.init.shape.h = t);
        break;
      default:
        (n.create.data = n.create.data || {}),
          (n.create.data.styles = n.create.data.styles || {}),
          apn.CExeSpt2Wgt.styleMap[e] && (e = apn.CExeSpt2Wgt.styleMap[e]),
          (n.create.data.styles[e] = t);
    }
  }),
  (apn.CExeSpt2Wgt.prototype.get = function (e) {
    var t = this.page.data.project.pages[this.page.id].objects[this.id];
    switch (e) {
      case "x":
        return t.init.position.x;
      case "y":
        return t.init.position.y;
      case "w":
        if (t.init.shape.type == bx.CCanvasWnd.SHAPE_RECT)
          return t.init.shape.w;
        break;
      case "h":
        if (t.init.shape.type == bx.CCanvasWnd.SHAPE_RECT)
          return t.init.shape.h;
        break;
      default:
        if (
          (apn.CExeSpt2Wgt.styleMap[e] && (e = apn.CExeSpt2Wgt.styleMap[e]),
          t.create.data && t.create.data.styles)
        )
          return t.create.data.styles[e];
    }
  }),
  (apn.CExeSpt2Wgt.prototype.setData = function (e, t) {
    var a =
      this.page.data.project.pages[this.page.id].objects[this.id].create.data;
    a &&
      ((a.properties = a.properties || {}),
      (a.properties.attrs = a.properties.attrs || {}),
      (a.properties.attrs[e] = t));
  }),
  (apn.CExeSpt2Wgt.prototype.getData = function (e) {
    var t =
      this.page.data.project.pages[this.page.id].objects[this.id].create.data;
    if (t && t.properties && t.properties.attrs) return t.properties.attrs[e];
  }),
  (window.apx = window.apx || {}),
  (apx.$O4s = function (e, t, a, i, n, r, o, s) {
    function p(e, i, n, d) {
      if (0 != n)
        if (void 0 === a) i.create.data && i.create.data.wgtID && r.push(e);
        else if (
          1 == t &&
          i.create.data &&
          i.create.data.wgtID &&
          i.create.data.wgtID == a
        )
          r.push(e);
        else if (
          2 == t &&
          i.create.data &&
          i.create.data.properties &&
          i.create.data.properties.attrs &&
          i.create.data.properties.attrs.apxType == a
        )
          r.push(e);
        else if (
          3 == t &&
          i.create.data &&
          i.create.data.properties &&
          i.create.data.properties.attrs &&
          void 0 !== i.create.data.properties.attrs[a]
        )
          r.push(e);
        else if (
          4 == t &&
          i.create.data &&
          i.create.data.styles &&
          i.create.data.styles[a] == o
        )
          r.push(e);
        else if (
          5 == t &&
          i.create.data &&
          i.create.data.styles &&
          void 0 !== i.create.data.styles[a] &&
          (i.create.data.styles[a] || "").indexOf(o) != -1
        )
          r.push(e);
        else if (6 == t && e == a) r.push(e);
        else if (7 == t && a) {
          var c;
          (c = a(i.create.data)) && (r.push(e), 2 == c && (d = !0));
        }
      if (!d && i.layout && i.layout.children)
        for (var g, u = 0; u < i.layout.children.length; u++)
          (g = apn.Project.getWidgetModule(
            l.objects[i.layout.children[u]].create.data
          )),
            p(
              i.layout.children[u],
              l.objects[i.layout.children[u]],
              n + 1,
              (g && g.BLACKBOX_MODEL) ||
                (s &&
                  apn.Project.checkStateType(
                    l.objects[i.layout.children[u]].layout
                  ))
            );
    }
    r ? (r.length = 0) : (r = []);
    var l;
    if (
      (window.apn && apn.CES && e instanceof apn.CES
        ? (l = e.screen)
        : ((l = e), (e = null)),
      n && e)
    ) {
      if (!l.objects[n])
        return (
          bx.Trace.log(
            "APX",
            "warning",
            "Non-exist widget id=" + n,
            "searchWidgets"
          ),
          r
        );
      for (var d in e.$O3d)
        d != n &&
          e.$O3d[d].parentNode == e.$O3d[n].parentNode &&
          (void 0 === a &&
          l.objects[d].create.data &&
          l.objects[d].create.data.wgtID
            ? r.push(d)
            : 1 == t &&
              l.objects[d].create.data &&
              l.objects[d].create.data.wgtID == a
            ? r.push(d)
            : 2 == t &&
              l.objects[d].create.data &&
              l.objects[d].create.data.properties &&
              l.objects[d].create.data.properties.attrs &&
              l.objects[d].create.data.properties.attrs.apxType == a
            ? r.push(d)
            : 3 == t &&
              l.objects[d].create.data &&
              l.objects[d].create.data.properties &&
              l.objects[d].create.data.properties.attrs &&
              void 0 !== l.objects[d].create.data.properties.attrs[a]
            ? r.push(d)
            : 4 == t &&
              l.objects[d].create.data &&
              l.objects[d].create.data.styles &&
              l.objects[d].create.data.styles[a] == o
            ? r.push(d)
            : 5 == t &&
              l.objects[d].create.data &&
              l.objects[d].create.data.styles &&
              void 0 !== l.objects[d].create.data.styles[a] &&
              (l.objects[d].create.data.styles[a] || "").indexOf(o) != -1
            ? r.push(d)
            : 6 == t ||
              (7 == t && a && a(l.objects[d].create.data) && r.push(d)));
    }
    if (i) {
      if (!l.objects[i])
        return (
          bx.Trace.log(
            "APX",
            "warning",
            "Non-exist widget id=" + i,
            "searchWidgets"
          ),
          r
        );
      p(i, l.objects[i], 0);
    }
    if (!i && !n)
      for (var d in l.objects)
        void 0 === a &&
        l.objects[d].create.data &&
        l.objects[d].create.data.wgtID
          ? r.push(d)
          : 1 == t &&
            l.objects[d].create.data &&
            l.objects[d].create.data.wgtID == a
          ? r.push(d)
          : 2 == t &&
            l.objects[d].create.data &&
            l.objects[d].create.data.properties &&
            l.objects[d].create.data.properties.attrs &&
            l.objects[d].create.data.properties.attrs.apxType == a
          ? r.push(d)
          : 3 == t &&
            l.objects[d].create.data &&
            l.objects[d].create.data.properties &&
            l.objects[d].create.data.properties.attrs &&
            void 0 !== l.objects[d].create.data.properties.attrs[a]
          ? r.push(d)
          : 4 == t &&
            l.objects[d].create.data &&
            l.objects[d].create.data.styles &&
            l.objects[d].create.data.styles[a] == o
          ? r.push(d)
          : 5 == t &&
            l.objects[d].create.data &&
            l.objects[d].create.data.styles &&
            void 0 !== l.objects[d].create.data.styles[a] &&
            (l.objects[d].create.data.styles[a] || "").indexOf(o) != -1
          ? r.push(d)
          : 6 == t || (7 == t && a && a(l.objects[d].create.data) && r.push(d));
    return r;
  }),
  (apx.searchWidgets = apx.$O4s),
  (window.apx = window.apx || {}),
  (apx.wgt = {
    $O4z: { apxState: "state", apxLocal: "$apxLocal" },
    _sysPseudoProp: { apxLayer: !0 },
    $O4y: {
      apxText: "text",
      apxTextForced: "text",
      apxTextAlign: "textAlign",
      apxTextVAlign: "textValign",
      apxMediaID: "mediaID",
      fontStyle: "fontStyle",
      apxVisibility: "visibility",
      apxAngle: "angle",
      apxOpacity: "alpha",
      apxDragX: "dragX",
      apxDragY: "dragY",
      apxTextColor: "fontStyle",
      apxLabel: "title",
      apxStrokeStyle: "strokeStyle",
      apxFillStyle: "fillStyle",
      apxLineDash: "lineDash",
      apxLineWeight: "lineWidth",
      apxFontSize: "fontSize",
      apxTextItalic: "fontItalic",
      apxTextBold: "fontBold",
      apxTextUnderline: "fontUnderlined",
      apxFont: "font",
      apxCursor: "csr",
      sptMediaID: "mediaID",
    },
  }),
  (apx.wgt.spriteDefaultFrameDuration = 33),
  (apx.wgt.$O4l = function (e, t) {
    function a(a, i) {
      if (i.frames.length > 1) {
        i.lastTime || (i.lastTime = t);
        var n = (i.frame + 1) % i.frames.length,
          r = i.frame % i.frames.length;
        if (1 == i.type) {
          if (i.lastTime <= t) {
            e.wgtAniSet(a, i.states[n], i.frames[n], i.durations[r], !0);
            if (
              ((i.lastTime = t + i.durations[r]),
              i.frame++,
              !i.loop && i.frame == i.frames.length - 1)
            )
              return i.lastTime;
            for (var o = 0; o < i.frames.length && 0 == i.durations[r]; o++) {
              var n = (i.frame + 1) % i.frames.length,
                r = i.frame % i.frames.length;
              e.wgtAniSet(a, i.states[n], i.frames[n], i.durations[r], !0);
              if (
                ((i.lastTime = i.lastTime + i.durations[r]),
                i.frame++,
                !i.loop && i.frame == i.frames.length - 1)
              )
                return i.lastTime;
            }
          }
        } else if (2 == i.type && i.lastTime + i.durations[r] < t)
          if (
            (e.wgtAniSet(a, i.states[n], i.frames[n], void 0, !0),
            (i.lastTime = 0 == i.lastTime ? t : i.lastTime + i.durations[r]),
            i.frame == i.frames.length - 2)
          ) {
            if ((i.frame++, !i.loop)) return i.lastTime;
          } else i.frame++;
      } else if (i.lastTime + i.durations[0] < t)
        return (
          e.wgtAniSet(a, i.states[0], i.frames[0], 0, !0),
          (i.lastTime = t),
          i.lastTime
        );
      return 0;
    }
    if (e.__spriteLoop) {
      var i, n, r;
      for (var o in e.__spriteLoop)
        if (((n = e.__spriteLoop[o]), n && n.length))
          if (n.apxCur != -1) {
            if (void 0 === n.apxCur) {
              for (r = 0; r < n.length; r++)
                e.wgtAniSet(o, n[r].states[0], n[r].frames[0], 0, !0);
              n.apxCur = 0;
            }
            (i = a(o, n[n.apxCur])) &&
              (n.apxLoop
                ? ((n.apxCur = (n.apxCur + 1) % n.length),
                  (n[n.apxCur].lastTime = i))
                : n.apxCur < n.length - 1
                ? (n.apxCur++, (n[n.apxCur].lastTime = i))
                : 1 == n[n.apxCur].type
                ? ((n.apxCur = -1), (n.apxEndTime = i))
                : ((n.apxCur = -1), e.fireEvent("animation", "End", o)));
          } else
            n.apxEndTime &&
              n.apxEndTime < t &&
              (e.fireEvent("animation", "End", o), (n.apxEndTime = 0));
    }
  }),
  (apx.wgt.$O5P = function (e) {
    if (this.__spriteLoop)
      for (var t in this.__spriteLoop)
        (ctxt = this.__spriteLoop[t]),
          ctxt.length &&
            ctxt.apxCur != -1 &&
            ctxt[ctxt.apxCur] &&
            (ctxt[ctxt.apxCur].lastTime = 0);
  }),
  (apx.wgt.$O4t = function (e) {
    var t;
    if ((t = e.$css("transform"))) {
      var a = t.replace(/ /, "").split(/[\(\)\,]/),
        i = parseFloat(a[1]),
        n = parseFloat(a[2]),
        r = (Math.sqrt(i * i + n * n), Math.atan2(n, i));
      return r;
    }
    return 0;
  }),
  (apx.wgt.$O4u = function (e, t, a, i, n, r) {
    function o(e, t) {
      t.x = t.y = t.w = t.h = void 0;
      for (var a = 0; a < e.length; a++)
        (void 0 === t.x || t.x > e[a].x) && (t.x = e[a].x),
          (void 0 === t.y || t.y > e[a].y) && (t.y = e[a].y),
          (void 0 === t.w || t.w < e[a].x) && (t.w = e[a].x),
          (void 0 === t.h || t.h < e[a].y) && (t.h = e[a].y);
      (t.x = t.x || 0),
        (t.y = t.y || 0),
        (t.w = t.w || 0),
        (t.h = t.h || 0),
        (t.w = t.w - t.x),
        (t.h = t.h - t.y);
    }
    function s(e, t, a) {
      if ("poly" == a.type)
        for (var i = 0; i < a.pts.length; i++)
          (a.pts[i].x -= e), (a.pts[i].y -= t);
      else if ("polySet" == a.type) {
        for (var n = 0; n < a.polygons.length; n++)
          for (var i = 0; i < a.polygons[n].pts.length; i++)
            (a.polygons[n].pts[i].x -= e), (a.polygons[n].pts[i].y -= t);
        for (n = 0; n < a.pts.length; n++) (a.pts[n].x -= e), (a.pts[n].y -= t);
      }
    }
    function p(t, a, i) {
      function r(e, t, a) {
        for (
          var i, n, r = p + u / 2 + d, o = l + h / 2 + c, s = 0;
          s < e.length;
          s++
        )
          (i = p + e[s].x * u),
            (n = l + e[s].y * h),
            g
              ? a
                ? ((t[s].x = apn.CES.$O5M(r, o, g, i, n)),
                  (t[s].y = apn.CES.$O5N(r, o, g, i, n)))
                : t.push({
                    x: apn.CES.$O5M(r, o, g, i, n),
                    y: apn.CES.$O5N(r, o, g, i, n),
                  })
              : a
              ? ((t[s].x = i), (t[s].y = n))
              : t.push({ x: i, y: n });
      }
      var o;
      if (
        (a.create.data && a.create.data.styles && (o = a.create.data.styles),
        !o)
      )
        return null;
      var s;
      s =
        a.init.shape.type == bx.CCanvasWnd.SHAPE_LINE
          ? 2
          : o.polygon && o.polygon.length
          ? "apn.CPolyline" == a.module
            ? 4
            : 3
          : o.borderRadiusTopLeft ||
            o.borderRadiusBottomLeft ||
            o.borderRadiusTopRight ||
            o.borderRadiusBottomRight
          ? 5
          : 1;
      var p = a.init.position.x,
        l = a.init.position.y,
        d = a.init.cx || 0,
        c = a.init.cy || 0,
        g = parseFloat(o.angle) || 0;
      if (1 == s) {
        var u = a.init.shape.w,
          h = a.init.shape.h,
          x = 0;
        if (
          (("bx.CEditorWnd.CEllipse" != a.module &&
            "apn.CEllipse" != a.module) ||
            (x = 1),
          g || 0 != x)
        ) {
          var f;
          if (0 == x) {
            var y = p + u / 2 + d,
              v = l + h / 2 + c;
            if (n) {
              if (!t.apnCur.apxColDectectOn && t.apnCur.apxColDectectGeoP)
                return t.apnCur.apxColDectectGeoP;
              (t.apnCur.apxColDectectGeoP = t.apnCur.apxColDectectGeoP || {
                type: "poly",
                pts: [],
              }),
                (f = t.apnCur.apxColDectectGeoP);
            } else f = { type: "poly", pts: [] };
            (f.pts[0] = f.pts[0] || {}),
              (f.pts[1] = f.pts[1] || {}),
              (f.pts[2] = f.pts[2] || {}),
              (f.pts[3] = f.pts[3] || {}),
              (f.pts[0].x = apn.CES.$O5M(y, v, g, p, l)),
              (f.pts[0].y = apn.CES.$O5N(y, v, g, p, l)),
              (f.pts[1].x = apn.CES.$O5M(y, v, g, p + u, l)),
              (f.pts[1].y = apn.CES.$O5N(y, v, g, p + u, l)),
              (f.pts[2].x = apn.CES.$O5M(y, v, g, p + u, l + h)),
              (f.pts[2].y = apn.CES.$O5N(y, v, g, p + u, l + h)),
              (f.pts[3].x = apn.CES.$O5M(y, v, g, p, l + h)),
              (f.pts[3].y = apn.CES.$O5N(y, v, g, p, l + h));
          } else {
            if (n) {
              if (!t.apnCur.apxColDectectOn && t.apnCur.apxColDectectGeoP)
                return t.apnCur.apxColDectectGeoP;
              (t.apnCur.apxColDectectGeoP = { type: "poly", pts: [] }),
                (f = t.apnCur.apxColDectectGeoP);
            } else f = { type: "poly", pts: [] };
            apn.CES.$O4p(
              p,
              l,
              u,
              h,
              g || 0,
              f.pts,
              2 * Math.ceil(Math.max(u, h) / 5),
              d,
              c
            );
          }
          return f;
        }
        if ("poly" == i) {
          var f;
          if (n) {
            if (!t.apnCur.apxColDectectOn && t.apnCur.apxColDectectGeoP)
              return t.apnCur.apxColDectectGeoP;
            (t.apnCur.apxColDectectGeoP = t.apnCur.apxColDectectGeoP || {
              type: "poly",
              pts: [],
            }),
              (f = t.apnCur.apxColDectectGeoP);
          } else f = { type: "poly", pts: [] };
          return (
            (f.pts[0] = f.pts[0] || {}),
            (f.pts[1] = f.pts[1] || {}),
            (f.pts[2] = f.pts[2] || {}),
            (f.pts[3] = f.pts[3] || {}),
            (f.pts[0].x = p),
            (f.pts[0].y = l),
            (f.pts[1].x = p + u),
            (f.pts[1].y = l),
            (f.pts[2].x = p + u),
            (f.pts[2].y = l + h),
            (f.pts[3].x = p),
            (f.pts[3].y = l + h),
            f
          );
        }
        var f;
        if (n) {
          if (!t.apnCur.apxColDectectOn && t.apnCur.apxColDectectGeoR)
            return t.apnCur.apxColDectectGeoR;
          (t.apnCur.apxColDectectGeoR = t.apnCur.apxColDectectGeoR || {}),
            (f = t.apnCur.apxColDectectGeoR);
        } else f = {};
        return (f.type = "rect"), (f.x = p), (f.y = l), (f.w = u), (f.h = h), f;
      }
      if (3 == s || 4 == s) {
        var f,
          u = a.init.shape.w,
          h = a.init.shape.h,
          C = apn.IWidget.$O2z(2, e.project, a, 1);
        if (4 == s) {
          if (n) {
            if (!t.apnCur.apxColDectectOn && t.apnCur.apxColDectectGeoPS)
              return t.apnCur.apxColDectectGeoPS;
            (t.apnCur.apxColDectectGeoPS = {
              type: "polySet",
              polygons: [],
              pts: [],
            }),
              (f = t.apnCur.apxColDectectGeoPS);
          } else f = { type: "polySet", polygons: [], pts: [] };
          if (o.polygon && o.polygon.length > 1) {
            var b,
              _,
              m,
              C = apn.IWidget.$O2z(2, e.project, a, 1);
            f.polygons.length = o.polygon.length - 1;
            for (var I = 0; I < o.polygon.length - 1; I++) {
              if (C > 1) {
                (m = f.polygons[I] = f.polygons[I] || []),
                  (m[0] = m[0] || {}),
                  (m[1] = m[1] || {}),
                  (m[2] = m[2] || {}),
                  (m[3] = m[3] || {});
                var S = apn.CES.getLineAngle({
                  x: [o.polygon[I].x, o.polygon[I + 1].x],
                  y: [o.polygon[I].y, o.polygon[I + 1].y],
                });
                (b = o.polygon[I].x),
                  (_ = o.polygon[I].y),
                  (m[0].x = apn.CES.$O5M(
                    b,
                    _,
                    -(Math.PI / 2 - S),
                    b,
                    _ - C / h
                  )),
                  (m[0].y = apn.CES.$O5N(
                    b,
                    _,
                    -(Math.PI / 2 - S),
                    b,
                    _ - C / h
                  )),
                  (m[1].x = apn.CES.$O5M(b, _, Math.PI / 2 + S, b, _ - C / h)),
                  (m[1].y = apn.CES.$O5N(b, _, Math.PI / 2 + S, b, _ - C / h)),
                  (b = o.polygon[I + 1].x),
                  (_ = o.polygon[I + 1].y),
                  (m[2].x = apn.CES.$O5M(b, _, Math.PI / 2 + S, b, _ - C / h)),
                  (m[2].y = apn.CES.$O5N(b, _, Math.PI / 2 + S, b, _ - C / h)),
                  (m[3].x = apn.CES.$O5M(
                    b,
                    _,
                    -(Math.PI / 2 - S),
                    b,
                    _ - C / h
                  )),
                  (m[3].y = apn.CES.$O5N(
                    b,
                    _,
                    -(Math.PI / 2 - S),
                    b,
                    _ - C / h
                  ));
              } else
                (m = f.polygons[I] = f.polygons[I] || []),
                  (m[0] = m[0] || {}),
                  (m[1] = m[1] || {}),
                  (m[0].x = o.polygon[I].x),
                  (m[0].y = o.polygon[I].y),
                  (m[1].x = o.polygon[I + 1].x),
                  (m[1].y = o.polygon[I + 1].y);
              r(f.polygons[I], f.polygons[I], !0);
            }
            r(o.polygon, f.pts);
          }
        } else {
          if (n) {
            if (!t.apnCur.apxColDectectOn && t.apnCur.apxColDectectGeoP)
              return t.apnCur.apxColDectectGeoP;
            (t.apnCur.apxColDectectGeoP = { type: "poly", pts: [] }),
              (f = t.apnCur.apxColDectectGeoP);
          } else f = { type: "poly", pts: [] };
          "apn.CPolycurve" == a.module && t.ctx
            ? (t.ctx.curve ||
                apn.widgets["apn.wgt.polygon"].exeDetect(
                  e.project,
                  t,
                  a,
                  0,
                  0,
                  0
                ),
              r(t.ctx.curve, f.pts))
            : o.polygon && r(o.polygon, f.pts);
        }
        return f;
      }
      if (2 == s) {
        var f;
        if (n) {
          if (!t.apnCur.apxColDectectOn && t.apnCur.apxColDectectGeoP)
            return t.apnCur.apxColDectectGeoP;
          (t.apnCur.apxColDectectGeoP = t.apnCur.apxColDectectGeoP || {
            type: "poly",
            pts: [],
          }),
            (f = t.apnCur.apxColDectectGeoP);
        } else f = { type: "poly", pts: [] };
        var b,
          _,
          C = apn.IWidget.$O2z(2, e.project, a, 1);
        if (C > 1) {
          4 != f.pts.length && (f.pts.length = 4),
            (f.pts[0] = f.pts[0] || {}),
            (f.pts[1] = f.pts[1] || {}),
            (f.pts[2] = f.pts[2] || {}),
            (f.pts[3] = f.pts[3] || {});
          var S = apn.CES.getLineAngle(a.init.shape);
          (b = p + a.init.shape.x[0]),
            (_ = l + a.init.shape.y[0]),
            (f.pts[0].x = apn.CES.$O5M(b, _, -(Math.PI / 2 - S), b, _ - C)),
            (f.pts[0].y = apn.CES.$O5N(b, _, -(Math.PI / 2 - S), b, _ - C)),
            (f.pts[1].x = apn.CES.$O5M(b, _, Math.PI / 2 + S, b, _ - C)),
            (f.pts[1].y = apn.CES.$O5N(b, _, Math.PI / 2 + S, b, _ - C)),
            (b = p + a.init.shape.x[1]),
            (_ = l + a.init.shape.y[1]),
            (f.pts[2].x = apn.CES.$O5M(b, _, Math.PI / 2 + S, b, _ - C)),
            (f.pts[2].y = apn.CES.$O5N(b, _, Math.PI / 2 + S, b, _ - C)),
            (f.pts[3].x = apn.CES.$O5M(b, _, -(Math.PI / 2 - S), b, _ - C)),
            (f.pts[3].y = apn.CES.$O5N(b, _, -(Math.PI / 2 - S), b, _ - C));
        } else
          2 != f.pts.length && (f.pts.length = 2),
            (f.pts[0] = f.pts[0] || {}),
            (f.pts[1] = f.pts[1] || {}),
            (f.pts[0].x = p + a.init.shape.x[0]),
            (f.pts[0].y = l + a.init.shape.y[0]),
            (f.pts[1].x = p + a.init.shape.x[1]),
            (f.pts[1].y = l + a.init.shape.y[1]);
        return f;
      }
      if (5 == s) {
        if (n) {
          if (!t.apnCur.apxColDectectOn && t.apnCur.apxColDectectGeoP)
            return t.apnCur.apxColDectectGeoP;
          (t.apnCur.apxColDectectGeoP = { type: "poly", pts: [] }),
            (f = t.apnCur.apxColDectectGeoP);
        } else f = { type: "poly", pts: [] };
        var u = a.init.shape.w,
          h = a.init.shape.h;
        return (
          apn.CES._approximate_rrect_to_polygon(
            p,
            l,
            u,
            h,
            o.borderRadiusTopLeft || 0,
            o.borderRadiusTopRight || 0,
            o.borderRadiusBottomRight || 0,
            o.borderRadiusBottomLeft || 0,
            g || 0,
            f.pts,
            Math.ceil(
              ((o.borderRadiusTopLeft || 0) +
                (o.borderRadiusTopRight || 0) +
                (o.borderRadiusBottomRight || 0) +
                (o.borderRadiusBottomLeft || 0)) /
                3
            ) + 4,
            d,
            c
          ),
          f
        );
      }
      return null;
    }
    var l = !(!r || !r.applyScroll);
    l && (n = !1),
      ((t.apnCur && t.apnCur.apxColDectectNoOpti) ||
        (a.apnCur && a.apnCur.apxColDectectNoOpti)) &&
        (n = !1);
    var d, c, g, u;
    if (t.apnOID) {
      if (!a.apnOID) return !1;
      if (
        e.project.property.denyInvisibleIntersect &&
        ((!t.apxAcceptInvisibleIntersect && "none" == t.style.display) ||
          (!a.apxAcceptInvisibleIntersect && "none" == a.style.display))
      )
        return !1;
      (g = e.screen.objects[t.apnOID]), (d = p(t, g));
    } else d = t;
    if (((u = e.screen.objects[a.apnOID]), (c = p(a, u)), !d || !c)) return !1;
    if (((i = i || 0), l)) {
      var h = bx.HCL.getElementY2(t) - bx.HCL.getElementY2(t, !0),
        x = bx.HCL.getElementY2(a) - bx.HCL.getElementY2(a, !0),
        f = bx.HCL.getElementX2(t) - bx.HCL.getElementX2(t, !0),
        y = bx.HCL.getElementX2(a) - bx.HCL.getElementX2(a, !0);
      (h = e.toCanvasY(h)),
        (x = e.toCanvasY(x)),
        (f = e.toCanvasX(f)),
        (y = e.toCanvasX(y));
    } else
      var h = 0,
        x = 0,
        f = 0,
        y = 0;
    if ("rect" == d.type && "rect" == c.type)
      return bx.CCanvasWnd.intersect_rect_rect(
        d.x - i - f,
        d.y - i - h,
        d.w + 2 * i,
        d.h + 2 * i,
        c.x - i - y,
        c.y - i - x,
        c.w + 2 * i,
        c.h + 2 * i
      );
    "rect" == d.type &&
      (g
        ? (d = p(t, g, "poly"))
        : ("poly" == d.type,
          (d.pts = new Array(4)),
          (d.pts[0] = { x: d.x, y: d.y }),
          (d.pts[1] = { x: d.x + d.w, y: d.y }),
          (d.pts[2] = { x: d.x + d.w, y: d.y + d.h }),
          (d.pts[3] = { x: d.x, y: d.y + d.h }))),
      "rect" == c.type && (c = p(a, u, "poly"));
    var v;
    if (
      (g
        ? ((t.apnCur.apxColDectectGeoBndR = t.apnCur.apxColDectectGeoBndR || {
            type: "rect",
          }),
          (v = t.apnCur.apxColDectectGeoBndR))
        : (v = { type: "rect" }),
      o(d.pts, v),
      (a.apnCur.apxColDectectGeoBndR = a.apnCur.apxColDectectGeoBndR || {
        type: "rect",
      }),
      o(c.pts, a.apnCur.apxColDectectGeoBndR),
      bx.CCanvasWnd.intersect_rect_rect(
        v.x - f,
        v.y - h,
        v.w,
        v.h,
        a.apnCur.apxColDectectGeoBndR.x - y,
        a.apnCur.apxColDectectGeoBndR.y - x,
        a.apnCur.apxColDectectGeoBndR.w,
        a.apnCur.apxColDectectGeoBndR.h
      ))
    )
      if (
        (l && (f || h || y || x) && (s(f, h, d), s(y, x, c)),
        "polySet" == d.type && "polySet" == c.type)
      ) {
        for (var C, b = 0; b < d.polygons.length; b++)
          for (C = 0; C < c.polygons.length; C++)
            if (
              bx.CCanvasWnd.intersect_polygon_polygon(
                d.polygons[b],
                c.polygons[C]
              )
            )
              return !0;
      } else if ("polySet" == d.type) {
        for (var b = 0; b < d.polygons.length; b++)
          if (bx.CCanvasWnd.intersect_polygon_polygon(d.polygons[b], c.pts))
            return !0;
      } else {
        if ("polySet" != c.type)
          return bx.CCanvasWnd.intersect_polygon_polygon(d.pts, c.pts);
        for (var C = 0; C < c.polygons.length; C++)
          if (bx.CCanvasWnd.intersect_polygon_polygon(d.pts, c.polygons[C]))
            return !0;
      }
    return !1;
  }),
  (apx.tag = {}),
  (apx.tag.$O4v = function (e, t) {
    return bx.HCL.getElementX2(t) - bx.HCL.getElementX2(e.tag);
  }),
  (apx.tag.$O4w = function (e, t) {
    return bx.HCL.getElementY2(t) - bx.HCL.getElementY2(e.tag);
  }),
  (apn.CES.prototype.widgetsByClass = function (e, t, a, i) {
    var n;
    return (
      (i && i instanceof Array) || (void 0 !== i && ((n = i), (i = void 0))),
      apx.$O4s(this, 1, e, t, a, i, void 0, n)
    );
  }),
  (apn.CES.prototype.getWidgetsByClass = apn.CES.prototype.widgetsByClass),
  (apn.CES.prototype.widgetsByType = function (e, t, a, i) {
    var n;
    return (
      (i && i instanceof Array) || (void 0 !== i && ((n = i), (i = void 0))),
      apx.$O4s(this, 2, e, t, a, i, void 0, n)
    );
  }),
  (apn.CES.prototype.getWidgetsByType = apn.CES.prototype.widgetsByType);
apn.CES.prototype.widgetsByProperty = function (e, t, a, i) {
  var n;
  return (
    (i && i instanceof Array) || (void 0 !== i && ((n = i), (i = void 0))),
    apx.$O4s(this, 3, e, t, a, i, void 0, n)
  );
};
(apn.CES.prototype.getWidgetsByProperty = apn.CES.prototype.widgetsByProperty),
  (apn.CES.prototype.widgetsByStyle = function (e, t, a, i, n) {
    return apx.$O4s(this, 4, e, a, i, n, t);
  }),
  (apn.CES.prototype.mediaURL = function (e, t, a) {
    return (
      "video" != apn.Project.getMediaType(this.project, e) &&
        "audio" != apn.Project.getMediaType(this.project, e) &&
        (t = !1),
      this.viewer.o.standAlone &&
        this.viewer._uPubExAstPath &&
        this.viewer._uPubExAstPath[e] &&
        ((a = a || {}), (a.path = this.viewer._uPubExAstPath[e])),
      apn.Project.$O1e(this.viewer.project, e, t, this.viewer.o.standAlone, a)
    );
  }),
  (apn.CES.prototype.localMediaURL = function (e, t, a) {
    if (!this || !this.screen || !this.screen.objects[e])
      return void bx.Trace.log(
        "APX",
        "warning",
        "Non-exist widget id=" + e,
        "localMediaURL"
      );
    if (
      this.screen.objects[e].create.data &&
      this.screen.objects[e].create.data.wgtID
    ) {
      if (this.viewer.o.standAlone)
        return (
          "wgts/" +
          this.screen.objects[e].create.data.wgtID +
          "/" +
          (a || "imgs") +
          "/" +
          t
        );
      var i = this.screen.objects[e].create.data.wgtID.split(".");
      return (
        "DB/" +
        i[0] +
        "/apx/" +
        this.screen.objects[e].create.data.wgtID +
        "/" +
        (a || "imgs") +
        "/" +
        t
      );
    }
    return t;
  }),
  (apn.CES.prototype.attachmentURL = function (e, t) {
    return this.viewer.o.standAlone
      ? "./asset/" + this.getPageID() + "_" + e + t
      : null;
  }),
  (apn.CES.prototype.log = function (e, t) {
    function a(e) {
      return e
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/\'/g, "&apos;")
        .replace(/\"/g, "&quot;")
        .replace(/>/g, "&gt;");
    }
    var i = "";
    e &&
      this.screen.objects[e] &&
      this.screen.objects[e].create.data &&
      this.screen.objects[e].create.data.styles &&
      this.screen.objects[e].create.data.styles.title &&
      (i = this.screen.objects[e].create.data.styles.title),
      e &&
        this.screen.objects[e] &&
        this.screen.objects[e].create.data &&
        (i += "(" + this.screen.objects[e].create.data.wgtTitle + ")");
    var n =
      (i
        ? '<span style="color:#ffffff">[' +
          a(
            i +
              (this.screen.UI && this.screen.UI.title
                ? " in " + this.screen.UI.title
                : "")
          ) +
          "]</span> "
        : "") + a(t);
    this.viewer.$O3T
      ? this.viewer.$O3T.error(n)
      : !this.viewer.o.standAlone &&
        apn.CExe.sbxExeIF &&
        apn.CExe.sbxExeIF("onLog", { log: n });
  }),
  (apn.CES.prototype.devError = function (e) {
    bx.Log.isActive() &&
      window.console &&
      arguments.length > 1 &&
      (e && this.screen.objects[e] && this.screen.objects[e].create.data
        ? (arguments[0] =
            "[" + this.screen.objects[e].create.data.wgtTitle + "]")
        : (arguments[0] = "[APX]"),
      console.error.apply(console, arguments));
  }),
  (apn.CES.prototype.allocAsyncWork = function (e, t) {
    var a = this;
    return function () {
      if (!a.$O7K) return t.apply(e, arguments);
    };
  }),
  (apn.CES.prototype.fireEvent = function (e, t, a, i, n, r, o) {
    function s() {
      if (g.$O4n && g.$O4n.length)
        for (var t, i = 0; i < g.$O4n.length; i++)
          if (
            ((t = !1),
            g.viewer.isCurrentPage(g.$O4n[i].pId) && (t = !0),
            g._inPagePauseEvent && (t = !0),
            t || g.$O4n[i].always)
          ) {
            var n = e.split(":");
            (event = n[0]), g.$O4n[i].event == event && g.$O4n[i].handler(n[1]);
          }
      g.eventExe(e, a, r, o);
    }
    var p = !1;
    if (this.viewer.isRunning() || this.viewer._apxPassEventIfExeStop) {
      if (apn.P.eventTitle[e]) {
        if (
          this.isPaused() &&
          !(
            i ||
            ("media" == e && "Pause" == t) ||
            (t && t.indexOf && 0 == t.indexOf("$APX"))
          )
        )
          return;
        p = !0;
      }
      e += t ? ":" + t : "";
      var l = apn.P.$O7u(this.project);
      if (l) {
        var d, c;
        for (d in l) {
          if (l[d].param) for (c in l[d].param) d + ":" + c == e && (p = !0);
          else d == e && (p = !0);
          if (p) break;
        }
      }
      if (p) {
        var g = this;
        n ? s() : setTimeout(s, 0);
      } else
        bx.Trace.log("APX", "warning", "Unknown APX Event=" + e, "fireEvent");
    }
  }),
  (apn.CES.prototype.playAudio = function (e, t, a) {
    if (this.viewer.IDevice_useWebAudio()) {
      if (
        (this.viewer.getCurrentPageID() != this.getPageID() ||
          this.isPaused()) &&
        (!a || !a.allowBackground)
      )
        return void (a && a.onEnd && a.onEnd(e));
      (this.$O4i = this.$O4i || { index: 0 }),
        (e = this.$O4i.index++ + ""),
        (this.$O4i[e] = { type: "WebAudioAPI" }),
        (this.$O4i[e].$OcH = this.tag.$TAG("div", { style: "display:none;" })),
        (this.$O4i[e].tag = new AspenWebAudio(this.$O4i[e].$OcH));
      var i = this.$O4i[e].tag;
      a && a.onEnd && i.setCallback(void 0, a.onEnd),
        i.setMedia(this.mediaURL(t) || t),
        i.setLoop(!(!a || !a.loop)),
        i.play();
    } else this.$OcI(e, t, a);
  }),
  (apn.CES.prototype.$OcI = function (e, t, a) {
    function i(e) {
      this._apxPlayListCur < this._apxPlayList.length - 1
        ? (this._apxPlayListCur++,
          (this.sourceTag.src =
            d.mediaURL(this._apxPlayList[this._apxPlayListCur]) ||
            this._apxPlayList[this._apxPlayListCur]),
          this.load(),
          this.play())
        : this.$O5i &&
          d.$O4i &&
          d.$O4i[this.$O5f] &&
          (this.pause(),
          (this.sourceTag.src = ""),
          this.load(),
          d.tag.removeChild(this),
          delete d.$O4i[this.$O5f]);
    }
    function n(e) {
      i.call(this.parentNode, e);
    }
    function r(e) {
      this.$O6K && this.$O6K(this.$O5f, this.duration || 0);
    }
    function o() {
      this.$O6L && this.$O6L(this.$O5f, this.currentTime);
    }
    var s,
      p = !1,
      l = !1;
    if (
      (this.viewer.getCurrentPageID() != this.getPageID() || this.isPaused()) &&
      (!a || !a.allowBackground)
    )
      return void (a && a.onEnd && a.onEnd(e));
    if (
      ((this.$O4i = this.$O4i || { index: 0 }),
      e || ((e = this.$O4i.index++ + ""), (p = !0)),
      this.$O4i[e]
        ? (l = !0)
        : ((this.$O4i[e] = {}),
          (this.$O4i[e].tag = this.tag.$TAG("audio", {
            style: "display:none;",
          })),
          (this.$O4i[e].tag.sourceTag = this.$O4i[e].tag.$TAG("source")),
          a && a.allowBackground && (this.$O4i[e].allowBackground = !0)),
      (s = this.$O4i[e].tag))
    ) {
      var d = this;
      if (
        ((s.$O5f = e),
        (s.$O5i = p),
        a && a.onEnd ? (s.$O5g = a.onEnd) : (s.$O5g = void 0),
        a && a.onDuration ? (s.$O6K = a.onDuration) : (s.$O6K = void 0),
        a && a.onPlayTime ? (s.$O6L = a.onPlayTime) : (s.$O6L = void 0),
        t instanceof Array
          ? ((s._apxPlayList = t), (s._apxPlayListCur = 0), (t = t[0]))
          : (s._apxPlayList = void 0),
        l ||
          (s._apxPlayList
            ? (bx.Event.add(s, "ended", i, !1),
              bx.Event.add(s, "error", i, !1),
              bx.Event.add(s.sourceTag, "error", n, !1))
            : ((s.onerror = s.onabort =
                function (e) {
                  if (
                    ("ended" == e.type ||
                      "error" == e.type ||
                      "pause" == e.type) &&
                    this.$O5g &&
                    this.$O7X
                  ) {
                    this.$O7X = !1;
                    var t = this;
                    setTimeout(function () {
                      t.$O5g(t.$O5f);
                    }, 0);
                  }
                  this.$O5i &&
                    d.$O4i &&
                    d.$O4i[this.$O5f] &&
                    (this.pause(),
                    (this.sourceTag.src = ""),
                    this.load(),
                    d.tag.removeChild(this),
                    delete d.$O4i[this.$O5f]);
                }),
              bx.Event.add(s, "ended", s.onerror, !1),
              bx.Event.add(s, "pause", s.onerror, !1)),
          bx.Event.add(s, "loadedmetadata", r, !1),
          bx.Event.add(s, "timeupdate", o, !1)),
        (s.loop = !(!a || !a.loop)),
        (l && s.sourceTag.getAttribute("src") == (this.mediaURL(t) || t)) ||
          ((s.sourceTag.src = this.mediaURL(t) || t), s.load()),
        !p && a && a.loadOnly)
      );
      else if (((s.$O7X = !0), s.paused)) {
        var c = s.play();
        void 0 !== c &&
          c.then &&
          c
            .then(function () {})
            .catch(function (e) {
              console.error("[Aspen] playAudio", e);
            });
      } else s.currentTime = 0;
    }
  }),
  (apn.CES.prototype.stopAudio = function (e) {
    if (this.$O4i[e])
      try {
        (this.$O4i[e].tag.currentTime = 0), this.$O4i[e].tag.pause();
      } catch (e) {}
  }),
  (apn.CES.prototype.pauseAudio = function (e) {
    if (this.$O4i[e])
      try {
        this.$O4i[e].tag.pause();
      } catch (e) {}
  }),
  (apn.CES.prototype.resumeAudio = function (e) {
    if (this.$O4i[e])
      try {
        this.$O4i[e].tag.play();
      } catch (e) {}
  }),
  (apn.CES.prototype.ctxSet = function (e, t) {
    apx._setFileVar(this.viewer, e, t);
  }),
  (apn.CES.prototype.ctxGet = function (e) {
    if (this.viewer.$O3U) return this.viewer.$O3U[e];
  }),
  (apn.CES.prototype.pageGetValue = function (e) {
    return this.sptPageGetVar(e);
  }),
  (apn.CES.prototype.wgtCloneLayer = function (e, t, a) {
    function i(e) {
      var t = l.screen.objects[e];
      if (
        !(t.layout && t.layout.children && t.layout.states) &&
        (p.push(e), t.layout && t.layout.children)
      )
        for (var a = 0; a < t.layout.children.length; a++)
          i(t.layout.children[a]);
    }
    var n = this.screen.objects[e];
    if (e && t && a && this.screen && n) {
      var r = apn.Project.getWidgetModule(n.create.data);
      if (!r || !r.exeOnCloneLayer) return null;
      if (!(n && n.create.data && n.create.data.wgtID)) return null;
      if (!n.layout || !n.layout.layers) return null;
      var o,
        s = {},
        p = [],
        l = this;
      i(t);
      for (var d, c, g = 0; g < p.length; g++)
        (d = this.$OcJ(p[g])),
          void 0 === o &&
            ((o = d),
            (c = this.$O5G(t, !0)) &&
              ((n = this.screen.objects[c]),
              (n.layout = n.layout || {}),
              (n.layout.children = n.layout.children || []),
              n.layout.children.push(o),
              (n.layout.layers[++n.layout.layerIndex] = { title: a, id: o }))),
          (s[p[g]] = d);
      for (g = 0; g < p.length; g++) this.$OcK(s[p[g]], s);
      return (
        this.$OcL(o, c, s),
        r.exeOnCloneLayer(this, e),
        this._updateTickLoop(),
        o
      );
    }
  }),
  (apn.CES.prototype.wgtClone = function (e, t, a) {
    function i(e) {
      var t = c.screen.objects[e].layout;
      if (!(t && t.children && t.states) && (d.push(e), t && t.children))
        for (var a = 0; a < t.children.length; a++) i(t.children[a]);
    }
    var n = this.screen.objects[e];
    if (!n)
      return void bx.Trace.log(
        "APX",
        "warning",
        "Non-exist widget id=" + e,
        "wgtClone"
      );
    if (!(n && n.create.data && n.create.data.wgtID))
      return (
        bx.Trace.log("APX", "warning", "Invalid widget id=" + e, "wgtClone"),
        null
      );
    var r = this.screen.objects[t];
    if (t && (!r || !r.layout || !r.layout.layers))
      return (
        bx.Trace.log(
          "APX",
          "warning",
          "Invalid parent widget id=" + e,
          "wgtClone"
        ),
        null
      );
    var o;
    if (t) {
      var s = r.layout.layers;
      for (h in s)
        if (s[h].title == a || void 0 === a) {
          o = s[h].id;
          break;
        }
      void 0 === o && (o = s[0].id);
    }
    var p,
      l = {};
    if (n.layout && n.layout.layers) {
      var d = [],
        c = this;
      i(e);
      for (var g, u, h = 0; h < d.length; h++)
        (g = this.$OcJ(d[h])),
          void 0 === p &&
            ((p = g),
            void 0 !== o
              ? ((r = this.screen.objects[o]),
                (r.layout = r.layout || {}),
                (r.layout.children = r.layout.children || []),
                r.layout.children.push(p))
              : (u = this.$O5G(e, !0)) &&
                ((r = this.screen.objects[u]),
                (r.layout = r.layout || {}),
                (r.layout.children = r.layout.children || []),
                r.layout.children.push(p))),
          (l[d[h]] = g);
      for (h = 0; h < d.length; h++) this.$OcK(l[d[h]], l);
      this.$OcL(p, o || u, l);
    } else {
      if (n.layout && n.layout.states) return null;
      (p = this.$OcJ(e)), (l[e] = p);
      var u;
      void 0 !== o
        ? ((r = this.screen.objects[o]),
          (r.layout = r.layout || {}),
          (r.layout.children = r.layout.children || []),
          r.layout.children.push(p))
        : (u = this.$O5G(e, !0)) &&
          ((r = this.screen.objects[u]),
          (r.layout = r.layout || {}),
          (r.layout.children = r.layout.children || []),
          r.layout.children.push(p)),
        this.$OcK(p, l),
        this.$OcL(p, o || u, l);
    }
    return this._updateTickLoop(), p;
  }),
  (apn.CES.prototype.$OcJ = function (e) {
    var t = this.screen.objects[e];
    (this.screen.$O4x = this.screen.$O4x || 0), this.screen.$O4x++;
    var a = e + this.screen.$O4x + "_";
    if (
      ((this.screen.objects[a] = bx.$cloneObject({}, t)),
      this.project.property.denyCloneLocal)
    ) {
      var i = this.screen.objects[a].create.data;
      i &&
        i.properties &&
        i.properties.$apxLocal &&
        delete i.properties.$apxLocal;
    }
    return a;
  }),
  (apn.CES.prototype.$OcK = function (e, t) {
    apn.Project._remapObject(t, this.screen, e);
  }),
  (apn.CES.prototype.$OcL = function (e, t, a) {
    for (var i in a) this.$Ocr(a[i]);
    this.$O3L(t ? this.$O3d[t] : this.tag, e, this.screen.objects[e]);
    for (i in a) {
      this.$Ocu(a[i]);
      var n = apn.Project.getWidgetModule(
        this.screen.objects[a[i]].create.data
      );
      if (n) {
        if (n.exeAssetPreload)
          if (apn.CExe.DEBUG) n.exeAssetPreload(this, a[i], function () {});
          else
            try {
              n.exeAssetPreload(this, a[i], function () {});
            } catch (e) {
              this.log(
                a[i],
                "Problem in source code of the widget. Please consult to the technical support team."
              );
            }
        if (n.exeAssetLoad)
          if (apn.CExe.DEBUG) n.exeAssetLoad(this, this.$O3d[a[i]]);
          else
            try {
              n.exeAssetLoad(this, this.$O3d[a[i]]);
            } catch (e) {
              this.log(
                a[i],
                "Problem in source code of the widget. Please consult to the technical support team."
              );
            }
        if (n.exeOnLoad)
          if (apn.CExe.DEBUG) n.exeOnLoad(this, a[i]);
          else
            try {
              n.exeOnLoad(this, a[i]);
            } catch (e) {
              this.log(
                a[i],
                "Problem in source code of the widget. Please consult to the technical support team."
              );
            }
        if (
          (n.exeSetState &&
            (this.wgtGetProperty(a[i], "apxState") &&
              null !==
                n.exeSetState(
                  this,
                  this.$O3d[a[i]],
                  this.wgtGetProperty(a[i], "apxState"),
                  void 0,
                  !0
                ) &&
              n.exeFireStateEvent &&
              this.fireEvent(
                "stateChange",
                "$APX" + this.wgtGetProperty(a[i], "apxState"),
                a[i],
                void 0,
                void 0,
                void 0,
                !0
              ),
            apn.Project.checkStateType(this.screen.objects[a[i]].layout) &&
              !n.BLACKBOX_MODEL &&
              n.exeSetState(this, this.$O3d[a[i]], this.$O3l(a[i]), void 0)),
          n.exeOnStart)
        )
          if (apn.CExe.DEBUG) n.exeOnStart(this, a[i]);
          else
            try {
              n.exeOnStart(this, a[i]);
            } catch (e) {
              this.log(
                a[i],
                "Problem in source code of the widget. Please consult to the technical support team."
              );
            }
      }
    }
  }),
  (apn.CES.prototype.wgtSetValue = function (e, t) {
    this.sptWgtSetProp(e, "value", t);
  }),
  (apn.CES.prototype.wgtGetValue = function (e) {
    return this.sptWgtGetProp(e, "value", void 0, !0);
  }),
  (apn.CES.prototype.wgtGetProperty = function (e, t, a) {
    if (!this || !this.screen || !this.screen.objects[e])
      return void bx.Trace.log(
        "APX",
        "warning",
        "Non-exist widget id=" + e,
        "wgtGetProperty"
      );
    var i = this.screen.objects[e].create.data,
      n = apn.Project.getWidgetModule(i);
    if (n && n.exePropGet && n.exePropGet(this, e, t, !0))
      return n.exePropGet(this, e, t);
    if (apx.wgt.$O4y[t]) {
      if (i && i.styles)
        return a
          ? apn.Project.resolveStyle(
              this.project,
              apx.wgt.$O4y[t],
              i.styles[apx.wgt.$O4y[t]],
              !0
            )
          : i.styles[apx.wgt.$O4y[t]];
    } else if (apx.wgt.$O4z[t]) {
      if (
        i &&
        ("apxLocal" == t &&
          ((i.properties = i.properties || {}),
          (i.properties[apx.wgt.$O4z[t]] =
            i.properties[apx.wgt.$O4z[t]] || {})),
        i.properties)
      )
        return i.properties[apx.wgt.$O4z[t]];
    } else if (apx.wgt._sysPseudoProp[t]) {
      if (
        "apxLayer" == t &&
        2 ==
          apn.Project.checkStateTypeByObjectID(
            this.project,
            this.getPageID(),
            e
          )
      )
        return this.$O3l(e, !0);
    } else if (i && i.properties && i.properties.attrs)
      return i.properties.attrs[t];
  }),
  (apn.CES.prototype.wgtSetProperty = function (e, t, a, i, n) {
    if (
      !(
        this &&
        this.screen &&
        this.screen.objects[e] &&
        this.screen.objects[e].create.data
      )
    )
      return void bx.Trace.log(
        "APX",
        "warning",
        "Non-exist widget id=" + e,
        "wgtSetProperty"
      );
    var r = this.screen.objects[e].create.data,
      o = apn.Project.getWidgetModule(r);
    if (o && o.exePropSet && o.exePropSet(this, e, t, a, !0))
      o.exePropSet(this, e, t, a);
    else if (apx.wgt.$O4y[t]) {
      if (((r.styles = r.styles || {}), (r.styles[apx.wgt.$O4y[t]] = a), !i)) {
        var s = this.wgtTag(e);
        if ("apxText" == t) apn.IWidget.exeSetText(s, a);
        else if ("apxTextForced" == t)
          (s.apnCur.forced = !0), apn.IWidget.exeSetText(s, a);
        else if ("apxStrokeStyle" == t || "apxLineWeight" == t)
          apn.IWidget.exeSetLine(
            s,
            apn.Project.resolveStyle(
              this.project,
              "lineWidth",
              r.styles.lineWidth
            ),
            apn.Project.resolveStyle(
              this.project,
              "strokeStyle",
              r.styles.strokeStyle
            ),
            1 / this.getZoomX(),
            this
          ),
            apn.IWidget.exeSetLineDash(
              s,
              apn.Project.resolveStyle(
                this.project,
                "lineDash",
                r.styles.lineDash
              ),
              this
            );
        else if ("apxFillStyle" == t)
          apn.IWidget.exeSetFillStyle(
            s,
            apn.Project.resolveStyle(
              this.project,
              "fillStyle",
              r.styles.fillStyle
            ),
            this
          );
        else if ("apxLineDash" == t)
          apn.IWidget.exeSetLineDash(
            s,
            apn.Project.resolveStyle(
              this.project,
              "lineDash",
              r.styles.lineDash
            ),
            this
          );
        else if ("apxCursor" == t) apn.IWidget.exeSetCursor(s, a);
        else if ("apxTextAlign" == t) {
          var p = this.wgtGetProperty(e, "apxText") || "";
          (s.apnCur.forced = !0),
            apn.IWidget.exeSetText(
              s,
              p,
              void 0,
              a,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              parseInt(a) * (1 / this.getZoomY())
            );
        } else if ("apxTextVAlign" == t) {
          var p = this.wgtGetProperty(e, "apxText") || "";
          (s.apnCur.forced = !0),
            apn.IWidget.exeSetText(
              s,
              p,
              a,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              parseInt(a) * (1 / this.getZoomY())
            );
        } else if ("apxFontSize" == t) {
          apn.IWidget.$Obv(
            s,
            apn.Project.resolveStyle(
              this.project,
              "fontSize",
              r.styles.fontSize
            ),
            1 / this.getZoomY()
          );
          var p = this.wgtGetProperty(e, "apxText") || "";
          (s.apnCur.forced = !0),
            apn.IWidget.exeSetText(
              s,
              p,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              parseInt(a) * (1 / this.getZoomY())
            );
        } else if ("apxFont" == t) {
          var l;
          if (
            (this.viewer._loadedFontList &&
            this.viewer._loadedFontList[r.styles.font]
              ? (l = !1)
              : (this.viewer.$O4Z(), (l = !0)),
            (s.style.fontFamily = apn.Project.resolveStyle(
              this.project,
              "font",
              r.styles.font
            )),
            !l)
          ) {
            var o = apn.Project.getWidgetModule(r);
            o &&
              o.exeOnScreenRefresh &&
              o.exeOnScreenRefresh(this, e, { font: r.styles.font });
          }
        } else if (
          "apxTextItalic" == t ||
          "apxTextBold" == t ||
          "apxTextUnderline" == t
        ) {
          "apxTextItalic" == t
            ? apn.IWidget.$Obx(
                s,
                apn.Project.resolveStyle(
                  this.project,
                  "fontItalic",
                  r.styles.fontItalic
                )
              )
            : "apxTextBold" == t
            ? apn.IWidget.$Obw(
                s,
                apn.Project.resolveStyle(
                  this.project,
                  "fontBold",
                  r.styles.fontBold
                ),
                apn.Project.resolveStyle(this.project, "font", r.styles.font)
              )
            : "apxTextUnderline" == t &&
              apn.IWidget.$Oby(
                s,
                apn.Project.resolveStyle(
                  this.project,
                  "fontUnderlined",
                  r.styles.fontUnderlined
                )
              );
          var p = this.wgtGetProperty(e, "apxText") || "";
          (s.apnCur.forced = !0), apn.IWidget.exeSetText(s, p);
        } else if ("apxMediaID" == t) {
          var o = apn.Project.getWidgetModule(r);
          o && o.exeAssetLoad && o.exeAssetLoad(this, s, a);
        } else if ("sptMediaID" == t) {
          var o = apn.Project.getWidgetModule(r);
          o && o.exeAssetLoad && o.exeAssetLoad(this, s, a, !a && 0 !== a);
        }
      }
    } else if (apx.wgt.$O4z[t]) {
      r.properties = r.properties || {};
      var d = r.properties[apx.wgt.$O4z[t]];
      if (((r.properties[apx.wgt.$O4z[t]] = a), !i && "apxState" == t)) {
        var o = apn.Project.getWidgetModule(r);
        if (
          o &&
          (o.exeFireStateEvent &&
            a &&
            a != d &&
            this.fireEvent(
              "stateChange",
              "$APX" + a,
              e,
              void 0,
              void 0,
              void 0,
              !(!n || !n.stateInitialize)
            ),
          o.exeSetState)
        )
          return o.exeSetState(this, this.$O3d[e], a, d);
      }
    } else
      apx.wgt._sysPseudoProp[t]
        ? "apxLayer" == t &&
          2 ==
            apn.Project.checkStateTypeByObjectID(
              this.project,
              this.getPageID(),
              e
            ) &&
          (this.$O3m(e, a), this.$O4f(e, a))
        : ((r.properties = r.properties || {}),
          (r.properties.attrs = r.properties.attrs || {}),
          (r.properties.attrs[t] = a));
    i || this._dispatchProp(t, e, a);
  }),
  (apn.CES.prototype._dispatchProp = function (e, t, a) {
    if (this.$O4m && this.$O4m.length)
      for (var i, n = 0; n < this.$O4m.length; n++)
        (i = !1),
          this.viewer.isCurrentPage(this.$O4m[n].pId) && (i = !0),
          this._inPagePauseEvent && (i = !0),
          (i || this.$O4m[n].always) &&
            this.$O4m[n].key == e &&
            this.$O4m[n].handler(t, a);
  }),
  (apn.CES.prototype.wgtAcceptDrop = function (e, t) {
    this.$O3t(e, "acceptDrop", t);
  }),
  (apn.CES.prototype.wgtAcceptPointerOver = function (e, t) {
    this.$O3t(e, "acceptMouseOver", t);
  }),
  (apn.CES.prototype.wgtAcceptCollision = function (e, t) {
    for (var a = this.wgtGetParent(e), i = !1; a; ) {
      if (
        this.sptWgtGetProp(a, "dragX", !0, !0) ||
        this.sptWgtGetProp(a, "dragY", !0, !0)
      ) {
        i = !0;
        break;
      }
      a = this.wgtGetParent(a);
    }
    if (
      ((this.wgtTag(e).apnCur.apxColDectectNoOpti = i),
      (this._apxColDectect = this._apxColDectect || []),
      t)
    ) {
      for (var n = 0; n < this._apxColDectect.length; n++)
        if (this._apxColDectect[n].oId == e)
          return void (
            this._apxColDectect[n].disabled &&
            delete this._apxColDectect[n].disabled
          );
      this._apxColDectect.push({ oId: e });
    } else
      for (var n = 0; n < this._apxColDectect.length; n++)
        this._apxColDectect[n].oId == e &&
          (this._apxColDectect[n].disabled = !0);
  }),
  (apn.CES.prototype.wgtTag = function (e, t) {
    return this.$O3d[e]
      ? this.$O3d[e]
      : void (
          t ||
          bx.Trace.log("APX", "warning", "Non-exist widget id=" + e, "wgtTag")
        );
  }),
  (apn.CES.prototype.wgtId = function (e) {
    return e.apnOID;
  }),
  (apn.CES.prototype.wgtIsVisible = function (e) {
    return !!this.$O3d[e] && bx.DOM.isVisible(this.$O3d[e]);
  }),
  (apn.CES.prototype.wgtControlMedia = function (e, t, a, i) {
    if (!this.$O3d[e])
      return (
        bx.Trace.log(
          "APX",
          "warning",
          "Non-exist widget id=" + e,
          "wgtControlMedia"
        ),
        !1
      );
    var n = apn.Project.getWidgetModule(this.screen.objects[e].create.data);
    switch (t) {
      case "play":
      case "resume":
        if (n && n.exeMediaPlay)
          return n.exeMediaPlay(this.$O3d[e], "resume" != t, a, i), !0;
        break;
      case "pause":
        if (n && n.exeMediaPause) return n.exeMediaPause(this.$O3d[e]), !0;
        break;
      case "stop":
        if (n && n.exeMediaStop) return n.exeMediaStop(this.$O3d[e], this), !0;
        break;
      case "mute":
        if (n && n.exeMediaControl)
          return n.exeMediaControl(this.$O3d[e], "mute", !0), !0;
        break;
      case "muteOff":
        if (n && n.exeMediaControl)
          return n.exeMediaControl(this.$O3d[e], "mute", !1), !0;
        break;
      default:
        bx.Trace.log(
          "APX",
          "warning",
          "Unknown media action=" + t,
          "wgtControlMedia"
        );
    }
    return !1;
  }),
  (apn.CES.prototype._videoReqFullScreen = function (e, t) {
    var a,
      i = this.wgtGetProperty(e, "fs");
    !this.wgtGetMediaInfo(e, "supportFullScreenControl") &&
      i &&
      i.oId &&
      (a = !0);
    var n = this.wgtTag(e).mediaTag;
    return n.msRequestFullscreen
      ? (t || (n.controls || (n.controls = !0), n.msRequestFullscreen()), !0)
      : n.mozRequestFullScreen
      ? (t ||
          (this.viewer.IWidget_onFullScreen(!0),
          n.controls || (n.controls = !0),
          n.mozRequestFullScreen()),
        !0)
      : n.webkitRequestFullscreen
      ? (t ||
          (a && this.wgtTag(i.oId)
            ? n.parentNode.webkitRequestFullscreen()
            : ("edge" != bx.HCL.DV.getBrowserType() ||
                n.controls ||
                (n.controls = !0),
              n.webkitRequestFullscreen())),
        !0)
      : n.requestFullscreen
      ? (t || n.requestFullscreen(), !0)
      : !!n.webkitEnterFullscreen && (t || n.webkitEnterFullscreen(), !0);
  }),
  (apn.CES.prototype._videoEndFullScreen = function (e) {
    return document.msExitFullscreen
      ? (document.msExitFullscreen(), !0)
      : document.mozCancelFullScreen
      ? (document.mozCancelFullScreen(), !0)
      : document.exitFullscreen
      ? (document.exitFullscreen(), !0)
      : document.webkitCancelFullScreen
      ? (document.webkitCancelFullScreen(), !0)
      : !(
          !document.webkitSupportsFullscreen || !document.webkitExitFullscreen
        ) && (document.webkitExitFullscreen(), !0);
  }),
  (apn.CES.prototype.wgtSetMediaInfo = function (e, t, a) {
    if (!this.$O3d[e])
      return (
        bx.Trace.log(
          "APX",
          "warning",
          "Non-exist widget id=" + e,
          "wgtSetMediaInfo"
        ),
        !1
      );
    if ("fullScreen" == t)
      return a ? this._videoReqFullScreen(e) : this._videoEndFullScreen(e);
    var i = apn.Project.getWidgetModule(this.screen.objects[e].create.data);
    return (
      !(!i || !i.exeMediaControl) && (i.exeMediaControl(this.$O3d[e], t, a), !0)
    );
  }),
  (apn.CES.prototype.wgtGetMediaInfo = function (e, t) {
    if ("supportFullScreenControl" == t)
      return "edge" != bx.HCL.DV.getBrowserType();
    if (!this.$O3d[e])
      return void bx.Trace.log(
        "APX",
        "warning",
        "Non-exist widget id=" + e,
        "wgtGetMediaInfo"
      );
    if ("supportFullScreen" == t) return this._videoReqFullScreen(e, !0);
    var a = apn.Project.getWidgetModule(this.screen.objects[e].create.data);
    return a && a.exeMediaInfo ? a.exeMediaInfo(this.$O3d[e], t) : void 0;
  }),
  (apn.CES.prototype.wgtListenMedia = function (e, t, a, i) {
    if (((this.$O4j = this.$O4j || []), i))
      for (var n = 0; n < this.$O4j.length; n++)
        this.$O4j[n].oId == e &&
          this.$O4j[n].mediaWidgetId == t &&
          this.$O4j[n].handler == a &&
          (this.$O4j.splice(n, 1), n--);
    else this.$O4j.push({ oId: e, mediaWidgetId: t, handler: a });
  }),
  (apn.CES.prototype.wgtListenMediaCancel = function (e, t) {
    this.$O4j = this.$O4j || [];
    for (var a = 0; a < this.$O4j.length; a++)
      this.$O4j[a].oId == e &&
        this.$O4j[a].mediaWidgetId == t &&
        (this.$O4j.splice(a, 1), a--);
  }),
  (apn.CES.prototype.wgtListenContext = function (e, t, a, i, n) {
    if (
      ((this.viewer.$O3V = this.viewer.$O3V || []),
      "apn.COverlayPage" == this.screen.module && (i = !0),
      n)
    )
      for (var r = 0; r < this.viewer.$O3V.length; r++)
        this.viewer.$O3V[r].oId == e &&
          this.viewer.$O3V[r].key == t &&
          this.viewer.$O3V[r].handler == a &&
          (this.viewer.$O3V.splice(r, 1), r--);
    else
      this.viewer.$O3V.push({
        oId: e,
        pId: this.wgtTag(e).apnPID,
        key: t,
        handler: a,
        always: i,
      });
  }),
  (apn.CES.prototype.wgtListenProperty = function (e, t, a, i, n) {
    if (
      ((this.$O4m = this.$O4m || []),
      "apn.COverlayPage" == this.screen.module && (i = !0),
      n)
    )
      for (var r = 0; r < this.$O4m.length; r++)
        this.$O4m[r].oId == e &&
          this.$O4m[r].key == t &&
          this.$O4m[r].handler == a &&
          (this.$O4m.splice(r, 1), r--);
    else
      this.$O4m.push({
        oId: e,
        pId: this.wgtTag(e).apnPID,
        key: t,
        handler: a,
        always: i,
      });
  }),
  (apn.CES.prototype.wgtListenPageEvent = function (e, t, a, i, n) {
    if (
      ((this.$O4n = this.$O4n || []),
      "apn.COverlayPage" == this.screen.module && (i = !0),
      n)
    )
      for (var r = 0; r < this.$O4n.length; r++)
        this.$O4n[r].oId == e &&
          this.$O4n[r].event == t &&
          this.$O4n[r].handler == a &&
          (this.$O4n.splice(r, 1), r--);
    else
      this.$O4n.push({
        oId: e,
        pId: this.wgtTag(e).apnPID,
        event: t,
        handler: a,
        always: i,
      });
  }),
  (apn.CES.prototype.wgtListenBubbleEvent = function (e, t, a, i) {
    if (((this._apxEventListenBubble = this._apxEventListenBubble || []), i))
      for (var n = 0; n < this._apxEventListenBubble.length; n++)
        this._apxEventListenBubble[n].oId == e &&
          this._apxEventListenBubble[n].event == t &&
          this._apxEventListenBubble[n].handler == a &&
          (this._apxEventListenBubble.splice(n, 1), n--);
    else
      this._apxEventListenBubble.push({
        oId: e,
        pId: this.wgtTag(e).apnPID,
        event: t,
        handler: a,
      });
  }),
  (apn.CES.prototype.toCanvasX = function (e) {
    return e * this.getZoomX();
  }),
  (apn.CES.prototype.toCanvasY = function (e) {
    return e * this.getZoomY();
  }),
  (apn.CES.prototype.tagX = function (e, t) {
    return (
      void 0 === t && (t = e.style.left),
      parseFloat(t) +
        (bx.HCL.getElementX2(e.parentNode) - bx.HCL.getElementX2(this.tag))
    );
  }),
  (apn.CES.prototype.tagY = function (e, t) {
    return (
      void 0 === t && (t = e.style.top),
      parseFloat(t) +
        (bx.HCL.getElementY2(e.parentNode) - bx.HCL.getElementY2(this.tag))
    );
  }),
  (apn.CES.prototype.wgtX = function (e) {
    return this.screen.objects[e].init.position.x;
  }),
  (apn.CES.prototype.wgtY = function (e) {
    return this.screen.objects[e].init.position.y;
  }),
  (apn.CES.prototype.wgtW = function (e) {
    var t = this.screen.objects[e].init.shape;
    return t.type == bx.CCanvasWnd.SHAPE_LINE
      ? Math.abs(t.x[1] - t.x[0]) + 1
      : t.w;
  }),
  (apn.CES.prototype.wgtH = function (e) {
    var t = this.screen.objects[e].init.shape;
    return t.type == bx.CCanvasWnd.SHAPE_LINE
      ? Math.abs(t.y[1] - t.y[0]) + 1
      : t.h;
  }),
  (apn.CES.prototype.wgtMoveTo = function (e, t, a) {
    var i, n;
    void 0 !== t && (i = t - this.screen.objects[e].init.position.x),
      void 0 !== a && (n = a - this.screen.objects[e].init.position.y),
      (i || n) &&
        (this.$O5D(this.screen.objects[e], i, n),
        void 0 !== t && (this.screen.objects[e].init.position.x = t),
        void 0 !== a && (this.screen.objects[e].init.position.y = a),
        apn.IWidget.exeRenderPosition(
          this,
          this.wgtTag(e),
          this.screen.objects[e],
          this.project,
          1 / this.$O2O,
          1 / this.$O2P
        ));
  }),
  (apn.CES.prototype.wgtSizeTo = function (e, t, a) {
    (void 0 === t && void 0 === a) ||
      (void 0 !== t && (this.screen.objects[e].init.shape.w = t),
      void 0 !== a && (this.screen.objects[e].init.shape.h = a),
      apn.IWidget.exeRenderSize(
        this.viewer,
        this,
        this.wgtTag(e),
        this.screen.objects[e],
        this.project,
        1 / this.$O2O,
        1 / this.$O2P
      ));
  }),
  (apn.CES.prototype.wgtHide = function (e) {
    this.$O3t(e, "visibility", !1);
  }),
  (apn.CES.prototype.wgtSizeByContent = function (e, t, a) {
    var i = apn.Project.getWidgetModule(this.screen.objects[e].create.data);
    if (i && i.exeGetSizeByContent) {
      var n = i.exeGetSizeByContent(this, e, t, a);
      if (n.w || n.h)
        return (
          n.w && (this.screen.objects[e].init.shape.w += n.w),
          n.h && (this.screen.objects[e].init.shape.h += n.h),
          apn.IWidget.exeRenderSize(
            this.viewer,
            this,
            this.$O3d[e],
            this.screen.objects[e],
            this.project,
            1 / this.$O2O,
            1 / this.$O2P
          ),
          !0
        );
    }
    return !1;
  }),
  (apn.CES.prototype.wgtAniRun = function (e, t) {
    function a(e, t) {
      return void 0 === e.order && void 0 === t.order
        ? 0
        : void 0 === e.order
        ? 1
        : void 0 === t.order
        ? -1
        : e.order - t.order;
    }
    function i(t, i, n, o) {
      o >= r.$O3d[e].apxSpriteCtxt.length &&
        r.$O3d[e].apxSpriteCtxt.push({
          frames: [],
          states: [],
          durations: [],
          lastTime: 0,
          frame: 0,
        });
      var s = r.screen.objects[i].layout,
        p = r.$O3d[e].apxSpriteCtxt[o];
      if (1 == apn.Project.checkStateType(s)) {
        var l = [];
        for (var d in s.states) l.push({ order: s.states[d].order, id: d });
        for (l.sort(a), d = 0; d < l.length; d++)
          p.frames.push(
            apn.Project.getStateTitleByObjectID(r.project, r.$O1m, i, l[d].id)
          ),
            p.states.push(t),
            p.durations.push(
              void 0 === s.states[l[d].id].duration
                ? apx.wgt.spriteDefaultFrameDuration
                : bx.$checkNaN(parseInt(s.states[l[d].id].duration))
            ),
            (p.loop = n),
            (p.type = 1);
      } else if (2 == apn.Project.checkStateType(s)) {
        var l = [];
        for (var d in s.layers) l.push({ order: s.layers[d].order, id: d });
        for (l.sort(a), d = 0; d < l.length; d++)
          p.frames.push(s.layers[l[d].id].title),
            p.states.push(t),
            p.durations.push(
              bx.$checkNaN(parseInt(s.layers[l[d].id].duration)) ||
                apx.wgt.spriteDefaultFrameDuration
            ),
            (p.loop = n),
            (p.type = 2);
      }
    }
    if (!(this && this.screen && this.screen.objects[e] && this.$O3d[e]))
      return void bx.Trace.log(
        "APX",
        "warning",
        "Invalid widget id=" + e,
        "wgtAniRun"
      );
    var n;
    if ((n = apn.Project.checkStateType(this.screen.objects[e].layout))) {
      (this.$O3d[e].apxSpriteCtxt = []),
        (this.$O3d[e].apxSpriteCtxt.apxLoop = 2 == t),
        (this.__spriteLoop = this.__spriteLoop || {}),
        (this.__spriteLoop[e] = this.$O3d[e].apxSpriteCtxt);
      var r = this;
      if (void 0 === arguments[2]) return i(void 0, e, 1 != t, 0), !0;
      if (arguments.length > 2) {
        for (var o, s, p, l = 2; l < arguments.length; l++) {
          s = null;
          for (o in this.screen.objects[e].layout.layers)
            if (this.screen.objects[e].layout.layers[o].title == arguments[l]) {
              s = this.screen.objects[e].layout.layers[o].id;
              break;
            }
          (p = !1),
            3 == t && l == arguments.length - 1 && (p = !0),
            s &&
              ((s = this.$O4A(s)),
              s ||
                this.log(
                  e,
                  '"' +
                    arguments[l] +
                    '" state does not include any animation widget. Animation request will be ignored.'
                )),
            s && i(arguments[l], s, p, l - 2, t);
        }
        return !0;
      }
    }
  }),
  (apn.CES.prototype.wgtAniCheck = function (e, t, a, i) {
    if (!this.screen.objects[e] || !this.$O3d[e])
      return (
        bx.Trace.log("APX", "warning", "Invalid widget id=" + e, "wgtAniCheck"),
        0
      );
    if (!apn.Project.checkStateType(this.screen.objects[e].layout)) return 0;
    i &&
      (i.stateID && delete i.stateID,
      i.stateCntrID && delete i.stateCntrID,
      i.frameID && delete i.frameID);
    var n,
      r,
      o = !1;
    if (
      void 0 !== t &&
      2 == apn.Project.checkStateType(this.screen.objects[e].layout)
    )
      for (n in this.screen.objects[e].layout.layers)
        this.screen.objects[e].layout.layers[n].title == t &&
          ((o = !0),
          (r = this.screen.objects[e].layout.layers[n].id),
          i && (i.stateID = n));
    if (o) {
      var s,
        p = this.screen.objects[r].layout;
      for (n = 0; n < p.children.length; n++)
        if (
          apn.Project.checkStateType(this.screen.objects[p.children[n]].layout)
        ) {
          s = p.children[n];
          break;
        }
      if (!s) return 1;
      (e = s), i && (i.stateCntrID = s);
    }
    var l,
      d = this.screen.objects[e].layout,
      c = 0;
    if (1 == apn.Project.checkStateType(d))
      for (n in d.states)
        (apn.Project.getStateTitleByObjectID(this.project, this.$O1m, e, n) !=
          a &&
          void 0 !== a) ||
          (void 0 === l && (l = n)),
          c++;
    else if (2 == apn.Project.checkStateType(d)) {
      void 0 === a && (l = this.screen.objects[e].create.data.styles.state);
      for (n in d.layers)
        d.layers[n].title == a && void 0 === l && (l = n), c++;
    }
    return l ? (i && (i.frameID = l), c) : 0;
  }),
  (apn.CES.prototype.wgtAniGetState = function (e) {
    var t;
    return void 0 !== (t = this.$O3l(e, !0))
      ? this.screen.objects[e].layout.layers[t].title
      : null;
  }),
  (apn.CES.prototype.$OcG = function (e) {
    return !(!this.$O3d[e] || !this.$O3d[e].$O7R);
  }),
  (apn.CES.prototype.wgtAniSet = function (e, t, a, i, n) {
    var r = this.wgtTag(e).apnCur;
    r._apxAniSetCtxt || (r._apxAniSetCtxt = {});
    var o = r._apxAniSetCtxt;
    if (this.wgtAniCheck(e, t, a, o)) {
      if (
        (n ||
          (this.$O3d[e].apxSpriteCtxt &&
            ((this.$O3d[e].apxSpriteCtxt.apxCur != -1 ||
              this.$O3d[e].apxSpriteCtxt.apxEndTime) &&
              this.fireEvent("animation", "End", e),
            delete this.$O3d[e].apxSpriteCtxt,
            this.__spriteLoop &&
              this.__spriteLoop[e] &&
              delete this.__spriteLoop[e])),
        o.stateID && (this.$O3m(e, o.stateID), this.$O4f(e, o.stateID)),
        o.stateCntrID && (e = o.stateCntrID),
        o.frameID)
      ) {
        if (this.$O3l(e) == o.frameID && !this.$OcG(e)) return !1;
        if (1 == apn.Project.checkStateType(this.screen.objects[e].layout)) {
          var s = {
            action: "CWS",
            target: { pageID: this.$O1m, objectID: e, stateID: o.frameID },
          };
          (s.timing = { timing: "linear", duration: i || 0 }), this.$O35(s);
        } else this.$O3m(e, o.frameID), this.$O4f(e, o.frameID);
      }
      return !0;
    }
  }),
  (apn.CES.prototype.$O4A = function (e) {
    for (
      var t = this.screen.objects[e].layout, a = 0;
      a < t.children.length;
      a++
    )
      if (apn.Project.checkStateType(this.screen.objects[t.children[a]].layout))
        return t.children[a];
  }),
  (apn.CES.prototype.wgtIntersectWith = function (e, t, a, i, n) {
    if (
      ((this.wgtIntersectWith.$O4C = this.wgtIntersectWith.$O4C || []),
      (this.wgtIntersectWith.$O4C.length = 0),
      2 != a && 3 != a)
    )
      return apx.wgt.$O4u(this, this.wgtTag(t), this.wgtTag(i), n) ? [i] : null;
    if (
      (2 == a
        ? this.getWidgetsByType(i, e, void 0, this.wgtIntersectWith.$O4C)
        : this.getWidgetsByClass(i, e, void 0, this.wgtIntersectWith.$O4C),
      this.wgtIntersectWith.$O4C.length)
    ) {
      for (var r = 0; r < this.wgtIntersectWith.$O4C.length; r++)
        apx.wgt.$O4u(
          this,
          this.wgtTag(t),
          this.wgtTag(this.wgtIntersectWith.$O4C[r]),
          n
        ) || (this.wgtIntersectWith.$O4C.splice(r, 1), r--);
      return this.wgtIntersectWith.$O4C.length
        ? this.wgtIntersectWith.$O4C.concat()
        : null;
    }
  }),
  (apn.CES.prototype.wgtGetParent = function (e) {
    if (this.screen)
      return apn.Project.findParentOf(this.screen, e, void 0, !0);
  }),
  (apn.CES.prototype.wgtHasState = function (e, t) {
    var a = apn.Project.getExeStateByObjectID(
      this.project,
      this.getPageID(),
      e
    );
    if (null === a) return !1;
    for (var i = 0; i < a.length; i++) if (a[i].title == t) return !0;
    return !1;
  }),
  (apn.CES.prototype.srcCloneWidget = function (e) {
    return this.screen && this.screen.objects[e]
      ? apx.srcCloneWidget(this.screen, e)
      : void bx.Trace.log(
          "APX",
          "warning",
          "Non-exist widget id=" + e,
          "srcCloneWidget"
        );
  }),
  (apn.CES.prototype.srcAddWidget = function (e, t, a) {
    if (!this.screen || !this.screen.objects[e])
      return void bx.Trace.log(
        "APX",
        "warning",
        "Non-exist widget id=" + e,
        "srcAddWidget"
      );
    (this.screen.$O4x = this.screen.$O4x || 0), this.screen.$O4x++;
    var i = {
      create: {
        data: {
          properties: {},
          styles: { visibility: !1 },
          wgtID: t,
          wgtTitle: "",
        },
        style: {},
      },
      init: {
        position: {
          x: this.screen.objects[e].init.position.x,
          y: this.screen.objects[e].init.position.y,
        },
        shape: { type: 1, w: 128, h: 32 },
      },
    };
    a && bx.$copyObject(i.create.data.properties, a);
    var n = e + this.screen.$O4x + "_";
    if (
      ((this.screen.objects[n] = i),
      this.screen.objects[e].layout &&
        this.screen.objects[e].layout.children &&
        this.screen.objects[e].layout.children.length)
    ) {
      var r = this.screen.objects[e].layout.children[0];
      (this.screen.objects[r].layout = this.screen.objects[r].layout || {}),
        (this.screen.objects[r].layout.children =
          this.screen.objects[r].layout.children || []),
        this.screen.objects[r].layout.children.push(n);
    }
    return n;
  }),
  (apn.CES.prototype.srcSetWidgetStyle = function (e, t, a) {
    if (!this.screen || !this.screen.objects[e])
      return void bx.Trace.log(
        "APX",
        "warning",
        "Non-exist widget id=" + e,
        "srcSetWidgetStyle"
      );
    var i = this.screen.objects[e].create;
    (i.data = i.data || {}),
      (i.data.styles = i.data.styles || {}),
      (i.data.styles[t] = a);
  }),
  (apn.CES.prototype.srcGetWidgetStyle = function (e, t) {
    return this.screen && this.screen.objects[e]
      ? this.screen.objects[e].create.data &&
        this.screen.objects[e].create.data.styles
        ? apn.Project.resolveStyle(
            this.project,
            t,
            this.screen.objects[e].create.data.styles[t]
          )
        : void 0
      : void bx.Trace.log(
          "APX",
          "warning",
          "Non-exist widget id=" + e,
          "srcGetWidgetStyle"
        );
  }),
  (apn.CES.prototype.srcSetWidgetProperty = function (e, t, a) {
    return this &&
      this.screen &&
      this.screen.objects[e] &&
      this.screen.objects[e].create.data
      ? apx.wgt.$O4y[t]
        ? void this.srcSetWidgetStyle(e, apx.wgt.$O4y[t], a)
        : (apx.wgt.$O4z[t] && (t = apx.wgt.$O4z[t]),
          (this.screen.objects[e].create.data.properties =
            this.screen.objects[e].create.data.properties || {}),
          (this.screen.objects[e].create.data.properties.attrs =
            this.screen.objects[e].create.data.properties.attrs || {}),
          void (this.screen.objects[e].create.data.properties.attrs[t] = a))
      : void bx.Trace.log(
          "APX",
          "warning",
          "Non-exist widget id=" + e,
          "srcSetWidgetProperty"
        );
  }),
  (apn.CES.prototype.srcGetWidgetProperty = apn.CES.prototype.wgtGetProperty),
  (apn.CES.prototype.tagPutOn = function (e, t) {
    (e.style.zIndex = t.style.zIndex), bx.DOM.putAfter(e, t);
  }),
  (apn.CES.prototype.tagPutUnder = function (e, t) {
    (e.style.zIndex = t.style.zIndex), bx.DOM.putBefore(e, t);
  }),
  (apn.CES.prototype.tagBlockPointerEvent = function (e, t) {
    e.apnBlockPointerEvent = t;
  }),
  (apn.CES.prototype.tagPassPointerEvent = function (e, t, a) {
    (e.apnPassPointerEvent = t),
      (e.apnPassPointerEventButHit = a),
      a ||
        (t
          ? (e.style.pointerEvents = "none")
          : (e.style.pointerEvents = "auto")),
      e._apxIE10eventPassProblem &&
        (t
          ? (e.style.backgroundColor = "transparent")
          : (e.style.backgroundColor = "rgba(255,255,255,0)"));
  }),
  (apn.CES.prototype.tagDraggable = function (e, t, a, i) {
    (e.apxDragInfo = e.apxDragInfo || {}),
      (e.apxDragInfo.dragX = t),
      (e.apxDragInfo.dragY = a),
      "inParent" == i
        ? (e.apxDragInfo.dragInParent = !0)
        : "containParent" == i && (e.apxDragInfo.dragContainParent = !0);
  }),
  (apn.CES.prototype.tagTransform = function (e, t, a, i) {
    function n(e, t, a) {
      i(a);
    }
    function r(e) {
      a(e.element);
    }
    if (!e || !t)
      return void bx.Trace.log(
        "APX",
        "warning",
        "Invalid parameter tag=" + e + ", effect=" + t,
        "tagTransform"
      );
    if (
      ((apn.CES.$O5Q = apn.CES.$O5Q || 0),
      apn.CES.$O5Q++,
      (t.id = "APX$" + apn.CES.$O5Q),
      (t.element = e),
      apn.CES.toBxTiming(t.timing, !0) &&
        (t.timing = apn.CES.toBxTiming(t.timing)),
      bx.Easing[t.timing] || (t.timing = "linear"),
      (t.time = t.duration || 0),
      t.style)
    ) {
      t.styles = t.style;
      var o = this;
      t.styles.rotate &&
        (t.styles.rotate.unit = function (e, t, a) {
          apn.CES.transformSet(e, "rotate", a), apn.CES.transformApply(e);
        }),
        t.styles.rotate_ &&
          (t.styles.rotate_.unit = function (e, t, a) {
            apn.CES.transformSet(e, "rotate", a);
          }),
        t.styles.rotateY &&
          (t.styles.rotateY.unit = function (e, t, a) {
            apn.CES.transformSet(e, "rotateY", a), apn.CES.transformApply(e);
          }),
        t.styles.rotateY_ &&
          (t.styles.rotateY_.unit = function (e, t, a) {
            apn.CES.transformSet(e, "rotateY", a);
          }),
        t.styles.resize &&
          (t.styles.resize.unit = function (e, t, a) {
            apn.CES.transformSet(e, "resize", a), apn.CES.transformApply(e);
          }),
        t.styles.resize_ &&
          (t.styles.resize_.unit = function (e, t, a) {
            apn.CES.transformSet(e, "resize", a);
          }),
        t.styles.toX &&
          (t.styles.toX.unit = function (e, t, a) {
            o.tagTransformX(e, a, !0);
          }),
        t.styles.toX_ &&
          (t.styles.toX_.unit = function (e, t, a) {
            o.tagTransformX(e, a);
          }),
        t.styles.toY &&
          (t.styles.toY.unit = function (e, t, a) {
            o.tagTransformY(e, a, !0);
          }),
        t.styles.toY_ &&
          (t.styles.toY_.unit = function (e, t, a) {
            o.tagTransformY(e, a);
          });
    } else i && (t.styles = { ratio: { from: 0, to: 1, unit: n } });
    delete t.duration, delete t.style, a && (t.onEnd = r);
    var s = bx.Transition.add(t);
    return s + ":" + t.id;
  }),
  (apn.CES.prototype.tagTransformX = function (e, t, a) {
    if (
      ((this.$O7Y =
        void 0 === this.$O7Y ? bx.HCL.DV.supportCSS3D() : this.$O7Y),
      e)
    ) {
      if (void 0 === t)
        return this.$O7Y && void 0 !== e.apxTrX
          ? e.apxTrX
          : parseInt(e.style.left);
      this.$O7Y
        ? (apn.CES.transformSet(e, "x", t), a && apn.CES.transformApply(e))
        : (e.style.left = t + "px");
    }
  }),
  (apn.CES.prototype.tagTransformY = function (e, t, a) {
    if (
      ((this.$O7Y =
        void 0 === this.$O7Y ? bx.HCL.DV.supportCSS3D() : this.$O7Y),
      e)
    ) {
      if (void 0 === t)
        return this.$O7Y && void 0 !== e.apxTrY
          ? e.apxTrY
          : parseInt(e.style.top);
      this.$O7Y
        ? (apn.CES.transformSet(e, "y", t), a && apn.CES.transformApply(e))
        : (e.style.top = t + "px");
    }
  }),
  (apn.CES.prototype.tagTransformCancel = function (e, t) {
    if (t) {
      var a = (t + "").split(":");
      2 == a.length && bx.Transition.end(parseInt(a[0]), a[1]);
    }
  }),
  (apn.CES.prototype.utlGetIndexInFlow = function (e, t, a, i) {
    function n(e, t) {
      var a = y.project.pages;
      return void 0 === a[e].UI.order && void 0 === a[t].UI.order
        ? 0
        : void 0 === a[e].UI.order
        ? 1
        : void 0 === a[t].UI.order
        ? -1
        : a[e].UI.order - a[t].UI.order;
    }
    var r,
      o = { count: 0, index: 0, pageIds: [] },
      s = this.wgtTag(e),
      p = this.screen.objects;
    if (!p[e].create.data)
      return (
        bx.Trace.log(
          "APX",
          "warning",
          "Invalid widget id=" + e + " to check Flow Index",
          "utlGetIndexInFlow"
        ),
        o
      );
    r = p[e].create.data.wgtID;
    var l, d, c;
    if (
      !a &&
      s.parentNode &&
      s.parentNode.parentNode &&
      this.wgtId(s.parentNode.parentNode)
    ) {
      var g = this.wgtId(s.parentNode.parentNode);
      if (2 == apn.Project.checkStateType(p[g].layout)) {
        var u,
          h = this.wgtId(s.parentNode),
          x = [];
        for (d in p[g].layout.layers)
          x.push({
            id: d,
            objectID: p[g].layout.layers[d].id,
            order: p[g].layout.layers[d].order,
          });
        for (apn.UTIL.sort(x, "order", 1, !0), l = 0; l < x.length; l++)
          if (x[l].objectID == h) (o.index = o.count), o.count++;
          else if (
            p[x[l].objectID].layout &&
            (u = p[x[l].objectID].layout.children)
          )
            for (d = 0; d < u.length; d++)
              if (
                ((c = p[u[d]].create.data),
                c &&
                  c.wgtID == r &&
                  (!t ||
                    (c.properties &&
                      c.properties.attrs &&
                      c.properties.attrs[t.key] == t.value)))
              ) {
                o.count++;
                break;
              }
        return o;
      }
    }
    var f,
      y = this;
    if (i) var v = apn.Project.getPages(this.project);
    else {
      if (!this.viewer.IStub_getScreenList) return o;
      var v = this.viewer.IStub_getScreenList();
      v.sort(n);
    }
    for (l = 0; l < v.length; l++) {
      f = !1;
      for (d in this.project.pages[v[l]].objects)
        (c = this.project.pages[v[l]].objects[d].create.data),
          c &&
            c.wgtID == r &&
            (!t ||
              (c.properties &&
                c.properties.attrs &&
                c.properties.attrs[t.key] == t.value)) &&
            (f = !0);
      f &&
        (v[l] == s.apnPID && (o.index = o.count),
        o.count++,
        o.pageIds.push(v[l]));
    }
    return o;
  }),
  (apn.CES.prototype.utlRunInteractionOf = function (e, t) {
    return this.$O3d[e]
      ? void this.eventExe(t, e)
      : void bx.Trace.log(
          "APX",
          "warning",
          "Invalid widget id=" + e,
          "utlRunInteractionOf"
        );
  }),
  (apn.CES.prototype.netBroadcast = function (e, t) {
    if (this.viewer.remoteBroadcast) {
      var a = { type: e, data: t };
      return this.viewer.remoteBroadcast(JSON.stringify(a));
    }
    return !1;
  }),
  (apn.CES.prototype.netToServer = function (e, t) {
    if (this.viewer.remoteSendToServer) {
      var a = { type: e, data: t };
      return this.viewer.remoteSendToServer(JSON.stringify(a));
    }
    return !1;
  }),
  (apn.CES.prototype.netCmdRunPage = function (e, t) {
    var a = { from: "T", to: this.viewer.project.property.id + "::APX::" + e };
    return (
      t && t.transit && (a.transit = transit),
      t && t.refresh && (a.refresh = t.refresh),
      this.viewer.remoteOnLTP && this.viewer.remoteOnLTP(e),
      this.netBroadcast("APX_LTP", a)
    );
  }),
  (apn.CES.prototype.netListen = function (e, t, a) {
    var i;
    return (i = this.$O3d[e])
      ? void (t
          ? ((i.apxOnNetEvent = t), (i.apxNetEventAlways = a))
          : (delete i.apxOnNetEvent, delete i.apxNetEventAlways))
      : (bx.Trace.log("APX", "warning", "Invalid widget id=" + e, "netListen"),
        0);
  }),
  (apn.CES.prototype.netId = function () {
    return this.viewer.remoteGetClientProfile
      ? this.viewer.remoteGetClientProfile()
      : null;
  }),
  (apn.CES.prototype.netClientList = function () {
    return this.viewer.remoteGetLoginClientList() || [];
  }),
  (apx.cloneContainerWidget = function (e) {
    var t = apn.inheritWidget(e || apx.wgtLayer);
    return (
      apn.dbUI &&
        apn.dbUI.apx &&
        apn.dbUI.apx.wgtEditorStyle &&
        (t.editor = bx.$copyObject({}, apn.dbUI.apx.wgtEditorStyle)),
      (e || apx.wgtLayer).apxUI &&
        (t.apxUI = bx.$cloneObject([], (e || apx.wgtLayer).apxUI)),
      t
    );
  }),
  (apx.cloneBasicWidget = function () {
    var e = apx.cloneContainerWidget(apn.widgets["apn.wgt.rect"]);
    return (
      (e.styleMap = {
        title: !0,
        visibility: !0,
        strokeStyle: !0,
        lineWidth: !0,
        lineDash: !0,
        fillStyle: !0,
        alpha: !0,
        angle: !0,
        dragX: !0,
        dragY: !0,
        dragInParent: !0,
        dragContainParent: !0,
      }),
      (e.editor = e.editor || {}),
      delete e.exeOnScreenRefresh,
      delete e.onEdit,
      delete e.exeSetText,
      e
    );
  }),
  (apx.wgtLayer = { BLACKBOX_MODEL: !0 }),
  (apx.wgtLayer.styleMap = {
    title: !0,
    visibility: !0,
    alpha: !0,
    state: !0,
  }),
  (apx.wgtLayer.properties = {}),
  (apx.wgtLayer.canvasObjectModule = "apn.CLayerContainer"),
  (apx.wgtLayer.exeCreateTag =
    apn.widgets["apn.wgt.layerContainer"].exeCreateTag),
  (apx.wgtLayer.exeRenderTag =
    apn.widgets["apn.wgt.layerContainer"].exeRenderTag),
  (apx.wgtLayer.createAsCanvasObject = function (e, t, a, i, n) {
    return apn.IWidget.createCanvasObject(
      e,
      this,
      this.canvasObjectModule || "apn.CLayerContainer",
      bx.CCanvasWnd.SHAPE_RECT,
      t,
      a,
      i,
      n
    );
  }),
  (apx.wgtLayer.onEdit = function (e, t) {
    var a = { editLockRemove: !0, editLockResize: !0, editLockMove: !0 },
      i = apn.Project.getWidgetModule(e.getObjectByID(t).data);
    if (i && i.apxUI) {
      for (var n, r = {}, o = 0; o < i.apxUI.length; o++)
        if (
          i.apxUI[o] &&
          (i.apxUI[o].apxWidget && (r[i.apxUI[o].apxWidget] = !0),
          i.apxUI[o].wgtClass && i.apxUI[o].wgtClass.length)
        )
          for (n = 0; n < i.apxUI[o].wgtClass.length; n++)
            r[i.apxUI[o].wgtClass[n]] = !0;
      var s = [];
      for (n in r) s.push(n);
      s.length && (a.wgtsFocus = s);
    }
    apn.widgets.utils.editWidget(e.getObjectByID(t), e, 2, !1, a);
  }),
  (apn.CExe.prototype.apxRunCmd = function (e, t) {
    if ("APX_LTP" == e && t && t.to) {
      if (this.isRunning()) {
        var a = !1,
          i = t.to.split("::APX::"),
          n = i[1].replace(/^\s+|\s+$/g, "");
        for (var r in this.project.pages)
          if (
            "apn.CFlowPage" == this.project.pages[r].module &&
            this.project.pages[r].UI &&
            this.project.pages[r].UI.title &&
            this.project.pages[r].UI.title.replace(/^\s+|\s+$/g, "") == n
          ) {
            if (this.isCurrentPage(r) && !t.refresh)
              this.$O2J.get(r).canvas.fireEvent("apxPageRerun");
            else {
              var o = {
                action: "LTP",
                to: { pageID: r },
                transit: t.transit || { effect: "none" },
              };
              t.refresh && (o.to.reset = !0), this.run(o);
            }
            a = !0;
            break;
          }
        a ||
          (this.$O3T &&
            this.$O3T.error(
              '<span style="color:#ffffff">[Network]</span> Unknown page(' +
                t.to +
                ") was requested to run. This request will be ignored."
            ));
      }
      return !0;
    }
    return !1;
  }),
  (apn.CExe.prototype.apxDispatchMessage = function (e, t) {
    function a(a) {
      if (a.canvas) {
        var n = !1;
        i.isCurrentPage(a.id) && (n = !0),
          a.canvas._inPagePauseEvent && (n = !0);
        for (var r in a.canvas.$O3d)
          a.canvas.$O3d[r].apxOnNetEvent &&
            (a.canvas.$O3d[r].apxNetEventAlways || n) &&
            a.canvas.$O3d[r].apxOnNetEvent(e, t);
      }
    }
    if (this.isRunning()) {
      var i = this;
      this.$O2J.iteratePage(a);
    }
  }),
  (apn.CES.prototype.wgtPageId = function (e) {
    return this.$O3d[e]
      ? this.$O3d[e].apnPID
      : void bx.Trace.log(
          "APX",
          "warning",
          "Non-exist widget id=" + e,
          "wgtPageId"
        );
  }),
  (apn.CES.prototype.wgtPageTitle = function (e) {
    return this.$O3d[e] && this.$O3d[e].apnPID
      ? this.project.pages[this.$O3d[e].apnPID].UI.title
      : void bx.Trace.log(
          "APX",
          "warning",
          "Non-exist widget id=" + e,
          "wgtPageTitle"
        );
  }),
  (apn.CES.prototype.wgtDelayLinkToPage = function (e, t) {
    return this.$O3d[e]
      ? void (this.$O5e = t)
      : void bx.Trace.log(
          "APX",
          "warning",
          "Non-exist widget id=" + e,
          "wgtDelayPageLink"
        );
  }),
  (apn.CES.prototype.utlFindClosest = function () {
    function e(e, t, a) {
      var i = Math.abs(
          parseInt(a.style.left) + 0.5 * parseInt(a.style.width) - e
        ),
        n = Math.abs(
          parseInt(a.style.top) + 0.5 * parseInt(a.style.height) - t
        );
      return Math.sqrt(i * i + n * n);
    }
    var t, a, i;
    if (2 == arguments.length)
      (t =
        parseInt(this.wgtTag(arguments[0]).style.left) +
        0.5 * parseInt(this.wgtTag(arguments[0]).style.width)),
        (a =
          parseInt(this.wgtTag(arguments[0]).style.top) +
          0.5 * parseInt(this.wgtTag(arguments[0]).style.height)),
        (i = arguments[1]);
    else {
      if (3 != arguments.length) return null;
      (t = arguments[0]), (a = arguments[1]), (i = arguments[2]);
    }
    if (!i || !i.length) return null;
    for (var n, r, o = 0; o < i.length; o++) {
      var s = e(t, a, this.wgtTag(i[o]));
      (void 0 === r || r > s) && ((n = i[o]), (r = s));
    }
    return n;
  }),
  (apn.CES.prototype.utlGetPageWith = function (e) {
    function t(e, t) {
      return void 0 === s.project.pages[e].UI.order &&
        void 0 === s.project.pages[t].UI.order
        ? 0
        : void 0 === s.project.pages[e].UI.order
        ? 1
        : void 0 === s.project.pages[t].UI.order
        ? -1
        : s.project.pages[e].UI.order - s.project.pages[t].UI.order;
    }
    if (arguments.length < 1) return [];
    var a,
      i,
      n,
      r = {};
    for (a = 0; a < arguments.length; a++) r[arguments[a]] = !0;
    var o = [],
      s = this,
      p = this.viewer.$O6t();
    for (p.sort(t), a = 0; a < p.length; a++) {
      n = !0;
      for (i in r) r[i] = !1;
      for (i in this.project.pages[p[a]].objects)
        this.project.pages[p[a]].objects[i].create.data &&
          this.project.pages[p[a]].objects[i].create.data.wgtID &&
          void 0 !== r[this.project.pages[p[a]].objects[i].create.data.wgtID] &&
          (r[this.project.pages[p[a]].objects[i].create.data.wgtID] = !0);
      for (i in r)
        if (!r[i]) {
          n = !1;
          break;
        }
      n && o.push(p[a]);
    }
    return o;
  }),
  (apn.CES.prototype.wgtToScreenX = function (e, t) {
    return this.$O3d[e]
      ? apn.widgets.utils.$O2x(this, this.$O3d[e], t, 1 / this.getZoomX())
      : void bx.Trace.log(
          "APX",
          "warning",
          "Non-exist widget id=" + e,
          "wgtToScreenX"
        );
  }),
  (apn.CES.prototype.wgtToScreenY = function (e, t) {
    return this.$O3d[e]
      ? apn.widgets.utils.$O2y(this, this.$O3d[e], t, 1 / this.getZoomY())
      : void bx.Trace.log(
          "APX",
          "warning",
          "Non-exist widget id=" + e,
          "wgtToScreenY"
        );
  }),
  (apn.CES.prototype.utlIntersectLine = function (e, t, a, i) {
    var n = t.y - e.y,
      r = e.x - t.x,
      o = t.x * e.y - e.x * t.y,
      s = n * a.x + r * a.y + o,
      p = n * i.x + r * i.y + o;
    if (0 != s && 0 != p && s * p >= 0) return !1;
    var l = i.y - a.y,
      d = a.x - i.x,
      c = i.x * a.y - a.x * i.y,
      g = l * e.x + d * e.y + c,
      u = l * t.x + d * t.y + c;
    if (0 != g && 0 != u && g * u >= 0) return !1;
    var h = n * d - l * r;
    return 0 != h;
  }),
  (apn.CES.prototype.utlAllocCanvas = function (e, t, a) {
    this.viewer.$O5m = this.viewer.$O5m || {};
    return (
      this.viewer.$O5m[e] ||
        ((this.viewer.$O5m[e] = $TAG("canvas", {
          style: "position:absolute;",
        })),
        (this.viewer.$O5m[e].width = t),
        (this.viewer.$O5m[e].height = a),
        (this.viewer.$O5m[e].style.width = t + "px"),
        (this.viewer.$O5m[e].style.height = a + "px")),
      this.viewer.$O5m[e]
    );
  }),
  (apn.CES.prototype.wgtActivateLayer = function (e, t) {
    this.$O3m(e, t), this.$O4f(e, t);
  }),
  (apn.CES.prototype.pageRun = function (e, t, a) {
    if (this.project && this.project.pages[e]) {
      var i = {
        action: "LTP",
        to: { pageID: e, reset: a },
        transit: t || { effect: "none" },
      };
      this.viewer.run(i);
    }
  }),
  (apn.CES.prototype.utlIterateInGroup = function (e, t, a) {
    var i,
      n = apn.Project.findParentOf(this.screen, e, "bx.CEditorWnd.CGroup");
    if (n)
      for (var r = 0; r < this.screen.objects[n].layout.children.length; r++)
        this.screen.objects[n].layout.children[r] != e &&
          ((i =
            this.screen.objects[this.screen.objects[n].layout.children[r]]
              .create),
          i.data &&
            i.data.properties &&
            i.data.properties.attrs &&
            i.data.properties.attrs[t] &&
            a(this.screen.objects[n].layout.children[r]));
  }),
  (apn.CES.prototype.utlLocalSave = apn.saveTempFile),
  (apn.CES.prototype.utlLocalLoad = apn.loadTempFile),
  (apn.CES.prototype.wgtVolumeMedia = function (e, t) {
    return this.$O3d[e] && this.$O3d[e].mediaTag
      ? (void 0 !== t && (this.$O3d[e].mediaTag.volume = t),
        this.$O3d[e].mediaTag.volume)
      : 0;
  }),
  (window.apnx = window.apnx || {}),
  (apnx.btnize = function (e, t, a) {
    function i(e, t) {
      t == bx.CGesture.POINTER_START
        ? e.btnOnDown && e.btnOnDown(e)
        : t == bx.CGesture.POINTER_END &&
          ((e.$OcR = !1), e.btnOnState && e.btnOnState(e));
    }
    (e.apnxBtnizeOpts = t),
      (a = a || {}),
      (e.apxOnEvent =
        t.apxOnEvent ||
        function (e, a, i, n) {
          if (!this.$OcO)
            return "click" == a
              ? (t.selected &&
                  t.selected.normal &&
                  (this.$OcP ? (this.$OcP = !1) : (this.$OcP = !0),
                  this.btnOnState(this),
                  t.onSelected && t.onSelected(this, this.$OcP)),
                this.$OcQ && (this.$OcQ.style.display = "none"),
                !0)
              : void 0;
        }),
      t.selected &&
        t.selected.normal &&
        ((e.$select = function (e, a) {
          (this.$OcP = e),
            this.btnOnState(this),
            a && t.onSelected && t.onSelected(this, this.$OcP);
        }),
        (e.$isSelected = function () {
          return this.$OcP;
        })),
      t.disabled &&
        ((e.$disable = function (e) {
          (this.$OcO = e), this.btnOnState(this);
        }),
        (e.$isDisabled = function () {
          return this.$OcO;
        })),
      ((t.idle && t.idle.normal) || (t.selected && t.selected.normal)) &&
        (e.btnOnState = function (e) {
          var t = e.apnxBtnizeOpts;
          e.$OcP
            ? t.selected && t.selected.normal && (e.src = t.selected.normal)
            : e.$OcO && t.disabled
            ? (e.src = t.disabled)
            : t.idle && t.idle.normal && (e.src = t.idle.normal);
        }),
      ((t.idle && t.idle.down) || (t.selected && t.selected.down)) &&
        (e.btnOnDown = function (e) {
          if (!this.$OcO) {
            var t = e.apnxBtnizeOpts;
            this.$OcP
              ? t.selected && t.selected.down && (this.src = t.selected.down)
              : t.idle && t.idle.down && (this.src = t.idle.down),
              (this.$OcR = !0);
          }
        }),
      ((t.idle && t.idle.hover) || (t.selected && t.selected.hover) || a.tag) &&
        ((e.onmouseover = function (e) {
          if (!this.$OcR && !this.$OcO) {
            var t = this.apnxBtnizeOpts;
            this.$OcP
              ? (t.selected &&
                  t.selected.hover &&
                  (this.src = t.selected.hover),
                a.tag &&
                  a.selected &&
                  ((a.tag.src = a.selected.url),
                  (a.tag.style.display = "block"),
                  (a.tag.style.left =
                    this.offsetLeft +
                    this.offsetWidth / 2 +
                    a.selected.dx +
                    "px"),
                  (a.tag.style.top =
                    this.offsetTop + this.offsetHeight + a.selected.dy + "px")))
              : (t.idle && t.idle.hover && (this.src = t.idle.hover),
                a.tag &&
                  a.idle &&
                  ((a.tag.src = a.idle.url),
                  (a.tag.style.display = "block"),
                  (a.tag.style.left =
                    this.offsetLeft + this.offsetWidth / 2 + a.idle.dx + "px"),
                  (a.tag.style.top =
                    this.offsetTop + this.offsetHeight + a.idle.dy + "px")));
          }
        }),
        (e.onmouseout = function (e) {
          var t = this.apnxBtnizeOpts;
          this.$OcP
            ? t.selected &&
              t.selected.hover &&
              (this.$OcR && t.selected.down
                ? (this.src = t.selected.down)
                : t.selected.normal && (this.src = t.selected.normal))
            : t.idle &&
              t.idle.hover &&
              (this.$OcR && t.idle.down
                ? (this.src = t.idle.down)
                : (this.src = t.idle.normal)),
            a.tag &&
              "block" == a.tag.style.display &&
              (a.tag.style.display = "none");
        })),
      new bx.CGesture(e, i, { noDelayedEvent: !0 }),
      a.tag && (e.$OcQ = a.tag),
      e.btnOnState && e.btnOnState(e);
  }),
  (apx.addEventListener = function (e, t, a) {
    if (t) {
      var i;
      i =
        "preboot" == e
          ? (apx.spt2evPB = apx.spt2evPB || [])
          : "pageBuild" == e
          ? (apx.spt2evPP = apx.spt2evPP || [])
          : a && a.pre
          ? (apx._spt2evLnPre = apx._spt2evLnPre || [])
          : (apx._spt2evLn = apx._spt2evLn || []);
      var n = { ev: e, target: a ? a.target : void 0, onEvent: t };
      a && a.accept && a.accept.length && (n.accept = a.accept), i.push(n);
    }
  }),
  (apx.fireEvent = function (e, t, a, i) {
    function n(e, a, n) {
      (apx.spt2evFire = apx.spt2evFire || []),
        apx.spt2evFire.push({ pId: a, oLabel: i, ev: e, param: t });
    }
    var r;
    if (
      (window.apnExeFile
        ? (r = apnExeFile)
        : window.apnSbxFile && apnSbxFile.file && (r = apnSbxFile.file),
      !r)
    )
      return void console.error("[Aspen] Aspen data file was not loaded.");
    if (
      ("Custom" == e && (e = "Custom Event"),
      "Custom Event" != e && "Visibility Change" != e)
    )
      return void console.error(
        "[Aspen] Unknown event is requested to be fired. (Event=" + e + ")"
      );
    if ("Visibility Change" == e)
      ("visible" != t && "hidden" != t) ||
        window.postMessage(
          { CExe: { type: "onVisibilityChange", data: t } },
          "*"
        );
    else {
      void 0 !== t && (t = encodeURIComponent(t || ""));
      var o;
      for (var s in apn.P.eventTitle)
        if (apn.P.eventTitle[s] == e) {
          o = s;
          break;
        }
      if (!o)
        return void console.error(
          "[Aspen] Requested event is not supported in current Aspen configuration. (Event=" +
            e +
            ")"
        );
      var p = [],
        l = apn.Project.getPages(r, !1, "apn.COverlayPage"),
        d = apn.Project.getPageTitles(r, !1, "apn.COverlayPage"),
        c = apn.Project.getPages(r, !1, "apn.CFlowPage"),
        g = apn.Project.getPageTitles(r, !1, "apn.CFlowPage"),
        u = apn.Project.getPages(r, !1, "apn.CPopupPage"),
        h = apn.Project.getPageTitles(r, !1, "apn.CPopupPage");
      for (s = 0; s < d.length; s++) p.push(l[s]);
      for (s = 0; s < g.length; s++) p.push(c[s]);
      for (s = 0; s < h.length; s++) p.push(u[s]);
      if (!p.length) return;
      for (s = 0; s < p.length; s++) n(o, p[s]);
      window.apnExe && apnExe.getPM() && apx._dispatchEvent(apnExe.getPM());
    }
  }),
  (apx._dispatchEvent = function (e) {
    function t(e) {
      if (e.canvas)
        for (var t, a, i, n = 0; n < apx.spt2evFire.length; n++)
          if (((t = apx.spt2evFire[n]), t.pId == e.id)) {
            if (void 0 !== t.oLabel)
              for (
                a = apx.searchWidgets(
                  e.canvas.screen,
                  4,
                  "title",
                  void 0,
                  void 0,
                  void 0,
                  t.oLabel
                ),
                  i = 0;
                i < a.length;
                i++
              )
                e.canvas.fireEvent(t.ev, t.param, a[i], !0);
            else e.canvas.fireEvent(t.ev, t.param, void 0, !0);
            apx.spt2evFire.splice(n, 1), n--;
          }
    }
    apx.spt2evFire && e.iteratePage(t);
  }),
  (apx.isPreview = function () {
    return !!window.apnSbxFile;
  }),
  (apx.set = function (e, t) {
    void 0 !== e &&
      (window.apnExe
        ? apx._setFileVar(apnExe, e, t)
        : ((apx.spt2fileVar = apx.spt2fileVar || []),
          apx.spt2fileVar.push({ key: e, value: t })));
  }),
  (apx._setFileVar = function (e, t, a) {
    if (((e.$O3U = e.$O3U || {}), (e.$O3U[t] = a), e.$O3V && e.$O3V.length))
      for (var i, n, r = 0; r < e.$O3V.length; r++)
        (i = !1),
          e.isCurrentPage(e.$O3V[r].pId) && (i = !0),
          (n = e.getPage(e.$O3V[r].pId)) &&
            n.canvas &&
            n.canvas._inPagePauseEvent &&
            (i = !0),
          (i || e.$O3V[r].always) &&
            e.$O3V[r].key == t &&
            e.$O3V[r].handler(a, t);
  }),
  (apx.srcCloneWidget = function (e, t, a) {
    function i(t) {
      return a && a.data && a.id
        ? o++ + "A" + a.id + "_"
        : ((e.$O4x = e.$O4x || 0), e.$O4x++, t + e.$O4x + "_");
    }
    function n(t) {
      if (
        (l.push({ idOld: t }),
        e.objects[t].layout && e.objects[t].layout.children)
      )
        for (var a = 0; a < e.objects[t].layout.children.length; a++)
          n(e.objects[t].layout.children[a]);
    }
    function r(e) {
      if ("object" == typeof e && e instanceof Object)
        for (var t in e)
          "layout" == t && e[t] && apn.Project.$O4K(d, e[t], g), r(e[t]);
    }
    if (e && e.objects[t]) {
      if (a && a.data && a.id) {
        var o, s;
        for (var p in a.data.objects)
          (void 0 === s || s < a.data.objects[p].create.zIndex) &&
            (s = a.data.objects[p].create.zIndex),
            (void 0 === o || o < parseInt(p)) && (o = parseInt(p));
        for (p in e.objects)
          (void 0 === o || o < parseInt(p)) && (o = parseInt(p));
        s ? s++ : (s = bx.CCanvasWnd.ZINDEX_OBJECT), o ? o++ : (o = 1);
      }
      var l = [];
      n(t);
      for (var d = {}, p = 0; p < l.length; p++)
        (l[p].idNew = i(l[p].idOld)), (d[l[p].idOld] = l[p].idNew);
      var c = a && a.data && a.id ? a.data : e;
      for (p = 0; p < l.length; p++)
        (c.objects[l[p].idNew] = bx.$cloneObject({}, e.objects[l[p].idOld])),
          apn.Project._remapObject(d, c, l[p].idNew);
      var g = {
        getScreenData: function () {
          return c;
        },
      };
      if ((r(c.objects[l[0].idNew]), a && a.data && a.id))
        c.objects[l[0].idNew].create.zIndex = s;
      else {
        var u;
        (u = apn.Project.findParentOf(e, l[0].idOld, void 0, !0)) &&
          e.objects[u].layout.children.push(l[0].idNew);
      }
      return l[0].idNew;
    }
  }),
  (window.AspenWebAudio =
    window.AspenWebAudio ||
    function (e) {
      (this.tag = e),
        (this.tag.wgCtx = {}),
        (this.tag.wgCtx.startedAt = 0),
        (this.tag.wgCtx.pausedAt = 0),
        (this.tag.wgCtx.volume = 1),
        (this.tag.wgCtx.isPlaying = !1),
        (this.tag.wgCtx.isMute = !1),
        (this.tag.wgCtx.gainNode = void 0),
        (this.tag.wgCtx.processor = void 0);
    }),
  AspenWebAudio.audioContext,
  (AspenWebAudio.isUseWebAudio = function () {
    return !1;
  }),
  (AspenWebAudio.prototype.setMedia = function (e) {
    if (
      ((this.tag.wgCtx.Buffer = void 0),
      AspenWebAudio &&
        AspenWebAudio.audioContext &&
        AspenWebAudio.audioContext.currentTime &&
        this.tag.wgCtx.currentTime === AspenWebAudio.audioContext.currentTime)
    ) {
      var t = new Date().getTime();
      t - this.tag.wgCtx.lastCheckTime > 100 && this.close();
    }
    AspenWebAudio.audioContext ||
      (AspenWebAudio.audioContext = new (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext)()),
      AspenWebAudio.$OcS(this, e);
  }),
  (AspenWebAudio.prototype.setCallback = function (e, t, a, i, n, r) {
    (this.onStart = e),
      (this.onEnd = t),
      (this.onResume = a),
      (this.onPause = i),
      (this.timeDuration = n),
      (this.timeUpdate = r);
  }),
  (AspenWebAudio.prototype.play = function (e) {
    var t = e ? 0 : this.tag.wgCtx.pausedAt,
      a = this;
    return this.tag.wgCtx.loadedUrl !== this.tag.wgCtx.requestUrl
      ? void (this.tag.wgCtx.waitPlay = !0)
      : this.tag.wgCtx.isPlaying
      ? (this.stop(), (this.tag.wgCtx.waitPlay = !0), void this.play())
      : void (this.tag.wgCtx.Buffer
          ? ((this.tag.wgCtx.source =
              AspenWebAudio.audioContext.createBufferSource()),
            (this.tag.wgCtx.processor =
              AspenWebAudio.audioContext.createScriptProcessor(2048, 1, 1)),
            (this.tag.wgCtx.gainNode = AspenWebAudio.audioContext.createGain()),
            this.setMute(this.tag.wgCtx.isMute),
            this.setVolume(this.tag.wgCtx.volume),
            (this.tag.wgCtx.source.buffer = this.tag.wgCtx.Buffer),
            (this.tag.wgCtx.duration = this.tag.wgCtx.source.buffer.duration),
            (this.tag.wgCtx.processor.onaudioprocess = function (e) {
              (a.tag.wgCtx.currentTime =
                AspenWebAudio.audioContext.currentTime),
                (a.tag.wgCtx.lastCheckTime = new Date().getTime()),
                a.tag.wgCtx.isPlaying && a.timeUpdate && a.timeUpdate();
            }),
            this.tag.wgCtx.source.connect(this.tag.wgCtx.gainNode),
            this.tag.wgCtx.gainNode.connect(
              AspenWebAudio.audioContext.destination
            ),
            this.tag.wgCtx.processor.connect(this.tag.wgCtx.gainNode),
            this.tag.wgCtx.source.start(0, t),
            (this.tag.wgCtx.startedAt =
              AspenWebAudio.audioContext.currentTime - t),
            (this.tag.wgCtx.pausedAt = 0),
            (this.tag.wgCtx.isPlaying = !0),
            (this.tag.wgCtx.waitPlay = !1),
            this.getLoop() && (this.tag.wgCtx.source.loop = !0),
            (this.tag.wgCtx.source.onended = function () {
              a.stop(!0);
            }),
            this.onStart && e
              ? this.onStart()
              : this.onResume && !e && this.onResume())
          : (this.tag.wgCtx.waitPlay = !0));
  }),
  (AspenWebAudio.prototype.doPlay = function (e) {
    this.play(e);
  }),
  (AspenWebAudio.prototype.stop = function (e) {
    if (((e = e || !1), this.tag.wgCtx.source)) {
      this.tag.wgCtx.source.disconnect();
      try {
        this.tag.wgCtx.source.stop();
      } catch (e) {
        console.error(e);
      }
      this.tag.wgCtx.source = null;
    }
    (this.tag.wgCtx.pausedAt = 0),
      (this.tag.wgCtx.startedAt = 0),
      (this.tag.wgCtx.waitPlay = !1),
      (this.tag.wgCtx.isPlaying = !1),
      this.onEnd && this.onEnd(e);
  }),
  (AspenWebAudio.prototype.pause = function () {
    if (AspenWebAudio && AspenWebAudio.audioContext) {
      var e =
        (AspenWebAudio.audioContext.currentTime - this.tag.wgCtx.startedAt) %
        this.tag.wgCtx.duration;
      if (this.tag.wgCtx.source) {
        this.tag.wgCtx.source.disconnect();
        try {
          this.tag.wgCtx.source.stop();
        } catch (e) {
          console.error(e);
        }
        this.tag.wgCtx.source = null;
      }
      (this.tag.wgCtx.waitPlay = !1),
        (this.tag.wgCtx.isPlaying = !1),
        (this.tag.wgCtx.pausedAt = e),
        this.onPause && this.onPause();
    }
  }),
  (AspenWebAudio.prototype.setLoop = function (e) {
    this.tag.wgCtx.loop = e;
  }),
  (AspenWebAudio.prototype.getLoop = function () {
    return this.tag.wgCtx.loop;
  }),
  (AspenWebAudio.prototype.setMute = function (e) {
    this.tag.wgCtx.gainNode &&
      ((this.tag.wgCtx.gainNode.gain.value = e ? 0 : this.tag.wgCtx.volume),
      (this.tag.wgCtx.isMute = e));
  }),
  (AspenWebAudio.prototype.getMute = function () {
    if (this.tag.wgCtx.gainNode) return this.tag.wgCtx.isMute;
  }),
  (AspenWebAudio.prototype.setVolume = function (e) {
    !this.tag.wgCtx.isMute &&
      this.tag.wgCtx.gainNode &&
      this.tag.wgCtx.gainNode.gain &&
      (this.tag.wgCtx.gainNode.gain.value = e),
      (this.tag.wgCtx.volume = e);
  }),
  (AspenWebAudio.prototype.getVolume = function () {
    return this.tag.wgCtx.volume;
  }),
  (AspenWebAudio.prototype.getPaused = function () {
    return !this.tag.wgCtx.isPlaying;
  }),
  (AspenWebAudio.prototype.getInfoPlayTime = function () {
    return this.tag.wgCtx.duration
      ? (AspenWebAudio.audioContext.currentTime - this.tag.wgCtx.startedAt) %
          this.tag.wgCtx.duration
      : 0;
  }),
  (AspenWebAudio.prototype.getInfoDuration = function () {
    return this.tag.wgCtx.duration;
  }),
  (AspenWebAudio.prototype.close = function () {
    AspenWebAudio.audioContext &&
      AspenWebAudio.audioContext.close &&
      (AspenWebAudio.audioContext.close(),
      (AspenWebAudio.audioContext = void 0));
  }),
  (AspenWebAudio.$OcS = function (e, t) {
    if (e.tag.wgCtx.isPlaying) {
      if (((e.tag.wgCtx.mediaURL = t), e.tag.wgCtx.source)) {
        e.tag.wgCtx.source.disconnect();
        try {
          e.tag.wgCtx.source.stop();
        } catch (e) {
          console.error(e);
        }
        e.tag.wgCtx.source = null;
      }
      (e.tag.wgCtx.pausedAt = 0),
        (e.tag.wgCtx.startedAt = 0),
        (e.tag.wgCtx.isPlaying = !1),
        (e.tag.wgCtx.waitPlay = !0);
    }
    var a = new XMLHttpRequest();
    a.open("GET", t, !0),
      (a.responseType = "arraybuffer"),
      (a.onload = function () {
        AspenWebAudio.audioContext &&
          AspenWebAudio.audioContext.decodeAudioData(
            a.response,
            function (a) {
              (e.tag.wgCtx.Buffer = a),
                (e.tag.wgCtx.loadedUrl = t),
                e.tag.wgCtx.waitPlay && e.doPlay(!e.tag.wgCtx.pausedAt);
            },
            function (e) {
              console.error("ERROR: context.decodeAudioData: ", e);
            }
          );
      }),
      (e.tag.wgCtx.requestUrl = t),
      a.send();
  });
