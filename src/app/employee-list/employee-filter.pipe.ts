import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../employee';

@Pipe({
    name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {
    transform(employees: Employee[], searchText: string): Employee[] {
        if(!employees || !searchText) {
            return employees;
        }
        return employees.filter(employee =>
            employee.lastName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
    }
}





   


