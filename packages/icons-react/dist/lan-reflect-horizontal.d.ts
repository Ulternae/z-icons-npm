import React from 'react';

export interface LanReflectHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanReflectHorizontal: React.FC<LanReflectHorizontalProps>;
export default LanReflectHorizontal;
