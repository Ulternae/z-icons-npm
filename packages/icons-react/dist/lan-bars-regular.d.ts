import React from 'react';

export interface LanBarsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarsRegular: React.FC<LanBarsRegularProps>;
export default LanBarsRegular;
