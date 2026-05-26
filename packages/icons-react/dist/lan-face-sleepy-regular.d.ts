import React from 'react';

export interface LanFaceSleepyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSleepyRegular: React.FC<LanFaceSleepyRegularProps>;
export default LanFaceSleepyRegular;
