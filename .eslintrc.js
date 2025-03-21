module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'next/core-web-vitals', // Aturan khusus Next.js dan Core Web Vitals
        'eslint:recommended', // Aturan dasar ESLint
        'plugin:@typescript-eslint/recommended', // Aturan untuk TypeScript
        'plugin:react/recommended', // Aturan untuk React
        'plugin:react-hooks/recommended', // Aturan untuk React Hooks
        'plugin:import/recommended', // Aturan untuk import/export
        'plugin:import/typescript', // Dukungan TypeScript untuk aturan import
    ],
    parser: '@typescript-eslint/parser', // Parser untuk TypeScript
    parserOptions: {
        ecmaFeatures: {
            jsx: true, // Aktifkan JSX
        },
        ecmaVersion: 'latest', // Gunakan versi ECMAScript terbaru
        sourceType: 'module', // Gunakan modul ES
    },
    plugins: [
        '@typescript-eslint', // Plugin untuk TypeScript
        'react', // Plugin untuk React
        'react-hooks', // Plugin untuk React Hooks
        'import', // Plugin untuk import/export
    ],
    rules: {
        // Aturan kustom (opsional)
        'react/react-in-jsx-scope': 'off', // Tidak perlu impor React di JSX
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ], // Aturan urutan import
        '@typescript-eslint/no-unused-vars': 'warn', // Peringatan untuk variabel yang tidak digunakan
        'react-hooks/rules-of-hooks': 'error', // Pastikan aturan React Hooks diikuti
        'react-hooks/exhaustive-deps': 'warn', // Peringatan untuk dependencies yang hilang di useEffect
    },
    settings: {
        react: {
            version: 'detect', // Deteksi versi React secara otomatis
        },
        'import/resolver': {
            typescript: {}, // Gunakan TypeScript untuk resolusi import
        },
    },
};