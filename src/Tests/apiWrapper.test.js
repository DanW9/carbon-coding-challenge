import apiWrapper from '../apiWrapper';

const api = apiWrapper()

describe('apiWrapper', () => {
  test('getAllResults method is available', () => {
    expect(api.getAllResults).toBeInstanceOf(Function)
  })

  
});