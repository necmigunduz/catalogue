import storage from '../../assets/logic/localStorage';

window.localStorage = { filters: {} };

describe('save', () => {
  it('stringfies and saves filters', () => {
    expect(localStorage.filters).not.toBeTruthy();
    const data = { q: 'chicken, cheese', dishtype: 'dinner' };
    storage.save(data);
    expect(localStorage.filters).toBeTruthy();
  });
});

describe('load', () => {
  it('brings whatever stored in storage back', () => {
    const filters = storage.load();
    expect(filters.q).toBe('chicken, cheese');
    expect(filters.dishtype).toBe('dinner');
  });
});
