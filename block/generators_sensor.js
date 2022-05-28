module.exports = function(Blockly){
  'use strict';

Blockly.JavaScript['sw1_press'] = function(block) {  
  var code = 'wait();\n';
  //var code = '';
  return code;
};

Blockly.JavaScript['analog_sensor'] = function(block) {
  var value_pin = block.getFieldValue('pin');
  var code = `analogRead(${value_pin})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['digital_sensor'] = function(block) {
  var value_pin = block.getFieldValue('pin');
  var code = `(digitalRead(${value_pin})==1)?1:0`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['nano_beep'] = function(block) {  
  var code = 'beep();\n';
  return code;
};


}