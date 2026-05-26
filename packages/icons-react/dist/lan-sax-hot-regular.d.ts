import React from 'react';

export interface LanSaxHotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSaxHotRegular: React.FC<LanSaxHotRegularProps>;
export default LanSaxHotRegular;
