import React from 'react';

export interface LanComputerMouseButtonLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanComputerMouseButtonLeft: React.FC<LanComputerMouseButtonLeftProps>;
export default LanComputerMouseButtonLeft;
