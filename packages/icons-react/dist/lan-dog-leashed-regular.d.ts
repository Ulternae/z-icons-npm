import React from 'react';

export interface LanDogLeashedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDogLeashedRegular: React.FC<LanDogLeashedRegularProps>;
export default LanDogLeashedRegular;
