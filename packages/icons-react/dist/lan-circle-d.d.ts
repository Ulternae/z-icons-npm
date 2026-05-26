import React from 'react';

export interface LanCircleDProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleD: React.FC<LanCircleDProps>;
export default LanCircleD;
