import { useEffect } from 'react';

export function BrevoForm() {
  useEffect(() => {
    // Charger le script Brevo dynamiquement
    const script = document.createElement('script');
    script.src = "https://sibforms.com/forms/end-form/build/main.js";
    script.defer = true;
    document.body.appendChild(script);

    // Définir les variables globales requises par Brevo
    window.REQUIRED_CODE_ERROR_MESSAGE = 'Veuillez choisir un code pays';
    window.LOCALE = 'fr';
    window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "Les informations que vous avez fournies ne sont pas valides. Veuillez vérifier le format du champ et réessayer.";
    window.REQUIRED_ERROR_MESSAGE = "Vous devez renseigner ce champ. ";
    window.GENERIC_INVALID_MESSAGE = "Les informations que vous avez fournies ne sont pas valides. Veuillez vérifier le format du champ et réessayer.";
    window.translation = {
      common: {
        selectedList: '{quantity} liste sélectionnée',
        selectedLists: '{quantity} listes sélectionnées',
        selectedOption: '{quantity} sélectionné',
        selectedOptions: '{quantity} sélectionnés',
      }
    };
    window.AUTOHIDE = Boolean(0);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="brevo-form-wrapper w-full">
      {/* Styles spécifiques pour surcharger le CSS de Brevo et matcher notre design */}
      <style>{`
        @font-face {
          font-display: block;
          font-family: Roboto;
          src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
        }
        @font-face {
          font-display: fallback;
          font-family: Roboto;
          font-weight: 600;
          src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
        }
        @font-face {
          font-display: fallback;
          font-family: Roboto;
          font-weight: 700;
          src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")
        }
        
        /* Reset et adaptation du conteneur Brevo */
        #sib-container {
          background-color: transparent !important;
          border: none !important;
          padding: 0 !important;
          margin: 0 !important;
          max-width: 100% !important;
          text-align: left !important;
        }
        
        .sib-form {
          padding: 0 !important;
          margin: 0 !important;
          text-align: left !important;
        }

        /* Masquer les textes par défaut de Brevo qu'on a déjà dans notre UI */
        #sib-container .sib-form-block p {
          display: none !important;
        }
        
        /* Input Email */
        #sib-container input[type="text"] {
          width: 100% !important;
          height: 3rem !important; /* h-12 */
          padding: 0.5rem 1rem !important;
          border-radius: 0.5rem !important; /* rounded-lg */
          border: 1px solid #e2e8f0 !important; /* border-slate-200 */
          background-color: #f8fafc !important; /* bg-slate-50 */
          font-size: 1rem !important;
          color: #0f172a !important;
          box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) !important;
          transition: all 0.2s !important;
        }
        
        #sib-container input[type="text"]:focus {
          border-color: #FF8C60 !important;
          outline: 2px solid transparent !important;
          box-shadow: 0 0 0 2px #FF8C60 !important; /* ring */
        }

        /* Checkbox Opt-in */
        .sib-optin {
          padding: 0 !important;
          margin-top: 1rem !important;
        }
        
        .sib-optin .entry__choice {
          display: flex !important;
          align-items: flex-start !important;
          gap: 0.75rem !important;
        }
        
        .sib-optin input[type="checkbox"] {
          accent-color: #FF8C60 !important;
          width: 1rem !important;
          height: 1rem !important;
          margin-top: 0.25rem !important;
          cursor: pointer !important;
        }
        
        .sib-optin label span p {
          display: block !important;
          font-family: inherit !important;
          font-size: 0.875rem !important; /* text-sm */
          color: #475569 !important; /* text-slate-600 */
          font-weight: 500 !important;
          margin: 0 !important;
        }

        .entry__specification {
          font-size: 0.75rem !important; /* text-xs */
          color: #94a3b8 !important; /* text-slate-400 */
          margin-top: 0.25rem !important;
          margin-left: 1.75rem !important;
          display: block !important;
        }

        /* Bouton Submit */
        .sib-form-block__button {
          width: 100% !important;
          background-color: #FF8C60 !important;
          color: white !important;
          font-weight: 700 !important;
          font-size: 1.125rem !important; /* text-lg */
          padding: 1.5rem !important; /* py-6 equivalent height */
          border-radius: 0.5rem !important; /* rounded-lg */
          margin-top: 1.5rem !important;
          cursor: pointer !important;
          transition: all 0.2s !important;
          box-shadow: 0 4px 6px -1px rgb(255 140 96 / 0.2) !important;
        }
        
        .sib-form-block__button:hover {
          background-color: #ff7a45 !important;
          transform: scale(1.01) !important;
        }

        /* Messages d'erreur et succès */
        .sib-form-message-panel {
          border-radius: 0.5rem !important;
          padding: 1rem !important;
          margin-bottom: 1rem !important;
          font-family: inherit !important;
        }
        
        .entry__error {
          color: #ef4444 !important; /* text-red-500 */
          font-size: 0.875rem !important;
          margin-top: 0.25rem !important;
        }
      `}</style>

      <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css" />

      <div className="sib-form">
        <div id="sib-form-container" className="sib-form-container">
          <div id="error-message" className="sib-form-message-panel" style={{fontSize:'16px', textAlign:'left', fontFamily:'Helvetica, sans-serif', color:'#661d1d', backgroundColor:'#ffeded', borderRadius:'3px', borderColor:'#ff4949', maxWidth:'540px'}}>
            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
              <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
              </svg>
              <span className="sib-form-message-panel__inner-text">
                Nous n'avons pas pu confirmer votre inscription.
              </span>
            </div>
          </div>
          <div></div>
          <div id="success-message" className="sib-form-message-panel" style={{fontSize:'16px', textAlign:'left', fontFamily:'Helvetica, sans-serif', color:'#085229', backgroundColor:'#e7faf0', borderRadius:'3px', borderColor:'#13ce66', maxWidth:'540px'}}>
            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
              <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
              </svg>
              <span className="sib-form-message-panel__inner-text">
                Votre inscription est confirmée !
              </span>
            </div>
          </div>
          <div></div>
          <div id="sib-container" className="sib-container--large sib-container--vertical" style={{textAlign:'center', backgroundColor:'rgba(255,255,255,1)', maxWidth:'540px', borderRadius:'10px', borderWidth:'1px', borderColor:'#ff8c60', borderStyle:'solid', direction:'ltr'}}>
            <form id="sib-form" method="POST" action="https://85948e24.sibforms.com/serve/MUIFAF-gSAeMPuxNsQTJzTgsxPAbPgZ86h9BFvbvNDplhSl1Pwe2OMGyBwlmJxo8U2nbyH-9G9HgUGkIJ-qQvC2_PFog-C-RLK9QJbuPIHr6iTbLSdYXi2bsBFRogyjzPjJupHjCTCyIbiUqGa9n2USYqxSZAGdA9j1ncjEks1squTSoLfJJrd49bgfZQrzKas45JT_BUILnx40kJg==" data-type="subscription">
              <div style={{padding: '8px 0'}}>
                <div className="sib-form-block" style={{fontSize:'32px', textAlign:'left', fontWeight:700, fontFamily:'"Lucida Grande", sans-serif', color:'#0a1045', backgroundColor:'transparent'}}>
                  <p>Bientôt disponible !</p>
                </div>
              </div>
              <div style={{padding: '8px 0'}}>
                <div className="sib-form-block" style={{fontSize:'16px', textAlign:'left', fontFamily:'Helvetica, sans-serif', color:'#0a1045', backgroundColor:'transparent'}}>
                  <div className="sib-text-form-block">
                    <p><strong>Rejoignez la liste d'attente pour faire partie des premiers bêta testeurs.</strong></p>
                  </div>
                </div>
              </div>
              <div style={{padding: '8px 0'}}>
                <div className="sib-input sib-form-block">
                  <div className="form__entry entry_block">
                    <div className="form__label-row ">
                      <div className="entry__field">
                        <input className="input " type="text" id="EMAIL" name="EMAIL" autoComplete="off" placeholder="Votre e-mail" data-required="true" required />
                      </div>
                    </div>
                    <label className="entry__error entry__error--primary" style={{fontSize:'16px', textAlign:'left', fontFamily:'Helvetica, sans-serif', color:'#661d1d', backgroundColor:'#ffeded', borderRadius:'3px', borderColor:'#ff4949'}}>
                    </label>
                  </div>
                </div>
              </div>
              <div style={{padding: '8px 0'}}>
                <div className="sib-optin sib-form-block" data-required="true">
                  <div className="form__entry entry_mcq">
                    <div className="form__label-row ">
                      <label className="entry__label" style={{fontWeight: 700, textAlign:'left', fontSize:'16px', fontFamily:'Helvetica, sans-serif', color:'#3c4858'}} htmlFor="OPT_IN" data-required="*">Opt-in</label>
                      <div className="entry__choice">
                        <label>
                          <input type="checkbox" className="input_replaced" value="1" id="OPT_IN" name="OPT_IN" required />
                          <span className="checkbox checkbox_tick_positive"></span><span style={{fontSize:'14px', textAlign:'left', fontFamily:'Helvetica, sans-serif', color:'#3C4858', backgroundColor:'transparent'}}><p>J'accepte de recevoir des e-mails en rapport avec AskLeads</p></span> </label>
                      </div>
                    </div>
                    <label className="entry__error entry__error--primary" style={{fontSize:'16px', textAlign:'left', fontFamily:'Helvetica, sans-serif', color:'#661d1d', backgroundColor:'#ffeded', borderRadius:'3px', borderColor:'#ff4949'}}>
                    </label>
                    <label className="entry__specification" style={{fontSize:'12px', textAlign:'left', fontFamily:'Helvetica, sans-serif', color:'#8390A4'}}>
                      Vous pouvez vous désinscrire à tout moment en cliquant sur le lien présent dans nos emails.
                    </label>
                  </div>
                </div>
              </div>
              <div style={{padding: '8px 0'}}>
                <div className="sib-form-block" style={{textAlign: 'left'}}>
                  <button className="sib-form-block__button sib-form-block__button-with-loader" style={{fontSize:'16px', textAlign:'left', fontWeight:700, fontFamily:'Helvetica, sans-serif', color:'#FFFFFF', backgroundColor:'#ff8c60', borderRadius:'3px', borderWidth:'0px'}} form="sib-form" type="submit">
                    <svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                      <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                    </svg>
                    M'inscrire maintenant
                  </button>
                </div>
              </div>

              <input type="text" name="email_address_check" value="" className="input--hidden" readOnly />
              <input type="hidden" name="locale" value="fr" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
