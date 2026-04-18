import{o as R,r as p,q as X}from"./youmeos-D_FW8R82.js";import{T as Y,B as q,V as E,O as U,b as v,a0 as W,A as Z,a1 as k,c as H}from"./vendor-three-CQakyfg1.js";import"./vendor-core-B-3IBRCN.js";import"./vendor-Cp4frqbV.js";import"./vendor-vuetify-Bp3qAAMv.js";import"./vendor-echarts-MOnvL5X_.js";function et(y){const B=new Y().load(y.youmeosBaseUrl+"/images/galactic_blur.png"),r=new q,b=50,C=100,d=b*C,i=new Float32Array(d*3),c=new Float32Array(d*3),P=new Float32Array(d),e=new E,l=new U;let t=0;for(let s=0;s<b;s++){const o=Math.random()*Math.PI*2,u=Math.acos(Math.random()*2-1),M=25e5+Math.random()*15e5,G=M*Math.sin(u)*Math.cos(o),T=M*Math.sin(u)*Math.sin(o),V=M*Math.cos(u);l.position.set(0,0,0),l.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),l.updateMatrix();const A=Math.floor(p(2,5)),f=4e4+Math.random()*6e4,z=.2+Math.random()*.4,I=.2+Math.random()*.4,S=.2+Math.random()*.4;for(let g=0;g<C;g++){const F=g%A,n=Math.pow(Math.random(),.5),O=n*f,_=Math.PI*2/A*F+n*(Math.PI*4),a=(1-n)*(f*.3)+f*.05,j=Math.cos(_)*O+p(-a,a),L=p(-a*.5,a*.5),D=Math.sin(_)*O+p(-a,a);e.set(j,L,D),e.applyEuler(l.rotation),i[t*3]=G+e.x,i[t*3+1]=T+e.y,i[t*3+2]=V+e.z;const x=1-n;c[t*3]=z+x*(.8-z),c[t*3+1]=I+x*(.8-I),c[t*3+2]=S+x*(.8-S),P[t]=(4e3+Math.random()*4e3)*(3-n*2),t++}}r.setAttribute("position",new v(i,3)),r.setAttribute("customColor",new v(c,3)),r.setAttribute("size",new v(P,1));const m=.12,w=new W({glslVersion:k,uniforms:{texture0:{value:B},opacity:{value:m}},vertexShader:`
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
    `,blending:Z,transparent:!0,depthTest:!1,depthWrite:!1}),h=new H(r,w);return h.update=()=>{const s=y.camera.position.z;let o=m;s<25e3&&(o=X(s,8e3,25e3,0,m),o=R(o,0,m)),w.uniforms.opacity.value=o,h.visible=o>.001},h}export{et as generateGalaxyCluster};
