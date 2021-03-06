import * as assert from 'assert';
import { is } from '../index';

describe('is', () => {
    describe('is<{ key: keyof object, value: object[keyof object] }>', () => {
        it('should always return false', () => {
            assert.strictEqual(is<{ key: keyof object, value: object[keyof object] }>(0), false);
            assert.strictEqual(is<{ key: keyof object, value: object[keyof object] }>(1), false);
            assert.strictEqual(is<{ key: keyof object, value: object[keyof object] }>(true), false);
            assert.strictEqual(is<{ key: keyof object, value: object[keyof object] }>(false), false);
            assert.strictEqual(is<{ key: keyof object, value: object[keyof object] }>(''), false);
            assert.strictEqual(is<{ key: keyof object, value: object[keyof object] }>('a'), false);
            assert.strictEqual(is<{ key: keyof object, value: object[keyof object] }>({}), false);
            assert.strictEqual(is<{ key: keyof object, value: object[keyof object] }>([]), false);
            assert.strictEqual(is<{ key: keyof object, value: object[keyof object] }>(null), false);
            assert.strictEqual(is<{ key: keyof object, value: object[keyof object] }>(undefined), false);
        });
    });

    describe('is<{ key: keyof (object | {}), value: (object | {})[keyof (object | {})] }>', () => {
        type Foo<T> = T | number;

        it('should always return false', () => {
            assert.strictEqual(is<{ key: keyof Foo<object>, value: Foo<object>[keyof (Foo<object>)] }>(0), false);
            assert.strictEqual(is<{ key: keyof Foo<object>, value: Foo<object>[keyof (Foo<object>)] }>(1), false);
            assert.strictEqual(is<{ key: keyof Foo<object>, value: Foo<object>[keyof (Foo<object>)] }>(true), false);
            assert.strictEqual(is<{ key: keyof Foo<object>, value: Foo<object>[keyof (Foo<object>)] }>(false), false);
            assert.strictEqual(is<{ key: keyof Foo<object>, value: Foo<object>[keyof (Foo<object>)] }>(''), false);
            assert.strictEqual(is<{ key: keyof Foo<object>, value: Foo<object>[keyof (Foo<object>)] }>('a'), false);
            assert.strictEqual(is<{ key: keyof Foo<object>, value: Foo<object>[keyof (Foo<object>)] }>({}), false);
            assert.strictEqual(is<{ key: keyof Foo<object>, value: Foo<object>[keyof (Foo<object>)] }>([]), false);
            assert.strictEqual(is<{ key: keyof Foo<object>, value: Foo<object>[keyof (Foo<object>)] }>(null), false);
            assert.strictEqual(is<{ key: keyof Foo<object>, value: Foo<object>[keyof (Foo<object>)] }>(undefined), false);
        });
    });
});
