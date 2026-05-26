import React from 'react';

export interface LanGasPumpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGasPumpSolid: React.FC<LanGasPumpSolidProps>;
export default LanGasPumpSolid;
