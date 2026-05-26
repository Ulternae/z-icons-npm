import React from 'react';

export interface LanComputerMouseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanComputerMouse: React.FC<LanComputerMouseProps>;
export default LanComputerMouse;
