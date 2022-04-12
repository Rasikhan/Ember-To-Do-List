module.exports = {
	globals: {
	  server: true,
	  before: true,
	  describe: true,
	  it: true,
	  after: true,
	  afterEach: true,
	},
	root: true,
	parser: "babel-eslint",
	parserOptions: {
	  ecmaVersion: 2017,
	  sourceType: 'module',
	  ecmaFeatures: {
		jsx: true
	  }
	},
	plugins: [
	  'babel',
	  'ember',
	  'react'
	],
	extends: [
	  'eslint:recommended',
	  'plugin:ember/recommended'
	],
	env: {
	  browser: true
	},
	rules: {
		 /*
		 **  VARIABLES
		 **  These rules have to do with variable declarations.
		 */
		 "init-declarations": 0, // `[2, "always"]` is default
		 "no-catch-shadow": 0, // `2` is default
		 "no-delete-var": 1, // `2` is default
		 "no-label-var": 2,
		 "no-shadow-restricted-names": 2,
		 "no-shadow": [2, {"builtinGlobals": false, "hoist": "functions"}], // `[2, {"builtinGlobals": false, "hoist": "functions"}]` is default
		 "no-undef-init": 1, // `2` is default
		 "no-undef": 2,
		 "no-undefined": 2,
		 "no-unused-vars": [1, {"vars": "all", "args": "after-used"}], // `[2, {"vars": "all", "args": "after-used"}]` is default, optionally set `[2, {"vars": "all", "args": "after-used", "varsIgnorePattern": "<regex>", "argsIgnorePattern": "<regex>"}]`
		 "no-use-before-define": 1,
  
		 /*
		 **  POSSIBLE ERRORS
		 **  The following rules point out areas where you might
		 **  have made mistakes.
		 */
		 "comma-dangle": [2, "never"],
		 "no-cond-assign": [2, "except-parens"],
		 "no-console": 1, // `2` is default. Set to `0` when developing with node
		 "no-constant-condition": 2,
		 "no-control-regex": 2,
		 "no-debugger": 2,
		 "no-dupe-args": 2,
		 "no-dupe-keys": 2,
		 "no-duplicate-case": 2,
		 "no-empty-character-class": 2,
		 "no-empty": 2,
		 "no-ex-assign": 2,
		 "no-extra-boolean-cast": 2,
		 "no-extra-parens": [0, "all"], // `[2, "all"]` is default
		 "no-extra-semi": 1, // `2` is default
		 "no-func-assign": 2,
		 "no-inner-declarations": [2, "both"], // `[2, "functions"]` is default
		 "no-invalid-regexp": 2,
		 "no-irregular-whitespace": 2,
		 "no-negated-in-lhs": 2,
		 "no-obj-calls": 2,
		 "no-regex-spaces": 2,
		 "no-sparse-arrays": 2,
		 "no-unreachable": 2,
		 "use-isnan": 2,
		 "valid-jsdoc": 0, // `2` is default
		 "valid-typeof": 2,
		 "no-unexpected-multiline": 2,
  
		 /*
		 **  BEST PRACTICES
		 **  These are rules designed to prevent you from making mistakes.
		 **  They either prescribe a better way of doing something or help
		 **  you avoid footguns.
		 */
		 "accessor-pairs": [2, {"getWithoutSet": false, "setWithoutGet": true}],
		 "block-scoped-var": 2,
		 "complexity": ["off", 20], // `[2, 2]` is recommended
		 "consistent-return": 0,
		 "curly": [0, "all"],
		 "default-case": 2,
		 "dot-notation": [2, {"allowKeywords": true, "allowPattern": ""}],
		 "dot-location": [2, "property"], // `[2, "object"]` is recommended
		 "eqeqeq": 2, // `2` is recommended, optionally set `[2, "smart"]` or `[2, "allow-null"]`
		 "guard-for-in": 2,
		 "no-alert": 1, // `2` is recommended
		 "no-caller": 2,
		 "no-div-regex": 2,
		 "no-else-return": 2,
		 "no-eq-null": 2,
		 "no-eval": 2,
		 "no-extend-native": 2, // `2` is recommended, optionally set `[2, {"exceptions": ["Object"]}]`
		 "no-extra-bind": 2,
		 "no-fallthrough": 1, // `2` is recommended
		 "no-floating-decimal": 1, // `2` is recommended
		 "no-implicit-coercion": [1, {"boolean": false, "number": true, "string": false}], // `[2, {"boolean": true, "number": true, "string": true}],` is recommended
		 "no-implied-eval": 2,
		 "no-invalid-this": 0, // `2` is recommended
		 "no-iterator": 2,
		 "no-labels": 2,
		 "no-lone-blocks": 2,
		 "no-loop-func": 2,
		 "no-multi-spaces": [2, {"exceptions": {"VariableDeclarator": true, "ImportDeclaration": true, "AssignmentExpression": true, "ObjectExpression": true}}], // `2` is recommended
		 "no-multi-str": 2,
		 "no-native-reassign": 2, // `2` is recommended, optionally set `[2, {"exceptions": ["Object"]}]`
		 "no-new-func": 2,
		 "no-new-wrappers": 2,
		 "no-new": 2,
		 "no-octal-escape": 2,
		 "no-octal": 2,
		 "no-param-reassign": 1, // `2` is recommended and actually defaults to `[2, {"props": false}]`
		 "no-process-env": 1, // `2` is recommended
		 "no-proto": 2,
		 "no-redeclare": [2, {"builtinGlobals": true}], // `2` is recommended and actually defaults to `[2, {"builtinGlobals": false}]`
		 "no-return-assign": [2, "except-parens"],
		 "no-script-url": 2,
		 "no-self-compare": 2,
		 "no-sequences": 2,
		 "no-throw-literal": 2,
		 "no-unused-expressions": 2, // `2` is recommended and actually defaults to `[2, {"allowShortCircuit": false, "allowTernary": false}]`
		 "no-useless-call": 1, // `2` is recommended
		 "no-useless-concat": 2,
		 "no-void": 2,
		 "no-warning-comments": [0, {"terms": ["todo", "fixme"], "location": "start"}], // `[0, { "terms": ["todo", "fixme", "xxx"], "location": "start" }]` is recommended
		 "no-with": 2,
		 "radix": 1, // `2` is recommended
		 "vars-on-top": 1, // `2` is recommended
		 "wrap-iife": [2, "inside"], // `[2, "outside"]` is recommended
		 "yoda": [1, "never"], // `[2, "never"]` is recommended, optionally set `[2, "never", {"exceptRange": true, "onlyEquality": false}]
  
		 /*
		 **  STYLISTIC ISSUES
		 **  These rules are purely matters of style and are
		 **  quite subjective.
		 */
		 "array-bracket-spacing": [1, "never"], // optionally set `[2, "never", {"singleValue": true, "objectsInArrays": true, "arraysInArrays": true}]`
		 "block-spacing": [1, "always"],
		 "brace-style": [0, "1tbs", {"allowSingleLine": false}],
		 "camelcase": [1, {"properties": "always"}],
		 "comma-spacing": [1, {"before": false, "after": true}],
		 "comma-style": [1, "last"], // optionally set `[2, "first", {"exceptions": {"ArrayExpression": true, "ObjectExpression": true}}]`
		 "computed-property-spacing": [1, "never"],
		 "consistent-this": [1, "self"],
		 "eol-last": 1,
		 "func-names": 0,
		 "func-style": 0, // optionally set `[2, "expression"]`
		 "id-length": 0, // optionally set `[2, {"min": 3, "max": 10, "properties": "never", "exceptions": ["x"]}]`
		 "id-match": 0, // optionally set `[2, "^[a-z]+([A-Z][a-z]+)*$", {"properties": false}]`
		 "indent": [1, 2], // 2 chars, warning only
		 "jsx-quotes": [1, "prefer-double"],
		 "key-spacing": [1, {"beforeColon": false, "afterColon": true, "mode": "minimum"}], // optionally set `[2, {"beforeColon": false, "afterColon": true, "mode": "strict", "align": "colon"}]`
		 "lines-around-comment": 0, // optionally set `[2, {"beforeBlockComment": true, "beforeLineComment": true, "allowBlockStart": true}]`
		 "linebreak-style": 0, // optionally set `[1, "unix"]`
		 "max-nested-callbacks": [1, 10],
		 "new-cap": [1, {"newIsCap": true, "capIsNew": true}], // optionally set `[2, {"capIsNewExceptions": ["Person"]}]`
		 "new-parens": 1,
		 "newline-after-var": [1, "always"],
		 "no-array-constructor": 1,
		 "no-continue": 1,
		 "no-inline-comments": 0,
		 "no-lonely-if": 1,
		 "no-mixed-spaces-and-tabs": 1, // optionally set `[2, "smart-tabs"]`
		 "no-multiple-empty-lines": [1, {"max": 1}],
		 "no-nested-ternary": 1,
		 "no-new-object": 1,
		 "no-restricted-syntax": 0, // optionally set `[2, "FunctionExpression", "WithStatement"]`
		 "no-spaced-func": 1,
		 "no-ternary": 0,
		 "no-trailing-spaces": [1, {"skipBlankLines": false}],
		 "no-underscore-dangle": 0,
		 "no-unneeded-ternary": [1, {"defaultAssignment": true}],
		 "object-curly-spacing": [1, "never"], // optionally set `[2, "always", {"objectsInObjects": false, "arraysInObjects": false}]`
		 "one-var": [1, {"uninitialized": "always", "initialized": "never"}], // optionally set `[2, {"var": "always", "let": "never", "const": "never"}]`
		 "operator-assignment": 0, // optionally set `[2, "always"]`
		 "operator-linebreak": [1, "after"], // optionally set `[2, "before", {"overrides": {"?": "after"}}]`
		 "padded-blocks": [1, "never"],
		 "quote-props": [1, "as-needed", {"keywords": false, "unnecessary": false, "numbers": true}],
		 "quotes": [1, "single", "avoid-escape"],
		 "require-jsdoc": 0,
		 "semi-spacing": [1, {"before": false, "after": true}],
		 "semi": [1, "always"],
		 "sort-vars": 0, // optaionlly set `[2, {"ignoreCase": true}]`
		 "keyword-spacing": ["error", {"before": true, "after": true, "overrides": {}}],
		 "space-before-blocks": [1, "always"], // optionally set `[2, {"functions": "never", "keywords": "always"}]`
		 "space-before-function-paren": [1, "never"], // optionally set `[2, {"anonymous": "always", "named": "never"}]`
		 "space-in-parens": [1, "never"], // optionally set `[2, "always", {"exceptions": ["empty"]}]`
		 "space-infix-ops": [1, {"int32Hint": false}],
		 "space-unary-ops": [1, {"words": true, "nonwords": false}],
		 "spaced-comment": [0, "always", {"exceptions": ["/"]}], // optionally set `[2, "always", {"exceptions": ["-", "+"], "markers": ["/"]}]`
		 "wrap-regex": 1,
  
		 /*
		 **  ECMASCRIPT 6
		 **  These rules are only relevant to ES6 environments.
		 */
		 "arrow-parens": [0, "always"],
		 "arrow-spacing": [2, {"before": true, "after": true}],
		 "constructor-super": 2,
		 "generator-star-spacing": [2, {"before": false, "after": true}],
		 "no-class-assign": 2,
		 "no-const-assign": 2,
		 "no-dupe-class-members": 0, // `2` is default, only use on ES6+ environments
		 "no-this-before-super": 2,
		 "no-var": 0, // `2` is default, only use on ES6+ environments - when using this set `"blockBindings": true` in `ecmaFeatures` object
		 "object-shorthand": 0, // `[2, "always"]` is default
		 "prefer-arrow-callback": 0, // `2` is default, only use on ES6+ environments
		 "prefer-const": 1, // `2` is default
		 "prefer-spread": 0, // `2` is default, only use on ES6+ environments
		 "prefer-reflect": 0, // `2` is default, only use on ES6+ environments, optionally set `[2, {exceptions: ["apply", "call"]}]`
		 "prefer-template": 0, // `2` is default, only use on ES6+ environments
		 "require-yield": 2,
		 /*
		 **  JSX
		 **  These rules are only relevant to JSX.
		 */
		 "react/jsx-uses-react": "error",
		 "react/jsx-uses-vars": "error",
	},
	overrides: [
	  // node files
	  {
		files: [
		  'ember-cli-build.js',
		  'testem.js',
		  'config/**/*.js',
		  'lib/*/index.js'
		],
		parserOptions: {
		  sourceType: 'script',
		  ecmaVersion: 2015
		},
		env: {
		  browser: false,
		  node: true
		}
	  }
	]
  };
  