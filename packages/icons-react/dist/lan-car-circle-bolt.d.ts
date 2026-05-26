import React from 'react';

export interface LanCarCircleBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarCircleBolt: React.FC<LanCarCircleBoltProps>;
export default LanCarCircleBolt;
