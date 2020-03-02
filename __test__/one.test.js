describe('TEST', () => {
  test('should return true', done => {
    expect(1 < 2).toBe(true);
    done();
  });

  test('should return false', done => {
    expect(1 > 2).toBe(false);
    done();
  });
});
