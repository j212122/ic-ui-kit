import {
  Component,
  Element,
  h,
  Host,
  Listen,
  Prop,
  State,
} from "@stencil/core";
import { IcThemeForeground, IcSizes } from "../../utils/types";

let accordionGroupIds = 0;
@Component({
  tag: "ic-accordion-group",
  styleUrl: "ic-accordion-group.css",
  shadow: true,
})
export class AccordionGroup {
  private accordionGroupId = `ic-accordion-group-${accordionGroupIds++}`;

  @Element() el: HTMLIcAccordionGroupElement;

  @State() accordions: HTMLIcAccordionElement[];

  @State() areAllAccordionsOpen: boolean;
  /**
   * The appearance of the tab context, e.g dark, or light.
   */
  @Prop() appearance: IcThemeForeground = "default";

  /**
   * If `true`, the side navigation will load in an expanded state.
   */
  @Prop({ mutable: true }) expanded: boolean = false;

  /**
   * The header for the accordion group.
   */
  @Prop() groupTitle: string = "";

  /**
   * If `true`, only one accordion will open at a time.
   */
  @Prop() singleExpansion: boolean = false;

  /**
   * The size of the accordion.
   */
  @Prop() size?: IcSizes = "default";

  componentDidLoad(): void {
    const accordionDirectChildren = (this.el as HTMLElement).children;
    this.accordions = Array.from(accordionDirectChildren).filter(
      (child) => child.tagName === "IC-ACCORDION"
    ) as HTMLIcAccordionElement[];
    this.linkAccordions();
    this.accordions.forEach((acc) => {
      acc.appearance = this.appearance;
    });
    this.accordions.forEach((acc) => {
      acc.size = this.size;
    });
    if (this.expanded) {
      this.accordions.forEach((acc) => {
        acc.expanded = true;
      });
      this.setExpandedToAreAllAccordionsOpen();
    } else {
      this.setExpandedToAreAllAccordionsOpen();
      this.expanded = this.areAllAccordionsOpen;
    }
  }

  @Listen("accordionClicked")
  handleAccordionClicked(event: CustomEvent) {
    if (this.singleExpansion) {
      this.accordions.forEach((acc) => {
        acc.expanded = false;
      });
      const singleAccordion = this.accordions.find(
        (acc) => acc.id === event.detail.id
      );
      singleAccordion.expanded = true;
    } else {
      // 'See all' should be visible until all accordions are open, then 'Hide all' should be visible
      this.setExpandedToAreAllAccordionsOpen();
    }
  }

  private handleExpanded = () => {
    this.expanded = !this.expanded;
    this.accordions.forEach((acc) => {
      acc.expanded = this.expanded;
    });
    if (this.expanded) {
      this.areAllAccordionsOpen = true;
    } else {
      this.areAllAccordionsOpen = false;
    }
  };

  private linkAccordions = () => {
    this.accordions.forEach((accordion) => {
      accordion.setAttribute("context-id", this.accordionGroupId);
    });
  };

  private setExpandedToAreAllAccordionsOpen = () => {
    this.areAllAccordionsOpen = this.accordions.every(
      (accordion) => !!accordion.expanded
    );
  };

  render() {
    const { appearance, size } = this;
    return (
      <Host
        context-id={this.accordionGroupId}
        class={{
          [`${appearance}`]: true,
          [`${size}`]: true,
          ["accordion-group"]: true,
        }}
      >
        <div class="group-title-container">
          <ic-typography variant="h4">
            <h3>{this.groupTitle}</h3>
          </ic-typography>
          {!this.singleExpansion && (
            <ic-button
              appearance={this.appearance === "light" ? "light" : "default"}
              onClick={this.handleExpanded}
              variant="tertiary"
            >
              {!this.areAllAccordionsOpen ? "See all" : "Hide all"}
            </ic-button>
          )}
        </div>
        <slot></slot>
      </Host>
    );
  }
}
