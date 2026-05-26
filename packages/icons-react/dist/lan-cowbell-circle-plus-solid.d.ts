import React from 'react';

export interface LanCowbellCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCowbellCirclePlusSolid: React.FC<LanCowbellCirclePlusSolidProps>;
export default LanCowbellCirclePlusSolid;
