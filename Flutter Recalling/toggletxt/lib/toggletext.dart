import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class ToggleText extends StatefulWidget {
  const ToggleText({super.key});

  @override
  State<ToggleText> createState() => _ToggleTextState();
}

class _ToggleTextState extends State<ToggleText> {
  bool isToggled = false;
  void buttontoggle() {
    setState(() {
      isToggled = !isToggled;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        ElevatedButton(
            onPressed: buttontoggle,
            style: ElevatedButton.styleFrom(
              backgroundColor: isToggled ? Colors.green : Colors.grey,
            ),
            child: Text(isToggled ? "Welcome" : "Hello"))
      ],
    );
  }
}
