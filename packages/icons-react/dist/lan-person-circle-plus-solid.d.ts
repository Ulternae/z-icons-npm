import React from 'react';

export interface LanPersonCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCirclePlusSolid: React.FC<LanPersonCirclePlusSolidProps>;
export default LanPersonCirclePlusSolid;
