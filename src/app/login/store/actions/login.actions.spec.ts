import * as fromLogin from './login.actions';

describe('loadLogins', () => {
  it('should return an action', () => {
    expect(fromLogin.doLogin().type).toBe('[Login] Do Login');
  });
});
