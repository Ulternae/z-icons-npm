import React from 'react';

export interface LanBlanketFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlanketFire: React.FC<LanBlanketFireProps>;
export default LanBlanketFire;
