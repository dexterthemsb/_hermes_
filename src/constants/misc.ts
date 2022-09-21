import { AccessLevels } from "../types/misc";

export const ACCESS_LEVEL_MAPPING_OBJ = {
  0: "No access",
  1: "Can view",
  2: "Can edit",
  3: "Full access"
};

export const ACCESS_LEVEL_MAPPING_ARR: { label: string; value: AccessLevels }[] = [
  {
    label: "No access",
    value: 0
  },
  {
    label: "Can view",
    value: 1
  },
  {
    label: "Can edit",
    value: 2
  },
  {
    label: "Full access",
    value: 3
  }
];
