import React from 'react';

export interface LanCircleZRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleZRegular: React.FC<LanCircleZRegularProps>;
export default LanCircleZRegular;
