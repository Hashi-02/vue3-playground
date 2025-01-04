import type { Meta, StoryFn } from "@storybook/vue3";
import Tooltip from "./tooltip.vue";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    text: { control: "text", description: "Tooltip text displayed on hover" },
    default: { control: "text", description: "Default slot content" },
  },
} as Meta<typeof Tooltip>;

type TooltipProps = {
  text: string;
};

const Template: StoryFn<typeof Tooltip> = (args: TooltipProps) => ({
  components: { Tooltip },
  setup() {
    return { args };
  },
  template: `
    <Tooltip v-bind="args">
      <template #default>
        Hover over me
      </template>
    </Tooltip>
  `,
});

export const Default = Template.bind({});
Default.args = {
  text: "This is a tooltip",
};

Default.decorators = [
  (Story) => ({
    components: { Story },
    template: `
      <div style="display: flex; align-items: center; justify-content: center; height: 100vh; background-color: #fff;">
        <story />
      </div>
    `,
  }),
];
