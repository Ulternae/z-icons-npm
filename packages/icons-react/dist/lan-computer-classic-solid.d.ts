import React from 'react';

export interface LanComputerClassicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanComputerClassicSolid: React.FC<LanComputerClassicSolidProps>;
export default LanComputerClassicSolid;
