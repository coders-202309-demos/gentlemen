interface BaseGentleman {
  id: number;
  name: string;
  profession: string;
  twitter: string;
  picture: string;
  status: string;
}

export interface ApiGentleman extends BaseGentleman {
  selected: boolean;
}

export interface Gentleman extends BaseGentleman {
  isSelected: boolean;
}
