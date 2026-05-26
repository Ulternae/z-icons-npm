import React from 'react';

export interface LanArrowArcheryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowArchery: React.FC<LanArrowArcheryProps>;
export default LanArrowArchery;
