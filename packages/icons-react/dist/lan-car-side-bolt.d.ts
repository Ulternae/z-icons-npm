import React from 'react';

export interface LanCarSideBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarSideBolt: React.FC<LanCarSideBoltProps>;
export default LanCarSideBolt;
