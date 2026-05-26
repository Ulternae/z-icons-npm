import React from 'react';

export interface LanMelonSliceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMelonSliceRegular: React.FC<LanMelonSliceRegularProps>;
export default LanMelonSliceRegular;
