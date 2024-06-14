import connection from "./db";

export const getWho = async (id) => {
  try {
    const [who] = await connection.query(
      "SELECT * FROM `bonds` WHERE id = ? LIMIT 1",
      [id]
    );
    return row;
  } catch (error) {
    console.log("ERROR: ", error);
  }
  console.log("id: ", id);
  return id;
};
