import React from 'react';

export interface LanWindsockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindsockRegular: React.FC<LanWindsockRegularProps>;
export default LanWindsockRegular;
