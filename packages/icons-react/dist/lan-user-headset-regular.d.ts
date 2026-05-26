import React from 'react';

export interface LanUserHeadsetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserHeadsetRegular: React.FC<LanUserHeadsetRegularProps>;
export default LanUserHeadsetRegular;
