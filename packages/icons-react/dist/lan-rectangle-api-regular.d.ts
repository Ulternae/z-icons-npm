import React from 'react';

export interface LanRectangleApiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleApiRegular: React.FC<LanRectangleApiRegularProps>;
export default LanRectangleApiRegular;
