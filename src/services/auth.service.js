// Aquí usamos usuario y contraseña hardcodeados para ejemplo

export async function validateUser(username, password) {
  const validUser = 'admin';
  const validPass = '123456';

  return username === validUser && password === validPass;
}
