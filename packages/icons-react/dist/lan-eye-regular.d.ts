import React from 'react';

export interface LanEyeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyeRegular: React.FC<LanEyeRegularProps>;
export default LanEyeRegular;
