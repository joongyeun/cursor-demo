function extractEmails(members) {
  if (!Array.isArray(members)) {
    return [];
  }
  return members.map((member) => member.email);
}

function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function getValidEmails(members) {
  return extractEmails(members).filter(isValidEmail);
}

module.exports = { extractEmails, isValidEmail, getValidEmails };
