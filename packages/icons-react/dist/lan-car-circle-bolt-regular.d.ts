import React from 'react';

export interface LanCarCircleBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarCircleBoltRegular: React.FC<LanCarCircleBoltRegularProps>;
export default LanCarCircleBoltRegular;
