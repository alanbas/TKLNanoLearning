#include <Arduino.h>
#include <Wire.h>  
#include <SPI.h>

#include "Servo.h"
#include "Adafruit_GFX.h"
#include "Adafruit_SSD1306.h"

// Motor drive TB6612FNG config pin
#define AIN1 4
#define AIN2 9
#define BIN1 8
#define BIN2 7
#define PWMA 5
#define PWMB 6
#define _knob A7
#define _BT 2
#define _BZ 3

#include "nano_motor.h"
//#include "nano_beep.h"

Adafruit_SSD1306 display(128, 64);

typedef int Number;
typedef int Boolean;


#define _servo1 10
#define _servo2 11
#define _servo3 12
#define _servo4 10

#define _servo5 11
#define _servo6 12

#include "nano_servo.h"




//void wait();
//void beep();

void wait(){
	// Press for button press //
	display.clearDisplay();
	display.setTextColor(WHITE, BLACK); 
	display.setCursor(30, 10);
	display.setTextSize(2);
	display.println("Press!");
	display.setCursor(10, 30);
	display.println("Button D2");
	display.setTextSize(1);
	display.setCursor(15, 50);
	display.setTextColor(BLACK, WHITE);
	display.println("to start program");
	display.setTextColor(WHITE, BLACK);
	display.display();
  
	int button = 1;
	do{
		button = digitalRead(_BT);
	}//while(button);
	 while(!button);
	// End - Press for button press //
}

void beep(){
  tone(_BZ,1000,100);delay(150);
}
