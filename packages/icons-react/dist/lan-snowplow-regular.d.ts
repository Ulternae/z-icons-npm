import React from 'react';

export interface LanSnowplowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowplowRegular: React.FC<LanSnowplowRegularProps>;
export default LanSnowplowRegular;
