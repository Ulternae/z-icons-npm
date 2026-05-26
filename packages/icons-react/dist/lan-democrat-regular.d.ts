import React from 'react';

export interface LanDemocratRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDemocratRegular: React.FC<LanDemocratRegularProps>;
export default LanDemocratRegular;
