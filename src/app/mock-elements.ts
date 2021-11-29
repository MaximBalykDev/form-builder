import { Element } from './interfaces/interface';

export const Elements: Element[] = [
  {
    id: '1',
    name: 'button',
    styles: {
      width: '100px',
      height: '30px',
      border: '1px solid black',
      fontSize: '16px',
      fontWeight: 'normal',
      color: '#000000',
      backgroundColor: '#ffffff',
      value: 'Button',
    },
  },

  {
    id: '2',
    name: 'textarea',
    styles: {
      width: '100%',
      height: '30px',
      border: '1px solid black',
      fontSize: '16px',
      fontWeight: 'normal',
      color: '#000000',
      required: true,
      placeholder: 'Textarea',
      label: 'Text Area',
    },
  },

  {
    id: '3',
    name: 'input',
    styles: {
      width: '100%',
      height: '30px',
      border: '1px solid black',
      fontSize: '16px',
      fontWeight: 'normal',
      color: '#000000',
      required: true,
      placeholder: 'input',
      label: 'Text Field',
    },
  },

  {
    id: '4',
    name: 'checkbox',
    styles: {
      width: '100px',
      height: '30px',
      color: '#000000',
    },
  },

  {
    id: '5',
    name: 'select',
    styles: {
      width: '100px',
      height: '30px',
      border: '1px solid black',
      fontSize: '16px',
      fontWeight: 'normal',
      color: '#000000',
    },
    values: [
      {
        label: 'Option 1',
        value: 'option-1',
      },
    ],
  },
];
