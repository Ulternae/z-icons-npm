import React from 'react';

export interface LanRectanglePortraitThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectanglePortraitThin: React.FC<LanRectanglePortraitThinProps>;
export default LanRectanglePortraitThin;
