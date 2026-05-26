import React from 'react';

export interface LanRectangleProRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleProRegular: React.FC<LanRectangleProRegularProps>;
export default LanRectangleProRegular;
