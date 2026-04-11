import{aU as M,bd as x,be as y,b2 as z,bg as A,aW as l,aX as e,aY as S,aZ as g,a_ as _}from"./youmeos-z2c4-m2a.js";function F(m){const b=new M().load(m.youmeosBaseUrl+"/images/p_0.png"),a={color:{value:new x(16777215)},pointTexture:{value:b},scale:{value:1},opacity:{value:1}},w=new y({glslVersion:A,uniforms:a,vertexShader:`
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
    `,blending:z,depthTest:!1,depthWrite:!1,transparent:!0}),r=25e3,i=new Float32Array(r*3),n=new Float32Array(r*3),v=new Float32Array(r),p=[{r:.6,g:.8,b:1},{r:1,g:1,b:1},{r:1,g:.9,b:.7},{r:1,g:.7,b:.5},{r:.8,g:.9,b:1},{r:1,g:.8,b:.9},{r:.7,g:.9,b:1}];for(let o=0;o<r;o++){const t=e(5e3,5e5),h=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1);i[o*3]=t*Math.sin(d)*Math.cos(h),i[o*3+1]=t*Math.sin(d)*Math.sin(h),i[o*3+2]=t*Math.cos(d);let u=e(15,35);Math.random()>.95&&(u=e(40,80)),Math.random()>.98&&(u=e(80,120)),v[o]=u;const C=Math.floor(Math.random()*p.length),f=p[C];n[o*3]=l(f.r+e(-.1,.1),0,1),n[o*3+1]=l(f.g+e(-.1,.1),0,1),n[o*3+2]=l(f.b+e(-.1,.1),0,1)}const s=new S;s.setAttribute("position",new g(i,3)),s.setAttribute("customColor",new g(n,3)),s.setAttribute("size",new g(v,1));const c=new _(s,w);return c.update=function(){const o=window.innerWidth*window.innerHeight;a.scale.value=Math.sqrt(o)*1.5;const t=m.camera.position.z;t<1e3?a.opacity.value=l(t/1e3,0,1):a.opacity.value=1,c.visible=t>100},c}export{F as generateStarfield};
