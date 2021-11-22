// eslint-disable-next-line no-undef
module.exports = {
    'src/**/*.ts': ['eslint --cache --fix', () => 'tsc --pretty --noEmit'],
}
