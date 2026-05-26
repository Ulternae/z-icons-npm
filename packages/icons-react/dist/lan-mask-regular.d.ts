import React from 'react';

export interface LanMaskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMaskRegular: React.FC<LanMaskRegularProps>;
export default LanMaskRegular;
