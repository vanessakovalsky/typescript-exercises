/*

Intro:

    Le filtrage a été completment supprimé du projet.
    Il s'est avéré que cette fonctionnalité n'était pas 
    nécessaire pour les utilisateurs finaux et que nous
    avons passés beaucoup de temps car notre chef de projet
    nous a dit de le faire. La prochaine fois, nous devrions 
    plutôt écouter le chef de produit.

    Tant pis nous avons un nouveau plan. L'ami du CEO Nick
    nous a dit que si nous affichions de manière aléatoire le 
    nom d'un utilisateur de temps en temps dans la communauté, 
    cela serait vraiment fun et le projet serait alors à coup sur
    un succès!

Exercice:

    Implémenter swa qui reçoit 2 persons et les renvoit dans l'ordre
    inverse. La fonction elle-même est déjà là. Nous avons seulement
    besoin de la fournir avec les bons types.
    De plus cette fonction, ne doit pas nécessairement être limité
    au type Person, typons la de sorte à ce qu'elle fonctionne avec
    les deux types définis.

*/

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

function logUser(user: User) {
    const pos = users.indexOf(user) + 1;
    console.log(` - #${pos} User: ${user.name}, ${user.age}, ${user.occupation}`);
}

function logAdmin(admin: Admin) {
    const pos = admins.indexOf(admin) + 1;
    console.log(` - #${pos} Admin: ${admin.name}, ${admin.age}, ${admin.role}`);
}

const admins: Admin[] = [
    {
        type: 'admin',
        name: 'Will Bruces',
        age: 30,
        role: 'Overseer'
    },
    {
        type: 'admin',
        name: 'Steve',
        age: 40,
        role: 'Steve'
    }
];

const users: User[] = [
    {
        type: 'user',
        name: 'Moses',
        age: 70,
        occupation: 'Desert guide'
    },
    {
        type: 'user',
        name: 'Superman',
        age: 28,
        occupation: 'Ordinary person'
    }
];

export function swap(v1, v2) {
    return [v2, v1];
}

function test1() {
    console.log('test1:');
    const [secondUser, firstAdmin] = swap(admins[0], users[1]);
    logUser(secondUser);
    logAdmin(firstAdmin);
}

function test2() {
    console.log('test2:');
    const [secondAdmin, firstUser] = swap(users[0], admins[1]);
    logAdmin(secondAdmin);
    logUser(firstUser);
}

function test3() {
    console.log('test3:');
    const [secondUser, firstUser] = swap(users[0], users[1]);
    logUser(secondUser);
    logUser(firstUser);
}

function test4() {
    console.log('test4:');
    const [firstAdmin, secondAdmin] = swap(admins[1], admins[0]);
    logAdmin(firstAdmin);
    logAdmin(secondAdmin);
}

function test5() {
    console.log('test5:');
    const [stringValue, numericValue] = swap(123, 'Hello World');
    console.log(` - String: ${stringValue}`);
    console.log(` - Numeric: ${numericValue}`);
}

[test1, test2, test3, test4, test5].forEach((test) => test());

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// https://www.typescriptlang.org/docs/handbook/2/generics.html
