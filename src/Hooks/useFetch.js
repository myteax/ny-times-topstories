import { useReducer, useEffect } from "react";
import axios from "axios";

const init = {
  data: [],
  loading: false,
  error: false,
};

const ACTIONS = {
  INIT: "init",
  GET_DATA: "getdata",
  ERROR: "error",
};

const URL =
  "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=6zIyPUQ2zDhvu2vPtsaPjqrEkjLi0MqA";

const useFetch = (params) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.INIT:
        return { data: [], loading: true, error: false };
      case ACTIONS.GET_DATA:
        return {
          ...state,
          data: action.payload.data,
          loading: false,
          error: false,
        };
      case ACTIONS.ERROR:
        return { ...state, error: true };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, init);

  useEffect(() => {
    dispatch({ type: ACTIONS.INIT });
    // const cancelToken = axios.CancelToken.source();
    axios
      .get(URL, {
        params: {
          //   cancelToken: cancelToken.token,
          params: params,
        },
      })
      .then((res) => {
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: { data: res.data.results },
        });
      })
      .catch((e) => {
        // if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR });
      });
    return () => {
      //   cancelToken.cancel();
    };
  }, [params]);
  return state;
};

export default useFetch;
