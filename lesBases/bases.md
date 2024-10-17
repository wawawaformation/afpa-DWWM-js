# JS: les bases du langage
## Les variables
1. Où écrire le javascript : 5min
    - Dans le HTML -> dans le header, à la fin du body, defer
    - Dans un script
    - les commentaires
1. Les variables : 15 min
    - Déclaration d'une variable (let, const et var)
    - console.log
    - Les types de bases : string, number, boolean, typeof
    - les opérations sur number : +, -, *, /, %
    - la concaténation : +, template literals
    - Exercice (5 minutes)
        Vous gérez une bibliothèque qui contient 500 livres. Vous décidez de faire les opérations suivantes :
            acheter 50 livres de plus ; 
            en jeter 10 ;
            racheter 5 des livres jetés.

        1. Créez une variable totalLivres initialisée à 500 et dans laquelle vous réaliserez ces opérations une par une, jusqu’à avoir le nombre final de livres. 

        2. Vérifiez le résultat grâce à l’instruction console.log.

        3. Créez une nouvelle variable appelée affichageTotalLivres, en utilisant le résultat total précédemment calculé. 

            Cette variable devra contenir la chaîne de caractères ci-dessous :

            “Notre bibliothèque possède TOTAL livres”

            Avec TOTAL qui sera remplacé par le contenu de la variable totalLivres.

        4. Affichez cette phrase grâce à l’instruction console.log.
1. Les objets : 15 min
    - De quoi parle t'on ?
    - Déclarer un objet
    - Ajouter une propriété
    - Accéder à une propriété
    - Exercice (5 minutes)
        Vous êtes chargé de la maintenance d’une borne automatique qui permet de récupérer son billet de cinéma. Vous devez préparer la sortie du prochain film Batman, et faire en sorte que les utilisateurs puissent récupérer un billet pour ce nouveau film.
        Un ticket de cinéma a plusieurs propriétés : un nom de film, un prix, un numéro de salle.

        1. Déclarez un objet ticket avec les propriétés suivantes : nomFim, prix, numeroSalle


        2. Déclarez une variable nom avec votre nom. 

        3. Affichez les informations sur la borne

            Affichez un message sur la borne : “Bonjour NOM, votre film NOMDEFILM est en salle NUMERODELASALLE”.

            Créez une variable texteAffichage qui contient cette phrase, avec NOM, NOMDEFILM et NUMERODELASALLE remplacés par leur vraie valeur.

        4. Vérifiez le résultat avec un console.log. 
1. Les tableaux / listes : 15 min
    - De quoi parle t'on ?
    - Déclarer un tableau
    - Accéder à un élémenter du tableau
    - Compter les éléments d'un tableau avec la méthodes length
    - Quelques méthodes :
        - push()
        - pop()
        - split()
    - MDN : la doc
    - Exercice (5 min):
        Vous organisez une soirée avec des amis. Une bonne soirée, c’est souvent une bonne musique ! Mais pour cela, vous devez vous organiser.
        
        1. Déclarez un tableau playlist qui contiendra trois de vos morceaux préférés.
        2. Stockez le nombre de morceaux disponibles dans une variable totalMorceaux.
        3. Ajoutez deux morceaux au tableau playlist de manière à porter le total à cinq morceaux
        4. Enlevez le dernier morceau de votre playlist
        5. Malheureusement, certains ne sont pas d’accord avec le dernier morceau ajouté. Il va falloir faire du tri ! 😱
        Supprimez le dernier morceau ajouté à votre collection.

## Les conditions  : 15 min
- Qu'est-ce qu'une condition ?
- Les opérateurs de comparaison
- la structure if / else
- le switch case
- Exercice (5 min) :
    Vous utiliserez la function prompt qui permet de récupérer une saisie de l'utilisateur.
    1. Demandez l'age de l'utilisateur
    2. créer un programme qui indique si l'utilisateur peut passer son permis, la conduite accompagnée ou utiliser le bus
    1. dans un autre programme, déclarer une variable couleur.
    2. En utilisant une structure switch / case le programme indique si c'est une couleur chaude ou une couleur froide

## Les boucles : 15 min
- la boucle for
- la boucle while
- parcours d'un tableau avec la methode for...of
- parcours d'un objet avec la methode for...in
- Exercices
    - Exercice while et for :
    Ecrivez un programme qui demande une phrase à copier, le nombre d'occurences voulu et qui écrit la punition à notre place avec while puis avec for
    - Exercice for...of: 
    Utiliser une boucle for...of pour parcourir un tableau de notes et calculer la somme et la moyenne des notes des élèves
    - Exercice for...in :
        1. Étape 1 : Créez un objet appelé etudiant qui contient des propriétés comme nom, age, classe, et notes :

        
            ```js

            const etudiant = {
                nom: "Marie",
                age: 21,
                classe: "Informatique",
                notes: [15, 17, 18, 10]
            };
            ```

        1. Étape 2 : Utilisez une boucle for...in pour parcourir les propriétés de l'objet etudiant. À chaque itération, affichez la clé (nom de la propriété) et la valeur associée.

        1. Étape 3 : Affichez ces informations dans la console avec console.log.



## Le fonctions : 15 min
- de quoi parle t'on ?
- prototype d'une fonction
- une fonction sauvegardée dans une variable
- les fonctions fléchées
- Exercice
    1. Créez trois tableaux contenant différentes parties de phrases :
        - sujets : par exemple, ["Le succès", "La persévérance", "L'échec", "Le courage", "L'apprentissage"]
        - verbes : par exemple, ["est", "vient de", "représente", "encourage à", "se manifeste dans"]
        - compléments : par exemple, ["l'effort constant", "les petits pas", "le dépassement de soi", "la prise de risque", "la résilience"]

        2. Créez une fonction genererCitation qui va :

        - Choisir un élément aléatoire de chacun des trois tableaux.
        - Combiner ces éléments pour former une citation complète.
        - Retourner la citation générée.

        3. Appelez la fonction plusieurs fois et affichez le résultat avec console.log pour voir des citations différentes à chaque exécution.





    






    
