import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{

  users: any[] = [];
  resources: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
    this.loadResources();
  }

  loadUsers(): void {
    this.dataService.getUsers().subscribe(response => {
      this.users = response.data;
    }, error => {
      console.error('Ошибка при получении пользователей:', error);
    });
  }
  loadResources(): void {
    this.dataService.getResources().subscribe(response => {
      this.resources = response.data;
    }, error => {
      console.error('Ошибка при получении ресурсов:', error);
    });
  }

  viewUser(id: number): void {
    this.router.navigate(['/user', id]);
  }

  deleteUser(id: number): void {
    this.dataService.deleteUser(id).subscribe(() => {
      this.loadUsers(); // Обновляем список пользователей
    });
  }
}
