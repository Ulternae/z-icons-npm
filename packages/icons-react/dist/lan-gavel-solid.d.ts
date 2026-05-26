import React from 'react';

export interface LanGavelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGavelSolid: React.FC<LanGavelSolidProps>;
export default LanGavelSolid;
