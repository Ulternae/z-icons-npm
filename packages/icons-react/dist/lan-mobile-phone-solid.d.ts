import React from 'react';

export interface LanMobilePhoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobilePhoneSolid: React.FC<LanMobilePhoneSolidProps>;
export default LanMobilePhoneSolid;
