import webpack, { RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {

    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    }

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');
    config.module = {
        ...config.module,
        rules: config.module?.rules?.map((rule) => {
            if (!rule || typeof rule !== 'object' || !('test' in rule)) {
                return rule;
            }

            if (rule.test && /svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        }).filter(Boolean) as webpack.RuleSetRule[],
    };
    config.module.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }
    )
    config.module?.rules?.push(buildCssLoader(true));

    return config;

}