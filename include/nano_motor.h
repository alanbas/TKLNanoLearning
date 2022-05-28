void motor(int pin, int speed){
	int _speed;
	int _dir;
	//digitalWrite(STBY, 1);
	
	if(speed < 0){
		_speed = abs(speed);
		_dir = -1;
	}else if(speed > 0){
		_speed = speed;
		_dir = 1;
	}else{
		_speed = 0;
		_dir = 0;
	}
	
	if(_speed > 100) _speed = 100;
	
	_speed = _speed * 2.55;
	
	if(pin == 1){
		if(_dir == 1){
			digitalWrite(AIN1, 1);
			digitalWrite(AIN2, 0);
			analogWrite(PWMA, _speed);
		}else if(_dir == -1){
			digitalWrite(AIN1, 0);
			digitalWrite(AIN2, 1);
			analogWrite(PWMA, _speed);
		}else if(_dir == 0){
			digitalWrite(AIN1, 1);
			digitalWrite(AIN2, 1);
		//	analogWrite(PWMA, _speed);
		}
	}else if(pin == 2){
		if(_dir == 1){
			digitalWrite(BIN1, 1);
			digitalWrite(BIN2, 0);
			analogWrite(PWMB, _speed);
		}else if(_dir == -1){
			digitalWrite(BIN1, 0);
			digitalWrite(BIN2, 1);
			analogWrite(PWMB, _speed);
		}else if(_dir == 0){
			digitalWrite(BIN1, 1);
			digitalWrite(BIN2, 1);
		//	analogWrite(PWMA, _speed);
		}
	}
	
}

void ao() {
	// AIN1 มอเตอร์ 1 เดินหน้า
	digitalWrite(AIN1, 1);
	// AIN2 มอเตอร์ 1 ถอยหลัง
	digitalWrite(AIN2, 1);
	// BIN1 มอเตอร์ 2 เดินหน้า
	digitalWrite(BIN1, 1);
	// BIN2 มอเตอร์ 2 ถอยหลัง
	digitalWrite(BIN2, 1);
	// ความเร็วมอเตอร์ 1
	analogWrite(PWMA, 0);  // ความเร็วมอเตอร์ 2
	analogWrite(PWMB, 0);
}
void fd(int speed=100) {
	speed = abs(speed) * 2.55;
	if(speed > 255) speed = 255;
	
	digitalWrite(AIN1, 1);
	digitalWrite(AIN2, 0);
	digitalWrite(BIN1, 1);
	digitalWrite(BIN2, 0);
	analogWrite(PWMA, speed);
	analogWrite(PWMB, speed);
}
void bk(int speed=100) {
	speed = abs(speed) * 2.55;
	if(speed > 255) speed = 255;
	
	digitalWrite(AIN1, 0);
	digitalWrite(AIN2, 1);
	digitalWrite(BIN1, 0);
	digitalWrite(BIN2, 1);
	analogWrite(PWMA, speed);
	analogWrite(PWMB, speed);
}
void tl(int speed=100) {
	speed = abs(speed) * 2.55;
	if(speed > 255) speed = 255;
	
	digitalWrite(AIN1, 0);
	digitalWrite(AIN2, 0);
	digitalWrite(BIN1, 1);
	digitalWrite(BIN2, 0);
	analogWrite(PWMA, speed);  
	analogWrite(PWMB, speed);
}
void tr(int speed=100) {
	speed = abs(speed) * 2.55;
	if(speed > 255) speed = 255;
	
	digitalWrite(AIN1, 1);
	digitalWrite(AIN2, 0);
	digitalWrite(BIN1, 0);
	digitalWrite(BIN2, 0);
	analogWrite(PWMA, speed);
	analogWrite(PWMB, speed);
}
void sl(int speed=100) {
	speed = abs(speed) * 2.55;
	if(speed > 255) speed = 255;
	
	digitalWrite(AIN1, 0);
	digitalWrite(AIN2, 1);
	digitalWrite(BIN1, 1);
	digitalWrite(BIN2, 0);
	analogWrite(PWMA, speed);
	analogWrite(PWMB, speed);
}
void sr(int speed=100) {
	speed = abs(speed) * 2.55;
	if(speed > 255) speed = 255;
	
	digitalWrite(AIN1, 1);
	digitalWrite(AIN2, 0);
	digitalWrite(BIN1, 0);
	digitalWrite(BIN2, 1);
	analogWrite(PWMA, speed);
	analogWrite(PWMB, speed);
}
////////////////////////////////////////////////////