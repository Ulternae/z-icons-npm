import React from 'react';

export interface LanHockeyMaskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHockeyMaskRegular: React.FC<LanHockeyMaskRegularProps>;
export default LanHockeyMaskRegular;
