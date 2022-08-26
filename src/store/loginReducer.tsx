const getTokenFromLocal: () => string | null = () => {
  return localStorage.getItem("token") || null;
};

export type InitialStateLogin = {
  token: string | null;
};

type Action = {
  type: string;
  token: string;
};

const initialState: InitialStateLogin = {
  token: getTokenFromLocal(),
};

const loginReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "LOGIN": {
      localStorage.setItem("token", action.token);

      return {
        ...state,
        token: action.token,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
