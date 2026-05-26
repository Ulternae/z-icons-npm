import React from 'react';

export interface LanMobileScreenButtonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileScreenButtonRegular: React.FC<LanMobileScreenButtonRegularProps>;
export default LanMobileScreenButtonRegular;
