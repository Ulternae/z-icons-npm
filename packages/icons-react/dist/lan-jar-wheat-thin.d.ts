import React from 'react';

export interface LanJarWheatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJarWheatThin: React.FC<LanJarWheatThinProps>;
export default LanJarWheatThin;
