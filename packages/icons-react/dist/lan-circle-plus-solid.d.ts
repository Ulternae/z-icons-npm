import React from 'react';

export interface LanCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePlusSolid: React.FC<LanCirclePlusSolidProps>;
export default LanCirclePlusSolid;
