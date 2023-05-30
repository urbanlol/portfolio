const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
// https://betterprogramming.pub/how-to-optimize-images-for-usage-in-websites-9eaee88c2e6b
// https://craco.js.org/docs/getting-started/
console.log(ImageMinimizerPlugin);
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.optimization.minimize = true;
      webpackConfig.optimization.minimizer.push(
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              plugins: [['mozjpeg', { quality: 85 }]],
            },
          },
          generator: [
            {
              preset: 'webp',
              implementation: ImageMinimizerPlugin.imageminGenerate,
              options: {
                plugins: ['imagemin-webp'],
              },
            },
          ],
        })
      );
      return webpackConfig;
    },
  },
};
