import { createContext, useCallback, useEffect, useMemo, useReducer} from "react";
import { Themes } from "./themes";

const initialState = {
  loading: false,
  error: null,
  dentists: [],
  theme: Themes.light,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, dentists: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchDentists = useCallback(async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/');
      const data = await response.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  },[]);

  const setTheme = useCallback((theme) => {
    dispatch({ type: 'SET_THEME', payload: theme });
  },[]);

   useEffect(() => {
    fetchDentists();
  }, [fetchDentists]);

  const memoizedValue = useMemo(() => ({ state, fetchDentists, setTheme }), [
    state,
    fetchDentists,
    setTheme,
  ]);

  return (
    <ContextGlobal.Provider value={memoizedValue}>
      {children}
    </ContextGlobal.Provider>
  );
};