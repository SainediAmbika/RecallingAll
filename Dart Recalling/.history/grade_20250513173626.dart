int total = 0;
int average = 0;
String? Grade;
int totalmarks(mark1, mark2, mark3) {
  total = mark1 + mark2 + mark3;
  return total;
}

int averagemarks(total) {
  average = total / 3;
  return average;
}

String? grade(average) {
  print(average);
  (average >= 90)
      ? Grade = "A+"
      : (average >= 80)
          ? Grade = "A"
          : (average >= 70)
              ? Grade = "B"
              : (average >= 60)
                  ? Grade = "C"
                  : (average >= 50)
                      ? Grade = "D"
                      : (average >= 40)
                          ? Grade = "E"
                          : Grade = "F";
  return Grade;
}
