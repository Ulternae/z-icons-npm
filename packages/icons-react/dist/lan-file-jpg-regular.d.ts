import React from 'react';

export interface LanFileJpgRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileJpgRegular: React.FC<LanFileJpgRegularProps>;
export default LanFileJpgRegular;
