export default (nums) => nums.reduce((acc, n, i) => (i > 0 ? [...acc, n + acc[i - 1]] : [n]), []);
