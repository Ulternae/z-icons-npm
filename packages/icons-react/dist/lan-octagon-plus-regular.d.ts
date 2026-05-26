import React from 'react';

export interface LanOctagonPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonPlusRegular: React.FC<LanOctagonPlusRegularProps>;
export default LanOctagonPlusRegular;
