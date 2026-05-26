import React from 'react';

export interface LanSprinklerCeilingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSprinklerCeiling: React.FC<LanSprinklerCeilingProps>;
export default LanSprinklerCeiling;
