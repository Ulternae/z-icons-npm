import React from 'react';

export interface LanSpiralThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpiralThin: React.FC<LanSpiralThinProps>;
export default LanSpiralThin;
