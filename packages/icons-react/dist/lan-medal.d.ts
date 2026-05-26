import React from 'react';

export interface LanMedalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMedal: React.FC<LanMedalProps>;
export default LanMedal;
