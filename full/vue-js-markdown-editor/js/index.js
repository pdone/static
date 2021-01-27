/**
 * ROOT COMPONENT
 */
var app = new Vue({
  el: '#app-wall',
  data: {
    appTitle: 'Markdown编辑器',
    code: '# Hello World!',
    isSeen: false,
    isSettings: false,
    isFull: false,
    isUpdating: false,
    actualSkin: {
      color: '#ecf0f1',
      background: 'rgba(211, 211, 211, .4)',
      wall: 'rgba(211, 211, 211, .4)'
    },
    skins: [
      {
        color: '#ecf0f1', 
        background: 'rgba(211, 211, 211, .4)',
        wall: 'rgba(211, 211, 211, .4)',
        isActive: true
      },
      {
        color: '#0c0', 
        background: 'rgba(0, 204, 0, .4)',
        wall: 'rgba(0, 204, 0, .15)',
        isActive: false
      },
      {
        color: '#f60',
        background: 'rgba(255, 102, 0, .4)',
        wall: 'rgba(255, 102, 0, .15)',
        isActive: false
      },
      {
        color: '#f0f',
        background: 'rgba(255, 0, 255, .4)',
        wall: 'rgba(255, 0, 255, .15)',
        isActive: false
      },
      {
        color: '#e00',
        background: 'rgba(204, 0, 0, .2)',
        wall: 'rgba(204, 0, 0, .15)'
      }
    ]
  },
  computed: {
    compiledOutput(){
      return marked(this.code, {sanitize: true});
    }  
  },
  methods: {
    showSettings(){
      this.isSettings = ! this.isSettings;
      this.isSeen = false;
    },
    setSkin(skin){
      this.actualSkin.color = skin.color;
      this.actualSkin.background = skin.background;
      this.actualSkin.wall = skin.wall;
      // Toggle the actual active skin
      this.skins.map(function(obj){
        if(obj === skin){
          obj.isActive = true;
        }
        else{
          obj.isActive = false;
        }
      })
    },
    updateMe(){
      var ctx = this;
      ctx.isUpdating = true;
      setTimeout(function(){
        ctx.isUpdating = false;
      }, 4000);
    }
  }
});