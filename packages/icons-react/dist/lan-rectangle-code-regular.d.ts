import React from 'react';

export interface LanRectangleCodeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleCodeRegular: React.FC<LanRectangleCodeRegularProps>;
export default LanRectangleCodeRegular;
