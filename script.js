function calculateSimpleInterest(principal, rate, time) {
  const p = Number(principal);
  const r = Number(rate);
  const t = Number(time);
  if (![p, r, t].every(Number.isFinite) || [p, r, t].some(value => value < 0)) {
    throw new Error('Enter valid nonnegative numbers.');
  }
  const interest = (p * r * t) / 100;
  return { interest, totalAmount: p + interest };
}

function calculateInterest() {
  const principal = Number(document.getElementById('principal').value);
  const rate = Number(document.getElementById('rate').value);
  const time = Number(document.getElementById('time').value);
  const result = calculateSimpleInterest(principal, rate, time);
  document.getElementById('interest').textContent = `$${result.interest.toFixed(2)}`;
  document.getElementById('totalAmount').textContent = `$${result.totalAmount.toFixed(2)}`;
  return result;
}

if (typeof document !== 'undefined') {
  const form = document.getElementById('interest-form');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    calculateInterest();
  });
}

if (typeof module !== 'undefined') module.exports = { calculateSimpleInterest, calculateInterest };
