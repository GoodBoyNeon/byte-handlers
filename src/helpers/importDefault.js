export const importDefault = async (path) => {
  return await (
    await import(path)
  ).default;
};
