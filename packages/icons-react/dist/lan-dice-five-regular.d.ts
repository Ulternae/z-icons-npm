import React from 'react';

export interface LanDiceFiveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceFiveRegular: React.FC<LanDiceFiveRegularProps>;
export default LanDiceFiveRegular;
