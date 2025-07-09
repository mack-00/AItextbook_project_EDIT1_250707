///////////////////////////////////////////////////////////////////////////////
// ux.wgt.btnImage (W:edu.wgt.btnStateS 기본으로 함)
/*
	Image + Border + Text로 구성된 Button임
*/
var xa = apn.inheritWidget(apn.widgets['apn.wgt.image2']);
xa.exeFireStateEvent = true;

xa.styleMap = {
	title:true
	,visibility:true
	,strokeStyle:true, lineWidth:true, lineDash:true
	//,fillStyle:true
	,font:true, fontSize:true, fontStyle:true, fontItalic:true, fontBold:true, textMultiLine: true, fontUnderlined:true
	,text:true,	textAlign:true, textValign:true, textPadding:true
	,fontStrokeStyle:true, fontStrokeWidth:true
	,borderRadiusTopLeft:true, borderRadiusTopRight:true, borderRadiusBottomLeft:true, borderRadiusBottomRight:true
	,alpha:true
	,angle:true
	,mediaID:true
	,dragX:true, dragY:true, dragInParent:true, dragContainParent:true
	,csr:true
}
//xa.apnWgtImg2DOM2 = true;

xa.editor = {}; //%%INFO image2의 것이 있으면 무시하고 구성함. 이것을 image2의 정보를 사용할 정도로 관련성이 없는 위젯임.
xa.editor.iconThumb = 'DB/ux/imgs/wgts/thumbs/imageButton.png';

/*	Image를 set할 수 있도록 하기 위한 것이며, 일단 이 위젯이 직접적으로 사용되는
	''=normal, 'check', 'tab'
	에 대해서 지원함
*/
xa._txtSpt1 = {ko:"기본 상태 이미지 ID", en:"Image asset ID for normal state", ja:"基本状態の画像ID"};
xa._txtSpt2 = {ko:"선택 상태 이미지 ID", en:"Image asset ID for selected state", ja:"選択状態の画像ID"};

xa.scriptInfo = {
	wgtDataByParam:'selectType'
	,wgtData:{
		'':{
			/*	%%INFO
				undefined가 아닌 항목만 지정됩니다. 따라서 반복 호출도 가능합니다.
				또한, 교체 목적입니다. 위젯은 이미지 구성에 따라서 동작이 다르므로, 기존의 것을 교체하기 위한 목적입니다
			*/
			image:{help:"{normal:ID|undefined, pressed:ID|undefined, hover:ID|undefined}\n"+apn.CExe.GL(xa._txtSpt1), type:'so', value:{}}
			,imageDisabled:{help:"{normal:ID|undefined}\n"+apn.CExe.GL({ko:"비활성 상태 이미지 ID", en:"Image asset ID for disabled state", ja:"非アクティブの画像ID"}), type:'so', value:{}}
		}
		,tab:{
			image:{help:"{normal:ID|undefined, hover:ID|undefined}\n"+apn.CExe.GL(xa._txtSpt1), type:'so', value:{}}
			,imageSelected:{help:"{normal:ID|undefined}\n"+apn.CExe.GL(xa._txtSpt2), type:'so', value:{}}
		}
		,check:{
			image:{help:"{normal:ID|undefined, hover:ID|undefined}\n"+apn.CExe.GL({ko:"미선택 상태 이미지 ID", en:"Image asset ID for unchecked state", ja:"未選択状態の画像ID"}), type:'so', value:{}}
			,imageChecked:{help:"{normal:ID|undefined, hover:ID|undefined}\n"+apn.CExe.GL(xa._txtSpt2).replace('selected', 'checked'), type:'so', value:{}}
		}
	}
}

/*	2017/09/13
		btnV=2
		1. Setup된 Text color가 Border color에도 적용되도록 함
		2. 'btnType'값이 추가되어 'text'이면 Image를 사용하지 않고 Text로만 동작함
*/
xa.properties.state = 'normal';
xa.properties.attrs = xa.properties.attrs || {};
xa.properties.attrs.selectType = '';
xa.properties.attrs.btnV = 2;
xa.properties.attrs.autoKeepSize = false;
xa.properties.attrs.cfg = {
	images:{
		normal:{mediaID:undefined}, down:{mediaID:undefined}, hover:{mediaID:undefined} /*Normal*/
		,disabled:{mediaID:undefined}, disabledDown:{mediaID:undefined}, disabledHover:{mediaID:undefined} /*Disabled, Disabled-select*/
		,checked:{mediaID:undefined}, checkedD:{mediaID:undefined}, checkedH:{mediaID:undefined} /*Checked, down은 필요가 없으나 편의상 정의함. normal이 이것의 down이 되기 때문에*/
	}
	,clr:{disabled:null, down:null, hover:null}
	,ttip:'' // Tooltip
	,hvrSync:'' // Hover sync group - Button들이 Hover 상태를 고유하기 위한 기능. 양면책 편집에서 사용하며 Page간 통신을 위해 Context를 사용함.
};

/*	selectType='tab'
		Tab 등에서 사용하는 형태로, 한번 Select가 되면 스스로 OFF가 안되는 경우임 (즉 Toggle을 못하는 경우임)
		'disabled'상태를 Selected로 사용하고, Disabled이미지를 Hover, Down에 사용함. (단 Hover가 주어지면 그것을 사용함. 이러한 형태의 Tab도 가능함)
		Group Toggle 기능이 가능함
	selectType='toggle'
		Toggle 형태의 버튼임
		'disabled'상태를 Selected로 사용하고 disabledDown, disabledHover를 사용함
	selectType='check'
		Toggle의 경우, check이 되면 다시 돌아가지 못하지만,
		이것은 on/off check를 지원함
	selectType='simple';
		Disabled 상태를 쓰지 않는 것만 다름
*/
xa.onEdit = apn.widgets['apn.wgt.rect'].onEdit;

xa.exeCreateTag = function(viewer, canvas, objData, zx, zy, oId)/*Element*/
{
	var tag = apn.widgets['apn.wgt.rect'].exeCreateTag.call(this, viewer, canvas, objData, zx, zy, oId);

	tag.apnTapCsr = true; // Tap에 Interaction이 이미 있는 것과 같은 상태로 지정함. Cursor 처리를 위한 것임

	return tag;
}

xa.exeAssetPreload = function(apx, oId, onEnd)
{
	var cfg = apx.wgtGetProperty(oId, 'cfg');

	var imgs = {}, cnt = 0;

	for(var i in cfg.images){
		if (cfg.images[i].mediaID){
			imgs[i] = {url:apx.mediaURL(cfg.images[i].mediaID)};
			cnt ++;
		}
	}

	if (cnt){
		function onLoad(cntAll, cntSucc, cntErr)
		{
			onEnd();
		}
		new apn.CRscLoader().load(apx.project, imgs, onLoad);
	}
	else{
		onEnd();
	}
}

