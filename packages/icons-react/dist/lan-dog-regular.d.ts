import React from 'react';

export interface LanDogRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDogRegular: React.FC<LanDogRegularProps>;
export default LanDogRegular;
