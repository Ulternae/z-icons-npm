import React from 'react';

export interface LanPillsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPillsRegular: React.FC<LanPillsRegularProps>;
export default LanPillsRegular;
