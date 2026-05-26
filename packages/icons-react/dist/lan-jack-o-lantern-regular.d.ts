import React from 'react';

export interface LanJackOLanternRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJackOLanternRegular: React.FC<LanJackOLanternRegularProps>;
export default LanJackOLanternRegular;
