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
      children: [
        ElevatedButton(
            onPressed: () {
              setState(() {
                counter++;
              });
            },
            child: const Icon(Icons.add)),
      ],
    );
  }
}
