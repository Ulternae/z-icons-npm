import React from 'react';

export interface LanMountainRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMountainRegular: React.FC<LanMountainRegularProps>;
export default LanMountainRegular;
