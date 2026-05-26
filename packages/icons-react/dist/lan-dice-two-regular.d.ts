import React from 'react';

export interface LanDiceTwoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceTwoRegular: React.FC<LanDiceTwoRegularProps>;
export default LanDiceTwoRegular;
