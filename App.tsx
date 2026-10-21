// Imports work like Python's `from x import y`.
// `useState` is a React "hook" that lets a component remember a value between renders.
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

// A component is just a function that returns UI (written in JSX, the HTML-like syntax).
// `export default` is what index.ts imports as `App`.
export default function App() {
  // `const` = a variable you won't reassign (like a constant in Python).
  // useState<number>(0) is a generic: the `<number>` tells TypeScript this state is always
  // a number, similar to a Python type hint `count: int = 0`.
  // It returns a pair, unpacked like Python tuple unpacking: `count, set_count = ...`.
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My First App</Text>
      <Text style={styles.count}>{count}</Text>

      <View style={styles.row}>
        {/* `() => ...` is an arrow function, like Python's `lambda: ...`. */}
        <Pressable style={styles.button} onPress={() => setCount(count - 1)}>
          <Text style={styles.buttonText}>-1</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
          <Text style={styles.buttonText}>+1</Text>
        </Pressable>
      </View>

      <Pressable style={[styles.button, styles.resetButton]} onPress={() => setCount(0)}>
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
    </View>
  );
}

// StyleSheet.create takes an object (like a Python dict) of named styles.
// TypeScript checks these keys, so a typo like `colr` is caught before the app runs.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f5f5f7',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#1c1c1e',
  },
  count: {
    fontSize: 96,
    fontWeight: '700',
    color: '#1c1c1e',
    marginVertical: 32,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
    minWidth: 96,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#8e8e93',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
