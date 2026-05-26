import React from 'react';

export interface LanGlobeSnowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobeSnow: React.FC<LanGlobeSnowProps>;
export default LanGlobeSnow;
