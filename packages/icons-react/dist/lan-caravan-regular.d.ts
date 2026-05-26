import React from 'react';

export interface LanCaravanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaravanRegular: React.FC<LanCaravanRegularProps>;
export default LanCaravanRegular;
