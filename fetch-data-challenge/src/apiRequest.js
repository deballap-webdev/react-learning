const apiRequest = async (endpoint) => {
  const reqUrl = `https://jsonplaceholder.typicode.com/${endpoint}`;

  console.log(reqUrl);
  try {
    const response = await fetch(reqUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    if (!response.ok)
      throw Error("Error: Check your internet connection and try again");

    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    return { error: err.message };
  }
};
export default apiRequest;
