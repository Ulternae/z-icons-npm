import React from 'react';

export interface LanPretzelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPretzelRegular: React.FC<LanPretzelRegularProps>;
export default LanPretzelRegular;
