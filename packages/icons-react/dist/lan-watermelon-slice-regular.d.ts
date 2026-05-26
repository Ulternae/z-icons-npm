import React from 'react';

export interface LanWatermelonSliceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWatermelonSliceRegular: React.FC<LanWatermelonSliceRegularProps>;
export default LanWatermelonSliceRegular;