xa.exeOnLoad = function(apx, oId)
{
	var _this = this;
	var tag = apx.wgtTag(oId);

	function displayHover()
	{
		//	위젯간 SYNC에 의한 삭제 후 호출 가능성
		if (!apx.wgtTag(oId)) return;

		var state = 'hover';

		if (selectType == 'toggle'){
			if (apx.wgtGetProperty(oId, 'apxState') == 'disabled') state = 'disabledHover';
		}
		else if (selectType == 'check'){
			if (apx.wgtGetProperty(oId, 'apxState') == 'checked') state = 'checkedH';
		}
		else{
			if (apx.wgtGetProperty(oId, 'apxState') == 'disabled') return;
		}

		if (tag._images[state].mediaID) _this.exeAssetLoad(apx, tag, tag._images[state].mediaID);
		uxWgtBtnImage.setTextColor(apx, oId, state);
		if (_this.I_exeOnStateChange) _this.I_exeOnStateChange(apx, oId, state);
	}
	
	function displayOut()
	{
		//	위젯간 SYNC에 의한 삭제 후 호출 가능성
		if (!apx.wgtTag(oId)) return;

		if (tag._down){
			if (selectType == 'check'){
				var state = 'checkedD';
			}
			else{
				var state = 'down';
			}
		}
		else{
			var state = apx.wgtGetProperty(oId, 'apxState');
		}

		if (tag._images[state].mediaID) _this.exeAssetLoad(apx, tag, tag._images[state].mediaID);
		uxWgtBtnImage.setTextColor(apx, oId, state);
		if (_this.I_exeOnStateChange) _this.I_exeOnStateChange(apx, oId, state);
	}
	
	function displayPressed()
	{
		//	위젯간 SYNC에 의한 삭제 후 호출 가능성
		if (!apx.wgtTag(oId)) return;

		var state = 'down';

		if (selectType == 'toggle'){
			if (apx.wgtGetProperty(oId, 'apxState') == 'disabled') state = 'disabledDown';
		}
		else if (selectType == 'check'){
			//if (apx.wgtGetProperty(oId, 'apxState') == 'checked') state = 'checkedD';
		}
		else{
			if (apx.wgtGetProperty(oId, 'apxState') == 'disabled') return;
		}
		
		if (tag._images[state].mediaID) _this.exeAssetLoad(apx, tag, tag._images[state].mediaID);
		uxWgtBtnImage.setTextColor(apx, oId, state);
		if (_this.I_exeOnStateChange) _this.I_exeOnStateChange(apx, oId, state);
	}

	function displayNormal()
	{
		var state = apx.wgtGetProperty(oId, 'apxState');

		if (!tag._images[state]) state = 'normal'; // 하위 Class에서 Button의 상태외에 추가 상태를 사용하는 경우를 위해서, 모르는 State는 'normal'로 표시함

		if (tag._images[state].mediaID) _this.exeAssetLoad(apx, tag, tag._images[state].mediaID);
		uxWgtBtnImage.setTextColor(apx, oId, state);
		if (_this.I_exeOnStateChange) _this.I_exeOnStateChange(apx, oId, state);
	}

	var cfg = apx.wgtGetProperty(oId, 'cfg');
	var selectType = apx.wgtGetProperty(oId, 'selectType');

	var canHoverOut; // Hover sync 동작을 위해서 정의함
	var canPressed;

	//	ToopTip
	if (cfg.ttip){
		tag.title = cfg.ttip;
	}

	//	구버전
	if (!cfg.images.disabledDown) cfg.images.disabledDown = {mediaID:undefined};
	if (!cfg.images.disabledHover) cfg.images.disabledHover = {mediaID:undefined};
	if (!cfg.clr) cfg.clr = {disabled:null, down:null, hover:null};

	if (this.I_exeOnLoad_check && !this.I_exeOnLoad_check(apx, oId)) return;

	tag._images = bx.$cloneObject({}, cfg.images);
	tag._down = false;

	//	Tap Start로 동작하는 방식
	var useTapStart = false;

	if (apn.dbUI && apn.dbUI.system && apn.dbUI.system.exeEventStart == true){
		//	Tap Start가 우선하는 파일에서 Tap Start에 반응함
		var exeProp = apn.Project.getLayout(apx.project).property.CExe;

		if (exeProp && exeProp.event && exeProp.event.TS1 == 'Y'){
			useTapStart = true;
		}
	}

	if (selectType == 'tab' || selectType == 'toggle'){
		if (selectType == 'tab'){
			tag._images.down = tag._images.disabled;
			if (!tag._images.hover.mediaID) tag._images.hover = tag._images.disabled;
		}

		tag.apxOnEvent = function(apx, ev, sX, sY)/*Boolean*/
		{
			if (ev == (useTapStart ? 'tapStart':'click')){
				if (selectType == 'toggle'){
					if (apx.wgtGetProperty(oId, 'apxState') == 'normal'){
						apx.wgtSetProperty(oId, 'apxState', 'disabled'); // Selected
					}
					else{
						apx.wgtSetProperty(oId, 'apxState', 'normal');
					}
				}
				else{
					if (apx.wgtGetProperty(oId, 'apxState') == 'normal'){
						apx.wgtSetProperty(oId, 'apxState', 'disabled'); // Selected
					}
				}
				return true;
			}
		}
	}
	else if (selectType == 'check'){
		tag.apxOnEvent = function(apx, ev, sX, sY,v,v,sysEv)/*Boolean*/
		{
			if (ev == (useTapStart ? 'tapStart':'click')){
				if (apx.wgtGetProperty(oId, 'apxState') == 'normal'){
					apx.wgtSetProperty(oId, 'apxState', 'checked'); // Selected
				}
				else{
					apx.wgtSetProperty(oId, 'apxState', 'normal'); // Unselected
				}
				return true;
			}
		}
	}

	// Down(Pressed)
	if (!useTapStart){
		if (tag._images.down.mediaID || (cfg.clr && cfg.clr.down) || tag._images.disabledDown.mediaID || (cfg.clr && cfg.clr.disabledDown)){
			canPressed = true;

			tag.btnOnDown = function(tagThis)
			{
				if (selectType == 'toggle'){
					//NO-OP
				}
				else if (selectType == 'check'){
					//NO-OP
				}
				else{
					if (apx.wgtGetProperty(oId, 'apxState') == 'disabled') return;
				}

				if (tag._down) return;

				tag._down = true;

				displayPressed();

				//	Pressed 상태를 Broadcast
				if (cfg.hvrSync){
					apx.ctxSet('uxWgtBtnImage_'+cfg.hvrSync, {oId:oId,state:/*pressed*/2});
				}
			}
		}
	}

	tag.btnOnState = function(tagThis)
	{
		displayNormal();
	}

	if (!useTapStart){
		if (tag._images.hover.mediaID || (cfg.clr && cfg.clr.hover) || tag._images.disabledHover.mediaID || (cfg.clr && cfg.clr.disabledHover) || (cfg.clr && cfg.clr.checkedH)){
			canHoverOut = true;
			
			if (!bx.HCL.DV.hasTouchEvent()){ // Mouse/Touch 이중으로 Event가 오는 기기에서 오동작 방지
				/*	%%INFO
					MouseMove의 처리에서 IE/Chrome이 다음과 같은 차이가 있다.
					Chrome의 경우, Tag가 움직여도 Mouse가 그대로 있으면 move가 오지 않지만
					IE는 move가 온다.
					이것으로 인하여 미세한 동작 차이가 발생하지만, 일단 이러한 차이는 무시하기로 한다
				*/
				tag.onmousemove = function(ev)
				{
					//	Pass면 처리하지 않음
					if (tag.apnPassPointerEvent) return false;
					if (tag.apnBlockPointerEvent) return false;

					if (tag._down) return;

					displayHover();

					//	Hover 상태를 Broadcast
					if (cfg.hvrSync){
						if (!tag._btnHover){
							tag._btnHover = true;
							apx.ctxSet('uxWgtBtnImage_'+cfg.hvrSync, {oId:oId,state:/*hover*/1});
						}
					}
				}

				tag.onmouseout = function(ev)
				{
					//	Pass면 처리하지 않음
					if (tag.apnPassPointerEvent) return false;
					if (tag.apnBlockPointerEvent) return false;

					displayOut();

					//	Out 상태를 Broadcast
					if (cfg.hvrSync){
						if (tag._btnHover){
							tag._btnHover = false;

							if (!tag._down) apx.ctxSet('uxWgtBtnImage_'+cfg.hvrSync, {oId:oId,state:/*out*/0});
						}
					}
				}
			}
		}
	}

	function onBtnPressed(/*Boolean*/pressed)
	{
		if (pressed){
			if (tag.btnOnDown) tag.btnOnDown(tag);
		}
		else{
			if (tag._down){
				tag._down = false;
				
				if (tag.btnOnState) tag.btnOnState(tag);

				//	Normal 상태를 Broadcast
				if (cfg.hvrSync){
					apx.ctxSet('uxWgtBtnImage_'+cfg.hvrSync, {oId:oId, state:/*normal*/3});
				}
			}
		}
	}

	function onGestureEvent(tag, event, _void, _void, _void, _void, sysEV)
	{
		if (tag.apnBlockPointerEvent) return;

		if (event == bx.CGesture.POINTER_START){
			if (sysEV){
				if (apx.viewer.uOnGestureDragStartControl) apx.viewer.uOnGestureDragStartControl(sysEV);
			}
			onBtnPressed(true);
		}
		else if (event == bx.CGesture.POINTER_END){
			onBtnPressed(false);
		}
	}

	/*	Gesture Event Dispatch 기능을 제공하는 실행기

		실행기 Gesture와 연계하도록 하였으나, END쪽은 TAG 공간 밖에서는 신호가 잡히지 않을 수 있으므로, START쪽만 사용함
		그런데, 어차피 Pressed 동작은 중복진입 방지가 되어 있으므로,
		둘다 항상 실행 시킴
	*/
	if (apx.viewer.o.verGestureDispatch){ 
		tag.apxOnGesture = function(apx, event)
		{
			onGestureEvent(this, event);
		}
	}
	new bx.CGesture(tag, onGestureEvent, {noDelayedEvent:true, noLongholdEvent:true});

	//	상태 초기화
	if (tag.btnOnState) tag.btnOnState(tag);

	/*	버튼 그룹간 Hover/Press Sync 기능
		{oId:oId,state:0|1|2|3}
		0=out, 1=hover, 2=pressed, 3=normal
	*/
	if (cfg.hvrSync){
		function onCtxUxWgtBtnImage(ctxt)
		{
			if (ctxt && ctxt.oId != oId){
				if (canHoverOut && ctxt.state == 0){ // out
					displayOut();
				}
				else if (canHoverOut && ctxt.state == 1){ // hover
					displayHover();
				}
				else if (canPressed && ctxt.state == 2){ // pressed
					displayPressed();
				}
				else if (ctxt.state == 3){ // normal
					displayNormal();
				}
			}
		}
		apx.wgtListenContext(oId, 'uxWgtBtnImage_'+cfg.hvrSync, onCtxUxWgtBtnImage, /*always*/true);
	}

	/*	Scripting: setData, image|imageDisabled|imageSelected|imageChecked
		단, 이 위젯은 이미지의 초기 구성에 의하여 동작이 결정되므로
		이미지를 변경하는 것만 가능함
	*/
	function _errOnSetImage(warn)
	{
		if (warn){
			apx.log(oId, "Image can be set only to replace existing image. Currently, '"+warn+"' image is unset for this widget.");
		}
	}

	function onSetImage(changeWgtId, value)
	{
		if (changeWgtId == oId && value){
			var warn, applied;

			if (value.normal){
				if (tag._images.normal.mediaID){
					tag._images.normal.mediaID = value.normal;
					applied = true;
				}
				else warn = 'Normal';
			}
			if (value.pressed){
				if (tag._images.down.mediaID){
					tag._images.down.mediaID = value.pressed;
					applied = true;
				}
				else warn = 'Pressed';
			}
			if (value.hover){
				if (tag._images.hover.mediaID){
					tag._images.hover.mediaID = value.hover;
					applied = true;
				}
				else warn = 'Hover';
			}

			if (applied){
				if (tag.btnOnState) tag.btnOnState(tag);
			}

			_errOnSetImage(warn);
		}
	}
	apx.wgtListenProperty(oId, 'image', onSetImage);

	function onSetImageDisabled(changeWgtId, value)
	{
		if (changeWgtId == oId && value){
			var warn, applied;

			if (value.normal){
				if (tag._images.disabled.mediaID){
					tag._images.disabled.mediaID = value.normal;
					applied = true;
				}
				else warn = 'Disabled';
			}
			
			if (applied){
				if (tag.btnOnState) tag.btnOnState(tag);
			}

			_errOnSetImage(warn);
		}
	}
	apx.wgtListenProperty(oId, 'imageDisabled', onSetImageDisabled);

	function onSetImageChecked(changeWgtId, value)
	{
		if (changeWgtId == oId && value){
			var warn, applied;

			if (value.normal){
				if (tag._images.checked.mediaID){
					tag._images.checked.mediaID = value.normal;
					applied = true;
				}
				else warn = 'Checked';
			}
			if (value.hover){
				if (tag._images.checkedH.mediaID){
					tag._images.checkedH.mediaID = value.hover;
					applied = true;
				}
				else warn = 'Checked.hover';
			}
			
			if (applied){
				if (tag.btnOnState) tag.btnOnState(tag);
			}

			_errOnSetImage(warn);
		}
	}
	apx.wgtListenProperty(oId, 'imageChecked', onSetImageChecked);

	function onSetImageSelected(changeWgtId, value)
	{
		if (changeWgtId == oId && value){
			var warn, applied;

			if (value.normal){
				if (tag._images.disabled.mediaID){
					tag._images.disabled.mediaID = value.normal;
					applied = true;
				}
				else warn = 'Selected';
			}
			
			if (applied){
				if (tag.btnOnState) tag.btnOnState(tag);
			}

			_errOnSetImage(warn);
		}
	}
	apx.wgtListenProperty(oId, 'imageSelected', onSetImageSelected);

	//	Subclass module 초기화
	if (this.I_exeOnLoad_post) this.I_exeOnLoad_post(apx, oId);
}

