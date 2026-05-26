import React from 'react';

export interface LanSnowmanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowmanRegular: React.FC<LanSnowmanRegularProps>;
export default LanSnowmanRegular;
