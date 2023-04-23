import {User} from "../models/user";
import {ApiListResponse} from "../models/api-response";

function mergeNameInUser(user: User): User {
  return {
    ...user,
    name: `${user.first_name} ${user.last_name}`,
  }
}

export function combineFirstNameAndLastNameToUser(user: User): User {
  return mergeNameInUser(user);
}

export function combineFirstNameAndLastNameToUsers(user: ApiListResponse<User[]>): ApiListResponse<User[]> {
  const data = user.data.map((user: User) => {
    return mergeNameInUser(user)
  })
  return {
    ...user,
    data
  }
}
