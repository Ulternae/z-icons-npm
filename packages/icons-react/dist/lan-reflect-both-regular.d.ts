import React from 'react';

export interface LanReflectBothRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanReflectBothRegular: React.FC<LanReflectBothRegularProps>;
export default LanReflectBothRegular;
