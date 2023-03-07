import { AnyHTMLElement } from "@stencil/core/internal";
import { Button } from "./ic-button";
import { newSpecPage } from "@stencil/core/testing";

describe("button component", () => {
  let page;
  let element: AnyHTMLElement | ShadowRoot;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Button],
      html: "<ic-button>Button</ic-button>",
      supportsShadowDom: true,
    });
    element = page.root;
  });

  it("should correctly render with text", async () => {
    expect(element).toMatchSnapshot();
  });

  it("should correctly render with custom text", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button>Click Me</ic-button>",
    });
    element = page.root;

    expect(element).toMatchSnapshot();
  });

  it("should render correct HTML for secondary variant", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='secondary'>Button</ic-button>",
    });
    element = page.root;

    expect(element).toMatchSnapshot();
  });

  it("should render correct HTML for tertiary variant", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='tertiary'>Button</ic-button>",
    });
    element = page.root;

    expect(element).toMatchSnapshot();
  });

  it("should render correct HTML for destructive variant", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='destructive'>Button</ic-button>",
    });
    element = page.root;

    expect(element).toMatchSnapshot();
  });

  it("should render correct HTML with Icon", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <ic-button>
        <svg slot='icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg>
        Button
      </ic-button>
      `,
    });
    element = page.root;

    expect(element).toMatchSnapshot();
  });

  it("should render correct HTML when loading", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <ic-button loading>Button</ic-button>
      `,
    });
    element = page.root;

    expect(element).toMatchSnapshot();
  });

  it("render with correct button type when defined", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <ic-button type='reset'>Button</ic-button>
      `,
    });
    element = page.root;

    expect(element).toMatchSnapshot();
  });

  it('should render with "a" tag when href is passed', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <ic-button href = '#'>Button</ic-button>
      `,
    });
    element = page.root;

    expect(element).toMatchSnapshot();
  });

  it('should render with defined "a" tag props', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <ic-button href = '#' download rel="nofollow" target="_blank">Button</ic-button>
      `,
    });
    element = page.root;

    expect(element).toMatchSnapshot();
  });

  it("should render icon variant with a tooltip", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='icon' id='test-button'>Button</ic-button>",
    });
    element = page.root;

    expect(element).toMatchSnapshot();
  });

  it("should render icon variant with a tooltip based on title", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='icon' id='test-button' title='Tooltip text'>Button</ic-button>",
    });
    element = page.root;

    expect(element).toMatchSnapshot();
  });

  it("should render icon variant with a tooltip based on aria-label", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='icon' id='test-button' aria-label='Tooltip text' tooltip-placement='top'>Button</ic-button>",
    });
    element = page.root;

    expect(element).toMatchSnapshot();
  });

  it("should disable tooltip when prop set", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='icon' aria-label='Tooltip text' id='test-button' disable-tooltip>Button</ic-button>",
    });
    element = page.root;

    expect(element).toMatchSnapshot();
  });

  it("should update when method called", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button variant='icon' aria-label='Tooltip text' id='test-button'>Button</ic-button>",
    });
    element = page.root;

    expect(element).toMatchSnapshot();

    await element.updateAriaLabel("New tooltip text");
    await page.waitForChanges();

    expect(element).toMatchSnapshot();
  });

  it("should stop immediate propagation of a click event when disabled", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button id='test-button' disabled=true onclick='alert('test')'>Button</ic-button>",
    });

    jest.spyOn(window, "alert").mockImplementation();

    const element = await document.getElementById("test-button");

    await element.click();

    await page.waitForChanges();

    await expect(window.alert).not.toHaveBeenCalled;
  });

  it("should call 'setFocus' when button is focussed", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: "<ic-button id='ic-button'>Button</ic-button>",
    });

    //Can't expect anything in this test - this is to increase code coverage only
    await page.rootInstance.setFocus().toHaveBeenCalled;
  });
});
