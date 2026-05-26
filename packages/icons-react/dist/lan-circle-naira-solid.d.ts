import React from 'react';

export interface LanCircleNairaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleNairaSolid: React.FC<LanCircleNairaSolidProps>;
export default LanCircleNairaSolid;
