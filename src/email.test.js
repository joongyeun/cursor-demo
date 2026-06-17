const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { extractEmails, isValidEmail, getValidEmails } = require('./email');

describe('extractEmails', () => {
  it('returns emails from member objects', () => {
    const members = [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' },
    ];
    assert.deepEqual(extractEmails(members), [
      'alice@example.com',
      'bob@example.com',
    ]);
  });

  it('returns empty array for non-array input', () => {
    assert.deepEqual(extractEmails(null), []);
    assert.deepEqual(extractEmails('not-array'), []);
  });
});

describe('isValidEmail', () => {
  it('returns true for valid emails', () => {
    assert.equal(isValidEmail('user@example.com'), true);
  });

  it('returns false for invalid emails', () => {
    assert.equal(isValidEmail('not-an-email'), false);
    assert.equal(isValidEmail(''), false);
    assert.equal(isValidEmail(null), false);
  });
});

describe('getValidEmails', () => {
  it('returns only valid emails from members', () => {
    const members = [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'invalid' },
      { name: 'Carol', email: 'carol@test.org' },
    ];
    assert.deepEqual(getValidEmails(members), [
      'alice@example.com',
      'carol@test.org',
    ]);
  });

  it('returns empty array for non-array input', () => {
    assert.deepEqual(getValidEmails(undefined), []);
  });
});
