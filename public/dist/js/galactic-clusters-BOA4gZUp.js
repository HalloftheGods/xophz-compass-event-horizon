import{B as v,o as X,q as p}from"./youmeos-jdc24QuQ.js";import{s as Y,g as q,O as E,D as y,d as N,A as W,e as Z,w as k}from"./vendor-three-Bmo1m3zw.js";import"./vendor-core-BjXxTeiy.js";import"./vendor-D3AQGH3N.js";import"./vendor-vuetify-CcWfLOOJ.js";import"./vendor-echarts-G6VGJ7c5.js";async function ot(w){const G=await w.textures.load("/images/galactic_blur.png"),e=new Y,C=50,P=100,d=C*P,i=new Float32Array(d*3),c=new Float32Array(d*3),b=new Float32Array(d),s=new q,l=new E;let t=0;for(let n=0;n<C;n++){const o=Math.random()*Math.PI*2,h=Math.acos(Math.random()*2-1),M=25e5+Math.random()*15e5,D=M*Math.sin(h)*Math.cos(o),F=M*Math.sin(h)*Math.sin(o),V=M*Math.cos(h);l.position.set(0,0,0),l.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),l.updateMatrix();const z=Math.floor(p(2,5)),f=4e4+Math.random()*6e4,I=.2+Math.random()*.4,S=.2+Math.random()*.4,O=.2+Math.random()*.4;for(let g=0;g<P;g++){const j=g%z,r=Math.pow(Math.random(),.5),_=r*f,B=Math.PI*2/z*j+r*(Math.PI*4),a=(1-r)*(f*.3)+f*.05,T=Math.cos(B)*_+p(-a,a),L=p(-a*.5,a*.5),R=Math.sin(B)*_+p(-a,a);s.set(T,L,R),s.applyEuler(l.rotation),i[t*3]=D+s.x,i[t*3+1]=F+s.y,i[t*3+2]=V+s.z;const x=1-r;c[t*3]=I+x*(.8-I),c[t*3+1]=S+x*(.8-S),c[t*3+2]=O+x*(.8-O),b[t]=(4e3+Math.random()*4e3)*(3-r*2),t++}}e.setAttribute("position",new y(i,3)),e.setAttribute("customColor",new y(c,3)),e.setAttribute("size",new y(b,1));const A=v.clusters.max,u=new N({glslVersion:Z,uniforms:{texture0:{value:G},opacity:{value:A}},vertexShader:`
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
    `,blending:W,transparent:!0,depthTest:!1,depthWrite:!1}),m=new k(e,u);return m.update=()=>{const n=w.camera.position.z;let o=A;n<v.clusters.to&&(o=X(n,v.clusters)),u.uniforms.opacity.value=o,m.visible=o>.001},m.dispose=()=>{e.dispose(),u.dispose()},m}export{ot as generateGalaxyCluster};
