import React from 'react';
import { storySettings } from './storySettings';
import { Category } from '../../../stories/storiesHierarchy';

import NoBorderInput from '..';
import {
  api,
  example as baseExample,
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/dist/src/Sections';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: Category.COMPONENTS,
  storyName: 'NoBorderInput',

  component: NoBorderInput,
  componentPath: '..',

  componentProps: setState => ({
    value: '',
    label: 'No border input',
    placeholder: 'This is a placeholder',
    onChange: e => setState({ value: e.target.value }),
    size: 'normal',
    statusMessage: undefined,
  }),

  sections: [
    header({
      component: (
        <div style={{ width: '50%' }}>
          <NoBorderInput />
        </div>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(
            `Displays an input with no borders, useful for editing inline text content`,
          ),

          importExample("import { NoBorderInput } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          example({
            title: 'With placeholder',
            source: examples.withPlaceholder,
          }),
          example({ title: 'With label', source: examples.withLabel }),
          example({
            title: 'Controlled with state',
            source: examples.controlled,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
