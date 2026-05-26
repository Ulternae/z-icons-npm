import React from 'react';

export interface LanHomeLgSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHomeLgSolid: React.FC<LanHomeLgSolidProps>;
export default LanHomeLgSolid;
