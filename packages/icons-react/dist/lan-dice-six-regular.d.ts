import React from 'react';

export interface LanDiceSixRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceSixRegular: React.FC<LanDiceSixRegularProps>;
export default LanDiceSixRegular;
