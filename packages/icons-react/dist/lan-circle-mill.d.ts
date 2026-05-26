import React from 'react';

export interface LanCircleMillProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleMill: React.FC<LanCircleMillProps>;
export default LanCircleMill;
