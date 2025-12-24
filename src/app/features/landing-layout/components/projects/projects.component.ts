import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDeleteComponent } from 'src/app/features/confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  searchTerm: string = '';
  selectedTech: string = '';

  isOpen = false;

  constructor(private modalService: NgbModal) {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectTech(tech: string) {
    this.selectedTech = tech;
    this.isOpen = false;
  }
  fullscreenImages: string[] = [];
  fullscreenModal: any;

  openFullscreen(project: any) {
    this.fullscreenImages = project.images;

    this.fullscreenModal = new (window as any).bootstrap.Modal(
      document.getElementById('fullscreenModal')
    );
    this.fullscreenModal.show();
  }

  closeFullscreen() {
    if (this.fullscreenModal) {
      this.fullscreenModal.hide();
    }
  }
  expandedDescription: any = {};

  toggleDescription(id: number) {
    this.expandedDescription[id] = !this.expandedDescription[id];
  }
  technologies = [
    'HTML',
    'CSS',
    'SCSS',
    'SASS',
    'Bootstrap',
    'Tailwind CSS',
    'Ionic',
    'Angular',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Express.js',
    'MongoDB',
  ];
  projects = [
    {
      id: 1,
      name: 'Ever Stylish',
      role: 'Frontend Developer',
      description:
        'Built a full-featured e-commerce platform with secure authentication, dynamic product browsing, seamless cart/checkout flow, and an admin panel for product and order management.',
      techStack: [
        'Angular',
        'Bootstrap',
        'SCSS',
        'CSS',
        'HTML',
        'TypeScript',
        'Node.js',
        'Express.js',
        'MongoDb',
      ],
      images: [
        '../../../../../assets/images/everStylish/01.png',
        '../../../../../assets/images/everStylish/03.png',
        '../../../../../assets/images/everStylish/02.png',
        '../../../../../assets/images/everStylish/04.png',
      ],
      codeLink: 'https://github.com/yourusername/hush-app',
      liveDemo: 'https://everstylish.com/',
    },
    {
      id: 2,
      name: 'Punjabi Sahitya',
      role: 'Frontend Developer',
      description:
        'It is a cultural and administrative portal that works as both an information hub for the Punjabi Sahitya Academy and a user-friendly system where the community can engage, access resources, and stay updated.',
      techStack: ['React', 'Bootstrap', 'SCSS', 'SASS', 'CSS', 'HTML', 'PHP'],
      images: [
        '../../../../../assets/images/panjabiShita/04.png',
        '../../../../../assets/images/panjabiShita/03.png',
        '../../../../../assets/images/panjabiShita/01.png',
        '../../../../../assets/images/panjabiShita/02.png',
      ],
      codeLink: 'https://github.com/yourusername/portfolio',
      liveDemo: 'https://punjabi-sahitya-academy.web.app/',
    },
    {
      id: 3,
      name: 'IDMS',
      role: 'Frontend Developer',
      description:
        'The IDMS (Integrated Data Management system / ERP-like system) project is an enterprise-level management platform that covers the end-to-end operations of a business. It brings multiple departments and processes into a single dashboard so that organizations can manage their entire workflow efficiently.',
      techStack: ['Angular', 'Bootstrap', 'SCSS', 'CSS', 'HTML', 'TypeScript'],
      images: [
        '../../../../../assets/images/IDMS/01.png',
        '../../../../../assets/images/IDMS/02.png',
        '../../../../../assets/images/IDMS/03.png',
        '../../../../../assets/images/IDMS/04.png',
        '../../../../../assets/images/IDMS/05.png',
        '../../../../../assets/images/IDMS/06.png',
      ],
      codeLink: 'https://github.com/yourusername/portfolio',
      liveDemo: 'https://idms-vit.com/',
    },
    {
      id: 4,
      name: 'Shop & Customer App',
      role: 'Full Stack Developer',
      description:
        'A centralized dashboard where the Super Admin creates businesses, manages catalogues, and assigns shops. It ensures complete control over categories, products, and shop onboarding.A dedicated platform for shop owners to manage catalogs, update stock, handle customer orders, and communicate with the Super Admin.A user-friendly shopping app where customers browse products, add to cart, manage addresses, and track their order status in real-time.',
      techStack: [
        'Angular',
        'ionic',
        'Bootstrap',
        'SCSS',
        'SASS',
        'CSS',
        'HTML',
        'TypeScript',
        'Node.js',
        'Express.js',
        'MongoDb',
      ],
      images: [
        '../../../../../assets/images/shop_customer/customer/Untitled design.png',
        '../../../../../assets/images/shop_customer/customer/Untitled design_02.png',
        '../../../../../assets/images/shop_customer/customer/Untitled design_03.png',
        '../../../../../assets/images/shop_customer/shop/shop_01.png',
        '../../../../../assets/images/shop_customer/shop/shop_02.png',
        '../../../../../assets/images/shop_customer/deshboard/deshboard01.png',
        '../../../../../assets/images/shop_customer/deshboard/02.png',
        '../../../../../assets/images/shop_customer/deshboard/03.png',
        '../../../../../assets/images/shop_customer/deshboard/04.png',
        '../../../../../assets/images/shop_customer/deshboard/05.png',
        '../../../../../assets/images/shop_customer/deshboard/07.png',
        '../../../../../assets/images/shop_customer/deshboard/08.png',
      ],
      codeLink: 'https://github.com/yourusername/portfolio',
      liveDemo: 'https://janmrm.jankalyan.life/#/login',
    },
    {
      id: 5,
      name: 'Peacock Collective',
      role: 'Full Stack Developer',
      description:
        'A fully responsive e-commerce web app built with Angular, SCSS, and Bootstrap featuring secure Razorpay payments, product search & filtering, a smooth cart-to-checkout flow, and real-time stock updates. Integrated REST APIs (Node.js + Express) with MongoDB for authentication, orders, and product management. Designed with modular, reusable Angular components for performance and scalability.',
      techStack: [
        'Angular',
        'Bootstrap',
        'SCSS',
        'SASS',
        'CSS',
        'HTML',
        'TypeScript',
        'Node.js',
        'Express.js',
        'MongoDb',
      ],
      images: [
        '../../../../../assets/images/peacocke/01.png',
        '../../../../../assets/images/peacocke/login01.png',
        '../../../../../assets/images/peacocke/02.png',
        '../../../../../assets/images/peacocke/cart.png',
        '../../../../../assets/images/peacocke/cart01.png',
      ],
      codeLink: 'https://github.com/yourusername/portfolio',
      liveDemo: 'https://peacockcollective.in/home',
    },
    {
      id: 6,
      name: 'Purchase  E-commers',
      role: 'Full Stack Developer',
      description:
        'A scalable e-commerce platform built using React and modular component architecture. Implements Razorpay payment gateway, optimized product filtering, responsive UI, and real-time inventory management. Backend developed with Node.js/Express and MongoDB, featuring JWT authentication and end-to-end REST APIs.',
      techStack: [
        'React',
        'Tailwind CSS',
        'SCSS',
        'SASS',
        'CSS',
        'HTML',
        'Node.js',
        'Express.js',
        'MongoDb',
      ],
      images: [
        '../../../../../assets/images/purches/01.png',
        '../../../../../assets/images/purches/02.png',
        '../../../../../assets/images/purches/03.png',
        '../../../../../assets/images/purches/04.png',
        '../../../../../assets/images/purches/05.png',
        '../../../../../assets/images/purches/06.png',
      ],
      codeLink: 'https://github.com/yourusername/portfolio',
      liveDemo: '',
    },
    {
      id: 7,
      name: 'GKC Klinica',
      role: 'Frontend Developer',
      description:
        'A scalable healthcare and wellness management platform built using Next.js with a modular, role-based architecture. The application supports multiple user roles including User, Doctor, Admin, and Yoga Teacher, enabling seamless appointment booking, video consultations, membership management, and blood donation services.The backend is developed using NestJS with PostgreSQL, implementing JWT-based authentication, secure role-based access control, and well-structured REST APIs for smooth data flow and scalability.',
      techStack: [
        'Next.js',
        'Tailwind CSS',
        'SCSS',
        'SASS',
        'CSS',
        'HTML',
        'Nest.js',
        'Express.js',
        'PostgreSql',
      ],
      images: [
        '../../../../../assets/images/gkcklinica/login.png',
        '../../../../../assets/images/gkcklinica/admin01.png',
        '../../../../../assets/images/gkcklinica/admin02.png',
        '../../../../../assets/images/gkcklinica/admin03.png',
        '../../../../../assets/images/gkcklinica/user01.png',
        '../../../../../assets/images/gkcklinica/user02.png',
        '../../../../../assets/images/gkcklinica/user03.png',
      ],
      codeLink: 'https://github.com/yourusername/portfolio',
      liveDemo: 'https://www.gkcklinica.com/',
    },
  ];

  get filteredProjects() {
    return this.projects.filter((project) => {
      const matchesSearch =
        this.searchTerm.trim() === '' ||
        project.role.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        project.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        project.description
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase()) ||
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(this.searchTerm.toLowerCase())
        );

      const matchesTech =
        this.selectedTech === '' ||
        project.techStack.some(
          (tech) => tech.toLowerCase() === this.selectedTech.toLowerCase()
        );

      return matchesSearch && matchesTech;
    });
  }

  openConfirmModal() {
    const modalRef = this.modalService.open(ConfirmDeleteComponent, {
      centered: true,
      size: 'md',
      backdrop: 'static',
      keyboard: false,
    });

    modalRef.componentInstance.heading = 'Source Code Unavailable';
    modalRef.componentInstance.confirmText = `Source code unavailable due to company confidentiality policies and proprietary restrictions ?`;
    modalRef.result.then(
      (success: any) => {
        if (success.title == 'Yes') {
        }
      },
      (reason: any) => {}
    );
  }

  handleLiveDemo(project: any) {
    if (!project.liveDemo) {
      const modalRef = this.modalService.open(ConfirmDeleteComponent, {
        centered: true,
        size: 'md',
        backdrop: 'static',
        keyboard: false,
      });

      modalRef.componentInstance.heading = 'Live Demo Not Available';
      modalRef.componentInstance.confirmText =
        'This project is not deployed yet. It is currently under development.';

      modalRef.result.then(
        (success: any) => {},
        (reason: any) => {}
      );
    } else {
      window.open(project.liveDemo, '_blank');
    }
  }
}
