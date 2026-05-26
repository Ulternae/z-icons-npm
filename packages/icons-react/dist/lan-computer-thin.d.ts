import React from 'react';

export interface LanComputerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanComputerThin: React.FC<LanComputerThinProps>;
export default LanComputerThin;
