import React from 'react';

export interface LanWandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWandSolid: React.FC<LanWandSolidProps>;
export default LanWandSolid;
