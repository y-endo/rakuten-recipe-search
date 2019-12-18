module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/src/$1'
  },
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules']
};
