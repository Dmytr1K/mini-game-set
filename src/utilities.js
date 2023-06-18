// @ts-check

/**
 * @return {string}
 */
const getArgument = () => {
  const argument = process.argv[process.argv.length - 1];
  return argument;
};

export default getArgument;
