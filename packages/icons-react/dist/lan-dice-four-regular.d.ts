import React from 'react';

export interface LanDiceFourRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceFourRegular: React.FC<LanDiceFourRegularProps>;
export default LanDiceFourRegular;
