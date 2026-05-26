import React from 'react';

export interface LanBringFrontRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBringFrontRegular: React.FC<LanBringFrontRegularProps>;
export default LanBringFrontRegular;
