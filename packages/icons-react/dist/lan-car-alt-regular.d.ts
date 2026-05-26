import React from 'react';

export interface LanCarAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarAltRegular: React.FC<LanCarAltRegularProps>;
export default LanCarAltRegular;
