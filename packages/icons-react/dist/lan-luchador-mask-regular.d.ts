import React from 'react';

export interface LanLuchadorMaskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLuchadorMaskRegular: React.FC<LanLuchadorMaskRegularProps>;
export default LanLuchadorMaskRegular;
