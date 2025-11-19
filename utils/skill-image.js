
import Water from '../app/assets/svg/skills/Water.svg';
import Control from '../app/assets/svg/skills/Control.svg';
import AutoCAD from '../app/assets/svg/skills/AutoCAD.svg';
import teamwork from '../app/assets/svg/skills/teamwork.svg';
import Technical from '../app/assets/svg/skills/Technical.svg';
import Language from '../app/assets/svg/skills/Language.svg';
import project from '../app/assets/svg/skills/project.svg';


export const skillsImage = (skill) => {
  // const skillID = skill.toLowerCase();
  switch (skill) {
    case 'Water Network Design & Irrigation Systems':
      return Water;
    case 'Strong teamwork, leadership, and problem-solving abilities':
      return teamwork;
    case 'Project Management & Construction Supervision':
      return project;
    case 'English: Fluent | Persian: Native':
      return Language;
    case 'AutoCAD, Civil 3D, WaterGEMS, EPANET, MS Project, Excel':
      return AutoCAD;
          case 'Quality Control (QC) and Site Safety':
      return Control;
          case 'Technical Reporting & Documentation':
      return Technical;

    default:
      break;
  }
}
