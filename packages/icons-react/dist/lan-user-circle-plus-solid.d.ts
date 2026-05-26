import React from 'react';

export interface LanUserCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserCirclePlusSolid: React.FC<LanUserCirclePlusSolidProps>;
export default LanUserCirclePlusSolid;
