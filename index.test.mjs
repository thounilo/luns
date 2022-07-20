import { it, assert } from './blazingly_fast_test_framework_next_rfc_branch_alpha_test_phase_that_is_copied_from_github_lmao.mjs'
import luns from './index.mjs'

it('should return string with length 12', () => {
    let value = luns(12).length === 12
    assert(value)
})

it('Should have prefix of test_', () => {
    let value = luns(10, 'luns', 'test_')
    assert(value.startsWith('test_'))
})
