void setup() {
  pinMode(13, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  if (Serial.available()) {
    char Letra = Serial.read();
    if (Letra == 'H') {
      digitalWrite(13, HIGH);
    }
    else if (Letra == 'L') {
      digitalWrite(13, LOW);
    }
  }
}