import projectP1 from "../assets/projects/project1.png";
import projectP2 from "../assets/projects/project1.1.png";
import projectP3 from "../assets/projects/project1.2.png";
import projectP4 from "../assets/projects/project1.3.png";
import projectM from "../assets/projects/project-2.png";
import projectM2 from "../assets/projects/project-2.1.png";
import projectM3 from "../assets/projects/project-2.2.png";
import projectM4 from "../assets/projects/project-2.3.png";
import projectD from "../assets/projects/project-3.png";
import projectD2 from "../assets/projects/project-3.1.png";
import projectD3 from "../assets/projects/project-3.2.png";
import projectD4 from "../assets/projects/project-3.3.png";
import projectD5 from "../assets/projects/project-4.png";
import projectD6 from "../assets/projects/project-4.1.png";
import projectD7 from "../assets/projects/project-4.2.png";
import projectD8 from "../assets/projects/project-4.3.png";
import projectD9 from "../assets/projects/project-5.png";
import projectD10 from "../assets/projects/project-5.1.png";
import projectD11 from "../assets/projects/project-5.2.png";
import projectD12 from "../assets/projects/project-5.3.png";
import projectEQ from "../assets/projects/project-6.png";
import projectEQ1 from "../assets/projects/project-6.1.png";
import projectEQ2 from "../assets/projects/project-6.2.png";
import projectEQ3 from "../assets/projects/project-6.3.png";
import projectEnd from "../assets/projects/project-7.1.png";
import projectEnd1 from "../assets/projects/project-7.png";
import projectEnd2 from "../assets/projects/project-7.2.png";
import projectEnd3 from "../assets/projects/project-7.3.png";

export const HERO_CONTENT = `ผมเป็น full Stack developer ที่กระตือรือร้นและมีความสามารถพิเศษในการสร้างเว็บแอปพลิเคชันที่แข็งแกร่งและรองรับหลากหลายขนาดหน้าจอ ด้วยประสบการณ์ตรง 2 ปี ผมได้ฝึกฝนทักษะของผมใน front-end เช่น React และ Next.js ตลอดจน back-end เช่น Node.js, FastAPI, PostgreSQL และ Firebase เป้าหมายของผมคือการใช้ประโยชน์จากความสามารถของผมเพื่อสร้างโซลูชันที่เป็นนวัตกรรมใหม่ที่ขับเคลื่อนการเติบโตของธุรกิจและมอบประสบการณ์การใช้งานที่ยอดเยี่ยม`;

export const ABOUT_TEXT = `ผมเป็น full Stack developer ที่ทุ่มเทให้กับการทำงานและด้วยความหลงใหลในการสร้างเว็บแอปพลิเคชันที่มีประสิทธิภาพและเป็นมิตรกับผู้ใช้ ด้วยประสบการณ์ 2 ปี ผมได้ทํางานกับเทคโนโลยีที่หลากหลาย รวมถึง React, Next.js, Node.js, Python, Angular, Flutter, Firebase และ PostgreSQL การเริ่มต้นในการเป็น developer นั้่นเกิดจากความชอบที่อยากจะเรียนรู้พัฒนาตนเองสู่อาชีพ ผมได้เรียนรู้และมุ่งมั่นที่จะเรียนรู้เเละปรับตัวให้เข้ากับความท้ามายใหม่`;

export const EXPERIENCES = [
  {
    year: "พฤษภาคม 2567 - Present",
    role: "Full Stack Developer",
    company: "บริษัท เดฟมาส จำกัด",
    description: `สร้างและพัฒนาเว็บไซต์ต่างๆที่ได้รับมอบหมาย โดยใช้ front-end ด้วย react และ angular ทำงานร่วมกับ Api และ ในส่วนของ Back-end ใช้ python`,
    technologies: ["React.js", "Python", "Angular"],
  },
  {
    year: "พฤศจิกายน 2567 - ธันวาคม 2567",
    role: "Full Stack Developer (Freelance)",
    company: "บริษัท ไบนารี่โฟลว จำกัด",
    description: `สร้างและพัฒนาเว็บไซต์ทั้งส่วนของ back-end และ front-end โดยใช้ next.js ในการเชื่อมต่อกับ API`,
    technologies: ["Next.js", "Postgres"],
  },
  {
    year: "ธันวาคม 2566 - พฤษภาคม 2567",
    role: "Frontend Developer (Pasttime)",
    company: "บริษัท เมิร์จ เอ็นเตอร์ไพรส์ จำกัด",
    description: `สร้างและพัฒนาส่วน front-end สําหรับแอปพลิเคชันโดยใช้ Flutter ทํางานประสานกับ back-end เพื่อรวมส่วน front-end เข้ากับ Node.js API ใช้การออกแบบที่ตอบสนองและประสิทธิภาพส่วนหน้าที่เหมาะสมที่สุด `,
    technologies: ["Flutter"],
  },
  {
    year: "มกราคม 2566 - พฤศจิกายน 2566",
    role: "Full Stack Developer (Pasttime)",
    company: "บริษัท ประดิษฐ์ซอฟต์ จำกัด",
    description: `สร้างและพัฒนาส่วน front-end สําหรับแอปพลิเคชันโดยใช้ Flutter และเชื่อมต่อกับระบบฐานข้อมูล PostgreSQL`,
    technologies: ["Flutter", "Postgres"],
  },
];

