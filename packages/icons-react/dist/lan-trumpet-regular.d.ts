import React from 'react';

export interface LanTrumpetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrumpetRegular: React.FC<LanTrumpetRegularProps>;
export default LanTrumpetRegular;
