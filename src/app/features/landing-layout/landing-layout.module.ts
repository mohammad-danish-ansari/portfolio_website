import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingLayoutComponent } from './landing-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ImageComponent } from './image/image.component';
import { MyStoryComponent } from './my-story/my-story.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
const routes: Routes = [
  { path: '', component: LandingLayoutComponent },
  { path: 'project', component: ProjectsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skill', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    LandingLayoutComponent,
    ImageComponent,
    MyStoryComponent,
    AchievementsComponent,
    ProjectsComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LandingLayoutModule {}
