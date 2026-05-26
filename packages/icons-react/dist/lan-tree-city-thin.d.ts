import React from 'react';

export interface LanTreeCityThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeCityThin: React.FC<LanTreeCityThinProps>;
export default LanTreeCityThin;
