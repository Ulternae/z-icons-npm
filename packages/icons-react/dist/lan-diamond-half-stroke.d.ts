import React from 'react';

export interface LanDiamondHalfStrokeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiamondHalfStroke: React.FC<LanDiamondHalfStrokeProps>;
export default LanDiamondHalfStroke;
