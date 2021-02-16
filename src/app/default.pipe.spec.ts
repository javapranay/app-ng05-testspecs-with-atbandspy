import { DefaultPipe } from './default.pipe';

describe('DefaultPipe', () => {
  let pipe: DefaultPipe;

  beforeEach(() => {
    pipe = new DefaultPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('providing no value return fallback', () => {
    expect(pipe.transform('', 'http://place-hold.it/300')).toBe('http://place-hold.it/300');
  });

  it('providing a value return value', () => {
    expect(pipe.transform('http://place-hold.it/300', 'fallbck')).toBe('http://place-hold.it/300');
  });

  it('asking for https returns https', () => {
    expect(pipe.transform('', 'http://place-hold.it/300', true)).toBe('https://place-hold.it/300');
  });
});
