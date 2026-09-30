import type { IconType } from "react-icons";

export interface Tech {
  name: string;
  icon: IconType;
  tags?: string[];
}

export interface ProjectData {
  name: string;
  description: string;
  imgPath?: string;
  frontendUrl: string;
  backendUrl: string;
}
