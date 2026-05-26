import React from 'react';

export interface LanRamRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRamRegular: React.FC<LanRamRegularProps>;
export default LanRamRegular;
