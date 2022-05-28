module.exports = function(Blockly){
  'use strict';
var sensor_colour= Blockly.Msg.SENSOR_HUE ;

Blockly.Blocks['sw1_press'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wait for Button press");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(sensor_colour);
    this.setTooltip("");
  }
};

Blockly.Blocks['analog_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Analog Read ")
        .appendField(new Blockly.FieldDropdown([
                                            ["(A0)", "A0"],
                                            ["(A1)", "A1"],
                                            ["(A2)", "A2"],
                                            ["(A3)", "A3"],
                                            ["(A4)", "A4"],
                                            ["(A5)", "A5"],
                                            ["(A6)", "A6"],																					
                                            ["(A7)Knob", "A7"]]), "pin");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(290);
 this.setTooltip("read analog value from pin");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['digital_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Digital Read ")
        .appendField(new Blockly.FieldDropdown([
                                            ["(A0)", "A0"],
                                            ["(A1)", "A1"],
                                            ["(A2)", "A2"],
                                            ["(A3)", "A3"],
                                            ["(A4)", "A4"],
                                            ["(A5)", "A5"],										
                                            ["(button D2)", "2"]]), "pin");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(290);
 this.setTooltip("read digital value from pin");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['nano_beep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Buzzer beep");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("Buzzer beep");
 this.setHelpUrl("");
  }
};


}
