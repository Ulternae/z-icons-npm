import React from 'react';

export interface LanBlenderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlenderSolid: React.FC<LanBlenderSolidProps>;
export default LanBlenderSolid;
