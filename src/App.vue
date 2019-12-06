<template>
  <div id="app">
    <h2>Text Area</h2>
    <gb-textarea :cols="gb_textarea_cols" :rows="gb_textarea_rows" :textlabel="gb_textarea_label"></gb-textarea>
    <h2>ToolTip</h2>
    <gb-tooltip :tooltiptext="gb_tooltip_tooltipmessage" :origintext="gb_tooltip_message" :tooltipstyle="gb_tooltip_tooltipstyle"></gb-tooltip>
    <h2>File Upload</h2>
    <gb-inputfile :prolabel="gb_fileupload_label" :proaccept="gb_fileupload_accept" :prohint="gb_fileupload_hint" :prowidth="gb_fileupload_width"></gb-inputfile>

    <h2>Button 컴포넌트</h2>
    <h3>Action</h3>
    <gb-button label="default"></gb-button>
    <gb-button label="Button" action="button"></gb-button>
    <gb-button label="Reset" action="reset"></gb-button>
    <gb-button label="Submit" action="submit"></gb-button>

    <h3>ColorLevel</h3>
    <gb-button label="ColorLevel 1" colorLevel="colorLevel1"></gb-button>
    <gb-button label="ColorLevel 2" colorLevel="colorLevel2"></gb-button>
    <gb-button label="ColorLevel 3" colorLevel="colorLevel3"></gb-button>
    <gb-button label="ColorLevel 4" colorLevel="colorLevel4"></gb-button>
    <gb-button label="ColorLevel 5" colorLevel="colorLevel5"></gb-button>

    <h3>Fill</h3>
    <gb-button label="true" fill="true"></gb-button>
    <gb-button label="false" fill="false"></gb-button>

    <hr>

    <h2>Img 컴포넌트</h2>
    <h3>BtnText</h3>
    <gb-img src="./assets/logo.png" width="200px" height="200px" btnText="button text"></gb-img>
    <gb-img src="./assets/logo.png" width="200px" height="200px" btnText="button" caption="caption"></gb-img>

    <h3>Caption</h3>
    <gb-img src="./assets/g-bridge.png" width="240px" height="240px" caption="캡션입니다"></gb-img>

    <h3>Desc</h3>
    <gb-img src="./assets/logo.png" width="200px" height="200px" desc="이미지 설명입니다"></gb-img>

    <hr>

    <h2>Progress 컴포넌트</h2>
    <h3>Bar</h3>
    <gb-progress label="wave" value="80" max="100"></gb-progress>

    <h3>Color</h3>
    <gb-progress label="red" value="55" max="100" color="red"></gb-progress>
    <gb-progress label="blue" value="20" max="100" color="blue"></gb-progress>
    <gb-progress label="green" value="97" max="100" color="green"></gb-progress>
    <gb-progress label="#0d918c" value="40" max="100" color="#0d918c"></gb-progress>
    <gb-progress label="#148fd7" value="87" max="100" color="#148fd7"></gb-progress>
  </div>
</template>

<script>
import TextArea from './components/gb-textarea.vue'
import ToolTip from './components/gb-tooltip.vue'
import InputFile from './components/gb-fileupload.vue'
import GbButton from './components/GbButton.vue'
import GbImg from './components/GbImg.vue'
import GbProgress from './components/GbProgress.vue'

export default {
  // 컴포넌트 등록
  components:{
    'gb-textarea': TextArea,
    'gb-tooltip': ToolTip,
    'gb-inputfile': InputFile,
    GbButton,
    GbImg,
    GbProgress
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
