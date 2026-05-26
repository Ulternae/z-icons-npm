import React from 'react';

export interface LanBreadSliceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBreadSliceRegular: React.FC<LanBreadSliceRegularProps>;
export default LanBreadSliceRegular;
