import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private itemService: ItemService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submitHandler(data: any): void {
    this.itemService.saveItem(data)
      .subscribe({
        next: () => {
          this.router.navigate(['/item']);
        },
        error: (err) => {

        }
      });
  }
}
