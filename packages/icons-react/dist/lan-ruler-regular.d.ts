import React from 'react';

export interface LanRulerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRulerRegular: React.FC<LanRulerRegularProps>;
export default LanRulerRegular;
