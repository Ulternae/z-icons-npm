import React from 'react';

export interface LanPersonCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCircleXmark: React.FC<LanPersonCircleXmarkProps>;
export default LanPersonCircleXmark;
