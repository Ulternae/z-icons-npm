import React from 'react';

export interface LanRectanglesMixedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectanglesMixedRegular: React.FC<LanRectanglesMixedRegularProps>;
export default LanRectanglesMixedRegular;
