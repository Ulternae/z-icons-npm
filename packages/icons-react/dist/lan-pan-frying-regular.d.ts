import React from 'react';

export interface LanPanFryingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPanFryingRegular: React.FC<LanPanFryingRegularProps>;
export default LanPanFryingRegular;
