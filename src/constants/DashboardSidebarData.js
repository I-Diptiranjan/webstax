import {
  MdOutlineBarChart,
  MdOutlineLogout,
  MdOutlinePeople,
  MdDriveFolderUpload,
  MdOutlineVoiceChat,
  MdCoPresent,
  MdContactSupport,
  MdOutlineAnalytics,
  MdCheckCircleOutline,
  MdOutlineSettings,
  MdPayments,
} from "react-icons/md";

import { SlCalender } from "react-icons/sl";

const TrainerSidebarItems = [
  {
    title: "Dashboard",
    icon: MdOutlineBarChart,
    link: "",
    for: "TrainerDashboard",
  },
  {
    title: "Calender",
    icon: SlCalender,
    link: "calender",
    for: "TrainerDashboard",
  },
  {
    title: "Upload Materials",
    icon: MdDriveFolderUpload,
    link: "uploadmaterials",
    for: "TrainerDashboard",
  },
  {
    title: "Meetings",
    icon: MdOutlineVoiceChat,
    link: "meetings",
    for: "TrainerDashboard",
  },
  {
    title: "Attendance Management",
    icon: MdCoPresent,
    link: "attendance",
    for: "TrainerDashboard",
  },
  {
    title: "Profile",
    icon: MdOutlinePeople,
    link: "profile",
    for: "TrainerDashboard",
  },
  {
    title: "Help & Support",
    icon: MdContactSupport,
    link: "help",
    for: "TrainerDashboard",
  },
  {
    title: "Logout",
    icon: MdOutlineLogout,
    link: "logout",
    for: "TrainerDashboard",
  },
];

const organisationSidebarItems = [
  {
    title: "Dashboard",
    icon: MdOutlineBarChart,
    link: "",
    for: "OrgDashboard",
  },
  {
    title: "Analytics",
    icon: MdOutlineAnalytics,
    link: "analytics",
    for: "OrgDashboard",
  },
  {
    title: "Course Outline",
    icon: MdCheckCircleOutline,
    link: "courseOutline",
    for: "OrgDashboard",
  },
  {
    title: "Meetings",
    icon: MdOutlineVoiceChat,
    link: "meetings",
    for: "OrgDashboard",
  },
  {
    title: "Payments",
    icon: MdPayments,
    link: "payments",
    for: "OrgDashboard",
  },
  {
    title: "Settings",
    icon: MdOutlineSettings,
    link: "settings",
    for: "OrgDashboard",
  },
  {
    title: "Help & Support",
    icon: MdContactSupport,
    link: "help",
    for: "OrgDashboard",
  },
  {
    title: "Logout",
    icon: MdOutlineLogout,
    link: "logout",
    for: "OrgDashboard",
  },
];

const TASidebarItems = [
  {
    title: "Dashboard",
    icon: MdOutlineBarChart,
    link: "",
    for: "TADashboard",
  },
  {
    title: "Courses",
    icon: MdOutlineAnalytics,
    link: "courses",
    for: "TADashboard",
  },
  {
    title: "Trainers",
    icon: MdCheckCircleOutline,
    link: "trainers",
    for: "TADashboard",
  },
  {
    title: "Revenue",
    icon: MdOutlineVoiceChat,
    link: "revenue",
    for: "TADashboard",
  },
  {
    title: "Meetings",
    icon: MdPayments,
    link: "meetings",
    for: "TADashboard",
  },
  {
    title: "Organisations",
    icon: MdPayments,
    link: "organisations",
    for: "TADashboard",
  },
  {
    title: "Settings",
    icon: MdOutlineSettings,
    link: "settings",
    for: "TADashboard",
  },
  {
    title: "Help & Support",
    icon: MdContactSupport,
    link: "help",
    for: "TADashboard",
  },
  {
    title: "Logout",
    icon: MdOutlineLogout,
    link: "logout",
    for: "TADashboard",
  },
];

export { TrainerSidebarItems, organisationSidebarItems, TASidebarItems };
