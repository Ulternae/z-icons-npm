import React from 'react';

export interface LanPersonPinballSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonPinballSolid: React.FC<LanPersonPinballSolidProps>;
export default LanPersonPinballSolid;
