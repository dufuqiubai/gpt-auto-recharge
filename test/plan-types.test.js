'use strict';

const { PLAN_NAME_MAP, resolvePlanName } = require('../mysql-store');
const { getPlanTypeLabel } = require('../region-config');

describe('ChatGPT Go 套餐映射', () => {
    it('将 go 解析为官方 Checkout plan_name', () => {
        expect(PLAN_NAME_MAP.go).toBe('chatgptgoplan');
        expect(resolvePlanName('go')).toBe('chatgptgoplan');
        expect(getPlanTypeLabel('go')).toBe('ChatGPT Go');
    });

    it('未知套餐仍回退到 Plus，不误用 Go', () => {
        expect(resolvePlanName('unknown')).toBe('chatgptplusplan');
        expect(getPlanTypeLabel('unknown')).toBe('ChatGPT Plus');
    });
});
