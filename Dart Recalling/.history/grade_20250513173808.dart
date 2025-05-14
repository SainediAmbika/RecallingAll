int totalmarks(int mark1, int mark2, int mark3) {
  return mark1 + mark2 + mark3;
}

int averagemarks(int total) {
  return (total / 3).round();
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
