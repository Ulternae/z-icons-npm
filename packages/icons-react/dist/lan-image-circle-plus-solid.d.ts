import React from 'react';

export interface LanImageCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageCirclePlusSolid: React.FC<LanImageCirclePlusSolidProps>;
export default LanImageCirclePlusSolid;
