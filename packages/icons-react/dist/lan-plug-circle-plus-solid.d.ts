import React from 'react';

export interface LanPlugCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlugCirclePlusSolid: React.FC<LanPlugCirclePlusSolidProps>;
export default LanPlugCirclePlusSolid;
