export interface Trip {
    start: string;
    end: string;
    level: number;
    type: 'continued' | 'non-continued' | 'duplicate';
  }