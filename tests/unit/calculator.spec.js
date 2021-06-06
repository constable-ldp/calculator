import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(App);
  });

  it('enterNum changes running total', () => {
    wrapper.vm.previousTotal = 4;
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9);
  });

  it('should add 1 and 4 to equal 5', () => {
    wrapper.vm.previousTotal = 1;
    wrapper.vm.add('4');
    expect(wrapper.vm.runningTotal).to.equal(5);
  });

  it('should subtract 7 and 4 to equal 3', () => {
    wrapper.vm.previousTotal = 7;
    wrapper.vm.subtract(4);
    expect(wrapper.vm.runningTotal).to.equal(3);
  });

  it('should multiply 3 and 5 to equal 15', () => {
    wrapper.vm.previousTotal = 3;
    wrapper.vm.multiply(5);
    expect(wrapper.vm.runningTotal).to.equal(15);
  });

  it('should divide 21 and 7 to equal 3', () => {
    wrapper.vm.previousTotal = 21;
    wrapper.vm.divide(7);
    expect(wrapper.vm.runningTotal).to.equal(3);
  });

  it('press 2 and 8 will make 28', () => {
    wrapper.vm.numberClick(2);
    wrapper.vm.numberClick(8);
    expect(wrapper.vm.runningTotal).to.equal(28);
  });

  it('should chain operations, 5 * 3 * 2 - 1 to equal 29 using operatorClick', () => {
    wrapper.vm.numberClick(5);
    wrapper.vm.operatorClick('*');
    wrapper.vm.numberClick(3);
    wrapper.vm.operatorClick('*');
    wrapper.vm.numberClick(2);
    wrapper.vm.operatorClick('-');
    wrapper.vm.numberClick(1);
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(29);
  });

  it('clear button only removes running total', () => {
    wrapper.vm.numberClick(5);
    wrapper.vm.operatorClick('/');
    wrapper.vm.numberClick(3);
    wrapper.vm.clearClick();
    wrapper.vm.numberClick(5);
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(1);
  });
});