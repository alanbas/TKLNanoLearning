#include "TKLNanoLearning.h"

${EXTINC}
${VARIABLE}
${FUNCTION}

void setup()
{
    pinMode(AIN1, OUTPUT);
	pinMode(AIN2, OUTPUT);
	pinMode(BIN1, OUTPUT);
	pinMode(BIN2, OUTPUT);
	pinMode(PWMA, OUTPUT);
	pinMode(PWMB, OUTPUT);
	pinMode(_BT,INPUT);
	display.begin(SSD1306_SWITCHCAPVCC, 0x3C); 
	//////////////
	display.clearDisplay();
	display.setTextColor(WHITE, BLACK); 
	display.setCursor(10, 10);
	display.setTextSize(2);
	display.println("TKLRobot");
	display.setTextSize(1);
	display.setCursor(10, 30);
	display.println("NanoLearningBot");
	display.setTextSize(1);
	display.setCursor(0, 51);
	display.setTextColor(BLACK, WHITE);
	display.println(" www.tklrobot.com");
	display.setTextColor(WHITE, BLACK);
	display.display();
	/////////////
	beep();beep();

  ${SETUP_CODE}
  ${BLOCKSETUP}
}
void loop()
{
  
  ${LOOP_CODE}
  ${LOOP_EXT_CODE}
}