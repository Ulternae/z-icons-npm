import React from 'react';

export interface LanHardHatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHardHatRegular: React.FC<LanHardHatRegularProps>;
export default LanHardHatRegular;
