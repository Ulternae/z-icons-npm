import React from 'react';

export interface LanFenceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFenceSolid: React.FC<LanFenceSolidProps>;
export default LanFenceSolid;
