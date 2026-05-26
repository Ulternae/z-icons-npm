import React from 'react';

export interface LanPersonCirclePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCirclePlusRegular: React.FC<LanPersonCirclePlusRegularProps>;
export default LanPersonCirclePlusRegular;
