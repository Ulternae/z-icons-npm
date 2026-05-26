import React from 'react';

export interface LanMicroscopeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicroscopeRegular: React.FC<LanMicroscopeRegularProps>;
export default LanMicroscopeRegular;
