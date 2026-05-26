import React from 'react';

export interface LanImageCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageCircleXmark: React.FC<LanImageCircleXmarkProps>;
export default LanImageCircleXmark;
