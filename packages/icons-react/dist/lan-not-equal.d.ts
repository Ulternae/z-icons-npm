import React from 'react';

export interface LanNotEqualProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotEqual: React.FC<LanNotEqualProps>;
export default LanNotEqual;
