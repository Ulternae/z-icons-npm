import React from 'react';

export interface LanCircleMRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleMRegular: React.FC<LanCircleMRegularProps>;
export default LanCircleMRegular;
