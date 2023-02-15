/*

Intro:

    Les 2 utilisateurs aime l'idée de la communauté. Nous devons avancer
    et ajouter certaines fonctionnalités. 
    Ajoutons une paire d'administrateurs.

    Itinialement nous acions les utilisateurs dans la base de données en mémoire. 
    Après l'introduction des Adminn, nous devons fixer les types pour que tout
    fonctionne correctement ensemble.

Exercice:

    Le Type "Person" est manquant, merci de le définir et de 
    l'utiliser dans le tableaux des personnes et dans la fonction
    logPerson afin de corriger toutes les erreurs TS.

*/

interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = unknown;

export const persons: User[] /* <- Person[] */ = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/types-from-types.html
