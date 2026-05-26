import React from 'react';

export interface LanPersonSnowmobilingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSnowmobiling: React.FC<LanPersonSnowmobilingProps>;
export default LanPersonSnowmobiling;
