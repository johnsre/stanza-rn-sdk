const StanzaRnSdk = require('./NativeStanzaRnSdk').default;

export function multiply(a: number, b: number): number {
  return StanzaRnSdk.multiply(a, b);
}
