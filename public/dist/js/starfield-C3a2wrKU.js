import{p as m,q as e,B as u,o as x}from"./youmeos-jdc24QuQ.js";import{t as y,d as z,A,e as S,s as P,D as v,w as _}from"./vendor-three-Bmo1m3zw.js";import"./vendor-core-BjXxTeiy.js";import"./vendor-D3AQGH3N.js";import"./vendor-vuetify-CcWfLOOJ.js";import"./vendor-echarts-G6VGJ7c5.js";async function I(i){const w=await i.textures.load("/images/p_0.png"),r={color:{value:new y(16777215)},pointTexture:{value:w},scale:{value:1},opacity:{value:1}},g=new z({glslVersion:S,uniforms:r,vertexShader:`
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
    `,blending:A,depthTest:!1,depthWrite:!1,transparent:!0}),s=25e3,n=new Float32Array(s*3),l=new Float32Array(s*3),h=new Float32Array(s),b=[{r:.6,g:.8,b:1},{r:1,g:1,b:1},{r:1,g:.9,b:.7},{r:1,g:.7,b:.5},{r:.8,g:.9,b:1},{r:1,g:.8,b:.9},{r:.7,g:.9,b:1}];for(let o=0;o<s;o++){const t=e(5e3,5e5),C=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1);n[o*3]=t*Math.sin(d)*Math.cos(C),n[o*3+1]=t*Math.sin(d)*Math.sin(C),n[o*3+2]=t*Math.cos(d);let f=e(15,35);Math.random()>.95&&(f=e(40,80)),Math.random()>.98&&(f=e(80,120)),h[o]=f;const M=Math.floor(Math.random()*b.length),p=b[M];l[o*3]=m(p.r+e(-.1,.1),0,1),l[o*3+1]=m(p.g+e(-.1,.1),0,1),l[o*3+2]=m(p.b+e(-.1,.1),0,1)}const a=new P;a.setAttribute("position",new v(n,3)),a.setAttribute("customColor",new v(l,3)),a.setAttribute("size",new v(h,1));const c=new _(a,g);return c.update=function(){const o=i.frame.width*i.frame.height;r.scale.value=Math.sqrt(o)*1.5;const t=i.camera.position.z;t<u.starfieldFade.to?r.opacity.value=x(t,u.starfieldFade):r.opacity.value=1,c.visible=t>u.starfieldVisible},c.dispose=function(){a.dispose(),g.dispose()},c}export{I as generateStarfield};
