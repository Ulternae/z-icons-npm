import React from 'react';

export interface LanTrilliumSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrilliumSolid: React.FC<LanTrilliumSolidProps>;
export default LanTrilliumSolid;
