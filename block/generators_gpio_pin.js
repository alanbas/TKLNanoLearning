module.exports = function(Blockly) {
  'use strict';

  Blockly.JavaScript['gpio_digital'] = function(block) {
    var value_pin = block.getFieldValue('PIN');
    var code = `${value_pin}`;
    return code;
  };

  Blockly.JavaScript['gpio_analog'] = function(block) {
    var value_pin = block.getFieldValue('PIN');
    var code = `${value_pin}`;
    return code;
  };

  Blockly.JavaScript['gpio_i2c'] = function(block) {
    var value_pin = block.getFieldValue('PIN');
    var code = `${value_pin}`;
    return code;
  };

  Blockly.JavaScript['gpio_spi'] = function(block) {
    var value_pin = block.getFieldValue('PIN');
    var code = `${value_pin}`;
    return code;
  };

  Blockly.JavaScript['gpio_analog_pin'] = function(block) {
    var value_pin = Blockly.JavaScript.valueToCode(block, 'pin',
                                                   Blockly.JavaScript.ORDER_NONE);
    var code = `${value_pin}`;
    return [code,Blockly.JavaScript.ORDER_NONE];
  };
/*
  Blockly.JavaScript['gpio_pwm_pin'] = function(block) {
    var value_pin = Blockly.JavaScript.valueToCode(block, 'pin',
                                                   Blockly.JavaScript.ORDER_NONE);
    var code = `${value_pin}`;
    return [code,Blockly.JavaScript.ORDER_NONE];
  };
  */
};