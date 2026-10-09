'use strict';

const { POSTAL_HAY_PATTERN, POSTAL_LABEL_PATTERNS } = require('../stripe-payment');

describe('印度 PIN / 邮编识别', () => {
    it('能识别 India Checkout 的 PIN 标签', () => {
        expect(POSTAL_HAY_PATTERN.test('pin')).toBe(true);
        expect(POSTAL_HAY_PATTERN.test('PIN')).toBe(true);
        expect(POSTAL_HAY_PATTERN.test('pin code')).toBe(true);
        expect(POSTAL_HAY_PATTERN.test('pincode')).toBe(true);
        expect(POSTAL_HAY_PATTERN.test('billing postal-code')).toBe(true);
        expect(POSTAL_HAY_PATTERN.test('zip code')).toBe(true);
    });

    it('不会把 Shipping 误当成邮编', () => {
        expect(POSTAL_HAY_PATTERN.test('shipping')).toBe(false);
        expect(POSTAL_HAY_PATTERN.test('spinbutton')).toBe(false);
    });

    it('getByLabel 模式能匹配 PIN', () => {
        const hay = 'PIN';
        expect(POSTAL_LABEL_PATTERNS.some((re) => re.test(hay))).toBe(true);
        expect(POSTAL_LABEL_PATTERNS.some((re) => re.test('Postal code'))).toBe(true);
        expect(POSTAL_LABEL_PATTERNS.some((re) => re.test('Shipping'))).toBe(false);
    });
});
