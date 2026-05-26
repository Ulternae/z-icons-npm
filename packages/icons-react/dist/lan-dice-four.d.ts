import React from 'react';

export interface LanDiceFourProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceFour: React.FC<LanDiceFourProps>;
export default LanDiceFour;
