import React from 'react';

export interface LanDresserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDresserRegular: React.FC<LanDresserRegularProps>;
export default LanDresserRegular;
