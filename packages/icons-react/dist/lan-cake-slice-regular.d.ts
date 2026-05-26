import React from 'react';

export interface LanCakeSliceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCakeSliceRegular: React.FC<LanCakeSliceRegularProps>;
export default LanCakeSliceRegular;
