// 1
export function createVisitor(name, age, ticketId) {
  return {
    name,
    age,
    ticketId
  }
}

// 2
export function revokeTicket(visitor) {
  visitor.ticketId = null;

  return visitor;
}

// 3
export function ticketStatus(tickets, ticketId) {
  for (let key in tickets) {
    if (key === ticketId && tickets[key] !== null) return `sold to ${tickets[key]}`;
    
    if (key === ticketId && tickets[key] === null) return 'not sold';
  }

  return 'unknown ticket id';
}

// 4
export function simpleTicketStatus(tickets, ticketId) {

 for (let key in tickets) {
  if (key === ticketId && tickets[key] !== null) return `${tickets[key]}`;
 }

 return 'invalid ticket !!!';
}

// 5
export function gtcVersion(visitor) {
  return visitor.gtc?.version;
}
