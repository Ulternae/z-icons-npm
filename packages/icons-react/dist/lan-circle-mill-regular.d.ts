import React from 'react';

export interface LanCircleMillRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleMillRegular: React.FC<LanCircleMillRegularProps>;
export default LanCircleMillRegular;
