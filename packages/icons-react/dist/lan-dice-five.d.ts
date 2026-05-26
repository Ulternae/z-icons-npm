import React from 'react';

export interface LanDiceFiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceFive: React.FC<LanDiceFiveProps>;
export default LanDiceFive;
