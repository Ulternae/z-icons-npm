import React from 'react';

export interface LanPlugCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlugCircleXmark: React.FC<LanPlugCircleXmarkProps>;
export default LanPlugCircleXmark;
