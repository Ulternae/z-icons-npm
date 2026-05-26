import React from 'react';

export interface LanFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFire: React.FC<LanFireProps>;
export default LanFire;
