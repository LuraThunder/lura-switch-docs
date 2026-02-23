// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',
    'quick-start',
    {
      type: 'category',
      label: 'スイッチ',
      items: [
        'switches/overview',
        'switches/function-switches',
        'switches/object-switches',
      ],
    },
    {
      type: 'category',
      label: 'スライダー',
      items: [
        'sliders/overview',
        'sliders/slider-mirror',
        {
          type: 'category',
          label: 'Slider_Audio／Music',
          items: [
            'sliders/slider-audio',
            'sliders/slider-music',
          ],
        },
        {
          type: 'category',
          label: 'Slider_Light／AvatarLight',
          items: [
            'sliders/slider-light',
            'sliders/slider-avatar-light',
          ],
        },
        {
          type: 'category',
          label: 'Slider_Night／PostEffect',
          items: [
            'sliders/slider-night',
            'sliders/slider-posteffect',
          ],
        },
        {
          type: 'category',
          label: 'Slider_MirrorRotate／Object',
          items: [
            'sliders/slider-mirror-rotate',
            'sliders/slider-object',
          ],
        },
        'sliders/slider-collider',
      ],
    },
    {
      type: 'category',
      label: 'モードスイッチ',
      items: [
        'mode-switch/overview',
        'mode-switch/mode-switch-mirror',
      ],
    },
    {
      type: 'category',
      label: 'ユーティリティ',
      items: [
        'utilities/lura-mirror',
        'utilities/lura-collider',
        'utilities/switch-syncer',
        'utilities/switch-selector',
        'utilities/height-offsetter',
        'utilities/switch-board',
      ],
    },
  ],
};

export default sidebars;
