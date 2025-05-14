import 'dart:io';

// Function to calculate total marks
int totalmarks(int m1, int m2, int m3) {
  return m1 + m2 + m3;
}

// Function to calculate average
int averagemarks(int total) {
  return (total / 3).round();
}

// Function to calculate grade
String grade(int average) {
  if (average >= 90)
    return "A+";
  else if (average >= 80)
    return "A";
  else if (average >= 70)
    return "B";
  else if (average >= 60)
    return "C";
  else if (average >= 50)
    return "D";
  else if (average >= 40)
    return "E";
  else
    return "F";
}
