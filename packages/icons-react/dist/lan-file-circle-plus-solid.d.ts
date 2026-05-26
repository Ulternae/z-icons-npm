import React from 'react';

export interface LanFileCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCirclePlusSolid: React.FC<LanFileCirclePlusSolidProps>;
export default LanFileCirclePlusSolid;
