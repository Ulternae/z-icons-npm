import React from 'react';

export interface LanNotdefProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotdef: React.FC<LanNotdefProps>;
export default LanNotdef;
