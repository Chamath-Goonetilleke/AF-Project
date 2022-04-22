import config from 'config';

export default function () {
  if (!config.get("jwtPrivateKey")) {
    throw new Error("FATAL ERROR : JwtPrivateKey in not defined.");
  }
}