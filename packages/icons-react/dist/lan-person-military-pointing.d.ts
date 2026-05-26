import React from 'react';

export interface LanPersonMilitaryPointingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonMilitaryPointing: React.FC<LanPersonMilitaryPointingProps>;
export default LanPersonMilitaryPointing;
