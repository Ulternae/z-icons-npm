import React from 'react';

export interface LanTomatoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTomatoRegular: React.FC<LanTomatoRegularProps>;
export default LanTomatoRegular;
