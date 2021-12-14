import { FormControl } from '@angular/forms';

export const formControls = {
  id: new FormControl(''),
  width: new FormControl(''),
  height: new FormControl(''),
  borderWidth: new FormControl('thin'),
  borderColor: new FormControl('black'),
  borderStyle: new FormControl('solid'),
  fontSize: new FormControl('14px'),
  fontWeight: new FormControl('normal'),
  color: new FormControl(''),
  backgroundColor: new FormControl(''),
  value: new FormControl(''),
  placeholder: new FormControl(''),
  required: new FormControl(''),
};
