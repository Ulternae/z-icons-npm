import React from 'react';

export interface LanJarWheatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJarWheat: React.FC<LanJarWheatProps>;
export default LanJarWheat;
