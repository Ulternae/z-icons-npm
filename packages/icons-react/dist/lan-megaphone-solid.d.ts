import React from 'react';

export interface LanMegaphoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMegaphoneSolid: React.FC<LanMegaphoneSolidProps>;
export default LanMegaphoneSolid;
