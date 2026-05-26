import React from 'react';

export interface LanHotdogRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHotdogRegular: React.FC<LanHotdogRegularProps>;
export default LanHotdogRegular;
