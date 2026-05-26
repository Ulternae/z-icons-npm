import React from 'react';

export interface LanRectangleAdRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleAdRegular: React.FC<LanRectangleAdRegularProps>;
export default LanRectangleAdRegular;
