import React from 'react';

export interface LanReflectVerticalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanReflectVerticalRegular: React.FC<LanReflectVerticalRegularProps>;
export default LanReflectVerticalRegular;
