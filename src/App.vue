<template>
  <div id="app">
    <h2>Text Area</h2>
    <gb-textarea :cols="gb_textarea_cols" :rows="gb_textarea_rows" :textlabel="gb_textarea_label"></gb-textarea>
    <h2>ToolTip</h2>
    <gb-tooltip :tooltiptext="gb_tooltip_tooltipmessage" :origintext="gb_tooltip_message" :tooltipstyle="gb_tooltip_tooltipstyle"></gb-tooltip>
    <h2>File Upload</h2>
    <gb-inputfile :prolabel="gb_fileupload_label" :proaccept="gb_fileupload_accept" :prohint="gb_fileupload_hint" :prowidth="gb_fileupload_width"></gb-inputfile>
  </div>
</template>

<script>
import TextArea from './components/gb-textarea.vue'
import ToolTip from './components/gb-tooltip.vue'
import InputFile from './components/gb-fileupload.vue'

export default {
  // 컴포넌트 등록
  components:{
    'gb-textarea': TextArea,
    'gb-tooltip': ToolTip,
    'gb-inputfile': InputFile
  },
  
  data(){
    return{
    //gb-textarea 데이터
    gb_textarea_cols: 50,
    gb_textarea_rows: 5,
    gb_textarea_label: "주소입력",
    //gb-fileupload 데이터
    gb_fileupload_hint: '이미지 파일만 가능합니다',
    gb_fileupload_label: 'file1',
    gb_fileupload_accept: '.gif, .jpg, .png',
    gb_fileupload_width: 'width: 100px',
    //gb-tooltip 데이터
    gb_tooltip_message: "뷰를 이용한 메세지 입니다.",
    gb_tooltip_tooltipmessage: "뷰를 이용한 툴팁 메시지 입니다.", 
    gb_tooltip_tooltipstyle:"width: 130px; height: 35px; line-height: 35px; background: #030709; color: #fff; border: 1px solid #190508;"   
    }
  }
}
</script>

<style>
/* 기본스타일 */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
