import React from 'react';

export interface LanComputerMouseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanComputerMouseRegular: React.FC<LanComputerMouseRegularProps>;
export default LanComputerMouseRegular;
