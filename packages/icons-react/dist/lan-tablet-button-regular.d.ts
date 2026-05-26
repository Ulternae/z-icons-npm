import React from 'react';

export interface LanTabletButtonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTabletButtonRegular: React.FC<LanTabletButtonRegularProps>;
export default LanTabletButtonRegular;
