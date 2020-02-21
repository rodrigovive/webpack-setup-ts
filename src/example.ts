const a = 123;
console.log('test', a);

type User = {
  name: string;
  age: number;
};

function getUserName(user: User): string {
  return user.name;
}

getUserName({
  name: 'test',
});
