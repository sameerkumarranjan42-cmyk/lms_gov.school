export interface StudentProfile {
  name: string;
  rollNo: string;
  className: string;
  section: string;
  schoolName: string;
  academicYear: string;
  admissionNo: string;
  guardianName: string;
  guardianPhone: string;
  district: string;
  state: string;
}

export interface MonthlyAttendance {
  month: string;
  percentage: number;
  attended: number;
  total: number;
}

export interface DailyAttendanceRecord {
  date: string; // YYYY-MM-DD
  status: 'present' | 'absent' | 'holiday' | 'weekend';
  remarks?: string;
}

export interface AttendanceData {
  attendancePercentage: number;
  classesAttended: number;
  totalClasses: number;
  streakDays: number;
  lastUpdated: string;
  monthlyAttendance: MonthlyAttendance[];
  dailyAttendance: DailyAttendanceRecord[];
}

export type NoticeCategory = 'Academic' | 'Examination' | 'Holiday' | 'Event' | 'Notice';
export type NoticePriority = 'high' | 'normal' | 'urgent';

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: NoticeCategory;
  priority: NoticePriority;
  summary: string;
  fullContent: string;
  issuedBy: string;
}

export type CalendarEventType = 'holiday' | 'exam' | 'event' | 'school_day' | 'special';

export interface CalendarEvent {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  type: CalendarEventType;
  description: string;
  timing?: string;
}

export interface DailyRoutinePeriod {
  period: number;
  time: string;
  subject: string;
  teacher: string;
  room: string;
  isCurrent?: boolean;
}

export interface WardArrivalStatus {
  isArrived: boolean;
  arrivalTime: string;
  date: string;
  statusMessage: string;
  location: string;
  lastRecordedMethod: string;
}

export interface AcademicSubject {
  id: string;
  name: string;
  code: string;
  teacher: string;
  topicsCount: number;
  completedTopics: number;
  progressPercentage: number;
  upcomingAssignment?: string;
  description: string;
}

export interface ExamScheduleItem {
  id: string;
  subject: string;
  date: string;
  time: string;
  duration: string;
  maxMarks: number;
  roomNo: string;
  syllabus: string[];
}

export interface SchoolContactInfo {
  schoolName: string;
  address: string;
  phone: string;
  emergencyHelpline: string;
  email: string;
  officeHours: string;
  headmaster: string;
  districtOffice: string;
}
