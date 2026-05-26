import React from 'react';

export interface LanChildRifleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChildRifle: React.FC<LanChildRifleProps>;
export default LanChildRifle;
