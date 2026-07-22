export function isValidUkPhone(phone: string): boolean {
  const ukPhoneRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
  return ukPhoneRegex.test(phone.replace(/\s/g, ''));
}

export function formatUkPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('44')) {
    return '+44 ' + cleaned.slice(2);
  }
  if (cleaned.startsWith('0')) {
    return '+44 ' + cleaned.slice(1);
  }
  return phone;
}
