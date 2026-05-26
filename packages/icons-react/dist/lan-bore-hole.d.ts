import React from 'react';

export interface LanBoreHoleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoreHole: React.FC<LanBoreHoleProps>;
export default LanBoreHole;
