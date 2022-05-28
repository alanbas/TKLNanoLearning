
//Block from IKB1  & NanoBot


module.exports = function(Blockly) {

Blockly.JavaScript['Tkl_servo'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'servo(' + dropdown_ch + ', ' + value_angle + ');\n';
  return code;
};

Blockly.JavaScript['Tkl_motor_stop'] = function(block) {  
  var code = 'ao();\n';
  return code;
};

Blockly.JavaScript['Tkl_motor'] = function(block) {
  var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1,  ' + value_speed1 + ');\t';
  code += 'motor(2,  ' + value_speed2 + ');\n';
  return code;
};


//////////////////////////////////
  Blockly.JavaScript['Tkl_all_motor'] = function(block) {
 //var dropdown_ch = block.getFieldValue('ch');
 var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  
  if(dropdown_dir == '1'){
	var code = 'fd( ' + value_speed + ');\n';
  }else if(dropdown_dir == '2'){
	var code = 'bk( ' + value_speed + ');\n';
  }	///****
	else if(dropdown_dir == '3'){
	var code = 'sl( ' + value_speed + ');\n';

  }else if(dropdown_dir == '4'){
	var code = 'sr(' + value_speed + ');\n';
  }  
	else if(dropdown_dir == '5'){
	var code = 'tl( ' + value_speed + ');\n';

  }else if(dropdown_dir == '6'){
	var code = 'tr(' + value_speed + ');\n';
  }  
  return code;
};
}
