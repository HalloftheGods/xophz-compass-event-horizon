import{G as D,Y as d,V as R}from"./youmeos-QYX2SKU-.js";import{$ as X,d as E,a2 as U,O as W,c as v,V as Z,A as $,G as k,y as q}from"./vendor-three-Blt75PTu.js";import"./vendor-core-Bo3U6-31.js";import"./vendor-QvwPuILC.js";import"./vendor-vuetify-B8k7EEWI.js";import"./vendor-echarts-ZkGd9yHQ.js";function et(y){const _=new X().load(y.youmeosBaseUrl+"/images/galactic_blur.png"),r=new E,C=50,P=100,p=C*P,i=new Float32Array(p*3),c=new Float32Array(p*3),b=new Float32Array(p),e=new U,l=new W;let t=0;for(let s=0;s<C;s++){const o=Math.random()*Math.PI*2,u=Math.acos(Math.random()*2-1),M=25e5+Math.random()*15e5,V=M*Math.sin(u)*Math.cos(o),B=M*Math.sin(u)*Math.sin(o),F=M*Math.cos(u);l.position.set(0,0,0),l.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),l.updateMatrix();const A=Math.floor(d(2,5)),f=4e4+Math.random()*6e4,z=.2+Math.random()*.4,I=.2+Math.random()*.4,S=.2+Math.random()*.4;for(let g=0;g<P;g++){const T=g%A,n=Math.pow(Math.random(),.5),G=n*f,O=Math.PI*2/A*T+n*(Math.PI*4),a=(1-n)*(f*.3)+f*.05,j=Math.cos(O)*G+d(-a,a),L=d(-a*.5,a*.5),Y=Math.sin(O)*G+d(-a,a);e.set(j,L,Y),e.applyEuler(l.rotation),i[t*3]=V+e.x,i[t*3+1]=B+e.y,i[t*3+2]=F+e.z;const x=1-n;c[t*3]=z+x*(.8-z),c[t*3+1]=I+x*(.8-I),c[t*3+2]=S+x*(.8-S),b[t]=(4e3+Math.random()*4e3)*(3-n*2),t++}}r.setAttribute("position",new v(i,3)),r.setAttribute("customColor",new v(c,3)),r.setAttribute("size",new v(b,1));const m=.12,w=new Z({glslVersion:k,uniforms:{texture0:{value:_},opacity:{value:m}},vertexShader:`
      precision highp float;
      attribute vec3 customColor;
      attribute float size;
      out vec3 vColor;
      void main() {
        vColor = customColor;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        // Size attenuation
        gl_PointSize = size * (800.0 / length(mvPosition.xyz)); // Much smaller points
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      precision highp float;
      uniform sampler2D texture0;
      uniform float opacity;
      in vec3 vColor;
      out vec4 pc_fragColor;
      void main() {
        vec4 texColor = texture(texture0, gl_PointCoord);
        if (texColor.a < 0.05) discard;
        // Soft additive blend
        pc_fragColor = vec4(vColor, texColor.a * opacity);
      }
    `,blending:$,transparent:!0,depthTest:!1,depthWrite:!1}),h=new q(r,w);return h.update=()=>{const s=y.camera.position.z;let o=m;s<25e3&&(o=R(s,8e3,25e3,0,m),o=D(o,0,m)),w.uniforms.opacity.value=o,h.visible=o>.001},h}export{et as generateGalaxyCluster};
