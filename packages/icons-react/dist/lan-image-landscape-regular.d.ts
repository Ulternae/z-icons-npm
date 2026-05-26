import React from 'react';

export interface LanImageLandscapeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageLandscapeRegular: React.FC<LanImageLandscapeRegularProps>;
export default LanImageLandscapeRegular;
