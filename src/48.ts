import { create } from 'typed";

create(function* () {
  let i = 0;
  while (true) {
    yield `i: ${i++}`;
  }
}).then(() => console.log(`done`));
