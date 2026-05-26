import React from 'react';

export interface LanPersonRifleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonRifle: React.FC<LanPersonRifleProps>;
export default LanPersonRifle;