xa.exeSetState = function(apx, tag, /*String*/state, /*String|undefined*/prvState)
{
	if (prvState == state) return; // 중복 호출 무시

	var selectType = apx.wgtGetProperty(apx.wgtId(tag), 'selectType');

	//	Disabled 상태 적용
	if (selectType == 'toggle' || selectType == 'check'){
		//동작없음
	}
	else{ // tab 의 경우, select는 disable과 동일한 동작이 됨
		// 'selected'의 경우, setState에서 Block 상태로 들어가고, 이 경위 ITR이 처리되지 않으므로 SetTimeout을 사용함.
		setTimeout(function(){
			if (state == 'normal'){
				if (apx.wgtGetProperty(tag.apnOID, 'apxVisibility') == 'Block' || apx.wgtGetProperty(tag.apnOID, 'apxVisibility') == 2){
					//	Block 상태
				}
				else{
					apx.tagBlockPointerEvent(tag, false);
					apn.IWidget.exeSetCursor(tag, apx.wgtGetProperty(tag.apnOID, 'apxCursor', true));
				}
			}
			else{//disabled
				apx.tagBlockPointerEvent(tag, true);
				apn.IWidget.exeSetCursor(tag, 'inherit');
//				if (tag.apxCursorBackup === undefined) tag.style.cursor = 'inherit'; // 임시로 지정된 값이므로 CSS에 직접 지정함.
//				else tag.apxCursorBackup = 'inherit';
			}
		},0);
	}

	// 상태 표시
	if (tag.btnOnState) tag.btnOnState(tag);

	var oId = apx.wgtId(tag);

	if (apx.wgtGetProperty(oId, 'uxToggleGroup')){
		//	Group에 존재하는 다른 Toggle 위젯을 찾아서 상태를 반영함.
		if (state == 'disabled' || state == 'checked'){
			function onWgt(/*ID*/i)
			{
				if (apx.wgtGetProperty(i, 'apxState') == 'on') apx.wgtSetProperty(i, 'apxState', 'off', undefined, {stateInitialize:true});
				else if (apx.wgtGetProperty(i, 'apxState') == 'disabled'/*selected*/ || apx.wgtGetProperty(i, 'apxState') == 'checked') apx.wgtSetProperty(i, 'apxState', 'normal'/*unselected*/, undefined, {stateInitialize:true});
				else if (apx.stateGetActive(i, true) == '2') {apx.stateLayerActivate(i, '1'); apx.stateSetActive(i, '1', /*stateInitialize*/true);}
			}
			apx.utlIterateInGroup(oId, 'uxToggleGroup', onWgt);
		}
	}
}

xa.exeOnScreenRefresh = apn.widgets['apn.wgt.rect'].exeOnScreenRefresh;

xa.setTextColor = function(apx, oId, state)
{
	var tag = apx.wgtTag(oId);
	var cfg = apx.wgtGetProperty(oId, 'cfg');
	var ver = apx.wgtGetProperty(oId, 'btnV');

	var hasText = apx.wgtGetProperty(oId, 'apxText') ? true : false;
	var tagText;

	if (hasText){
		tagText = tag.textTag ? tag.textTag : tag;
	}

	if (tagText && cfg.clr){
		if (state == 'normal'){
			if (tag == tagText){ // Widget Tag을 직접 변경해야 하는 경우.
				tagText.style.color = apn.Project.resolveStyle(apx.project, 'fontStyle', apx.wgtGetProperty(oId, 'apxTextColor'));
			}
			else{
				tagText.style.color = 'inherit';
			}
			if (ver == 2) tag.style.borderColor = apn.Project.resolveStyle(apx.project, 'strokeStyle', apx.wgtGetProperty(oId, 'apxStrokeStyle'));
		}
		else if (cfg.clr[state]){
			tagText.style.color = cfg.clr[state];
			if (ver == 2) tag.style.borderColor = cfg.clr[state];
		}
	}
}

xa.createAsCanvasObject = function(/*Object*/prj, /*Object*/position, /*Object*/size, /*Object|undefined*/styles, /*Object|undefined*/property)/*Object*/
{
	return apn.IWidget.createCanvasObject(prj, this, 'apn.CImage', bx.CCanvasWnd.SHAPE_RECT, position, size, styles, property);
}

xa.edtOnConfig = function(apd, objID)
{
	var cfg = apd.wgtGetProperty(objID, 'cfg');
	var local = apd.wgtGetProperty(objID, 'local');
	var selectType = apd.wgtGetProperty(objID, 'selectType');
	var tagDlg;

	// 구버전
	if (!cfg.images.disabledDown) cfg.images.disabledDown = {mediaID:undefined};
	if (!cfg.images.disabledHover) cfg.images.disabledHover = {mediaID:undefined};
	if (!cfg.clr) cfg.clr = {disabled:null, down:null, hover:null};

	var _this = this;

	function onOK()
	{
		eduLib.edtInputApplyAll(apd, tagDlg.tagSub);
		eduLib.edtInputApplyAll(apd, tagDlg.tagOrg);
		_this.edtOnSetState(apd, objID, apd.wgtGetProperty(objID, 'apxState'));

		apd.wgtSetProperty(objID, 'cfg', cfg);
		if (local){
			apd.wgtSetProperty(objID, 'local', local);

			if (_this.I_edtOnConfig_save){
				_this.I_edtOnConfig_save(apd, objID, local, tagDlg, tagDlg.tagSub, tagDlg.tagOrg);
			}
		}
		if (tagDlg._tmpSelectType) apd.wgtSetProperty(objID, 'selectType', tagDlg._tmpSelectType);
	}

	if (tagDlg = apd.dlgDoModal(700, Math.ceil(bx.UX.height*0.8), onOK)){
		tagDlg.tagSub = tagDlg.$TAG('div');
		tagDlg.tagOrg = tagDlg.$TAG('div');

		if (this.I_edtOnConfig){
			this.I_edtOnConfig(apd, objID, local, tagDlg, tagDlg.tagSub, tagDlg.tagOrg);
		}

		uxWgtBtnImage.I_edtOnConfigBuild.call(this, apd, objID, tagDlg, tagDlg.tagOrg, selectType);
	}
}

