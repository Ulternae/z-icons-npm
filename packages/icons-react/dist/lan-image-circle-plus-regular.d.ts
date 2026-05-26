import React from 'react';

export interface LanImageCirclePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageCirclePlusRegular: React.FC<LanImageCirclePlusRegularProps>;
export default LanImageCirclePlusRegular;
