const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const Patches = require('Patches');

(async function() {
const [scoreText, score] = await Promise.all([
  Scene.root.findFirst('scoreText'),
  Patches.outputs.getScalar('score'),
]);
scoreText.text = score.toString();
})();
