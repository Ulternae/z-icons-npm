import React from 'react';

export interface LanReflectVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanReflectVertical: React.FC<LanReflectVerticalProps>;
export default LanReflectVertical;
