export interface Element {
  id?: string;
  name?: string;
  styles?: Partial<Style>;
  values?: [
    {
      label: string;
      value: string;
    },
  ];
}

interface IObjectKeys {
  [key: string]: string | boolean;
}

export interface Style extends IObjectKeys {
  placeholder: string;
  width: string;
  height: string;
  border: string;
  fontSize: string;
  fontWeight: string;
  color: string;
  backgroundColor: string;
  label: string;
  value: string;
  required: boolean;
}

export enum ENamesElements {
  Button = 'button',
  Input = 'input',
  Select = 'select',
  TextArea = 'textarea',
  CheckBox = 'checkbox'
}
