export async function getData() { // function sederhana ini tidak membutuhkan async await, tapi karena async di deklarasikan dan tidak pernah menggunakan await jadi dianggap error karena konfigurasi 'require-await'
  return 'Hello world';
};

export function sum(a, b) {
  let total = a + b; // variabel total menggunakan let tidak pernah dirubah setelah di deklarasikan, ini akan dianggap error oleh eslint karena eslint config di set 'prefer-const' yg artinya jika variable tidak pernah dirubah lebih baik menggunakan const
  return total;
}