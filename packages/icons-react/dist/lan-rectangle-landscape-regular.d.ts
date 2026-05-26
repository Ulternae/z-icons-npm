import React from 'react';

export interface LanRectangleLandscapeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleLandscapeRegular: React.FC<LanRectangleLandscapeRegularProps>;
export default LanRectangleLandscapeRegular;
