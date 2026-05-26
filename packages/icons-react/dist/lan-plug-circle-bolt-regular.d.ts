import React from 'react';

export interface LanPlugCircleBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlugCircleBoltRegular: React.FC<LanPlugCircleBoltRegularProps>;
export default LanPlugCircleBoltRegular;
