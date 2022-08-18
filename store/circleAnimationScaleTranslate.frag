#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float circleShape (vec2 position, float rad) {
    return step(clamp(rad + cos(u_time), 0.2, 0.49), length((position / sin(u_time))- vec2(0.5)));
}


void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(0.4627, 0.7804, 0.7373);
    vec3 slice = vec3(circleShape(st, 0.2)) * color;
    gl_FragColor = vec4(slice, 1.0);
}