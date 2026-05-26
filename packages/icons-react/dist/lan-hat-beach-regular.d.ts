import React from 'react';

export interface LanHatBeachRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatBeachRegular: React.FC<LanHatBeachRegularProps>;
export default LanHatBeachRegular;
