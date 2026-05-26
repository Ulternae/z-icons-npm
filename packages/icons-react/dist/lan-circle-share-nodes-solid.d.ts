import React from 'react';

export interface LanCircleShareNodesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleShareNodesSolid: React.FC<LanCircleShareNodesSolidProps>;
export default LanCircleShareNodesSolid;
