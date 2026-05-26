import React from 'react';

export interface LanFaceSleepingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSleepingRegular: React.FC<LanFaceSleepingRegularProps>;
export default LanFaceSleepingRegular;
