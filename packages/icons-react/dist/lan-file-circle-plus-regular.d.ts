import React from 'react';

export interface LanFileCirclePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCirclePlusRegular: React.FC<LanFileCirclePlusRegularProps>;
export default LanFileCirclePlusRegular;
