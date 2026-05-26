import React from 'react';

export interface LanMenorahProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMenorah: React.FC<LanMenorahProps>;
export default LanMenorah;
