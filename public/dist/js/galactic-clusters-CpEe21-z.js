import{o as D,r as d,q as R}from"./youmeos-CI0TUPZ0.js";import{a9 as W,aa as Y,af as q,aj as E,ab as v,aW as U,ad as Z,aX as k,ae as H}from"./vendor-B83Jvpt6.js";import"./vuetify-G1dogSh0.js";function tt(y){const B=new W().load(y.youmeosBaseUrl+"/images/galactic_blur.png"),r=new Y,b=50,C=100,h=b*C,i=new Float32Array(h*3),c=new Float32Array(h*3),P=new Float32Array(h),e=new q,l=new E;let t=0;for(let s=0;s<b;s++){const o=Math.random()*Math.PI*2,u=Math.acos(Math.random()*2-1),M=25e5+Math.random()*15e5,G=M*Math.sin(u)*Math.cos(o),j=M*Math.sin(u)*Math.sin(o),F=M*Math.cos(u);l.position.set(0,0,0),l.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),l.updateMatrix();const z=Math.floor(d(2,5)),f=4e4+Math.random()*6e4,A=.2+Math.random()*.4,I=.2+Math.random()*.4,S=.2+Math.random()*.4;for(let g=0;g<C;g++){const T=g%z,n=Math.pow(Math.random(),.5),_=n*f,O=Math.PI*2/z*T+n*(Math.PI*4),a=(1-n)*(f*.3)+f*.05,V=Math.cos(O)*_+d(-a,a),L=d(-a*.5,a*.5),X=Math.sin(O)*_+d(-a,a);e.set(V,L,X),e.applyEuler(l.rotation),i[t*3]=G+e.x,i[t*3+1]=j+e.y,i[t*3+2]=F+e.z;const x=1-n;c[t*3]=A+x*(.8-A),c[t*3+1]=I+x*(.8-I),c[t*3+2]=S+x*(.8-S),P[t]=(4e3+Math.random()*4e3)*(3-n*2),t++}}r.setAttribute("position",new v(i,3)),r.setAttribute("customColor",new v(c,3)),r.setAttribute("size",new v(P,1));const m=.12,w=new U({glslVersion:k,uniforms:{texture0:{value:B},opacity:{value:m}},vertexShader:`
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
    `,blending:Z,transparent:!0,depthTest:!1,depthWrite:!1}),p=new H(r,w);return p.update=()=>{const s=y.camera.position.z;let o=m;s<25e3&&(o=R(s,8e3,25e3,0,m),o=D(o,0,m)),w.uniforms.opacity.value=o,p.visible=o>.001},p}export{tt as generateGalaxyCluster};
