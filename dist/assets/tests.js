'use strict';

define("emb-app/tests/integration/components/postlist/component-test", [], function () {
  "use strict";
});
define("emb-app/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass ESLint\n\n1:1 - Parsing error: The keyword \'import\' is reserved (null)');
  });
  QUnit.test('models/data.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/data.js should pass ESLint\n\n1:1 - Parsing error: The keyword \'import\' is reserved (null)');
  });
  QUnit.test('pods/application/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/application/route.js should pass ESLint\n\n1:1 - Parsing error: The keyword \'import\' is reserved (null)');
  });
  QUnit.test('pods/components/add-todo/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/components/add-todo/component.js should pass ESLint\n\n1:1 - Parsing error: The keyword \'import\' is reserved (null)');
  });
  QUnit.test('pods/components/edit-todo/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/components/edit-todo/component.js should pass ESLint\n\n1:1 - Parsing error: The keyword \'import\' is reserved (null)');
  });
  QUnit.test('pods/main/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/main/route.js should pass ESLint\n\n1:1 - Parsing error: The keyword \'import\' is reserved (null)');
  });
  QUnit.test('pods/posts/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/posts/route.js should pass ESLint\n\n1:1 - Parsing error: The keyword \'import\' is reserved (null)');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'resolver.js should pass ESLint\n\n1:1 - Parsing error: The keyword \'import\' is reserved (null)');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass ESLint\n\n1:1 - Parsing error: The keyword \'import\' is reserved (null)');
  });
  QUnit.test('services/todo.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/todo.js should pass ESLint\n\n1:1 - Parsing error: The keyword \'import\' is reserved (null)');
  });
});
define("emb-app/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('emb-app/pods/application/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/application/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb-app/pods/components/add-todo/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/components/add-todo/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb-app/pods/components/edit-todo/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/components/edit-todo/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb-app/pods/main/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/main/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb-app/pods/posts/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/posts/template.hbs should pass TemplateLint.\n\n');
  });
});
define("emb-app/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/postlist/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/postlist/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'test-helper.js should pass ESLint\n\n1:1 - Parsing error: The keyword \'import\' is reserved (null)');
  });
  QUnit.test('unit/models/model-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'unit/models/model-test.js should pass ESLint\n\n1:1 - Parsing error: The keyword \'import\' is reserved (null)');
  });
  QUnit.test('unit/posts/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/posts/route-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/services/todo-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'unit/services/todo-test.js should pass ESLint\n\n1:1 - Parsing error: The keyword \'import\' is reserved (null)');
  });
});
define("emb-app/tests/test-helper", ["emb-app/app", "emb-app/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("emb-app/tests/unit/models/model-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | post', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('post', {});
      assert.ok(model);
    });
  });
});
define("emb-app/tests/unit/posts/route-test", [], function () {
  "use strict";
});
define("emb-app/tests/unit/services/todo-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | todo', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:todo');
      assert.ok(service);
    });
  });
});
define('emb-app/config/environment', [], function() {
  var prefix = 'emb-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('emb-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
