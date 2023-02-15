/*

Bienvenue:

    ................................................................
    .                                                              .
    .     ####################    ####################      E      .
    .     ####################    ####################      X      .
    .             ####            ####                      E      .
    .             ####            ####                      R      .
    .             ####            ####################      C      .
    .             ####                            ####      I      .
    .             ####                            ####      S      .
    .             ####            ####################      E      .
    .             ####            ####################      S      .
    .                                                              .
    ................................................................

    Objectif : permettre à tous de jour avec différentes fonctionalités de TypeScript
    et obtenir un aperçu des capacités de TypeScript et de ses principes.

    Elements couverts :

        1. Types basiques.
        2. Modification de types.
        3. Union types.
        4. Merged types.
        5. Generiques.
        6. Déclarations de Type.
        7. Augmentation de Module.
        8. Mapping de type avancé.

    Règles et principes :

        1. Eviter d'utiliser le type "any" à tout prix.
        2. La difficulté augment progressivement un exercice après l'autre.
        3. Soyer libre d'envoyer des pull-requests si vous avez des améliorations à apporter!
        4. Faites un retour au créateur de ces exercices.
        5. Profitez.

Bref guide le l'UI :

    +--------------------------------------------------------------+
    | Exercices TypeScript                                         |
    +--------------------------------------------------------------+
    | Exercises 1·2·3·4...   << Navigatation parmi les exercises >>|
    +---------------+----------------------------------------------+
    | Fichiers      | file.ts   << Nom du fichier et status >>     |
    +---------------+----------------------------------------------+
    | file.ts       | 1  import {x} from 'y';                      |
    | dir           | 2                                            |
    |   sub.ts      | 3                                            |
    |               |                                              |
    | << Structure  | << editeur de code du ficheir selectionné >> |
    | de fichier    |                                              |
    | de l'exercice +----------------------------------------------+
    |  courant >>   |                                              |
    |               |   << Erreurs à corriger pour l'exécution >>  |
    |               |                                              |
    +---------------+----------------------------------------------+

Intro:

    Nous démarrons une petite communauté d'utilisateurs.
    Pour des raisons de performances, nous avons décider de stocker
    tous les utilisateurs dans le code.
    De cette manière nous pouvons fournir aux développers plus d'opportunité
    d'interraction avec les utilisateurs. Au moins avec les données liées aux utilisateurs.
    Tous les problèmes liés au RGPD seront résolus un autre jour.
    Cela sera la base de nos futures experimentations pendant ces exercices.

Exercice:

    A partir des données, définir l'interface "User" et l'utiliser en fonction.

*/

export type User = unknown;

export const users: unknown[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: unknown) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);


/* Si vous êtes bloqué :

// https://www.typescriptlang.org/docs/handbook/2/objects.html
*/
