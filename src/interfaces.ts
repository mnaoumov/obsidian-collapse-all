import { TFile, TFolder } from 'obsidian';

export interface FileExplorerItem {
  file: TFile | TFolder;
  collapsed?: boolean;
  setCollapsed?: (state: boolean) => void;
}

export interface TagExplorerItem {
  tag: string;
  children: TagExplorerItem[];
  collapsed?: boolean;
  setCollapsed?: (state: boolean) => void;
}
