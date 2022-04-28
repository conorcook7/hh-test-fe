const targetURL = "https://helpful-human-be.herokuapp.com/graphql";

const headers = {
  "Content-Type": "application/json",
};

export const getColors = async (id) => {
  const graphql = JSON.stringify({
    query: `{
            colors {
                id
                name
                colorValue
            }
        }`,
  });

  const response = await fetch(targetURL, {
    method: "POST",
    headers: headers,
    body: graphql,
  });
  const json = await response.json();
  return json.data.colors;
};
