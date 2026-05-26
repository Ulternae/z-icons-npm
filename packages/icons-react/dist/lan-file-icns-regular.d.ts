import React from 'react';

export interface LanFileIcnsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileIcnsRegular: React.FC<LanFileIcnsRegularProps>;
export default LanFileIcnsRegular;
