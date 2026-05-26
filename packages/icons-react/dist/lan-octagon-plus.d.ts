import React from 'react';

export interface LanOctagonPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonPlus: React.FC<LanOctagonPlusProps>;
export default LanOctagonPlus;