/*	Child class에서 Config 화면 재구성을 요청할 수 있도록 분리된 함수임
	selectType에 의해서 구성이 바뀌게 되며, Property에 저장된 상태가 아니므로 인수로 받아서 처리함
*/
xa.I_edtOnConfigBuild = function(apd, objID, tagParent, tagDlg, selectType)
{
	var cfg = apd.wgtGetProperty(objID, 'cfg');

	tagParent._tmpSelectType = selectType;

	var txtTitleDisabled = apn.CExe.GL({ko:'비활성 상태',en:'Disabled',ja:'非アクティブ'});
	var txtTitleNormal = apn.CExe.GL({ko:'기본 상태',en:'Normal',ja:'基本状態'});

	var label = apn.CExe.GL({ko:'버튼 상태 표시를 위한 이미지',en:'Image for each states',ja:'ボタンの状態を表示するための画像'});
	var titleNormal = txtTitleNormal;
	var titleDisabled = txtTitleDisabled;

	if (apd.wgtGetProperty(objID, 'btnV') == 2){
		var label2 = apn.CExe.GL({ko:'버튼 상태 표시를 위한 텍스트/테두리 색상',en:'Text/border color for each states',ja:'ボタンの状態を表示するためのテキスト/枠線の色'});
	}
	else{
		var label2 = apn.CExe.GL({ko:'버튼 상태 표시를 위한 텍스트 색상',en:'Text color for each states',ja:'ボタンの状態を表示するためのテキストの色'});
	}

	if (this.I_edtOnConfig_title && this.I_edtOnConfig_title(apd, objID, tagParent, 'normal')) titleNormal = this.I_edtOnConfig_title(apd, objID, tagParent, 'normal');
	if (this.I_edtOnConfig_title && this.I_edtOnConfig_title(apd, objID, tagParent, 'disabled')) titleDisabled = this.I_edtOnConfig_title(apd, objID, tagParent, 'disabled');

	if (tagDlg.eduLib) delete tagDlg.eduLib; // 기존 정보가 있으면 삭제함
	tagDlg.innerHTML = '';

	var isTextOnly = apd.wgtGetProperty(objID, 'btnType') == 'text';
	var hasText = apd.wgtGetProperty(objID, 'apxText') ? true : false;

	if (selectType == 'tab'){
		if (titleNormal == txtTitleNormal) titleNormal = apn.CExe.GL({ko:'미선택 상태',en:'Unselected',ja:'未選択の状態'});
		if (titleDisabled == txtTitleDisabled) titleDisabled = apn.CExe.GL({ko:'선택 상태',en:'Selected',ja:'選択状態'});

		if (!isTextOnly){
			eduLib.edtInputAdd(apd, tagDlg, {type:'title', title:label});
			eduLib.edtInputAdd(apd, tagDlg, {type:'image', title:titleNormal+'', value:cfg.images, key:'normal', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'image', title:titleNormal+' Hover', value:cfg.images, key:'hover', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'image', title:titleDisabled+'', value:cfg.images, key:'disabled', join:true});
		}

		if (cfg.clr && (hasText || isTextOnly)){
			if (cfg.clr.down) cfg.clr.down = null; // 구데이터 처리
			eduLib.edtInputAdd(apd, tagDlg, {type:'space'});
			eduLib.edtInputAdd(apd, tagDlg, {type:'title', title:label2});
			eduLib.edtInputAdd(apd, tagDlg, {type:'color', askUse:true, title:titleDisabled, value:cfg.clr, key:'disabled', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'color', askUse:true, title:titleNormal+' Hover', value:cfg.clr, key:'hover', join:true});
		}
	}
	else if (selectType == 'toggle'){
		if (titleDisabled == txtTitleDisabled) titleDisabled = 'Selected';

		if (!isTextOnly){
			eduLib.edtInputAdd(apd, tagDlg, {type:'title', title:label});
			eduLib.edtInputAdd(apd, tagDlg, {type:'image', title:titleDisabled+'', value:cfg.images, key:'disabled', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'image', title:titleDisabled+' Hover', value:cfg.images, key:'disabledHover', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'image', title:titleDisabled+' Pressed', value:cfg.images, key:'disabledDown', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'space', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'image', title:titleNormal+'', value:cfg.images, key:'normal', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'image', title:titleNormal+' Hover', value:cfg.images, key:'hover', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'image', title:titleNormal+' Pressed', value:cfg.images, key:'down', join:true});
		}

		if (cfg.clr && (hasText || isTextOnly)){
			eduLib.edtInputAdd(apd, tagDlg, {type:'space'});
			eduLib.edtInputAdd(apd, tagDlg, {type:'title', title:label2});
			eduLib.edtInputAdd(apd, tagDlg, {type:'color', askUse:true, title:titleDisabled, value:cfg.clr, key:'disabled', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'color', askUse:true, title:titleDisabled+' Hover', value:cfg.clr, key:'disabledHover', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'color', askUse:true, title:titleDisabled+' Pressed', value:cfg.clr, key:'disabledDown', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'space', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'color', askUse:true, title:titleNormal+' Hover', value:cfg.clr, key:'hover', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'color', askUse:true, title:titleNormal+' Pressed', value:cfg.clr, key:'down', join:true});
		}
	}
	else if (selectType == 'check'){
		titleNormal = apn.CExe.GL({ko:'미선택 상태',en:'Unchecked',ja:'未選択の状態'});
		var titleChecked = apn.CExe.GL({ko:'선택 상태',en:'Checked',ja:'選択状態'});

		if (!isTextOnly){
			eduLib.edtInputAdd(apd, tagDlg, {type:'title', title:label});
			eduLib.edtInputAdd(apd, tagDlg, {type:'image', title:titleChecked+'', value:cfg.images, key:'checked', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'image', title:titleChecked+' Hover', value:cfg.images, key:'checkedH', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'space', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'image', title:titleNormal+'', value:cfg.images, key:'normal', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'image', title:titleNormal+' Hover', value:cfg.images, key:'hover', join:true});
		}

		if (cfg.clr && (hasText || isTextOnly)){
			eduLib.edtInputAdd(apd, tagDlg, {type:'space'});
			eduLib.edtInputAdd(apd, tagDlg, {type:'title', title:label2});
			eduLib.edtInputAdd(apd, tagDlg, {type:'color', askUse:true, title:titleChecked, value:cfg.clr, key:'checked', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'color', askUse:true, title:titleChecked+' Hover', value:cfg.clr, key:'checkedH', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'space', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'color', askUse:true, title:titleNormal+' Hover', value:cfg.clr, key:'hover', join:true});
		}
	}
	else{
		if (!isTextOnly){
			eduLib.edtInputAdd(apd, tagDlg, {type:'title', title:label});
			eduLib.edtInputAdd(apd, tagDlg, {type:'image', title:titleNormal+'', value:cfg.images, key:'normal', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'image', title:titleNormal+' Hover', value:cfg.images, key:'hover', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'image', title:titleNormal+' Pressed', value:cfg.images, key:'down', join:true});

			if (selectType != 'simple'){
				eduLib.edtInputAdd(apd, tagDlg, {type:'space', join:true});
				eduLib.edtInputAdd(apd, tagDlg, {type:'image', title:titleDisabled, value:cfg.images, key:'disabled', join:true});
			}
		}

		if (cfg.clr && (hasText || isTextOnly)){
			eduLib.edtInputAdd(apd, tagDlg, {type:'space'});
			eduLib.edtInputAdd(apd, tagDlg, {type:'title', title:label2});
			eduLib.edtInputAdd(apd, tagDlg, {type:'color', askUse:true, title:titleNormal+' Hover', value:cfg.clr, key:'hover', join:true});
			eduLib.edtInputAdd(apd, tagDlg, {type:'color', askUse:true, title:titleNormal+' Pressed', value:cfg.clr, key:'down', join:true});
			if (selectType != 'simple'){
				eduLib.edtInputAdd(apd, tagDlg, {type:'color', askUse:true, title:titleDisabled, value:cfg.clr, key:'disabled', join:true});
			}
		}

		//	Hover 상태 Sync Group - 'normal', 'simple' Select Type에서만 제공함
		eduLib.edtInputAdd(apd, tagDlg, {type:'space'});
		eduLib.edtInputAdd(apd, tagDlg, {type:'title', title:apn.CExe.GL({ko:'버튼간 Hover/Pressed 상태 동기화',en:'Synchronize Hover/Pressed status with buttons',ja:'ボタン間Hover/Pressed状態を同期'})});
		eduLib.edtInputAdd(apd, tagDlg, {type:'text', title:apn.CExe.GL({ko:'그룹 지정',en:'Group',ja:'グループ指定'}), value:cfg, key:'hvrSync', comment:apn.CExe.GL({ko:'(편집자가 할당한 그룹ID)',en:'(Unique group ID assigned by user(editor))',ja:'（編集者が割り当てたグループID）'}), join:true});
	}

	eduLib.edtInputAdd(apd, tagDlg, {type:'space'});
	eduLib.edtInputAdd(apd, tagDlg, {type:'title', title:apn.CExe.GL({ko:'도움말(툴팁)',en:'Tooltip',ja:'ヘルプ（ツールチップ）'})});
	eduLib.edtInputAdd(apd, tagDlg, {type:'text', title:apn.CExe.GL({ko:'메시지',en:'Message',ja:'メッセージ'}), value:cfg, key:'ttip', join:true});
}

xa.edtOnSetState = function(apd, objID, state)
{
	var cfg = apd.wgtGetProperty(objID, 'cfg');

	if (cfg.images[state].mediaID) apd.wgtSetProperty(objID, 'apxMediaID', cfg.images[state].mediaID, apd.wgtGetProperty(objID, 'autoKeepSize'));
	else apd.wgtSetProperty(objID, 'apxMediaID', null);
}

xa.edtOnBuildState = function(prj, oId, pageID, ret)
{
	var cData = prj.pages[pageID].objects[oId].create.data;
	var type;

	if (cData && cData.properties && cData.properties.attrs){
		type = cData.properties.attrs.selectType;
	}

	if (type == 'tab' || type == 'toggle'){
		ret.disabled = 'Selected';
		ret.normal = 'Unselected';
	}
	else if (type == 'check'){
		ret.checked = 'Checked';
		ret.normal = 'Unchecked';
	}
	else{
		ret.normal = 'Normal';
		ret.disabled = 'Disabled';
	}
}

/*	Subclassing 지원을 위해서 다음과 같은 I/F를 제공함
	.I_edtOnConfig(apd, objID, local, tagDlg, tagLocal, tagOrg);
	.I_edtOnConfig_save(apd, objID, local, tagDlg, tagLocal, tagOrg);
	.I_edtOnConfig_title(apd, objID, tagDlg, state) // String, 각 State의 표시 이름을 가져옴
	.I_exeOnLoad_check(apx, oId)/Boolean/ // Return false이면 onLoad가 실패임
	.I_exeOnStateChange(apx, oId, state)
*/

xa.pubOnGetHTML = function(prj, pId, oId, opts)
{
	var ret = apn.IWidget.htmlRender(this, prj, pId, oId);//, undefined, {lineWidth:true, strokStyle:true});
	var html = '<div';

	ret.css += 'overflow:hidden;';

	if (ret.style.mediaID){
		ret.css += 'background-size:100% 100%;background-repeat:no-repeat;background-image: url('+apn.Project.mediaResolve(prj, ret.style.mediaID, false, true)+');';
	}

	var attr = '';
	var attrs = prj.pages[pId].objects[oId].create.data.properties.attrs;

	if (attrs.ttip){
		attr += ' title="'+apn.IWidget.exeFormatText(attrs.ttip, {xml:true,noTag:true})+'"';
	}

	html += ' style="'+ret.css+'"' + attr;
	html += ' class="apxWgt1'+(opts&&opts.addCls ? ' '+opts.addCls : '')+'"';
	if (!(opts&&opts.noId)) html += ' data-apx-id="'+oId+'">';
	else html += '>';

	/*	이 위젯은 주로 이미지로 사용되고, Text 부분이 구형 버전으로 되어 있으므로, Text set은 DOM 방식으로 하도록 함
	if (ret.style.text){}
	*/

	html += '</div>';

	return html;
}

uxWgtBtnImage = xa;
///////////////////////////////////////////////////////////////////////////////
// ux.wgt.imgSprite
var xa;

xa = apn.inheritWidget(apn.widgets['apn.wgt.image']);

xa.editor = {}; //%%INFO image2의 것이 있으면 무시하고 구성함. 이것을 image2의 정보를 사용할 정도로 관련성이 없는 위젯임.
xa.editor.iconThumb = 'DB/EDU/imgs/wgts/thumbs/spriteAnimation.png';
xa.editor.states = {play:'Play', loop:'Loop', stop:'Stop'};

xa.properties.state = 'stop';
xa.properties.attrs = {
	apxAnimate:true
	,cfg:{
		frames:[{sprite:{mediaID:undefined}, duration:42}] // Image frame을 사용하는 경우
		,idStep:'' // Step 연동할 위젯
	}
}

xa.onEdit = undefined;
xa.exeCreateTag = apn.widgets['apn.wgt.rect'].exeCreateTag;
xa.exeRenderTag = apn.widgets['apn.wgt.rect'].exeRenderTag;
xa.exeAssetLoad = undefined;

xa.exeAssetPreload = function(apx, oId, onEnd)
{
	var _this = this;
	var tag = apx.wgtTag(oId);

	tag.ctx = {};
	tag.ctx.frames = [];
	tag.ctx.cur = 0;
	tag.ctx.action = 0; // 0=stop, 1=play, 2=loop
	tag.ctx.lastTickTime = 0;

	var cfg = apx.wgtGetProperty(oId, 'cfg');
	var count = 0;
	var imgs = {};

	for(var i = 0; i < cfg.frames.length; i ++){
		buf = bx.$cloneObject({},cfg.frames[i]);
		buf.duration = bx.$checkNaN(parseInt(buf.duration));

		if (buf.sprite.mediaID && buf.duration){
			imgs['sp'+i] = {url:apx.mediaURL(cfg.frames[i].sprite.mediaID)};
			count ++;

			buf.img = imgs['sp'+i];
			tag.ctx.frames.push(buf);
		}
	}

	if (count){
		function onLoad(cntAll, cntSucc, cntErr)
		{
			onEnd();
			uxWgtImgSprite._frame(apx, tag, tag.ctx.cur);

			if (_this.exeOnCheckContentLoad){
				apx.fireEvent('contentLoad', 'i', oId, /*always*/true, /*immediately*/apx.project.property.allowImmediateContentLoad);
			}
		}
		new apn.CRscLoader().load(apx.project, imgs, onLoad);
	}
	else{
		onEnd();
	}
}

