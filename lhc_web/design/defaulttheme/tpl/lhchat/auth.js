const msalConfig = {
    auth: {
        clientId: "176d38e4-a4dc-4075-a6af-705faac6c784",
        authority: "https://login.microsoftonline.com/3fe7c148-e3a6-43a6-8592-c7833737c3f4"
    }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

export default msalInstance;