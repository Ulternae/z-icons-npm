import React from 'react';

export interface LanRectangleNARegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleNARegular: React.FC<LanRectangleNARegularProps>;
export default LanRectangleNARegular;
