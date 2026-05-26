import React from 'react';

export interface LanPeopleDressSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleDressSimpleThin: React.FC<LanPeopleDressSimpleThinProps>;
export default LanPeopleDressSimpleThin;
