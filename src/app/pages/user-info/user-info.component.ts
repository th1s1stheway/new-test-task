import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Преобразуем 'id' из строки в число
      this.dataService.getUserById(+id).subscribe(data => {
        this.user = data.data;
      });
    }
  }

  updateUser() {
    this.dataService.updateUser(this.user.id, this.user).subscribe();
  }

}
