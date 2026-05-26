import React from 'react';

export interface LanCaravanAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaravanAltRegular: React.FC<LanCaravanAltRegularProps>;
export default LanCaravanAltRegular;
