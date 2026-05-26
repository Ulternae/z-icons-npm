import React from 'react';

export interface LanGearCodeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGearCodeRegular: React.FC<LanGearCodeRegularProps>;
export default LanGearCodeRegular;
