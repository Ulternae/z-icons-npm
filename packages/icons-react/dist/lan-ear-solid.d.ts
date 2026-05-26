import React from 'react';

export interface LanEarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarSolid: React.FC<LanEarSolidProps>;
export default LanEarSolid;
