import React from 'react';

export interface LanScrollSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScrollSolid: React.FC<LanScrollSolidProps>;
export default LanScrollSolid;
