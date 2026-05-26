import React from 'react';

export interface LanHouseDayRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseDayRegular: React.FC<LanHouseDayRegularProps>;
export default LanHouseDayRegular;
