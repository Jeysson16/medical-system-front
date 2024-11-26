const admin = require("firebase-admin");

// Parsear las credenciales desde una variable de entorno
const serviceAccount = {
    "type": "service_account",
    "project_id": "capsule-852e9",
    "private_key_id": "d41799fc0581240b80854e31a3d19370ae507625",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCoX65+rrlodtgt\nUkbQIz5sWLXGtpakJka115LNaYDnVrIKuGD57MHsj8c/GYLIYObuIfSpEuognX2J\nx04lA/hOlG+YDp/JHkqjQnayVa6vP6+a9iqEpwKrhDKDYjHKGoEnj74QrGVEM1lb\nPp0ff1lQRftTOqyO8qmcC6GDod+mzC/MzIVxFtlpbii3YQIdOW0RTfeuIOw7ZiQu\n2Nkp8TnXequxezPpRYS7glbvshe5ti/ivlikblCeQkY3gIozZmEtjmGZFVXfvN9P\nlfzWZN4JIwqBlgFdX+XwTacpufSWeNSBYm4ygIQ+To9/gyIcyexyFV7Me5GRg8VW\ndjOLJfEHAgMBAAECggEAOynX4lrZ+oucHZzGFjf0JNUtFoStPUPX3+i+hGBYs7Fi\ngWLVbKyVXd8Nt63qpydpre6PjmN/knNUm/fFDTuuYkpFRiyJV/3FY0Wk+Lgj2B+s\nQGrUeOVIimU67LCx5x7WGEUpl6lEMilK8kV3p4wzoYHdtJqu7NH26Ear+9mDAZQ1\n6njuRzTvpcERm9VlEcOzsjy1o2K0gGRyhdBMMk+bSQzqe5I4qqFn40jmj6CoJ78E\nC16NPX34fzF9OFtHQLwGr/ecoWFb1Wz0cEqhcFmQv0xs6C0G81itQTCSimV1vKkn\nsleui7eD7JYQLJlFvSIuafsaGyYQMfyQJTLUMwvnGQKBgQDsZcKc69NgiUdqsraa\npQaj1H9c6z/uzRnVMVPNjjChddm+kSWNwCv8QSlsFdvhGDVqjgt0K0ctdASzYCl9\n1rHJ7XdAvFx5BYTB4Y7nmNJI39oY3rQxtJXASjKegpkSQ0c2w9a+bwUpBGjm/w+i\nQ7q5c38bLbpug3yfmToGTZZQ7wKBgQC2VepKKvMOTbnRM3vBEtbXM2MAkQoAJdWv\nAe9dbm6QeFlNH9ZtZ/VFNuY77KY4OikftHwDjKTC5JVsiO2+mGvIewWhMWixSeNu\nBGyXmam3ITZaw/AtlHBtzv6d93Ot8o7R4KiyXbPdx3IXknMbSDXOjFAmgLiNEXoN\npYBUGw8xaQKBgAaL/urHoTAAPUkYL/Ryc4+f9/MD1N5xMbD0z8RWlsQx9ljPvkGB\nu/Yde98xb8h5GimcS3bpJ+x7VRH+rMd+ZagY+n+Bd/ImE/omnAWP9urrwCeGK2lg\n/fC4XVSEe2bFFDjRDaZyfqsXIyyajb1JsOcn6rI+/vXGkHH/FVtNVMdjAoGBAKZG\n4TqzwiVYIk0yKvgeawejF/SrT7hkyGIpXJUSoQdkiON5Vj09YYG2F+2r2MVL3LbK\nC5HdD1+fvthUYqK+MwSHk9G00iljHWD17eWuPwP+6KeLKZsXVBP/gVijEb4ehbnF\nq3HFW8KzIEt4xTmq906dzHXgSuxydKC/PbD1YDyJAoGAERlV5oR2mTehmEXonQOY\nkz1qcrpi/LY9n5UpRtzIwJC0WaHq5NIAgrmHF8R7h5VMDwMeCe3VOgmSfTZo3vuL\nItalWiwVYBxBk1TKo4beHZyeRTALwvl5y6nTheXIMYEu+9Q+q1+g5J6pDbi5cTL/\n6INXyWRg7SRUjqlHqEtlozY=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-fm7kx@capsule-852e9.iam.gserviceaccount.com",
    "client_id": "117752569560949177012",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fm7kx%40capsule-852e9.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }
  ;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "capsule-852e9.appspot.com"
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

module.exports = { db, bucket };
