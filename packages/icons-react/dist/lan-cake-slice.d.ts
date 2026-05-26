import React from 'react';

export interface LanCakeSliceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCakeSlice: React.FC<LanCakeSliceProps>;
export default LanCakeSlice;
