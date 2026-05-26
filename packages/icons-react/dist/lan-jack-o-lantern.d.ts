import React from 'react';

export interface LanJackOLanternProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJackOLantern: React.FC<LanJackOLanternProps>;
export default LanJackOLantern;
