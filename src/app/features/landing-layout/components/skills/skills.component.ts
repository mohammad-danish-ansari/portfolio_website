import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
type Category = 'Frontend'|'Backend'|'Database'|'DevOps/Cloud'|'Tools'|'Languages'|'All';
interface CategoryItem {
  name: Category;
  icon: string;
}
interface Skill {
  id: number;
  title: string;
  category: Category;
  level: 'Beginner'|'Intermediate'|'Advanced'|'Expert';
  proficiency: number; // 0-100
  years: number; // years of experience
  icon?: string; // fontawesome class
  tags?: string[]; // optional small tags
  description?: string;
  showAllSkills?: boolean;
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
  trigger('bubbleAnimation', [
    transition(':enter', [
      query(
        '.skill-card',
        [
          style({ opacity: 0, transform: 'scale(0.8)' }),
          stagger(80, [
            animate(
              '400ms cubic-bezier(0.68, -0.55, 0.27, 1.55)',
              style({ opacity: 1, transform: 'scale(1)' })
            ),
          ]),
        ],
        { optional: true }
      ),
    ]),
    transition(':leave', [
      query(
        '.skill-card',
        [
          stagger(-80, [
            animate(
              '300ms ease-in',
              style({ opacity: 0, transform: 'scale(0.8)' })
            ),
          ]),
        ],
        { optional: true }
      ),
    ]),
  ]),
],
})
export class SkillsComponent {
showAllSkills : boolean  = false;

 // UI
  categories:CategoryItem[]  = [
  { name: 'All', icon: 'fa-solid fa-layer-group' },
  { name: 'Frontend', icon: 'fa-solid fa-code' },
  { name: 'Backend', icon: 'fa-solid fa-server' },
  { name: 'Database', icon: 'fa-solid fa-database' },
  { name: 'DevOps/Cloud', icon: 'fa-solid fa-cloud' },
  { name: 'Tools', icon: 'fa-solid fa-screwdriver-wrench' },
  { name: 'Languages', icon: 'fa-solid fa-language' },
];

  // sample data (add / edit as needed)
  skills: Skill[] = [
    { id:1, title: 'Bootstrap', category:'Frontend', level:'Advanced', proficiency:85, years:2.2, icon:'fa-brands fa-bootstrap',showAllSkills: false },
    { id:2, title: 'HTML', category:'Frontend', level:'Expert', proficiency:95, years:2.2, icon:'fa-brands fa-bootstrap',showAllSkills: false },
    { id:3, title: 'CSS, SCSS ', category:'Frontend', level:'Advanced', proficiency:80, years:2.2, icon:'fa-brands fa-bootstrap',showAllSkills: false },
    { id:3, title: 'SASS', category:'Frontend', level:'Advanced', proficiency:80, years:2.2, icon:'fa-brands fa-bootstrap',showAllSkills: false },
    { id:4, title: 'Ionic', category:'Frontend', level:'Advanced', proficiency:80, years:1, icon:'fa-brands fa-bootstrap',showAllSkills: false },
    { id:5, title: 'JavaScript', category:'Frontend', level:'Expert', proficiency:90, years:2.2, icon:'fa-brands fa-js',showAllSkills: false },
    { id:6, title: 'React JS', category:'Frontend', level:'Advanced', proficiency:85, years:1.2, icon:'fa-brands fa-react',showAllSkills: false },
    { id:7, title: 'Angular', category:'Frontend', level:'Advanced', proficiency:90, years:2, icon:'fa-brands fa-angular',showAllSkills: false },
    { id:8, title: 'Node.js', category:'Backend', level:'Advanced', proficiency:85, years:2, icon:'fa-brands fa-node',showAllSkills: false },
    { id:9, title: 'Express.js', category:'Backend', level:'Advanced', proficiency:80, years:2, icon:'fa-solid fa-server',showAllSkills: false },
    { id:10, title: 'MongoDB', category:'Database', level:'Advanced', proficiency:80, years:2, icon:'fa-solid fa-database',showAllSkills: false },
    { id:11, title: 'AWS', category:'DevOps/Cloud', level:'Intermediate', proficiency:50, years:1, icon:'fa-brands fa-aws',showAllSkills: false },
    { id:12, title: 'Git', category:'Tools', level:'Advanced', proficiency:85, years:2.2, icon:'fa-brands fa-git',showAllSkills: false },
    { id:13, title: 'GitHub', category:'Tools', level:'Advanced', proficiency:85, years:2.2, icon:'fa-brands fa-git',showAllSkills: false },
    { id:15, title: 'Postman', category:'Tools', level:'Advanced', proficiency:90, years:2.2, icon:'fa-brands fa-git',showAllSkills: false },
    { id:15, title: 'TypeScript', category:'Languages', level:'Advanced', proficiency:90, years:2, icon:'fa-solid fa-code',showAllSkills: false },
    { id:15, title: 'Tailwind CSS', category:'Frontend', level:'Advanced', proficiency:80, years:1.5, icon:'fa-solid fa-code',showAllSkills: false },
    // add more skills...
  ];

