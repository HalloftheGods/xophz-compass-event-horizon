import{aU as Y,aY as D,b6 as R,a$ as U,aZ as v,be as W,b2 as Z,bg as E,a_ as $,aW as k,aX as m,bb as q}from"./youmeos-z2c4-m2a.js";function N(y){const B=new Y().load(y.youmeosBaseUrl+"/images/galactic_blur.png"),r=new D,b=50,C=100,h=b*C,i=new Float32Array(h*3),c=new Float32Array(h*3),P=new Float32Array(h),e=new R,l=new U;let t=0;for(let s=0;s<b;s++){const o=Math.random()*Math.PI*2,p=Math.acos(Math.random()*2-1),M=25e5+Math.random()*15e5,G=M*Math.sin(p)*Math.cos(o),F=M*Math.sin(p)*Math.sin(o),T=M*Math.cos(p);l.position.set(0,0,0),l.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),l.updateMatrix();const z=Math.floor(m(2,5)),f=4e4+Math.random()*6e4,A=.2+Math.random()*.4,I=.2+Math.random()*.4,S=.2+Math.random()*.4;for(let g=0;g<C;g++){const V=g%z,n=Math.pow(Math.random(),.5),_=n*f,O=Math.PI*2/z*V+n*(Math.PI*4),a=(1-n)*(f*.3)+f*.05,j=Math.cos(O)*_+m(-a,a),L=m(-a*.5,a*.5),X=Math.sin(O)*_+m(-a,a);e.set(j,L,X),e.applyEuler(l.rotation),i[t*3]=G+e.x,i[t*3+1]=F+e.y,i[t*3+2]=T+e.z;const x=1-n;c[t*3]=A+x*(.8-A),c[t*3+1]=I+x*(.8-I),c[t*3+2]=S+x*(.8-S),P[t]=(4e3+Math.random()*4e3)*(3-n*2),t++}}r.setAttribute("position",new v(i,3)),r.setAttribute("customColor",new v(c,3)),r.setAttribute("size",new v(P,1));const d=.12,w=new W({glslVersion:E,uniforms:{texture0:{value:B},opacity:{value:d}},vertexShader:`
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
    `,blending:Z,transparent:!0,depthTest:!1,depthWrite:!1}),u=new $(r,w);return u.update=()=>{const s=y.camera.position.z;let o=d;s<25e3&&(o=q(s,8e3,25e3,0,d),o=k(o,0,d)),w.uniforms.opacity.value=o,u.visible=o>.001},u}export{N as generateGalaxyCluster};
