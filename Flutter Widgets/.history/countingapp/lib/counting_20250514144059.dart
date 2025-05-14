import 'package:flutter/material.dart';

int counter = 0;

class CountingApp extends StatefulWidget {
  const CountingApp({super.key});

  @override
  State<CountingApp> createState() => _CountingAppState();
}

class _CountingAppState extends State<CountingApp> {
  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            ElevatedButton(
                onPressed: () {
                  setState(() {
                    if (counter >= 0) {
                      counter++;
                    }
                  });
                },
                child: const Icon(Icons.add)),
            ElevatedButton(
                onPressed: () {
                  setState(() {
                    if (counter >= 0) {
                      counter--;
                    }
                  });
                },
                child: const Icon(Icons.remove)),
          ],
        ),
        Text("$counter"),
      ],
    );
  }
}
