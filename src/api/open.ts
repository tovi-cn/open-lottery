import Axios from 'axios';

export type info = {
  open_phase?: string;
  open_time?: string;
  open_result?: string;
  second: number;
  next_time?: string;
  next_phase?: string;
};

export const openInfo = async <info>(params?: any) => {
  try {
    const { data } = await Axios.get("http://743kj.com/what/the/fuck/api/openinfo", {
      params
    });
    return data.data as info
  } catch (error) {
    return error
  }
};

// export const openInfo = () => fetch("http://743kj.com/api/user", {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });