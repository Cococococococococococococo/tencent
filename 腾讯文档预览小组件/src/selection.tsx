import {
  useRecords, useActiveCell, useRecord, useFields, useSelection, useActiveViewId,
} from '@vikadata/widget-sdk';
import React from 'react';

export const Selection: React.FC = () => {
  const viewId = useActiveViewId();
  const activeCell = useActiveCell();
  const activeRecord = useRecord(activeCell?.recordId);
  const selection = useSelection();
  const fields = useFields(viewId, {ids: selection?.fieldIds});
  const records = useRecords(viewId, {ids: selection?.recordIds});
  const a = activeCell?.fieldId && activeRecord?.getCellValueString(activeCell?.fieldId);

  if(a){
  localStorage.a = a;
  }

  let iframeShow ='';
  let fontShowshow ='';
  function CheckUrl(str) {
    var RegUrl = new RegExp("^[A-Za-z]+://[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&\?\/.=]+$",'g');
    if (!RegUrl.test(str) || str.slice(0,19) !== 'https://docs.qq.com') {
    return false;
    }
    return true;
    }
  
  var localUrl = CheckUrl(localStorage.a)
    if(localUrl == true){
      iframeShow = 'contents'
      fontShowshow = 'none'
    }else{
      iframeShow = 'none'
      fontShowshow = 'contents'
    }
  return (
    <div style={{width:'100%',height:'100%',lineHeight:'100%',display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}} > 
      <div style={{display:fontShowshow,top:'50%',width:'100%',height:'100%',lineHeight:'100%',textAlign:'center'}} >
        <img src ='https://s1.vika.cn/space/2022/03/04/bef58da868cc4dad907bb125571fc9a7' style={{width:'88px',marginBottom:'20px'}}/>
        <h2 style={{floodOpacity:'inherit',color:'7B67EE',width:"100%",paddingLeft:'10px',marginTop:'10px',}}> 请预览腾讯文档的地址 </h2>
      </div>
      {
         localUrl && <iframe style={{width:'100%',height:'100%',border:'none'}} src={localStorage.a} />
      } 
    </div>
  );
};
