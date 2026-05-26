import React from 'react';

export interface LanRectangleNAProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleNA: React.FC<LanRectangleNAProps>;
export default LanRectangleNA;
