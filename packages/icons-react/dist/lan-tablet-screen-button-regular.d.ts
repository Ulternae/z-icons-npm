import React from 'react';

export interface LanTabletScreenButtonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTabletScreenButtonRegular: React.FC<LanTabletScreenButtonRegularProps>;
export default LanTabletScreenButtonRegular;
