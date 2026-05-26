import React from 'react';

export interface LanGaugeCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeCirclePlusSolid: React.FC<LanGaugeCirclePlusSolidProps>;
export default LanGaugeCirclePlusSolid;
