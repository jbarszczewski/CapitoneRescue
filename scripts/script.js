const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const Patches = require('Patches');

(async function() {
const [scoreText, score] = await Promise.all([
  Scene.root.findFirst('scoreText'),
  Patches.outputs.getScalar('score'),
]);
scoreText.text = score.toString();
Diagnostics.log('start');
const speed = score.pinLastValue();
Diagnostics.log(`Last val: ${speed}Speed is: ${speed / 2}`);
await Patches.inputs.setScalar('netSpeed', speed / 2);
Diagnostics.log('end');
})();
