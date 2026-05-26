import React from 'react';

export interface LanComputerMouseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanComputerMouseSolid: React.FC<LanComputerMouseSolidProps>;
export default LanComputerMouseSolid;