xa.exeOnLoad = function(apx, oId)
{
	var tag = apx.wgtTag(oId);
	var cfg = apx.wgtGetProperty(oId, 'cfg');

	if (bx.HCL.DV.isIE() && bx.HCL.DV.isIE() < 9){ // 현실적으로 미지원 브라우저는 IE밖에 없으므로 이렇게 처리함.
		tag.img = tag.$TAG('img', {style:'cursor:inherit;position:absolute;left:0px;top:0px;width:100%;height:100%;'});
	}
	else{
		tag.canvas = tag.$TAG('canvas', {style:'cursor:inherit;position:absolute;left:0px;top:0px;width:100%;height:100%;'});
		tag.canvas.width = parseInt(tag.style.width);
		tag.canvas.height = parseInt(tag.style.height);
	}
	uxWgtImgSprite._frame(apx, tag, tag.ctx.cur);

	//	Step 연동 Setup
	if (cfg.idStep){
		function onChangeStep(changeWgtId, value)
		{
			if (changeWgtId == cfg.idStep && value){
				//	Step에 의한 동작을 실행함. (Sprite은 Stop 상태로 있어야 정상 동작하게 됨. 강제 Stop 기능은 없음)
				if (!tag.ctx.frames[value.current]){
					apx.log(oId, 'Invalid frame was requested to display by step interface. FrameIndex='+value.current);
					return;
				}

				if (tag.ctx.cur != value.current && value.current < tag.ctx.frames.length){
					tag.ctx.cur = value.current;
					uxWgtImgSprite._frame(apx, tag, tag.ctx.cur);
				}
			}
		}
		apx.wgtListenProperty(oId, 'apxStep', onChangeStep);
	}
}

//	%%INFO Inherit되지 않는 API
xa.exeOnCheckContentLoad = function(prj, pId, oId)
{
	return {i:'Image'};
}

xa.exeSetState = function(apx, tag, /*String*/state, /*String*/prvState)
{
	if (state == 'stop'){
		this._stop(apx, tag, true);
	}
	else if (state == 'play'){
		tag.ctx.action = 1;
		tag.ctx.lastTickTime = 0;
		apx.fireEvent('animation', 'Start', apx.wgtId(tag));
	}
	else if (state == 'loop'){
		tag.ctx.action = 2;
		tag.ctx.lastTickTime = 0;
		apx.fireEvent('animation', 'Start', apx.wgtId(tag));
	}
}

xa.exeOnTick = function(apx, oId, tmTick)
{
	var tag = apx.wgtTag(oId);

	if (!tag.ctx || !tag.ctx.frames.length) return;
	if (tag.ctx.action == 0) return;

	tag.ctx._onceStarted = true; // 시작을 하지 않은 경우, 최소 상태에 의한 'stop' event를 Fire하지 않기 위해서 FLAG사용

	var change;

	if (tag.ctx.lastTickTime == 0){ // Init/reset start
		tag.ctx.cur = 0;
		change = true;
	}
	else if (tag.ctx.lastTickTime < tmTick){
		change = true;
		if (tag.ctx.action == 2){ // Loop
			tag.ctx.cur = (tag.ctx.cur+1)%tag.ctx.frames.length;
		}
		else{ // Play
			tag.ctx.cur ++;
			if (tag.ctx.cur == tag.ctx.frames.length){ // Stop
				tag.ctx.cur = 0;
				this._stop(apx, tag);
				change = false;
			}
		}
	}

	if (change){
		tag.ctx.lastTickTime = tmTick + parseInt(tag.ctx.frames[tag.ctx.cur].duration); // String으로 바뀌는 경우가 있음
		uxWgtImgSprite._frame(apx, tag, tag.ctx.cur);
	}
}

xa._frame = function(apx, tag, cur)
{
	//	Preload에서 tag.canvas의 생성 전에 호출할 수도 있음. 이미 로딩된 Asset의 경우
	if (tag.ctx.frames[cur] && tag.ctx.frames[cur].img.image){
		if (tag.canvas){
			var ctxt = tag.canvas.getContext('2d');

			ctxt.clearRect(0, 0, ctxt.canvas.width, ctxt.canvas.height);
			ctxt.drawImage(tag.ctx.frames[cur].img.image, 0, 0, ctxt.canvas.width, ctxt.canvas.height);
		}
		else if (tag.img){
			tag.img.src = tag.ctx.frames[cur].img.url;
		}
	}
}

xa._stop = function(apx, tag, /*Boolean*/roundUp)
{
	tag.ctx.action = 0;
	tag.ctx.lastTickTime = 0;
	
	if (roundUp && tag.ctx.frames[0]&&tag.ctx.frames[0].sprite.mediaID){
		tag.ctx.cur = 0;
		uxWgtImgSprite._frame(apx, tag, 0);
	}

	if (tag.ctx._onceStarted) apx.fireEvent('animation', 'End', apx.wgtId(tag));
}

xa.edtSetupStep = function(apd, oId, tagDlg, cfg)
{
	var page = apd.getScreenData();
	var steps = [{title:apn.CExe.GL({ko:'[없음]',en:'[None]',ja:'[なし]'}), value:''}];

	for(var i in page.objects){
		if (page.objects[i].create && page.objects[i].create.data && page.objects[i].create.data.properties && page.objects[i].create.data.properties.attrs && page.objects[i].create.data.properties.attrs.apxStep){
			steps.push({value:i, title:apd.itrGetObjectTitle(i)});
		}
	}

	eduLib.edtInputAdd(apd, tagDlg, {type:'select', options:steps, title:apn.CExe.GL({ko:'연동할 위젯',en:'Widget to interface with',ja:'連動するウィジェット'}), key:'idStep', value:cfg, join:true});
}

xa.edtOnConfig = function(apd, objID)
{
	var cfg = apd.wgtGetProperty(objID, 'cfg');
	var tagDlg;

	function onOK()
	{
		eduLib.edtInputApplyAll(apd, tagDlg.tagTab1);
		eduLib.edtInputApplyAll(apd, tagDlg.tagTab2);

		if (cfg.frames[0].sprite.mediaID) apd.wgtSetProperty(objID, 'apxMediaID', cfg.frames[0].sprite.mediaID);

		apd.wgtSetProperty(objID, 'cfg', cfg);
		apd.wgtRefreshUI(objID);
	}

	var tabs = {tagTab1:true, tagTab2:true};

	function onTab()
	{
		for(var i in tabs){
			if (tabs[i]){
				if (this.id == i){
					tagDlg[i].style.display = 'block';
					tagDlg.tagTab.$$(i).style.borderStyle = 'solid solid none solid';
				}
				else{
					tagDlg[i].style.display = 'none';
					tagDlg.tagTab.$$(i).style.borderStyle = 'none none solid none';
				}
			}
		}

		uxWgtImgSprite._uiLastSetupTab = this.id;
	}

	if (tagDlg = apd.dlgDoModal(600, Math.ceil(bx.UX.height*0.9), onOK)){
		var cssTabDlg = apn.CExe.CSS_SETUP_PANE+'height:'+(tagDlg.clientHeight-40)+'px';

		tagDlg.tagTab = tagDlg.$TAG('div', {style:'position:relative;font-weight:bold;width:100%;height:26px;padding-bottom:14px;'}); //26+14
		tagDlg.tagTab.innerHTML = '<span id="tagTab1" style="'+apn.CExe.CSS_SETUP_TAB+'">'+apn.CExe.GL({ko:'스프라이트',en:'Sprite Sheet',ja:'スプライト'})+'</span>'+
			'<span id="tagTab2" style="'+apn.CExe.CSS_SETUP_TAB+'">'+apn.CExe.GL({ko:'스텝 연동',en:'Step Interface',ja:'ステップ連動'})+'</span>'+apn.CExe.CSS_SETUP_TAB_END;
		tagDlg.tagTab.$$('tagTab1').onclick = tagDlg.tagTab.$$('tagTab2').onclick = onTab;

		//	Body
		tagDlg.tagTab1 = tagDlg.$TAG('div', {style:cssTabDlg});
		tagDlg.tagTab2 = tagDlg.$TAG('div', {style:cssTabDlg});

		//	Frame
		eduLib.edtInputAdd(apd, tagDlg.tagTab1, {type:'table', value:cfg.frames, options:{th:[apn.CExe.GL({ko:'프레임 이미지',en:'Frame image',ja:'フレーム画像'}), apn.CExe.GL({ko:'프레임 시간',en:'Duration',ja:'フレーム時間'})+'[ms]'], add:true, remove:true, order:true}, td:[{type:'image',key:'sprite'}, {type:'text',key:'duration',width:'110px'}], join:true});
		eduLib.edtInputAdd(apd, tagDlg.tagTab1, {type:'message', value:'※ '+apn.CExe.GL({ko:'과도한 이미지의 사용은 HTML5 컨텐츠의 성능을 크게 저하시킵니다. 그러한 경우, Video로 제작하거나 Scene Animation으로 편집하는 것이 좋습니다.',en:'Excessive image resources will slow down HTML5 contents. In that case, video or Scene Animation is better.',ja:'過度な画像の使用は、HTML5コンテンツのパフォーマンスを大幅に低下させます。その場合、Videoでの製作や、Scene Animationでの編集をお勧めします。'}), join:true});

		//	Step
		this.edtSetupStep(apd, objID, tagDlg.tagTab2, cfg);

		if (uxWgtImgSprite._uiLastSetupTab !== undefined && tagDlg.tagTab.$$(uxWgtImgSprite._uiLastSetupTab)){
			tagDlg.tagTab.$$(uxWgtImgSprite._uiLastSetupTab).onclick();
		}
		else{
			tagDlg.tagTab.$$('tagTab1').onclick(); // Init Tab
		}
		tagDlg.tagTab.$$('tagBlank').style.width = (tagDlg.clientWidth - tagDlg.tagTab.$$('tagBlank').offsetLeft - 1)+'px';
	}
}

xa.edtOnRemapObjectID = function(apd, data, /*Object*/map)
{
	if (data && data.properties && data.properties.attrs && data.properties.attrs.cfg){
		var cfg = data.properties.attrs.cfg;

		if (cfg.idStep){
			if (map[cfg.idStep]) cfg.idStep = map[cfg.idStep];
			else if (!apd.getScreenData().objects[cfg.idStep]) cfg.idStep = '';
		}
	}
}

