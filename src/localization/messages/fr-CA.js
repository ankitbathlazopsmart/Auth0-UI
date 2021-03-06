import { LOCALES } from "../constants";

const fr = {
    [LOCALES.FRENCH]: {
        Welcome_back_to: "Bon retour à",
        emailAddress: "Adresse e-mail",
        password: "le mot de passe",
        signIn: "s'identifier",
        choose_your_signIn_method_continue:
            "Choisissez votre méthode de connexion pour continuer",
        Enter_your_email_address_so_we_can_find_your_account:
            "Entrez votre adresse e-mail afin que nous puissions trouver votre compte.",
        Sign_in_with_a_onetime_passcode:
            "Connectez-vous avec un code d'accès à usage unique",
        or: "ou",
        signIn_with_password: "se connecter avec mot de passe",
        one_time_passcode: "code d'accès à usage unique",
        continue: "Continuez",
        access_denied: "Mauvaise adresse de messagerie ou mot de passe.",
        too_many_attempts:
            "Votre compte a été bloqué après plusieurs tentatives de connexion consécutives. Nous vous avons envoyé un e-mail avec des instructions sur la façon de le débloquer",
        Welcome_to_dashboard: "bienvenue au tableau de bord",
        invalid_request:
            "Corps de requête non valide. Tous et uniquement client_id, type d'identification, nom d'utilisateur, otp, domaine sont requis",
        unauthorized_client: "Connexion d'origine croisée non autorisée.",
        unsupported_credential_typ: "Paramètre de type d'identifiant inconnu.",
        blocked_user: "utilisateur bloqué",
        password_leaked:
            "Cette tentative de connexion a été bloquée car le mot de passe que vous utilisez a déjà été divulgué suite à une violation de données",
    },
};
export default fr;
