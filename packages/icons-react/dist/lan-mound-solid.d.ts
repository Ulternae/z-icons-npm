import React from 'react';

export interface LanMoundSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoundSolid: React.FC<LanMoundSolidProps>;
export default LanMoundSolid;
