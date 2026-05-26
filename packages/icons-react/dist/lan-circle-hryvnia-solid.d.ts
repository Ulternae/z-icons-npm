import React from 'react';

export interface LanCircleHryvniaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHryvniaSolid: React.FC<LanCircleHryvniaSolidProps>;
export default LanCircleHryvniaSolid;
