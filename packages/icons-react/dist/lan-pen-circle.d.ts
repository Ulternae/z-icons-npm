import React from 'react';

export interface LanPenCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenCircle: React.FC<LanPenCircleProps>;
export default LanPenCircle;
