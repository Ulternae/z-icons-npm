import React from 'react';

export interface LanRandomSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRandomSolid: React.FC<LanRandomSolidProps>;
export default LanRandomSolid;
