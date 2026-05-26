import React from 'react';

export interface LanComputerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanComputer: React.FC<LanComputerProps>;
export default LanComputer;
