import React from 'react';

export interface LanFileCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCircleXmark: React.FC<LanFileCircleXmarkProps>;
export default LanFileCircleXmark;
