import React from 'react';

export interface LanPersonCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCirclePlus: React.FC<LanPersonCirclePlusProps>;
export default LanPersonCirclePlus;
