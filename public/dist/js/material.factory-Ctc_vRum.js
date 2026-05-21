import{aq as l,h as q,a6 as V,ah as E,av as g,al as H,ae as U,as as N,H as J,A as b,a7 as X,ac as h,ap as c,ak as $,ag as j,a8 as w,af as Y,am as Q,at as P,an as z,au as d,aa as le,ai as Z,ar as B,N as A,ad as ee,a5 as K,a9 as ne,ao as te,ab as oe,aj as re,V as D,G as M,D as ie}from"./vendor-three-Blt75PTu.js";function se(t){const e=l(1),r=l(100),o=l(new q(1,1,1)),a=l(1),p=l(1),m=l(1),i=l(1e3),v=l(0),u=l(0),x=V("size","float"),S=V("customColor","vec3"),f=E.mul(g(H,1)),y=U(f.xyz),k=r.mul(x).div(y),T=N(S);N(y);const n=new J;n.transparent=!0,n.depthWrite=!1,n.blending=b,n.positionNode=X.mul(f),n.pointSizeNode=k;let C=g(o.mul(T),1);const L=U(C).mul(.15).mul(u),s=C.xyz.mul(h(1).sub(u)).add(L);C=g(s,C.w);const _=N(f.z).negate().div(i.add(v)),F=c(t.texture0,$),W=c(t.texture1,$),I=j(F,W,w(_,0,1));return n.outputNode=C.mul(I),n.uniforms={zoomSize:e,scale:r,color:o,idealDepth:a,blurPower:p,blurDivisor:m,sceneSize:i,cameraDistance:v,heatVision:u},n}function ce(t){const e=new J;e.transparent=!0,e.depthWrite=!1,e.depthTest=!1,e.blending=b;const r=V("customColor","vec3"),o=V("size","float"),a=l(1e4),p=l(0),m=l(1),i=l(0),v=l(1),u=l(1),x=N(r),S=Y(U(Q.xyz),.1),f=v.mul(o).mul(u).div(S);e.sizeNode=w(f,0,100);const y=Q.z.negate(),k=h(1).sub(y.div(a)),T=w(k,0,1),n=$,C=c(t.texture0,n),L=t.texture1?c(t.texture1,n):C;let s=j(L,C,T);const O=V("colorIndex","float"),G=N(O);if(t.spectralLookup){const _=w(G,0,1),F=c(t.spectralLookup,P(0,_)),W=z(F.rgb,d(2));s=g(s.rgb.mul(W),s.a);const I=d(1).sub(d(.5,.6,.65)).mul(p);s=g(s.rgb.sub(I.mul(h(1).sub(i))),s.a)}else s=g(s.rgb.mul(x),s.a);return e.colorNode=g(s.rgb,s.a),e.uniforms={zoomSize:u,scale:v,sceneSize:a,brightnessScale:m,heatVision:i,cameraDistance:p,blurPower:{value:1},blurDivisor:{value:2}},e}function ue(t){const{texture0:e,scale:r=100,opacity:o=1}=t,a=new J;a.transparent=!0,a.depthWrite=!1,a.depthTest=!1,a.blending=b;const p=l(r),m=l(o),i=V("size","float"),v=V("customColor","vec3"),u=E.mul(g(H,h(1))),x=U(u.xyz),S=le(Z(p,i),x);a.sizeNode=S;const f=c(e,B());return a.colorNode=g(Z(f.rgb,v),Z(f.a,m)),a.uniforms={scale:{value:r,node:p},opacity:{value:o,node:m}},a}function fe(t){const e=l(0),r=l(0),o=new A,a=B(),p=re,m=h(2),i=h(.2),v=h(.2),u=h(.98),x=a.mul(m);let f=c(t.texturePrimary,x).x,y=ee(f.sub(e.mul(i)));f=j(v,u,K(y.mul(2).sub(1)));const k=P(f,0);let n=c(t.textureColor,k).xyz.mul(.6);n=z(n,d(2)),n=n.add(d(.6,.6,.6).mul(1.4));const C=w(r,0,1),L=c(t.textureSpectral,P(0,C)),s=z(L.xyz,d(2));n=n.mul(s);const O=P(a.x.add(ne(e).mul(.001)),a.y.add(te(e).mul(.001))),G=c(t.texturePrimary,O).xyz,_=h(1).sub(Y(oe(p,d(0,0,1)),0)),F=h(1.2).add(z(_,2).mul(2.3)),W=d(.851,.745,.435);let R=n.sub(G.mul(.4)).mul(W).mul(F);const ae=z(_,8).mul(1.5);return R=R.add(d(1,.9,.7).mul(ae)),o.colorNode=g(R,1),o.uniforms={time:e,spectralLookup:r},o}function de(t){const e=l(0),r=l(0),o=new A;o.transparent=!0,o.blending=b,o.depthWrite=!1,o.depthTest=!0,o.polygonOffset=!0,o.polygonOffsetFactor=-1,o.polygonOffsetUnits=1;const a=B(),p=re,m=e.mul(4),i=H.mul(1e8),v=te(i.add(m)).mul(U(H).mul(.05)),u=H.add(v),x=X.mul(E.mul(g(u,1)));o.positionNode=x;const S=N(x),f=P(a.x,K(a.y.sub(.5))),y=c(t.texturePrimary,f).xyz,k=h(1.45).sub(oe(p,d(0,0,1)).mul(2)),T=w(U(S.xyz).sub(.45),0,1),n=w(r,0,1),C=c(t.textureSpectral,P(0,n)),L=d(.851,.745,.435),s=z(C.xyz,d(3)).mul(L).mul(10),O=y.sub(z(k,2).mul(.1)).mul(z(T,3)).mul(s);return o.colorNode=g(O,1),o.uniforms={time:e,spectralLookup:r},o}function pe(t){const e=l(0),r=l(0),o=l(1),a=new A;a.transparent=!0,a.blending=b,a.depthWrite=!1,a.depthTest=!1;const p=B(),m=c(t.texturePrimary,p);let i=m.x,v=ee(i.add(e.mul(.04)));i=j(.2,.98,K(v.mul(2).sub(1)));const u=d(.851,.745,.435),x=c(t.textureColor,P(i,0)).xyz.add(.4).mul(u).mul(10),S=w(r,0,1),f=c(t.textureSpectral,P(0,S)),y=z(f.xyz,d(3));return a.colorNode=g(x.mul(m.xyz).mul(y).mul(o),1),a.uniforms={time:e,spectralLookup:r,opacity:o},a}function me(t){const e=l(0),r=l(1),o=new A;o.transparent=!0,o.blending=b,o.depthWrite=!1,o.depthTest=!0,o.polygonOffset=!0,o.polygonOffsetFactor=-1,o.polygonOffsetUnits=100;const a=B(),p=c(t.texturePrimary,a),m=d(.851,.745,.435),i=p.xyz.mul(m).mul(1.4),v=w(e,0,1),u=c(t.textureSpectral,P(0,v)),x=z(u.xyz,d(2)).add(.2),S=w(i.mul(x).mul(1.4),0,1);return o.colorNode=g(S.mul(r),1),o.uniforms={spectralLookup:e,opacity:r},o}function ye(t,e){return t==="webgpu"?se(e):new D({glslVersion:M,uniforms:{color:{value:new q(1,1,1)},texture0:{value:e.texture0},texture1:{value:e.texture1},idealDepth:{value:1},blurPower:{value:1},blurDivisor:{value:1},sceneSize:{value:1e3},cameraDistance:{value:0},zoomSize:{value:1},scale:{value:100},heatVision:{value:0}},vertexShader:ve,fragmentShader:xe,transparent:!0,depthWrite:!1,blending:b})}function ze(t,e){return t==="webgpu"?ce(e):new D({glslVersion:M,uniforms:{color:{value:new q(16777215)},texture0:{value:e.texture0},texture1:{value:e.texture1},heatVisionTexture:{value:e.heatVisionTexture},spectralLookup:{value:e.spectralLookup},idealDepth:{value:1},blurPower:{value:1},blurDivisor:{value:2},sceneSize:{value:120},cameraDistance:{value:800},zoomSize:{value:1},scale:{value:1},brightnessScale:{value:1},heatVision:{value:0}},vertexShader:ge,fragmentShader:Se,blending:b,depthTest:!1,depthWrite:!1,transparent:!0})}function we(t,e,r){return t==="webgpu"?fe(e):new D({glslVersion:M,uniforms:{texturePrimary:{value:e.texturePrimary},textureColor:{value:e.textureColor},textureSpectral:{value:e.textureSpectral},time:{value:0},spectralLookup:{value:0}},vertexShader:r.vertex,fragmentShader:r.fragment})}function Pe(t,e,r){return t==="webgpu"?de(e):new D({glslVersion:M,uniforms:{texturePrimary:{value:e.texturePrimary},time:{value:0},textureSpectral:{value:e.textureSpectral},spectralLookup:{value:0}},vertexShader:r.vertex,fragmentShader:r.fragment,blending:b,transparent:!0,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:1})}function ke(t,e,r){return t==="webgpu"?pe(e):new D({glslVersion:M,uniforms:{texturePrimary:{value:e.texturePrimary},textureColor:{value:e.textureColor},time:{value:0},textureSpectral:{value:e.textureSpectral},spectralLookup:{value:0},opacity:{value:1}},vertexShader:r.vertex,fragmentShader:r.fragment,blending:b,depthTest:!1,depthWrite:!1,transparent:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:100})}function Le(t,e,r){return t==="webgpu"?me(e):new D({glslVersion:M,uniforms:{texturePrimary:{value:e.texturePrimary},textureSpectral:{value:e.textureSpectral},spectralLookup:{value:0},opacity:{value:1}},vertexShader:r.vertex,fragmentShader:r.fragment,blending:b,transparent:!0,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:100})}const ve=`
  in float size;
  in vec3 customColor;
  out vec3 vColor;
  out float dist;
  uniform float scale;
  void main() {
    vColor = customColor;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    dist = length(mvPosition.xyz);
    gl_PointSize = scale * size / dist;
    gl_Position = projectionMatrix * mvPosition;
  }
`,xe=`
  precision highp float;
  uniform vec3 color;
  uniform sampler2D texture0;
  uniform sampler2D texture1;
  uniform float zoomSize;
  uniform float sceneSize;
  uniform float cameraDistance;
  uniform float heatVision;
  in vec3 vColor;
  in float dist;
  out vec4 pc_fragColor;
  void main() {
    float depth = gl_FragCoord.z / gl_FragCoord.w;
    depth = depth / (sceneSize + cameraDistance);
    vec4 color0 = texture(texture0, gl_PointCoord);
    vec4 color1 = texture(texture1, gl_PointCoord);
    vec4 diffuse = mix(color0, color1, clamp(depth, 0.0, 1.0));
    pc_fragColor = diffuse * vec4(color * vColor, 1.0);
    float bw = length(pc_fragColor.rgb) * 0.15 * heatVision;
    pc_fragColor.rgb = pc_fragColor.rgb * (1.0 - heatVision) + bw;
  }
`,ge=`
  uniform float zoomSize;
  uniform float scale;
  in float size;
  in vec3 customColor;
  in float colorIndex;
  out vec3 vColor;
  out float dist;
  out float starColorLookup;
  void main() {
    vColor = customColor;
    starColorLookup = colorIndex;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    dist = max(length(mvPosition.xyz), 0.1);
    gl_PointSize = clamp(scale * size * zoomSize / dist, 0.0, 100.0);
    gl_Position = projectionMatrix * mvPosition;
  }
`,Se=`
  precision highp float;
  uniform vec3 color;
  uniform sampler2D texture0;
  uniform sampler2D texture1;
  uniform sampler2D spectralLookup;
  uniform float sceneSize;
  uniform float cameraDistance;
  uniform float brightnessScale;
  uniform float heatVision;
  in vec3 vColor;
  in float dist;
  in float starColorLookup;
  out vec4 pc_fragColor;
  void main() {
    float focus = clamp(1.0 - (dist / sceneSize), 0.0, 1.0);
    vec4 color0 = texture(texture0, gl_PointCoord);
    vec4 color1 = texture(texture1, gl_PointCoord);
    vec4 starSpectralColor = texture(spectralLookup, vec2(0.0, clamp(starColorLookup, 0.0, 1.0)));
    vec4 diffuse = mix(color1, color0, focus);
    
    diffuse.rgb *= pow(starSpectralColor.rgb, vec3(2.0));
    
    vec3 blueTarget = (vec3(1.0) - vec3(0.5, 0.6, 0.65)) * cameraDistance;
    diffuse.rgb -= blueTarget * (1.0 - heatVision);
    
    pc_fragColor = diffuse;
  }
`;function Ve(t,e){return t==="webgpu"?ue({texture0:e.texture0,scale:e.scale,opacity:e.opacity}):new D({glslVersion:M,uniforms:{texture0:{value:e.texture0},texture1:{value:e.texture1},scale:{value:e.scale??1},opacity:{value:e.opacity??1}},vertexShader:Ce,fragmentShader:be,transparent:!0,blending:b,depthTest:!1,depthWrite:!1,side:ie})}const Ce=`
  uniform float scale;
  
  in vec3 instanceColor;
  in float instanceSize;
  
  out vec3 vColor;
  out vec2 vUv;
  
  void main() {
    vColor = instanceColor;
    vUv = uv;
    
    // Get instance position from instance matrix
    vec3 instancePos = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
    
    // Transform to view space
    vec4 mvPosition = modelViewMatrix * vec4(instancePos, 1.0);
    float dist = length(mvPosition.xyz);
    
    // Calculate billboard size with distance attenuation
    float billboardSize = scale * instanceSize / dist;
    
    // Billboard offset in view space (position.xy are -0.5 to 0.5)
    vec3 offset = vec3(position.xy * billboardSize, 0.0);
    
    gl_Position = projectionMatrix * vec4(mvPosition.xyz + offset, 1.0);
  }
`,be=`
  precision highp float;
  
  uniform sampler2D texture0;
  uniform sampler2D texture1;
  uniform float opacity;
  
  in vec3 vColor;
  in vec2 vUv;
  
  out vec4 pc_fragColor;
  
  void main() {
    vec4 texColor = texture(texture0, vUv);
    vec3 finalColor = texColor.rgb * vColor;
    pc_fragColor = vec4(finalColor, texColor.a * opacity);
  }
`;export{ye as a,Ve as b,ze as c,Le as d,Pe as e,ke as f,we as g};
