import React from 'react';

export interface LanBreadLoafRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBreadLoafRegular: React.FC<LanBreadLoafRegularProps>;
export default LanBreadLoafRegular;
