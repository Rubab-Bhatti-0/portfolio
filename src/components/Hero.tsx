import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full opacity-40">
        <canvas
          id="shader-canvas"
          style={{ display: "block", width: "100%", height: "100%" }}
        />
      </div>

      {/* Content */}
      <div className="max-w-container-max mx-auto px-gutter md:px-xl relative z-10 grid md:grid-cols-2 gap-xl items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="reveal-on-scroll active"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-primary-container/10 text-primary font-label-md mb-md">
            Available for Collaboration
          </span>

          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface-variant mb-md leading-tight">
            Computer Science Student · <span className="text-primary">Full-Stack Developer & ML Engineer</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-on-surface-variant mb-8">
            {profile.summary}
          </p>

          <div className="flex flex-wrap gap-sm mt-2">
            <a
              href="#projects"
              className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md flex items-center gap-xs hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              View Projects
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="bg-surface-container-high text-on-surface px-8 py-4 rounded-full font-label-md flex items-center gap-xs hover:shadow-lg transition-all"
            >
              GitHub
              <span className="material-symbols-outlined">north_east</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column - Stats/Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="reveal-on-scroll active"
          style={{ transitionDelay: "200ms" }}
        >
          <div className="glass-card p-lg rounded-2xl border border-outline-variant/30 lightning-glow">
            <div className="space-y-md">
              <div>
                <p className="text-outline font-label-sm uppercase tracking-wider text-on-surface-variant">
                  Current Role
                </p>
                <p className="font-headline-md text-on-surface mt-base">
                  {profile.role}
                </p>
              </div>
              <div className="border-t border-outline-variant/30 pt-md">
                <p className="text-outline font-label-sm uppercase tracking-wider text-on-surface-variant">
                  Education
                </p>
                <p className="font-body-md text-on-surface mt-base">
                  {profile.education.degree}
                </p>
                <p className="text-on-surface-variant text-body-md mt-xs">
                  {profile.education.school}
                </p>
                <p className="text-on-surface-variant text-body-md mt-xs">
                  {profile.education.period}
                </p>
              </div>
              <div className="border-t border-outline-variant/30 pt-md">
                <p className="text-outline font-label-sm uppercase tracking-wider text-on-surface-variant">
                  Location
                </p>
                <p className="font-body-md text-on-surface mt-base">{profile.location}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* WebGL Shader Script */}
      <script>{`
        (function() {
          const canvas = document.getElementById('shader-canvas');
          if (!canvas) return;

          function syncSize() {
            const w = canvas.clientWidth || 1280;
            const h = canvas.clientHeight || 720;
            if (canvas.width !== w || canvas.height !== h) {
              canvas.width = w;
              canvas.height = h;
            }
          }

          if (typeof ResizeObserver !== 'undefined') {
            new ResizeObserver(syncSize).observe(canvas);
          }
          syncSize();

          const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
          if (!gl) return;

          const vs = \`attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}\`;

          const fs = \`precision highp float;
varying vec2 v_texCoord;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 uv = v_texCoord;
    
    float noise1 = sin(uv.x * 2.0 + u_time * 0.2) * 0.5 + 0.5;
    float noise2 = cos(uv.y * 3.0 - u_time * 0.3) * 0.5 + 0.5;
    
    vec3 color1 = vec3(0.31, 0.27, 0.9);
    vec3 color2 = vec3(0.98, 0.45, 0.09);
    vec3 color3 = vec3(0.99, 0.99, 1.0);
    
    vec3 color = mix(color1, color2, noise1 * 0.5);
    color = mix(color, color3, noise2 * 0.7);
    
    float vignette = 1.0 - length(uv - 0.5) * 0.4;
    
    gl_FragColor = vec4(color * vignette, 0.08);
}\`;

          function cs(type, src) {
            const s = gl.createShader(type);
            gl.shaderSource(s, src);
            gl.compileShader(s);
            return s;
          }

          const prog = gl.createProgram();
          gl.attachShader(prog, cs(gl.VERTEX_SHADER, vs));
          gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, fs));
          gl.linkProgram(prog);
          gl.useProgram(prog);

          const buf = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, buf);
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

          const pos = gl.getAttribLocation(prog, 'a_position');
          gl.enableVertexAttribArray(pos);
          gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

          const uTime = gl.getUniformLocation(prog, 'u_time');
          const uRes = gl.getUniformLocation(prog, 'u_resolution');

          function render(t) {
            if (typeof ResizeObserver === 'undefined') syncSize();
            gl.viewport(0, 0, canvas.width, canvas.height);
            if (uTime) gl.uniform1f(uTime, t * 0.001);
            if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            requestAnimationFrame(render);
          }
          render(0);
        })();
      `}</script>
    </section>
  );
}