uxWgtImgSprite = xa;


///////////////////////////////////////////////////////////////////////////////
// ux.wgt.shtSprite
/*
	%%INFO ux.wgt.imgSprite를 Inherit하고 구조는 비슷하지만 실행 동작 차이로
	별도 구현된 함수가 많음

	[Scripting]
		외부에서 wgt.setData(,'sheet', {})

		{
			type:'simple' //%%INFO w:,h:가 없을 경우, Image를 Loading해서 cnt로 분할함. 이 경우, cols, x, y, 무시함
			data:{img:{mediaID:undefined}, w:64, h:64, cnt:1, cols:0, x:0, y:0, tm:42}}
		}

		wgt.setData(getWidget('ani'), 'sheet', {type:'simple', data:{img:{mediaID:img}, w:480, h:480, cnt:12, tm:40}});
		wgt.setData(getWidget('ani'), 'sheet', {type:'simple', data:{img:{mediaID:img}, cnt:12, tm:40}});
*/
xa = apn.inheritWidget(uxWgtImgSprite);

xa.properties.attrs.imgCropSprite = true; // CImage Object에게 Draw 방식을 지시하는 것임. CImage와의 사적 구현임.

/*
	's'=Simple
	'f'=Adobe Animate (JSON)
*/
xa.properties.attrs.ver = 2; // Canvas로 구성
xa.properties.attrs.cfg = {
	ty:'s'
	,mr:0 //Mirror, 0=None, 1=X, 2=Y, 3=XY
	,s:{img:{mediaID:undefined}, w:64, h:64, cnt:1, cols:0, x:0, y:0, tm:42, tmSet:''}
	,f:{file:{size:0, data:''}, edt:{}} // img, tm은 s{}의 것을 사용함. edt{}는 편집기 화면에 첫 Frame 표시 정보이며 x:,y:,w:,h:
	,idStep:'' // Step 연동할 위젯
}

xa.scriptInfo = {
	wgtData:{sheet:{help:"{type:'simple', data:{img:{mediaID:id}, w:Number, h:Number, cnt:Number, x:Number, y:Number, tm:Msec}\nSprite sheet data.", type:'so'}}
	,wgtRun:{
		showFrame:{param:"1-based Number", help:{ko:"지정된 프레임을 표시합니다.", en:"Show the designated frame", ja:"指定されたフレームを表示します。"}}
	}
}

xa.exeCreateTag = apn.widgets['apn.wgt.rect'].exeCreateTag;

xa.exeRenderTag = function(viewer, canvas, tag, objData, zx, zy)/*Element*/
{
	apn.widgets['apn.wgt.rect'].exeRenderTag.call(this, viewer, canvas, tag, objData, zx, zy);

	/*	이 함수를 추가하기 위하여, exeRenderTag()를 별도로 정의함
		'apn.wgt.rect'에도 이 함수가 있지만 Inherit할 필요는 없고 바로 교체해도 됨.
	*/
	tag.tagOnPostResize = function(apx, tag)
	{
		//	Ver1 - Tag가 Resize되면 내부 Cell도 Scale함
		if (tag.ctx.cellHolder){
			var cfg = apx.wgtGetProperty(tag.apnOID, 'cfg');
			var ratioZoom = 1;
			var ratioX = parseInt(tag.style.width)/(cfg.s.w*ratioZoom);
			var ratioY = parseInt(tag.style.height)/(cfg.s.h*ratioZoom);

			ratioX = parseInt(tag.style.width)/cfg.s.w;
			ratioY = parseInt(tag.style.height)/cfg.s.h;

			tag.ctx.cellHolder.$CSS({transform:'scale('+ratioX*ratioZoom+','+ratioY*ratioZoom+')', transformOrigin:'0px 0px'});
		}
	}

	return tag;
}

xa.exeAssetPreload = function(apx, oId, onEnd)
{
	var tag = apx.wgtTag(oId);

	tag.ctx = {};
	tag.ctx.cur = 0;
	tag.ctx.action = 0; // 0=stop, 1=play, 2=loop
	tag.ctx.lastTickTime = 0;
	tag.ctx.frames = []; // {x:, y:, w:, h:, tm:}

	var cfg = apx.wgtGetProperty(oId, 'cfg');

	if (cfg.s.img.mediaID){
		var imgs = {};
		var _this = this;

		imgs.sp = {url:apx.mediaURL(cfg.s.img.mediaID)};

		function onLoad(cntAll, cntSucc, cntErr)
		{
			tag.ctx.image = imgs.sp.image;

			_this._loadSpriteSheet(apx, oId, cfg);

			onEnd();

			if (_this.exeOnCheckContentLoad){
				apx.fireEvent('contentLoad', 'i', oId, /*always*/true, /*immediately*/apx.project.property.allowImmediateContentLoad);
			}
		}
		new apn.CRscLoader().load(apx.project, imgs, onLoad);
	}
	else{
		onEnd();
	}
}

//	%%INFO Inherit되지 않는 API
xa.exeOnCheckContentLoad = function(prj, pId, oId)
{
	return {i:'Image'};
}

xa.exeOnLoad = function(apx, oId)
{
	var tag = apx.wgtTag(oId);
	var cfg = apx.wgtGetProperty(oId, 'cfg');

	/*	Script:'sheet'
	*/
	var _this = this;

	function onSetSheet(changeWgtId, value)
	{
		if (changeWgtId == oId && value && value.type && value.data && value.data.img && value.data.img.mediaID && value.data.cnt){
			if (value.type == 'simple'){
				if (!value.data.w || !value.data.h){ // 크기가 없는 경우, 이미지를 Loading해서 cnt로 이미지 크기를 균등 분할함
					var imgs = {};

					imgs.sht = {url:apx.mediaURL(value.data.img.mediaID)};

					function onLoadSheet(cntAll, cntSucc, cntErr)
					{
						if (cntAll == cntSucc){
							tag.ctx.image = imgs.sp.image;

							value.data.h = imgs.sht.image.height;
							value.data.w = Math.max(1,imgs.sht.image.width/value.data.cnt);

							_this._loadSpriteSheet(apx, oId, {ty:'s', s:value.data});
						}
						else{
							//apx.log(oId, 'Failed to load '+cntErr+' images.');
						}
					}
					new apn.CRscLoader().load(apx.project, imgs, onLoadSheet);
				}
				else{
					_this._loadSpriteSheet(apx, oId, {ty:'s', s:value.data});
				}
			}
		}
	}
	apx.wgtListenProperty(oId, 'sheet', onSetSheet);

	//	Step 연동 Setup
	if (cfg.idStep){
		var _this = this;

		function onChangeStep(changeWgtId, value)
		{
			if (changeWgtId == cfg.idStep && value){
				//	Step에 의한 동작을 실행함. (Sprite은 Stop 상태로 있어야 정상 동작하게 됨. 강제 Stop 기능은 없음)
				if (!tag.ctx.frames[value.current]){
					apx.log(oId, 'Invalid frame was requested to display by step interface. FrameIndex='+value.current);
					return;
				}

				if (tag.ctx.cur != value.current && value.current < tag.ctx.frames.length){
					tag.ctx.cur = value.current;
					_this._render(apx, tag, tag.ctx.frames[tag.ctx.cur]);
				}
			}
		}
		apx.wgtListenProperty(oId, 'apxStep', onChangeStep);
	}
}

