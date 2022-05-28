module.exports = function(Blockly){
  'use strict';

Blockly.JavaScript['serial_usb_init'] = function(block) {
  var dropdown_baudrate = block.getFieldValue('baudrate');
  var code = `Serial.begin(${dropdown_baudrate});\n`;
  return code;
};

Blockly.JavaScript['serial_available'] = function(block) {
  var code = `Serial.available()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['serial_write_newline'] = function(block) {
  var code = `Serial.println();\n`;
  return code;
};

Blockly.JavaScript['serial_write_data'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  var checkbox_newline = (block.getFieldValue('newline') == 'TRUE')? 'ln' : '';
  var code = `Serial.print${checkbox_newline}(${value_text});\n`;
  return code;
};

Blockly.JavaScript['serial_read_line'] = function(block) {
  var code = `Serial.readStringUntil('\\n')`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['serial_read_until'] = function(block) {
  var text_endstring = block.getFieldValue('endstring');
  var code = `Serial.readStringUntil('${text_endstring}')`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

}