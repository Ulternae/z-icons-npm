import React from 'react';

export interface LanCircleYRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleYRegular: React.FC<LanCircleYRegularProps>;
export default LanCircleYRegular;
