import { Element } from './interface';

export const Elements: Element[] = [
  {
    id: '',
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
    id: '',
    name: 'textarea',
    styles: {
      width: '150px',
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
    id: '',
    name: 'input',
    styles: {
      width: '150px',
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
    id: '',
    name: 'checkbox',
    styles: {
      width: '150px',
      height: '30px',
      color: '#000000',
    },
  },

  {
    id: '',
    name: 'select',
    styles: {
      width: '100px',
      height: '30px',
      border: '1px solid black',
      fontSize: '16px',
      fontWeight: 'normal',
      color: 'black',
    },
    values: [
      {
        label: 'Option 1',
        value: 'option-1',
      },
    ],
  },
];
