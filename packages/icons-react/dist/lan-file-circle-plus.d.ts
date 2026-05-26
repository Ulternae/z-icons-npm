import React from 'react';

export interface LanFileCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCirclePlus: React.FC<LanFileCirclePlusProps>;
export default LanFileCirclePlus;
