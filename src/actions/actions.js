const ActionType = {
  SET_NEW_CLASS: `SET_NEW_CLASS`,
};

export const ActionCreator = {
  setNewClass: (values) => ({
    type: ActionType.SET_NEW_CLASS,
    payload: values,
  })
};
