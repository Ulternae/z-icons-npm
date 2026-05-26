import React from 'react';

export interface LanRectanglesMixedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectanglesMixedThin: React.FC<LanRectanglesMixedThinProps>;
export default LanRectanglesMixedThin;
