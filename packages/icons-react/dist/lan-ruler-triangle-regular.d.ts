import React from 'react';

export interface LanRulerTriangleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRulerTriangleRegular: React.FC<LanRulerTriangleRegularProps>;
export default LanRulerTriangleRegular;
