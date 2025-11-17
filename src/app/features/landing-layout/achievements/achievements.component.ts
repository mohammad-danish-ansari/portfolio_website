import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {
skills = [
  {
    title: 'Full-Stack Expertise',
    description: 'Proficient in MERN stack with hands-on experience in building scalable applications'
  },
  {
    title: 'Problem Solver',
    description: 'Passionate about solving complex challenges and turning ideas into digital solutions'
  },
  {
    title: 'Team Collaboration',
    description: 'Experience in collaborating with teams to deliver seamless user experiences'
  }
];

}
