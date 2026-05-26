import React from 'react';

export interface LanReflectBothProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanReflectBoth: React.FC<LanReflectBothProps>;
export default LanReflectBoth;
