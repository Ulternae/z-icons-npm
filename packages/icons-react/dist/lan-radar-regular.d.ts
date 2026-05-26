import React from 'react';

export interface LanRadarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRadarRegular: React.FC<LanRadarRegularProps>;
export default LanRadarRegular;
