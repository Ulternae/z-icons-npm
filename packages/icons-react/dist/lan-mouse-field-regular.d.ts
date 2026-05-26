import React from 'react';

export interface LanMouseFieldRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMouseFieldRegular: React.FC<LanMouseFieldRegularProps>;
export default LanMouseFieldRegular;
