// MemberType — defines what kind of account a member has
export enum MemberType {
  USER = "USER", // regular customer
  RESTAURANT = "RESTAURANT", // restaurant owner (admin)
}

// MemberStatus — defines the current state of a member's account
export enum MemberStatus {
  ACTIVE = "ACTIVE", // normal, can use the app
  BLOCK = "BLOCK", // blocked by admin, can't login
  DELETE = "DELETE", // soft-deleted (not removed from DB, just marked as deleted)
}
