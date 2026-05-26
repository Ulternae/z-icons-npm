import React from 'react';

export interface LanGSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGSolid: React.FC<LanGSolidProps>;
export default LanGSolid;
