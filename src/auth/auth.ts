import { reactive } from 'vue';

export const authState = reactive({
  isLoggedIn: sessionStorage.getItem('isLoggedIn') === 'true'
});

export function loginUser() {
  sessionStorage.setItem('isLoggedIn', 'true');
  authState.isLoggedIn = true;
}

export function logoutUser() {
  sessionStorage.removeItem('isLoggedIn');
  authState.isLoggedIn = false;
}
