import React from 'react';

export interface LanComputerMouseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanComputerMouseThin: React.FC<LanComputerMouseThinProps>;
export default LanComputerMouseThin;
