export type Action = {
  type: "SET_ENCUESTAS";
  encuestas: string[];
  total: number;
};
type State = {
  total: number;
  encuestas: string[];
  isFetching: boolean;
};

export const defaultState: State = {
  total: 0,
  encuestas: [],
  isFetching: false,
};

export const encuestasReducer = (
  state: State = defaultState,
  action: Action
) => {
  switch (action.type) {
    case "SET_ENCUESTAS":
      return { ...state, total: action.total, encuestas: action.encuestas };
    default:
      return state;
  }
};
