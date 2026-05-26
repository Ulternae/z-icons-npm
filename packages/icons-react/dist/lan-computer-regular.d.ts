import React from 'react';

export interface LanComputerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanComputerRegular: React.FC<LanComputerRegularProps>;
export default LanComputerRegular;
