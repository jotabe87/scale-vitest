import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import DtButton from "@/components/DtButton.vue";

describe('DtButton.vue', () => {
    const defaultProps = {name: 'test-btn', label: 'Test Btn'}

    it('renders correctly and triggers testFunction event', () => {
        const wrapper = mount(DtButton, {
            props: {...defaultProps},
        })

        const button = wrapper.find('[data-testid="test-btn"]')

        expect(button.element.innerHTML).toBe('Test Btn')

        button.trigger('click')
        expect(wrapper.emitted('testFunction')).toBeTruthy()
    })
})