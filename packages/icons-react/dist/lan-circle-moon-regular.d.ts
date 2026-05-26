import React from 'react';

export interface LanCircleMoonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleMoonRegular: React.FC<LanCircleMoonRegularProps>;
export default LanCircleMoonRegular;
