import React from 'react';

export interface LanTriangleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTriangleRegular: React.FC<LanTriangleRegularProps>;
export default LanTriangleRegular;
