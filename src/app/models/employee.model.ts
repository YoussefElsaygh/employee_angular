import Department from './department.model';

export enum Gender {male, female}

export class Employee {

  constructor(public employeeName: string,
              public code: number,
              public department: Department,
              public gender: Gender,
              public birthday: Birthday) {
  }


}

export class Birthday {
  constructor(public year: string, public month: string, public day: string) {
  }
}
