import React from 'react';

export interface LanRectanglesMixedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectanglesMixed: React.FC<LanRectanglesMixedProps>;
export default LanRectanglesMixed;
