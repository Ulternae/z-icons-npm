import React from 'react';

export interface LanUserDashedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserDashed: React.FC<LanUserDashedProps>;
export default LanUserDashed;
