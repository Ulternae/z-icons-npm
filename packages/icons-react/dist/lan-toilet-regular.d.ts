import React from 'react';

export interface LanToiletRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletRegular: React.FC<LanToiletRegularProps>;
export default LanToiletRegular;