xa._loadSpriteSheet = function(apx, oId, cfg)
{
	var tag = apx.wgtTag(oId);

	if (!tag) return; // Image Load에 의한 Async 무효 Call

	var tmChange = [];

	if (cfg.s.tmSet){ // ;로 구분된 ms
		var token = cfg.s.tmSet.split(';');

		for(var i = 0; i < token.length; i ++){
			if (token[i] && parseInt(token[i])){
				tmChange[i] = parseInt(token[i]);
			}
		}
	}

	if (cfg.ty == 's' && cfg.s.img.mediaID && cfg.s.w && cfg.s.h && cfg.s.cnt && cfg.s.tm){ // Simple
		var cols = cfg.s.cols || cfg.s.cnt;
		var row = 0;
		var sx = x = bx.$checkNaN(parseInt(cfg.s.x)) || 0;
		var y = bx.$checkNaN(parseInt(cfg.s.y)) || 0;

		for(var i = 0; i < cfg.s.cnt; i ++){
			tag.ctx.frames[i] = {x:x, y:y, w:cfg.s.w, h:cfg.s.h, offX:0, offY:0, tm:tmChange[i] ? tmChange[i] : cfg.s.tm};
			x += cfg.s.w;

			if ((i+1)%cols == 0){
				x = sx;
				y += cfg.s.h;
			}
		}
	}
	else if (cfg.ty == 'f' && cfg.f && cfg.f.file && cfg.f.file.data){
		try{
			var frameInfo = JSON.parse(cfg.f.file.data);
		}
		catch(ex){
			apx.log(oId, 'JSON file parsing error:'+ex);
		}

		if (frameInfo && frameInfo.frames){
			var idx = 0;

			for(var i in frameInfo.frames){
				if (frameInfo.frames[i].frame){
					tag.ctx.frames.push({x:frameInfo.frames[i].frame.x, y:frameInfo.frames[i].frame.y, w:frameInfo.frames[i].frame.w, h:frameInfo.frames[i].frame.h, offX:frameInfo.frames[i].spriteSourceSize.x, offY:frameInfo.frames[i].spriteSourceSize.y, tm:tmChange[idx] ? tmChange[idx] : cfg.s.tm});
					idx ++;
				}
			}
		}
	}

	/*	%%INFO 2018/10
		IE나 FireFox가 ZOOM 상황에서 Tag 좌표가 흔들림. 따라서 Sprite sheet의 경우, 흔들리게 됨
		따라서, Sprite sheet을 Canvas 방식으로 수정함
	*/
	tag.ctx.useCanvas = false;

	if (apx.wgtGetProperty(oId, 'ver') == 2 && !(bx.HCL.DV.isIE() && bx.HCL.DV.isIE() < 9)){ // 현실적으로 미지원 브라우저는 IE밖에 없으므로 이렇게 처리함.
		tag.ctx.useCanvas = true;
	}

	tag.ctx.cellInfo = cfg;

	if (!tag.ctx.useCanvas){
		if (cfg.mr){
			tag.ctx.cellHolderMr = tag.ctx.cellHolderMr || tag.$TAG('div', {style:'cursor:inherit;width:100%;height:100%;'});
			tag.ctx.cellHolder = tag.ctx.cellHolder || tag.ctx.cellHolderMr.$TAG('div');

			if (cfg.mr == 1){ // X
				tag.ctx.cellHolderMr.$CSS('transformOrigin', '50% 50%');
				tag.ctx.cellHolderMr.$CSS('transform', 'rotateY(180deg)');
			}
			else if (cfg.mr == 2){ // Y
				tag.ctx.cellHolderMr.$CSS('transformOrigin', '50% 50%');
				tag.ctx.cellHolderMr.$CSS('transform', 'rotateX(180deg)');
			}
			else if (cfg.mr == 3){ // X&Y
				tag.ctx.cellHolderMr.$CSS('transformOrigin', '50% 50%');
				tag.ctx.cellHolderMr.$CSS('transform', 'rotateX(180deg) rotateY(180deg)');
			}
		}
		else{
			tag.ctx.cellHolder = tag.ctx.cellHolder || tag.$TAG('div');
		}
		tag.ctx.cellHolder.$A({style:'cursor:inherit;width:'+cfg.s.w+'px;height:'+cfg.s.h+'px'});

		tag.ctx.cell = tag.ctx.cell || tag.ctx.cellHolder.$TAG('div');
		tag.ctx.cell.$A({style:'cursor:inherit;position:absolute;left:0px;top:0px;width:'+cfg.s.w+'px;height:'+cfg.s.h+'px'});
		
		if (tag.ctx.frames.length){
			//	Widget이 축소가 되어 있을 수 있으므로, Image의 축소는 CSS3 scale()을 사용함
			tag.tagOnPostResize(apx, tag);
			tag.ctx.cell.style.backgroundImage = 'url('+apx.mediaURL(cfg.s.img.mediaID)+')';
			tag.ctx.cell.style.backgroundRepeat = 'no-repeat';

			var startFrame = 0;

			if (tag.ctx._delayedFrame !== undefined && tag.ctx._delayedFrame >= 0 && tag.ctx._delayedFrame < tag.ctx.frames.length){
				startFrame = tag.ctx._delayedFrame;
				delete tag.ctx._delayedFrame;
			}

			this._render(apx, tag, tag.ctx.frames[startFrame]);
		}
	}
	else{
		tag.ctx.cell = tag.$TAG('canvas', {style:'cursor:inherit;position:absolute;left:0px;top:0px;width:100%;height:100%;'});
		tag.ctx.cell.width = parseInt(tag.style.width);
		tag.ctx.cell.height = parseInt(tag.style.height);

		tag.ctx.cvsCtx = tag.ctx.cell.getContext('2d');

		if (cfg.mr){
			if (cfg.mr == 1){ // X
				tag.ctx.cell.$CSS('transformOrigin', '50% 50%');
				tag.ctx.cell.$CSS('transform', 'rotateY(180deg)');
			}
			else if (cfg.mr == 2){ // Y
				tag.ctx.cell.$CSS('transformOrigin', '50% 50%');
				tag.ctx.cell.$CSS('transform', 'rotateX(180deg)');
			}
			else if (cfg.mr == 3){ // X&Y
				tag.ctx.cell.$CSS('transformOrigin', '50% 50%');
				tag.ctx.cell.$CSS('transform', 'rotateX(180deg) rotateY(180deg)');
			}
		}

		if (tag.ctx.frames.length){
			var startFrame = 0;

			if (tag.ctx._delayedFrame !== undefined && tag.ctx._delayedFrame >= 0 && tag.ctx._delayedFrame < tag.ctx.frames.length){
				startFrame = tag.ctx._delayedFrame;
				delete tag.ctx._delayedFrame;
			}

			this._render(apx, tag, tag.ctx.frames[startFrame]);
		}
	}
}

xa.exeOnTick = function(apx, oId, tmTick)
{
	var tag = apx.wgtTag(oId);

	if (!tag.ctx.frames.length) return;
	if (tag.ctx.action == 0) return;

	tag.ctx._onceStarted = true;

	var change;

	if (tag.ctx.lastTickTime == 0){ // Init/reset start
		tag.ctx.cur = 0;
		change = true;
	}
	else if (tag.ctx.lastTickTime < tmTick){
		change = true;
		if (tag.ctx.action == 2){ // Loop
			tag.ctx.cur = (tag.ctx.cur+1)%tag.ctx.frames.length;
		}
		else{ // Play
			tag.ctx.cur ++;
			if (tag.ctx.cur == tag.ctx.frames.length){ // Stop
				tag.ctx.cur = 0;
				this._stop(apx, tag);
				change = false;
			}
		}
	}

	if (change){
		tag.ctx.lastTickTime = tmTick + tag.ctx.frames[tag.ctx.cur].tm;

		this._render(apx, tag, tag.ctx.frames[tag.ctx.cur]);
	}
}

xa.exePropSet = function(apx, oId, key, value, /*Boolean|undefined*/check)
{
	if (key == 'showFrame'){ // run()
		if (check){
			 return true;
		}
		else{
			var tag = apx.wgtTag(oId);

			if (tag.ctx){
				if (tag.ctx.frames.length){
					if (value > 0 && value <= tag.ctx.frames.length){
						this._render(apx, tag, tag.ctx.frames[value-1]);
					}
					else{
						apx.log(oId, 'Invalid frame was requested by Widget:run(). FrameIndex='+value);
					}
				}
				else{
					tag.ctx._delayedFrame = value-1;
				}
			}
		}
	}
}

xa._render = function(apx, tag, frm)
{

	if (tag.ctx.useCanvas){
		if (tag.ctx.image){
			tag.ctx.cvsCtx.clearRect(0, 0, tag.ctx.cell.width, tag.ctx.cell.height);
			tag.ctx.cvsCtx.drawImage(tag.ctx.image, frm.x, frm.y, frm.w, frm.h, Math.round(frm.offX*(1/apx.getZoomX())), Math.round(frm.offY*(1/apx.getZoomY())), tag.ctx.cell.width-Math.round(frm.offX*(1/apx.getZoomX())), tag.ctx.cell.height-Math.round(frm.offY*(1/apx.getZoomY())));
		}
	}
	else{
		var buf = tag.ctx.cell.style;

		if (buf.left != frm.offX+'px') buf.left = frm.offX+'px';
		if (buf.top != frm.offY+'px') buf.top = frm.offY+'px';
		if (buf.width != frm.w+'px') buf.width = frm.w+'px';
		if (buf.height != frm.h+'px') buf.height = frm.h+'px';

		buf.backgroundPosition = -(frm.x)+'px '+-(frm.y)+'px';
	}
}

xa._stop = function(apx, tag, /*Boolean*/roundUp)
{
	tag.ctx.action = 0;
	tag.ctx.lastTickTime = 0;

	if (roundUp && tag.ctx.frames[0]){
		this._render(apx, tag, tag.ctx.frames[0]);
	}
	if (tag.ctx._onceStarted) apx.fireEvent('animation', 'End', apx.wgtId(tag));
}

