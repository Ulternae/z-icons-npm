import React from 'react';

export interface LanOctagonXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonXmark: React.FC<LanOctagonXmarkProps>;
export default LanOctagonXmark;
