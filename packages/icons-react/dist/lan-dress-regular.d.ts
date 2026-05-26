import React from 'react';

export interface LanDressRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDressRegular: React.FC<LanDressRegularProps>;
export default LanDressRegular;
