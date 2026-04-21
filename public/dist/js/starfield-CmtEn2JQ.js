import{r as l,s as e}from"./youmeos-C3U02oXE.js";import{T as M,l as x,a3 as y,A as z,a4 as A,B as S,b as m,c as P}from"./vendor-three-BnE3DVH5.js";import"./vendor-core-B-3IBRCN.js";import"./vendor-_LD1vn0W.js";import"./vendor-vuetify-Cu39lHyH.js";import"./vendor-echarts-Rq4_0PNY.js";function G(p){const w=new M().load(p.youmeosBaseUrl+"/images/p_0.png"),r={color:{value:new x(16777215)},pointTexture:{value:w},scale:{value:1},opacity:{value:1}},b=new y({glslVersion:A,uniforms:r,vertexShader:`
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
    `,blending:z,depthTest:!1,depthWrite:!1,transparent:!0}),a=25e3,i=new Float32Array(a*3),n=new Float32Array(a*3),v=new Float32Array(a),g=[{r:.6,g:.8,b:1},{r:1,g:1,b:1},{r:1,g:.9,b:.7},{r:1,g:.7,b:.5},{r:.8,g:.9,b:1},{r:1,g:.8,b:.9},{r:.7,g:.9,b:1}];for(let o=0;o<a;o++){const t=e(5e3,5e5),h=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1);i[o*3]=t*Math.sin(d)*Math.cos(h),i[o*3+1]=t*Math.sin(d)*Math.sin(h),i[o*3+2]=t*Math.cos(d);let f=e(15,35);Math.random()>.95&&(f=e(40,80)),Math.random()>.98&&(f=e(80,120)),v[o]=f;const C=Math.floor(Math.random()*g.length),u=g[C];n[o*3]=l(u.r+e(-.1,.1),0,1),n[o*3+1]=l(u.g+e(-.1,.1),0,1),n[o*3+2]=l(u.b+e(-.1,.1),0,1)}const s=new S;s.setAttribute("position",new m(i,3)),s.setAttribute("customColor",new m(n,3)),s.setAttribute("size",new m(v,1));const c=new P(s,b);return c.update=function(){const o=window.innerWidth*window.innerHeight;r.scale.value=Math.sqrt(o)*1.5;const t=p.camera.position.z;t<1e3?r.opacity.value=l(t/1e3,0,1):r.opacity.value=1,c.visible=t>100},c}export{G as generateStarfield};
