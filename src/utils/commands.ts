import { hasServerDir } from "../utils";

const getCommandType = (commandType: string) => {
    let type = {
        name: '',
        path: '',
        extension: '',
    };
    switch (commandType) {
        case 'components':
            type = {
                name: 'Components',
                path: 'components',
                extension: '.vue',
            };
            break;
        case 'composables':
            type = {
                name: 'Composables',
                path: 'composables',
                extension: '.ts',
            };
            break;
        case 'pages':
            type = {
                name: 'Pages',
                path: 'pages',
                extension: '.vue',
            };
            break;
        case 'layouts':
            type = {
                name: 'Layouts',
                path: 'layouts',
                extension: '.vue',
            };
            break;
        case 'store':
            type = {
                name: 'Store',
                path: 'store',
                extension: '.ts',
            };
            break;
        case 'middleware':
            type = {
                name: 'Middleware',
                path: 'middleware',
                extension: '.ts',
            };
            break;
        case 'plugins':
            type = {
                name: 'Plugins',
                path: 'plugins',
                extension: '.ts',
            };
            break;
        case 'api':
            type = {
                name: 'Api',
                path: `${hasServerDir()}/api`,
                extension: '.ts',
            };
            break;
        default:
            // show error message
            type = {
                name: '',
                path: '',
                extension: '',
            };
            break;
    }

    return { type };

};


export { getCommandType };