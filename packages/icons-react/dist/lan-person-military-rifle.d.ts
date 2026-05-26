import React from 'react';

export interface LanPersonMilitaryRifleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonMilitaryRifle: React.FC<LanPersonMilitaryRifleProps>;
export default LanPersonMilitaryRifle;
