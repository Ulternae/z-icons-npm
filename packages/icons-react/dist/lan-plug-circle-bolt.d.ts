import React from 'react';

export interface LanPlugCircleBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlugCircleBolt: React.FC<LanPlugCircleBoltProps>;
export default LanPlugCircleBolt;
