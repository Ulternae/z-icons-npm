import React from 'react';

export interface LanCannabisRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCannabisRegular: React.FC<LanCannabisRegularProps>;
export default LanCannabisRegular;
