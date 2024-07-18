interface User {
    username: string;
    password: string;
}

const users: User[] = [
    { username: 'henry', password: 'Caracas01.' },
    { username: 'tcs', password: 'Caracas02.' },
];

export const login = (username: string, password: string): Promise<boolean> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const user = users.find((user) => user.username === username && user.password === password);
            resolve(!!user);
        }, 1000); // Simulamos un retraso de 1 segundo para simular la solicitud a un servidor
    });
};