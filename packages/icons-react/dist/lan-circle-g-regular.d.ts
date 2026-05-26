import React from 'react';

export interface LanCircleGRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleGRegular: React.FC<LanCircleGRegularProps>;
export default LanCircleGRegular;
