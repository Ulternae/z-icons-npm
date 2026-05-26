import React from 'react';

export interface LanCarrotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarrot: React.FC<LanCarrotProps>;
export default LanCarrot;
