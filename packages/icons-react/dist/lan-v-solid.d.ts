import React from 'react';

export interface LanVSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVSolid: React.FC<LanVSolidProps>;
export default LanVSolid;
