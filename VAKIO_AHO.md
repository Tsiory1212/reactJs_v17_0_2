React v 17.0.2

# Version
*Version view*
=> npm view react version 
<!-- On a créé le projet avec la version 18, donc cette ligne de cmd renvoie toujours la version 18 même si on a déjà modifié la version dans package.json -->

=>  Pour voir la version du react utilisé : "react.development.js"

*Downgrad version*
https://stackoverflow.com/questions/46566830/how-to-use-create-react-app-with-an-older-react-version

# Tools
Extension navigateur : React Developper Tools (Inspection DOM)

# Hooks
*Expression*
 - const [date, setDate] = useState(new Date());
    => date = new Date() 
    => setDate() = useState(), 
        Mais lorsqu'on appelle setDate(), on doit definir le nouveau valeur. 
        Ex : setDate('New val')
        Qui changera la valeur de "date" dans toute l'application
    => date : etat actuel, setDate('newDate) : changera la valeur date en newDate


# Javascript
*Push object*
    obj['key3'] = 'value3'        équivaut à      obj = {...obj, 'key3': 'value3'};