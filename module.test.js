// module.test.js
import mut from './module.js'; // MUT = Module Under Test

//sum()
test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing sum -- adding negative number', () => {
    const expected = 3;
    const got = mut.sum(4, -1);
    expect(got).toBe(expected);
  });

// div()
test('Testing div -- dividing regular num', () => {
  const expected = 50;
  const got = mut.div(100, 2);
  expect(got).toBe(expected);
});
test('Testing div -- dividing negative num', () => {
    const expected =-5;
    const got = mut.div(10,-2);
    expect(got).toBe(expected);
  });

test('Testing div -- division by zero', () => {
  const got = mut.div(10, 0);
  expect(got).toBe(Infinity); 
});

//containsNumbers()
test('Testing containsNumbers -- contains number', () => {
  const input = "bananananananananananaaaaaaaaaaaaaaaaaaaaa1peiahfiuh";
  const got = mut.containsNumbers(input);
  expect(got).toBe(true);
});

test('Testing containsNumbers -- no number', () => {
  const input = "nonumbersherelol!?????????????????>>>>>";
  const got = mut.containsNumbers(input);
  expect(got).toBe(false);
});

test('Testing containsNumbers -- empty string', () => {
  const input = "";
  const got = mut.containsNumbers(input);
  expect(got).toBe(false);
});

test('Testing containsNumbers -- a space', () => {
    const input = " ";
    const got = mut.containsNumbers(input);
    expect(got).toBe(false);
  });

