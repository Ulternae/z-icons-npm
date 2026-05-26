import React from 'react';

export interface LanThetaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThetaRegular: React.FC<LanThetaRegularProps>;
export default LanThetaRegular;
