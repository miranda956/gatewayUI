import users from "../../data/users";

export const apiReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, [action.entityType]: action.data };

    case "CREATE_SUCCESS":
      return { ...state, [action.entityType]: [...state[action.entityType], action.createdEntity] };
    case "UPDATE_SUCCESS":
      return {
        ...state,
        [action.entityType]: state[action.entityType].map((entity) =>
          entity.id === action.entityId ? { ...entity, ...action.updatedData } : entity
        ),
      };
    case "DELETE_SUCCESS":
      return {
        ...state,
        [action.entityType]: state[action.entityType].filter((entity) => entity.id !== action.entityId),
      };
    default:
      return state;
  }
};
