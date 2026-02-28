module.exports = {
    packageName: 'n8n-nodes-comfyui-image-to-image-with-auth',
    productionOnly: true,
    nodeTypes: {
        "comfyuiImageToImage": {
            nodePath: 'dist/nodes/ComfyUI/ComfyuiImageToImage.node.js',
            type: 'file',
        },
        "comfyuiImageToVideo": {
            nodePath: 'dist/nodes/ComfyUI/ComfyuiImageToVideo.node.js',
            type: 'file',
        }
    },
    credentialTypes: {
        "comfyUIApi": {
            credPath: 'dist/credentials/ComfyUIApi.credentials.js',
            type: 'file',
        }
    }
};
