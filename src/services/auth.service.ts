import { Auth } from '@aws-amplify/auth';

function register(email: string, password: string) {
  return Auth.signUp(email, password);
}
function login(email: string, password: string) {
  return Auth.signIn(email, password);
}

function logout() {
  return Auth.signOut();
}

export { register, login, logout };
