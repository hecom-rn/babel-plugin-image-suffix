const _path = require('path');
const _fs = require('fs');

const extImageSuffix = ['@3x', '@2x', '@1x']

function addImageSuffix(ext, node, state) {
    const requirePath = node.arguments[0].value;
    if (requirePath.endsWith(ext)) {
        const filePath = _path.dirname(state.file.opts.filename);
        const imageAbsPath = _path.resolve(filePath, requirePath);
        if (!_fs.existsSync(imageAbsPath)) {
            const imageName = _path.basename(imageAbsPath, ext);
            const imagePath = _path.dirname(imageAbsPath)
            for (let i = 0; i < extImageSuffix.length; i++) {
                const suffix = extImageSuffix[i];
                const newPath = _path.join(imagePath, `${imageName}${suffix}${ext}`);
                if (_fs.existsSync(newPath)) {
                    node.arguments[0].value = newPath;
                    break;
                }
            }
        }
    }
}

module.exports = () => {
    return {
        visitor: {
            CallExpression(path, state) {
                if (path.node.callee.name === 'require' && path.node.arguments && path.node.arguments.length === 1) {
                    addImageSuffix('.png', path.node, state);
                    addImageSuffix('.jpg', path.node, state);
                }
            }
        }
    }
};
