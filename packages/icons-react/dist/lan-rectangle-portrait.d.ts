import React from 'react';

export interface LanRectanglePortraitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectanglePortrait: React.FC<LanRectanglePortraitProps>;
export default LanRectanglePortrait;
