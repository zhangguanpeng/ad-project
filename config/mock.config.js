const fs = require('fs');
const path = require('path');

function response(res, content, type = 'json') {
    res.type(type);
    res.write(content);
    res.end();
}

function mock(res, file) {
    fs.readFile(file, 'utf8', (error, content) => {
        if (error) {
            response(res, error.message, 'html');
        }
        response(res, content, 'json');
    });
}

const mockMiddleware = (config) => (req, res, next) => {
    const { projectDir, mockDir } = config;

    const filePath = path.resolve(projectDir, `./${mockDir + req.path}.json`);
    console.log('filePath', filePath);

    return fs.stat(filePath, (error) => {
        if (error) {
            next();
        } else {
            mock(res, filePath);
        }
    });
};

module.exports = mockMiddleware;
