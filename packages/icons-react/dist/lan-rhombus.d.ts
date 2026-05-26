import React from 'react';

export interface LanRhombusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRhombus: React.FC<LanRhombusProps>;
export default LanRhombus;
