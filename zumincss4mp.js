/* 2019-2021 Frank Bruns-Ballhausen */
/* Released under the GPL 2.0 License. */
/* script for "Test mincss4mp.html" */

Vue.component('msb-template',{
  data: function(){
    return {
			v_msbi:false,
    }
  },
  props:{
		vp_version:{default:this.v_version},
		vp_msbi:{default:this.v_msbi}
	},
  methods:{},
  computed:{},
  template:`
	<div class="msb" v-show="vp_msbi" v-on:click="$emit('closemsb');">
		<div class="msb-box">
			<div class="msb-c bg-gn" style="min-width:300px !important">
			<h5>Info</h5>
			<div class="marg9 pad9-l"><strong>Version <slot>X.X.X</slot></strong></div>
      <div class="bg-gn centr"><a class="btn btn-bk-out" v-on:click="$emit('closemsb');vp_msbi=false">OK</a></div>
			</div>
		</div>
	</div>
	`
});

var idsect0 = new Vue({
	el:'#sectNav',
	data:{
		v_msbi:false
	}
});

var idsect1 = new Vue({
	el:'#sectMenu',
	data:{
		/*Abschnitt MenuNavigation*/
		v_arrs:{
			'm1':false,
			'm2':false
		},
		v_out:'1'
	},
	methods:{
		v_hidemenu: function(ev){
      var _elms= ev.target;
      if(_elms.hasAttribute('href')){
        this.v_arrs['m1']=this.v_arrs['m2']= false;
      }
    },
    v_hideshowmenu: function(mid){
      this.v_arrs[mid]=!this.v_arrs[mid];
    }
	}
});

var idsect2 = new Vue({
	el:'#sectVmenu',
	data:{
		/*Abschnitt Beispiel MenuNavigation*/
		v_m1:false,
		v_m2:false,
    v_m1r:false,
		v_m2r:false,
    v_m1b:false,
		v_m2b:false
	}
});

var idsect3 = new Vue({
	el:'#sectForm',
	data:{
		v_out:'0',
		v_file: "keine Datei ausgewählt",
		v_meter:10,
		v_radio:''
	},
	methods:{
		vm_test: function(ev){
			try{
			var _val= ev.target.value || ev.target.files[0].name || this.v_file;
			if(_val==undefined) return;
			this.v_file= _val.substring(_val.lastIndexOf('\\')+1,_val.length);
			}catch(e){
				console.log('Error in vm_test():\n',e );
			}
		}
	}
})

var idsect7 = new Vue({
	el:'#sectMessage',
	data:{
		v_msb:false,
		v_modal:false,
		v_msb2:false
	}
});

var idsect9 = new Vue({
	el:'#sectTabs',
	data:{
		v_tabs:1
	}

});

var idsect10 = new Vue({
	el:'#sectAcco',
	data:{
		v_tabs:0
	}

});

var idsect11 = new Vue({
	el:'#umsSectFoot',
	data:{
    v_class: 'bg-gr',
  },
	methods:{
		v_totop: function(){
			window.scrollTo(1,0);
		},
    v_class2: function(){
      switch(this.v_class){
        case 'bg-wh' :
        case 'bg-gr' : return 't-gr-drk';
        break;
        case 'bg-bl-drk' :
        case 'bg-gn-drk' :
        case 'bg-bk-lig' :
        case 'bg-bk-drk' :
        case 'bg-bk' : return 't-wh';
        break;
        default: return 't-gr';
      }
    }
	}
})
