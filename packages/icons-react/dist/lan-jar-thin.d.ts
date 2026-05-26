import React from 'react';

export interface LanJarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJarThin: React.FC<LanJarThinProps>;
export default LanJarThin;
