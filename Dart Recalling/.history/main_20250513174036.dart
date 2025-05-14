import 'dart:async';
import 'dart:io';

import 'grade.dart';

void main() {
  // Taking name input (optional)
  stdout.write("Enter your name: ");
  String? name = stdin.readLineSync();

  // Taking marks input
  stdout.write("Enter Subject 1 Marks: ");
  int mark1 = int.parse(stdin.readLineSync()!);

  stdout.write("Enter Subject 2 Marks: ");
  int mark2 = int.parse(stdin.readLineSync()!);

  stdout.write("Enter Subject 3 Marks: ");
  int mark3 = int.parse(stdin.readLineSync()!);

  // Calculations
  int total = totalmarks(mark1, mark2, mark3);
  int avg = averagemarks(total);
  String gradeResult = grade(avg);

  // Output
  print("\n----- Report -----");
  print("Name   : $name");
  print("Total  : $total");
  print("Average: $avg");
  print("Grade  : $gradeResult");
}
