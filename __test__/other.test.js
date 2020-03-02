describe('TEST2', () => {
  test('should also return true', done => {
    expect(1 < 2).toBe(true);
    done();
  });

  test('should also return false', done => {
    expect(1 > 2).toBe(false);
    done();
  });
});