export const PROJECTS = [
  {
    title: "ระบบจองห้องพัก (บริษัท ประดิษฐ์ซอฟต์ จำกัด)",
    image: projectP1,
    image2: projectP2,
    image3: projectP3,
    image4: projectP4,
    description:
      "เป็นแอพพลิเคชั่น สำหรับทำงานในระบบ POS System ใช้ Flutter ในการสร้างและพัฒนาระบบ โดยมี Postgresql เป็นฐานข้อมูล และใช้porvider ของ flutter ในการจัดการ state ได้รับมอบหมายในส่วนของ การเลือกโซนที่จะเข้าพัก, การเลือกประเภทห้องพัก, การเลือกห้องพัก, การเลือกประเภทของเตียงนอน, การเลือกสิ่งอำนวยความสะดวกของห้องนอน",
    technologies: ["Flutter", "Postgres"],
  },
  {
    title: "แอพโรงพยาบาล (บริษัท เมิร์จ เอ็นเตอร์ไพรส์ จำกัด)",
    image: projectM,
    image2: projectM2,
    image3: projectM3,
    image4: projectM4,
    description:
      "เป็นแอพพลิเคชั่น สำหรับการใช้งานภายในโรงพยาบาล ได้รับสร้างและพัฒนาด้วย Flutter โดยเชื่อมต่อกับ API ที่ทีม back-end พัฒนาขึ้นมามีการจัดการ state ด้วย GetX ได้รับมอบหมายในส่วนของ การตั้งค่า, kardex ของพยาบาล, รายการของผู้ป่วย",
    technologies: ["Flutter"],
  },
  {
    title: "ศูนย์ประสานข่าวกรองแห่งชาติ (บริษัท เดฟมาส จำกัด)",
    image: projectD,
    image2: projectD2,
    image3: projectD3,
    image4: projectD4,
    description:
      "เป็นเว็บไซต์สำหรับใช้งานภายในเพื่อค้นหาข่าวต่างๆ ถูกสร้างและพัฒนาโดย front-end ใช้ react และ back-end ใช้ fastAPI ในการค้นหาข้อมูลข่าวได้มีการนำ Ai มาช่วยในการค้นหาโดยการใช้ Elasticsearch เพื่อการค้นหาที่แม่นยำและสามารถช่วยแก้ปัญหาสะกดคำผิดที่เกิดจากผู้ใช้งานกรอกให้สามารถพบข้อมูลที่ต้องการได้ มีการจัดการ state ด้วย react hook",
    technologies: ["React", "Python", "TailwindCSS"],
  },
  {
    title: "คณะกรรมการกำกับและส่งเสริมการประกอบธุรกิจประกันภัย (บริษัท เดฟมาส จำกัด)",
    image: projectD5,
    image2: projectD6,
    image3: projectD7,
    image4: projectD8,
    description:
      "เป็นเว็บไซต์สำหรับใช้งานของบริษัทประกันภัย ถูกสร้างและพัฒนาโดย front-end ใช้ react มีการจัดการ state ด้วย redux ได้รับมอบหมายในส่วนของหมายเหตุประกอบงบการเงิน",
    technologies: ["React", "TailwindCSS", "Ant Design"],
  },
  {
    title: "ระบบประเมิณการสูญเสียสรรถภาพ (บริษัท เดฟมาส จำกัด)",
    image: projectD9,
    image2: projectD10,
    image3: projectD11,
    image4: projectD12,
    description:
      "เป็นเว็บไซต์สำหรับใช้งานของบริษัทประกันภัย ถูกสร้างและพัฒนาโดย front-end ใช้ angular ",
    technologies: ["Angular", "TailwindCSS"],
  },
  {
    title: "eq for kidz (บริษัท ไบนารี่โฟลว จำกัด)",
    image: projectEQ,
    image2: projectEQ1,
    image3: projectEQ2,
    image4: projectEQ3,
    description:
      "เป็นเว็บไซต์สำหรับจองคลาสเรียน ถูกสร้างและพัฒนาโดยใช้ next เป็นทั้ง front-end และ back-end เชื่อมต่อกับฐานข้อมูลและได้นำการจองบันทึกลงGoogle Calendar พร้อมส่ง email เพื่อเเจ้งข้อมูลผู้จอง",
    technologies: ["Next", "TailwindCSS", "Postgres"],
  },
  {
    title: "ระบบสแกนใบหน้าเข้าทำงาน (โปรเจ็คจบปริญญาตรี)",
    image: projectEnd,
    image2: projectEnd1,
    image3: projectEnd2,
    image4: projectEnd3,
    description:
      "เป็นระบบสแกนใบหน้าด้วยเทคโนโลยี Face Recognition เมื่อเครื่องสแกนสามารถจับใบหน้าได้จะทำการบันทึกเวลาในการเข้าและออกงาน เพื่อส่งข้อมูลไปยังฐานข้อมูล firebase และนำข้อมูลจากฐานข้อมูลมาแสดงบนเว็บไซต์ ซึ่งเว็บไซต์นั้นจะเป็น Admin dashboard สามารถแก้ไขข้อมูล ดูข้อมูล หรือเพิ่มข้อมูลลงฐานข้อมูลได้",
    technologies: ["React", "Python", "Machine Learning", "TailwindCSS", "Firebase"],
  },
];

export const CONTACT = {
  address: "แขวงสีกัน เขตดอนเมือง กรุงเทพมหานคร 10210",
  phoneNo: "062-374-2174 ",
  email: "coke.supanat@gmail.com",
};
