import React from 'react';

export interface LanRectanglePortraitRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectanglePortraitRegular: React.FC<LanRectanglePortraitRegularProps>;
export default LanRectanglePortraitRegular;
