import axios from "axios";

export const post = async (url) => {
  let res = await axios
    .post(url, {
      username: "mor_2314",
      password: "83r5^_",
    })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });

  return res;
};

export const getProducts = async (url) => {
  let res = await axios
    .get(url)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });

  return res;
};
