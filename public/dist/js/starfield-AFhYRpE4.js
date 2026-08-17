import{D as l,E as e}from"./youmeos-Bdm4YFd6.js";import{l as M,q as x,d as y,A as z,e as A,p as S,w as m,t as P}from"./vendor-three-t6OjKSDq.js";import"./vendor-core-DD0IIVGP.js";import"./vendor-D1Ol3o1T.js";import"./vendor-vuetify-BTULVKrW.js";import"./vendor-echarts-CdR68cIF.js";function q(p){const w=new M().load(p.youmeosBaseUrl+"/images/p_0.png"),r={color:{value:new x(16777215)},pointTexture:{value:w},scale:{value:1},opacity:{value:1}},C=new y({glslVersion:A,uniforms:r,vertexShader:`
      uniform float scale;
      
      in float size;
      in vec3 customColor;
      
      out vec3 vColor;
      out float vSize;
      
      void main() {
        vColor = customColor;
        vSize = size;
        
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        float dist = length(mvPosition.xyz);
        
        gl_PointSize = scale * size / dist;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      precision highp float;
      
      uniform sampler2D pointTexture; // Renamed from texture
      uniform float opacity;
      
      in vec3 vColor;
      in float vSize;
      
      out vec4 pc_fragColor;
      
      void main() {
        vec4 texColor = texture(pointTexture, gl_PointCoord);
        
        // Apply star color with brightness variation
        vec3 finalColor = texColor.rgb * vColor;
        
        // Add subtle twinkle based on position
        float twinkle = 0.8 + 0.2 * sin(gl_FragCoord.x * 0.1 + gl_FragCoord.y * 0.1);
        
        pc_fragColor = vec4(finalColor * twinkle, texColor.a * opacity);
      }
    `,blending:z,depthTest:!1,depthWrite:!1,transparent:!0}),i=25e3,a=new Float32Array(i*3),n=new Float32Array(i*3),v=new Float32Array(i),g=[{r:.6,g:.8,b:1},{r:1,g:1,b:1},{r:1,g:.9,b:.7},{r:1,g:.7,b:.5},{r:.8,g:.9,b:1},{r:1,g:.8,b:.9},{r:.7,g:.9,b:1}];for(let o=0;o<i;o++){const t=e(5e3,5e5),h=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1);a[o*3]=t*Math.sin(d)*Math.cos(h),a[o*3+1]=t*Math.sin(d)*Math.sin(h),a[o*3+2]=t*Math.cos(d);let f=e(15,35);Math.random()>.95&&(f=e(40,80)),Math.random()>.98&&(f=e(80,120)),v[o]=f;const b=Math.floor(Math.random()*g.length),u=g[b];n[o*3]=l(u.r+e(-.1,.1),0,1),n[o*3+1]=l(u.g+e(-.1,.1),0,1),n[o*3+2]=l(u.b+e(-.1,.1),0,1)}const s=new S;s.setAttribute("position",new m(a,3)),s.setAttribute("customColor",new m(n,3)),s.setAttribute("size",new m(v,1));const c=new P(s,C);return c.update=function(){const o=window.innerWidth*window.innerHeight;r.scale.value=Math.sqrt(o)*1.5;const t=p.camera.position.z;t<1e3?r.opacity.value=l(t/1e3,0,1):r.opacity.value=1,c.visible=t>100},c}export{q as generateStarfield};
