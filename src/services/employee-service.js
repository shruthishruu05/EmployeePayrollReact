import config from '../config/config';
import AxiosService from './axios-service';

export default class EmployeeService {
    baseUrl = config.baseUrl;

    addEmployee(data) {
        return AxiosService.postService(`${this.baseUrl}EmployeePayrollDB`, data);
    }

    getAllEmployees() {
        return AxiosService.getService(`${this.baseUrl}EmployeePayrollDB`);
    }
    getEmployee(id) {
        return AxiosService.getService(`${this.baseUrl}EmployeePayrollDB/${id}`);
    }
    updateEmployee(data, id) {
        return AxiosService.putService(`${this.baseUrl}EmployeePayrollDB/${id}`, data);
    }
    deleteEmployee(id) {
        return AxiosService.deleteService(`${this.baseUrl}EmployeePayrollDB/${id}`);
    }
}