import React from 'react';

export interface LanSpiralProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpiral: React.FC<LanSpiralProps>;
export default LanSpiral;
