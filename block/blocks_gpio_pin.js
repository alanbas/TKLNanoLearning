module.exports = function(Blockly) {
  'use strict';

  Blockly.Blocks['gpio_digital'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("digital")
          .appendField(new Blockly.FieldDropdown([
            ["D2","2"], 
            ["D3","3"], 
            ["D4","4"], 
            ["D5","5"],
            ["D6","6"], 
            ["D7","7"],
            ["D8","8"], 
            ["D9","9"],
            ["D10","10"],
            ["D11","11"],
            ["D12","12"],
            ["D13","13"]]), 
            "PIN");
      this.setOutput(true, "Number");
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['gpio_analog'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("analog")
          .appendField(new Blockly.FieldDropdown([
            ["A0","A0"], 
            ["A1","A1"], 
            ["A2","A2"], 
            ["A3","A3"],
            ["A4","A4"], 
            ["A5","A5"],
			["1","1"],
			["2","2"],
			["3","3"],
			["4","4"],
			["5","5"],
			["6","6"],
			["7","7"],
			["8","8"],
			["9","9"],
			["10","10"],
			["11","11"],
			["12","12"],
			["13","13"],
			["14","14"],
			["15","15"],
			["16","16"],
			["17","17"],
			["18","18"],
			["19","19"],
			["20","20"],
			["21","21"],
			["22","22"],
			["23","23"],
			["24","24"],
			["25","25"],
			["26","26"],
			["27","27"],
			["28","28"],
			["29","29"],
			["30","30"],
			["31","31"]
			]), 
            "PIN");
       this.setOutput(true, "Number");
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['gpio_i2c'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("I2C")
          .appendField(new Blockly.FieldDropdown([
            ["SDA","A4"],  
            ["SCL","A5"]]), 
            "PIN");
       this.setOutput(true, "Number");
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['gpio_spi'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("SPI")
          .appendField(new Blockly.FieldDropdown([
            ["CS","10"],  
            ["MOSI","11"],  
            ["MISO","12"],  
            ["SCK","13"]]), 
            "PIN");
       this.setOutput(true, "Number");
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['gpio_analog_pin'] = {
    init: function() {
      this.appendDummyInput().
      appendField("Analog pin ").
      appendField(new Blockly.FieldDropdown([
                                              ["A0", "A0"],
                                              ["A1", "A1"],
                                              ["A2", "A2"],
                                              ["A3", "A3"],
                                              ["A4", "A4"],
                                              ["A5", "A5"]]), "pin");
      this.setOutput(true, "AnalogPIN");
      this.setColour(180);
      this.setTooltip("Analog pin");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['gpio_pwm_pin'] = {
    init: function() {
      this.appendDummyInput().
      appendField("PWM pin ").
      appendField(new Blockly.FieldDropdown([
                                              ["3", "3"],
                                              ["5", "5"],
                                              ["6", "6"],
                                              ["9", "9"],
                                              ["10", "10"],
                                              ["11", "11"]]), "pin");
      this.setOutput(true, "PWMPIN");
      this.setColour(180);
      this.setTooltip("PWM pin");
      this.setHelpUrl("");
    }
  };
  
};