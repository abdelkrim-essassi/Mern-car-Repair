import { useState } from 'react';
import './SignUp.css'

const SignUp = () => {
    const[type,setType]=useState()
  return (
    <div className='creation'>
    <button  className='btnHaut'
        onClick={() => setType("particulier")} 
        style={{ backgroundColor: type === "particulier" ? "blue" : "white", color: type=="particulier"?"white":"black"  }}
    >
        Particulier
    </button>
    <button className='btnHaut'
        onClick={() => setType("Mecanicien")} 
        style={{backgroundColor: type === "Mecanicien" ? "blue" : "white", color: type=="Mecanicien"?"white":"black" }}
    >
        Mecanicien
    </button>
    <div className='inputs'>
    {type === "particulier" ? (
        <div className='formulaire'>
            <h2>Mes informations personnelles</h2>
             <input type="text" placeholder='Prenom' />
             <input type="text" placeholder='Nom' />
             <input type="email" placeholder='Email' />
             <input type="password" placeholder='Mot de passe' />
             <input type="text" placeholder='Adresse' />
             <input type="tel" placeholder='Téléphone' />
             <button className='btnCrée'>Crée mon Compte</button>
             <span>Avez vous déjà un compte ? <a href='/'>Se connecter </a></span>
        </div>
    ) : (
        <div className='formulaire'>
            <h2>Mes informations personnelles</h2>
            <input type="text" placeholder='Prenom'/>
            <input type="text" placeholder='Nom'/>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Mot de passe'/>
            <input type="tel" placeholder='Téléphone' />
            <input type="text" name="cin" maxlength="8" oninput="this.value = this.value.replace(/[^0-9]/g, '')" placeholder="CIN (8 chiffres)"/>
            <label for="justificatif">Certificat professionnel *</label>
            <input type="file" name="justificatif" id="justificatif" accept=".pdf,.jpg,.png" required/>
            <button className='btnCrée'>Crée mon Compte</button>
           <span>Avez vous déjà un compte ? <a href='/'>Se connecter </a></span>


        </div>
    )}

    </div>
</div>
  )
}

export default SignUp