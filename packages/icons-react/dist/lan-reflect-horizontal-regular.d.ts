import React from 'react';

export interface LanReflectHorizontalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanReflectHorizontalRegular: React.FC<LanReflectHorizontalRegularProps>;
export default LanReflectHorizontalRegular;
