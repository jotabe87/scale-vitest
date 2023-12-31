import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import DtInput from '@/components/DtInput.vue'

describe('DtInput.vue', () => {
    const defaultProps = {name: 'test-field', label: 'Test Field'}

    it('renders correctly', () => {
        const wrapper = mount(DtInput, {
            props: {...defaultProps},
        })

        const input = wrapper.find('[data-testid="test-field"]')

        // how to test if label is set?
        expect(input.attributes('label')).toBe('Test Field')
        expect(input.attributes('required')).toBeUndefined()
        expect(input.attributes('helper-text')).toBeUndefined()
    })

    it('emits update:modelValue when input changes', async () => {
        const wrapper = mount(DtInput, {
            props: {...defaultProps},
        })

        const input = wrapper.find('[data-testid="test-field"]')


        // how to trigger input event and check if update event is emitted?
        // await input.setValue('test')
        input.element.value = 'test'
        expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['test'])
    })

    it('shows error message', () => {
        const wrapper = mount(DtInput, {
            props: {...defaultProps},
        })

        const input = wrapper.find('[data-testid="test-field"]')
        input.element.value = 'test'
        input.trigger('input')
        input.trigger('change')

        input.element.value = ''
        input.trigger('input')
        input.trigger('change')

        expect(input.attributes('helper-text')).toBe('Test Error')
    })
})
