import React from 'react';

export interface LanGlobeSnowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobeSnowRegular: React.FC<LanGlobeSnowRegularProps>;
export default LanGlobeSnowRegular;
