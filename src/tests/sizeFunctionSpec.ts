import resize from '../functions/resize';

// here i will test the resize function
describe('check if it work', function () {
  it('check if image resize', function () {
    expect(resize('1', '200', '200')).not.toThrowError;
  });
});
