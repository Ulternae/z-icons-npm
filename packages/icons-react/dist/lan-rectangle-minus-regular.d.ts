import React from 'react';

export interface LanRectangleMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleMinusRegular: React.FC<LanRectangleMinusRegularProps>;
export default LanRectangleMinusRegular;
