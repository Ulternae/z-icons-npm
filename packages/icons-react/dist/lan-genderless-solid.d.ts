import React from 'react';

export interface LanGenderlessSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGenderlessSolid: React.FC<LanGenderlessSolidProps>;
export default LanGenderlessSolid;
