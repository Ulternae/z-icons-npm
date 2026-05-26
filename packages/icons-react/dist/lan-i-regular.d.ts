import React from 'react';

export interface LanIRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIRegular: React.FC<LanIRegularProps>;
export default LanIRegular;
