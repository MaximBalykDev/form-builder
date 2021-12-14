export interface Element {
  id: string;
  name?: string;
  styles: Partial<Style>;
  values?: [
    {
      label?: string;
      value?: string;
    }
  ];
  type?: string;
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

export interface IFormGroup {
  id: string;
  width: string;
  height: string;
  borderWidth: string;
  borderColor: string;
  borderStyle: string;
  fontSize: string;
  fontWeight: string;
  color: string;
  backgroundColor: string;
  value: string;
  placeholder: string;
  required: string;
}

export interface IUser {
  email: string;
  password: string;
}

export interface IToken {
  token: string;
}

export interface IFormBuilder {
  _id: string;
  name: string;
  description: string;
  date: string;
}
