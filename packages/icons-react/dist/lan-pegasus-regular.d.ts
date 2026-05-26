import React from 'react';

export interface LanPegasusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPegasusRegular: React.FC<LanPegasusRegularProps>;
export default LanPegasusRegular;
