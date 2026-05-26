import React from 'react';

export interface LanRectangleNewRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleNewRegular: React.FC<LanRectangleNewRegularProps>;
export default LanRectangleNewRegular;
