import { AccessLevels } from "../types/misc";

export const handleAddition = (
  selected: { [key: string]: AccessLevels },
  setSelected: Function,
  email: string,
  access: AccessLevels
) => setSelected({ ...selected, [email]: access });

export const handleDeletion = (
  selected: { [key: string]: AccessLevels },
  setSelected: Function,
  email: string
) => {
  const newObj = { ...selected };
  delete newObj[email];
  setSelected(newObj);
};

export const handlePermissionUpdate = (
  selected: { [key: string]: AccessLevels },
  setSelected: Function,
  emails: string[],
  access: AccessLevels
) => {
  const newObj = { ...selected };
  emails.forEach(email => (newObj[email] = access));
  setSelected(newObj);
};

export const getDetailsFromEmail = (email: String, arr: Array<any>) => {
  const res = arr.filter(obj => obj.email === email);
  return !!res.length
    ? { ...res[0], type: res[0].users ? "groups" : "users" }
    : null;
};
