import React from 'react';

export interface LanEjectRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEjectRegular: React.FC<LanEjectRegularProps>;
export default LanEjectRegular;