  // UI state
  activeCategory: Category = 'All';
  sortBy: 'name'|'level'|'experience' = 'name';

  // helpers
  levelOrder = { 'Beginner': 0, 'Intermediate': 1, 'Advanced': 2, 'Expert': 3 };

  // get filtered & sorted list
  get filteredSkills(): Skill[] {
    let list = this.activeCategory === 'All'
      ? [...this.skills]
      : this.skills.filter(s => s.category === this.activeCategory);

    if (this.sortBy === 'name') {
      list.sort((a,b) => a.title.localeCompare(b.title));
    } else if (this.sortBy === 'level') {
      list.sort((a,b) => this.levelOrder[b.level] - this.levelOrder[a.level]);
    } else if (this.sortBy === 'experience') {
      list.sort((a,b) => b.years - a.years);
    }
   return this.showAllSkills ? list : list.slice(0, 8);
  }

  setCategory(cat: Category) {
  this.activeCategory = cat;
}

countByCategory(cat: Category): number {
  if (cat === 'All') return this.skills.length;
  return this.skills.filter(s => s.category === cat).length;
}

  setSort(by: 'name'|'level'|'experience') { this.sortBy = by; }


toggleSkills() {
   this.showAllSkills = !this.showAllSkills;
  if (!this.showAllSkills) {
    setTimeout(() => {
      const section = document.querySelector('.skills-root');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 200);
  }
}
bring_table = [
  {
    icon: '🚀',
    title: 'Modern Technologies',
    description:
      'I stay current with the latest frameworks and tools to build cutting-edge applications',
  },
  {
    icon: '✨',
    title: 'Best Practices',
    description:
      'I follow industry standards and best practices for clean, maintainable code',
  },
  {
    icon: '⚡',
    title: 'Performance Focus',
    description:
      'I optimize applications for speed, scalability, and excellent user experience',
  },
  {
    icon: '🧩',
    title: 'Problem Solving',
    description:
      'I approach challenges analytically and find efficient solutions to complex problems',
  },
  {
    icon: '📚',
    title: 'Continuous Learning',
    description:
      'I constantly expand my skillset and adapt to new technologies and methodologies',
  },
  {
    icon: '🔍',
    title: 'Quality Assurance',
    description:
      'I write tests and ensure code quality through thorough testing and code reviews',
  },
];

learning_journey = [
  {
    title: 'Foundation',
    description: 'Started with HTML, CSS, and JavaScript fundamentals',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Git'],
    icon: '🌱'
  },
  {
    title: 'Frontend Mastery',
    description: 'Mastered modern frontend frameworks and tools',
    skills: ['React', 'Vue.js', 'Tailwind CSS', 'Webpack'],
    icon: '🎨'
  },
  {
    title: 'Backend Development',
    description: 'Expanded into server-side development and databases',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    icon: '⚙️'
  },
  {
    title: 'Full-Stack & DevOps',
    description: 'Integrated full-stack development with deployment and DevOps',
    skills: ['AWS', 'Render', 'Vercel', 'Microservices'],
    icon: '🚀'
  }
];

}
