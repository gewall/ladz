const useLocalStorageAsync = () => {
  const setItem = ({ key, data = null }) => {
    return new Promise((resolve, reject) => {
      if (data === null) {
        return reject({ respond: "error", message: "Data is null!" });
      }

      localStorage.setItem(key, JSON.stringify(data));

      resolve({ respond: "success", message: "Data is saved!" });
    });
  };

  const getItem = ({ key = null }) => {
    return new Promise((resolve, reject) => {
      if (key === null) {
        return reject({ respond: "error", message: "Key is null!" });
      }

      const data = localStorage.getItem(key);

      if (!data) {
        return reject({ respond: "error", message: `Cant find ${key}!` });
      }

      resolve({
        respond: "success",
        message: "Data found!",
        data: JSON.parse(data),
      });
    });
  };
  return { setItem, getItem };
};

export default useLocalStorageAsync;
