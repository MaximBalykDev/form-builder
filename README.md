# FormBuilder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Description for task

Tech Stack: Angular, Angular Material CDK, NgRX, RxJS, Json-server as a backend

Requirements: create forms builder which separated on 3 sections:
 1. Accordion with 1.1 Form General Styling/ 1.2 Field styling
 2. Form Builder itself (Drop section)
 3. Available draggable fields (Drag section): Input, Textarea, Button, Checkbox with label, Select option 

Use ‘CDK Portal’ for 3 screen sections
You can drag and drop elements from section 3 into section 2.
On field select at section 2, section 1 will change to field related styles:
Placeholder text
Width
Height
Required
Border Style
Font Size Input
Font Weight Select
Color Input RGB

Create basic authorization with jwt 
Create Pure Function
Create Pure Pipe
Use Angular Material
Use RxJS
Use RxJS operators map, filter, tap, switchMap
Use pipe takeUntil for unsubscribing to prevent memory leaks 
Use ngrxLet, ngrxPush instead of pipe async 
Create shared components with ‘ControlValueAccessor’ interface 
Create abstract classes for reusable functionality 
Use ‘Interfaces’, ‘Enums’
Use router ‘Guard’ to check for permission
Use ‘Interceptor’ to modify http request, add ‘Content-Type: application/json’
Use Drag&Drop CDK with styled placeholder on Drop
Use ChangeDetectionStrategy.OnPush
Use ‘NgRX Store, Actions, Effects’
Use reusable style variables
Use reusable style classes

Create repository “forms-builder” and push your progress daily 
Use git commit rules convention