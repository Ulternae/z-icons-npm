import React from 'react';

export interface LanJackOLanternSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJackOLanternSolid: React.FC<LanJackOLanternSolidProps>;
export default LanJackOLanternSolid;
