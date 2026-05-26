import React from 'react';

export interface LanComputerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanComputerSolid: React.FC<LanComputerSolidProps>;
export default LanComputerSolid;
