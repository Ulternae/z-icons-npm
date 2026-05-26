import React from 'react';

export interface LanDeerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDeer: React.FC<LanDeerProps>;
export default LanDeer;