xa.edtOnConfig = function(apd, objID)
{
	var cfg = apd.wgtGetProperty(objID, 'cfg');

	cfg.f = cfg.f || {file:{size:0, data:''}, edt:{}};

	var tagDlg;

	function onOK()
	{
		eduLib.edtInputApplyAll(apd, tagDlg.tagTab1);
		eduLib.edtInputApplyAll(apd, tagDlg.tagTab2);

		if (cfg.s.img.mediaID) apd.wgtSetProperty(objID, 'apxMediaID', cfg.s.img.mediaID);

		if (cfg.ty == 'f'){ // Adobe 경우, Editor를 위해서 첫 Frame 표시 정보를 저장함
			cfg.f.edt.w = cfg.f.edt.h = 0; //초기화

			if (cfg.f.file.data){
				try{
					var frameInfo = JSON.parse(cfg.f.file.data);
				}
				catch(ex){
				}

				if (frameInfo && frameInfo.frames){
					for(var i in frameInfo.frames){
						cfg.f.edt.x = frameInfo.frames[i].frame.x;
						cfg.f.edt.y = frameInfo.frames[i].frame.y;
						cfg.f.edt.w = frameInfo.frames[i].frame.w;
						cfg.f.edt.h = frameInfo.frames[i].frame.h;
						cfg.f.edt.offX = frameInfo.frames[i].spriteSourceSize.x;
						cfg.f.edt.offY = frameInfo.frames[i].spriteSourceSize.y;
						cfg.s.w = frameInfo.frames[i].sourceSize.w;
						cfg.s.h = frameInfo.frames[i].sourceSize.h;
						break;
					}
				}
			}
		}apd.wgtSetProperty(objID, 'ver', 2);
		apd.wgtSetProperty(objID, 'cfg', cfg);
		apd.wgtRefreshUI(objID);
	}

	function onChangeType()
	{
		if (this.value == 's'){
			eduLib.edtInputShow(apd, tagDlg.tagTab1, 's', true);
			eduLib.edtInputShow(apd, tagDlg.tagTab1, 'f', false);
		}
		else{
			eduLib.edtInputShow(apd, tagDlg.tagTab1, 'f', true);
			eduLib.edtInputShow(apd, tagDlg.tagTab1, 's', false);
		}
	}

	var tabs = {tagTab1:true, tagTab2:true};

	function onTab()
	{
		for(var i in tabs){
			if (tabs[i]){
				if (this.id == i){
					tagDlg[i].style.display = 'block';
					tagDlg.tagTab.$$(i).style.borderStyle = 'solid solid none solid';
				}
				else{
					tagDlg[i].style.display = 'none';
					tagDlg.tagTab.$$(i).style.borderStyle = 'none none solid none';
				}
			}
		}

		uxWgtShtSprite._uiLastSetupTab = this.id;
	}

	if (tagDlg = apd.dlgDoModal(600, 700, onOK)){
		var cssTabDlg = apn.CExe.CSS_SETUP_PANE+'height:'+(tagDlg.clientHeight-40)+'px';

		tagDlg.tagTab = tagDlg.$TAG('div', {style:'position:relative;font-weight:bold;width:100%;height:26px;padding-bottom:14px;'}); //26+14
		tagDlg.tagTab.innerHTML = '<span id="tagTab1" style="'+apn.CExe.CSS_SETUP_TAB+'">'+apn.CExe.GL({ko:'스프라이트',en:'Sprite Sheet',ja:'スプライト'})+'</span>'+
			'<span id="tagTab2" style="'+apn.CExe.CSS_SETUP_TAB+'">'+apn.CExe.GL({ko:'스텝 연동',en:'Step Interface',ja:'ステップ連動'})+'</span>'+apn.CExe.CSS_SETUP_TAB_END;
		tagDlg.tagTab.$$('tagTab1').onclick = tagDlg.tagTab.$$('tagTab2').onclick = onTab;

		//	Body
		tagDlg.tagTab1 = tagDlg.$TAG('div', {style:cssTabDlg});
		tagDlg.tagTab2 = tagDlg.$TAG('div', {style:cssTabDlg});

		eduLib.edtInputAdd(apd, tagDlg.tagTab1, {type:'image', title:apn.CExe.GL({ko:'스프라이트 시트 이미지',en:'Sprite sheet image',ja:'スプライトシートの画像'}), value:cfg.s, key:'img', join:true});
		eduLib.edtInputAdd(apd, tagDlg.tagTab1, {type:'message', value:'※ '+apn.CExe.GL({ko:'과도한 이미지의 사용은 HTML5 컨텐츠의 성능을 크게 저하시킵니다. 그러한 경우, Video로 제작하거나 Scene Animation으로 편집하는 것이 좋습니다.',en:'Excessive image resources will slow down HTML5 contents. In that case, video or Scene Animation is better.',ja:'過度な画像の使用は、HTML5コンテンツのパフォーマンスを大幅に低下させます。その場合、Videoでの製作や、Scene Animationでの編集をお勧めします。'}), join:true});
		eduLib.edtInputAdd(apd, tagDlg.tagTab1, {type:'space'});
		eduLib.edtInputAdd(apd, tagDlg.tagTab1, {type:'title', title:apn.CExe.GL({ko:'프레임 구성 정보',en:'Frame information',ja:'フレーム構成情報'})});
		eduLib.edtInputAdd(apd, tagDlg.tagTab1, {type:'select', title:apn.CExe.GL({ko:'스프라이트 시트 구성',en:'Sprite sheet type',ja:'スプライトシートの構成'}), value:cfg, key:'ty', options:[{title:'Simple', value:'s'},{title:'Adobe Animate - JSON', value:'f'}], onchange:onChangeType, join:true});
		eduLib.edtInputAdd(apd, tagDlg.tagTab1, {type:'number', title:apn.CExe.GL({ko:'프레임 시간',en:'Duration',ja:'フレーム時間'})+'[ms] (m)', value:cfg.s, key:'tm', join:true});
		eduLib.edtInputAdd(apd, tagDlg.tagTab1, {type:'text', title:apn.CExe.GL({ko:'프레임 시간 변경',en:'Duration change',ja:'フレーム時間の変更'})+'[ms;...]', value:cfg.s, key:'tmSet', join:true});
		eduLib.edtInputAdd(apd, tagDlg.tagTab1, {id:'s', type:'number', title:apn.CExe.GL({ko:'프레임 셀 너비',en:'Cell width',ja:'フレームセルの幅'})+'[px] (m)', value:cfg.s, key:'w', join:true});
		eduLib.edtInputAdd(apd, tagDlg.tagTab1, {id:'s', type:'number', title:apn.CExe.GL({ko:'프레임 셀 높이',en:'Cell height',ja:'フレームセルの高さ'})+'[px](m)', value:cfg.s, key:'h', join:true});
		eduLib.edtInputAdd(apd, tagDlg.tagTab1, {id:'s', type:'number', title:apn.CExe.GL({ko:'프레임 셀 개수',en:'Cell count',ja:'フレームセル数'})+' (m)', value:cfg.s, key:'cnt', join:true});
		eduLib.edtInputAdd(apd, tagDlg.tagTab1, {id:'s', type:'number', title:apn.CExe.GL({ko:'프레임 셀 열의 수',en:'Column count',ja:'フレームセル列の数'}), value:cfg.s, key:'cols', comment:'('+apn.CExe.GL({ko:'1개 행으로 구성된 경우, 0을 입력',en:'0 if cells are aligned in one line',ja:'1つの行で構成された場合、0を入力'})+')', join:true});
		eduLib.edtInputAdd(apd, tagDlg.tagTab1, {id:'s', type:'number', title:apn.CExe.GL({ko:'시작 X좌표',en:'Start X',ja:'開始X座標'})+'[px]', value:cfg.s, key:'x', join:true});
		eduLib.edtInputAdd(apd, tagDlg.tagTab1, {id:'s', type:'number', title:apn.CExe.GL({ko:'시작 Y좌표',en:'Start Y',ja:'開始Y座標'})+'[px]', value:cfg.s, key:'y', join:true});

		eduLib.edtInputAdd(apd, tagDlg.tagTab1, {id:'f', type:'file', title:apn.CExe.GL({ko:'프레임 구성 정보 파일',en:'Frame information file',ja:'フレーム構成情報ファイル'}), value:cfg.f, key:'file', join:true});

		//	Mirror
		eduLib.edtInputAdd(apd, tagDlg.tagTab1, {type:'space'});
		eduLib.edtInputAdd(apd, tagDlg.tagTab1, {type:'title', title:apn.CExe.GL({ko:'대칭 변환',en:'Mirror transformation',ja:'対称変換'})});
		eduLib.edtInputAdd(apd, tagDlg.tagTab1, {type:'select', title:apn.CExe.GL({ko:'방향',en:'Direction',ja:'方向'}), value:cfg, key:'mr', options:[{title:apn.CExe.GL({ko:'가로',en:'Horizontal',ja:'横'}), value:1},{title:apn.CExe.GL({ko:'세로',en:'Vertical',ja:'縦'}), value:2},{title:apn.CExe.GL({ko:'가로&세로',en:'Both',ja:'横＆縦'}), value:3},{title:apn.CExe.GL({ko:'안함',en:'None',ja:'無効'}), value:0}], join:true});

		//	Step
		uxWgtImgSprite.edtSetupStep(apd, objID, tagDlg.tagTab2, cfg);

		if (uxWgtShtSprite._uiLastSetupTab !== undefined && tagDlg.tagTab.$$(uxWgtShtSprite._uiLastSetupTab)){
			tagDlg.tagTab.$$(uxWgtShtSprite._uiLastSetupTab).onclick();
		}
		else{
			tagDlg.tagTab.$$('tagTab1').onclick(); // Init Tab
		}

		tagDlg.tagTab.$$('tagBlank').style.width = (tagDlg.clientWidth - tagDlg.tagTab.$$('tagBlank').offsetLeft - 1)+'px';
	}
}

/*	Return: undefined이면 크기를 알 수 없는 상황
	{w:,h:}
*/
xa.edtOnFitToSize = function(apd, objID, /*Object|undefined*/attrs)/*undefined|{w:,h:}*/
{
	if (attrs.cfg.s && attrs.cfg.s.w && attrs.cfg.s.h){
		return {w:attrs.cfg.s.w, h:attrs.cfg.s.h};
	}
}

uxWgtShtSprite = xa;


///////////////////////////////////////////////////////////////////////////////
// ux.wgt.DIV
/*
	innerHTML의 편집을 지원하므로

	wgt.setData/getData
		HTML
			(이 위젯은 주로 외부에서 직접 innerHTML하므로 필요는 없느나 기능은 제공함)
*/

var xa = {}

xa.styleMap = {
	title:true
	,visibility:true
	,font:true, fontSize:true
	,alpha:true
	,angle:true
	,dragX:true, dragY:true, dragInParent:true, dragContainParent:true
}

xa.scriptInfo = {
	wgtData:{HTML:{help:{ko:"String\nDIV의 'innerHTML'에 지정할 HTML입니다.",en:"String\nHTML string to be set as 'innerHTML'."}}}
}

xa.editor = {
	iconThumb:'DB/ux/imgs/wgts/thumbs/tag.png'
}

xa.properties = {
	attrs:{
		HTML:''
	}
}

xa.createAsCanvasObject = apn.widgets['apn.wgt.rect'].createAsCanvasObject; //%INFO ADD할 경우가 없으므로 사용되지 않는 함수임
xa.exeRenderTag = apn.widgets['apn.wgt.rect'].exeRenderTag;
xa.exeCreateTag = apn.widgets['apn.wgt.rect'].exeCreateTag;

xa.exeOnLoad = function(apx, oId)
{
	this._htmlSet(apx, oId);

	var _this = this;

	//	HTML set, <body> TAG 및 <head> TAG에 해당하는 HTML를 지정합니다.
	function onSetHTML(changeWgtId, value)
	{
		if (changeWgtId == oId){
			_this._htmlSet(apx, oId);
		}
	}
	apx.wgtListenProperty(oId, 'HTML', onSetHTML);
}

xa.exeOnScreenRefresh = function(apx, oId, opts)
{
	var tag = apx.wgtTag(oId);

	// Text가 있으면 다시 Set함. Virtical Align 경우 Font의 크기에 영향을 받음
	var text, refresh = true;

	if (opts && opts.font && opts.font != apx.wgtGetProperty(oId, 'apxFont', /*Resolve*/true)) refresh = false; // Font가 다르면 Skip

	if (refresh){
		apx.fireEvent('contentChange', 'font', oId, /*always*/true);
	}
}

xa._htmlSet = function(apx, oId)
{
	var html;

	if ((html = apx.wgtGetProperty(oId, 'HTML'))){
		if (!apx.sptExeIsPreview() || apn.Project.getScriptVer(apx.project) == 2){
			apx.wgtTag(oId).innerHTML = html;
		}
		else{
			apx.wgtTag(oId).innerHTML = 'This is supporeted with Aspen Scripting Ver2.';
		}
	}
}

xa.edtOnCheckContentChange = function(prj, pId, oId)
{
	return {font:'Font'};
}

xa.edtOnConfig = function(/*CEditor*/apd, oId)
{
	var buf = {HTML:apd.wgtGetProperty(oId, 'HTML')};
	var tagDlg;

	function onOK1()
	{
		eduLib.edtInputApplyAll(apd, tagDlg);
		apd.wgtSetProperty(oId, 'HTML', buf.HTML);
		//apd.wgtRefreshUI(oId);
	}

	if (tagDlg = apd.dlgDoModal(Math.ceil(bx.UX.width*0.8), 760, onOK1)){
		eduLib.edtInputAdd(apd, tagDlg, {type:'title', title:'HTML', join:true});
		eduLib.edtInputAdd(apd, tagDlg, {type:'text', value:buf, key:'HTML', multiline:true, height:'600px', join:true});
	}
}

uxWgtDIV = xa;
