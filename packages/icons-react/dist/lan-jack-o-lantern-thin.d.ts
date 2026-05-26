import React from 'react';

export interface LanJackOLanternThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJackOLanternThin: React.FC<LanJackOLanternThinProps>;
export default LanJackOLanternThin;
