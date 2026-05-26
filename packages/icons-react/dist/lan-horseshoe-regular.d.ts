import React from 'react';

export interface LanHorseshoeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHorseshoeRegular: React.FC<LanHorseshoeRegularProps>;
export default LanHorseshoeRegular;
