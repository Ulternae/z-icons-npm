import React from 'react';

export interface LanMobileSignalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileSignalRegular: React.FC<LanMobileSignalRegularProps>;
export default LanMobileSignalRegular;
