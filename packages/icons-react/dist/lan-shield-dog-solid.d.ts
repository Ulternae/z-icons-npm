import React from 'react';

export interface LanShieldDogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldDogSolid: React.FC<LanShieldDogSolidProps>;
export default LanShieldDogSolid;
