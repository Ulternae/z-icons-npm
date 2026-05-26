import React from 'react';

export interface LanCircleTengeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleTengeRegular: React.FC<LanCircleTengeRegularProps>;
export default LanCircleTengeRegular;
