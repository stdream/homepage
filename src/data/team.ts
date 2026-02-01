export type Professor = {
  name: string;
  role: string;
  affiliation: string;
  email: string;
};

export type Student = {
  name: string;
  major: string;
};

export const professor: Professor = {
  name: "이희정",
  role: "교수",
  affiliation: "산업융합학부 / 산업데이터엔지니어링학과 / 기술경영전문대학원",
  email: "stdream@hanyang.ac.kr",
};

export const phdStudents: Student[] = [
  { name: "양유진", major: "산업데이터엔지니어링학과" },
  { name: "문희정", major: "기술경영전문대학원" },
  { name: "박찬호", major: "기술경영전문대학원" },
  { name: "서효석", major: "기술경영전문대학원" },
  { name: "윤성민", major: "기술경영전문대학원" },
  { name: "이만표", major: "기술경영전문대학원" },
  { name: "조성진", major: "기술경영전문대학원" },
  { name: "조용진", major: "기술경영전문대학원" },
];

export const msStudents: Student[] = [
  { name: "이지수", major: "산업데이터엔지니어링학과" },
  { name: "조두희", major: "산업데이터엔지니어링학과" },
  { name: "김다빈", major: "산업데이터엔지니어링학과" },
  { name: "최화연", major: "산업데이터엔지니어링학과" },
];
