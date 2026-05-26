import React from 'react';

export interface LanCircleInfoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleInfoRegular: React.FC<LanCircleInfoRegularProps>;
export default LanCircleInfoRegular;
