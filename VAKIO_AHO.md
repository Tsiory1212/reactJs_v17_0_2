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
        Qui changera la valeur de "date" ... (variable locale)
    => date : etat actuel, setDate('newDate') : changera la valeur date en newDate


# Javascript
*Opérateur ternaire*
{`condition` ? `value if true`: `value if false`} 

*Opérateur logique*
{`condition` && `value if condition is true`}  <!--  #condition peut être true ou false -->
 
*Push object*
    obj['key3'] = 'value3'        équivaut à      obj = {...obj, 'key3': 'value3'};

*Fonction fléchée*
    appelFuncition      équivaut à       () => appelFuncition()
    **ATTENTION !!!**
    https://fr.reactjs.org/docs/faq-functions.html#how-do-i-pass-an-event-handler-like-onclick-to-a-component