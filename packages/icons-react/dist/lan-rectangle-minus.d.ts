import React from 'react';

export interface LanRectangleMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleMinus: React.FC<LanRectangleMinusProps>;
export default LanRectangleMinus;
