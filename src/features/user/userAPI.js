export function loadUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        {
          name: "Mickel Jackson",
        },
        1000
      );
    });
  });
}
