import { GENERATION_ACTION_TYPE } from "actions/types";

export const generationActionCreator = (payload) => {
  return {
    type: GENERATION_ACTION_TYPE,
    generation: payload
  };
};
