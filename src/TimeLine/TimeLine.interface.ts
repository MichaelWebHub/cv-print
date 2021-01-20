import React, { ReactNode } from 'react';

export interface ITimeLine {
  iId: number;
  sBeginDate: string;
  sEndDate: string;
  sPlace: string;
  sImage?: string;
  sImageWidth?: string;
  sCountry?: string;
  sParamName?: string;
  aAchievements?: ITimelineAchievement[];
}

export interface ITimelineAchievement {
  sName: ReactNode;
  iId: number;
  iQuarter: number;
  iYear: number;
  sDescription: ReactNode;
}
