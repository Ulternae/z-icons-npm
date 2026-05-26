import React from 'react';

export interface LanRectangleAdThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleAdThin: React.FC<LanRectangleAdThinProps>;
export default LanRectangleAdThin;
