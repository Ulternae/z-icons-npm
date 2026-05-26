import React from 'react';

export interface LanCarSideBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarSideBoltRegular: React.FC<LanCarSideBoltRegularProps>;
export default LanCarSideBoltRegular;
