// Libraries
import Vuetify from 'vuetify';

// Utilities
import { mount, createLocalVue } from '@vue/test-utils';

// Constants
import { APP_TITLE } from '@/modules/app/constant/app.constant';

// Components
import AppHeaderDefault from '@/modules/app/ui/components/headers/AppHeaderDefault.vue';

const VALID_DATA = {
  username: 'Jhon Doe',
  role: 'Administrator',
};

describe('Test modules/app/ui/components/headers/AppHeaderDefault.vue', () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('ui name should be AppHeaderDefault', () => {
    const wrapper = mount(AppHeaderDefault, {
      localVue,
      vuetify,
    });
    const componentName = 'AppHeaderDefault';
    expect(wrapper.vm.$options.name).toBe(componentName);
  });

  it('title should return expected value', () => {
    const wrapper = mount(AppHeaderDefault, {
      localVue,
      vuetify,
    });
    expect(wrapper.vm.title).toBe(APP_TITLE);
  });

  it('username should return Jhon Doe', () => {
    const wrapper = mount(AppHeaderDefault, {
      localVue,
      vuetify,
    });
    expect(wrapper.vm.username).toBe(VALID_DATA.username);
  });

  it('role should return Administrator', () => {
    const wrapper = mount(AppHeaderDefault, {
      localVue,
      vuetify,
    });
    expect(wrapper.vm.role).toBe(VALID_DATA.role);
  });

  it('should reset session when logout', () => {
    // TODO
  });
});
