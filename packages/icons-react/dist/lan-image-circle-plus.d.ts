import React from 'react';

export interface LanImageCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageCirclePlus: React.FC<LanImageCirclePlusProps>;
export default LanImageCirclePlus;
