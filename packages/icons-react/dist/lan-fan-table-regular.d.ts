import React from 'react';

export interface LanFanTableRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFanTableRegular: React.FC<LanFanTableRegularProps>;
export default LanFanTableRegular;
