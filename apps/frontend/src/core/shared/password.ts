export default class Password {
    static generate(size: number = 15): string {
        const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowers = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const specials = '!@#$%&*';
        const groups = [uppers, lowers, numbers, specials];

        const password = [];

        for (let i = 0; i < size; i++) {
            const group = groups[Math.floor(Math.random() * groups.length)];
            const randomIndex = Math.floor(Math.random() * group.length);
            password.push(group[randomIndex]);
        }

        return password.join('');
    }
}

console.log(Password.generate());
