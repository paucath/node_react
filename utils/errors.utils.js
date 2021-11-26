module.exports.signUpErrors = (err) =>{
    let errors = { pseudo:'' , email:'' , password:''};

    if (err.message.includes('pseudo'))
        errors.pseudo='pseudo incorrect ';
    if (err.message.includes('email'))
        errors.email='email incorrect ';
    if (err.message.includes('password'))
        errors.password='le mot de passe doit faire 6 carctères minimum';
    if (err.code == 11000 && Object.keys(err.keyValue)[0].includes('email'))
        errors.email ='cet email est déja enregistré';
    if (err.code == 11000 && Object.keys(err.keyValue)[0].includes('pseudo'))
        errors.pseudo ='ce pseudo est déja enregistré';

    return errors 
};

module.exports.signInErrors = (err) =>{
    let errors = {  email:'' , password:''};

    if (err.message.includes('email'))
        errors.email='email incorrect';
    if (err.message.includes('password'))
        errors.password='mot de passe incorrect';

    return errors 
};

module.exports.uploadErrors = (err) =>{
    let errors = { format : '' , maxSize:''};

    if(err.message.includes('invalid file'))
        errors.format = "Format incompatible";
    
        if(err.message.includes('max size'))
        errors.maxSize = "Le fichier dépasse 500ko";
    
    return errors 
}