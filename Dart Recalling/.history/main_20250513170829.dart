import 'dart:io';

void main() {
  print("Enter your name:");
  String? student_name = stdin.readLineSync();
  print("Enter your Subject1 Marks");
  String? sub1_marks_input = stdin.readLineSync();
  int mark1 = int.parse(sub1_marks_input!);
  print("Enter your Subject2 Marks");
  String? sub2_marks_input = stdin.readLineSync();
  int mark2 = int.parse(sub2_marks_input!);
  print("Enter your Subject3 Marks");
  String? sub3_marks_input = stdin.readLineSync();
  int mark3 = int.parse(sub3_marks_input!);
}
