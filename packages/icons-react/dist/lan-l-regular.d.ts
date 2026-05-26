import React from 'react';

export interface LanLRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLRegular: React.FC<LanLRegularProps>;
export default LanLRegular;
