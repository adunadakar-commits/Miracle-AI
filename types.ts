
export enum AppView {
  HOME = 'home',
  MIRACLE = 'miracle',
  IMAGE = 'image',
  DEPLOY = 'deploy'
}

export interface MiracleResult {
  text: string;
  timestamp: Date;
}

export interface GeneratedImage {
  url: string;
  prompt: string;
  timestamp: Date;
}
