const postcss = require('postcss');

module.exports = postcss.plugin('postcss-color-function-remover', (options={}) => {
	return (css) => {
        css.walkDecls(decl => {
            if (decl.value.includes('color(')) {
                decl.remove();
            }
        });
	};
})
