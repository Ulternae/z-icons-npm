import React from 'react';

export interface LanDolphinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDolphinRegular: React.FC<LanDolphinRegularProps>;
export default LanDolphinRegular;
