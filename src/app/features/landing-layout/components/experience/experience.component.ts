import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
 animations: [
  trigger('bubbleAnimation', [
    transition(':enter', [
      style({ opacity: 0, transform: 'scale(0.8)' }),
      animate(
        '400ms cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        style({ opacity: 1, transform: 'scale(1)' })
      ),
    ]),
    transition(':leave', [
      animate(
        '300ms ease-in',
        style({ opacity: 0, transform: 'scale(0.8)' })
      ),
    ]),
  ]),
],
})
export class ExperienceComponent {
  private timeline!: HTMLElement;
  private glowDot!: HTMLElement;
  constructor(private el: ElementRef) {}
  showAllTech: boolean = false;

  ngAfterViewInit() {
    this.timeline = this.el.nativeElement.querySelector('.timeline');
    this.glowDot = this.el.nativeElement.querySelector('.timeline-glow');
    this.updateTimeline(); // initial position
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.updateTimeline();
  }

  updateTimeline() {
    const container = this.el.nativeElement.querySelector(
      '.timeline-container'
    );
    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const start = windowHeight * 0.15;
    const end = rect.height - windowHeight * 0.1;
    const scrollProgress = Math.min(
      Math.max((windowHeight - rect.top - start) / end, 0),
      0.95
    );

    const fullHeight = rect.height;
    const newHeight = fullHeight * scrollProgress;

    this.timeline.style.height = `${newHeight}px`;
    this.glowDot.style.top = `${newHeight}px`; // This now works perfectly
  }

  experiences = [
    {
      company: 'Self Employed',
      role: 'Freelance Full-Stack Developer',
      period: 'Jun 2025 - Present',
      location: 'Remote, India',
      description:
        'Tailored scalable web and mobile applications across industries including social media, e-commerce, and real estate. Delivered end-to-end full-stack solutions focused on performance, security, and maintainability. Enhanced user experience through intuitive UI design, seamless navigation, role-based access control, and efficient data architecture. Successfully implemented real-time features, automated workflows, and modular application structures to support business growth and improve user engagement.',
      techUsed: 'Technologies Used',
      techStack: [
        'Angular',
        'RxJS',
        'NgRx',
        'React.js',
        'Context API',
        'Node.js',
        'Express.js',
        'MongoDB',
        'HTML',
        'CSS',
        'SCSS',
        'SASS',
        'Bootstrap',
        'Material UI',
        'Ionic',
        'TypeScript',
        'JavaScript',
      ],
      position: 'left',
      showAllTech: false,
    },
    {
      company: 'S2P Edutech Pvt. Ltd.',
      role: 'Full Stack Developer',
      period: 'April 2023 - Jun 2025',
      location: 'Nagpur, India',
      description:
        'Built and deployed scalable web and mobile applications across domains such as social media, e-commerce, real estate, and insurance analytics. Developed dynamic Angular frontends integrated with Node.js APIs, leveraging RxJS and NgRx for efficient state management and data flow. Designed high-performance backend systems using Node.js, MongoDB, contributing to ERP and dashboard projects with real-time data handling. Enhanced user experience through intuitive React.js interfaces powered by the Context API for global state management, implementing role-based access control and optimizing overall database and UI performance.',
      techUsed: 'Technologies Used',
      techStack: [
        'Angular',
        'RxJS',
        'NgRx',
        'React.js',
        'Context API',
        'Node.js',
        'Express.js',
        'MongoDB',
        'HTML',
        'CSS',
        'SCSS',
        'SASS',
        'Bootstrap',
        'Material UI',
        'Ionic',
        'TypeScript',
        'JavaScript',
      ],
      position: 'right',
      showAllTech: false,
    },
    {
      company: 'S2P Edutech Pvt. Ltd.',
      role: 'MEAN Stack Developer Intern',
      period: 'December 2022 - March 2023',
      location: 'Nagpur, India',
      description:
        'Designed and implemented responsive web interfaces using Angular and Bootstrap while collaborating with backend developers to integrate REST APIs.manage code with Git, Improved my understanding of real-world development workflows, version control, and debugging practices.',
      techUsed: 'Technologies Used',
      techStack: [
        'Angular',
        'RxJS',
        'Node.js',
        'MongoDB',
        'Express.js',
        'TypeScript',
        'HTML',
        'CSS',
        'SCSS',
        'Bootstrap',
      ],
      position: 'left',
      showAllTech: false,
    },
  ];

  toggleTech(exp: any) {
    exp.showAllTech = !exp.showAllTech;
  }

  skills = [
    {
      icon: '💻',
      title: 'Full-Stack Development',
      description:
        'End-to-end web application development using modern technologies such as Angular, React, Node.js, and MongoDB.',
    },
    {
      icon: '🏗️',
      title: 'System Architecture',
      description:
        'Designing scalable, maintainable, and efficient software architectures with strong focus on modular design and clean APIs.',
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description:
        'Improving application speed, responsiveness, and user experience through code optimization, caching, and database tuning.',
    },
    {
      icon: '🤝',
      title: 'Team Collaboration',
      description:
        'Working effectively in cross-functional development teams using Agile methodologies, Git workflows, and CI/CD pipelines.',
    },
    {
      icon: '🧩',
      title: 'Problem Solving',
      description:
        'Analyzing complex challenges and implementing efficient, elegant, and maintainable technical solutions.',
    },
    {
      icon: '📚',
      title: 'Continuous Learning',
      description:
        'Staying updated with latest technologies, frameworks, and industry best practices to continuously improve skill set.',
    },
  ];
}
