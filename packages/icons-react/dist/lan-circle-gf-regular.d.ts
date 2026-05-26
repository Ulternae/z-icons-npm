import React from 'react';

export interface LanCircleGfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleGfRegular: React.FC<LanCircleGfRegularProps>;
export default LanCircleGfRegular;
