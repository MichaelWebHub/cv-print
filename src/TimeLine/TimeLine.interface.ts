export interface ITimeLine {
  iId: number;
  sBeginDate: string;
  sEndDate: string;
  sPlace: string;
  sCountry?: string;
  sParamName?: string;
  aAchievements?: ITimelineAchievement[];
}

export interface ITimelineAchievement {
  sName: string;
  iId: number;
  iQuarter: number;
  iYear: number;
  sDescription: string;
}
