declare var wx: any;

const VueEnvs = (): void => {
  console.log('hello');
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = VueEnvs;
}

export default VueEnvs;