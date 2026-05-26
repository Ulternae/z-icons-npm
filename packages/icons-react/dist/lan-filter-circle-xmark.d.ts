import React from 'react';

export interface LanFilterCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilterCircleXmark: React.FC<LanFilterCircleXmarkProps>;
export default LanFilterCircleXmark;
