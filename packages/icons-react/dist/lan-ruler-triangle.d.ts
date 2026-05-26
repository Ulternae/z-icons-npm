import React from 'react';

export interface LanRulerTriangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRulerTriangle: React.FC<LanRulerTriangleProps>;
export default LanRulerTriangle;
