import React from 'react';

export interface LanZapRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanZapRegular: React.FC<LanZapRegularProps>;
export default LanZapRegular;
