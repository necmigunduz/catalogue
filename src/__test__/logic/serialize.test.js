import serialize from '../../assets/logic/serialize';

describe('serialize', () => {
  it('creates url to make a search on api', () => {
    const base = 'https://www.abc.net?';
    const extensions = {
      a: 'valueA',
      b: 'valueB',
    };
    const url = serialize(base, extensions);
    expect(url).toBe('https://www.abc.net?a=valueA&b=valueB&');
  });
  it('ignores empty extensions', () => {
    const base = 'https://www.abc.net?';
    const extensions = {
      a: '',
      c: 'valueC',
    };
    const url = serialize(base, extensions);
    expect(url).toBe('https://www.abc.net?c=valueC&');
  });
});
